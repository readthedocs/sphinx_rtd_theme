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

   Adding this theme as an extension activates the ``sphinxcontrib-jquery`` extension,
   which is required for search, smooth scrolling, and the flyout menu.
   If any of these features don't work, make sure you have the theme declared in your ``extensions``.

   .. More context for this note:
        * https://github.com/readthedocs/sphinx_rtd_theme/issues/1434#issuecomment-2288359582
        * https://github.com/readthedocs/sphinx_rtd_theme/issues/1222#issuecomment-2296703160


.. _howto_upgrade:

How to upgrade
--------------

Adding ``sphinx-rtd-theme`` to your project's dependencies will make pip install the latest compatible version of the theme.

If you want to test a **pre-release**, you need to be explicit about the version you specify.
Otherwise, pip will ignore pre-releases. Add for instance ``sphinx-rtd-theme==1.1.0b3`` to test a pre-release.

.. tip::
    We recommend that you pin the version of Sphinx that your project is built with.
    We won't release sphinx-rtd-theme without marking its compatibility with Sphinx. So if you do not pin ``sphinx-rtd-theme`` itself, you will always get the *latest compatible* release.
    
    More information is available in Read the Docs' documentation on :doc:`rtd:guides/reproducible-builds`.

