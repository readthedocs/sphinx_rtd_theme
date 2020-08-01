*************
Configuration
*************

Theme options
=============

The following options can be defined in your project's ``conf.py`` file, using
the :confval:`html_theme_options <sphinx:html_theme_options>` configuration option.

For example:

.. code:: python

    html_theme_options = {
        'canonical_url': '',
        'analytics_id': 'UA-XXXXXXX-1',  #  Provided by Google in your dashboard
        'logo_only': False,
        'display_version': True,
        'prev_next_buttons_location': 'bottom',
        'style_external_links': False,
        'vcs_pageview_mode': '',
        'style_nav_header_background': 'white',
        # Toc options
        'collapse_navigation': True,
        'sticky_navigation': True,
        'navigation_depth': 4,
        'includehidden': True,
        'titles_only': False
    }

Table of contents options
-------------------------

The following options change how :rst:dir:`sphinx:toctree` directives generate
documentation navigation.

.. confval:: collapse_navigation

    :type: boolean
    :default: ``True``

    With this enabled, navigation entries are not expandable -- the ``[+]``
    icons next to each entry are removed.

.. confval:: sticky_navigation

    :type: boolean
    :default: ``True``

    Scroll the navigation with the main page content as you scroll the page.

.. confval:: navigation_depth

    :type: integer
    :default: ``4``

    The maximum depth of the table of contents tree. Set
    this to ``-1`` to allow unlimited depth.

.. confval:: includehidden

    :type: boolean
    :default: ``True``

    Specifies if the navigation includes hidden table(s) of contents -- that is,
    any :rst:dir:`sphinx:toctree` directive that is marked with the ``:hidden:``
    option.

.. confval:: titles_only

    :type: boolean
    :default: False

    When enabled, page subheadings are not included in the
    navigation.

.. note::
    Setting :confval:`collapse_navigation` to ``False`` and using a high value
    for :confval:`navigation_depth` on projects with many files and a deep file
    structure can cause long compilation times and can result in HTML files that
    are significantly larger in file size.

.. _table of contents configuration options: http://www.sphinx-doc.org/en/stable/templating.html#toctree


..
    TODO
    .
    HTML context options
    ~~~~~~~~~~~~~~~~~~~~


Miscellaneous options
---------------------

.. confval:: analytics_id

    :type: string

    If specified, Google Analytics' javascript is included in your pages.
    Set the value to the ID provided to you by google (like ``UA-XXXXXXX``).

.. confval:: canonical_url

    :type: URL

    This will specify a `canonical URL`_ meta link element to tell search
    engines which URL should be ranked as the primary URL for your
    documentation. This is important if you have multiple URLs that your
    documentation is available through. The URL points to the root path of the
    documentation and requires a trailing slash.

.. confval:: display_version

    :type: boolean
    :default: ``True``

    If ``True``, the version number is shown at the top of the sidebar.

.. confval:: logo_only

    :type: boolean
    :default: ``False``

    Only display the logo image, do not display the project name at the top of
    the sidebar

.. confval:: prev_next_buttons_location

    :type: string
    :default: ``bottom``

    Location to display :guilabel:`Next` and :guilabel:`Previous` buttons. This
    can be either ``bottom``, ``top``, ``both`` , or ``None``.

.. confval:: style_external_links

    :type: boolean
    :default: ``False``

    Add an icon next to external links.

.. confval:: vcs_pageview_mode

    :type: string
    :default: ``blob`` or ``view``

    Changes how to view files when using ``display_github``, ``display_gitlab``,
    etc.  When using GitHub or GitLab this can be: ``blob`` (default), ``edit``,
    or ``raw``. On Bitbucket, this can be either: ``view`` (default) or
    ``edit``.

.. confval:: style_nav_header_background

    :type: string
    :default: ``#2980B9``

    Changes the background of the search area in the navigation bar. The value
    can be anything valid in a CSS `background` property. 

.. _canonical URL: https://en.wikipedia.org/wiki/Canonical_link_element


File-wide metadata
==================

The following options can be used as :ref:`file-wide metadata
<sphinx:metadata>`:

.. confval:: github_url

    Force the :guilabel:`Edit on GitHub` button to use the configured URL.

.. confval:: bitbucket_url

    Force the :guilabel:`Edit on Bitbucket` button to use the configured URL.

.. confval:: gitlab_url

    Force the :guilabel:`Edit on GitLab` button to use the configured URL.


Other configuration
===================

Adding a logo
-------------

Using the Sphinx standard option :py:confval:`html_logo <sphinx:html_logo>`,
you can set an image file to be used as a logo at the top of the sidebar. The
theme option :py:confval:`logo_only` also allows for *only* the logo to be shown
at the top of the sidebar.

Adding custom CSS or Javascript
-------------------------------

Adding custom CSS or Javascript can help you alter the look and feel of this
theme without forking the theme for local use.

In order to add custom CSS or Javascript without disrupting the existing theme
files, you can :doc:`add files to be included in your documentation output
<rtd:guides/adding-custom-css>`.

How the table of contents displays
==================================

Currently the left menu will build based upon any ``toctree`` directives defined
in your source files.  It outputs 4 levels of depth by default, to allow for
quick navigation through topics. If no TOC trees are defined, Sphinx's default
behavior is to use the page headings instead.

It's important to note that if you don't follow the same styling for your reST
headings across your documents, the TOC tree will build incorrectly, and the
resulting menu might not show the correct depth when it renders.

Also note that by default the table of contents is set with
``includehidden=True``. This allows you to set a hidden TOC in your index file
with the :ref:`:hidden: <sphinx:toctree-directive>` property that will allow you
to build a TOC without it rendering in your index.

By default, the navigation will "stick" to the screen as you scroll. However if
your TOC is not tall enough, it will revert to static positioning. To disable the
sticky navigation altogether, change the :confval:`sticky_navigation` theme option.
