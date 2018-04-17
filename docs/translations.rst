
******************
Translation Guide
******************

.. contents::

You can help to translate the Read the Docs Sphinx Theme.

Languages available:

- Spanish contributed by Leonardo J. Caballero G.
- Your Language by YOUR NAME.

Installation
============

For translating the Read the Docs Sphinx Theme you will need to install the following packages:

.. code:: bash

    $ pip install babel Jinja2

If the command has been correctly installed, a command should allow you to use the following command:

.. code:: bash

    $ pybabel subcommand options

Execute the follow command for more options and follow these instructions to get details:

.. code:: bash

    $  pybabel --help
    Usage: pybabel command [options] [args]

    Options:
      --version       show program's version number and exit
      -h, --help      show this help message and exit
      --list-locales  print all known locales and exit
      -v, --verbose   print as much as possible
      -q, --quiet     print as little as possible

    commands:
      compile  compile message catalogs to MO files
      extract  extract messages from source files and generate a POT file
      init     create new message catalogs from a POT file
      update   update existing message catalogs from a POT file

Translating Applications with Babel
-----------------------------------

After you marked all the strings you want to translate in this Sphinx theme with the gettext function 
alias ``_('str')`` or  ``{% trans %}string 1, string 2, string 3, etc.{% endtrans %}`` blocks. 

Then it’s time to create a .pot file. A .pot file contains all the strings and is the template for a 
.po file which contains the translated strings. The ``babel`` package can do all that for you.

.. note::
    The ``babel`` package install a command called ``pybabel``, please, check out for more options at 
    http://babel.pocoo.org/en/latest/cmdline.html

Jinja2 HTML templates
---------------------

This Sphinx theme using a awesome modern and designer-friendly HTML templating language for Python 
called ``Jinja2``. The ``Jinja2`` package is used for that.

Configuration
=============

For enable the *Internationalization and Localization* for this Sphinx Theme, you will need checkout 
the following configurations:

Translations files
------------------

The translations files are based on ``gettext`` format and they are placed at the 
:file:`sphinx_rtd_theme/locale/` directory, like it showing the following structure:

.. code:: bash

    sphinx_rtd_theme/locale/
    ├── es
    │   └── LC_MESSAGES
    │       ├── sphinx.mo
    │       └── sphinx.po
    └── sphinx.pot

:file:`sphinx_rtd_theme/locale/<LANG>/LC_MESSAGES/`
    This folder contains a specific language is the **Gettext format**.

:file:`sphinx.pot`
    This file is the **Portable Object Template** Gettext format.

:file:`sphinx.po`
    This file is the **Portable Object** Gettext format to translate.

:file:`sphinx.mo`
    This file is the **Machine Object** Gettext format generated later of translate 
    your :file:`sphinx.po` file via the catalog compilation.

Babel Configurations
--------------------

The ``babel`` packages provides commands for integration into :file:`setup.py` scripts, based on either 
the ``distutils`` package that is part of the Python standard library, or the third-party ``setuptools`` 
package.

Then :file:`setup.cfg` file simply configures the behavior of the various setup commands for this package. 
This file contains the options that you can be specified on the command-line. The :file:`setup.cfg` file 
at root folder of this Sphinx theme, look like the following:

.. code:: cfg

    [bdist_wheel]
    universal = 1

    # Babel configurations for setup.py scripts
    [compile_catalog]
    domain = sphinx
    directory = sphinx_rtd_theme/locale/

    [extract_messages]
    mapping_file = babel.cfg
    output_file = sphinx_rtd_theme/locale/sphinx.pot
    keywords = _ l_ lazy_gettext

    [init_catalog]
    input_file = sphinx_rtd_theme/locale/sphinx.pot
    output_file = sphinx_rtd_theme/locale/$LANG/LC_MESSAGES/sphinx.po

    [update_catalog]
    domain = sphinx
    input_file = sphinx_rtd_theme/locale/sphinx.pot
    output_dir = sphinx_rtd_theme/locale/

If the command has been correctly installed or registered, a project's setup.py script should 
allow you to use the following command:

.. code:: bash

    $ python ./setup.py subcommand options

Execute the follow command for more options and follow these instructions to get details:

.. code:: bash

    $ python ./setup.py --help-commands
    Standard commands:
      build             build everything needed to install
      build_py          "build" pure Python modules (copy to build directory)
      build_ext         build C/C++ extensions (compile/link to build directory)
      build_clib        build C/C++ libraries used by Python extensions
      build_scripts     "build" scripts (copy and fixup #! line)
      clean             clean up temporary files from 'build' command
      install           install everything from build directory
      install_lib       install all Python modules (extensions and pure Python)
      install_headers   install C/C++ header files
      install_scripts   install scripts (Python or otherwise)
      install_data      install data files
      sdist             create a source distribution (tarball, zip file, etc.)
      register          register the distribution with the Python package index
      bdist             create a built (binary) distribution
      bdist_dumb        create a "dumb" built distribution
      bdist_rpm         create an RPM distribution
      bdist_wininst     create an executable installer for MS Windows
      upload            upload binary package to PyPI
      check             perform some checks on the package

    Extra commands:
      saveopts          save supplied options to setup.cfg or other config file
      compile_catalog   compile message catalogs to binary MO files
      develop           install package in 'development mode'
      upload_docs       Upload documentation to PyPI
      extract_messages  extract localizable strings from the project code
      init_catalog      create a new catalog based on a POT file
      test              run unit tests after in-place build
      update_catalog    update message catalogs from a POT file
      setopt            set an option in setup.cfg or another config file
      install_egg_info  Install an .egg-info directory for the package
      rotate            delete older distributions, keeping N newest files
      bdist_wheel       create a wheel distribution
      egg_info          create a distribution's .egg-info directory
      alias             define a shortcut to invoke one or more commands
      easy_install      Find/get/install Python packages
      bdist_egg         create an "egg" distribution
      dist_info         create a .dist-info directory
      build_sphinx      Build Sphinx documentation

    usage: setup.py [global_opts] cmd1 [cmd1_opts] [cmd2 [cmd2_opts] ...]
       or: setup.py --help [cmd1 cmd2 ...]
       or: setup.py --help-commands
       or: setup.py cmd --help

.. seealso::

    More details check out the following links:

    - `Writing the Setup Configuration File <https://docs.python.org/3/distutils/configfile.html>`_.
    - `How setup this file for babel configurations <http://babel.pocoo.org/en/latest/setup.html>`_.

Extraction Configurations
-------------------------

First of all you have to get into the folder where you have your Sphinx theme and create a mapping file 
called :file:`babel.cfg` that contains the **extraction from Jinja2 HTML templates** configurations. 
For typical Sphinx extensions, this is what you want in there:

.. code:: cfg

    # Extraction from Jinja2 HTML templates
    [jinja2: **/**.html]
    encoding = utf-8
    ignore_tags = script,style
    include_attrs = alt title summary placeholder


.. seealso::

    More details check out the following links:

    - `How setup this file <http://babel.pocoo.org/en/latest/setup.html>`_
    - `A previous file example description <http://babel.pocoo.org/en/latest/messages.html#extraction-method-mapping-and-configuration>`_

Administrative Tasks
====================

The ``babel`` package have a *Distutils/Setuptools Integration* which supports the options 
defined in the :file:`setup.cfg` file that can be executed via command line.

These options are the commonly using as **"Translations Administrative Tasks"** and the most 
used tasks are described below:

Extract messages
----------------

It can extract localizable messages from a variety of difference source files, 
and generate a PO (portable object) template file from the collected messages.

Running the following command will produce a PO template file:

.. code:: bash

    $ python ./setup.py extract_messages -o ./sphinx_rtd_theme/locale/sphinx.pot

.. tip::

    More options please, check out http://babel.pocoo.org/en/latest/setup.html#extract-messages

Init catalog
------------

It creates a new translation catalog based on a PO template file (POT). Running the following 
command will produce a PO file:

.. code:: bash

    $ python ./setup.py init_catalog -l es -i ./sphinx_rtd_theme/locale/sphinx.pot -o ./sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.po
    running init_catalog
    creating catalog './sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.po' based on './sphinx_rtd_theme/locale/sphinx.pot'

.. tip::

    More options please, check out http://babel.pocoo.org/en/latest/setup.html#init-catalog

Update catalog
--------------

It updates an existing translations catalog based on a PO template file (POT). Running the following 
command will update a PO file:

.. code:: bash

    $ python ./setup.py update_catalog -l es -i ./sphinx_rtd_theme/locale/sphinx.pot -o ./sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.po
    running update_catalog
    updating catalog ./sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.po based on ./sphinx_rtd_theme/locale/sphinx.pot

.. tip::

    More options please, check out http://babel.pocoo.org/en/latest/setup.html#update-catalog

Compile catalog
---------------

It compile catalog an existing translations based on PO files into MO files. Running the following 
command will compile catalog of PO files:

.. code:: bash

    $ python ./setup.py compile_catalog -d ./sphinx_rtd_theme/locale/ -l es
    running compile_catalog
    compiling catalog ./sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.po to ./sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.mo

Statistics about translations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

For to print the statistics about the theme translations from his catalog. Running the following 
command will printing the statistics:

.. code:: bash

    $ pybabel compile -D sphinx -d sphinx_rtd_theme/locale/ -f --statistics

    28 of 28 messages (100%) translated in sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.po
    compiling catalog sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.po to sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.mo

.. tip::

    More options for ``compile`` sub-command, please, check out http://babel.pocoo.org/en/latest/cmdline.html#compile
