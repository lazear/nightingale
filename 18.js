(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{167:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(722),o=n(723),c=n(595),l=n(596),s=n(781);function u(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw a}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e){!function t(e,n,r){if(!(n.length<=0)){var i,a=u(e);try{for(a.s();!(i=a.n()).done;){var o=i.value;if(o.name===n[0])return void t(o.children,n.slice(1),o)}}catch(t){a.e(t)}finally{a.f()}var c={name:n[0],selected:!1,parent:r,children:[]};e.push(c),t(c.children,n.slice(1),c)}}(e,t.split(", "))}function p(t,e,n){"number"==typeof n?n++:n=1;var r,i=u(t);try{for(i.s();!(r=i.n()).done;){var a=r.value;a.depth=n,e(a),a.children.length>0&&p(a.children,e,n)}}catch(t){i.e(t)}finally{i.f()}}function h(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=v(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw a}}}}function v(t,e){if(t){if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t,e){var n=e.find((function(e){return t.id===e.id}));n?t.isoform&&(n.isoform=t.isoform):e.push(t)}function m(t){var e,n=[],r={},i=h(t=t.map((function(t){return t.interactions||(t.interactions=[]),t})));try{var a=function(){var n,r=e.value,i=h(r.interactions);try{var a=function(){var e=n.value,i=t.find((function(t){return t.accession===e.accession2}));if(i&&!i.interactions.find((function(t){return t.id===r.accession}))){var a=Object(s.a)(e);a.id=r.accession,i.interactions.push(a)}};for(i.s();!(n=i.n()).done;)a()}catch(t){i.e(t)}finally{i.f()}};for(i.s();!(e=i.n()).done;)a()}catch(t){i.e(t)}finally{i.f()}var o,c=h(t);try{var l=function(){var e=o.value;e.filterTerms=[];var i,a=[],c=h(e.interactions);try{var l=function(){var n=i.value;"SELF"===n.interactionType?(n.source=e.accession,n.id=e.accession,y(n,a)):t.some((function(t){return t.accession===n.id}))&&(n.source=e.accession,y(n,a))};for(c.s();!(i=c.n()).done;)l()}catch(t){c.e(t)}finally{c.f()}if(e.interactions=a,e.subcellularLocations&&e.subcellularLocations.filter((function(t){return t.locations})).forEach((function(t){var r,i=h(t.locations);try{for(i.s();!(r=i.n()).done;){var a=r.value;d(a.location.value,n);var o=a.location.value.split(", ");e.filterTerms=e.filterTerms.concat(o)}}catch(t){i.e(t)}finally{i.f()}})),e.diseases){var s,u=h(e.diseases);try{for(u.s();!(s=u.n()).done;){var f=s.value;f.diseaseId&&(r[f.diseaseId]={name:f.diseaseId,selected:!1},e.filterTerms.push(f.diseaseId))}}catch(t){u.e(t)}finally{u.f()}}};for(c.s();!(o=c.n()).done;)l()}catch(t){c.e(t)}finally{c.f()}return{data:t,subcellulartreeMenu:n,diseases:Object.values(r)}}function w(t){var e="https://www.ebi.ac.uk/proteins/api/proteins/interaction/".concat(t,".json");return fetch(e).then((function(t){return 404===t.status?null:t.ok?204===t.status?null:t.json():(console.error(new Error("Request Failed: Status = ".concat(t.status,"; URI = ").concat(e,"; Time = ").concat(new Date))),null)})).then((function(t){return t}))}var g=n(728),x=n(848),j=n(843);function k(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw a}}}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var A=function(t,e){if(t){var n,r="",i=k(t);try{for(i.s();!(n=i.n()).done;){var a=n.value;a.dbReference&&(r+='<p><a href="//www.uniprot.org/uniprot/'.concat(e,"#").concat(a.acronym,'" target="_blank">').concat(a.diseaseId,"</a></p>"))}}catch(t){i.e(t)}finally{i.f()}return r}return"N/A"},S=function(){Object(a.a)(".interaction-tooltip").style("opacity",0).style("display","none")},_=function(t){if(t){var e='<ul class="tree-list">',n=[];return t.filter((function(t){return t.locations})).forEach((function(t){var e,r=k(t.locations);try{for(r.s();!(e=r.n()).done;){d(e.value.location.value,n)}}catch(t){r.e(t)}finally{r.f()}})),p(n,(function(t){return e+='<li style="margin-left:'.concat(t.depth,'em">').concat(t.name,"</li>")})),"".concat(e,"</ul>")}return"N/A"},E=function(t,e,n){var r=n,i=Object(o.a)(t).append("div").attr("class","interaction-tooltip").style("display","none").style("opacity",0);i.append("span").attr("class","close-interaction-tooltip").text("Close ✖").on("click",S),i.append("div").attr("class","tooltip-content"),Object(o.a)(t).append("p").attr("class","interaction-title").text("".concat(e," has binary interactions with ").concat(r.length-1," proteins"));var c=100,l=0,s=10,u=100,f=18*r.length,d=f,p=Object(x.a)().rangeRound([0,f]),h=Object(j.a)().range([.2,1]),v=Object(o.a)(t).append("svg").attr("width",f+u+l).attr("height",d+c+s).attr("class","interaction-viewer").append("g").attr("class","interaction-viewer-group").attr("transform","translate(".concat(u,",").concat(c,")"));p.domain(r.map((function(t){return t.accession}))),h.domain([0,10]);var b=function(t,e){return"//www.ebi.ac.uk/intact/query/id:".concat(t," AND id:").concat(e)},y=function(t){Object(o.a)(void 0).classed("active-cell",!0),Object(a.a)(".interaction-viewer-group").append("line").attr("class","active-row").attr("style","opacity:0.3").attr("x1",0).attr("y1",p(t.source)+p.bandwidth()/2).attr("x2",p(t.id)).attr("y2",p(t.source)+p.bandwidth()/2),Object(a.a)(".interaction-viewer-group").append("line").attr("class","active-row").attr("style","opacity:0.3").attr("x1",p(t.id)+p.bandwidth()/2).attr("y1",0).attr("x2",p(t.id)+p.bandwidth()/2).attr("y2",p(t.source))},m=function(){Object(a.a)("g").classed("active",!1),Object(a.a)("circle").classed("active-cell",!1),Object(a.a)(".active-row").remove()},w=function(e){!function(t,e){t.html("");var n=r.find((function(t){return t.accession===e.source})),i=r.find((function(t){return t.accession===e.id}));t.append("h3").text("Interaction"),t.append("p").append("a").attr("href",b(e.interactor1,e.interactor2)).attr("target","_blank").text("Confirmed by ".concat(e.experiments," experiment(s)"));var a=t.append("table").attr("class","interaction-viewer-table"),o=a.append("tr");o.append("th"),o.append("th").text("Interactor 1"),o.append("th").text("Interactor 2");var c=a.append("tr");c.append("td").text("Name").attr("class","interaction-viewer-table_row-header"),c.append("td").text("".concat(n.name)),c.append("td").text("".concat(i.name));var l=a.append("tr");if(l.append("td").text("UniProtKB").attr("class","interaction-viewer-table_row-header"),l.append("td").append("a").attr("href","//uniprot.org/uniprot/".concat(n.accession)).text("".concat(n.accession)),l.append("td").append("a").attr("href","//uniprot.org/uniprot/".concat(i.accession)).text("".concat(i.accession)),e.chain1||e.chain2){var s=a.append("tr");s.append("td").text("Chain").attr("class","interaction-viewer-table_row-header"),s.append("td").text("".concat(e.chain1?e.chain1:"N/A")),s.append("td").text("".concat(e.chain2?e.chain2:"N/A"))}var u=a.append("tr");u.append("td").text("Pathology").attr("class","interaction-viewer-table_row-header"),u.append("td").html(A(n.diseases,n.accession)),u.append("td").html(A(i.diseases,i.accession));var f=a.append("tr");f.append("td").text("Subcellular location").attr("class","interaction-viewer-table_row-header"),f.append("td").html(_(n.subcellularLocations)),f.append("td").html(_(i.subcellularLocations));var d=a.append("tr");d.append("td").text("IntAct").attr("class","interaction-viewer-table_row-header"),d.append("td").attr("colspan",2).append("a").attr("href",b(e.interactor1,e.interactor2)).attr("target","_blank").text("".concat(e.interactor1,";").concat(e.interactor2))}(Object(a.a)(".tooltip-content"),e),i.style("opacity",.9).style("display","inline").style("left","".concat(Object(g.a)(t)[0]+10,"px")).style("top","".concat(Object(g.a)(t)[1]-15,"px"))};var k=v.selectAll(".interaction-row").data(r).enter().append("g").attr("class","interaction-row").attr("transform",(function(t){return"translate(0,".concat(p(t.accession),")")})).each((function(t){if(t.interactions){var e=Object(o.a)(this).selectAll(".cell").data(t.interactions);e.enter().append("circle").attr("class","cell").attr("cx",(function(t){return p(t.id)+p.bandwidth()/2})).attr("cy",(function(){return p.bandwidth()/2})).attr("r",p.bandwidth()/3).style("fill-opacity",(function(t){return h(t.experiments)})).style("display",(function(e){return p(t.accession)<p(e.id)?"none":""})).on("click",w).on("mouseover",y).on("mouseout",m),e.exit().remove()}}));k.append("rect").attr("x",-u).attr("width",u).attr("height",p.bandwidth()).attr("class","text-highlight"),k.append("text").attr("y",p.bandwidth()/2).attr("dy",".32em").attr("text-anchor","end").text((function(t,e){return r[e].name})).attr("class",(function(t,n){return r[n].accession===e?"main-accession":""}));var O=v.selectAll(".column").data(r).enter().append("g").attr("class","column").attr("transform",(function(t){return"translate(".concat(p(t.accession),", 0)rotate(-90)")}));O.append("rect").attr("x",6).attr("width",c).attr("height",p.bandwidth()).attr("class","text-highlight"),O.append("text").attr("x",6).attr("y",p.bandwidth()/2).attr("dy",".32em").attr("text-anchor","start").text((function(t,e){return r[e].name})).attr("class",(function(t,n){return r[n].accession===e?"main-accession":""}));var E="".concat(p(r[1].accession)," 0,").concat(p(r[r.length-1].accession)," 0,").concat(p(r[r.length-1].accession)," ").concat(p(r[r.length-1].accession),",").concat(p(r[0].accession)," 0");v.append("polyline").attr("points",E).attr("class","hidden-side").attr("transform",(function(){return"translate(".concat(p(r[1].accession),", 0)")}))};function I(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw a}}}}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function C(){var t="#".concat(Object(o.a)(this).attr("data-toggle")),e=Object(o.a)(t).style("visibility");Object(o.a)(".dropdown-pane").style("visibility","hidden"),Object(o.a)(t).style("visibility","hidden"===e?"visible":"hidden")}function T(t){return t.toLowerCase().replace(/\s|,|^\d/g,"_")}var R=function(t,e,n,r,i,a){Object(o.a)(t).selectAll(".interaction-filter-container").remove();var c,l=Object(o.a)(t).append("div").attr("class","interaction-filter-container"),s=I(e);try{var u=function(){var t=c.value;if(t.items.length>0){var e=l.append("div").attr("class","interaction-filter");e.append("a").text(t.label).attr("class","button dropdown").attr("data-toggle","iv_".concat(t.name)).on("click",C);var a=e.append("ul").attr("id","iv_".concat(t.name)).attr("class","dropdown-pane");if(a.append("li").text("None").on("click",(function(){return i(t.name,t.label)})),"tree"===t.type)p(t.items,(function(e){e.type=t.name,n.push(e),a.datum(e).append("li").style("padding-left","".concat(e.depth,"em")).attr("id",(function(t){return T(t.name)})).text((function(t){return t.name})).on("click",(function(e){return r(e,t.name)}))}));else{var o,s=I(t.items);try{for(s.s();!(o=s.n()).done;){var u=o.value;u.type=t.name,n.push(u)}}catch(t){s.e(t)}finally{s.f()}a.selectAll("li").data(t.items).enter().append("li").attr("id",(function(t){return T(t.name)})).text((function(t){return t.name.toLowerCase()})).on("click",(function(e){r(e,t.name)}))}}};for(s.s();!(c=s.n()).done;)u()}catch(t){s.e(t)}finally{s.f()}return l.append("button").attr("class","iv_reset").text("Reset filters").on("click",(function(){return a(),!1})),n};n(784);function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e,n,r,i,a,o){try{var c=t[a](o),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,i)}function D(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw a}}}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?B(t):e}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q(t){var e="function"==typeof Map?new Map:void 0;return(q=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return H(t,arguments,z(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),J(r,t)})(t)}function H(t,e,n){return(H=$()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&J(i,n.prototype),i}).apply(null,arguments)}function $(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function G(t,e){return[{name:"subcellularLocations",label:"Subcellular location",type:"tree",items:t},{name:"diseases",label:"Diseases",items:e}]}var Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(p,t);var e,n,r,i,s,u,f,d=(e=p,n=$(),function(){var t,r=z(e);if(n){var i=z(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return U(this,t)});function p(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(t=d.call(this)).mode="ADJACENCY_GRAPH",t.filters=[],t.nodes=null,t.clickFilter=t.clickFilter.bind(B(t)),t.resetFilter=t.resetFilter.bind(B(t)),t.resetAllFilters=t.resetAllFilters.bind(B(t)),t.updateFilterSelection=t.updateFilterSelection.bind(B(t)),t.filterData=t.filterData.bind(B(t)),t.getNodeByAccession=t.getNodeByAccession.bind(B(t)),t}return r=p,i=[{key:"connectedCallback",value:function(){this._accession=this.getAttribute("accession"),this.render()}},{key:"attributeChangedCallback",value:function(t,e,n){"accession"===t&&null!=e&&e!==n&&(this._accession=n,this.render())}},{key:"clickFilter",value:function(t,e){var n;Object(a.a)(".dropdown-pane").style("visibility","hidden"),this.filters.filter((function(t){return t.type===e})).forEach((function(t){return t.selected=!1})),t.selected=!t.selected,Object(o.a)("[data-toggle=iv_".concat(e,"]")).text((n=t.name).length>25?"".concat(n.substr(0,24),"..."):n),this.updateFilterSelection()}},{key:"resetFilter",value:function(t,e){Object(a.a)(".dropdown-pane").style("visibility","hidden"),this.filters.filter((function(e){return e.type===t})).forEach((function(t){return t.selected=!1})),Object(o.a)("[data-toggle=iv_".concat(t,"]")).text(e),this.updateFilterSelection()}},{key:"updateFilterSelection",value:function(){var t,e=D(this.filters);try{for(e.s();!(t=e.n()).done;){var n=t.value;Object(o.a)("#".concat(T(n.name))).classed("active",n.selected)}}catch(t){e.e(t)}finally{e.f()}this.filterData()}},{key:"resetAllFilters",value:function(){this.filters.filter((function(t){return t.selected})).forEach((function(t){return t.selected=!1})),G().forEach((function(t){Object(o.a)("[data-toggle=iv_".concat(t.name,"]")).text(t.label)})),this.updateFilterSelection()}},{key:"getNodeByAccession",value:function(t){return this.nodes.find((function(e){return e.accession===t}))}},{key:"filterData",value:function(){var t=this,e=this.filters.filter((function(t){return t.selected})),n=[];Object(a.a)(".cell").attr("opacity",(function(r){var i=t.getNodeByAccession(r.source),a=t.getNodeByAccession(r.id),o=function(t,e,n){if(n.length<=0)return!0;var r=Object(c.a)(t.filterTerms,e.filterTerms);return Object(l.a)(r,n.map((function(t){return t.name}))).length===n.length}(i,a,e);return o&&(n.push(i.accession),n.push(a.accession)),o?1:.1})),Object(a.a)(".interaction-viewer text").attr("fill-opacity",(function(t){return n.includes(t.accession)?1:.1}))}},{key:"render",value:(u=regeneratorRuntime.mark((function t(){var e,n,r,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._accession){t.next=2;break}return t.abrupt("return");case 2:return this.style.display="block",this.style.minHeight="6em",Object(o.a)(this).select(".interaction-title").remove(),Object(o.a)(this).select("svg").remove(),Object(o.a)(this).select(".interaction-tooltip").remove(),t.next=9,w(this._accession);case 9:if(!(e=t.sent)){t.next=22;break}n=m(e),r=n.data,i=n.subcellulartreeMenu,a=n.diseases,this.nodes=r,c=void 0,this.dispatchEvent(new CustomEvent("protvista-event",{detail:{loaded:!0,error:c},bubbles:!0})),R(this,G(i,a),this.filters,this.clickFilter,this.resetFilter,this.resetAllFilters),t.t0=this.mode,t.next="ADJACENCY_GRAPH"===t.t0?18:"FORCE_DIRECTED_GRAPH"===t.t0?20:21;break;case 18:return E(this,this._accession,e,G(i,a)),t.abrupt("break",22);case 20:case 21:return t.abrupt("break",22);case 22:case"end":return t.stop()}var c}),t,this)})),f=function(){var t=this,e=arguments;return new Promise((function(n,r){var i=u.apply(t,e);function a(t){P(i,n,r,a,o,"next",t)}function o(t){P(i,n,r,a,o,"throw",t)}a(void 0)}))},function(){return f.apply(this,arguments)})},{key:"accession",set:function(t){this._accession=t},get:function(){return this._accession}}],s=[{key:"observedAttributes",get:function(){return["accession"]}}],i&&L(r.prototype,i),s&&L(r,s),p}(q(HTMLElement)),K=n(111),Q=n(49),V=n(786),W=n.n(V);e.default=function(t){return Object(K.a)("interaction-viewer",Y),i.a.createElement(r.Fragment,null,i.a.createElement(Q.default,{content:W.a}),i.a.createElement("interaction-viewer",{accession:"Q8N1B4"}))}},784:function(t,e,n){var r=n(75),i=n(785);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);t.exports=i.locals||{}},785:function(t,e,n){(e=n(76)(!1)).push([t.i,'@charset "UTF-8";\ninteraction-viewer {\n  position: relative;\n}\n\ninteraction-viewer text {\n  font-family: "Open Sans", sans-serif;\n  fill: black;\n  opacity: 0.75;\n  font-size: 12px;\n}\n\ninteraction-viewer .active text {\n  opacity: 1;\n}\n\ninteraction-viewer .active-row {\n  stroke: #4a90e2;\n}\n\ninteraction-viewer .interaction-tooltip {\n  z-index: 99999;\n  position: absolute;\n  background: #ffffff;\n  padding: 0.5em 1em;\n  border: 1px #979797 solid;\n  box-shadow: 2px 2px 2px #333333;\n  -webkit-transition: all 0.5s;\n  /* Safari */\n  transition: all 0.25s;\n  min-width: 36em;\n}\n\ninteraction-viewer .interaction-tooltip .close-interaction-tooltip {\n  cursor: pointer;\n  float: right;\n  margin-bottom: 0.8em;\n}\n\ninteraction-viewer .interaction-tooltip .tooltip-content {\n  clear: both;\n}\n\ninteraction-viewer .interaction-filter-container {\n  text-align: left;\n}\n\ninteraction-viewer\n  .interaction-filter-container\n  #filter-display\n  .filter-selected {\n  margin: 0.2em 0.5em;\n  padding: 0.3em 0.1em;\n  background-color: #f2f2f2;\n  border: 1px solid #e8e8e8;\n  cursor: pointer;\n  white-space: nowrap;\n  display: inline-block;\n}\n\ninteraction-viewer\n  .interaction-filter-container\n  #filter-display\n  .filter-selected::after {\n  content: "✖";\n  margin: 0 0.3em;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter {\n  vertical-align: top;\n  margin-bottom: 0.5em;\n  display: inline-block;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul {\n  border: #e8e8e8 1px solid;\n  max-height: 15em;\n  overflow-y: auto;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninteraction-viewer .interaction-filter-container .interaction-filter ul li {\n  cursor: pointer;\n  padding: 0.5em 0.5em;\n  border-bottom: #e8e8e8 1px solid;\n}\n\ninteraction-viewer\n  .interaction-filter-container\n  .interaction-filter\n  ul\n  li:hover {\n  background-color: #f2f2f2;\n}\n\ninteraction-viewer\n  .interaction-filter-container\n  .interaction-filter\n  ul\n  li.active {\n  font-weight: bold;\n}\n\ninteraction-viewer .interaction-viewer .cell {\n  fill: #4a90e2;\n}\n\ninteraction-viewer .interaction-viewer .cell.active-cell {\n  r: 0.8em;\n  -webkit-transition: all 0.5s;\n  /* Safari */\n  transition: all 0.5s;\n}\n\ninteraction-viewer .interaction-viewer .hidden-side {\n  fill: #e8e8e8;\n}\n\ninteraction-viewer .interaction-viewer .main-accession {\n  font-weight: bold;\n}\n\ninteraction-viewer .interaction-viewer .text-highlight {\n  fill: #fff;\n  opacity: 0;\n  -webkit-transition: all 0.5s;\n  /* Safari */\n  transition: all 0.5s;\n}\n\ninteraction-viewer .interaction-viewer-table tr:nth-child(even) {\n  background: #f2f2f2;\n}\n\ninteraction-viewer .interaction-viewer-table td,\ninteraction-viewer .interaction-viewer-table th {\n  padding: 0.5em;\n  text-align: center;\n}\n\ninteraction-viewer .interaction-viewer-table th {\n  background-color: #e8e8e8;\n  white-space: nowrap;\n}\n\ninteraction-viewer\n  .interaction-viewer-table\n  .interaction-viewer-table_row-header {\n  font-weight: bold;\n  text-align: right;\n}\n\ninteraction-viewer .button {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 1em 0 0;\n  padding: 0.85em 1em;\n  -webkit-appearance: none;\n  border: 1px solid transparent;\n  border-radius: 0;\n  -webkit-transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  line-height: 1;\n  text-align: center;\n  cursor: pointer;\n  background-color: #f2f2f2 !important;\n  color: #3a343a;\n  border: 1px solid #e8e8e8;\n}\n\ninteraction-viewer .iv_reset {\n  display: block;\n}\n\ninteraction-viewer .button:hover {\n  color: #3a343a;\n}\n\ninteraction-viewer .button.dropdown::after {\n  display: block;\n  width: 0;\n  height: 0;\n  border: inset 0.4em;\n  content: "";\n  border-bottom-width: 0;\n  border-top-style: solid;\n  border-color: #3a343a transparent transparent;\n  position: relative;\n  top: 0.4em;\n  display: inline-block;\n  float: right;\n  margin-left: 1em;\n}\n\ninteraction-viewer .dropdown-pane {\n  position: absolute;\n  z-index: 10;\n  display: block;\n  width: 300px;\n  padding: 1rem;\n  visibility: hidden;\n  border: 1px solid #cacaca;\n  border-radius: 0;\n  background-color: #fefefe;\n}\n\ninteraction-viewer .tree-list {\n  text-align: left;\n  list-style: none;\n}\n\ninteraction-viewer .tree-list li {\n  margin: 0.5em 0;\n}\n',""]),t.exports=e},786:function(t,e){t.exports='<h1 id="interaction-viewer">interaction-viewer</h1>\n<p><a href="https://www.npmjs.com/package/interaction-viewer"><img src="https://img.shields.io/npm/v/interaction-viewer.svg" alt="Published on NPM"></a></p>\n<p>An adjacency graph visualisation of protein interaction data.</p>\n<h2 id="usage">Usage</h2>\n<pre><code class="language-html">&lt;interaction-viewer accession=&quot;O60941&quot;&gt;&lt;/interaction-viewer&gt;</code></pre>\n<h2 id="api">API</h2>\n<ul>\n<li><code>accession</code> changing the accession will cause the component to fetch the data for the given entry</li>\n</ul>\n<h2 id="dependencies">Dependencies</h2>\n<p>This component uses Custom elements V1 (<a href="https://www.webcomponents.org/polyfills/">https://www.webcomponents.org/polyfills/</a>), which requires the use of a polyfill in certain browsers.</p>\n<h1 id="contact">Contact</h1>\n<p>For support contact <a href="mailto:help@uniprot.org">help@uniprot.org</a> and please put interaction viewer in the subject line.</p>\n<h1 id="license">License</h1>\n<p>Distributed under the Apache License 2.0</p>\n'}}]);