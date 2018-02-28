
*********
Changelog
*********

master
======

v0.2.5
======

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

v0.2.4
======

* Yet another patch to deal with extra builders outside Spinx, such as the
  singlehtml builders from the Read the Docs Sphinx extension

v0.2.3
======

* Temporarily patch Sphinx issue with ``singlehtml`` builder by inspecting the
  builder in template.

v0.2.2
======

* Roll back toctree fix in 0.2.1 (#367). This didn't fix the issue and
  introduced another bug with toctrees display.

v0.2.1
======

* Add the ``rel`` HTML attribute to the footer links which point to
  the previous and next pages.
* Fix toctree issue caused by Sphinx singlehtml builder (#367)

v0.2.0
======

* Adds the ``comments`` block after the ``body`` block in the template
* Added "Edit on GitLab" support
* Many bug fixes

v0.1.10-alpha
=============

.. note:: This is a pre-release version

* Removes Sphinx dependency
* Fixes hamburger on mobile display
* Adds a ``body_begin`` block to the template
* Added ``prev_next_buttons_location``

v0.1.9
======

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

v0.1.8
======

* Start keeping changelog :)
* Support for third and fourth level headers in the sidebar
* Add support for Sphinx 1.3
* Add sidebar headers for :caption: in Sphinx toctree
* Clean up sidebar scrolling behavior so it never scrolls out of view
