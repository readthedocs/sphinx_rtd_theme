!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),e.exports=t(3)},function(e,n,t){(function(){var n="undefined"!=typeof window?window.jQuery:t(2);e.exports.ThemeNav={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:!1,enable:function(e){var t=this;void 0===e&&(e=!0),t.isRunning||(t.isRunning=!0,n((function(n){t.init(n),t.reset(),t.win.on("hashchange",t.reset),e&&t.win.on("scroll",(function(){t.linkScroll||t.winScroll||(t.winScroll=!0,requestAnimationFrame((function(){t.onScroll()})))})),t.win.on("resize",(function(){t.winResize||(t.winResize=!0,requestAnimationFrame((function(){t.onResize()})))})),t.onResize()})))},enableSticky:function(){this.enable(!0)},init:function(e){e(document);var n=this;this.navBar=e("div.wy-side-scroll:first"),this.win=e(window),e(document).on("click","[data-toggle='wy-nav-top']",(function(){e("[data-toggle='wy-nav-shift']").toggleClass("shift"),e("[data-toggle='rst-versions']").toggleClass("shift"),e(".wy-header").toggleClass("shift")})).on("click",".wy-menu-vertical .current ul li a",(function(){var t=e(this);e("[data-toggle='wy-nav-shift']").removeClass("shift"),e("[data-toggle='rst-versions']").toggleClass("shift"),e(".wy-header").toggleClass("shift"),n.toggleCurrent(t),n.hashChange()})).on("click","[data-toggle='rst-current-version']",(function(){e("[data-toggle='rst-versions']").toggleClass("shift-up")})),e("table.docutils:not(.field-list,.footnote,.citation)").wrap("<div class='wy-table-responsive'></div>"),e("table.docutils.footnote").wrap("<div class='wy-table-responsive footnote'></div>"),e("table.docutils.citation").wrap("<div class='wy-table-responsive citation'></div>"),e(".wy-menu-vertical ul").not(".simple").siblings("a").each((function(){var t=e(this);expand=e('<button class="toctree-expand" title="Open/close menu"></button>'),expand.on("click",(function(e){return n.toggleCurrent(t),e.stopPropagation(),!1})),t.prepend(expand)})),e(".wy-menu a[href^='#']").on("click",(function(n){n.preventDefault();var t=e(e(this).attr("href"));window.scrollTo({top:t.offset().top-70,left:0,behavior:"smooth"})}))},reset:function(){var e=encodeURI(window.location.hash)||"#";try{var n=$(".wy-menu-vertical"),t=n.find('[href="'+e+'"]');if(0===t.length){var i=$('.document [id="'+e.substring(1)+'"]').closest("div.section");0===(t=n.find('[href="#'+i.attr("id")+'"]')).length&&(t=n.find('[href="#"]'))}if(t.length>0){$(".wy-menu-vertical .current").removeClass("current").attr("aria-expanded","false"),t.addClass("current").attr("aria-expanded","true"),t.closest("li.toctree-l1").parent().addClass("current").attr("aria-expanded","true");for(let e=1;e<=10;e++)t.closest("li.toctree-l"+e).addClass("current").attr("aria-expanded","true");t[0].scrollIntoView()}}catch(e){console.log("Error expanding nav for anchor",e)}},onScroll:function(){this.winScroll=!1;var e=this.win.scrollTop(),n=e+this.winHeight,t=this.navBar.scrollTop()+(e-this.winPosition);e<0||n>this.docHeight||(this.navBar.scrollTop(t),this.winPosition=e)},onResize:function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},hashChange:function(){this.linkScroll=!0,this.win.one("hashchange",(function(){this.linkScroll=!1}))},toggleCurrent:function(e){var n=e.closest("li");n.siblings("li.current").removeClass("current").attr("aria-expanded","false"),n.siblings().find("li.current").removeClass("current").attr("aria-expanded","false");var t=n.find("> ul li");t.length&&(t.removeClass("current").attr("aria-expanded","false"),n.toggleClass("current").attr("aria-expanded",(function(e,n){return"true"==n?"false":"true"})))}},"undefined"!=typeof window&&(window.SphinxRtdTheme={Navigation:e.exports.ThemeNav,StickyNav:e.exports.ThemeNav}),function(){for(var e=0,n=["ms","moz","webkit","o"],t=0;t<n.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[n[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[t]+"CancelAnimationFrame"]||window[n[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,t){var i=(new Date).getTime(),o=Math.max(0,16-(i-e)),r=window.setTimeout((function(){n(i+o)}),o);return e=i+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}()}).call(window)},function(e,n){e.exports=jQuery},function(e,n,t){}]);