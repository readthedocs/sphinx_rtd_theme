Installation
============

How to install and use the theme
--------------------------------

Install the ``sphinx_rtd_theme`` package (or add it to your ``requirements.txt`` file):

.. code:: console

    $ pip install sphinx_rtd_theme

In your Sphinx project's ``conf.py`` file, add ``sphinx_rtd_theme`` to the list of enabled extensions and as the active theme:

.. code:: python

    extensions = [
        ...
        'sphinx_rtd_theme',
    ]

    html_theme = "sphinx_rtd_theme"

.. seealso::
    :ref:`supported-browsers`
        Officially supported and tested browser/operating system combinations

    :ref:`supported-dependencies`
        Officially Supported versions of Python, Sphinx, and other dependencies.


.. note::

   Adding this theme as an extension is what enables localization of theme
   strings in your translated output. If these strings are not translated in
   your output, either we lack the localized strings for your locale, or you
   are using an old version of the theme.

   ..
      comment about this note: it's possibly not necessary to add the theme as an extension.
      Rather, this is an issue caused by setting html_theme_path.
      See: https://github.com/readthedocs/readthedocs.org/pull/9654


.. _howto_upgrade:

How to upgrade
--------------

.. tip:: 
    **Read the Docs users:** To know which version of ``sphinx-rtd-theme`` you are running, you can always check your latest build outputs. One or more steps in the documentation build will install python packages, one of which is ``sphinx-rtd-theme``.

Adding ``sphinx-rtd-theme`` to your project's ``requirements.txt`` will make pip install the latest compatible version of the theme.

If you want to test a **pre-release**, you need to be explicit about the version in ``requirements.txt``.
Otherwise, pip will ignore pre-releases. Add for instance ``sphinx-rtd-theme==1.1.0b3`` to test a pre-release.

.. tip::
    We always recommend that you pin the version of Sphinx that your project is built with.
    We'll make sure not to release sphinx-rtd-theme that installs together with a Sphinx theme that it is incompatible with.
    
    It can never be guaranteed that sphinx-rtd-theme is compatible with everything in your project.
    If your project is complex or needs reproducible documentation builds, you should pin or put an upper bound on ``sphinx-rtd-theme``.
    For instance, you could add this to ``requirements.txt``::
    
        # Ensure that we do not automatically include changes from the next major series
        sphinx-rtd-theme>=1,<2



Via Git or Download
-------------------

.. warning::

   Installing directly from the repository source is deprecated and is not
   recommended. Static assets won't be included in the repository starting in
   release :ref:`roadmap-release-3.0.0`.

Symlink or subtree the ``sphinx_rtd_theme/sphinx_rtd_theme`` repository into your documentation at
``docs/_themes/sphinx_rtd_theme`` then add the following two settings to your Sphinx
``conf.py`` file:

.. code:: python

    html_theme = "sphinx_rtd_theme"
    html_theme_path = ["_themes", ]




