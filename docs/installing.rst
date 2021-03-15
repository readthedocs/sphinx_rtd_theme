************
Installation
************

Install the package (or add it to your ``requirements.txt`` file):

.. code:: console

    $ pip install sphinx_rtd_theme

In your ``conf.py`` file:

.. code:: python

    import sphinx_rtd_theme

    extensions = [
        ...
        'sphinx_rtd_theme',
    ]

    html_theme = "sphinx_rtd_theme"


.. note::

   Adding this theme as an extension is what enables localization of theme
   strings in your translated output. If these strings are not translated in
   your output, either we lack the localized strings for your locale, or you
   are using an old version of the theme.

Via Git or Download
===================

.. warning::

   Installing directly from the repo is deprecated.
   Static assets won't be included in the repo in a future release.

Symlink or subtree the ``sphinx_rtd_theme/sphinx_rtd_theme`` repository into your documentation at
``docs/_themes/sphinx_rtd_theme`` then add the following two settings to your Sphinx
``conf.py`` file:

.. code:: python

    html_theme = "sphinx_rtd_theme"
    html_theme_path = ["_themes", ]

Compatibility
=============

``sphinx_rtd_theme`` depends on at least Sphinx 1.6 although,
we recommend at least Sphinx 2 to take advantage of the html5 writer.
The html4 writer is still supported however,
it is deprecated and support will be removed in the near future.
