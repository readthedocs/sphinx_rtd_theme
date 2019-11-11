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

Symlink or subtree the ``sphinx_rtd_theme/sphinx_rtd_theme`` repository into your documentation at
``docs/_themes/sphinx_rtd_theme`` then add the following two settings to your Sphinx
``conf.py`` file:

.. code:: python

    html_theme = "sphinx_rtd_theme"
    html_theme_path = ["_themes", ]

You can also add the latest development version of the package with pip. 

Example:

.. code:: console

    pip install -e git+https://github.com/readthedocs/sphinx_rtd_theme.git@2b8717a3647cc650625c566259e00305f7fb60aa#egg=sphinx_rtd_theme


You should substitute ``2b8717a3647cc650625c566259e00305f7fb60`` with lagetest commit number. 
Note the flag ``-e`` (editable) prevents building wheel on your system.
