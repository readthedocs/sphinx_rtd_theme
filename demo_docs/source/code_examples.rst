Code examples
============

JavaScript
----------

.. code-block:: js

  /*comment*/
  // comment
  /*
   * comment
  */
  const test = /\w+/
  const defg = 'defg'
  const testObject = {
    object: 'test',
    object2: 'test2',
    defg
  }
  const testArray = [...testObject]
  ['array', "array"]
  let arrowFunction = x => x * 2
  var data = new Date()
  const that = this
  let testTemplateString = `abc${defg}`
  export default that

  $(document).ready(function() {
  	$(document).keyup(function(event) {
  		var activeElementType = document.activeElement.tagName;
  		// don't navigate when in search box or textarea
  		if (activeElementType !== 'TEXTAREA' && activeElementType !== 'INPUT' && activeElementType !== 'SELECT') {
  			switch (event.keyCode) {
  				case 37: // left
  					var prevHref = $('link[rel="prev"]').prop('href');
  					if (prevHref) {
  						window.location.href = prevHref;
  						return false;
  					}
  				case 39: // right
  					var nextHref = $('link[rel="next"]').prop('href');
  					if (nextHref) {
  						window.location.href = nextHref;
  						return false;
  					}
  			}
  		}
  	});
  });
