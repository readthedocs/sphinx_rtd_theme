.. Sphinx RTD theme demo documentation master file, created by
   sphinx-quickstart on Sun Nov  3 11:56:36 2013.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

=================================================
Demo Docs
=================================================

:Page Status: Incomplete
:Last Reviewed: 2013-10-29

Contents:

.. toctree::
    :maxdepth: 2
    :caption: Sweet Docs

    demo
    list

.. toctree::
    :maxdepth: 2

    toc

.. toctree::
    :maxdepth: 2
    :caption: This is an incredibly long caption for a long menu

    long
    api

You can also read the :ref:`genindex`

Maaaaath!
=========

This is a test. Here is an equation:
:math:`X_{0:5} = (X_0, X_1, X_2, X_3, X_4)`.
Here is another:

.. math::

    \nabla^2 f =
    \frac{1}{r^2} \frac{\partial}{\partial r}
    \left( r^2 \frac{\partial f}{\partial r} \right) +
    \frac{1}{r^2 \sin \theta} \frac{\partial f}{\partial \theta}
    \left( \sin \theta \, \frac{\partial f}{\partial \theta} \right) +
    \frac{1}{r^2 \sin^2\theta} \frac{\partial^2 f}{\partial \phi^2}

Tables
======

List tables
-----------

.. list-table:: List tables can have captions like this one.
    :widths: 10 5 10 50
    :header-rows: 1
    :stub-columns: 1

    * - List table
      - Header 1
      - Header 2
      - Header 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet mauris arcu.
    * - Stub Row 1
      - Row 1
      - Column 2
      - Column 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet mauris arcu.
    * - Stub Row 2
      - Row 2
      - Column 2
      - Column 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet mauris arcu.
    * - Stub Row 3
      - Row 3
      - Column 2
      - Column 3 long. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet mauris arcu.

.. list-table:: This is a list table with images in it.

    * - .. figure:: static/yi_jing_01_chien.jpg

           This is a short caption for a figure.

      - .. figure:: static/yi_jing_01_chien.jpg

           This is a long caption for a figure. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Donec porttitor dolor in odio posuere, vitae ornare libero mattis. In lobortis justo vestibulum nibh aliquet, non.

Hlists
------

.. hlist::
    :columns: 2

    - First item
    - Second item
    - Third item
    - Forth item
    - Fifth item
    - Sixths item

.. rubric:: Hlist with images

.. hlist::
    :columns: 2

    - .. figure:: static/yi_jing_01_chien.jpg

         This is a short caption for a figure.

    - .. figure:: static/yi_jing_01_chien.jpg

         This is a long caption for a figure. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Donec porttitor dolor in odio posuere, vitae ornare libero mattis. In lobortis justo vestibulum nibh aliquet, non.

Giant tables
------------

+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| Header 1   | Header 2   | Header 3  | Header 1   | Header 2   | Header 3  | Header 1   | Header 2   | Header 3  | Header 1   | Header 2   | Header 3  |
+============+============+===========+============+============+===========+============+============+===========+============+============+===========+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+
| body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  | body row 1 | column 2   | column 3  |
+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+------------+------------+-----------+

Optional parameter args
-----------------------

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

Code test
=========

.. parsed-literal::

    # parsed-literal test
    curl -O http://someurl/release-|version|.tar-gz


.. code-block:: json

    {
    "windows": [
        {
        "panes": [
            {
            "shell_command": [
                "echo 'did you know'",
                "echo 'you can inline'"
            ]
            },
            {
            "shell_command": "echo 'single commands'"
            },
            "echo 'for panes'"
        ],
        "window_name": "long form"
        }
    ],
    "session_name": "shorthands"
    }

Sidebar
=======

.. sidebar:: Ch'ien / The Creative

    .. image:: static/yi_jing_01_chien.jpg

    *Above* CH'IEN THE CREATIVE, HEAVEN

    *Below* CH'IEN THE CREATIVE, HEAVEN

The first hexagram is made up of six unbroken lines. These unbroken lines stand for the primal power, which is light-giving, active, strong, and of the spirit. The hexagram is consistently strong in character, and since it is without weakness, its essence is power or energy. Its image is heaven. Its energy is represented as unrestricted by any fixed conditions in space and is therefore conceived of as motion. Time is regarded as the basis of this motion. Thus the hexagram includes also the power of time and the power of persisting in time, that is, duration.

The power represented by the hexagram is to be interpreted in a dual sense in terms of its action on the universe and of its action on the world of men. In relation to the universe, the hexagram expresses the strong, creative action of the Deity. In relation to the human world, it denotes the creative action of the holy man or sage, of the ruler or leader of men, who through his power awakens and develops their higher nature.

Code with Sidebar
=================

.. sidebar:: A code example

    With a sidebar on the right.

.. literalinclude:: test_py_module/test.py
    :language: python
    :caption: Literal includes can also have captions.
    :linenos:
    :lines: 1-40

Boxes
=====

.. tip::
    Equations within a note
    :math:`G_{\mu\nu} = 8 \pi G (T_{\mu\nu}  + \rho_\Lambda g_{\mu\nu})`.

.. note::
    Equations within a note
    :math:`G_{\mu\nu} = 8 \pi G (T_{\mu\nu}  + \rho_\Lambda g_{\mu\nu})`.

.. danger::
    Equations within a note
    :math:`G_{\mu\nu} = 8 \pi G (T_{\mu\nu}  + \rho_\Lambda g_{\mu\nu})`.

.. warning::
    Equations within a note
    :math:`G_{\mu\nu} = 8 \pi G (T_{\mu\nu}  + \rho_\Lambda g_{\mu\nu})`.


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

.. note:: Every other line in this table will have white text on a white background.
            This is bad.

    +---------+
    | Example |
    +=========+
    | Thing1  |
    +---------+
    | Thing2  |
    +---------+
    | Thing3  |
    +---------+

Emphasized lines with line numbers
==================================

.. code-block:: python
   :linenos:
   :emphasize-lines: 3,5

   def some_function():
       interesting = False
       print 'This line is highlighted.'
       print 'This one is not...'
       print '...but this one is.'


Citation
========

Here I am making a citation [1]_, another [2]_ and another [3]_

.. [1] This is the citation I made, let's make this extremely long so that we can tell that it doesn't follow the normal responsive table stuff.

.. [2] This citation has some ``code blocks`` in it, maybe some **bold** and
       *italics* too. Heck, lets put a link to a meta citation [3]_ too.

.. [3] This citation will have two backlinks.

======
Images
======

.. figure:: static/yi_jing_01_chien.jpg
    :align: right

    This is a caption for a figure. It can be very long and span several lines.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed facilisis metus.
Ut non dui tellus. Fusce at posuere urna, id posuere elit. Donec pretium sit amet arcu ut eleifend.
Nullam venenatis quis ex sit amet ultricies. Cras euismod ex sed hendrerit vestibulum.
Phasellus aliquam efficitur lectus, a laoreet turpis dignissim sit amet. Nullam euismod ornare rhoncus.
Donec semper felis vitae turpis malesuada, at imperdiet sem elementum.
Nullam non leo nec nunc accumsan rhoncus in vel quam. Vivamus rutrum molestie tellus vitae commodo.
Praesent congue interdum lobortis. Ut a arcu suscipit, vehicula mi sit amet, suscipit risus.
Suspendisse pulvinar sagittis tincidunt. Sed et ornare urna. Integer mauris lectus, facilisis et nulla id,
semper faucibus eros. Ut rhoncus enim est, sit amet dapibus arcu gravida a.
Morbi quam nisl, feugiat id vehicula non, fringilla ac nisi. Nulla ac risus et nisl semper interdum non vitae odio.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Aenean nec tincidunt odio. Nam ex quam, egestas ut nisi eu, interdum commodo arcu.
Mauris venenatis nisi eu condimentum tincidunt. Maecenas eu odio eleifend, fermentum turpis sit amet, faucibus ex.



Download links
==============

:download:`This long long long long long long long long long long long long long long long download link should be blue, normal weight text with a leading icon, and should wrap white-spaces <static/yi_jing_01_chien.jpg>`
