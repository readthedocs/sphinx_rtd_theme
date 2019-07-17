************
Installation
************

Install the package (or add it to your ``requirements.txt`` file):

.. code:: bash

    pip install sphinx_rtd_theme

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
