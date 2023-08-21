(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),d=n.n(i)()(r());d.push([e.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\ndiv{\n    \n    font-family: 'Courier New', Courier, monospace;\n    font-size: 24px;\n    font-weight: bolder;\n    color: rgb(15, 1, 28);\n    \n    \n}\n\n.container{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n\tposition:fixed;\n  \ttop:0px;\n  \tright:0px;\n  \tbottom:0px;\n  \tleft:0px;\n\t/* display:flex; */\n\tflex-direction: column;\n}\n\n.top{\n    flex:.5;\n    background-color: rgb(78, 202, 244);\n}\n.middle{\n    flex: 5;\n    display: flex;\n    flex-direction: row;\n}\n\n.sidebar{\n    flex: 2;\n    background-color: rgb(78, 127, 232);\n}\n\n.content{\n    flex: 5;\n    \n    background-color: rgb(78, 83, 232);\n}\n\nbutton{\n\tbackground-color: rgb(78, 7, 162); \n\tborder: none;\n\tborder-radius: 10px;\n\tcolor: white;\n\tmargin: 4px;\n\tpadding: 8px 18px;\n    font-family: 'Courier New', Courier, monospace;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tfont-size: 20px;\n\n  }\n\n  button:hover{\n    color: #4b13bb;\n    border: #4b13bb solid 1px;\n    background:#fff;\n    transition:.5s;\n  }\n\n  button:active {\n    margin-left: 1px 1px 0;\n    box-shadow: -1px -1px 1px #000;\n    outline: 1px solid black;\n    background-image: linear-gradient(to top, #f4f5f5, #dfdddd);\n    transition:.5s;\n}\n\n.form{\n\tdisplay: flex;\n    flex-direction: column;\n\tposition: absolute;\n    justify-content: center;\n\talign-self: center;\n    align-items: center;\n\tjustify-self: center;\n    justify-items: center;\n\ttext-align: center;\n    /* width: fit-content;\n   height: fit-content; */\n   width: 200px;\n   height: 300px;\n   top: 25%;\n   left: 25%;\n    /* height: 100px; */\n\tbackground-color: #a2aaed;\n    color: rgb(3, 60, 32);\n    text-align: center;\n\tmargin:100px 100px;\n\tborder: 100px;\n\tborder-radius: 25px;\n\tpadding: 100px;\n\topacity: .9;\n    inset: unset;\n\tfont-family: 'Roboto', sans-serif;\n \t/* cursor: pointer; */\n  \ttransition: 0.25s all ease-in-out;\n      /* top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0; */\n\n}\n\n/* .labels{\n\n} */\n\n/* .fields{\n    align-self: center;\n    justify-self: center;\n\tmargin: 2px;\n\tborder: 2px;\n\tborder-radius: 25px;\n    word-wrap: break-word;\n    word-break: break-all;\n    color: rgb(10, 9, 9);\n    text-align: center;\n    \n} */\n\nlabel,\ntextarea {\n  /* font-size: 0.8rem; */\n  letter-spacing: 1px;\n}\n\ntextarea {\n  display: grid;\n  padding: 10px;\n  max-width: 100%;\n  resize: none;\n  height: 50px;\n  overflow-wrap:normal;\n  grid-area: 1 / 1 / 2 / 2;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}",""]);const a=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(d[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],a=0;a<e.length;a++){var l=e[a],c=o.base?l[0]+o.base:l[0],s=i[c]||0,p="".concat(c," ").concat(s);i[c]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}d.push(p)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=n(i[d]);t[a].references--}for(var l=o(e,r),c=0;c<i.length;c++){var s=n(i[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=[],t=[],o=function(e,t,n,o,r,i){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=r,this.status=i},r=function(e,t){this.title=e,this.description=t,this.todolist=[]};function i(e){console.log(e.todolist)}var d=n(379),a=n.n(d),l=n(795),c=n.n(l),s=n(569),p=n.n(s),u=n(565),m=n.n(u),f=n(216),h=n.n(f),b=n(589),x=n.n(b),g=n(426),v={};function y(e){e.style.display="none"}function E(e){console.log("piss"),e.style.display="block"}function C(e){e&&e.parentNode.removeChild(e)}v.styleTagTransform=x(),v.setAttributes=m(),v.insert=p().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=h(),a()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const A=new o("wash dog","give otto a bath","tomorrow","high priority","not fun","done");(new o).title="spud";const T=new r("dogstuff","stuff dealing with dogs");var L;L=A,T.todolist.push(L),i(T),function(e,t){e.todolist=e.todolist.filter((e=>e!=t))}(T,A),i(T),function(e){console.log(e)}(A),document.getElementById("newprojectbutton").addEventListener("click",(function(){!function(){C(document.getElementById("hideme"));let t=document.createElement("p");t.classList.add("form"),t.id="hideme",document.getElementById("newcont").appendChild(t);let n=document.createElement("LABEL"),o=document.createTextNode("title");n.classList.add("labels"),n.setAttribute("for","title"),n.appendChild(o);let i=document.createElement("TEXTAREA");i.setAttribute("type","text"),i.classList.add("fields"),t.appendChild(n),t.appendChild(i);let d=document.createElement("LABEL"),a=document.createTextNode("description");d.classList.add("labels"),d.setAttribute("for","description"),d.appendChild(a);let l=document.createElement("TEXTAREA");l.setAttribute("type","text"),l.classList.add("fields"),t.appendChild(d),t.appendChild(l);let c=document.createElement("BUTTON"),s=document.createTextNode("submit project");c.appendChild(s),t.appendChild(c),c.addEventListener("click",(()=>{let n=new r(i.value,l.value);e.push(n),console.log(e),t.parentNode.removeChild(t),function(e){let t=document.createElement("BUTTON");document.getElementById("side").appendChild(t);let n=document.createTextNode(e);t.setAttribute("for","project"),t.appendChild(n),t.setAttribute("id","projectitem"+e),document.getElementById("projectitem"+e).addEventListener("click",(function(){var t;t=e,document.querySelectorAll("[id=todo]").forEach(y),document.querySelectorAll(`[data-project=${CSS.escape(t)}]`).forEach(E)}))}(i.value)}))}()})),document.getElementById("newtodobutton").addEventListener("click",(function(){!function(){C(document.getElementById("hideme"));let n=document.createElement("p");n.classList.add("form"),n.id="hideme",document.getElementById("newcont").appendChild(n);let r=document.createElement("LABEL"),i=document.createTextNode("title");r.classList.add("labels"),r.setAttribute("for","title"),r.appendChild(i);let d=document.createElement("TEXTAREA");d.setAttribute("type","text"),d.classList.add("fields"),n.appendChild(r),n.appendChild(d);let a=document.createElement("LABEL"),l=document.createTextNode("description");a.classList.add("labels"),a.setAttribute("for","description"),a.appendChild(l);let c=document.createElement("TEXTAREA");c.setAttribute("type","text"),c.classList.add("fields"),n.appendChild(a),n.appendChild(c);let s=document.createElement("LABEL"),p=document.createTextNode("duedate");s.classList.add("labels"),s.setAttribute("for","duedate"),s.appendChild(p);let u=document.createElement("TEXTAREA");u.setAttribute("type","text"),u.classList.add("fields"),n.appendChild(s),n.appendChild(u);let m=document.createElement("LABEL"),f=document.createTextNode("priority");m.classList.add("labels"),m.setAttribute("for","priority"),m.appendChild(f);let h=document.createElement("TEXTAREA");h.setAttribute("type","text"),h.classList.add("fields"),n.appendChild(m),n.appendChild(h);let b=document.createElement("LABEL"),x=document.createTextNode("notes");b.classList.add("labels"),b.setAttribute("for","notes"),b.appendChild(x);let g=document.createElement("TEXTAREA");g.setAttribute("type","text"),g.classList.add("fields"),n.appendChild(b),n.appendChild(g);let v=document.createElement("LABEL"),y=document.createTextNode("status");v.classList.add("labels"),v.setAttribute("for","status"),v.appendChild(y);let E=document.createElement("TEXTAREA");E.setAttribute("type","text"),E.classList.add("fields"),n.appendChild(v),n.appendChild(E);let A=document.createElement("LABEL"),T=document.createTextNode("project");A.classList.add("labels"),A.setAttribute("for","status"),A.appendChild(T),n.appendChild(A);let L=document.createElement("SELECT");L.setAttribute("id","projectselection");let w=document.createTextNode("PROJECT");L.appendChild(w),n.appendChild(L);for(const t of e){let e=document.createElement("option"),n=document.createTextNode(t.title);e.appendChild(n),L.appendChild(e)}let N=document.createElement("BUTTON"),k=document.createTextNode("submit todo");N.appendChild(k),n.appendChild(N),N.addEventListener("click",(()=>{let r=document.querySelector("#projectselection"),i=new o(d.value,c.value,u.value,h.value,g.value,E.value,r.value);t.push(i);for(const t of e)r==t.title&&t.todolist.push(i);console.log(t),n.parentNode.removeChild(n),function(e,t,n,o){let r=document.createElement("BUTTON");document.getElementById("cont").appendChild(r);let i=document.createTextNode(e+" "+t+" "+n);r.setAttribute("for","todo"),r.appendChild(i),r.setAttribute("id","todo"),r.setAttribute("data-project",o)}(d.value,u.value,E.value,r.value)}))}()}))})()})();