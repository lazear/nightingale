(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{157:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=(n(681),n(682)),a=n.n(o);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t,e,n,r,i,o,a){try{var s=t[o](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function a(t){u(o,r,i,a,s,"next",t)}function s(t){u(o,r,i,a,s,"throw",t)}a(void 0)})}}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){var e="function"==typeof Map?new Map:void 0;return(d=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return f(t,arguments,y(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),b(r,t)})(t)}function f(t,e,n){return(f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&b(i,n.prototype),i}).apply(null,arguments)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(r=y(e).call(this))||"object"!==s(r)&&"function"!=typeof r?p(n):r)._mappings=[],t.loadMolecule=t.loadMolecule.bind(p(t)),t._planHighlight=t._planHighlight.bind(p(t)),t}var n,r,i,o,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,d(HTMLElement)),n=e,r=[{key:"connectedCallback",value:function(){this.closest("protvista-manager")&&(this.manager=this.closest("protvista-manager"),this.manager.register(this)),this._pdbId=this.getAttribute("pdb-id"),this._accession=this.getAttribute("accession"),this._height=this.getAttribute("height")||"480px",this._highlight=this.getAttribute("highlight")&&e._formatHighlight(this.getAttribute("highlight"));var t=document.createElement("style");t.innerHTML=this.css,this.appendChild(t);var n=document.createElement("div");n.className="litemol-container",n.id="litemol-instance",this.messageContainer=document.createElement("span"),this.appendChild(this.messageContainer),this.appendChild(n),this.loadLiteMol()}},{key:"disconnectedCallback",value:function(){this.manager&&this.manager.unregister(this)}},{key:"attributeChangedCallback",value:function(t,n,r){if(n!==r){var i=parseFloat(r);switch(this["_".concat(t)]="number"==typeof i?r:i,t){case"pdb-id":this._pdbId=r,this.selectMolecule(this._pdbId);break;case"accession":this._accession=r;break;case"highlight":this._highlight=e._formatHighlight(this.getAttribute("highlight"));break;case"height":this._height=r}this._planHighlight(!0)}}},{key:"_planHighlight",value:function(){var t=this;this._plannedRender||(this._plannedRender=!0,requestAnimationFrame(function(){t._plannedRender=!1,t._selectedMolecule&&t.highlightChain()}))}},{key:"loadPDBEntry",value:(u=c(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.ebi.ac.uk/pdbe/api/mappings/uniprot/".concat(e));case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),this.addMessage("Couldn't load PDB entry"),new Error(t.t0);case 13:case"end":return t.stop()}},t,this,[[0,9]])})),function(t){return u.apply(this,arguments)})},{key:"selectMolecule",value:(o=c(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadPDBEntry(e);case 2:return n=t.sent,r=this.processMapping(n),t.next=6,this.loadMolecule(e);case 6:this._selectedMolecule={id:e,mappings:r},this._planHighlight();case 8:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)})},{key:"loadLiteMol",value:function(){var t=a.a.Plugin;this.Command=a.a.Bootstrap.Command,this.Query=a.a.Core.Structure.Query,this.Bootstrap=a.a.Bootstrap,this.Core=a.a.Core,this.Tree=this.Bootstrap.Tree,this.CoreVis=a.a.Visualization,this.Transformer=this.Bootstrap.Entity.Transformer,this.Visualization=this.Bootstrap.Visualization,this.Event=this.Bootstrap.Event,this.Context=t.Components.Context,this._liteMol=t.create({target:this.querySelector("#litemol-instance"),viewportBackground:"#fff",layoutState:{hideControls:!0},allowAnalytics:!1})}},{key:"loadMolecule",value:function(t){this._liteMol.clear();var e=this._liteMol.createTransform();return e.add(this._liteMol.root,this.Transformer.Data.Download,{url:"https://www.ebi.ac.uk/pdbe/coordinates/".concat(t.toLowerCase(),"/full?encoding=BCIF"),type:"Binary",_id:t}).then(this.Transformer.Data.ParseBinaryCif,{id:t},{isBinding:!0,ref:"cifDict"}).then(this.Transformer.Molecule.CreateFromMmCif,{blockIndex:0},{isBinding:!0}).then(this.Transformer.Molecule.CreateModel,{modelIndex:0},{isBinding:!1,ref:"model"}).then(this.Transformer.Molecule.CreateMacromoleculeVisual,{polymer:!0,polymerRef:"polymer-visual",het:!0,water:!0}),this._liteMol.applyTransform(e)}},{key:"getTheme",value:function(){var t=new Map;return t.set("Uniform",this.CoreVis.Color.fromRgb(207,178,178)),t.set("Selection",this.CoreVis.Color.fromRgb(255,0,0)),t.set("Highlight",this.CoreVis.Theme.Default.HighlightColor),this.Visualization.Molecule.uniformThemeProvider(void 0,{colors:t})}},{key:"addMessage",value:function(t){this.removeMessage(),this._liteMol.command(this.Bootstrap.Command.Toast.Show,{key:"UPMessage",message:t,timeoutMs:3e4})}},{key:"removeMessage",value:function(){this._liteMol.command(this.Bootstrap.Command.Toast.Hide,{key:"UPMessage"})}},{key:"processMapping",value:function(t){return Object.values(t)[0].UniProt[this._accession]?Object.values(t)[0].UniProt[this._accession].mappings:null}},{key:"translatePositions",value:function(t,e){if("string"==typeof this.highlight||Number.isNaN(t)||Number.isNaN(e))return null;var n=!0,r=!1,i=void 0;try{for(var o,a=this._selectedMolecule.mappings[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s.unp_end-s.unp_start==s.end.residue_number-s.start.residue_number){if(t>=s.unp_start&&e<=s.unp_end){var l=s.unp_start-s.start.residue_number;return{entity:s.entity_id,chain:s.chain_id,start:t-l,end:e-l}}this.addMessage("Positions ".concat(t,"-").concat(e," not found in this structure"))}else this.addMessage("Mismatch between protein sequence and structure residues")}}catch(t){r=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return null}},{key:"highlightChain",value:function(){var t=this;if(this._highlight){this.Command.Visual.ResetTheme.dispatch(this._liteMol.context,void 0),this.Command.Tree.RemoveNode.dispatch(this._liteMol.context,"sequence-selection");var e=this._liteMol.context.select("polymer-visual")[0];if(e){var n=this._highlight.map(function(e){var n=e.start,r=e.end;return t.translatePositions(n,r)}).filter(function(t){return t});if(n&&0!==n.length){var r=n.map(function(e){return t.Query.sequence(e.entity.toString(),e.chain,{seqNumber:e.start},{seqNumber:e.end})}),i=this.getTheme(),o=this._liteMol.createTransform();r.forEach(function(n){return o.add(e,t.Transformer.Molecule.CreateSelectionFromQuery,{query:n},{ref:"sequence-selection"})}),this._liteMol.applyTransform(o).then(function(){t.Command.Visual.UpdateBasicTheme.dispatch(t._liteMol.context,{visual:e,theme:i})}),this.removeMessage()}}}}},{key:"css",get:function(){return"\n    :root {\n      --blue: 0, 112, 155;\n    }\n  \n    protvista-structure h4 {\n      display: inline;\n      margin-right: 1em;\n    }\n      \n    .litemol-container {\n      position: relative;\n      height: ".concat(this._height,";\n    }\n\n    .lm-viewport-controls {\n      display: ").concat(this.hideViewportControls?"none":"block",";\n    }\n    ")}},{key:"accession",get:function(){return this._accession},set:function(t){return this.setAttribute("accession",t),this._accession}},{key:"pdbId",get:function(){return this._pdbID},set:function(t){this.setAttribute("pdbid",t),this._pdbID=t}},{key:"height",get:function(){return this.getAttribute("height")}},{key:"hideViewportControls",get:function(){return this.getAttribute("hide-viewport-controls")}}],i=[{key:"_formatHighlight",value:function(t){return t.split(",").map(function(t){var e=l(t.split(":"),2),n=e[0],r=e[1];return{start:Number(n),end:Number(r)}})}},{key:"observedAttributes",get:function(){return["highlight","pdb-id","height"]}}],r&&h(n.prototype,r),i&&h(n,i),e}(),g=n(631),m=n(602),w=n(599),C=n(100),M=(n(686),n(39)),_=n(693),P=n.n(_),k=n(694);function R(){var t=B(["\n                "," · ","\n              "]);return R=function(){return t},t}function O(){var t=B(["\n                <a href=",">","</a>\n              "]);return O=function(){return t},t}function A(){var t=B(["\n        ","\n      "]);return A=function(){return t},t}function B(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object(C.a)("protvista-structure",v),Object(C.a)("protvista-datatable",g.a),Object(C.a)("protvista-manager",m.a);var D=[{name:"PDBe",url:function(t){return"https://www.ebi.ac.uk/pdbe-srv/view/entry/".concat(t)}},{name:"RCSB PDB",url:function(t){return"https://www.rcsb.org/structure/".concat(t)}},{name:"PDBj",url:function(t){return"https://pdbj.org/mine/summary/".concat(t)}},{name:"PDBsum",url:function(t){return"https://www.ebi.ac.uk/pdbsum/".concat(t)}}],E=function(t){var e=function(t){return t.map(function(t){var e=t.id,n=t.properties;if(!n)return null;var r,i,o,a=n.Chains,s=n.Resolution,l=n.Method;if(a){var u=a.split("=");if(2===u.length){var c=T(u,2);r=c[0];var h=(i=c[1]).split("-");h&&2===h.length&&(o=T(h,1)[0])}}return{id:e,method:l,resolution:s&&"-"!==s?s:null,chain:r,positions:i,protvistaFeatureId:e,start:Number(o)}})}(t.xrefs),n=Object(r.useCallback)(function(t){t&&(t.data=e,t.columns={type:{label:"PDB Entry",resolver:function(t){return t.id}},method:{label:"Method",resolver:function(t){return t.method}},resolution:{label:"Resolution",resolver:function(t){var e=t.resolution;return e&&e.replace("A","Å")}},chain:{label:"Chain",resolver:function(t){return t.chain}},positions:{label:"Positions",resolver:function(t){return t.positions}},links:{label:"Links",resolver:function(t){var e=t.id;return Object(w.c)(A(),D.map(function(t){var n=t.name,r=t.url;return Object(w.c)(O(),r(e),n)}).reduce(function(t,e){return Object(w.c)(R(),t,e)}))}}},t.rowClickEvent=function(t){return{"pdb-id":t.id}})},[e]);return i.a.createElement("protvista-datatable",{ref:n,selectedId:"1AAP",noScrollToRow:!0,noDeselect:!0})};e.default=function(){return i.a.createElement(r.Fragment,null,i.a.createElement(M.default,{content:P.a}),i.a.createElement("h2",null,"Examples"),i.a.createElement("h3",null,"Structure with highlighted positions"),i.a.createElement("protvista-structure",{"pdb-id":"1AAP",accession:"P05067",highlight:"290:300,310:340"}),i.a.createElement("h3",null,"Structure with protvista-datatable"),i.a.createElement("protvista-manager",{attributes:"pdb-id"},i.a.createElement("protvista-structure",{"pdb-id":"1AAP",accession:"P05067"}),i.a.createElement(E,{xrefs:k})))}},602:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return s(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,t)})(t)}function s(t,e,n){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&l(i,n.prototype),i}).apply(null,arguments)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=o(this,u(e).call(this))).protvistaElements=new Set,t.attributeValues=new Map,t.propertyValues=new Map,t}var n,r,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,a(HTMLElement)),n=e,s=[{key:"observedAttributes",get:function(){return["attributes"]}}],(r=[{key:"attributeChangedCallback",value:function(t,e,n){if(e!==n&&"attributes"===t){if(this._attributes=n.split(" "),-1!==this._attributes.indexOf("type"))throw new Error("'type' can't be used as a protvista attribute");if(-1!==this._attributes.indexOf("value"))throw new Error("'value' can't be used as a protvista attribute")}}},{key:"register",value:function(t){this.protvistaElements.add(t)}},{key:"unregister",value:function(t){this.protvistaElements.delete(t)}},{key:"_polyfillElementClosest",value:function(){var t=this;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var n=t;do{if(n.matches(e))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null})}},{key:"applyAttributes",value:function(){var t=this;this.protvistaElements.forEach(function(e){t.attributeValues.forEach(function(t,n){!1===t?e.removeAttribute(n):e.setAttribute(n,"boolean"==typeof t?"":t)})})}},{key:"applyProperties",value:function(t){var e=this;if(t){var n=this.querySelector("#".concat(t));this.propertyValues.forEach(function(t,e){n[e]=t})}else this.protvistaElements.forEach(function(t){e.propertyValues.forEach(function(e,n){t[n]=e})})}},{key:"_changeListener",value:function(t){var e=this;switch(t.detail.handler){case"property":this.propertyValues.set(t.detail.type,t.detail.value),this.applyProperties(t.detail.for);break;default:-1!==this._attributes.indexOf(t.detail.type)&&this.attributeValues.set(t.detail.type,t.detail.value),Object.keys(t.detail).forEach(function(n){-1!==e._attributes.indexOf(n)&&e.attributeValues.set(n,t.detail[n])}),this.applyAttributes()}}},{key:"connectedCallback",value:function(){this.addEventListener("change",this._changeListener)}}])&&i(n.prototype,r),s&&i(n,s),e}();e.a=c},624:function(t,e){t.exports='<svg viewBox="0 0 496 496" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>plus</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="plus-circle" fill="#000000" fill-rule="nonzero"><path d="M248,0 C385,0 496,111 496,248 C496,385 385,496 248,496 C111,496 0,385 0,248 C0,111 111,0 248,0 Z M248,36 C130.915633,36 36,130.915633 36,248 C36,365.084367 130.915633,460 248,460 C365.084367,460 460,365.084367 460,248 C460,130.915633 365.084367,36 248,36 Z M392,276 C392,282.6 386.6,288 380,288 L288,288 L288,380 C288,386.6 282.6,392 276,392 L220,392 C213.4,392 208,386.6 208,380 L208,288 L116,288 C109.4,288 104,282.6 104,276 L104,220 C104,213.4 109.4,208 116,208 L208,208 L208,116 C208,109.4 213.4,104 220,104 L276,104 C282.6,104 288,109.4 288,116 L288,208 L380,208 C386.6,208 392,213.4 392,220 L392,276 Z" id="Shape"></path></g></g></svg>'},625:function(t,e){t.exports='<svg viewBox="0 0 496 496" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>plus-circle</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="plus-circle" fill="#000000" fill-rule="nonzero"><path d="M248,0 C385,0 496,111 496,248 C496,385 385,496 248,496 C111,496 0,385 0,248 C0,111 111,0 248,0 Z M248,36 C130.915633,36 36,130.915633 36,248 C36,365.084367 130.915633,460 248,460 C365.084367,460 460,365.084367 460,248 C460,130.915633 365.084367,36 248,36 Z M392,276 C392,282.6 386.6,288 380,288 L288,288 L208,288 L116,288 C109.4,288 104,282.6 104,276 L104,220 C104,213.4 109.4,208 116,208 L208,208 L288,208 L380,208 C386.6,208 392,213.4 392,220 L392,276 Z" id="Shape"></path></g></g></svg>'},631:function(t,e,n){"use strict";var r=n(64),i=n(562),o=n(623);function a(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  :host {\n    display: block;\n  }\n  .protvista-datatable-container {\n    overflow-y: auto;\n    overflow-x: hidden;\n  }\n\n  .protvista-datatable__child-toggle svg {\n    width: 1.1rem;\n    height: 1.1rem;\n  }\n\n  table {\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    border-spacing: 0;\n  }\n\n  th {\n    position: sticky;\n    position: -webkit-sticky;\n    position: -moz-sticky;\n    position: -ms-sticky;\n    position: -o-sticky;\n    text-align: left;\n    background-color: var(--protvista-datable__header-background, #fff);\n    color: var(--protvista-datable__header-text, #393b42);\n    text-overflow: ellipsis;\n    top: 0;\n  }\n\n  td,\n  th {\n    padding: 1rem;\n    border-bottom: 1px solid #c2c4c4;\n  }\n\n  tr:hover:not(.active):not(.child-row) {\n    background-color: var(--protvista-datatable__hover, #f1f1f1);\n  }\n\n  td {\n    cursor: pointer;\n  }\n\n  td:nth-child(1) {\n    border-left: 0.5rem solid transparent;\n  }\n\n  .overlapped td:nth-child(1) {\n    border-left: 0.5rem solid\n      var(--protvista-datatable__overlapped, rgba(255, 0, 0, 0.8));\n  }\n\n  .active {\n    background-color: var(\n      --protvista-datatable__active,\n      rgba(255, 235, 59, 0.3)\n    );\n  }\n  .hidden {\n    opacity: 0.2;\n  }\n  .evidence-tag {\n    cursor: pointer;\n    font-size: 80%;\n    white-space: nowrap;\n    margin-left: 0.5rem;\n    border-radius: 0.5rem;\n    background-color: #f1f1f1;\n    padding: 0.25rem 0.5rem;\n    color: #3a343a;\n  }\n  .evidence-tag__label {\n    padding-left: 0.25rem;\n    text-transform: capitalize;\n  }\n  .svg-colour-reviewed {\n    fill: #c39b00;\n  }\n  .svg-colour-unreviewed {\n    fill: #c0c0c0;\n  }\n\n  .protvista-datatable__child-item {\n    display: flex;\n  }\n\n  .protvista-datatable__child-item__title {\n    font-weight: 700;\n    flex-basis: 10vw;\n    flex-grow: 0;\n    margin-right: 1rem;\n  }\n\n  .protvista-datatable__child-item__content {\n  }\n"]);return a=function(){return t},t}var s=Object(r.b)(a()),l=n(624),u=n.n(l),c=n(625),h=n.n(c);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach(function(e){b(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(){var t=R(["\n                        <td>\n                          ","\n                        </td>\n                      "]);return y=function(){return t},t}function v(){var t=R(["\n                        <td />\n                      "]);return v=function(){return t},t}function g(){var t=R(['\n                        <td\n                          class="protvista-datatable__child-toggle"\n                          @click="','"\n                        >\n                          ',"\n                        </td>\n                      "]);return g=function(){return t},t}function m(){var t=R(["\n                <tr\n                  data-id=","\n                  class=",'\n                  @click="','"\n                >\n                  ',"\n                  ","\n                </tr>\n                ","\n              "]);return m=function(){return t},t}function w(){var t=R(["\n                    <th>","</th>\n                  "]);return w=function(){return t},t}function C(){var t=R(['\n      <div\n        class="protvista-datatable-container"\n        style="height:','rem"\n      >\n        <table>\n          <thead>\n            <tr>\n              <th></th>\n              ',"\n            </tr>\n          </thead>\n          <tbody>\n            ","\n          </tbody>\n        </table>\n      </div>\n    "]);return C=function(){return t},t}function M(){var t=R([""]);return M=function(){return t},t}function _(){var t=R([""]);return _=function(){return t},t}function P(){var t=R(['\n                  <div class="protvista-datatable__child-item">\n                    <div class="protvista-datatable__child-item__title">\n                      ','\n                    </div>\n                    <div class="protvista-datatable__child-item__content">\n                      ',"\n                    </div>\n                  </div>\n                "]);return P=function(){return t},t}function k(){var t=R(['\n      <tr class="child-row">\n        <td\n          colspan="','"\n        >\n          ',"\n        </td>\n      </tr>\n    "]);return k=function(){return t},t}function R(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function O(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(t,e,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t){function e(){var t,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,(t=!(r=D(e).call(this))||"object"!==p(r)&&"function"!=typeof r?B(n):r).height=25,t.visibleChildren=[],t.noScrollToRow=!1,t.noDeselect=!1,t.eventHandler=t.eventHandler.bind(B(t)),t}var n,a,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,r["a"]),n=e,l=[{key:"processData",value:function(t){return t.map(function(t){return f({},t,{start:t.start?t.start:t.begin})}).sort(function(t,e){return t.start-e.start}).map(function(t){return f({},t,{protvistaFeatureId:t.protvistaFeatureId||Object(i.v1)()})})}},{key:"isWithinRange",value:function(t,e,n,r){return!n&&e===Number(r)||!r&&t===Number(n)||t<=n&&e>=r}},{key:"isOutside",value:function(t,e,n,r){return t>r||e<n}},{key:"properties",get:function(){return{data:{type:Object},highlight:{converter:function(t){return t&&"null"!==t?t.split(":").map(function(t){return Number(t)}):null}},height:{type:Number},columns:{type:Object},displayStart:{type:Number},displayEnd:{type:Number},visibleChildren:{type:Array},selectedid:{type:String},rowClickEvent:{type:Function},noScrollToRow:{type:Boolean},noDeselect:{type:Boolean}}}},{key:"styles",get:function(){return s}}],(a=[{key:"connectedCallback",value:function(){var t=this;T(D(e.prototype),"connectedCallback",this).call(this),this.addEventListener("load",function(n){Array.from(t.children).includes(n.target)&&(t.data=e.processData(n.detail.payload.features))}),this.closest("protvista-manager")&&(this.manager=this.closest("protvista-manager"),this.manager.register(this)),this.noDeselect||document.addEventListener("click",this.eventHandler),this.classList.add("feature")}},{key:"disconnectedCallback",value:function(){T(D(e.prototype),"disconnectedCallback",this).call(this),this.manager&&this.manager.unregister(this),document.removeEventListener("click",this.eventHandler)}},{key:"eventHandler",value:function(t){t.target.closest("protvista-datatable")||t.target.closest(".feature")||(this.selectedid=null)}},{key:"handleClick",value:function(t,e){if(t.target.parentNode){var n=e.start,r=e.end,i="function"==typeof this.rowClickEvent&&this.rowClickEvent(e)||{};this.selectedid=t.target.parentNode.dataset.id,n&&r&&(i.highlight="".concat(n,":").concat(r)),this.dispatchEvent(new CustomEvent("change",{detail:i,bubbles:!0,cancelable:!0}))}}},{key:"getStyleClass",value:function(t,n,r){var i="";return this.selectedid&&this.selectedid===t&&(i="".concat(i," active")),this.displayStart&&this.displayEnd&&e.isOutside(this.displayStart,this.displayEnd,n,r)&&(i="".concat(i," hidden")),this.highlight&&e.isWithinRange(this.highlight[0],this.highlight[1],n,r)&&(i="".concat(i," overlapped")),i}},{key:"hasChildData",value:function(t,e){var n=this;return t.some(function(t){return n.columns[t].resolver(e)})}},{key:"toggleVisibleChild",value:function(t){this.visibleChildren.includes(t)?this.visibleChildren=this.visibleChildren.filter(function(e){return e!==t}):this.visibleChildren=[].concat(O(this.visibleChildren),[t])}},{key:"scrollIntoView",value:function(){this.selectedid&&this.shadowRoot.querySelector('[data-id="'.concat(this.selectedid,'"]')).scrollIntoView({behavior:"smooth",block:"center"})}},{key:"getChildRow",value:function(t,e){var n=this;return Object(r.c)(k(),Object.values(this.columns).filter(function(t){return!t.child}).length+1,t.map(function(t){return n.columns[t].resolver(e)?Object(r.c)(P(),n.columns[t].label,n.columns[t].resolver(e)):Object(r.c)(_())}))}},{key:"render",value:function(){var t=this;if(!this.data||!this.columns)return Object(r.c)(M());var e=Object.keys(this.columns).filter(function(e){return t.columns[e].child}),n=Object.values(this.columns).filter(function(t){return!t.child&&!1!==t.display});return Object(r.c)(C(),this.height,n.map(function(t){return Object(r.c)(w(),t.label)}),this.data.map(function(i){var a=t.hasChildData(e,i);return Object(r.c)(m(),i.protvistaFeatureId,t.getStyleClass(i.protvistaFeatureId,i.start,i.end),function(e){return t.handleClick(e,i)},a?Object(r.c)(g(),function(){return t.toggleVisibleChild(i.protvistaFeatureId)},t.visibleChildren.includes(i.protvistaFeatureId)?Object(o.a)(h.a):Object(o.a)(u.a)):Object(r.c)(v()),n.map(function(t){return Object(r.c)(y(),t.resolver(i))}),a&&t.visibleChildren.includes(i.protvistaFeatureId)?t.getChildRow(e,i):"")}))}},{key:"updated",value:function(){this.noScrollToRow||this.scrollIntoView()}},{key:"data",set:function(t){var n=this._data;this._data=e.processData(t),this.requestUpdate("data",n)},get:function(){return this._data}}])&&A(n.prototype,a),l&&A(n,l),e}();e.a=j},693:function(t,e){t.exports='<h1 id="protvista-structure">protvista-structure</h1>\n<p><a href="https://www.npmjs.com/package/protvista-structure"><img src="https://img.shields.io/npm/v/protvista-structure.svg" alt="Published on NPM"></a></p>\n<p>In progress - A native web component wrapper around LiteMol</p>\n<h2 id="usage">Usage</h2>\n<pre><code class="language-html">&lt;!-- With UniProt Accession --&gt;\n&lt;protvista-structure accession=&quot;P06493&quot; /&gt;\n&lt;!-- To highlight a position/range --&gt;\n&lt;protvista-structure accession=&quot;P06493&quot; highlight=&quot;209:220&quot; /&gt;\n&lt;!-- With a specific PDBe entry selected and the entrie table being hidden --&gt;\n&lt;protvista-structure\n  accession=&quot;P06493&quot;\n  highlight=&quot;209:220&quot;\n  molecule=&quot;4YC3&quot;\n  hide-table\n/&gt;</code></pre>\n<h2 id="api-reference">API Reference</h2>\n<h3 id="properties">Properties</h3>\n<h4 id="accession"><code>accession</code></h4>\n<p>A UniProt protein accession.</p>\n<h4 id="highlight"><code>highlight</code></h4>\n<p>This is a comma separated list of numerical ranges represented as a string e.g. &quot;1-5,10-20&quot;. When available, it will highlight all the residues corresponding to the given sequence positions.</p>\n<h4 id="hide-table"><code>hide-table</code></h4>\n<p>It will prevent the PDBe entries table to render next to the 3D structure.</p>\n<h4 id="molecule"><code>molecule</code></h4>\n<p>When available this PDBe structure will be selected, otherwise the first structure in the entry list that its <code>properties.method !== &quot;Model&quot;</code> will be selected and displayed.</p>\n<h4 id="height"><code>height</code></h4>\n<p>The optional height of both table -- if visible, and the 3D structure. By default the value is set to <code>480px</code>. This should be a string value, representing a valid CSS value for an element&#39;s height property.</p>\n<h4 id="hide-viewport-controls"><code>hide-viewport-controls</code></h4>\n<p>Optionally you can hide the viewport controls -- located on the top-right corner of the 3D visualisation, by passing this attribute. This can be particularly useful when the size of 3D visualisation doesn&#39;t allow for extra controls to be included.</p>\n'},694:function(t){t.exports=JSON.parse('[{"databaseType":"PDB","id":"1AAP","properties":{"Method":"X-ray","Resolution":"1.50 A","Chains":"A/B=287-344"}},{"databaseType":"PDB","id":"1AMB","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-699"}},{"databaseType":"PDB","id":"1AMC","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-699"}},{"databaseType":"PDB","id":"1AML","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-711"}},{"databaseType":"PDB","id":"1BA4","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-711"}},{"databaseType":"PDB","id":"1BA6","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-711"}},{"databaseType":"PDB","id":"1BJB","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-699"}},{"databaseType":"PDB","id":"1BJC","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-699"}},{"databaseType":"PDB","id":"1BRC","properties":{"Method":"X-ray","Resolution":"2.50 A","Chains":"I=287-342"}},{"databaseType":"PDB","id":"1CA0","properties":{"Method":"X-ray","Resolution":"2.10 A","Chains":"D/I=289-342"}},{"databaseType":"PDB","id":"1HZ3","properties":{"Method":"NMR","Resolution":"-","Chains":"A=681-706"}},{"databaseType":"PDB","id":"1IYT","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-713"}},{"databaseType":"PDB","id":"1MWP","properties":{"Method":"X-ray","Resolution":"1.80 A","Chains":"A=28-123"}},{"databaseType":"PDB","id":"1OWT","properties":{"Method":"NMR","Resolution":"-","Chains":"A=124-189"}},{"databaseType":"PDB","id":"1QCM","properties":{"Method":"NMR","Resolution":"-","Chains":"A=696-706"}},{"databaseType":"PDB","id":"1QWP","properties":{"Method":"NMR","Resolution":"-","Chains":"A=696-706"}},{"databaseType":"PDB","id":"1QXC","properties":{"Method":"NMR","Resolution":"-","Chains":"A=696-706"}},{"databaseType":"PDB","id":"1QYT","properties":{"Method":"NMR","Resolution":"-","Chains":"A=696-706"}},{"databaseType":"PDB","id":"1TAW","properties":{"Method":"X-ray","Resolution":"1.80 A","Chains":"B=287-344"}},{"databaseType":"PDB","id":"1TKN","properties":{"Method":"NMR","Resolution":"-","Chains":"A=460-569"}},{"databaseType":"PDB","id":"1UO7","properties":{"Method":"Model","Resolution":"-","Chains":"A=672-713"}},{"databaseType":"PDB","id":"1UO8","properties":{"Method":"Model","Resolution":"-","Chains":"A=672-713"}},{"databaseType":"PDB","id":"1UOA","properties":{"Method":"Model","Resolution":"-","Chains":"A=672-713"}},{"databaseType":"PDB","id":"1UOI","properties":{"Method":"Model","Resolution":"-","Chains":"A=672-713"}},{"databaseType":"PDB","id":"1X11","properties":{"Method":"X-ray","Resolution":"2.50 A","Chains":"C/D=754-766"}},{"databaseType":"PDB","id":"1Z0Q","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-713"}},{"databaseType":"PDB","id":"1ZE7","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-687"}},{"databaseType":"PDB","id":"1ZE9","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-687"}},{"databaseType":"PDB","id":"1ZJD","properties":{"Method":"X-ray","Resolution":"2.60 A","Chains":"B=289-344"}},{"databaseType":"PDB","id":"2BEG","properties":{"Method":"NMR","Resolution":"-","Chains":"A/B/C/D/E=672-713"}},{"databaseType":"PDB","id":"2BOM","properties":{"Method":"Model","Resolution":"-","Chains":"A/B=681-713"}},{"databaseType":"PDB","id":"2BP4","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-687"}},{"databaseType":"PDB","id":"2FJZ","properties":{"Method":"X-ray","Resolution":"1.61 A","Chains":"A=133-189"}},{"databaseType":"PDB","id":"2FK1","properties":{"Method":"X-ray","Resolution":"1.60 A","Chains":"A=133-189"}},{"databaseType":"PDB","id":"2FK2","properties":{"Method":"X-ray","Resolution":"1.65 A","Chains":"A=133-189"}},{"databaseType":"PDB","id":"2FK3","properties":{"Method":"X-ray","Resolution":"2.40 A","Chains":"A/B/C/D/E/F/G/H=133-189"}},{"databaseType":"PDB","id":"2FKL","properties":{"Method":"X-ray","Resolution":"2.50 A","Chains":"A/B=124-189"}},{"databaseType":"PDB","id":"2FMA","properties":{"Method":"X-ray","Resolution":"0.85 A","Chains":"A=133-189"}},{"databaseType":"PDB","id":"2G47","properties":{"Method":"X-ray","Resolution":"2.10 A","Chains":"C/D=672-711"}},{"databaseType":"PDB","id":"2IPU","properties":{"Method":"X-ray","Resolution":"1.65 A","Chains":"P/Q=672-679"}},{"databaseType":"PDB","id":"2LFM","properties":{"Method":"NMR","Resolution":"-","Chains":"A=672-711"}},{"databaseType":"PDB","id":"2LLM","properties":{"Method":"NMR","Resolution":"-","Chains":"A=686-726"}},{"databaseType":"PDB","id":"2LMN","properties":{"Method":"NMR","Resolution":"-","Chains":"A/B/C/D/E/F/G/H/I/J/K/L=672-711"}},{"databaseType":"PDB","id":"2LMO","properties":{"Method":"NMR","Resolution":"-","Chains":"A/B/C/D/E/F/G/H/I/J/K/L=672-711"}}]')}}]);