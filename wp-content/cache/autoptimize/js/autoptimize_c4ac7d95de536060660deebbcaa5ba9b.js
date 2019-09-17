/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
const animation=['none','bounce','flash','pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp','fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig','flipInX','flipInY','lightSpeedIn','rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','hinge','jackInTheBox','rollIn','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp','slideInDown','slideInLeft','slideInRight','slideInUp','heartBeat'];const delay=['none','delay-2s','delay-3s','delay-4s','delay-5s'];const speed=['none','slow','slower','fast','faster'];window.onload=()=>{const elements=document.querySelectorAll('.animated');for(const element of elements){classes=element.classList;element.animationClasses=[];if(!isElementInViewport(element)){const animationClass=animation.find(i=>{return Array.from(classes).find(o=>o===i);});const delayClass=delay.find(i=>{return Array.from(classes).find(o=>o===i);});const speedClass=speed.find(i=>{return Array.from(classes).find(o=>o===i);});element.classList.add('hidden-animated');if(animationClass){element.animationClasses.push(animationClass);element.classList.remove(animationClass);}
if(delayClass){element.animationClasses.push(delayClass);element.classList.remove(delayClass);}
if(speedClass){element.animationClasses.push(speedClass);element.classList.remove(speedClass);}}}
window.onscroll=()=>{for(const element of elements){if(element.getBoundingClientRect().top<=window.innerHeight*0.75&&0<element.getBoundingClientRect().top){if(element.animationClasses&&0<element.animationClasses.length){const classes=element.animationClasses;classes.forEach(i=>element.classList.add(i));element.classList.remove('hidden-animated');delete element.animationClasses;}}}};};const isElementInViewport=el=>{const scroll=window.scrollY||window.pageYOffset;const boundsTop=el.getBoundingClientRect().top+scroll;const viewport={top:scroll,bottom:scroll+window.innerHeight};const bounds={top:boundsTop,bottom:boundsTop+el.clientHeight};return(bounds.bottom>=viewport.top&&bounds.bottom<=viewport.bottom)||(bounds.top<=viewport.bottom&&bounds.top>=viewport.top);};
/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
!function(e){"use strict";var a=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);e(document).ready(function(){function t(){e("#tertiary.widget-area").length&&e(".nano").nanoScroller({preventPageScrolling:!0})}function s(){if(!a&&e("header.site-header").hasClass("withSticky")||a&&e("header.site-header").hasClass("yesMobile")){e("header.site-header").addClass("fixed"),e("body").is(".headerFeatImage, .attesa-full-width")?e("body").hasClass("withOverlayMenu")?e(".attesaFeatBox, body.attesa-full-width #content.site-content").css("margin-top",e(".nav-top").outerHeight()+"px"):e(".attesaFeatBox, body.attesa-full-width #content.site-content").css("margin-top",e("header.site-header").outerHeight()+"px"):e("#content.site-content").css("margin-top",e("header.site-header").outerHeight()+"px");var t=e("header.site-header"),s=e(".nav-top").outerHeight();t.size()&&e(window).scroll(function(){!t.hasClass("menuMinor")&&e(window).scrollTop()>0?(t.addClass("menuMinor"),t.hasClass("topbarscrollhide")&&t.css("margin-top","-"+s+"px"),e("body").addClass("menuMinor")):t.hasClass("menuMinor")&&e(window).scrollTop()<=0&&(t.removeClass("menuMinor"),e("body").removeClass("menuMinor"),t.css("margin-top","0px"))})}else e("body").is(".headerFeatImage, .attesa-full-width")&&e("body").hasClass("withOverlayMenu")&&(e("header.site-header").addClass("relative"),e(".attesaFeatBox, body.attesa-full-width #content.site-content").css("top","-"+e(".nav-middle").outerHeight()+"px"))}function o(){var t=e(".nav-middle-top-title").outerHeight(),s=e(".nav-middle").outerHeight()+t;if(!a&&e("header.site-header").hasClass("withSticky")||a&&e("header.site-header").hasClass("yesMobile")){e(".nav-middle.format_featuredtitle").addClass("mobileFixed");var o=e("header.site-header"),n=e(".nav-middle"),i=e(".nav-top"),l=e(".nav-top").outerHeight(),r=e("<div />",{class:"filter-drop-spacer",height:n.outerHeight()}),d=e("<div />",{class:"filter-drop-spacer-top",height:i.outerHeight()});if(o.hasClass("topbarscrollshow"))var c=l;else c=0;e("body").is(".headerFeatImage, .attesa-full-width")&&e("body").hasClass("withOverlayMenu")&&e(".attesaFeatBox, body.attesa-full-width #content.site-content").css("margin-top","-"+s+"px"),n.size()&&e(window).scroll(function(){o.hasClass("topbarscrollshow")&&e(window).scrollTop()>i.offset().top?(i.addClass("fixed"),i.before(d)):o.hasClass("topbarscrollshow")&&e(window).scrollTop()<=d.offset().top?(d.remove(),i.removeClass("fixed")):!o.hasClass("menuMinor")&&e(window).scrollTop()+c>n.offset().top?(n.addClass("fixed"),o.hasClass("topbarscrollshow")&&n.css("top",l+"px"),n.addClass("menuMinor"),o.addClass("menuMinor"),n.before(r)):o.hasClass("menuMinor")&&e(window).scrollTop()+c<=r.offset().top&&(n.removeClass("fixed"),n.removeClass("menuMinor"),o.removeClass("menuMinor"),r.remove(),n.css("top","0px"))})}else e("body").is(".headerFeatImage, .attesa-full-width")&&e("body").hasClass("withOverlayMenu")&&e(".attesaFeatBox, body.attesa-full-width #content.site-content").css("margin-top","-"+s+"px")}e(".attesaLoader").length&&e(".attesaLoader").delay(600).fadeOut(1e3),e(".hamburger-menu, .opacityBox, .close-hamburger").click(function(){e(".hamburger-menu, .opacityBox, body, #tertiary.widget-area").toggleClass("yesOpen")}),e(".search-icon").click(function(){e(".search-icon, .search-container, body").toggleClass("yesOpenSearch"),e(".search-container").fadeToggle(300),a||e(".search-container .search-field").focus()}),t(),e("aside ul.menu, aside ul.product-categories").length&&(e("aside ul.menu, aside ul.product-categories").find("li").each(function(){e(this).children("ul").length>0&&e(this).append('<span class="indiContainer"><span class="indicatorBar"></span></div>'),e(".indiContainer").css("height",e("aside ul li").outerHeight()+"px")}),e("aside ul.menu > li.menu-item-has-children .indicatorBar, .aside ul.menu > li.page_item_has_children .indicatorBar, aside ul.product-categories > li.cat-parent .indicatorBar").click(function(){e(this).parents("li").find("> ul.sub-menu, > ul.children").toggleClass("yesOpenBar"),e(this).toggleClass("yesOpenBar");var a=e(this).parents("li");a.find("> ul.sub-menu, > ul.children").hasClass("yesOpenBar")?a.find("> ul.sub-menu, > ul.children").slideDown(300):a.find("> ul.sub-menu, > ul.children").slideUp(200)})),e(window).width()<=1025&&(e(".main-navigation").find("li").each(function(){e(this).children("ul").length>0&&e(this).append('<span class="indicator"></span>')}),e(".main-navigation ul > li.menu-item-has-children .indicator, .main-navigation ul > li.page_item_has_children .indicator").click(function(){e(this).parent().find("> ul.sub-menu, > ul.children").toggleClass("yesOpen"),e(this).toggleClass("yesOpen");var a=e(this).parent();a.find("> ul.sub-menu, > ul.children").hasClass("yesOpen")?a.find("> ul.sub-menu, > ul.children").slideDown(300):a.find("> ul.sub-menu, > ul.children").slideUp(200)})),e(window).resize(function(){e(window).width()>1025&&e(".main-navigation ul > li.menu-item-has-children, .main-navigation ul > li.page_item_has_children").find("> ul.sub-menu, > ul.children").slideDown(300)}),e("body").hasClass("mobile_menu_pushmenu")?e(".format_compat .subHead .menu-toggle, .format_featuredtitle .subHead .menu-toggle, .attesa-close-pushmenu, .opacityMenu, .subHead.attesa-elementor-menu .menu-toggle").click(function(){e(".attesa-main-menu-container, .opacityMenu").toggleClass("menuOpen")}):e(".format_compat .subHead .menu-toggle, .format_featuredtitle .subHead .menu-toggle, .subHead.attesa-elementor-menu .menu-toggle").click(function(){e(".attesa-main-menu-container").slideToggle("fast")}),e("#top-navigation .menu-toggle-top").click(function(){e(".third-navigation div > ul").slideToggle("fast")}),e(".menu-full-screen-icon").click(function(){e(".attesa-main-menu-full-screen").hasClass("yesOpenPopupMenu")?(e(".attesa-main-menu-full-screen, body").removeClass("yesOpenPopupMenu"),e("html").removeClass("overflowpopup")):(e(".attesa-main-menu-full-screen, body").addClass("yesOpenPopupMenu"),e("html").addClass("overflowpopup"))}),e('ul.menu a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=e(this.hash);if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:a.offset().top-60},1e3),e("body").hasClass("mobile_menu_pushmenu")?e(".attesa-main-menu-container, .opacityMenu").removeClass("menuOpen"):e("body").hasClass("mobile_menu_dropdown")?e(".attesa-main-menu-container").hide("fast"):(e(".attesa-main-menu-full-screen, body").removeClass("yesOpenPopupMenu"),e("html").removeClass("overflowpopup")),!1}}),e("#toTop").length&&(a&&!e("#toTop").hasClass("scrolltop_on")||(e(window).scroll(function(){e(this).scrollTop()>700?e("#toTop").addClass("visible"):e("#toTop").removeClass("visible")}),e("#toTop").click(function(){return e("html, body").animate({scrollTop:0},1e3),!1}))),e(".nav-middle-top-title").length?o():s(),e(window).resize(function(){t(),e(".nav-middle-top-title").length?o():s()})}),e(window).load(function(){e(".attesa-woocommerce-sticky-product").length&&(e(window).scroll(function(){var a=e(".woocommerce .content-area .summary").offset().top-e("header.site-header").outerHeight(),t=e(".woocommerce .content-area .summary").height(),s=e(".footer-bottom-area").offset().top,o=e(window).scrollTop(),n=e(window).height();o>=a+t&&o<s-n?(e(".attesa-woocommerce-sticky-product").addClass("slideInUp"),e(".attesa-woocommerce-sticky-product").removeClass("slideOutDown")):(e(".attesa-woocommerce-sticky-product").removeClass("slideInUp"),e(".attesa-woocommerce-sticky-product").addClass("slideOutDown"))}),e(".attesa-woocommerce-sticky-product .attesa-sticky-button").click(function(){return e("html,body").animate({scrollTop:e(".woocommerce div.product").offset().top-e("header.site-header").outerHeight()-30},500),!1}))})}(jQuery);

!function(){var e,t,o,n,r={frameRate:150,animationTime:1200,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},a=r,l=!1,i=!1,c={x:0,y:0},u=!1,s=document.documentElement,d=[],f=/^Mac/.test(navigator.platform),m={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},h={37:1,38:1,39:1,40:1};function w(){if(!u&&document.body){u=!0;var n=document.body,r=document.documentElement,c=window.innerHeight,d=n.scrollHeight;if(s=document.compatMode.indexOf("CSS")>=0?r:n,e=n,a.keyboardSupport&&A("keydown",S),top!=self)i=!0;else if(Z&&d>c&&(n.offsetHeight<=c||r.offsetHeight<=c)){var f,m=document.createElement("div");m.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+s.scrollHeight+"px",document.body.appendChild(m),o=function(){f||(f=setTimeout(function(){l||(m.style.height="0",m.style.height=s.scrollHeight+"px",f=null)},500))},setTimeout(o,10),A("resize",o);if((t=new q(o)).observe(n,{attributes:!0,childList:!0,characterData:!1}),s.offsetHeight<=c){var h=document.createElement("div");h.style.clear="both",n.appendChild(h)}}a.fixedBackground||l||(n.style.backgroundAttachment="scroll",r.style.backgroundAttachment="scroll")}}var p=[],v=!1,y=Date.now();function b(e,t,o){var n,r;if(n=(n=t)>0?1:-1,r=(r=o)>0?1:-1,(c.x!==n||c.y!==r)&&(c.x=n,c.y=r,p=[],y=0),1!=a.accelerationMax){var l=Date.now()-y;if(l<a.accelerationDelta){var i=(1+50/l)/2;i>1&&(i=Math.min(i,a.accelerationMax),t*=i,o*=i)}y=Date.now()}if(p.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:Date.now()}),!v){var u=V(),s=e===u||e===document.body;null==e.$scrollBehavior&&function(e){var t=M(e);if(null==B[t]){var o=getComputedStyle(e,"")["scroll-behavior"];B[t]="smooth"==o}return B[t]}(e)&&(e.$scrollBehavior=e.style.scrollBehavior,e.style.scrollBehavior="auto");var d=function(n){for(var r=Date.now(),l=0,i=0,c=0;c<p.length;c++){var u=p[c],f=r-u.start,m=f>=a.animationTime,h=m?1:f/a.animationTime;a.pulseAlgorithm&&(h=I(h));var w=u.x*h-u.lastX>>0,y=u.y*h-u.lastY>>0;l+=w,i+=y,u.lastX+=w,u.lastY+=y,m&&(p.splice(c,1),c--)}s?window.scrollBy(l,i):(l&&(e.scrollLeft+=l),i&&(e.scrollTop+=i)),t||o||(p=[]),p.length?R(d,e,1e3/a.frameRate+1):(v=!1,null!=e.$scrollBehavior&&(e.style.scrollBehavior=e.$scrollBehavior,e.$scrollBehavior=null))};R(d,e,0),v=!0}}function g(t){u||w();var o=t.target;if(t.defaultPrevented||t.ctrlKey)return!0;if(K(e,"embed")||K(o,"embed")&&/\.pdf/i.test(o.src)||K(e,"object")||o.shadowRoot)return!0;var r=-t.wheelDeltaX||t.deltaX||0,l=-t.wheelDeltaY||t.deltaY||0;f&&(t.wheelDeltaX&&P(t.wheelDeltaX,120)&&(r=t.wheelDeltaX/Math.abs(t.wheelDeltaX)*-120),t.wheelDeltaY&&P(t.wheelDeltaY,120)&&(l=t.wheelDeltaY/Math.abs(t.wheelDeltaY)*-120)),r||l||(l=-t.wheelDelta||0),1===t.deltaMode&&(r*=40,l*=40);var c=L(o);return c?!!function(e){if(!e)return;d.length||(d=[e,e,e]);e=Math.abs(e),d.push(e),d.shift(),clearTimeout(n),n=setTimeout(function(){try{localStorage.SS_deltaBuffer=d.join(",")}catch(e){}},1e3);var t=e>120&&$(e);return!$(120)&&!$(100)&&!t}(l)||(Math.abs(r)>1.2&&(r*=a.stepSize/120),Math.abs(l)>1.2&&(l*=a.stepSize/120),b(c,r,l),t.preventDefault(),void C()):!i||!U||(Object.defineProperty(t,"target",{value:window.frameElement}),parent.wheel(t))}function S(t){var o=t.target,n=t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&t.keyCode!==m.spacebar;document.body.contains(e)||(e=document.activeElement);var r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(t.defaultPrevented||/^(textarea|select|embed|object)$/i.test(o.nodeName)||K(o,"input")&&!r.test(o.type)||K(e,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(t)||o.isContentEditable||n)return!0;if((K(o,"button")||K(o,"input")&&r.test(o.type))&&t.keyCode===m.spacebar)return!0;if(K(o,"input")&&"radio"==o.type&&h[t.keyCode])return!0;var l=0,c=0,u=L(e);if(!u)return!i||!U||parent.keydown(t);var s=u.clientHeight;switch(u==document.body&&(s=window.innerHeight),t.keyCode){case m.up:c=-a.arrowScroll;break;case m.down:c=a.arrowScroll;break;case m.spacebar:c=-(t.shiftKey?1:-1)*s*.9;break;case m.pageup:c=.9*-s;break;case m.pagedown:c=.9*s;break;case m.home:u==document.body&&document.scrollingElement&&(u=document.scrollingElement),c=-u.scrollTop;break;case m.end:var d=u.scrollHeight-u.scrollTop-s;c=d>0?d+10:0;break;case m.left:l=-a.arrowScroll;break;case m.right:l=a.arrowScroll;break;default:return!0}b(u,l,c),t.preventDefault(),C()}function x(t){e=t.target}var k,D,M=(k=0,function(e){return e.uniqueID||(e.uniqueID=k++)}),E={},T={},B={};function C(){clearTimeout(D),D=setInterval(function(){E=T=B={}},1e3)}function H(e,t,o){for(var n=o?E:T,r=e.length;r--;)n[M(e[r])]=t;return t}function z(e,t){return(t?E:T)[M(e)]}function L(e){var t=[],o=document.body,n=s.scrollHeight;do{var r=z(e,!1);if(r)return H(t,r);if(t.push(e),n===e.scrollHeight){var a=X(s)&&X(o)||Y(s);if(i&&O(s)||!i&&a)return H(t,V())}else if(O(e)&&Y(e))return H(t,e)}while(e=e.parentElement)}function O(e){return e.clientHeight+10<e.scrollHeight}function X(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function Y(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function A(e,t,o){window.addEventListener(e,t,o||!1)}function N(e,t,o){window.removeEventListener(e,t,o||!1)}function K(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{d=localStorage.SS_deltaBuffer.split(",")}catch(e){}function P(e,t){return Math.floor(e/t)==e/t}function $(e){return P(d[0],e)&&P(d[1],e)&&P(d[2],e)}var j,R=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},q=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,V=(j=document.scrollingElement,function(){if(!j){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),j=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return j});function F(e){var t,o;return(e*=a.pulseScale)<1?t=e-(1-Math.exp(-e)):(e-=1,t=(o=Math.exp(-1))+(1-Math.exp(-e))*(1-o)),t*a.pulseNormalize}function I(e){return e>=1?1:e<=0?0:(1==a.pulseNormalize&&(a.pulseNormalize/=F(1)),F(e))}var _=window.navigator.userAgent,W=/Edge/.test(_),U=/chrome/i.test(_)&&!W,G=/safari/i.test(_)&&!W,J=/mobile/i.test(_),Q=/Windows NT 6.1/i.test(_)&&/rv:11/i.test(_),Z=G&&(/Version\/8/i.test(_)||/Version\/9/i.test(_)),ee=(U||G||Q)&&!J,te=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){te=!0}}))}catch(e){}var oe=!!te&&{passive:!1},ne="onwheel"in document.createElement("div")?"wheel":"mousewheel";function re(e){for(var t in e)r.hasOwnProperty(t)&&(a[t]=e[t])}ne&&ee&&(A(ne,g,oe),A("mousedown",x),A("load",w)),re.destroy=function(){t&&t.disconnect(),N(ne,g),N("mousedown",x),N("keydown",S),N("resize",o),N("load",w)},window.SmoothScrollOptions&&re(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return re}):"object"==typeof exports?module.exports=re:window.SmoothScroll=re}();