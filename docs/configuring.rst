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
        'analytics_id': 'G-XXXXXXXXXX',  #  Provided by Google in your dashboard
        'analytics_anonymize_ip': False,
        'logo_only': False,
        'prev_next_buttons_location': 'bottom',
        'style_external_links': False,
        'vcs_pageview_mode': '',
        'style_nav_header_background': 'white',
        'flyout_display': 'hidden',
        'version_selector': True,
        'language_selector': True,
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

    With this enabled, navigation entries are not expandable -- the ``[+]``
    icons next to each entry are removed.

    :type: boolean
    :default: ``True``

    .. note::
        Setting :confval:`collapse_navigation` to ``False`` and using a high value
        for :confval:`navigation_depth` on projects with many files and a deep file
        structure can cause long compilation times and can result in HTML files that
        are significantly larger in file size.

.. confval:: sticky_navigation

    Scroll the navigation with the main page content as you scroll the page.

    :type: boolean
    :default: ``True``

.. confval:: navigation_depth

    The maximum depth of the table of contents tree. Set
    this to ``-1`` to allow unlimited depth.

    :type: integer
    :default: ``4``

.. confval:: includehidden

    Specifies if the navigation includes hidden table(s) of contents -- that is,
    any :rst:dir:`sphinx:toctree` directive that is marked with the ``:hidden:``
    option.

    :type: boolean
    :default: ``True``

.. confval:: titles_only

    When enabled, page subheadings are not included in the
    navigation.

    :type: boolean
    :default: False

.. _table of contents configuration options: http://www.sphinx-doc.org/en/stable/templating.html#toctree


..
    TODO
    .
    HTML context options
    ~~~~~~~~~~~~~~~~~~~~


Miscellaneous options
---------------------

.. confval:: analytics_id

    If specified, Google Analytics' `gtag.js`_ is included in your pages.
    Set the value to the ID provided to you by google (like ``UA-XXXXXXX`` or ``G-XXXXXXXXXX``).

    :type: string

    .. deprecated:: 3.0.0
       The ``analytics_id`` option is deprecated, use the sphinxcontrib-googleanalytics_ extension instead.

    .. _gtag.js: https://developers.google.com/gtagjs
    .. _sphinxcontrib-googleanalytics: https://pypi.org/project/sphinxcontrib-googleanalytics/

.. confval:: analytics_anonymize_ip

    Anonymize visitor IP addresses in Google Analytics.

   :type: boolean
   :default: ``False``

   .. deprecated:: 3.0.0
       The ``analytics_anonymize_ip`` option is deprecated, use the sphinxcontrib-googleanalytics_ extension instead.

.. confval:: canonical_url

    This will specify a `canonical URL`_ meta link element to tell search
    engines which URL should be ranked as the primary URL for your
    documentation. This is important if you have multiple URLs that your
    documentation is available through. The URL points to the root path of the
    documentation and requires a trailing slash.

    :type: URL

    .. deprecated:: 0.6.0

       Use :confval:`sphinx:html_baseurl` instead.

    .. _canonical URL: https://en.wikipedia.org/wiki/Canonical_link_element

.. confval:: display_version

    If ``True``, the version number is shown at the top of the sidebar.

    :type: boolean
    :default: ``False``

    .. deprecated:: 3.0.0

       Removed in favor of ``version_selector`` and ``language_selector``.

.. confval:: logo_only

    Only display the logo image, do not display the project name at the top of
    the sidebar

    :type: boolean
    :default: ``False``

.. confval:: prev_next_buttons_location

    Location to display :guilabel:`Next` and :guilabel:`Previous` buttons. This
    can be either ``bottom``, ``top``, ``both`` , or ``None``.

    :type: string
    :default: ``bottom``

.. confval:: style_external_links

    Add an icon next to external links.

    :type: boolean
    :default: ``False``

.. confval:: vcs_pageview_mode

    Changes how to view files when using ``display_github``, ``display_gitlab``,
    etc.  When using GitHub or GitLab this can be: ``blob`` (default), ``edit``,
    or ``raw``. On Bitbucket, this can be either: ``view`` (default) or
    ``edit``.

    :type: string
    :default: ``blob`` or ``view``

.. confval:: style_nav_header_background

    Changes the background of the search area in the navigation bar. The value
    can be anything valid in a CSS `background` property.

    :type: string
    :default: ``#2980B9``

.. confval:: flyout_display

    Specify how to display the flyout (language and version selector).
    This can be either ``attached`` or ``hidden``.
    ``attached`` means that it will show the flyout in the bottom of the sidebar.
    You will need to disable the default `Read the Docs flyout <https://docs.readthedocs.io/en/stable/flyout-menu.html>`_ in order to not have 2 flyouts showing.

    :type: str
    :default: ``hidden``

.. confval:: version_selector

    Display a version selector below the title.
    This feature makes usage of `Read the Docs Addons <https://docs.readthedocs.io/page/addons.html>`_ for this,
    so it's required the documentation to be hosted on Read the Docs.
    It only appears when there are more than 1 active version.

    :type: boolean
    :default: ``True``

.. confval:: language_selector

    Display a language selector below the title.
    This feature makes usage of `Read the Docs Addons <https://docs.readthedocs.io/page/addons.html>`_ for this,
    so it's required the documentation to be served on Read the Docs.
    It only appears when there is more than 1 active language.

    :type: boolean
    :default: ``True``


File-wide metadata
==================

The following features are confugured per file in :ref:`file-wide metadata
<sphinx:metadata>`, but they could also be set for all files using
:ref:`html_context <spinx:html_context>` setting.

Enable "Edit on ..." links
--------------------------

To enable "Edit on GitHub" link, you can add ``github_url`` option to the
metadata of specific page, or use ``html_context`` to make this option set
for all pages.

For example:

.. code:: python

    html_context = {
        'github_url': 'https://github.com/readthedocs/sphinx_rtd_theme'
    }

Note that such URLs are static.

.. confval:: github_url

    Force the :guilabel:`Edit on GitHub` button to use the configured URL.

.. confval:: bitbucket_url

    Force the :guilabel:`Edit on Bitbucket` button to use the configured URL.

.. confval:: gitlab_url

    Force the :guilabel:`Edit on GitLab` button to use the configured URL.

To generate dynamic URLs, there exists a set of other options.

.. code:: python

    html_context = {
        'display_github': True,
        # 'github_host': 'github.com',
        'github_user': 'readthedocs',
        'github_repo': 'sphinx_rtd_theme',
        'github_version': 'master/docs/'
    }


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
