# -*- coding: utf-8 -*-

import sys
import os
import re

sys.path.append(os.path.abspath('..'))
sys.path.append(os.path.abspath('./demo/'))

from sphinx.locale import _

from sphinx_rtd_theme import __version__


project = u'Read the Docs Sphinx Theme'
slug = re.sub(r'\W+', '-', project.lower())
version = __version__
release = __version__
author = u'Dave Snider, Read the Docs, Inc. & contributors'
copyright = author
language = 'en'

extensions = [
    'sphinx.ext.intersphinx',
    'sphinx.ext.autodoc',
    'sphinx.ext.mathjax',
    'sphinx.ext.viewcode',
    'sphinxcontrib.httpdomain',
]

templates_path = ['_templates']
source_suffix = '.rst'
exclude_patterns = []

master_doc = 'index'
suppress_warnings = ['image.nonlocal_uri']
pygments_style = 'default'

intersphinx_mapping = {
    'rtd': ('https://docs.readthedocs.io/en/latest/', None),
    'sphinx': ('http://www.sphinx-doc.org/en/stable/', None),
}

html_theme = 'sphinx_rtd_theme'
html_theme_options = {
    'logo_only': True
}
html_theme_path = ["../.."]
html_logo = "demo/static/logo-wordmark-light.svg"
html_show_sourcelink = True

htmlhelp_basename = slug

latex_documents = [
  ('index', '{0}.tex'.format(slug), project, author, 'manual'),
]

man_pages = [
    ('index', slug, project, [author], 1)
]

texinfo_documents = [
  ('index', slug, project, author, slug, project, 'Miscellaneous'),
]


# Extensions to theme docs
def setup(app):
    from sphinx.domains.python import PyField
    from sphinx.util.docfields import Field

    app.add_object_type(
        'confval',
        'confval',
        objname='configuration value',
        indextemplate='pair: %s; configuration value',
        doc_field_types=[
            PyField(
                'type',
                label=_('Type'),
                has_arg=False,
                names=('type',),
                bodyrolename='class'
            ),
            Field(
                'default',
                label=_('Default'),
                has_arg=False,
                names=('default',),
            ),
        ]
    )
