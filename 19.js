(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{160:function(t,e,i){"use strict";i.r(e);var n=i(0),s=i.n(n),a=i(630),r=i(111),o=i(49),h=i(820),l=i.n(h);e.default=function(t){return Object(r.a)("protvista-navigation",a.a),s.a.createElement(n.Fragment,null,s.a.createElement(o.default,{content:l.a}),s.a.createElement("protvista-navigation",{length:"456",displaystart:"143",displayend:"400",highlightStart:"23",highlightEnd:"45",rulerstart:"50"}))}},630:function(t,e,i){"use strict";var n=i(569);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){var e="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(i=t,-1===Function.toString.call(i).indexOf("[native code]")))return t;var i;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return h(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,t)})(t)}function h(t,e,i){return(h=l()?Reflect.construct:function(t,e,i){var n=[null];n.push.apply(n,e);var s=new(Function.bind.apply(t,n));return i&&p(s,i.prototype),s}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(u,t);var e,i,s,o,h,d=(e=u,i=l(),function(){var t,n=c(e);if(i){var s=c(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return r(this,t)});function u(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(t=d.call(this))._x=null,t._padding=0,t.dontDispatch=!1,t}return s=u,h=[{key:"observedAttributes",get:function(){return["length","displaystart","displayend","highlightStart","highlightEnd","width","rulerstart"]}}],(o=[{key:"_refreshWidth",value:function(){this.style.display="block",this.style.width="100%",this.width=this.offsetWidth,this.width>0&&(this._padding=10)}},{key:"connectedCallback",value:function(){this._refreshWidth(),this.closest("protvista-manager")&&(this.manager=this.closest("protvista-manager"),this.manager.register(this)),this._length=parseFloat(this.getAttribute("length")),this._displaystart=parseFloat(this.getAttribute("displaystart"))||1,this._displayend=parseFloat(this.getAttribute("displayend"))||this._length,this._highlightStart=parseFloat(this.getAttribute("highlightStart")),this._highlightEnd=parseFloat(this.getAttribute("highlightEnd")),this._rulerstart=parseFloat(this.getAttribute("rulerStart"))||1,this._onResize=this._onResize.bind(this),this._createNavRuler()}},{key:"disconnectedCallback",value:function(){this.manager&&this.manager.unregister(this),this._ro&&this._ro.unobserve(this),window.removeEventListener("resize",this._onResize)}},{key:"attributeChangedCallback",value:function(t,e,i){e!==i&&(this["_".concat(t)]=parseFloat(i),this._updateNavRuler())}},{key:"_createNavRuler",value:function(){var t=this;this._x=Object(n.i)().range([this._padding,this.width-this._padding]),this._x.domain([this._rulerstart,this._rulerstart+this._length]),this._svg=Object(n.l)(this).append("div").attr("class","").append("svg").attr("id","").attr("width",this.width).attr("height",40),this._xAxis=Object(n.a)(this._x),this._displaystartLabel=this._svg.append("text").attr("class","start-label").attr("x",0).attr("y",40-this._padding),this._displayendLabel=this._svg.append("text").attr("class","end-label").attr("x",this.width).attr("y",40-this._padding).attr("text-anchor","end"),this._axis=this._svg.append("g").attr("class","x axis").call(this._xAxis),this._viewport=Object(n.d)().extent([[this._padding,0],[this.width-this._padding,20.4]]).on("brush",(function(){n.e.selection&&(t._displaystart=Object(n.f)("d")(t._x.invert(n.e.selection[0])),t._displayend=Object(n.f)("d")(t._x.invert(n.e.selection[1])),t.dontDispatch||t.dispatchEvent(new CustomEvent("change",{detail:{displayend:t._displayend,displaystart:t._displaystart,extra:{transform:n.e.transform}},bubbles:!0,cancelable:!0})),t._updateLabels(),t._updatePolygon())})),this._brushG=this._svg.append("g").attr("class","brush").call(this._viewport),this._brushG.call(this._viewport.move,[this._x(this._displaystart),this._x(this._displayend)]),this.polygon=this._svg.append("polygon").attr("class","zoom-polygon").attr("fill","#777").attr("fill-opacity","0.3"),this._updateNavRuler(),"ResizeObserver"in window&&(this._ro=new ResizeObserver(this._onResize),this._ro.observe(this)),window.addEventListener("resize",this._onResize)}},{key:"_onResize",value:function(){this._refreshWidth(),this._x=this._x.range([this._padding,this.width-this._padding]),this._svg.attr("width",this.width),this._viewport.extent([[this._padding,0],[this.width-this._padding,20.4]]),this._brushG.call(this._viewport),this._updateNavRuler()}},{key:"_updateNavRuler",value:function(){this._x&&(this._x.domain([this._rulerstart,this._rulerstart+this._length]),this._axis.call(this._xAxis),this._updatePolygon(),this._updateLabels(),this._brushG&&(this.dontDispatch=!0,this._brushG.call(this._viewport.move,[this._x(this._displaystart),this._x(this._displayend)]),this.dontDispatch=!1))}},{key:"_updateLabels",value:function(){this._displaystartLabel&&this._displaystartLabel.text(this._displaystart),this._displayendLabel&&this._displayendLabel.attr("x",this.width).text(this._displayend)}},{key:"_updatePolygon",value:function(){this.polygon&&this.polygon.attr("points","".concat(this._x(this._displaystart),",").concat(20,"\n        ").concat(this._x(this._displayend),",").concat(20,"\n        ").concat(this.width,",").concat(40,"\n        0,").concat(40))}},{key:"width",get:function(){return this._width},set:function(t){this._width=t}}])&&a(s.prototype,o),h&&a(s,h),u}(o(HTMLElement));e.a=d},820:function(t,e){t.exports='<h1 id="protvista-navigation">protvista-navigation</h1>\n<p><a href="https://www.npmjs.com/package/protvista-navigation"><img src="https://img.shields.io/npm/v/protvista-navigation.svg" alt="Published on NPM"></a></p>\n<p>This custom element can be used to zoom and navigate along the sequence displayed in ProtVista. When a user interacts with the component, a <code>change</code> event is triggered which <protvista-manager> uses to change <code>displaystart</code> and <code>displayend</code> values on relevant custom elements.</p>\n<p><a href="https://ebi-webcomponents.github.io/nightingale/#/navigation">Demo</a></p>\n<h2 id="usage">Usage</h2>\n<pre><code class="language-html">&lt;protvista-navigation\n  length=&quot;456&quot;\n  displaystart=&quot;143&quot;\n  displayend=&quot;400&quot;\n  highlightStart=&quot;23&quot;\n  highlightEnd=&quot;45&quot;\n  rulerstart=&quot;50&quot;\n/&gt;</code></pre>\n<h2 id="api-reference">API Reference</h2>\n<h4 id="length-number"><code>length: number</code></h4>\n<p>The protein or nucleic acid sequence length.</p>\n<h4 id="displaystart-number-optional"><code>displaystart: number (optional)</code></h4>\n<p>The start position of the selected region.</p>\n<h4 id="displayend-number-optional"><code>displayend: number (optional)</code></h4>\n<p>The end position of the selected region.</p>\n<h4 id="highlightstart-number-optional"><code>highlightStart: number (optional)</code></h4>\n<p>The start position of the highlighted region.</p>\n<h4 id="highlightend-number-optional"><code>highlightEnd: number (optional)</code></h4>\n<p>The end position of the highlighted region.</p>\n<h4 id="rulerstart-number-optional"><code>rulerstart: number (optional)</code></h4>\n<p>The starting coordinate of the ruler.</p>\n<h4 id="also-see-protvista-zoomable">also see <a href="https://github.com/ebi-webcomponents/nightingale/blob/master/packages/protvista-zoomable/README.md#properties">protvista-zoomable</a></h4>\n'}}]);