*********
Changelog
*********

.. seealso:: :ref:`howto_upgrade`

|theme_version|
===============

.. |theme_version| replace:: 1.2.1alpha1


.. _release-1.2.0:

1.2.0
=====

Dependency changes
------------------

* docutils 0.18 is supported. (#1381)
* Sphinx 6 support added
* Added ``sphinxcontrib-jquery`` as a dependency (#1385 #1421)
* Python 3.11 is officially supported and tested. (#1395)
* Python 3.4 and 3.5 are officially not supported (#1395)

Changes
-------

* Automatically use ``sphinxcontrib-jquery`` in Sphinx 6+ (#1399)
* Use new context vars ``logo_url``, ``favicon_url`` and ``root_doc`` when available (#1405)
* Translations updated: French, Hungarian, Croatian
* Translations added: Danish, Chinese (Taiwan)

Note for users of Sphinx<4
--------------------------

If you cannot use a more recent Sphinx release,
you should at least ensure you are using the most recent release for your major version.
Currently, these are Sphinx `1.8.6` and `2.4.5`.
Older releases may install unsupported versions of several dependencies, including Jinja2 and docutils.

Known issues
------------

In some cases, jQuery is not loaded with Sphinx 6 on Read the Docs.
Workaround: You need to add ``sphinx_rtd_theme`` to ``extensions`` in your ``conf.py``.
See `readthedocs.org issue #9654`_ for updates.

.. _readthedocs.org issue #9654: https://github.com/readthedocs/readthedocs.org/pull/9654


.. _release-1.1.1:

1.1.1
=====

Fixes
-----

* Fix wrapping bug on cross references (#1368)

.. _release-1.1.0:

1.1.0
=====

Dependency Changes
------------------

Many documentation projects depend on ``sphinx-rtd-theme`` without specifying a version of the theme (unpinned) while also depending on unpinned versions of Sphinx. The latest version of ``sphinx-rtd-theme`` ideally always supports the latest version of Sphinx, but this is now guaranteed.

This release adds upper bounds to direct dependencies ``Sphinx`` and ``docutils`` which will safeguard from mixing with possibly incompatible future versions of Sphinx & docutils.

* Sphinx versions supported: 1.6 to 5.2.x
* ``Sphinx<6`` (#1332)
* ``docutils<0.18`` (unchanged, but will be bumped in an upcoming release)


Features
--------

* Nicer styles for <kbd> (#967)
* New styling for breadcrumbs (#1073)


Fixes
-----

* Suffixes in Sphinx version caused build errors (#1345)
* Table cells with multiple paragraphs gets wrong formatting (#289)
* Definition lists rendered wrongly in api docs (#1052)
* Citation not styled properly (#1078)
* Long URLs did not wrap (#1193)


Minor Changes
-------------

* Sphinx 5.2 added to test matrix (#1348)
* Python 3.10 added to test matrix (#1334)
* Supplemental Docker setup for development (#1319)
* Most of setup.py migrated to setup.cfg (#1116)
* Jinja2 context variable ``sphinx_version_info`` is now ``(major, minor, -1)``, the patch component is always ``-1``. Reason: It's complicated. (#1345)


Incompatible Changes
--------------------

There are no known incompatible changes in this release. Support for ``docutils`` versions 0.18 and 0.19 are scheduled for our next release.


.. _release-1.0.0:

1.0.0
=====

Incompatible Changes
--------------------

* The minimum supported python version is now 2.7 or 3.4 and greater (#1093)
* The minimum supported Sphinx version is now 1.6 (#1091)

Deprecated
----------

* Support for Sphinx's HTML4 writer is deprecated and will be removed in version 2.0 (#1091)

Features
--------

* Add support for Sphinx 4.x (#1123)
* Add support for Docutils 0.17 (#1185 and #1199)
* Fixed logo scaling on IE11 (#1183)
* Added support for logos as URLs (#1171)
* Align top and side navigation background colors on mobile (#1132)
* Added support for deep toc levels (#1089)
* Updated translations for Chinese, Dutch, Estonian, French, German, Italian,
  Lithuanian, Persian, Polish, Portuguese, Russian, Spanish, Swedish, and
  Turkish locales

A number of accessibility features were added in this release:

* Allow keyboard to toggle menu expansion (#1167)
* Allow keyboard to activate permalink (#1162)
* Show keyboard focus on buttons (#1161)
* Maintain aria-expanded along with .current in menu (#1151)
* Respect tab order for prev/next buttons (#1051)

Fixes
-----

* Updated Google analytics integration (#1129)
* Add classifier separation on Sphinx 2+ HTML4 writer (#1192)
* Added missing space char in footer (#1188)
* Fix navigation right padding on level2+ elements (#1068)
* Fix navigation expansion button sizes (#1067)
* Wrap inline literals (#1050)
* Fix aria labels (#1056)
* Don't toggle navigation terminal nodes (#1049)
* Fix ``<pre>`` overflow (#1220)
* Fix literal/ref style inside ``<dl>`` (#1088)

Other Changes
-------------

* Update npm development dependencies (#1096)
* Don't require npm to build from source (#1039)
* Use regular toctree instead of toc for singlehtml builder (#507)
* Cleanup whitespace in templates (#1060)

.. _release-0.5.2:

0.5.2
=====

:Date: April 5, 2021

.. note:: This commit will not be in ``master``, but was branched directly off ``0.5.1`` to minimize issues.
          The next full release will contain all PR's previously merged.

* Depend on docutils < 0.17 (#1113)

.. _release-0.5.1:

0.5.1
=====

:Date: January 4, 2021

Fixes
-----

* Set ``url_root`` properly on index (#1025)
* Do not load ``language_data.js`` in non-search pages (#1021)
* Hide the search box on any ``singlehtml`` like builder (#975)
* Fix ``vcs_pageview_mode`` template parameter (#1010)
* Mark nex/prev icons as aria-hidden (#1007)
* Use well-formed XML syntax (#1006)
* Footer: show both ``commit`` and ``last_updated`` if available (#897)
* Search page: don't show "edit on" links (#935)

New Features
------------

* New theme option to enable anonymous ip addresses when using Google Analytics (#889)

Other Changes
-------------

* The ``canonical_url`` option was deprecated in favor of Sphinx's ``html_baseurl`` (#1003)
* Add ``contentinfo`` block to ``footer.html`` template (#896)
* Make Copyright template match sphinx's basic (#933)
* Packaging: include ``bin/preinstall.js`` (#1005)

.. _release-0.5.0:

0.5.0
=====

:Date: Jun 17, 2020

Fixes
-----

* Fix bullet list spacing to respect simple/complex list styles

.. _release-0.5.0rc2:

0.5.0rc2
========

:Date: June 5, 2020

Fixes
-----

* Fix issue with simple definition lists that was missed
* Change FOUT back to FOIT
* Fix several margin issues with lists, nested lists, and nested content
* Add colon back to field lists

.. _release-0.5.0rc1:

0.5.0rc1
========

:Date: May 6, 2020

Fixes
-----

* Fix many styling issues that look different when using the Sphinx HTML5 writer

Other Changes
--------------

* Add the ``navigation`` template block around the navigation area.
* Added i18n support using Babel
* Added translations for 10 new languages
* Moved build system from Grunt and friends to Webpack
* Remove Modernizr, but keep html5shiv (#724, #525)

.. _release-0.4.3:

0.4.3
=====

:Date: Feb 12, 2019

New Features
-------------

Fixes
-----

* Fix scrolling to active item in sidebar on load (#214)
* Style caption link for code and literal blocks
* Fix inconsistent font size and line height for autodoc "raises" and "returns" (#267)
* Fix last_updated notice appearing in same line as copyright notice (#704)


Other Changes
--------------

.. _release-0.4.2:

0.4.2
=====

:Date: Oct 5, 2018

New Features
-------------

Fixes
-----

* Set base font size on <html> (#668)
* Fix HTML search not working with Sphinx-1.8 (#672)

Other Changes
--------------

* Upload signed packages to PyPI with twine (#651)
* Do not enforce period at the end of copyright statement (666)

0.4.1
=====

:Date: July 27, 2018

New Features
-------------

Fixes
-----

* Line height adjustments for Liberation Mono (#656)

Other Changes
--------------

* Add Sphinx as a dependency

0.4.0
=====

This version made some changes to how JS and CSS were included
when the theme is used on Read the Docs.


New Features
-------------

Fixes
-----

* Do not rely on readthedocs.org for CSS/JS (#614)
* Color accessibility improvements on the left navigation

Other Changes
---------------

* Write theme version and build date at top of JavaScript and CSS
* Changed code and literals to use a native font stack (#612)
* Fix small styling issues

0.3.1
=====

Fixes
-----

* Revert part of #576 causing display issues with version selector menu
* Backwards compatibility fixes for pre-0.3.0 releases (#623)
* Fix mkdocs version selector (#622)
* Add open list spacing (#591)
* Fix table centering (#599)

0.3.0
=====

**Note**: this version resulted in some JavaScript incompatibilities when used on readthedocs.org

New Features
-------------

* Add html language attribute
* Allow setting 'rel' and 'title' attributes for stylesheets (#551)
* Add option to style external links
* Add github, gitlab, bitbucket page arguments option
* Add pygments support
* Add setuptools entry point allowing to use ``sphinx_rtd_theme`` as
  Sphinx ``html_theme`` directly.
* Add language to the JS output variable

Fixes
-----

* Fix some HTML warnings and errors
* Fix many styling issues
* Fix many sidebar glitches
* Fix line number spacing to align with the code lines
* Hide Edit links on auto created pages
* Include missing font files with the theme

Other Changes
--------------

* Significant improvement of our documentation
* Compress our Javascript files
* Updated dependencies

0.2.4
=====

* Yet another patch to deal with extra builders outside Spinx, such as the
  singlehtml builders from the Read the Docs Sphinx extension

0.2.3
=====

* Temporarily patch Sphinx issue with ``singlehtml`` builder by inspecting the
  builder in template.

0.2.2
=====

* Roll back toctree fix in 0.2.1 (#367). This didn't fix the issue and
  introduced another bug with toctrees display.

0.2.1
=====

* Add the ``rel`` HTML attribute to the footer links which point to
  the previous and next pages.
* Fix toctree issue caused by Sphinx singlehtml builder (#367)

0.2.0
=====

* Adds the ``comments`` block after the ``body`` block in the template
* Added "Edit on GitLab" support
* Many bug fixes

0.1.10-alpha
============

.. note:: This is a pre-release version

* Removes Sphinx dependency
* Fixes hamburger on mobile display
* Adds a ``body_begin`` block to the template
* Added ``prev_next_buttons_location``

0.1.9
=====

* Intermittent scrollbar visibility bug fixed. This change introduces a
  backwards incompatible change to the theme's layout HTML. This should only be
  a problem for derivative themes that have overridden styling of nav elements
  using direct descendant selectors. See `#215`_ for more information.
* Safari overscroll bug fixed
* Version added to the nav header
* Revision id was added to the documentation footer if you are using RTD
* An extra block, ``extrafooter`` was added to allow extra content in the
  document footer block
* Fixed modernizr URL
* Small display style changes on code blocks, figure captions, and nav elements

.. _#215: https://github.com/rtfd/sphinx_rtd_theme/pull/215

0.1.8
=====

* Start keeping changelog :)
* Support for third and fourth level headers in the sidebar
* Add support for Sphinx 1.3
* Add sidebar headers for :caption: in Sphinx toctree
* Clean up sidebar scrolling behavior so it never scrolls out of view
