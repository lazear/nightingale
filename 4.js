(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{331:function(t,e,n){"use strict";e.a=function(t,e){window.customElements.get(t)||window.customElements.define(t,e)}},343:function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.min,i=void 0===n?-1/0:n,r=e.max,o=void 0===r?1/0:r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.segments=[],this.max=o,this.min=i,this.regionString=null}var e,n,o;return e=t,(n=[{key:"encode",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.segments.map(function(n){var i=n.start,r=n.end;if(e)return"".concat(i,":").concat(r);var o=i===t.min?"":i,a=r===t.max?"":r;return"".concat(o,":").concat(a)}).join(",")}},{key:"decode",value:function(t){var e=this;void 0!==t&&(this.regionString=t),this.regionString?this.segments=this.regionString.split(",").map(function(t){var n=i(t.split(":"),3),r=n[0],o=n[1];if(void 0!==n[2])throw new Error("there should be at most 1 ':' per region. Region: ".concat(t));var a=r?parseInt(r):e.min,s=o?parseInt(o):e.max;if(a>s){var h=[s,a];a=h[0],s=h[1]}if(a<e.min&&(a=e.min),s>e.max&&(s=e.max),isNaN(a))throw new Error("The parsed value of ".concat(r," is NaN. Region: ").concat(t));if(isNaN(s))throw new Error("The parsed value of ".concat(o," is NaN. Region: ").concat(t));return{start:a,end:s}}):this.segments=[]}}])&&r(e.prototype,n),o&&r(e,o),t}();function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=function(t,e){return t?e?"".concat(t,",").concat(e):t:e},h=function(){function t(e){var n=e.element,i=e.min,r=e.max;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=n,this.region=new o({min:i,max:r}),this.fixedHighlight=null}var e,n,i;return e=t,(n=[{key:"setAttributesInElement",value:function(){this.region.decode(this.element.getAttribute("highlight")),0===this.region.segments.length&&(this.element._highlightstart=parseInt(this.element.getAttribute("highlightstart")),this.element._highlightend=parseInt(this.element.getAttribute("highlightend")),null===this.element._highlightstart||null===this.element._highlightend||isNaN(this.element._highlightstart)||isNaN(this.element._highlightend)||(this.element._highlight="".concat(this.element._highlightstart,":").concat(this.element._highlightend),this.region.decode(s(this.fixedHighlight,this.element._highlight))))}},{key:"setFloatAttribute",value:function(t,e){var n=parseFloat(e);this.element["_".concat(t)]=isNaN(n)?e:n}},{key:"changedCallBack",value:function(t,e){switch(t){case"highlightstart":case"highlightend":this.setFloatAttribute(t,e),this.element._highlight=isNaN(this.element._highlightstart)||isNaN(this.element._highlightend)||null===this.element._highlightstart||null===this.element._highlightend?"":"".concat(Math.max(this.region.min,this.element._highlightstart),":").concat(Math.min(this.region.max,this.element._highlightend));break;default:this.element._highlight=e}this.region.decode(s(this.fixedHighlight,this.element._highlight)),this.element.refresh()}},{key:"setFixedHighlight",value:function(t){this.fixedHighlight=t,this.region.decode(s(t,this.element._highlight)),this.element.refresh()}},{key:"appendHighlightTo",value:function(t){this.highlighted=t.append("g").attr("class","highlighted")}},{key:"updateHighlight",value:function(){var t=this,e=this.highlighted.selectAll("rect").data(this.region.segments);e.enter().append("rect").style("opacity",.3).attr("fill","rgba(255, 235, 59, 0.8)").style("pointer-events","none").merge(e).attr("height",this.element._height).attr("x",function(e){return t.element.getXFromSeqPosition(e.start)}).attr("width",function(e){return t.element.getSingleBaseWidth()*(e.end-e.start+1)}),e.exit().remove()}},{key:"max",set:function(t){this.region.max=t}}])&&a(e.prototype,n),i&&a(e,i),t}();var l=function(t){return t};n.d(e,"c",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return f});var c=h,u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=[],n=[];if(null!==t&&"string"!=typeof t)throw new Error("The attribute text has to be of type string");if(t&&""!==t.trim()){var i=t.split(",").map(function(t){return t.split(":")});if(i.length<2)throw new Error("There should be at least 2 points to create a scale");e=i.map(function(t){var e=t[0].trim().toUpperCase();if(!function(t){var e=document.createElement("div");return e.style.borderColor="",e.style.borderColor=t,""!==e.style.borderColor}(e))throw new Error("The color '".concat(e," is not valid'"));return e}),n=i.map(function(t,e){var n=parseFloat(t[1]);if(isNaN(n))throw"The second part of every point should be a number. Error in point ".concat(e,": ").concat(t);return n})}return{range:e,domain:n}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.keyFormatter,i=void 0===n?l:n,r=e.valueFormatter,o=void 0===r?l:r;if(null!==t&&"string"!=typeof t)throw new Error("The attribute text has to be of type string");if(t&&""!==t.trim()){var a=t.split(",").map(function(t){return t.split(":")}),s={},h=!0,c=!1,u=void 0;try{for(var f,g=a[Symbol.iterator]();!(h=(f=g.next()).done);h=!0){var d=f.value;if(2!==d.length)throw new Error("Bad block: ".concat(d.join(":"),"\n The blocks of the string should follow the format KEY:VALUE"));s[i(d[0])]=o(d[1])}}catch(t){c=!0,u=t}finally{try{h||null==g.return||g.return()}finally{if(c)throw u}}return s}return{}}},344:function(t,e,n){"use strict";var i=n(328),r=n(343),o=n(378);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return f(t,arguments,d(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),g(i,t)})(t)}function f(t,e,n){return(f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&g(r,n.prototype),r}).apply(null,arguments)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){function e(){var t,n,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,i=d(e).call(this),(t=!i||"object"!==a(i)&&"function"!=typeof i?l(n):i)._updateScaleDomain=t._updateScaleDomain.bind(l(t)),t._initZoom=t._initZoom.bind(l(t)),t.zoomed=t.zoomed.bind(l(t)),t._applyZoomTranslation=t.applyZoomTranslation.bind(l(t)),t._resetEventHandler=t._resetEventHandler.bind(l(t));var o=!1;return t.applyZoomTranslation=function(){o||(o=!0,requestAnimationFrame(function(){o=!1,t._applyZoomTranslation()}))},t._onResize=t._onResize.bind(l(t)),t._listenForResize=t._listenForResize.bind(l(t)),t.trackHighlighter=new r.c({element:l(t),min:1}),t}var n,f,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,u(HTMLElement)),n=e,p=[{key:"observedAttributes",get:function(){return["displaystart","displayend","length","highlight"]}}],(f=[{key:"connectedCallback",value:function(){this.style.display="block",this.style.width="100%",this.width=this.offsetWidth,this._length=this.getAttribute("length")?parseFloat(this.getAttribute("length")):0,this._displaystart=this.getAttribute("displaystart")?parseFloat(this.getAttribute("displaystart")):1,this._displayend=this.getAttribute("displayend")?parseFloat(this.getAttribute("displayend")):this.width,this._height=this.getAttribute("height")?parseInt(this.getAttribute("height")):44,this._highlightEvent=this.getAttribute("highlight-event")?this.getAttribute("highlight-event"):"onclick",this.trackHighlighter.setAttributesInElement(this),this._updateScaleDomain(),this._originXScale=this.xScale.copy(),this._initZoom(),this._listenForResize(),this.addEventListener("error",function(t){throw t}),window.addEventListener("click",this._resetEventHandler)}},{key:"disconnectedCallback",value:function(){c(d(e.prototype),"disconnectedCallback",this).call(this),this._ro?this._ro.unobserve(this):window.removeEventListener("resize",this._onResize),window.removeEventListener("click",this._resetEventHandler)}},{key:"getWidthWithMargins",value:function(){return this.width?this.width-this.margin.left-this.margin.right:0}},{key:"_updateScaleDomain",value:function(){this.xScale=Object(i.i)().domain([1,this._length+1]).range([0,this.getWidthWithMargins()])}},{key:"_initZoom",value:function(){this._zoom=Object(i.m)().scaleExtent([1,1/0]).translateExtent([[0,0],[this.getWidthWithMargins(),0]]).on("zoom",this.zoomed)}},{key:"setFloatAttribute",value:function(t,e){var n=parseFloat(e);this["_".concat(t)]=isNaN(n)?e:n}},{key:"attributeChangedCallback",value:function(t,e,n){if("null"===n&&(n=null),e!==n){if(t.startsWith("highlight"))return void this.trackHighlighter.changedCallBack(t,n);this.setFloatAttribute(t,n),"length"===t&&(this._updateScaleDomain(),this._originXScale=this.xScale.copy()),this.applyZoomTranslation()}}},{key:"zoomed",value:function(){if(this.xScale=i.e.transform.rescaleX(this._originXScale),!this.dontDispatch){var t=s(this.xScale.domain(),2),e=t[0],n=t[1];n--,this.dispatchEvent(new CustomEvent("change",{detail:{displaystart:Math.max(1,e),displayend:Math.min(this.length,Math.max(n,e+1))},bubbles:!0,cancelable:!0}))}}},{key:"applyZoomTranslation",value:function(){if(this.svg&&this._originXScale){var t=Math.max(1,this.length/(1+this._displayend-this._displaystart)),e=-this._originXScale(this._displaystart);this.dontDispatch=!0,this.svg.call(this.zoom.transform,i.n.scale(t).translate(e,0)),this.dontDispatch=!1,this.refresh()}}},{key:"_onResize",value:function(){this.width=this.offsetWidth,this._updateScaleDomain(),this._originXScale=this.xScale.copy(),this.svg&&this.svg.attr("width",this.width),this._zoom.scaleExtent([1,1/0]).translateExtent([[0,0],[this.getWidthWithMargins(),0]]),this.applyZoomTranslation()}},{key:"_listenForResize",value:function(){this._ro=new o.a(this._onResize),this._ro.observe(this)}},{key:"_resetEventHandler",value:function(t){t.target.closest(".feature")||this.dispatchEvent(this.createEvent("reset",null,!0))}},{key:"getXFromSeqPosition",value:function(t){return this.margin.left+this.xScale(t)}},{key:"getSingleBaseWidth",value:function(){return this.xScale(2)-this.xScale(1)}},{key:"_getClickCoords",value:function(){return i.e?[i.e.pageX,i.e.pageY]:null}},{key:"createEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,o={eventtype:t,coords:this._getClickCoords(),feature:e};return n&&(e&&e.fragments?o.highlight=e.fragments.map(function(t){return"".concat(t.start,":").concat(t.end)}).join(","):o.highlight=i&&r?"".concat(i,":").concat(r):null),new CustomEvent("change",{detail:o,bubbles:!0,cancelable:!0})}},{key:"bindEvents",value:function(t,e){t.on("mouseover",function(t){e.dispatchEvent(e.createEvent("mouseover",t,"onmouseover"===e._highlightEvent,t.start,t.end))}).on("mouseout",function(t){e.dispatchEvent(e.createEvent("mouseout",null,"onmouseover"===e._highlightEvent))}).on("click",function(t){e.dispatchEvent(e.createEvent("click",t,"onclick"===e._highlightEvent,t.start,t.end))})}},{key:"width",get:function(){return this._width},set:function(t){this._width=t}},{key:"height",set:function(t){this._height=t},get:function(){return this._height}},{key:"length",set:function(t){this._length=t,this.trackHighlighter.max=t},get:function(){return this._length}},{key:"xScale",get:function(){return this._xScale},set:function(t){this._xScale=t}},{key:"zoom",get:function(){return this._zoom}},{key:"svg",set:function(t){this._svg=t,t.call(this._zoom),this.applyZoomTranslation()},get:function(){return this._svg}},{key:"isManaged",get:function(){return!0}},{key:"margin",get:function(){return{top:10,right:10,bottom:10,left:10}}},{key:"fixedHighlight",set:function(t){this.trackHighlighter.setFixedHighlight(t)}}])&&h(n.prototype,f),p&&h(n,p),e}(),m=function(){customElements.define("protvista-zoomable",p)};window.customElements?m():document.addEventListener("WebComponentsReady",function(){m()});e.a=p},389:function(t,e,n){"use strict";var i=n(328),r=n(344);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t,e,n,i){return(h="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,i){var r,o=c(t,e);if(o){if((r=Object.getOwnPropertyDescriptor(o,e)).set)return r.set.call(i,n),!0;if(!r.writable)return!1}if(r=Object.getOwnPropertyDescriptor(i,e)){if(!r.writable)return!1;r.value=n,Object.defineProperty(i,e,r)}else!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(i,e,n);return!0})(t,e,n,i)}function l(t,e,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=c(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,u(e).apply(this,arguments))}var n,o,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,r["a"]),n=e,c=[{key:"observedAttributes",get:function(){return r.a.observedAttributes.concat("highlightstart","highlightend")}}],(o=[{key:"connectedCallback",value:function(){l(u(e.prototype),"connectedCallback",this).call(this),this.sequence=this.getAttribute("sequence"),this.sequence&&this._createSequence()}},{key:"_getCharWidth",value:function(){this.seq_g.append("text").attr("class","base").text("T"),this.chWidth=.8*this.seq_g.select("text.base").node().getBBox().width,this.seq_g.select("text.base").remove()}},{key:"_createSequence",value:function(){!function(t,e,n,i,r){if(!h(t,e,n,i||t)&&r)throw new Error("failed to set property")}(u(e.prototype),"svg",Object(i.l)(this).append("div").attr("class","").append("svg").attr("id","").attr("width",this.width).attr("height",this._height),this,!0),this.seq_bg=l(u(e.prototype),"svg",this).append("g").attr("class","background"),this.axis=l(u(e.prototype),"svg",this).append("g").attr("class","x axis"),this.seq_g=l(u(e.prototype),"svg",this).append("g").attr("class","sequence").attr("transform","translate(0,".concat(.75*this._height,")")),this._getCharWidth(),this.trackHighlighter.appendHighlightTo(this.svg),this.refresh()}},{key:"refresh",value:function(){var t=this;if(this.axis){var e=this.getSingleBaseWidth(),n=e-this.chWidth,r=e/2,o=Math.round(Math.max(0,this._displaystart-2)),a=Math.round(Math.min(this.sequence.length,this._displayend+1)),s=n<0?[]:this.sequence.slice(o,a).split("").map(function(t,e){return{start:1+o+e,end:1+o+e,aa:t}});this.xAxis=Object(i.a)(this.xScale).tickFormat(function(t){return Number.isInteger(t)?t:""}).ticks(3,"s"),this.axis.call(this.xAxis),this.axis.attr("transform","translate(".concat(this.margin.left+r,",0)")),this.axis.select(".domain").remove(),this.axis.selectAll(".tick line").remove(),this.bases=this.seq_g.selectAll("text.base").data(s,function(t){return t.start}),this.bases.enter().append("text").attr("class","base").attr("text-anchor","middle").attr("x",function(e){return t.getXFromSeqPosition(e.start)+r}).text(function(t){return t.aa}).style("pointer-events","none").style("font-family","monospace"),this.bases.exit().remove(),this.bases.attr("x",function(e){return t.getXFromSeqPosition(e.start)+r}),this.background=this.seq_bg.selectAll("rect.base_bg").data(s,function(t){return t.start}),this.background.enter().append("rect").attr("class","base_bg feature").attr("height",this._height).merge(this.background).attr("width",e).attr("fill",function(t){return Math.round(t.start)%2?"#ccc":"#eee"}).attr("x",function(e){return t.getXFromSeqPosition(e.start)}).call(this.bindEvents,this),this.background.exit().remove(),this.seq_g.style("opacity",Math.min(1,n)),this.background.style("opacity",Math.min(1,n)),this._updateHighlight()}}},{key:"_updateHighlight",value:function(){this.trackHighlighter.updateHighlight()}},{key:"data",get:function(){return this.sequence},set:function(t){"string"==typeof t?this.sequence=t:"sequence"in t&&(this.sequence=t.sequence),this.sequence&&!l(u(e.prototype),"svg",this)?this._createSequence():this.refresh()}}])&&a(n.prototype,o),c&&a(n,c),e}(),d=function(){customElements.define("protvista-sequence",g)};window.customElements?d():document.addEventListener("WebComponentsReady",function(){d()});e.a=g}}]);