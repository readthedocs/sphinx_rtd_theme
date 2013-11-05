# -*- coding: utf-8 -*-
"""Test Module for sphinx_rtd_theme."""

class Foo:

    r"""Docstring for class Foo.

    This text tests for the formatting of docstrings generated from output
    ``sphinx.ext.autodoc``. Which contain reST, but sphinx nests it in the
    ``<dl>``, and ``<dt>`` tags. Also, ``<tt>`` is used for class, method names
    and etc, but those will *always* have the ``.descname`` or
    ``.descclassname`` class.

    Normal ``<tt>`` (like the <tt> I just wrote here) needs to be shown with
    the same style as anything else with ````this type of markup````.

    It's common for programmers to give a code example inside of their
    docstring::

        from test_py_module import Foo

        myclass = Foo()
        myclass.dothismethod('with this argument')
        myclass.flush()

        print(myclass)

    """

    #: Doc comment for class attribute Foo.bar.
    #: It can have multiple lines.
    bar = 1

    flox = 1.5   #: Doc comment for Foo.flox. One line only.

    baz = 2
    """Docstring for class attribute Foo.baz."""

    def __init__(self, qux, spam=False):
        """Start the Foo.

        :param qux: The first argument to initialize class.
        :type qux: string
        :param spam: Spam me yes or no...
        :type spam: bool

        """
        #: Doc comment for instance attribute qux.
        self.qux = 3

        self.spam = 4
        """Docstring for instance attribute spam."""

    def add(self, val1, val2):
        """Return the added values.

        :param val1: First number to add.
        :type val1: int
        :param val2: Second number to add.
        :type val2: int
        :rtype: int

        """

        return val1 + val2

    def capitalize(self, myvalue):
        """Return a string as uppercase.

        :param myvalue: String to change
        :type myvalue: string
        :rtype: string

        """

        return myvalue.upper()
