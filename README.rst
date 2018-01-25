.. _readthedocs.org: http://www.readthedocs.org
.. _bower: http://www.bower.io
.. _sphinx: http://www.sphinx-doc.org
.. _sass: http://www.sass-lang.com
.. _wyrm: http://www.github.com/snide/wyrm/
.. _grunt: http://www.gruntjs.com
.. _node: http://www.nodejs.com
.. _demo: https://sphinx-rtd-theme.readthedocs.io/en/latest/
.. _hidden: http://sphinx-doc.org/markup/toctree.html

**************************
Read the Docs Sphinx Theme
**************************

.. image:: https://img.shields.io/pypi/v/sphinx_rtd_theme.svg
   :target: https://pypi.python.org/pypi/sphinx_rtd_theme
   :alt: Pypi Version 
.. image:: https://travis-ci.org/rtfd/sphinx_rtd_theme.svg?branch=master
   :target: https://travis-ci.org/rtfd/sphinx_rtd_theme
   :alt: Build Status
.. image:: https://img.shields.io/pypi/l/sphinx_rtd_theme.svg
   :target: https://pypi.python.org/pypi/sphinx_rtd_theme/
   :alt: License
.. image:: https://readthedocs.org/projects/sphinx-rtd-theme/badge/?version=latest
  :target: http://sphinx-rtd-theme.readthedocs.io/en/latest/?badge=latest
  :alt: Documentation Status

.. contents::
   :backlinks: none

`sphinx_rtd_theme` is a sphinx_ theme designed to look modern and be mobile-friendly.
The primary focus of this theme is to be used on readthedocs.org_ but can work with your
own sphinx projects. To read more and see a working demo_ head over to readthedocs.org_.


Installation
============

Via package
-----------

Install the package (or add it to your ``requirements.txt`` file):

.. code:: bash

    pip install sphinx_rtd_theme

In your ``conf.py`` file:

.. code:: python

    html_theme = "sphinx_rtd_theme"

Via git or download
-------------------

Symlink or subtree the ``sphinx_rtd_theme/sphinx_rtd_theme`` repository into your documentation at
``docs/_themes/sphinx_rtd_theme`` then add the following two settings to your Sphinx
``conf.py`` file:

.. code:: python

    html_theme = "sphinx_rtd_theme"
    html_theme_path = ["_themes", ]

Configuration
=============

You can configure different parts of the theme.

Project-wide configuration
--------------------------

The theme's project-wide options are defined in the ``sphinx_rtd_theme/theme.conf``
file of this repository, and can be defined in your project's ``conf.py`` via
``html_theme_options``. For example:

.. code:: python

    html_theme_options = {
        'typekit_id': '',
        'canonical_url': '',
        'analytics_id': '',
        'logo_only': False,
        'display_version': True,
        'prev_next_buttons_location': bottom,
        'style_external_links': False,
        # Toc options
        'collapse_navigation': False,
        'sticky_navigation': True,
        'navigation_depth': 4,
        'includehidden': True,
        'titles_only': False
    }

The following options are available:

Base options
~~~~~~~~~~~~

* ``typekit_id`` String. This will let users specify a typekit id to use for displaying nicer fonts.
* ``canonical_url`` String. This will specify a `canonical url <https://en.wikipedia.org/wiki/Canonical_link_element>`__
  to let search engines know they should give higher ranking to latest version of the docs.
  The url points to the root of the documentation and requires a trailing slash.
* ``analytics_id`` String. Change the Google Analytics ID that is included on pages.
* ``display_version`` Bool. With this disabled, the version number isn't shown at the top of the sidebar.
* ``prev_next_buttons_location`` String. can take the value ``bottom``, ``top``, ``both`` , or ``None``
  and will display the "Next" and "Previous" buttons accordingly.
* ``style_external_links`` Bool. Add an icon next to external links. Defaults to ``False``.

TOC Options
~~~~~~~~~~~

These effect how we display the Table of Contents in the side bar. You can read more about them here: http://www.sphinx-doc.org/en/stable/templating.html#toctree

* ``collapse_navigation`` Bool. With this enabled, you will lose the ``[+]`` drop downs next to each section in the sidebar.
  This is useful for *very large* documents.
* ``sticky_navigation`` Bool. This causes the sidebar to scroll with the main page content as you scroll the page.
* ``navigation_depth`` Int. Indicate the max depth of the tree; by default, all levels are included.
* ``includehidden`` Bool. Specifies if the sidebar includes toctrees marked with the ``:hidden:`` option
* ``titles_only`` Bool. If True, removes headers within a page from the sidebar.

Page-level configuration
------------------------

Pages support metadata that changes how the theme renders.
You can currently add the following:

* ``:github_url:`` This will force the "Edit on GitHub" to the configured URL
* ``:bitbucket_url:`` This will force the "Edit on Bitbucket" to the configured URL
* ``:gitlab_url:`` This will force the "Edit on GitLab" to the configured URL


How the Table of Contents builds
================================

Currently the left menu will build based upon any ``toctree(s)`` defined in your ``index.rst`` file.
It outputs 2 levels of depth, which should give your visitors a high level of access to your
docs. If no toctrees are set the theme reverts to sphinx's usual local toctree.

It's important to note that if you don't follow the same styling for your rST headers across
your documents, the toctree will misbuild, and the resulting menu might not show the correct
depth when it renders.

Also note that by default the table of contents is set with ``includehidden=True``. This allows you
to set a hidden toc in your index file with the `:hidden: <hidden_>`_ property that will allow you
to build a toc without it rendering in your index.

By default, the navigation will "stick" to the screen as you scroll. However if your toc
is vertically too large, it will revert to static positioning. To disable the sticky nav
altogether change the setting in ``conf.py``.


Contributing or modifying the theme
===================================

The sphinx_rtd_theme is primarily a sass_ project that requires a few other sass libraries. I'm
using bower_ to manage these dependencies and sass_ to build the css. The good news is
I have a very nice set of grunt_ operations that will not only load these dependencies, but watch
for changes, rebuild the sphinx demo docs and build a distributable version of the theme.
The bad news is this means you'll need to set up your environment similar to that
of a front-end developer (vs. that of a python developer). That means installing node and ruby.

Set up your environment
-----------------------

#. Install sphinx_ into a virtual environment.

   .. code:: bash

       pip install sphinx sphinxcontrib-httpdomain

#. Install sass.

   .. code:: bash

       gem install sass

#. Install node, bower, grunt, and theme dependencies.

   .. code:: bash

       # Install node
       brew install node

       # Install bower and grunt
       npm install -g bower grunt-cli

       # Now that everything is installed, let's install the theme dependencies.
       npm install

Now that our environment is set up, make sure you're in your virtual environment, go to
this repository in your terminal and run grunt:

.. code::

    grunt

This default task will do the following **very cool things that make it worth the trouble**:

#. Install and update any bower dependencies.
#. Run sphinx and build new docs.
#. Watch for changes to the sass files and build css from the changes.
#. Rebuild the sphinx docs anytime it notices a change to ``.rst``, ``.html``, ``.js``
   or ``.css`` files.


Releasing the Theme
===================

When you release a new version,
you should do the following:

#. Bump the version in ``sphinx_rtd_theme/__init__.py`` – we try to follow `semver <http://semver.org/>`_, so be careful with breaking changes.
#. Run a ``grunt build`` to rebuild all the theme assets.
#. Commit that change.
#. Tag the release in git: ``git tag $NEW_VERSION``.
#. Push the tag to GitHub: ``git push --tags origin``.
#. Upload the package to PyPI: ``python setup.py sdist bdist_wheel upload``.
#. In the ``readthedocs.org`` repo, edit the ``bower.json`` file to point at the correct version (``sphinx-rtd-theme": "https://github.com/rtfd/sphinx-rtd-theme.git#$NEW_VERSION"``).
#. In the ``readthedocs.org`` repo, run ``gulp build`` to update the distributed theme files.

TODO
====

* Separate some sass variables at the theme level so you can overwrite some basic colors.
