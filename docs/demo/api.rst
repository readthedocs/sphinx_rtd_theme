***************************************
API documentation and generated content
***************************************

.. contents:: Table of Contents

:mod:`test_py_module`
=====================

.. automodule:: test_py_module.test
    :members:
    :private-members:
    :special-members:


C++ API
=======

.. cpp:type:: MyType

   Some type

.. cpp:function:: const MyType Foo(const MyType bar)

   Some function type thing

.. cpp:class:: template<typename T, std::size_t N> std::array

   Some cpp class

.. cpp:member:: float Sphinx::version

   The description of Sphinx::version.

.. cpp:var:: int version

   The description of version.

.. cpp:type:: std::vector<int> List

   The description of List type.

.. cpp:enum:: MyEnum

   An unscoped enum.

   .. cpp:enumerator:: A

.. cpp:enum-class:: MyScopedEnum

   A scoped enum.

   .. cpp:enumerator:: B

.. cpp:enum-struct:: protected MyScopedVisibilityEnum : std::underlying_type<MySpecificEnum>::type

   A scoped enum with non-default visibility, and with a specified underlying type.

   .. cpp:enumerator:: B


JavaScript API
==============

.. Copied from sphinx-doc/sphinx/tests/roots

.. js:module:: module_a.submodule

* Link to :js:class:`ModTopLevel`

.. js:class:: ModTopLevel

    * Link to :js:meth:`mod_child_1`
    * Link to :js:meth:`ModTopLevel.mod_child_1`

.. js:method:: ModTopLevel.mod_child_1

    * Link to :js:meth:`mod_child_2`

.. js:method:: ModTopLevel.mod_child_2

    * Link to :js:meth:`module_a.submodule.ModTopLevel.mod_child_1`

.. js:module:: module_b.submodule

* Link to :js:class:`ModTopLevel`

.. js:class:: ModNested

    .. js:method:: nested_child_1

        * Link to :js:meth:`nested_child_2`

    .. js:method:: nested_child_2

        * Link to :js:meth:`nested_child_1`


Generated Index
===============

Part of the sphinx build process in generate and index file: :ref:`genindex`.


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
.. _django-payments module docs: http://django-payments.readthedocs.org/en/latest/modules.html#payments.authorizenet.AuthorizeNetProvide


Data
====

.. data:: Data_item_1
          Data_item_2
          Data_item_3

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue elit eu hendrerit mattis.

Some data link :data:`Data_item_1`.
