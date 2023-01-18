(()=>{"use strict";var n={163:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},767:n=>{n.exports=function(n){return n[1]}},174:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(767),r=e.n(o),i=e(163),a=e.n(i)()(r());a.push([n.id,":root {\n  font-family: 'Roboto', sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style: none;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  background-color: #f6f6f6;\n  padding: 16px;\n}\n\nbutton {\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n}\n\nform {\n  width: min(100%, 640px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);\n  margin: auto;\n  background-color: #fff;\n}\n\ninput {\n  font-size: inherit;\n  padding: 0;\n  border: none;\n  color: #333;\n}\n\ninput:focus,\ninput:active {\n  outline: none;\n}\n\n.todo-list {\n  width: 100%;\n  height: 100%;\n}\n\n.todo-header {\n  font-weight: normal;\n  color: #333;\n}\n\n.todo-input-add::placeholder {\n  font-style: italic;\n}\n\n.todo-item-group {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  place-items: center;\n  padding: 0 16px;\n  gap: 10px;\n  border-bottom: 1px solid #ccc;\n}\n\n.todo-clear-button-container {\n  background-color: #f6f6f6;\n  display: grid;\n  place-items: center;\n}\n\n.todo-clear-button-container button {\n  color: #c3c3c3;\n  font-size: 16px;\n}\n\n.todo-header,\n.todo-item-group,\n.todo-input-add,\n.todo-clear-button-container {\n  width: 100%;\n  height: 50px;\n  border-bottom: 1px solid #ccc;\n  padding: 16px;\n}\n\n.todo-checkbox {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n\n.todo-input {\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n}\n\n.todo-checkbox:checked + .todo-input {\n  text-decoration: line-through;\n  color: gray;\n}\n\n.todo-item-group:focus-within {\n  background-color: #fafac7;\n}\n\n.todo-remove-button {\n  width: 20px;\n  height: 20px;\n  font-size: 12px;\n}\n",""]);const c=a},62:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],u=i[d]||0,p="".concat(d," ").concat(u);i[d]=u+1;var l=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var h=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var u=e(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},793:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},173:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},892:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},36:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},464:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(62),t=e.n(n),o=e(36),r=e.n(o),i=e(793),a=e.n(i),c=e(892),s=e.n(c),d=e(173),u=e.n(d),p=e(464),l=e.n(p),f=e(174),h={};h.styleTagTransform=l(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=document.querySelector(".todo-list"),v=[{index:0,description:"wash the dishes",completed:!0},{index:1,description:"do the laundry",completed:!1}].map((function(n){var t=n.index,e=n.description,o=n.completed;return'\n    <li class="todo-item-group">\n      <input \n        type="checkbox" \n        class="todo-checkbox" \n        id="todo-'.concat(t,'" \n        ').concat(o?"checked":"",'> \n      <input\n        type="text"\n        class="todo-input"\n        value="').concat(e,'"\n      >\n      <button type="submit" class="todo-remove-button" value="remove-').concat(t,'">\n        <i class="fa-solid fa-ellipsis-vertical"></i>\n      </button>\n    </ul>\n  ')})).join("");m.innerHTML=v})()})();