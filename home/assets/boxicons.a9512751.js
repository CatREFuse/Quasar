var z={exports:{}};(function(T,P){(function(X,d,c,r,t){if("customElements"in c)t();else{if(c.AWAITING_WEB_COMPONENTS_POLYFILL)return void c.AWAITING_WEB_COMPONENTS_POLYFILL.then(t);var e=c.AWAITING_WEB_COMPONENTS_POLYFILL=p();e.then(t);var f=c.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",h=c.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in c?g(f).then(function(){e.isDone=!0,e.exec()}):g(h).then(function(){g(f).then(function(){e.isDone=!0,e.exec()})})}function p(){var s=[];return s.isDone=!1,s.exec=function(){s.splice(0).forEach(function(m){m()})},s.then=function(m){return s.isDone?m():s.push(m),s},s}function g(s){var m=p(),b=r.createElement("script");return b.type="text/javascript",b.readyState?b.onreadystatechange=function(){b.readyState!="loaded"&&b.readyState!="complete"||(b.onreadystatechange=null,m.isDone=!0,m.exec())}:b.onload=function(){m.isDone=!0,m.exec()},b.src=s,r.getElementsByTagName("head")[0].appendChild(b),b.then=m.then,b}})(0,0,window,document,function(){var X;X=function(){return function(d){var c={};function r(t){if(c[t])return c[t].exports;var e=c[t]={i:t,l:!1,exports:{}};return d[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=d,r.c=c,r.d=function(t,e,f){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:f})},r.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e||4&e&&typeof t=="object"&&t&&t.__esModule)return t;var f=Object.create(null);if(r.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:t}),2&e&&typeof t!="string")for(var h in t)r.d(f,h,function(p){return t[p]}.bind(null,h));return f},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(d,c){d.exports=function(r){var t=[];return t.toString=function(){return this.map(function(e){var f=function(h,p){var g,s=h[1]||"",m=h[3];if(!m)return s;if(p&&typeof btoa=="function"){var b=(g=m,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(g))))+" */"),_=m.sources.map(function(O){return"/*# sourceURL="+m.sourceRoot+O+" */"});return[s].concat(_).concat([b]).join(`
`)}return[s].join(`
`)}(e,r);return e[2]?"@media "+e[2]+"{"+f+"}":f}).join("")},t.i=function(e,f){typeof e=="string"&&(e=[[null,e,""]]);for(var h={},p=0;p<this.length;p++){var g=this[p][0];typeof g=="number"&&(h[g]=!0)}for(p=0;p<e.length;p++){var s=e[p];typeof s[0]=="number"&&h[s[0]]||(f&&!s[2]?s[2]=f:f&&(s[2]="("+s[2]+") and ("+f+")"),t.push(s))}},t}},function(d,c,r){var t=r(3);d.exports=typeof t=="string"?t:t.toString()},function(d,c,r){var t=r(4);d.exports=typeof t=="string"?t:t.toString()},function(d,c,r){(d.exports=r(0)(!1)).push([d.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(d,c,r){(d.exports=r(0)(!1)).push([d.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(d,c,r){r.r(c),r.d(c,"BoxIconElement",function(){return I});var t,e,f,h,p=r(1),g=r.n(p),s=r(2),m=r.n(s),b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},_=function(){function l(u,o){for(var a=0;a<o.length;a++){var n=o[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(u,n.key,n)}}return function(u,o,a){return o&&l(u.prototype,o),a&&l(u,a),u}}(),O=(e=(t=Object).getPrototypeOf||function(l){return l.__proto__},f=t.setPrototypeOf||function(l,u){return l.__proto__=u,l},h=(typeof Reflect=="undefined"?"undefined":b(Reflect))==="object"?Reflect.construct:function(l,u,o){var a,n=[null];return n.push.apply(n,u),a=l.bind.apply(l,n),f(new a,o.prototype)},function(l){var u=e(l);return f(l,f(function(){return h(u,arguments,e(this).constructor)},u))}),S=window,L={},j=document.createElement("template"),E=function(){return!!S.ShadyCSS};j.innerHTML=`
<style>
:host {
  display: inline-block;
  font-size: initial;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
}
:host([size=xs]) {
    width: 0.8rem;
    height: 0.8rem;
}
:host([size=sm]) {
    width: 1.55rem;
    height: 1.55rem;
}
:host([size=md]) {
    width: 2.25rem;
    height: 2.25rem;
}
:host([size=lg]) {
    width: 3.0rem;
    height: 3.0rem;
}

:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {
    width: auto;
    height: auto;
}
:host([pull=left]) #icon {
    float: left;
    margin-right: .3em!important;
}
:host([pull=right]) #icon {
    float: right;
    margin-left: .3em!important;
}
:host([border=square]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: .25em;
}
:host([border=circle]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: 50%;
}
#icon,
svg {
  width: 100%;
  height: 100%;
}
#icon {
    box-sizing: border-box;
} 
`+g.a+`
`+m.a+`
</style>
<div id="icon"></div>`;var I=O(function(l){function u(){(function(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")})(this,u);var o=function(a,n){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||typeof n!="object"&&typeof n!="function"?a:n}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return o.$ui=o.attachShadow({mode:"open"}),o.$ui.appendChild(o.ownerDocument.importNode(j.content,!0)),E()&&S.ShadyCSS.styleElement(o),o._state={$iconHolder:o.$ui.getElementById("icon"),type:o.getAttribute("type")},o}return function(o,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);o.prototype=Object.create(a&&a.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(o,a):o.__proto__=a)}(u,HTMLElement),_(u,null,[{key:"getIconSvg",value:function(o,a){var n=this.cdnUrl+"/regular/bx-"+o+".svg";return a==="solid"?n=this.cdnUrl+"/solid/bxs-"+o+".svg":a==="logo"&&(n=this.cdnUrl+"/logos/bxl-"+o+".svg"),n&&L[n]||(L[n]=new Promise(function(x,w){var k=new XMLHttpRequest;k.addEventListener("load",function(){this.status<200||this.status>=300?w(new Error(this.status+" "+this.responseText)):x(this.responseText)}),k.onerror=w,k.onabort=w,k.open("GET",n),k.send()})),L[n]}},{key:"define",value:function(o){o=o||this.tagName,E()&&S.ShadyCSS.prepareTemplate(j,o),customElements.define(o,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.1/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),_(u,[{key:"attributeChangedCallback",value:function(o,a,n){var x=this._state.$iconHolder;switch(o){case"type":(function(w,k,y){var i=w._state;i.$iconHolder.textContent="",i.type&&(i.type=null),i.type=!y||y!=="solid"&&y!=="logo"?"regular":y,i.currentName!==void 0&&w.constructor.getIconSvg(i.currentName,i.type).then(function(v){i.type===y&&(i.$iconHolder.innerHTML=v)}).catch(function(v){console.error("Failed to load icon: "+i.currentName+`
`+v)})})(this,0,n);break;case"name":(function(w,k,y){var i=w._state;i.currentName=y,i.$iconHolder.textContent="",y&&i.type!==void 0&&w.constructor.getIconSvg(y,i.type).then(function(v){i.currentName===y&&(i.$iconHolder.innerHTML=v)}).catch(function(v){console.error("Failed to load icon: "+y+`
`+v)})})(this,0,n);break;case"color":x.style.fill=n||"";break;case"size":(function(w,k,y){var i=w._state;i.size&&(i.$iconHolder.style.width=i.$iconHolder.style.height="",i.size=i.sizeType=null),y&&!/^(xs|sm|md|lg)$/.test(i.size)&&(i.size=y.trim(),i.$iconHolder.style.width=i.$iconHolder.style.height=i.size)})(this,0,n);break;case"rotate":a&&x.classList.remove("bx-rotate-"+a),n&&x.classList.add("bx-rotate-"+n);break;case"flip":a&&x.classList.remove("bx-flip-"+a),n&&x.classList.add("bx-flip-"+n);break;case"animation":a&&x.classList.remove("bx-"+a),n&&x.classList.add("bx-"+n)}}},{key:"connectedCallback",value:function(){E()&&S.ShadyCSS.styleElement(this)}}]),u}());c.default=I,I.define()}])},T.exports=X()})})(z);
