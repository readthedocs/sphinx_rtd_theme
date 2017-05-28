// activate a courtesy newline at end of pre to allow copy-paste
var processPre = function()
{
  var pres = document.getElementsByTagName("pre");
  for (var i = 0; i < pres.length; ++i) {
      var pre = pres[i];
      pre.onmouseenter = function (e) {
          var childCount = e.srcElement.children.length;
          // if not already processed
          if (childCount == 0 || e.srcElement.children.item(childCount - 1).innerText != " ") {
              var divWidth = e.srcElement.parentElement.clientWidth;
              // if scrollbar is active
              if (e.srcElement.scrollWidth > divWidth) {
                  var lines = e.srcElement.innerText.split("\n");
                  var maxLineLength = 0;
                  for (var j = 0; j < lines.length; ++j) maxLineLength = Math.max(maxLineLength, lines[j].length);
                  var lastLineLength = lines[lines.length - 1].length;

                  // if last line overflow the current view, add courtesy blank line to allow selection
                  if (lastLineLength / maxLineLength >= divWidth / e.srcElement.scrollWidth) {
                      var p = document.createElement("p");
                      p.innerHTML = " ";
                      e.srcElement.appendChild(p);
                  }
              }
          }
      }

      pre.onmouseleave = function (e) {
          var childCount = e.srcElement.children.length;
          // if already processed
          if (childCount > 0 && e.srcElement.children.item(childCount - 1).innerText == " ") {
              e.srcElement.removeChild(e.srcElement.children.item(childCount - 1));
          }
      }
  }
}

processPre();
