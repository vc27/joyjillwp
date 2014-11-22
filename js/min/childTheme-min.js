/**
* @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
function get_ie_version(){}!function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=w.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=m[e[g]];return t||(t={},f++,e[g]=f,m[f]=t),t}function a(e,n,i){if(n||(n=t),v)return n.createElement(e);i||(i=o(n));var a;return a=i.cache[e]?i.cache[e].cloneNode():u.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!a.canHaveChildren||d.test(e)||a.tagUrn?a:i.frag.appendChild(a)}function r(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),r=0,s=i(),l=s.length;l>r;r++)a.createElement(s[r]);return a}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return w.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(w,t.frag)}function l(e){e||(e=t);var i=o(e);return!w.shivCSS||p||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||s(e,i),e}var c="3.7.0",h=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p,g="_html5shiv",f=0,m={},v;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){p=!0,v=!0}}();var w={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:h.shivCSS!==!1,supportsUnknownElements:v,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:r};e.html5=w,l(t)}(this,document),function(e){"use strict";e.matchMedia=e.matchMedia||function(e,t){var n,i=e.documentElement,o=i.firstElementChild||i.firstChild,a=e.createElement("body"),r=e.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",a.style.background="none",a.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',i.insertBefore(a,o),n=42===r.offsetWidth,i.removeChild(a),{matches:n,media:e}}}(e.document)}(this),function(e){"use strict";function t(){b(!0)}var n={};e.respond=n,n.update=function(){};var i=[],o=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),a=function(e,t){var n=o();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},r=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=a,n.queue=i,n.unsupportedmq=r,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var s=e.document,l=s.documentElement,c=[],h=[],d=[],u={},p=30,g=s.getElementsByTagName("head")[0]||l,f=s.getElementsByTagName("base")[0],m=g.getElementsByTagName("link"),v,w,y,x=function(){var e,t=s.createElement("div"),n=s.body,i=l.style.fontSize,o=n&&n.style.fontSize,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=s.createElement("body"),n.style.background="none"),l.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),a&&l.insertBefore(n,l.firstChild),e=t.offsetWidth,a?l.removeChild(n):n.removeChild(t),l.style.fontSize=i,o&&(n.style.fontSize=o),e=y=parseFloat(e)},b=function(t){var n="clientWidth",i=l[n],o="CSS1Compat"===s.compatMode&&i||s.body[n]||i,a={},r=m[m.length-1],u=(new Date).getTime();if(t&&v&&p>u-v)return e.clearTimeout(w),void(w=e.setTimeout(b,p));v=u;for(var f in c)if(c.hasOwnProperty(f)){var E=c[f],M=E.minw,B=E.maxw,P=null===M,C=null===B,T="em";M&&(M=parseFloat(M)*(M.indexOf(T)>-1?y||x():1)),B&&(B=parseFloat(B)*(B.indexOf(T)>-1?y||x():1)),E.hasquery&&(P&&C||!(P||o>=M)||!(C||B>=o))||(a[E.media]||(a[E.media]=[]),a[E.media].push(h[E.rules]))}for(var S in d)d.hasOwnProperty(S)&&d[S]&&d[S].parentNode===g&&g.removeChild(d[S]);d.length=0;for(var k in a)if(a.hasOwnProperty(k)){var L=s.createElement("style"),O=a[k].join("\n");L.type="text/css",L.media=k,g.insertBefore(L,r.nextSibling),L.styleSheet?L.styleSheet.cssText=O:L.appendChild(s.createTextNode(O)),d.push(L)}},E=function(e,t,i){var o=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),a=o&&o.length||0;t=t.substring(0,t.lastIndexOf("/"));var s=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},l=!a&&i;t.length&&(t+="/"),l&&(a=1);for(var d=0;a>d;d++){var u,p,g,f;l?(u=i,h.push(s(e))):(u=o[d].match(n.regex.findStyles)&&RegExp.$1,h.push(RegExp.$2&&s(RegExp.$2))),g=u.split(","),f=g.length;for(var m=0;f>m;m++)p=g[m],r(p)||c.push({media:p.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:h.length-1,hasquery:p.indexOf("(")>-1,minw:p.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:p.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}b()},M=function(){if(i.length){var t=i.shift();a(t.href,function(n){E(n,t.href,t.media),u[t.href]=!0,e.setTimeout(function(){M()},0)})}},B=function(){for(var t=0;t<m.length;t++){var n=m[t],o=n.href,a=n.media,r=n.rel&&"stylesheet"===n.rel.toLowerCase();o&&r&&!u[o]&&(n.styleSheet&&n.styleSheet.rawCssText?(E(n.styleSheet.rawCssText,o,a),u[o]=!0):(!/^([a-zA-Z:]*\/\/)/.test(o)&&!f||o.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===o.substring(0,2)&&(o=e.location.protocol+o),i.push({href:o,media:a})))}M()};B(),n.update=B,n.getEmValue=x,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),function(e){function t(e,t,n,i){if("addEventListener"in e)try{e.addEventListener(t,n,i)}catch(o){if("object"!=typeof n||!n.handleEvent)throw o;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"attachEvent"in e&&("object"==typeof n&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))}function n(e,t,n,i){if("removeEventListener"in e)try{e.removeEventListener(t,n,i)}catch(o){if("object"!=typeof n||!n.handleEvent)throw o;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},i)}else"detachEvent"in e&&("object"==typeof n&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))}window.MBP=window.MBP||{},MBP.viewportmeta=e.querySelector&&e.querySelector('meta[name="viewport"]'),MBP.ua=navigator.userAgent,MBP.scaleFix=function(){MBP.viewportmeta&&/iPhone|iPad|iPod/.test(MBP.ua)&&!/Opera Mini/.test(MBP.ua)&&(MBP.viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0",e.addEventListener("gesturestart",MBP.gestureStart,!1))},MBP.gestureStart=function(){MBP.viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6"},MBP.BODY_SCROLL_TOP=!1,MBP.getScrollTop=function(){var t=window,n=e;return t.pageYOffset||"CSS1Compat"===n.compatMode&&n.documentElement.scrollTop||n.body.scrollTop||0},MBP.hideUrlBar=function(){var e=window;location.hash||MBP.BODY_SCROLL_TOP===!1||e.scrollTo(0,1===MBP.BODY_SCROLL_TOP?0:1)},MBP.hideUrlBarOnLoad=function(){var e=window,t=e.document,n;e.navigator.standalone||location.hash||!e.addEventListener||(window.scrollTo(0,1),MBP.BODY_SCROLL_TOP=1,n=setInterval(function(){t.body&&(clearInterval(n),MBP.BODY_SCROLL_TOP=MBP.getScrollTop(),MBP.hideUrlBar())},15),e.addEventListener("load",function(){setTimeout(function(){MBP.getScrollTop()<20&&MBP.hideUrlBar()},0)},!1))},MBP.fastButton=function(e,t,n){if(this.handler=t,this.pressedClass="undefined"==typeof n?"pressed":n,MBP.listenForGhostClicks(),e.length&&e.length>1)for(var i in e)this.addClickEvent(e[i]);else this.addClickEvent(e)},MBP.fastButton.prototype.handleEvent=function(e){switch(e=e||window.event,e.type){case"touchstart":this.onTouchStart(e);break;case"touchmove":this.onTouchMove(e);break;case"touchend":this.onClick(e);break;case"click":this.onClick(e)}},MBP.fastButton.prototype.onTouchStart=function(t){var n=t.target||t.srcElement;t.stopPropagation(),n.addEventListener("touchend",this,!1),e.body.addEventListener("touchmove",this,!1),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY,n.className+=" "+this.pressedClass},MBP.fastButton.prototype.onTouchMove=function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&this.reset(e)},MBP.fastButton.prototype.onClick=function(e){e=e||window.event;var t=e.target||e.srcElement;e.stopPropagation&&e.stopPropagation(),this.reset(e),this.handler.apply(e.currentTarget,[e]),"touchend"==e.type&&MBP.preventGhostClick(this.startX,this.startY);var n=new RegExp(" ?"+this.pressedClass,"gi");t.className=t.className.replace(n,"")},MBP.fastButton.prototype.reset=function(t){var i=t.target||t.srcElement;n(i,"touchend",this,!1),n(e.body,"touchmove",this,!1);var o=new RegExp(" ?"+this.pressedClass,"gi");i.className=i.className.replace(o,"")},MBP.fastButton.prototype.addClickEvent=function(e){t(e,"touchstart",this,!1),t(e,"click",this,!1)},MBP.preventGhostClick=function(e,t){MBP.coords.push(e,t),window.setTimeout(function(){MBP.coords.splice(0,2)},2500)},MBP.ghostClickHandler=function(e){if(!MBP.hadTouchEvent&&MBP.dodgyAndroid)return e.stopPropagation(),void e.preventDefault();for(var t=0,n=MBP.coords.length;n>t;t+=2){var i=MBP.coords[t],o=MBP.coords[t+1];Math.abs(e.clientX-i)<25&&Math.abs(e.clientY-o)<25&&(e.stopPropagation(),e.preventDefault())}},MBP.dodgyAndroid="ontouchstart"in window&&-1!=navigator.userAgent.indexOf("Android 2.3"),MBP.listenForGhostClicks=function(){var n=!1;return function(){n||(e.addEventListener&&e.addEventListener("click",MBP.ghostClickHandler,!0),t(e.documentElement,"touchstart",function(){MBP.hadTouchEvent=!0},!1),n=!0)}}(),MBP.coords=[],MBP.autogrow=function(e,t){function n(e){var t=this.scrollHeight,n=this.clientHeight;t>n&&(this.style.height=t+3*o+"px")}var i=t?t:12,o=e.currentStyle?e.currentStyle.lineHeight:getComputedStyle(e,null).lineHeight;o=-1==o.indexOf("px")?i:parseInt(o,10),e.style.overflow="hidden",e.addEventListener?e.addEventListener("input",n,!1):e.attachEvent("onpropertychange",n)},MBP.enableActive=function(){e.addEventListener("touchstart",function(){},!1)},MBP.preventScrolling=function(){e.addEventListener("touchmove",function(e){"range"!==e.target.type&&e.preventDefault()},!1)},MBP.preventZoom=function(){if(MBP.viewportmeta&&navigator.platform.match(/iPad|iPhone|iPod/i))for(var t=e.querySelectorAll("input, select, textarea"),n="width=device-width,initial-scale=1,maximum-scale=",i=0,o=t.length,a=function(){MBP.viewportmeta.content=n+"1"},r=function(){MBP.viewportmeta.content=n+"10"};o>i;i++)t[i].onfocus=a,t[i].onblur=r},MBP.startupImage=function(){var t,n,i,o,a,r;i=window.devicePixelRatio,o=e.getElementsByTagName("head")[0],"iPad"===navigator.platform?(t=2===i?"img/startup/startup-tablet-portrait-retina.png":"img/startup/startup-tablet-portrait.png",n=2===i?"img/startup/startup-tablet-landscape-retina.png":"img/startup/startup-tablet-landscape.png",a=e.createElement("link"),a.setAttribute("rel","apple-touch-startup-image"),a.setAttribute("media","screen and (orientation: portrait)"),a.setAttribute("href",t),o.appendChild(a),r=e.createElement("link"),r.setAttribute("rel","apple-touch-startup-image"),r.setAttribute("media","screen and (orientation: landscape)"),r.setAttribute("href",n),o.appendChild(r)):(t=2===i?"img/startup/startup-retina.png":"img/startup/startup.png",t=568===screen.height?"img/startup/startup-retina-4in.png":t,a=e.createElement("link"),a.setAttribute("rel","apple-touch-startup-image"),a.setAttribute("href",t),o.appendChild(a)),navigator.platform.match(/iPhone|iPod/i)&&568===screen.height&&navigator.userAgent.match(/\bOS 6_/)&&MBP.viewportmeta&&(MBP.viewportmeta.content=MBP.viewportmeta.content.replace(/\bwidth\s*=\s*320\b/,"width=320.1").replace(/\bwidth\s*=\s*device-width\b/,""))}}(document),function($,e,t){function n(t,n,i){var o=e.createElement(t);return n&&(o.id=y+n),i&&(o.style.cssText=i),$(o)}function i(){return t.innerHeight?t.innerHeight:$(t).height()}function o(e,t){t!==Object(t)&&(t={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=$(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==t[e]?this.cache[e]=t[e]:void 0!==v[e]&&(this.cache[e]=v[e])),this.cache[e]},this.get=function(e){var t=this.value(e);return $.isFunction(t)?t.call(this.el,this):t}}function a(e){var t=A.length,n=(et+e)%t;return 0>n?t+n:n}function r(e,t){return Math.round((/%/.test(e)?("x"===t?D.width():i())/100:1)*parseInt(e,10))}function s(e,t){return e.get("photo")||e.get("photoRegex").test(t)}function l(e,n){return e.get("retinaUrl")&&t.devicePixelRatio>1?n.replace(e.get("photoRegex"),e.get("retinaSuffix")):n}function c(e){"contains"in S[0]&&!S[0].contains(e.target)&&e.target!==T[0]&&(e.stopPropagation(),S.focus())}function h(e){h.str!==e&&(S.add(T).removeClass(h.str).addClass(e),h.str=e)}function d(e){et=0,e&&e!==!1&&"nofollow"!==e?(A=$("."+x).filter(function(){var t=$.data(this,w),n=new o(this,t);return n.get("rel")===e}),et=A.index(G.el),-1===et&&(A=A.add(G.el),et=A.length-1)):A=$(G.el)}function u(t){$(e).trigger(t),U.triggerHandler(t)}function p(t){var i;if(!ot){if(i=$(t).data(w),G=new o(t,i),d(G.get("rel")),!nt){nt=it=!0,h(G.get("className")),S.css({visibility:"hidden",display:"block",opacity:""}),N=n(st,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),L.css({width:"",height:""}).append(N),Q=O.height()+R.height()+L.outerHeight(!0)-L.height(),Z=F.width()+H.width()+L.outerWidth(!0)-L.width(),V=N.outerHeight(!0),J=N.outerWidth(!0);var a=r(G.get("initialWidth"),"x"),s=r(G.get("initialHeight"),"y"),l=G.get("maxWidth"),p=G.get("maxHeight");G.w=(l!==!1?Math.min(a,r(l,"x")):a)-J-Z,G.h=(p!==!1?Math.min(s,r(p,"y")):s)-V-Q,N.css({width:"",height:G.h}),rt.position(),u(b),G.get("onOpen"),X.add(z).hide(),S.focus(),G.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",c,!0),U.one(P,function(){e.removeEventListener("focus",c,!0)})),G.get("returnFocus")&&U.one(P,function(){$(G.el).focus()})}var g=parseFloat(G.get("opacity"));T.css({opacity:g===g?g:"",cursor:G.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),G.get("closeButton")?K.html(G.get("close")).appendTo(L):K.appendTo("<div/>"),m()}}function g(){S||(ht=!1,D=$(t),S=n(st).attr({id:w,"class":$.support.opacity===!1?y+"IE":"",role:"dialog",tabindex:"-1"}).hide(),T=n(st,"Overlay").hide(),W=$([n(st,"LoadingOverlay")[0],n(st,"LoadingGraphic")[0]]),k=n(st,"Wrapper"),L=n(st,"Content").append(z=n(st,"Title"),j=n(st,"Current"),Y=$('<button type="button"/>').attr({id:y+"Previous"}),q=$('<button type="button"/>').attr({id:y+"Next"}),I=n("button","Slideshow"),W),K=$('<button type="button"/>').attr({id:y+"Close"}),k.append(n(st).append(n(st,"TopLeft"),O=n(st,"TopCenter"),n(st,"TopRight")),n(st,!1,"clear:left").append(F=n(st,"MiddleLeft"),L,H=n(st,"MiddleRight")),n(st,!1,"clear:left").append(n(st,"BottomLeft"),R=n(st,"BottomCenter"),n(st,"BottomRight"))).find("div div").css({"float":"left"}),_=n(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),X=q.add(Y).add(j).add(I)),e.body&&!S.parent().length&&$(e.body).append(T,S.append(k,_))}function f(){function t(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey||(e.preventDefault(),p(this))}return S?(ht||(ht=!0,q.click(function(){rt.next()}),Y.click(function(){rt.prev()}),K.click(function(){rt.close()}),T.click(function(){G.get("overlayClose")&&rt.close()}),$(e).bind("keydown."+y,function(e){var t=e.keyCode;nt&&G.get("escKey")&&27===t&&(e.preventDefault(),rt.close()),nt&&G.get("arrowKey")&&A[1]&&!e.altKey&&(37===t?(e.preventDefault(),Y.click()):39===t&&(e.preventDefault(),q.click()))}),$.isFunction($.fn.on)?$(e).on("click."+y,"."+x,t):$("."+x).live("click."+y,t)),!0):!1}function m(){var e,i,o=rt.prep,a,c=++lt;if(it=!0,tt=!1,u(C),u(E),G.get("onLoad"),G.h=G.get("height")?r(G.get("height"),"y")-V-Q:G.get("innerHeight")&&r(G.get("innerHeight"),"y"),G.w=G.get("width")?r(G.get("width"),"x")-J-Z:G.get("innerWidth")&&r(G.get("innerWidth"),"x"),G.mw=G.w,G.mh=G.h,G.get("maxWidth")&&(G.mw=r(G.get("maxWidth"),"x")-J-Z,G.mw=G.w&&G.w<G.mw?G.w:G.mw),G.get("maxHeight")&&(G.mh=r(G.get("maxHeight"),"y")-V-Q,G.mh=G.h&&G.h<G.mh?G.h:G.mh),e=G.get("href"),at=setTimeout(function(){W.show()},100),G.get("inline")){var h=$(e);a=$("<div>").hide().insertBefore(h),U.one(C,function(){a.replaceWith(h)}),o(h)}else G.get("iframe")?o(" "):G.get("html")?o(G.get("html")):s(G,e)?(e=l(G,e),tt=new Image,$(tt).addClass(y+"Photo").bind("error",function(){o(n(st,"Error").html(G.get("imgError")))}).one("load",function(){c===lt&&setTimeout(function(){var e;$.each(["alt","longdesc","aria-describedby"],function(e,t){var n=$(G.el).attr(t)||$(G.el).attr("data-"+t);n&&tt.setAttribute(t,n)}),G.get("retinaImage")&&t.devicePixelRatio>1&&(tt.height=tt.height/t.devicePixelRatio,tt.width=tt.width/t.devicePixelRatio),G.get("scalePhotos")&&(i=function(){tt.height-=tt.height*e,tt.width-=tt.width*e},G.mw&&tt.width>G.mw&&(e=(tt.width-G.mw)/tt.width,i()),G.mh&&tt.height>G.mh&&(e=(tt.height-G.mh)/tt.height,i())),G.h&&(tt.style.marginTop=Math.max(G.mh-tt.height,0)/2+"px"),A[1]&&(G.get("loop")||A[et+1])&&(tt.style.cursor="pointer",tt.onclick=function(){rt.next()}),tt.style.width=tt.width+"px",tt.style.height=tt.height+"px",o(tt)},1)}),tt.src=e):e&&_.load(e,G.get("data"),function(e,t){c===lt&&o("error"===t?n(st,"Error").html(G.get("xhrError")):$(this).contents())})}var v={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return $(this).attr("href")},title:function(){return this.title}},w="colorbox",y="cbox",x=y+"Element",b=y+"_open",E=y+"_load",M=y+"_complete",B=y+"_cleanup",P=y+"_closed",C=y+"_purge",T,S,k,L,O,F,H,R,A,D,N,_,W,z,j,I,q,Y,K,X,U=$("<a/>"),G,Q,Z,V,J,et,tt,nt,it,ot,at,rt,st="div",lt=0,ct={},ht,dt=function(){function e(){clearTimeout(l)}function t(){(G.get("loop")||A[et+1])&&(e(),l=setTimeout(rt.next,G.get("slideshowSpeed")))}function n(){I.html(G.get("slideshowStop")).unbind(s).one(s,i),U.bind(M,t).bind(E,e),S.removeClass(r+"off").addClass(r+"on")}function i(){e(),U.unbind(M,t).unbind(E,e),I.html(G.get("slideshowStart")).unbind(s).one(s,function(){rt.next(),n()}),S.removeClass(r+"on").addClass(r+"off")}function o(){a=!1,I.hide(),e(),U.unbind(M,t).unbind(E,e),S.removeClass(r+"off "+r+"on")}var a,r=y+"Slideshow_",s="click."+y,l;return function(){a?G.get("slideshow")||(U.unbind(B,o),o()):G.get("slideshow")&&A[1]&&(a=!0,U.one(B,o),G.get("slideshowAuto")?n():i(),I.show())}}();$[w]||($(g),rt=$.fn[w]=$[w]=function(e,t){var n,i=this;if(e=e||{},$.isFunction(i))i=$("<a/>"),e.open=!0;else if(!i[0])return i;return i[0]?(g(),f()&&(t&&(e.onComplete=t),i.each(function(){var t=$.data(this,w)||{};$.data(this,w,$.extend(t,e))}).addClass(x),n=new o(i[0],e),n.get("open")&&p(i[0])),i):i},rt.position=function(e,t){function n(){O[0].style.width=R[0].style.width=L[0].style.width=parseInt(S[0].style.width,10)-Z+"px",L[0].style.height=F[0].style.height=H[0].style.height=parseInt(S[0].style.height,10)-Q+"px"}var o,a=0,s=0,l=S.offset(),c,h;if(D.unbind("resize."+y),S.css({top:-9e4,left:-9e4}),c=D.scrollTop(),h=D.scrollLeft(),G.get("fixed")?(l.top-=c,l.left-=h,S.css({position:"fixed"})):(a=c,s=h,S.css({position:"absolute"})),s+=G.get("right")!==!1?Math.max(D.width()-G.w-J-Z-r(G.get("right"),"x"),0):G.get("left")!==!1?r(G.get("left"),"x"):Math.round(Math.max(D.width()-G.w-J-Z,0)/2),a+=G.get("bottom")!==!1?Math.max(i()-G.h-V-Q-r(G.get("bottom"),"y"),0):G.get("top")!==!1?r(G.get("top"),"y"):Math.round(Math.max(i()-G.h-V-Q,0)/2),S.css({top:l.top,left:l.left,visibility:"visible"}),k[0].style.width=k[0].style.height="9999px",o={width:G.w+J+Z,height:G.h+V+Q,top:a,left:s},e){var d=0;$.each(o,function(t){return o[t]!==ct[t]?void(d=e):void 0}),e=d}ct=o,e||S.css(o),S.dequeue().animate(o,{duration:e||0,complete:function(){n(),it=!1,k[0].style.width=G.w+J+Z+"px",k[0].style.height=G.h+V+Q+"px",G.get("reposition")&&setTimeout(function(){D.bind("resize."+y,rt.position)},1),$.isFunction(t)&&t()},step:n})},rt.resize=function(e){var t;nt&&(e=e||{},e.width&&(G.w=r(e.width,"x")-J-Z),e.innerWidth&&(G.w=r(e.innerWidth,"x")),N.css({width:G.w}),e.height&&(G.h=r(e.height,"y")-V-Q),e.innerHeight&&(G.h=r(e.innerHeight,"y")),e.innerHeight||e.height||(t=N.scrollTop(),N.css({height:"auto"}),G.h=N.height()),N.css({height:G.h}),t&&N.scrollTop(t),rt.position("none"===G.get("transition")?0:G.get("speed")))},rt.prep=function(t){function i(){return G.w=G.w||N.width(),G.w=G.mw&&G.mw<G.w?G.mw:G.w,G.w}function r(){return G.h=G.h||N.height(),G.h=G.mh&&G.mh<G.h?G.mh:G.h,G.h}if(nt){var c,d="none"===G.get("transition")?0:G.get("speed");N.remove(),N=n(st,"LoadedContent").append(t),N.hide().appendTo(_.show()).css({width:i(),overflow:G.get("scrolling")?"auto":"hidden"}).css({height:r()}).prependTo(L),_.hide(),$(tt).css({"float":"none"}),h(G.get("className")),c=function(){function t(){$.support.opacity===!1&&S[0].style.removeAttribute("filter")}var n=A.length,i,r;nt&&(r=function(){clearTimeout(at),W.hide(),u(M),G.get("onComplete")},z.html(G.get("title")).show(),N.show(),n>1?("string"==typeof G.get("current")&&j.html(G.get("current").replace("{current}",et+1).replace("{total}",n)).show(),q[G.get("loop")||n-1>et?"show":"hide"]().html(G.get("next")),Y[G.get("loop")||et?"show":"hide"]().html(G.get("previous")),dt(),G.get("preloading")&&$.each([a(-1),a(1)],function(){var t,n=A[this],i=new o(n,$.data(n,w)),a=i.get("href");a&&s(i,a)&&(a=l(i,a),t=e.createElement("img"),t.src=a)})):X.hide(),G.get("iframe")?(i=e.createElement("iframe"),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),G.get("scrolling")||(i.scrolling="no"),$(i).attr({src:G.get("href"),name:(new Date).getTime(),"class":y+"Iframe",allowFullScreen:!0}).one("load",r).appendTo(N),U.one(C,function(){i.src="//about:blank"}),G.get("fastIframe")&&$(i).trigger("load")):r(),"fade"===G.get("transition")?S.fadeTo(d,1,t):t())},"fade"===G.get("transition")?S.fadeTo(d,0,function(){rt.position(0,c)}):rt.position(d,c)}},rt.next=function(){!it&&A[1]&&(G.get("loop")||A[et+1])&&(et=a(1),p(A[et]))},rt.prev=function(){!it&&A[1]&&(G.get("loop")||et)&&(et=a(-1),p(A[et]))},rt.close=function(){nt&&!ot&&(ot=!0,nt=!1,u(B),G.get("onCleanup"),D.unbind("."+y),T.fadeTo(G.get("fadeOut")||0,0),S.stop().fadeTo(G.get("fadeOut")||0,0,function(){S.hide(),T.hide(),u(C),N.remove(),setTimeout(function(){ot=!1,u(P),G.get("onClosed")},1)}))},rt.remove=function(){S&&(S.stop(),$[w].close(),S.stop(!1,!0).remove(),T.remove(),ot=!1,S=null,$("."+x).removeData(w).removeClass(x),$(e).unbind("click."+y).unbind("keydown."+y))},rt.element=function(){return $(G.el)},rt.settings=v)}(jQuery,document,window);/**
 * File Name childTheme.js
 * @license GPL v2 - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/
var childTheme={init:function(){this.colorbox(),this.mbpScaleFix()},colorbox:function(){jQuery("#section-loop-default .block-single-gallery a").colorbox({rel:"gallery",transition:"none",width:"99%",height:"99%"})},mbpScaleFix:function(){"undefined"!=typeof MBP&&MBP.scaleFix()}};jQuery(document).ready(function(){childTheme.init()});