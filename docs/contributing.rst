************
Contributing
************

This project follows the Read the Docs :doc:`code of conduct
<rtd:code-of-conduct>`. If you are not familiar with our code of conduct policy,
take a minute to read the policy before starting with your first contribution.

Modifying the theme
===================

The styles for this theme use SASS_ and a custom CSS framework called Wyrm_. We
use Bower_ to manage these dependencies and SASS_ to build the CSS. Grunt_ is
used to watch for changes, rebuild the static assets, and rebuild the Sphinx
demo documentation.

.. note::
    The installation of Ruby and Node is outside the scope of this
    documentation. You will need both in order to make changes to this theme.

Set up your environment
-----------------------

#. Install Sphinx_ and documentation build dependencies.

   .. code:: console

       pip install -e '.[dev]'

#. Install SASS.

   .. code:: console

       gem install sass

#. Install Bower, Grunt, and theme dependencies locally.

   .. code:: console

       npm install

Making changes
--------------

Changes to the theme can be compiled and tested with the default Grunt task:

.. code:: console

    grunt

This default task will do the following:

#. Install and update any Bower dependencies.
#. Build the static CSS from SASS source files.
#. Build the demo documentation.
#. Watch for changes to the SASS files and documentation and rebuild everything
   on any detected changes.

Alternatively, if you don't need to watch the files, Grunt can be called with
the same task used for releases:

.. code:: console

    grunt build

.. _Bower: http://www.bower.io
.. _SASS: http://www.sass-lang.com
.. _Wyrm: http://www.github.com/snide/wyrm/
.. _Grunt: http://www.gruntjs.com
.. _Sphinx: http://www.sphinx-doc.org/en/stable/

Translations
============

Translations are managed using `Transifex`_. You can join any of the existing
language teams or request a new language is added to the project. For more
information on our translation standards, see our docs on
:doc:`rtd:development/i18n`

Periodically, core team should update the translation files outside our normal
releases. Someone from the core team, with write access to Transifex, should run
the following:

.. code:: console

    python setup.py update_translations

This will extract new messages, upload the messages to Transifex, and will
update our local translation files. Changes can be checked in to a branch and
put up for review.

.. _Transifex: https://www.transifex.com/readthedocs/sphinx-rtd-theme

Releasing the theme
===================

To release a new version of the theme, core team will take the following steps:

#. Bump the version in ``sphinx_rtd_theme/__init__.py``, ``bower.json`` and ``package.json`` --
   we try to follow `semver <http://semver.org/>`_, so be careful with breaking changes.
#. Update the changelog (``docs/changelog.rst``) with the version information.
#. Run ``grunt build`` to rebuild all the theme assets.
#. Run ``python setup.py update_translations`` to compile new translation files and update Transifex
#. Commit that change.
#. Tag the release in git: ``git tag $NEW_VERSION``.
#. Push the tag to GitHub: ``git push --tags origin``.
#. Upload the package to PyPI:

    .. code:: console

        rm -rf dist/
        python setup.py sdist bdist_wheel
        twine upload --sign --identity security@readthedocs.org dist/*
