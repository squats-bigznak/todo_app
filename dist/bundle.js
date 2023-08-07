(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\ndiv{\n    \n    font-family: 'Courier New', Courier, monospace;\n    font-size: 24px;\n    font-weight: bolder;\n    color: rgb(15, 1, 28);\n    \n    \n}\n\n.container{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n\tposition:fixed;\n  \ttop:0px;\n  \tright:0px;\n  \tbottom:0px;\n  \tleft:0px;\n\t/* display:flex; */\n\tflex-direction: column;\n}\n\n.top{\n    flex:.5;\n    background-color: rgb(78, 202, 244);\n}\n.middle{\n    flex: 5;\n    display: flex;\n    flex-direction: row;\n}\n\n.sidebar{\n    flex: 2;\n    background-color: rgb(78, 127, 232);\n}\n\n.content{\n    flex: 5;\n    \n    background-color: rgb(78, 83, 232);\n}\n\nbutton{\n\tbackground-color: rgb(78, 7, 162); \n\tborder: none;\n\tborder-radius: 10px;\n\tcolor: white;\n\tmargin: 4px;\n\tpadding: 8px 18px;\n    font-family: 'Courier New', Courier, monospace;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tfont-size: 20px;\n\n  }\n\n  button:hover{\n    color: #4b13bb;\n    border: #4b13bb solid 1px;\n    background:#fff;\n    transition:.5s;\n  }\n\n  button:active {\n    margin-left: 1px 1px 0;\n    box-shadow: -1px -1px 1px #000;\n    outline: 1px solid black;\n    background-image: linear-gradient(to top, #f4f5f5, #dfdddd);\n    transition:.5s;\n}\n\n.form{\n\tdisplay: flex;\n    flex-direction: column;\n\tposition: absolute;\n    justify-content: center;\n\talign-self: center;\n    align-items: center;\n\tjustify-self: center;\n    justify-items: center;\n\ttext-align: center;\n    /* width: fit-content;\n   height: fit-content; */\n   width: 200px;\n   height: 200px;\n   top: 25%;\n   left: 25%;\n    /* height: 100px; */\n\tbackground-color: #a2aaed;\n    color: rgb(3, 60, 32);\n    text-align: center;\n\tmargin:100px 100px;\n\tborder: 100px;\n\tborder-radius: 25px;\n\tpadding: 100px;\n\topacity: .9;\n    inset: unset;\n\tfont-family: 'Roboto', sans-serif;\n \t/* cursor: pointer; */\n  \ttransition: 0.25s all ease-in-out;\n      /* top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0; */\n\n}\n\n/* .labels{\n\n} */\n\n/* .fields{\n    align-self: center;\n    justify-self: center;\n\tmargin: 2px;\n\tborder: 2px;\n\tborder-radius: 25px;\n    word-wrap: break-word;\n    word-break: break-all;\n    color: rgb(10, 9, 9);\n    text-align: center;\n    \n} */\n\nlabel,\ntextarea {\n  /* font-size: 0.8rem; */\n  letter-spacing: 1px;\n}\n\ntextarea {\n  display: grid;\n  padding: 10px;\n  max-width: 100%;\n  resize: none;\n  height: 50px;\n  overflow-wrap:normal;\n  grid-area: 1 / 1 / 2 / 2;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}",""]);const d=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],d=0;d<e.length;d++){var l=e[d],s=o.base?l[0]+o.base:l[0],c=i[s]||0,p="".concat(s," ").concat(c);i[s]=c+1;var u=n(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=r(f,o);o.byIndex=d,t.splice(d,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var l=o(e,r),s=0;s<i.length;s++){var c=n(i[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=[],t=[],o=function(e,t,n,o,r,i){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=r,this.status=i},r=function(e,t){this.title=e,this.description=t,this.todolist=[]};function i(e){console.log(e.todolist)}var a=n(379),d=n.n(a),l=n(795),s=n.n(l),c=n(569),p=n.n(c),u=n(565),f=n.n(u),m=n(216),h=n.n(m),b=n(589),x=n.n(b),g=n(426),v={};v.styleTagTransform=x(),v.setAttributes=f(),v.insert=p().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=h(),d()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const y=new o("wash dog","give otto a bath","tomorrow","high priority","not fun","done");(new o).title="spud";const E=new r("dogstuff","stuff dealing with dogs");var A;A=y,E.todolist.push(A),i(E),function(e,t){e.todolist=e.todolist.filter((e=>e!=t))}(E,y),i(E),function(e){console.log(e)}(y),document.getElementById("newprojectbutton").addEventListener("click",(function(){!function(){let t=document.createElement("p");t.classList.add("form"),t.id="hideme",document.getElementById("newcont").appendChild(t);let n=document.createElement("LABEL"),o=document.createTextNode("title");n.classList.add("labels"),n.setAttribute("for","title"),n.appendChild(o);let i=document.createElement("TEXTAREA");i.setAttribute("type","text"),i.classList.add("fields"),t.appendChild(n),t.appendChild(i);let a=document.createElement("LABEL"),d=document.createTextNode("description");a.classList.add("labels"),a.setAttribute("for","description"),a.appendChild(d);let l=document.createElement("TEXTAREA");l.setAttribute("type","text"),l.classList.add("fields"),t.appendChild(a),t.appendChild(l);let s=document.createElement("BUTTON"),c=document.createTextNode("submit");s.appendChild(c),t.appendChild(s),s.addEventListener("click",(()=>{let n=new r(i.value,l.value);e.push(n),console.log(e),t.parentNode.removeChild(t)}))}()})),document.getElementById("newtodobutton").addEventListener("click",(function(){!function(){let e=document.createElement("p");e.classList.add("form"),e.id="hideme",document.getElementById("newcont").appendChild(e);let n=document.createElement("LABEL"),r=document.createTextNode("title");n.classList.add("labels"),n.setAttribute("for","title"),n.appendChild(r);let i=document.createElement("TEXTAREA");i.setAttribute("type","text"),i.classList.add("fields"),e.appendChild(n),e.appendChild(i);let a=document.createElement("LABEL"),d=document.createTextNode("description");a.classList.add("labels"),a.setAttribute("for","description"),a.appendChild(d);let l=document.createElement("TEXTAREA");l.setAttribute("type","text"),l.classList.add("fields"),e.appendChild(a),e.appendChild(l);let s=document.createElement("LABEL"),c=document.createTextNode("duedate");s.classList.add("labels"),s.setAttribute("for","duedate"),s.appendChild(c);let p=document.createElement("TEXTAREA");p.setAttribute("type","text"),p.classList.add("fields"),e.appendChild(s),e.appendChild(p);let u=document.createElement("LABEL"),f=document.createTextNode("priority");u.classList.add("labels"),u.setAttribute("for","priority"),u.appendChild(f);let m=document.createElement("TEXTAREA");m.setAttribute("type","text"),m.classList.add("fields"),e.appendChild(u),e.appendChild(m);let h=document.createElement("LABEL"),b=document.createTextNode("notes");h.classList.add("labels"),h.setAttribute("for","notes"),h.appendChild(b);let x=document.createElement("TEXTAREA");x.setAttribute("type","text"),x.classList.add("fields"),e.appendChild(h),e.appendChild(x);let g=document.createElement("LABEL"),v=document.createTextNode("status");g.classList.add("labels"),g.setAttribute("for","status"),g.appendChild(v);let y=document.createElement("TEXTAREA");y.setAttribute("type","text"),y.classList.add("fields"),e.appendChild(g),e.appendChild(y);let E=document.createElement("BUTTON"),A=document.createTextNode("submit");E.appendChild(A),e.appendChild(E),E.addEventListener("click",(()=>{let n=new o(i.value,l.value,p.value,m.value,x.value,y.value);t.push(n),console.log(t),e.parentNode.removeChild(e)}))}()}))})()})();