(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1048:function(e,t){e.exports='<h1 id="protvista-sequence">protvista-sequence</h1>\n<p><a href="https://www.npmjs.com/package/protvista-sequence"><img src="https://img.shields.io/npm/v/protvista-sequence.svg" alt="Published on NPM"></a></p>\n<p>This custom element displays the sequence in the selected region if the zoom level allows it, otherwise it displays the axis legend of the selected region. As it inherits from <protvista-zoomable>, it supports highlighting.</p>\n<p><a href="https://ebi-webcomponents.github.io/nightingale/#/sequence">Demo</a></p>\n<h2 id="usage">Usage</h2>\n<h4 id="setting-sequence-through-property">Setting sequence through property</h4>\n<pre><code class="language-html">&lt;protvista-sequence length=&quot;456&quot; /&gt;</code></pre>\n<pre><code>const protvistaSequence = document.querySelectAll(&#39;#my-protvista-sequence-id&#39;);\nprotvistaSequence.sequence = proteinSequence;</code></pre><h4 id="setting-sequence-through-attribute">Setting sequence through attribute</h4>\n<pre><code class="language-html">&lt;protvista-sequence length=&quot;456&quot; sequence=&quot;RFQAEGSLKK...&quot; /&gt;</code></pre>\n<h2 id="api-reference">API Reference</h2>\n<h3 id="properties">Properties</h3>\n<h4 id="sequence-string"><code>sequence: string</code></h4>\n<p>The sequence to display</p>\n<h4 id="length-number"><code>length: number</code></h4>\n<p>The protein or nucleic acid sequence length.</p>\n<h4 id="numberofticks-number"><code>numberofticks: number</code></h4>\n<p>The number of ticks in the displayed sequence.</p>\n<h4 id="also-see-protvista-zoomable">also see <a href="https://github.com/ebi-webcomponents/nightingale/blob/master/packages/protvista-zoomable/README.md#properties">protvista-zoomable</a></h4>\n'},165:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(717),s=n(111),c=n(35),a=n(1048),u=n.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(f,e);var t,n,a,l=d(f);function f(){return p(this,f),l.apply(this,arguments)}return t=f,(n=[{key:"componentDidMount",value:function(){var e="MAMYDDEFDTKASDLTFSPWVEVENWKDVTTRLRAIKFALQADRDKIPGVLSDLKTNCPYSAFKRFPDKSLYSVLSKEAVIAVAQIQSASGFKRRADEKNAVSGLVSVTPTQISQSASSSAATPVGLATVKPPRESDSAFQEDTFSYAKFDDASTAFHKALAYLEGLSLRPTYRRKFEKDMNVKWGGSGSAPSGAPAGGSSGSAPPTSGSSGSGAAPTPPPNP";document.querySelector("#seq1").data=e,document.querySelector("#seq2").data=e,document.querySelector("#seq3").data=e,document.querySelector("#seq4").data=e}},{key:"render",value:function(){return Object(s.a)("protvista-sequence",i.a),r.a.createElement(o.Fragment,null,r.a.createElement(c.default,{content:u.a}),r.a.createElement("protvista-sequence",{id:"seq1",length:"223",displaystart:"1",displayend:"223",highlight:"23:45"}),r.a.createElement("protvista-sequence",{id:"seq2",length:"223",displaystart:"10",displayend:"150",highlightStart:"23",highlightEnd:"45",numberofticks:"10"}),r.a.createElement("protvista-sequence",{id:"seq3",length:"223",displaystart:"18",displayend:"100",highlightStart:"23",highlightEnd:"45"}),r.a.createElement("protvista-sequence",{id:"seq4",length:"223",displaystart:"22",displayend:"50",highlightStart:"23",highlightEnd:"45"}),r.a.createElement("protvista-sequence",{sequence:"MAMYDDEFDTKASDLTFSPWVEVENWKDVTTRLRAIKFALQADRDKIPGVLSDLKTNCPYSAFKRFPDKSLYSVLSKEAVIAVAQIQSASGFKRRADEKNAVSGLVSVTPTQISQSASSSAATPVGLATVKPPRESDSAFQEDTFSYAKFDDASTAFHKALAYLEGLSLRPTYRRKFEKDMNVKWGGSGSAPSGAPAGGSSGSAPPTSGSSGSGAAPTPPPNP",length:"223",displaystart:"1",displayend:"4",highlightStart:"2",highlightEnd:"2",numberofticks:"2"}))}}])&&h(t.prototype,n),a&&h(t,a),f}(o.Component);t.default=A}}]);