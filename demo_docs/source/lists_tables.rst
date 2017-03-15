
**************
Lists & Tables
**************

A list
======

- here
  - is
  - some

    - list
    - items
    - `yahoo <http://www.yahoo.com>`_
    - ``huh``
- how
- ``inline literall``
- ``inline literall``
- ``inline literall``

Second list level
-----------------

- here is a list in a second-level section.
- `yahoo <http://www.yahoo.com>`_
- `yahoo <http://www.yahoo.com>`_

  - `yahoo <http://www.yahoo.com>`_
  - here is an inner bullet ``oh``

    - one more ``with an inline literally``. `yahoo <http://www.yahoo.com>`_
      
      heh heh. child. try to beat this embed:

      .. literalinclude:: test_py_module/test.py
          :language: python
          :linenos:
          :lines: 1-10
  - and another. `yahoo <http://www.yahoo.com>`_
  - `yahoo <http://www.yahoo.com>`_
  - ``hi``
- and hehe

But deeper down the rabbit hole
"""""""""""""""""""""""""""""""

- I kept saying that, "deeper down the rabbit hole". `yahoo <http://www.yahoo.com>`_

  - I cackle at night `yahoo <http://www.yahoo.com>`_.
- I'm so lonely here in GZ ``guangzhou``
- A man of python destiny, hopes and dreams. `yahoo <http://www.yahoo.com>`_

  - `yahoo <http://www.yahoo.com>`_

    - `yahoo <http://www.yahoo.com>`_ ``hi``
    - ``destiny``

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

Numbered List
=============

#. One,
#. Two.
#. Three with long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Sed feugiat sagittis neque quis eleifend. Duis rutrum lectus sit amet mattis suscipit.

- A) Using bullets and letters. (A)
- B) Using bullets and letters. (B)
- C) Using bullets and letters. (C)

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

Giant Tables
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
