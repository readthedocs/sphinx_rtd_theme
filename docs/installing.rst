Installation
============

How to install and use the theme
--------------------------------

Install the ``sphinx_rtd_theme`` package (or add it to your ``requirements.txt`` file):

.. code:: console

    $ pip install sphinx_rtd_theme

In your Sphinx project's ``conf.py`` file, define ``html_theme`` to activate the theme:

.. code:: python

    html_theme = "sphinx_rtd_theme"

.. seealso::
    :ref:`supported-browsers`
        Officially supported and tested browser/operating system combinations

    :ref:`supported-dependencies`
        Officially Supported versions of Python, Sphinx, and other dependencies.


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
