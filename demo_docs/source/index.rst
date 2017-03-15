
*****************************
Read the Docs Theme Demo Docs
*****************************

These documents are used to test and stress test the Read the Docs Theme.

:Last Reviewed: 2013-10-29

Contents
========

.. toctree::
    :maxdepth: 2
    :caption: Syntax Constructs

    structure
    demo
    lists_tables
    api

.. toctree::
    :maxdepth: 2
    :caption: This is an incredibly long caption for a long menu

    long

You can also read the :ref:`genindex`

Optional parameter args
=======================

At this point optional parameters `cannot be generated from code`_.
However, some projects will manually do it, like so:

This example comes from `django-payments module docs`_.

.. class:: payments.dotpay.DotpayProvider(seller_id, pin[, channel=0[, lock=False], lang='pl'])

   This backend implements payments using a popular Polish gateway, `Dotpay.pl <http://www.dotpay.pl>`_.

   Due to API limitations there is no support for transferring purchased items.


   :param seller_id: Seller ID assigned by Dotpay
   :param pin: PIN assigned by Dotpay
   :param channel: Default payment channel (consult reference guide)
   :param lang: UI language
   :param lock: Whether to disable channels other than the default selected above

.. _cannot be generated from code: https://groups.google.com/forum/#!topic/sphinx-users/_qfsVT5Vxpw
.. _django-payments module docs: http://django-payments.readthedocs.org/en/latest/modules.html#payments.authorizenet.AuthorizeNetProvider


Inline code and references
==========================

`reStructuredText`_ is a markup language. It can use roles and
declarations to turn reST into HTML.

In reST, ``*hello world*`` becomes ``<em>hello world</em>``. This is
because a library called `Docutils`_ was able to parse the reST and use a
``Writer`` to output it that way.

If I type ````an inline literal```` it will wrap it in ``<tt>``. You can
see more details on the `Inline Markup`_ on the Docutils homepage.

Also with ``sphinx.ext.autodoc``, which I use in the demo, I can link to
:class:`test_py_module.test.Foo`. It will link you right my code
documentation for it.

.. _reStructuredText: http://docutils.sourceforge.net/rst.html
.. _Docutils: http://docutils.sourceforge.net/
.. _Inline Markup: http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#inline-markup

Data
====

.. data:: Data_item_1
          Data_item_2
          Data_item_3

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue elit eu hendrerit mattis.

Some data link :data:`Data_item_1`.
