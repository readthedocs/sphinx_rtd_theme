.. _readthedocs.org: http://www.readthedocs.org
.. _bower: http://www.bower.io
.. _sphinx: http://www.sphinx-doc.org
.. _compass: http://www.compass-style.org

**************************
Read the Docs Sphinx Theme
**************************

This is a prototype mobile-friendly sphinx_ theme I made for readthedocs.org_. It's 
currently in development and includes some rtd variable checks that can be ignored 
if you're just tyring to use it on your project outside of that site.

.. image:: screen_desktop.png
    :width: 100%

.. image:: screen_mobile.png
    :width: 100%

Installation
============

Symlink the ``sphinx_rtd_theme/sphinx_rtd_theme`` repository into your documentation at 
``docs/_themes/sphinx_rtd_theme`` then add the following two settings to your Sphinx 
conf.py file:

.. code-block:: 

    html_theme = "sphinx_rtd_theme"
    html_theme_path = ["_themes", ]

Contributing or modifying the theme
===================================

To work on this theme you'll need to install bower_. Then simply run a ``bower install`` in the
root directory to install the dependencies. Once installed, make your sass changes to the 
``sphix_rtd_theme/sass`` directory, making sure to use compass_ to compile down to css.

If you'd like to see your changes made to master, send me a pull request.



