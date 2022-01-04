var T=Object.defineProperty;var D=(r,e,s)=>e in r?T(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var m=(r,e,s)=>(D(r,typeof e!="symbol"?e+"":e,s),s);import{d as K,a as v,r as k,c as O,b as B,w as b,e as w,o as _,f as g,g as d,h as p,v as R,u as c,i as I,n as f,t as E,j as q,k as S,l as A,F as W,m as j,p as L,q as N,s as z,x as P,y,z as Q,A as U}from"./vendor.905189d2.js";const Y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};Y();var H="./assets/quasar_logo_bg.20a7d8f1.svg",V="./assets/quasar_logo.ebe1606d.svg",G="./assets/icon_right.6e42ab05.svg";class X{constructor(e,s,a,t,o,i,h){m(this,"id");m(this,"title");m(this,"iconName");m(this,"command");m(this,"loginRequire");m(this,"urlPattern");m(this,"tags");this.id=i,this.title=e,this.iconName=s,this.command=a,this.loginRequire=t,this.urlPattern=o,this.tags=h}}var n=K({id:"app",state(){return{engine:new X("","","",0,"",0,""),engines:[],hover:!1,mousedown:!1,caret:!1,debug:!1}},actions:{switchEngineByAdd(r){var s;let e=0;for(let a=0;a<this.engines.length;a++)this.engines[a].title==((s=this.engine)==null?void 0:s.title)&&(e=a);e=e+r,e>=this.engines.length?e=e-this.engines.length:e<0&&(e=e+this.engines.length),this.engine=this.engines[e]},selectEngine(r){this.engine=r},selectEngineByIndex(r){this.engine=this.engines[r]},selectEngineByTitle(r){for(let e of this.engines)if(e.title==r){this.engine=e;break}},selectEngineByCommand(r){for(let e of this.engines)if(e.command==r){this.engine=e;break}}}});var M=(r,e)=>{const s=r.__vccOpts||r;for(const[a,t]of e)s[a]=t;return s};const Z={class:"container"},J={class:"input"},ee=["src"],te=["placeholder"],se=v({props:{urlPattern:{type:String,default:"https://www.baidu.com/s?wd={query}",required:!1},iconName:{type:String,default:"baidu.svg",required:!1}},setup(r){const e=r;function s(){n().caret=!0}function a(){n().caret=!1}const t=k({tip:"",searchStr:"",placeholder:""});let o=O(()=>e.urlPattern.replace("{query}",t.searchStr));function i(l){if(t.searchStr!=""&&!(l==null?void 0:l.isComposing)){const u=n().engine;q.post("http://127.0.0.1:5000/add-record",{title:u==null?void 0:u.title,url_pattern:u==null?void 0:u.urlPattern,engine_id:u==null?void 0:u.id,tags:u==null?void 0:u.tags,search_string:t.searchStr}).then().catch($=>console.error($)),window.open(o.value,"_blank")}}const h=B(null);b(()=>n().engine,()=>{setTimeout(()=>{var l;return(l=h.value)==null?void 0:l.focus()},100)}),b(()=>t.searchStr,()=>{if(!t.searchStr.startsWith("\\")){for(let l of n().engines)if(t.searchStr==l.command||t.searchStr==l.title){t.tip=`\u6309\u4E0B\u7A7A\u683C\u9009\u62E9\u300C${l.title}\u300D ${l.loginRequire==1?" / \u9700\u8981\u767B\u5F55":""}`;break}else t.tip="";for(let l of n().engines)(t.searchStr.startsWith(l.command+" ")||t.searchStr.startsWith(l.title+" "))&&(n().selectEngine(l),t.searchStr="")}}),b(()=>n().hoverEngine,(l,u)=>{t.searchStr==""&&(l?t.placeholder=`\u8F93\u5165\u300C${l.command}\u300D\u53EF\u5FEB\u901F\u9009\u62E9\u300C${l.title}\u300D`:t.placeholder="Search for Your Quasar")});function F(){t.searchStr!=""}function C(){t.searchStr!=""&&(t.tip="")}return(l,u)=>{const $=w("dot-hover");return _(),g("div",Z,[d("div",J,[d("img",{src:`https://gitee.com/CatREFuse/img-base/raw/master/icons/${r.iconName}`,class:"search-logo"},null,8,ee),p(d("input",{type:"text",class:"text_input",placeholder:c(t).placeholder,onKeydown:u[0]||(u[0]=I(x=>i(x),["enter"])),"onUpdate:modelValue":u[1]||(u[1]=x=>c(t).searchStr=x),ref_key:"input",ref:h,onMouseenter:s,onMouseleave:a},null,40,te),[[R,c(t).searchStr]]),d("p",{class:"tip",style:f({color:c(t).tip=="\u70B9\u51FB\u4EE5\u641C\u7D22"?"var(--text-mian)":"var(--text-disabled)"})},E(c(t).tip),5),p(d("img",{src:G,class:"arrow",onClick:u[2]||(u[2]=x=>i()),style:f({opacity:c(t).searchStr==""?.3:1}),onMouseenter:F,onMouseleave:C},null,36),[[$]])])])}}});var ne=M(se,[["__scopeId","data-v-cd2f106e"]]);const re={class:"logo-container"},oe=["src"],ie=v({props:{iconName:{default:"baidu.svg"},title:{default:"\u767E\u5EA6"},chosen:{type:Boolean,default:!1},index:null,engine:null},emits:["chose"],setup(r){const e=r;function s(){n().hoverEngine=e.engine}function a(){n().hoverEngine=void 0}const t=B(null),o=B(0);S(()=>{var h;o.value=((h=t.value)==null?void 0:h.clientWidth)||0});function i(){n().selectEngine(e.engine)}return(h,F)=>{const C=w("dot-hover");return p((_(),g("div",{class:"label",onClick:i,style:f({"background-color":e.chosen?"var(--accent-color)":"white"}),onMouseenter:s,onMouseleave:a,ref_key:"label",ref:t},[d("div",re,[d("img",{class:A({white:e.chosen}),src:`https://gitee.com/CatREFuse/img-base/raw/master/icons/${e.iconName}`},null,10,oe)]),d("p",{class:"title",style:f({color:e.chosen?"white":"var(--text-main)"})},E(e.title),5)],36)),[[C]])}}});var ae=M(ie,[["__scopeId","data-v-b0ad1898"]]);const ce={class:"list"},le=v({emits:["engine-change"],setup(r){S(()=>{q.get("./engines.json").then(s=>{n().engines=s.data,n().engine=s.data[0]}).catch(s=>{alert(s)})});function e(s,a){n().selectEngineByIndex(a)}return(s,a)=>(_(),g("div",ce,[(_(!0),g(W,null,j(c(n)().engines,(t,o)=>{var i;return _(),L(ae,{key:o,title:t.title,"icon-name":t.iconName,index:o,onChose:h=>e(h,o),chosen:((i=c(n)().engine)==null?void 0:i.title)==t.title,engine:t},null,8,["title","icon-name","index","onChose","chosen","engine"])}),128))]))}});var ue=M(le,[["__scopeId","data-v-ec2619b8"]]);const de=d("img",{src:V,class:"logo"},null,-1),he=v({setup(r){function e(s){n().switchEngineByAdd((s==null?void 0:s.shiftKey)?-1:1)}return(s,a)=>{var t,o;return _(),g("div",{class:"search-container",onKeydown:a[0]||(a[0]=I(z(i=>e(i),["prevent"]),["tab"]))},[de,N(ne,{class:"search-bar",iconName:(t=c(n)().engine)==null?void 0:t.iconName,"url-pattern":(o=c(n)().engine)==null?void 0:o.urlPattern},null,8,["iconName","url-pattern"]),N(ue)],32)}}}),_e=v({setup(r){return(e,s)=>(_(),L(he,{class:"search"}))}});const ge={class:"main-container"},me={class:"debugger"},pe={key:0},fe=d("h3",null,"debugger",-1),ve={key:0,class:"footer"},ye=y(" \xA9 2020 - 2021 \u{1F353} "),xe={href:"http:///bad-strawberry.com",target:"_blank"},be=y("Bad Strawberry"),we=[be],Ee=y(", All rights reserved. "),Se={href:"https://www.craft.do/s/Gi8HESIcZQsSIY",target:"_blank"},Ce=y("\u7528\u6237\u534F\u8BAE"),$e=[Ce],ke=y(" \xB7 "),Be={href:"https://beian.miit.gov.cn/#/Integrated/index",target:"_blank"},Ne=y("\u6D59 ICP \u5907 2020033146 \u53F7"),Me=[Ne],Fe=v({setup(r){S(()=>{document.title="Quasar"});const e=k({cursor:{x:0,y:0},visualCursor:{x:0,y:0}}),s=k({grow:1,degree:0});b(()=>e.visualCursor,(t,o)=>{const i={x:t.x-o.x,y:t.y-o.y},h=Math.sqrt(i.x*i.x+i.y*i.y);s.grow=Math.min(Math.max(h/20,1),2),s.degree=Math.atan2(i.y,i.x)*180/Math.PI}),S(()=>{document.onmousemove=function(o){e.cursor={x:o.clientX,y:o.clientY}},document.onmousedown=()=>{n().mousedown=!0},document.onmouseup=()=>{n().mousedown=!1},setInterval(()=>{e.visualCursor={x:e.cursor.x,y:e.cursor.y}},50)});function a(){n().debug=!n().debug}return(t,o)=>{const i=w("dot-hover"),h=w("text-hover");return _(),g("div",ge,[d("div",{class:"cursor-container",style:f({transform:`translate(${c(e).visualCursor.x-25}px,${c(e).visualCursor.y-25}px)`})},[d("div",{class:A({cursor:!0,hover:c(n)().hover,clicked:c(n)().mousedown,caret:c(n)().caret}),style:f({transform:c(n)().caret?"none":`rotate(${c(s).degree}deg) scale(${c(s).grow}, 1)  `})},null,6)],4),N(_e),d("img",{class:"bg_img",src:H,style:f({transform:"none"})},null,4),d("div",me,[p(d("div",{class:"debug-trigger",onClick:a},null,512),[[i]]),c(n)().debug?(_(),g("div",pe,[fe,d("p",null,"cursor: "+E(c(e).cursor.x)+", "+E(c(e).cursor.y),1)])):P("",!0)]),c(n)().debug?P("",!0):p((_(),g("div",ve,[d("p",null,[ye,p((_(),g("a",xe,we)),[[i]]),Ee]),d("p",null,[p((_(),g("a",Se,$e)),[[i]]),ke,p((_(),g("a",Be,Me)),[[i]])])])),[[h]])])}}});function Ie(r){r.directive("dot-hover",(e,s)=>{e.onmouseenter=()=>{n().hover=s.value==null?!0:!s.value},e.onmouseleave=()=>{n().hover=!1}}),r.directive("text-hover",{mounted(e,s){e.onmouseenter=()=>{n().caret=!0},e.onmouseleave=()=>{n().caret=!1}}})}const qe=Q(Fe);qe.use(Ie).use(U()).mount("#app");
