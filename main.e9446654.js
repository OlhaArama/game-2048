parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var r=document.querySelector(".button"),e=document.querySelector(".game-field"),n=document.querySelector(".game-score"),s=document.querySelectorAll(".field-cell"),l=document.querySelector(".message-lose"),o=document.querySelector(".message-win"),c=document.querySelector(".message-start"),t=function(){return Math.floor(4*Math.random())},i=0;function a(){var r=e.rows[t()].cells[t()];"0"===r.innerHTML?r.innerHTML=Math.random()<.1?"4":"2":a()}function f(){s.forEach(function(r){0==+r.innerHTML?r.style.color="#d6cdc4":r.style.color=""})}function u(){for(var r=0;r<4;r++){for(var n=[],s=0;s<4;s++){var l=+e.rows[r].cells[s].innerHTML;n.push(l)}for(var o=n.filter(function(r){return r}),c=4-o.length,t=Array(c).fill(0),i=o.concat(t),a=0;a<4;a++)e.rows[r].cells[a].innerHTML=i[a]}}function L(){for(var r=0;r<4;r++){for(var n=[],s=0;s<4;s++){var l=+e.rows[r].cells[s].innerHTML;n.push(l)}for(var o=n.filter(function(r){return r}),c=4-o.length,t=Array(c).fill(0).concat(o),i=0;i<4;i++)e.rows[r].cells[i].innerHTML=t[i]}}function d(){for(var r=0;r<4;r++){for(var n=[],s=0;s<4;s++){var l=+e.rows[s].cells[r].innerHTML;n.push(l)}for(var o=n.filter(function(r){return r}),c=4-o.length,t=Array(c).fill(0),i=o.concat(t),a=0;a<4;a++)e.rows[a].cells[r].innerHTML=i[a]}}function w(){for(var r=0;r<4;r++){for(var n=[],s=0;s<4;s++){var l=+e.rows[s].cells[r].innerHTML;n.push(l)}for(var o=n.filter(function(r){return r}),c=4-o.length,t=Array(c).fill(0).concat(o),i=0;i<4;i++)e.rows[i].cells[r].innerHTML=t[i]}}function M(){for(var r=0;r<4;r++)for(var s=0;s<3;s++)if(+e.rows[r].cells[s].innerHTML==+e.rows[r].cells[s+1].innerHTML){var l=2*+e.rows[r].cells[s].innerHTML;e.rows[r].cells[s].innerHTML=l,e.rows[r].cells[s+1].innerHTML=0,i+=l,n.innerHTML=i}H()}function v(){for(var r=0;r<4;r++)for(var s=0;s<3;s++)if(+e.rows[s].cells[r].innerHTML==+e.rows[s+1].cells[r].innerHTML){var l=2*+e.rows[s].cells[r].innerHTML;e.rows[s].cells[r].innerHTML=l,e.rows[s+1].cells[r].innerHTML=0,i+=l,n.innerHTML=i}H()}function H(){for(var r=0;r<4;r++)for(var n=0;n<4;n++)2048==+e.rows[r].cells[n].innerHTML&&o.classList.toggle("hidden")}function T(){for(var r=!1,n=0;n<4;n++)for(var s=0;s<3;s++){if(+e.rows[s].cells[n].innerHTML==+e.rows[s+1].cells[n].innerHTML||+e.rows[n].cells[s].innerHTML==+e.rows[n].cells[s+1].innerHTML||0==+e.rows[n].cells[s].innerHTML)return;r=!0}r&&l.classList.toggle("hidden")}function h(){for(var r=0;r<4;r++)for(var n=0;n<4;n++)"0"===e.rows[r].cells[n].innerHTML?e.rows[r].cells[n].className="field-cell":e.rows[r].cells[n].className="\n          field-cell field-cell--".concat(e.rows[r].cells[n].innerHTML,"\n        ")}r.addEventListener("click",function(){s.forEach(function(r){r.innerHTML=0}),i=0,n.innerHTML=0,a(),a(),c.classList.add("hidden"),o.classList.add("hidden"),l.classList.add("hidden"),r.classList.remove("start"),r.classList.add("restart"),r.textContent="Restart",h(),f()}),document.addEventListener("keydown",function(e){if(o.classList.contains("hidden")&&!r.classList.contains("start"))switch(e.key){case"ArrowLeft":u(),M(),u(),a(),h(),f(),T();break;case"ArrowRight":L(),M(),L(),a(),h(),f(),T();break;case"ArrowUp":d(),v(),d(),a(),h(),f(),T();break;case"ArrowDown":w(),v(),w(),a(),h(),f(),T()}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e9446654.js.map