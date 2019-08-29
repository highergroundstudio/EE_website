/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
(function(){function debounce(func,wait,immediate){'use strict';var timeout;wait=(typeof wait!=='undefined')?wait:20;immediate=(typeof immediate!=='undefined')?immediate:true;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate){func.apply(context,args);}};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow){func.apply(context,args);}};}
function prependElement(container,element){if(container.firstChild.nextSibling){return container.insertBefore(element,container.firstChild.nextSibling);}else{return container.appendChild(element);}}
function showButton(element){element.className=element.className.replace('is-empty','');}
function hideButton(element){if(!element.classList.contains('is-empty')){element.className+=' is-empty';}}
function getAvailableSpace(button,container){return container.offsetWidth-button.offsetWidth-22;}
function isOverflowingNavivation(list,button,container){return list.offsetWidth>getAvailableSpace(button,container);}
var navContainer=document.querySelector('.main-navigation');var breaks=[];if(!navContainer){return;}
function updateNavigationMenu(container){if(!container.parentNode.querySelector('.main-menu[id]')){return;}
var visibleList=container.parentNode.querySelector('.main-menu[id]');var hiddenList=visibleList.parentNode.nextElementSibling.querySelector('.hidden-links');var toggleButton=visibleList.parentNode.nextElementSibling.querySelector('.main-menu-more-toggle');if(isOverflowingNavivation(visibleList,toggleButton,container)){breaks.push(visibleList.offsetWidth);prependElement(hiddenList,!visibleList.lastChild||null===visibleList.lastChild?visibleList.previousElementSibling:visibleList.lastChild);showButton(toggleButton);}else{if(getAvailableSpace(toggleButton,container)>breaks[breaks.length-1]){visibleList.appendChild(hiddenList.firstChild.nextSibling);breaks.pop();}
if(breaks.length<2){hideButton(toggleButton);}}
if(isOverflowingNavivation(visibleList,toggleButton,container)){updateNavigationMenu(container);}}
document.addEventListener('DOMContentLoaded',function(){updateNavigationMenu(navContainer);var hasSelectiveRefresh=('undefined'!==typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.navMenusPreview.NavMenuInstancePartial);if(hasSelectiveRefresh){wp.customize.selectiveRefresh.bind('partial-content-rendered',function(placement){var isNewNavMenu=(placement&&placement.partial.id.includes('nav_menu_instance')&&'null'!==placement.container[0].parentNode&&placement.container[0].parentNode.classList.contains('main-navigation'));if(isNewNavMenu){updateNavigationMenu(placement.container[0].parentNode);}});}});window.addEventListener('load',function(){updateNavigationMenu(navContainer);});var isResizing=false;window.addEventListener('resize',debounce(function(){if(isResizing){return;}
isResizing=true;setTimeout(function(){updateNavigationMenu(navContainer);isResizing=false;},150);}));updateNavigationMenu(navContainer);})();
(function(){function debounce(func,wait,immediate){'use strict';var timeout;wait=(typeof wait!=='undefined')?wait:20;immediate=(typeof immediate!=='undefined')?immediate:true;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate){func.apply(context,args);}};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow){func.apply(context,args);}};}
function addClass(el,cls){if(!el.className.match('(?:^|\\s)'+cls+'(?!\\S)')){el.className+=' '+cls;}}
function deleteClass(el,cls){el.className=el.className.replace(new RegExp('(?:^|\\s)'+cls+'(?!\\S)'),'');}
function hasClass(el,cls){if(el.className.match('(?:^|\\s)'+cls+'(?!\\S)')){return true;}}
function toggleAriaExpandedState(ariaItem){'use strict';var ariaState=ariaItem.getAttribute('aria-expanded');if(ariaState==='true'){ariaState='false';}else{ariaState='true';}
ariaItem.setAttribute('aria-expanded',ariaState);}
function openSubMenu(currentSubMenu){'use strict';currentSubMenu.parentElement.className+=' off-canvas';currentSubMenu.parentElement.lastElementChild.className+=' expanded-true';toggleAriaExpandedState(currentSubMenu);}
function closeSubMenu(currentSubMenu){'use strict';var menuItem=getCurrentParent(currentSubMenu,'.menu-item');var menuItemAria=menuItem.querySelector('a[aria-expanded]');var subMenu=currentSubMenu.closest('.sub-menu');if(getCurrentParent(currentSubMenu,'ul').classList.contains('sub-menu')){menuItem.className=menuItem.className.replace('off-canvas','');subMenu.className=subMenu.className.replace('expanded-true','');toggleAriaExpandedState(menuItemAria);}else{menuItem.className=menuItem.className.replace('off-canvas','');menuItem.lastElementChild.className=menuItem.lastElementChild.className.replace('expanded-true','');toggleAriaExpandedState(menuItemAria);}}
function getCurrentParent(child,selector,stopSelector){var currentParent=null;while(child){if(child.matches(selector)){currentParent=child;break;}else if(stopSelector&&child.matches(stopSelector)){break;}
child=child.parentElement;}
return currentParent;}
function removeAllFocusStates(){'use strict';var siteBranding=document.getElementsByClassName('site-branding')[0];var getFocusedElements=siteBranding.querySelectorAll(':hover, :focus, :focus-within');var getFocusedClassElements=siteBranding.querySelectorAll('.is-focused');var i;var o;for(i=0;i<getFocusedElements.length;i++){getFocusedElements[i].blur();}
for(o=0;o<getFocusedClassElements.length;o++){deleteClass(getFocusedClassElements[o],'is-focused');}}
if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector;}
function toggleSubmenuDisplay(){document.addEventListener('touchstart',function(event){if(event.target.matches('a')){var url=event.target.getAttribute('href')?event.target.getAttribute('href'):'';if('#'===url&&event.target.nextSibling.matches('.submenu-expand')){openSubMenu(event.target);}}
if(event.target.matches('.submenu-expand')){openSubMenu(event.target);}else if(null!=getCurrentParent(event.target,'.submenu-expand')&&getCurrentParent(event.target,'.submenu-expand').matches('.submenu-expand')){openSubMenu(getCurrentParent(event.target,'.submenu-expand'));}else if(event.target.matches('.menu-item-link-return')){closeSubMenu(event.target);}else if(null!=getCurrentParent(event.target,'.menu-item-link-return')&&getCurrentParent(event.target,'.menu-item-link-return').matches('.menu-item-link-return')){closeSubMenu(event.target);}
removeAllFocusStates();},false);document.addEventListener('touchend',function(event){var mainNav=getCurrentParent(event.target,'.main-navigation');if(null!=mainNav&&hasClass(mainNav,'.main-navigation')){event.preventDefault();}else if(event.target.matches('.submenu-expand')||null!=getCurrentParent(event.target,'.submenu-expand')&&getCurrentParent(event.target,'.submenu-expand').matches('.submenu-expand')||event.target.matches('.menu-item-link-return')||null!=getCurrentParent(event.target,'.menu-item-link-return')&&getCurrentParent(event.target,'.menu-item-link-return').matches('.menu-item-link-return')){event.preventDefault();}
removeAllFocusStates();},false);document.addEventListener('focus',function(event){if(event.target.matches('.main-navigation > div > ul > li a')){var currentDiv=getCurrentParent(event.target,'div','.main-navigation');var currentDivSibling=currentDiv.previousElementSibling===null?currentDiv.nextElementSibling:currentDiv.previousElementSibling;var focusedElement=currentDivSibling.querySelector('.is-focused');var focusedClass='is-focused';var prevLi=getCurrentParent(event.target,'.main-navigation > div > ul > li','.main-navigation').previousElementSibling;var nextLi=getCurrentParent(event.target,'.main-navigation > div > ul > li','.main-navigation').nextElementSibling;if(null!==focusedElement&&null!==hasClass(focusedElement,focusedClass)){deleteClass(focusedElement,focusedClass);}
if(getCurrentParent(event.target,'.main-navigation > div > ul > li','.main-navigation')){addClass(getCurrentParent(event.target,'.main-navigation > div > ul > li','.main-navigation'),focusedClass);}
if(prevLi&&hasClass(prevLi,focusedClass)){deleteClass(prevLi,focusedClass);}
if(nextLi&&hasClass(nextLi,focusedClass)){deleteClass(nextLi,focusedClass);}}},true);document.addEventListener('click',function(event){if(event.target!==document.getElementsByClassName('site-branding')[0]){removeAllFocusStates();}else{}},false);}
document.addEventListener('DOMContentLoaded',function(){toggleSubmenuDisplay();});document.addEventListener('customize-preview-menu-refreshed',function(e,params){if('menu-1'===params.wpNavMenuArgs.theme_location){toggleSubmenuDisplay();}});var isResizing=false;window.addEventListener('resize',function(){isResizing=true;debounce(function(){if(isResizing){return;}
toggleSubmenuDisplay();isResizing=false;},150);});})();
jQuery(document).ready(function()
{var percentage=jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar').attr('percentage');var rotate=percentage*1.8;jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').css({'-webkit-transform':'rotate('+rotate+'deg)','-ms-transform':'rotate('+rotate+'deg)','transform':'rotate('+rotate+'deg)'});jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .inset').css('background-color',jQuery('#wp-admin-bar-autoptimize .ab-sub-wrapper').css('background-color'));jQuery('#wp-admin-bar-autoptimize-delete-cache .ab-item').css('background-color',jQuery('#wpadminbar').css('background-color'));jQuery('#wp-admin-bar-autoptimize-default li').click(function(e)
{var id=(typeof e.target.id!='undefined'&&e.target.id)?e.target.id:jQuery(e.target).parent('li').attr('id');var action='';if(id=='wp-admin-bar-autoptimize-delete-cache'){action='autoptimize_delete_cache';}else{return;}
jQuery('#wp-admin-bar-autoptimize').removeClass('hover');var modal_loading=jQuery('<div class="autoptimize-loading"></div>').appendTo('body').show();var success=function(){jQuery('#wp-admin-bar-autoptimize-cache-info .size').attr('class','size green').html('0.00 B');jQuery('#wp-admin-bar-autoptimize-cache-info .files').html('0');jQuery('#wp-admin-bar-autoptimize-cache-info .percentage .numbers').attr('class','numbers green').html('0%');jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').attr('class','fill bg-green');jQuery('#wp-admin-bar-autoptimize').attr('class','menupop bullet-green');jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').css({'-webkit-transform':'rotate(0deg)','-ms-transform':'rotate(0deg)','transform':'rotate(0deg)'});};var notice=function(){jQuery('<div id="ao-delete-cache-timeout" class="notice notice-error is-dismissible"><p><strong><span style="display:block;clear:both;">'+autoptimize_ajax_object.error_msg+'</span></strong></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">'+autoptimize_ajax_object.dismiss_msg+'</span></button></div><br>').insertAfter('#wpbody .wrap h1:first-of-type').show();};jQuery.ajax({type:'GET',url:autoptimize_ajax_object.ajaxurl,data:{'action':action,'nonce':autoptimize_ajax_object.nonce},dataType:'json',cache:false,timeout:9000,success:function(cleared)
{modal_loading.remove();if(cleared){success();}else{notice();}},error:function(jqXHR,textStatus)
{modal_loading.remove();notice();}});});});