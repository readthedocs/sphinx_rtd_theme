# Copyright (c) 2013 Michael Dowling <mtdowling@gmail.com>
# Copyright (c) 2017 Jared Dillard <jared.dillard@gmail.com>
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.

import xml.etree.ElementTree as ET
from sphinx.writers.html import HTMLTranslator


def setup(app):
    """Setup context events to the sitemap builder"""
    app.connect('html-page-context', add_html_link)
    app.connect('build-finished', create_sitemap)
    app.set_translator('html', HTMLTranslator)
    app.sitemap_links = []


def add_html_link(app, pagename, templatename, context, doctree):
    """As each page is built, collect page names for the sitemap"""
    base_url = 'http://www.landoop.com/docs/lenses/'
    if base_url:
        """Antwnis: Make sure we bring in only the latest and not 1.0 and 1.1 etc and we skip non accessible pages"""
        if (pagename != 'empty') and (pagename != 'search') and (pagename != 'genindex') and ('1.' not in pagename) and ('_themes' not in pagename):
            app.sitemap_links.append(base_url + pagename + ".html")


def create_sitemap(app, exception):
    """Generates the sitemap.xml from the collected HTML page links"""
    if (not app.sitemap_links):
        return

    filename = app.outdir + "/sitemap.xml"
    print("Generating sitemap.xml in %s" % filename)

    root = ET.Element("urlset")
    root.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")
    root.set("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance")
    root.set("xsi:schemaLocation", "http://www.sitemaps.org/schemas/sitemap/0.9 \
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd")

    for link in app.sitemap_links:
        url = ET.SubElement(root, "url")
        ET.SubElement(url, "loc").text = link

    ET.ElementTree(root).write(filename,
                               xml_declaration=True,
                               encoding='utf-8',
                               method="xml")
