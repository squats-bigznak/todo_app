(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),d=n.n(o),r=n(645),i=n.n(r)()(d());i.push([e.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\ndiv{\n    \n    font-family: 'Courier New', Courier, monospace;\n    font-size: 24px;\n    font-weight: bolder;\n    color: rgb(15, 1, 28);\n    \n    \n}\n\n.container{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n\tposition:fixed;\n  \ttop:0px;\n  \tright:0px;\n  \tbottom:0px;\n  \tleft:0px;\n\t/* display:flex; */\n\tflex-direction: column;\n}\n\n.top{\n    flex:.5;\n    background-color: rgb(78, 202, 244);\n}\n.middle{\n    flex: 5;\n    display: flex;\n    flex-direction: row;\n}\n\n.sidebar{\n    flex: 2;\n    background-color: rgb(78, 127, 232);\n}\n\n.content{\n    flex: 5;\n    \n    background-color: rgb(78, 83, 232);\n}\n\n.detail{\n    flex: 5;\n    \n    background-color: rgb(78, 33, 232);\n}\n\nbutton{\n\tbackground-color: rgb(78, 7, 162); \n\tborder: none;\n\tborder-radius: 10px;\n\tcolor: white;\n\tmargin: 4px;\n\tpadding: 8px 18px;\n    font-family: 'Courier New', Courier, monospace;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: block;\n\tfont-size: 20px;\n    /* height: 3ch; */\n    /* white-space: nowrap; */\n    /* white-space: pre; */\n  }\n\n  button:hover{\n    color: #4b13bb;\n    border: #4b13bb solid 1px;\n    background:#fff;\n    transition:.5s;\n    \n  }\n\n  #todo:hover{\n    transition:.5s;\n    padding: 10px 48px; \n  }\n\n  .project:hover{\n    transition:.5s;\n    padding: 10px 48px; \n  }\n\n  button:active {\n    margin-left: 1px 1px 0;\n    box-shadow: -1px -1px 1px #000;\n    outline: 1px solid black;\n    background-image: linear-gradient(to top, #f4f5f5, #dfdddd);\n    transition:.5s;\n}\n\n.form{\n\tdisplay: flex;\n    flex-direction: column;\n\tposition: absolute;\n    justify-content: center;\n\talign-self: center;\n    align-items: center;\n\tjustify-self: center;\n    justify-items: center;\n\ttext-align: center;\n    /* width: fit-content;\n   height: fit-content; */\n   width: 200px;\n   height: 300px;\n   top: 25%;\n   left: 25%;\n    /* height: 100px; */\n\tbackground-color: #a2aaed;\n    color: rgb(3, 60, 32);\n    text-align: center;\n\tmargin:100px 100px;\n\tborder: 100px;\n\tborder-radius: 25px;\n\tpadding: 100px;\n\topacity: .9;\n    inset: unset;\n\tfont-family: 'Roboto', sans-serif;\n \t/* cursor: pointer; */\n  \ttransition: 0.25s all ease-in-out;\n      /* top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0; */\n\n}\n\n/* .labels{\n\n} */\n\n/* .fields{\n    align-self: center;\n    justify-self: center;\n\tmargin: 2px;\n\tborder: 2px;\n\tborder-radius: 25px;\n    word-wrap: break-word;\n    word-break: break-all;\n    color: rgb(10, 9, 9);\n    text-align: center;\n    \n} */\n\nlabel,\ntextarea {\n  /* font-size: 0.8rem; */\n  letter-spacing: 1px;\n}\n\ntextarea {\n  display: grid;\n  padding: 10px;\n  max-width: 100%;\n  resize: none;\n  height: 50px;\n  overflow-wrap:normal;\n  grid-area: 1 / 1 / 2 / 2;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  box-shadow: 1px 1px 1px #999;\n}\n\ncancel{\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    background-color: rgb(78, 7, 162); \n\tborder: none;\n\tborder-radius: 20px;\n\tcolor: white;\n\tmargin: 4px;\n\tpadding: 8px 18px;\n    font-family: 'Courier New', Courier, monospace;\n\t/* text-align: center; */\n\ttext-decoration: none;\n\tdisplay: block;\n\tfont-size: 20px;\n\n}",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,d,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&i[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),d&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=d):s[4]="".concat(d)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],a=0;a<e.length;a++){var l=e[a],c=o.base?l[0]+o.base:l[0],s=r[c]||0,p="".concat(c," ").concat(s);r[c]=s+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=d(m,o);o.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function d(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,d){var r=o(e=e||[],d=d||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var a=n(r[i]);t[a].references--}for(var l=o(e,d),c=0;c<r.length;c++){var s=n(r[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var d=void 0!==n.layer;d&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,d&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=[],t=[],o=function(e,t,n,o,d,r){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.notes=d,this.status=r},d=function(e,t){this.title=e,this.description=t,this.todolist=[]};function r(e){console.log(e.todolist)}var i=n(379),a=n.n(i),l=n(795),c=n.n(l),s=n(569),p=n.n(s),u=n(565),m=n.n(u),f=n(216),h=n.n(f),b=n(589),x=n.n(b),g=n(426),v={};function y(e){e.style.display="none"}function E(e){e.style.display="block"}function C(e){e&&e.parentNode.removeChild(e)}v.styleTagTransform=x(),v.setAttributes=m(),v.insert=p().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=h(),a()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const A=new o("wash dog","give otto a bath","tomorrow","high priority","not fun","done");(new o).title="spud";const T=new d("dogstuff","stuff dealing with dogs");var L;L=A,T.todolist.push(L),r(T),function(e,t){e.todolist=e.todolist.filter((e=>e!=t))}(T,A),r(T),function(e){console.log(e)}(A),document.getElementById("newprojectbutton").addEventListener("click",(function(){!function(){C(document.getElementById("hideme"));let t=document.createElement("p");t.classList.add("form"),t.id="hideme",document.getElementById("newcont").appendChild(t);let n=document.createElement("cancel"),o=document.createTextNode("x");n.classList.add("cancel"),n.setAttribute("for","cancel"),n.appendChild(o),t.appendChild(n),n.addEventListener("click",(()=>{t.parentNode.removeChild(t)}));let r=document.createElement("LABEL"),i=document.createTextNode("title");r.classList.add("labels"),r.setAttribute("for","title"),r.appendChild(i);let a=document.createElement("TEXTAREA");a.setAttribute("type","text"),a.classList.add("fields"),t.appendChild(r),t.appendChild(a);let l=document.createElement("LABEL"),c=document.createTextNode("description");l.classList.add("labels"),l.setAttribute("for","description"),l.appendChild(c);let s=document.createElement("TEXTAREA");s.setAttribute("type","text"),s.classList.add("fields"),t.appendChild(l),t.appendChild(s);let p=document.createElement("BUTTON"),u=document.createTextNode("submit project");p.appendChild(u),t.appendChild(p),p.addEventListener("click",(()=>{let n=new d(a.value,s.value);e.push(n),console.log(e),t.parentNode.removeChild(t),function(e,t){let n=document.createElement("BUTTON");document.getElementById("side").appendChild(n);let o=document.createTextNode(e+" 0 items");n.setAttribute("for","project"),n.appendChild(o),n.classList.add("project"),n.setAttribute("width",e.length+"ch"),n.setAttribute("overflow","hidden"),n.setAttribute("id","projectitem"+e),document.getElementById("projectitem"+e).addEventListener("click",(function(){var t;t=e,document.querySelectorAll("[data-todo=todo]").forEach(y),document.querySelectorAll("[id=tododetail]").forEach(y),document.querySelectorAll(`[data-project=${CSS.escape(t)}]`).forEach(E)}))}(a.value,s.value)}))}()})),document.getElementById("newtodobutton").addEventListener("click",(function(){!function(){C(document.getElementById("hideme"));let n=document.createElement("p");n.classList.add("form"),n.id="hideme",document.getElementById("newcont").appendChild(n);let d=document.createElement("cancel"),r=document.createTextNode("x");d.classList.add("cancel"),d.setAttribute("for","cancel"),d.appendChild(r),n.appendChild(d),d.addEventListener("click",(()=>{n.parentNode.removeChild(n)}));let i=document.createElement("LABEL"),a=document.createTextNode("title");i.classList.add("labels"),i.setAttribute("for","title"),i.appendChild(a);let l=document.createElement("TEXTAREA");l.setAttribute("type","text"),l.classList.add("fields"),n.appendChild(i),n.appendChild(l);let c=document.createElement("LABEL"),s=document.createTextNode("description");c.classList.add("labels"),c.setAttribute("for","description"),c.appendChild(s);let p=document.createElement("TEXTAREA");p.setAttribute("type","text"),p.classList.add("fields"),n.appendChild(c),n.appendChild(p);let u=document.createElement("LABEL"),m=document.createTextNode("duedate");u.classList.add("labels"),u.setAttribute("for","duedate"),u.appendChild(m);let f=document.createElement("TEXTAREA");f.setAttribute("type","text"),f.classList.add("fields"),n.appendChild(u),n.appendChild(f);let h=document.createElement("LABEL"),b=document.createTextNode("priority");h.classList.add("labels"),h.setAttribute("for","priority"),h.appendChild(b),n.appendChild(h);let x=document.createElement("SELECT");x.setAttribute("id","priorityselection");let g=document.createTextNode("PRIORITY");x.appendChild(g),n.appendChild(x);const v=["low priority","Med Priority","HIGH PRIORITY"];for(const e of v){let t=document.createElement("option"),n=document.createTextNode(e);t.appendChild(n),x.appendChild(t)}let E=document.createElement("LABEL"),A=document.createTextNode("notes");E.classList.add("labels"),E.setAttribute("for","notes"),E.appendChild(A);let T=document.createElement("TEXTAREA");T.setAttribute("type","text"),T.classList.add("fields"),n.appendChild(E),n.appendChild(T);let L=document.createElement("LABEL"),w=document.createTextNode("status");L.classList.add("labels"),L.setAttribute("for","status"),L.appendChild(w);let N=document.createElement("TEXTAREA");N.setAttribute("type","text"),N.classList.add("fields"),n.appendChild(L),n.appendChild(N);let k=document.createElement("LABEL"),B=document.createTextNode("project");k.classList.add("labels"),k.setAttribute("for","status"),k.appendChild(B),n.appendChild(k);let I=document.createElement("SELECT");I.setAttribute("id","projectselection");let j=document.createTextNode("PROJECT");I.appendChild(j),n.appendChild(I);for(const t of e){let e=document.createElement("option"),n=document.createTextNode(t.title);e.appendChild(n),I.appendChild(e)}let S=document.createElement("BUTTON"),R=document.createTextNode("submit todo");S.appendChild(R),n.appendChild(S),S.addEventListener("click",(()=>{let d,r=document.querySelector("#projectselection"),i=document.querySelector("#priorityselection"),a=new o(l.value,p.value,f.value,i.value,T.value,N.value,r.value);t.push(a);for(const t of e)r.value==t.title&&(t.todolist.push(a),d=t.todolist.length);console.log(t),n.parentNode.removeChild(n),function(e,n,o,d){let r=document.createElement("BUTTON");document.getElementById("cont").appendChild(r);let i=document.createTextNode(e+" "+n+" "+o);r.setAttribute("for","todo"),r.appendChild(i),r.setAttribute("data-todo","todo"),r.setAttribute("data-project",d),r.setAttribute("id","todoitem"+e),document.getElementById("todoitem"+e).addEventListener("click",(function(){!function(e){document.querySelectorAll("[id=tododetail]").forEach(y);let n=document.getElementById("det"),o=document.createElement("DIV");n.appendChild(o),o.setAttribute("style","white-space: pre;");let d=[];for(const n of t)n.title==e&&(d=n);let r=document.createTextNode(d.title+"\r\n");o.appendChild(r);let i=document.createTextNode(d.description+"\r\n");o.appendChild(i);let a=document.createTextNode(d.dueDate+"\r\n");o.appendChild(a);let l=document.createTextNode(d.priority+"\r\n");o.appendChild(l);let c=document.createTextNode(d.notes+"\r\n");o.appendChild(c);let s=document.createTextNode(d.status+"\r\n");o.appendChild(s),o.setAttribute("id","tododetail")}(e)}))}(l.value,f.value,N.value,r.value),document.getElementById("projectitem"+r.value).textContent=r.value+" "+d+" items"}))}()}))})()})();