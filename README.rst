.. _readthedocs.org: http://www.readthedocs.org
.. _bower: http://www.bower.io
.. _sphinx: http://www.sphinx-doc.org
.. _compass: http://www.compass-style.org
.. _wyrm: http://www.github.com/snide/wyrm/
.. _grunt: http://www.gruntjs.com
.. _node: http://www.nodejs.com

**************************
Read the Docs Sphinx Theme
**************************

This is a prototype mobile-friendly sphinx_ theme I made for readthedocs.org_. It's
currently in development and includes some rtd variable checks that can be ignored
if you're just trying to use it on your project outside of that site.

.. image:: screen_mobile.png
    :width: 100%

Installation
============

Symlink or subtree the ``sphinx_rtd_theme/sphinx_rtd_theme`` repository into your documentation at
``docs/_themes/sphinx_rtd_theme`` then add the following two settings to your Sphinx
conf.py file:

.. code-block::

    html_theme = "sphinx_rtd_theme"
    html_theme_path = ["_themes", ]

How the Table of Contents builds
================================

Currently the left menu will build based upon any ``toctree(s)`` defined in your index.rst file.
It outputs 2 levels of depth, which should give your visitors a high level of access to your
docs. If no toctrees are set the theme reverts to sphinx's usual local toctree.

It's important to note that if you don't follow the same styling for your rST headers across
your documents, the toctree will misbuild, and the resulting menu might not show the correct
depth when it renders.

Contributing or modifying the theme
===================================

This theme relies pretty heavily on a couple other sass libraries, but most notably wyrm_,
a frontend library I'm currently building. I've tried to keep most of the layout specific
code in this repo, but a lot of the rST text formatting is done over there. Wyrm is pretty
spartan and undocumented at the moment, so if you simply want to create some bug issues
for me rather than setting up a pull request, that's totally OK with me!

To load the dependencies you'll need to install bower_, which itself requires node_ to run.
Then simply run a ``bower install`` in the root directory to install the dependencies.
Once installed, make your sass changes to the ``sphix_rtd_theme/sass`` directory.

I've also set up a basic grunt_ command to update any dependencies and compile the css.

TODO
====
* Separate some sass variables at the theme level so you can overwrite some basic colors.
* Get large tables working better in responsive environments.
* Add the ability to set a logo.
