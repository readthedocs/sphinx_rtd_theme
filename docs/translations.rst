
******************
Translation Guide
******************

.. contents::

You can help to translate the Read the Docs Sphinx Theme.

Installation
============

For translating the Read the Docs Sphinx Theme you will need to install the following packages:

.. code:: bash

    $ pip install babel Jinja2

If the command has been correctly installed, a command should allow you to use the following command:

Translating Applications with Babel
-----------------------------------

After you marked all the strings you want to translate in this Sphinx theme with the gettext function 
alias ``_('str')`` or  ``{% trans %}string 1, string 2, string 3, etc.{% endtrans %}`` blocks. 

Then it’s time to create a .pot file. A .pot file contains all the strings and is the template for a 
.po file which contains the translated strings. The ``babel`` package can do all that for you.

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

    $ python ./setup.py init_catalog -l es -i ./sphinx_rtd_theme/locale/sphinx.pot \
                                     -o ./sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.po

.. tip::

    More options please, check out http://babel.pocoo.org/en/latest/setup.html#init-catalog

Update catalog
--------------

It updates an existing translations catalog based on a PO template file (POT). Running the following 
command will update a PO file:

.. code:: bash

    $ python ./setup.py update_catalog -l es -i ./sphinx_rtd_theme/locale/sphinx.pot \
                                             -o ./sphinx_rtd_theme/locale/es/LC_MESSAGES/sphinx.po

.. tip::

    More options please, check out http://babel.pocoo.org/en/latest/setup.html#update-catalog

Compile catalog
---------------

It compile catalog an existing translations based on PO files into MO files. Running the following 
command will compile catalog of PO files:

.. code:: bash

    $ python ./setup.py compile_catalog -d ./sphinx_rtd_theme/locale/

