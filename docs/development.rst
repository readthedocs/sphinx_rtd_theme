Development
===========

The theme developers follow the guidelines below for development and release
planning. Documentation authors can decide which theme release works best for
their project based on required browser/operating system combinations or
dependency support.

.. _supported-browsers:

Supported browsers
------------------

Official browser support is determined by the most popular browser/operating
system combinations in our pageview analytics. Officially supported combinations
are commonly tested during development, and are always tested before final
release of a new version of the theme.

Older releases of supported combinations, and some less common combinations, are
considered partially supported. This means that we do not consistently test
these combinations, however we do expect user experience to be comparable with
supported combinations.

.. csv-table:: Supported browser combinations
    :widths: 6, 12, 4
    :header-rows: 1
    :file: supported-browsers.csv

.. versionadded:: 1.0
    Supported browser and operating system combinations added

There are several browser/operating system combinations that are not supported
by the theme developers at all. Unsupported combinations do not receive testing
or development, and we likely won't accept major contributions for these
combinations.

Unsupported browser/operating system combinations include:

Internet Explorer (any OS, versions <=10)
    **Unsupported.** IE11 is the last partially supported version. We do no
    testing on prior versions.

Internet Explorer (any OS, version 11)
    We currently only partially support IE11, and only test for major bugs.
    Support will be removed in the :ref:`2.0.0` release.

Opera (any OS, any version)
    **Community support only.** We do not receive enough traffic with this
    browser to officially support it in testing and development.

.. _supported-dependencies:

Supported dependencies
----------------------

The theme officially supports the following dependencies in your Sphinx project:

.. list-table:: Supported dependencies
    :header-rows: 1
    :widths: 10, 10

    * - Dependency
      - Versions
    * - Python
      - 2.7 or 3.6 or greater
    * - Sphinx
      - 1.7 up to at least 4.1
    * - docutils
      - Up to 0.17

.. versionadded:: 1.0
    Sphinx 4.0 support added

.. deprecated:: 1.0
    Sphinx 1.6 support removed

.. versionadded:: 1.0
    docutils 0.17 support added

Roadmap
-------

We currently have several releases planned on our development roadmap. Backward
incompatible changes, deprecations, and major features are noted for each of
these releases.

Releases follow `semantic versioning`_, and so it is generally recommended that
authors pin dependency on ``sphinx_rtd_theme`` to a version below the next major
version:

.. code:: console

    $ pip install "sphinx_rtd_theme<=2.0.0"

.. _semantic versioning: http://semver.org/

.. _release-1.0.0:

1.0.0
~~~~~

:Planned release date: August 2021

This release will be a slightly backwards incompatible release to follow the
:ref:`0.5.2` release. It will drop support for Sphinx 1.6, which is a rather old
release at this point.

This version will add official support for the Sphinx 4.x release series and
it resolves bugs with the latest release of Docutils, version 0.17.

Starting with this release, several deprecation warnings will be emitted at
build time:

Direct installation is deprecated
    Support for direct installation through GitHub is no longer a suggested
    installation method. In an effort to ease maintenance, compiled assets will
    eventually be removed from the theme repository. These files will only be
    included in the built packages/releases available on PyPI.

    We plan to start putting development releases up on PyPI more frequently, so
    that installation from the theme source repository is no longer necessary.

    Built assets are tentatively planned to be removed in version :ref:`3.0.0`:.

HTML4 support is deprecated
    Support for the Sphinx HTML4 writer will be removed in the :ref:`2.0.0`
    release.

.. _release-1.1.0:

1.1.0
~~~~~

:Planned release date: 2021 Q3

We aim to follow up release :ref:`1.0.0` with at least one bug fix release in
the 1.x release series. The 1.1 release will not be adding any major features
and will instead mark the last release targeting projects with old dependencies
like Sphinx 1.8, HTML4, or required support for IE11.

.. _release-2.0.0:

2.0.0
~~~~~

:Planned release date: 2022 Q1

This release will mark the beginning of a new round of feature development, as
well as a number of backward incompatible changes and deprecations.

Of note, the following backwards incompatible changes are planned for this
release:

Sphinx 1.x, Sphinx 2.x, and Docutils 0.16 will not be tested
    Official support will drop for these version, though they may still continue
    to work. Theme developers will not be testing these versions any longer.

HTML4 support will be removed
    Starting with this release, we will only support the HTML5 writer output,
    and builds attempting to use the HTML4 writer will fail. If you are still
    using the HTML4 writer, or have the ``html4_writer = True`` option in your
    Sphinx configuration file, you will need to either remove this option or pin
    your dependency to ``sphinx_rtd_theme<=2.0.0`` until you can.

    This option was suggested in the past to work around issues with HTML5
    support and should no longer be required to use a modern combination of this
    theme and Sphinx.

.. _release-3.0.0:

3.0.0
~~~~~

This release is not yet planned, however there are plans to potentially replace
Wyrm with Bootstrap in a release after 2.0.

Also tentatively planned for this release is finally removing built CSS and
JavaScript assets from our repository. This will remove the ability to install
the package directly from GitHub, and instead users will be advised to install
development releases from PyPI
