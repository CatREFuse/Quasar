import{b as C,k as N,o as M,c as $,e as B,s as H,q as P,u as Y}from"./vendor.add57081.js";var D={exports:{}};(function(z,S){(function(v,u,f,n,t){if("customElements"in f)t();else{if(f.AWAITING_WEB_COMPONENTS_POLYFILL)return void f.AWAITING_WEB_COMPONENTS_POLYFILL.then(t);var e=f.AWAITING_WEB_COMPONENTS_POLYFILL=p();e.then(t);var c=f.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",h=f.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in f?g(c).then(function(){e.isDone=!0,e.exec()}):g(h).then(function(){g(c).then(function(){e.isDone=!0,e.exec()})})}function p(){var s=[];return s.isDone=!1,s.exec=function(){s.splice(0).forEach(function(d){d()})},s.then=function(d){return s.isDone?d():s.push(d),s},s}function g(s){var d=p(),b=n.createElement("script");return b.type="text/javascript",b.readyState?b.onreadystatechange=function(){b.readyState!="loaded"&&b.readyState!="complete"||(b.onreadystatechange=null,d.isDone=!0,d.exec())}:b.onload=function(){d.isDone=!0,d.exec()},b.src=s,n.getElementsByTagName("head")[0].appendChild(b),b.then=d.then,b}})(0,0,window,document,function(){var v;v=function(){return function(u){var f={};function n(t){if(f[t])return f[t].exports;var e=f[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}return n.m=u,n.c=f,n.d=function(t,e,c){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},n.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&typeof t=="object"&&t&&t.__esModule)return t;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&typeof t!="string")for(var h in t)n.d(c,h,function(p){return t[p]}.bind(null,h));return c},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(u,f){u.exports=function(n){var t=[];return t.toString=function(){return this.map(function(e){var c=function(h,p){var g,s=h[1]||"",d=h[3];if(!d)return s;if(p&&typeof btoa=="function"){var b=(g=d,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(g))))+" */"),X=d.sources.map(function(j){return"/*# sourceURL="+d.sourceRoot+j+" */"});return[s].concat(X).concat([b]).join(`
`)}return[s].join(`
`)}(e,n);return e[2]?"@media "+e[2]+"{"+c+"}":c}).join("")},t.i=function(e,c){typeof e=="string"&&(e=[[null,e,""]]);for(var h={},p=0;p<this.length;p++){var g=this[p][0];typeof g=="number"&&(h[g]=!0)}for(p=0;p<e.length;p++){var s=e[p];typeof s[0]=="number"&&h[s[0]]||(c&&!s[2]?s[2]=c:c&&(s[2]="("+s[2]+") and ("+c+")"),t.push(s))}},t}},function(u,f,n){var t=n(3);u.exports=typeof t=="string"?t:t.toString()},function(u,f,n){var t=n(4);u.exports=typeof t=="string"?t:t.toString()},function(u,f,n){(u.exports=n(0)(!1)).push([u.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(u,f,n){(u.exports=n(0)(!1)).push([u.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(u,f,n){n.r(f),n.d(f,"BoxIconElement",function(){return T});var t,e,c,h,p=n(1),g=n.n(p),s=n(2),d=n.n(s),b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},X=function(){function l(m,o){for(var a=0;a<o.length;a++){var r=o[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(m,r.key,r)}}return function(m,o,a){return o&&l(m.prototype,o),a&&l(m,a),m}}(),j=(e=(t=Object).getPrototypeOf||function(l){return l.__proto__},c=t.setPrototypeOf||function(l,m){return l.__proto__=m,l},h=(typeof Reflect=="undefined"?"undefined":b(Reflect))==="object"?Reflect.construct:function(l,m,o){var a,r=[null];return r.push.apply(r,m),a=l.bind.apply(l,r),c(new a,o.prototype)},function(l){var m=e(l);return c(l,c(function(){return h(m,arguments,e(this).constructor)},m))}),O=window,L={},E=document.createElement("template"),I=function(){return!!O.ShadyCSS};E.innerHTML=`
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
`+d.a+`
</style>
<div id="icon"></div>`;var T=j(function(l){function m(){(function(a,r){if(!(a instanceof r))throw new TypeError("Cannot call a class as a function")})(this,m);var o=function(a,r){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||typeof r!="object"&&typeof r!="function"?a:r}(this,(m.__proto__||Object.getPrototypeOf(m)).call(this));return o.$ui=o.attachShadow({mode:"open"}),o.$ui.appendChild(o.ownerDocument.importNode(E.content,!0)),I()&&O.ShadyCSS.styleElement(o),o._state={$iconHolder:o.$ui.getElementById("icon"),type:o.getAttribute("type")},o}return function(o,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof a);o.prototype=Object.create(a&&a.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(o,a):o.__proto__=a)}(m,HTMLElement),X(m,null,[{key:"getIconSvg",value:function(o,a){var r=this.cdnUrl+"/regular/bx-"+o+".svg";return a==="solid"?r=this.cdnUrl+"/solid/bxs-"+o+".svg":a==="logo"&&(r=this.cdnUrl+"/logos/bxl-"+o+".svg"),r&&L[r]||(L[r]=new Promise(function(w,x){var k=new XMLHttpRequest;k.addEventListener("load",function(){this.status<200||this.status>=300?x(new Error(this.status+" "+this.responseText)):w(this.responseText)}),k.onerror=x,k.onabort=x,k.open("GET",r),k.send()})),L[r]}},{key:"define",value:function(o){o=o||this.tagName,I()&&O.ShadyCSS.prepareTemplate(E,o),customElements.define(o,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.1/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),X(m,[{key:"attributeChangedCallback",value:function(o,a,r){var w=this._state.$iconHolder;switch(o){case"type":(function(x,k,y){var i=x._state;i.$iconHolder.textContent="",i.type&&(i.type=null),i.type=!y||y!=="solid"&&y!=="logo"?"regular":y,i.currentName!==void 0&&x.constructor.getIconSvg(i.currentName,i.type).then(function(_){i.type===y&&(i.$iconHolder.innerHTML=_)}).catch(function(_){console.error("Failed to load icon: "+i.currentName+`
`+_)})})(this,0,r);break;case"name":(function(x,k,y){var i=x._state;i.currentName=y,i.$iconHolder.textContent="",y&&i.type!==void 0&&x.constructor.getIconSvg(y,i.type).then(function(_){i.currentName===y&&(i.$iconHolder.innerHTML=_)}).catch(function(_){console.error("Failed to load icon: "+y+`
`+_)})})(this,0,r);break;case"color":w.style.fill=r||"";break;case"size":(function(x,k,y){var i=x._state;i.size&&(i.$iconHolder.style.width=i.$iconHolder.style.height="",i.size=i.sizeType=null),y&&!/^(xs|sm|md|lg)$/.test(i.size)&&(i.size=y.trim(),i.$iconHolder.style.width=i.$iconHolder.style.height=i.size)})(this,0,r);break;case"rotate":a&&w.classList.remove("bx-rotate-"+a),r&&w.classList.add("bx-rotate-"+r);break;case"flip":a&&w.classList.remove("bx-flip-"+a),r&&w.classList.add("bx-flip-"+r);break;case"animation":a&&w.classList.remove("bx-"+a),r&&w.classList.add("bx-"+r)}}},{key:"connectedCallback",value:function(){I()&&O.ShadyCSS.styleElement(this)}}]),m}());f.default=T,T.define()}])},z.exports=v()})})(D);const A=C({props:{name:{default:"bx-left-arrow-alt"},size:{default:"m"},full:{type:Boolean,default:!1}},setup(z){const S=z,v={xs:1,s:1.25,m:1.5,l:2,xl:3,xxl:4};let u=N({"font-size":`${v[S.size]}rem`,transform:`${S.full?"scale(1.5)":""}`}),f=N({width:`${v[S.size]}rem`,height:`${v[S.size]}rem`});return(n,t)=>(M(),$("div",{id:"container",style:P(Y(f))},[B("i",{class:H(`bx ${S.name}`),style:P(Y(u))},null,6)],4))}});export{A as _};