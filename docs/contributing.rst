************
Contributing
************

This project follows the Read the Docs :doc:`code of conduct
<rtd:code-of-conduct>`. If you are not familiar with our code of conduct policy,
take a minute to read the policy before starting with your first contribution.

Modifying the theme
===================

The styles for this theme use SASS_ and a custom CSS framework called Wyrm_. We
use Webpack_ and node-sass_ to build the CSS. Webpack_ is used to watch for
changes, rebuild the static assets, and rebuild the Sphinx demo documentation.

.. note::
    The installation of Node is outside the scope of this documentation. You
    will need Node version 10+ in order to make changes to this theme.

Set up your environment
-----------------------

#. Install Sphinx_ and documentation build dependencies.

   .. code:: console

       $ pip install -e '.[dev]'

#. Install Webpack_, node-sass_, and theme dependencies locally.

   .. code:: console

       $ npm install

Making changes
--------------

Changes to the theme can be compiled and tested with Webpack_:

.. code:: console

    $ npm run dev

This script will do the following:

#. Install and update any dependencies.
#. Build the static CSS from SASS source files.
#. Build the demo documentation.
#. Watch for changes to the SASS files and documentation and rebuild everything
   on any detected changes.

Alternatively, if you don't need to watch the files, the release build script
can be used to test built assets:

.. code:: console

    $ npm run build

.. _Webpack: https://webpack.js.org/
.. _node-sass: https://github.com/sass/node-sass
.. _SASS: http://www.sass-lang.com
.. _Wyrm: http://www.github.com/snide/wyrm/
.. _Sphinx: http://www.sphinx-doc.org/en/stable/

Testing
=======

QA testing theme changes and pull requests is complex, due to backwards
compatibility.

The following cases need to be tested with changes to CSS or JavaScript:

* Multiple, modern browsers should be tested. We officially support back
  to IE11 at the moment
* Multiple viewport sizes should be tested for changes. We support large,
  tablet, and mobile viewport sizes
* We currently support both the Sphinx HTML4 writer and HTML5 writer. This makes
  for some complex CSS selectors
* Multiple major versions of Sphinx should be tested. We currently support back
  to Sphinx version ``1.6``

It's easiest to test combinations of dependency versions using ``tox``:

.. code:: console

    % tox -e py3-sphinx34-html4

If the tests and build are successful, you can view the built documentation at
the directory noted by Sphinx:

.. code:: console

    build succeeded, 10 warnings.

    The HTML pages are in .tox/py3-sphinx34-html4/tmp/html.
    ___________________________ summary ___________________________
      py3-sphinx34-html4: commands succeeded
      congratulations :)

You can then open up this path with a series of browsers to test.

The best way to spot UI issues is to compare two or more builds. You can build
multiple ``tox`` environments, and open both up for comparison:

.. code:: console

    % tox -e py3-sphinx34-html4
    ...
    % tox -e py3-sphinx34-html5
    ...
    % firefox .tox/py3-sphinx34-html4/tmp/html/index.html
    % firefox .tox/py3-sphinx34-html5/tmp/html/index.html

You can also use a separate ``tox`` environment for building output to compare
against. All of the ``tox`` environments have an additional postfix, ``-qa``, to
allow building the same environment twice, without overwriting any files. In
this test scenario, you would build from a branch or tag before building the
same ``tox`` environment for the pull request branch you are testing.

For example, to test against the tag ``0.5.2``:

.. code:: console

    % git checkout 0.5.2
    % tox -e py3-sphinx34-html4-qa
    ...
    % git checkout feature/example-pull-request
    % tox -e py3-sphinx34-html4
    ...
    % firefox .tox/py3-sphinx34-html4-qa/tmp/html/index.html
    % firefox .tox/py3-sphinx34-html4/tmp/html/index.html

Currently, the most important environments to QA are:

.. This list is purposely shorter than what we describe above. If we test all of
   the cases above, we'll be here all day. Python 3, HTML4/5 writer, and latest
   minor of each major Sphinx release should give us enough work.

* ``py3-sphinx18-html4``
* ``py3-sphinx18-html5``
* ``py3-sphinx24-html4``
* ``py3-sphinx24-html5``
* ``py3-sphinx35-html4``
* ``py3-sphinx35-html5``
* ``py3-sphinx41-html4``
* ``py3-sphinx41-html5``

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

    $ python setup.py update_translations

This will extract new messages, upload the messages to Transifex, and will
update our local translation files. Changes can be checked in to a branch and
put up for review.

.. _Transifex: https://www.transifex.com/readthedocs/sphinx-rtd-theme

Releasing the theme
===================

To release a new version of the theme, core team will take the following steps:

#. Bump the version by running ``bump2version [major|minor|patch|dev]``.
   This will automatically increase the correct part(s) of the version number,
   you do not need to specify the exact version number.
   We follow `semantic versioning`_ and `PEP440`_
   (with regards to alpha release and development versions). The version
   increment should reflect these releases and any potentially breaking changes.
#. New versions are by default ``alpha`` releases. If this is a release candidate,
   run ``bump2version --allow-dirty release`` to update the release to an ``rc``
   release. If this is a final release, run the command again.
#. Update the changelog (``docs/changelog.rst``) with the version information.
#. Run ``python setup.py update_translations`` to compile new translation files
   and update Transifex.
#. Run ``python setup.py build_assets`` to rebuild all the theme assets and the Python
   package.
#. Commit these changes.
#. Tag the release in git: ``git tag $NEW_VERSION``.
#. Push the tag to GitHub: ``git push --tags origin``.
#. Upload the package to PyPI:

   .. code:: console

      $ rm -rf dist/
      $ python setup.py sdist bdist_wheel
      $ twine upload --sign --identity security@readthedocs.org dist/*

#. Finally, open a new pull request updating the development release version to
   the next patch by running ``bump2version patch``. Open a pull request with
   this change.

.. _PEP440: https://www.python.org/dev/peps/pep-0440/
.. _semantic versioning: http://semver.org/
