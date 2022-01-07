var K=Object.defineProperty;var O=(o,e,s)=>e in o?K(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s;var m=(o,e,s)=>(O(o,typeof e!="symbol"?e+"":e,s),s);import{d as R,a as v,r as B,c as W,b as N,w,e as C,o as _,f as g,g as u,h as p,v as j,u as c,i as I,n as f,t as E,j as q,k as S,l as A,F as z,m as Q,p as T,q as M,s as U,x as L,y,z as Y,A as H}from"./vendor.905189d2.js";const V=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}};V();var G="./assets/quasar_logo_bg.20a7d8f1.svg",X="./assets/quasar_logo.ebe1606d.svg",Z="./assets/icon_right.6e42ab05.svg";class J{constructor(e,s,a,t,r,i,h){m(this,"id");m(this,"title");m(this,"iconName");m(this,"command");m(this,"loginRequire");m(this,"urlPattern");m(this,"tags");this.id=i,this.title=e,this.iconName=s,this.command=a,this.loginRequire=t,this.urlPattern=r,this.tags=h}}var n=R({id:"app",state(){return{engine:new J("","","",0,"",0,""),engines:[],hover:!1,mousedown:!1,caret:!1,debug:!1}},actions:{switchEngineByAdd(o){var s;let e=0;for(let a=0;a<this.engines.length;a++)this.engines[a].title==((s=this.engine)==null?void 0:s.title)&&(e=a);e=e+o,e>=this.engines.length?e=e-this.engines.length:e<0&&(e=e+this.engines.length),this.engine=this.engines[e]},selectEngine(o){this.engine=o},selectEngineByIndex(o){this.engine=this.engines[o]},selectEngineByTitle(o){for(let e of this.engines)if(e.title==o){this.engine=e;break}},selectEngineByCommand(o){for(let e of this.engines)if(e.command==o){this.engine=e;break}}}});var F=(o,e)=>{const s=o.__vccOpts||o;for(const[a,t]of e)s[a]=t;return s};const ee={class:"container"},te={class:"input"},se=["src"],ne=["placeholder"],oe=v({props:{urlPattern:{type:String,default:"https://www.baidu.com/s?wd={query}",required:!1},iconName:{type:String,default:"baidu.svg",required:!1}},setup(o){const e=o;function s(){n().caret=!0}function a(){n().caret=!1}const t=B({tip:"",searchStr:"",placeholder:"",isComposing:!1});let r=W(()=>e.urlPattern.replace("{query}",t.searchStr));function i(){t.isComposing=!0}function h(){setTimeout(()=>{t.isComposing=!1},10)}function $(d){if(t.searchStr!=""&&!t.isComposing){const l=n().engine;q.post("https://api.catrefuse.com/add-record",{title:l==null?void 0:l.title,url_pattern:l==null?void 0:l.urlPattern,engine_id:l==null?void 0:l.id,tags:l==null?void 0:l.tags,search_string:t.searchStr}).then(b=>{}).catch(b=>console.error(b)),window.open(r.value,"_blank")}}const x=N(null);w(()=>n().engine,()=>{setTimeout(()=>{var d;return(d=x.value)==null?void 0:d.focus()},100)}),w(()=>t.searchStr,()=>{if(!t.searchStr.startsWith("\\")){for(let d of n().engines)if(t.searchStr==d.command||t.searchStr==d.title){t.tip=`\u6309\u4E0B\u7A7A\u683C\u9009\u62E9\u300C${d.title}\u300D ${d.loginRequire==1?" / \u9700\u8981\u767B\u5F55":""}`;break}else t.tip="";for(let d of n().engines)(t.searchStr.startsWith(d.command+" ")||t.searchStr.startsWith(d.title+" "))&&(n().selectEngine(d),t.searchStr="")}}),w(()=>n().hoverEngine,(d,l)=>{t.searchStr==""&&(d?t.placeholder=`\u8F93\u5165\u300C${d.command}\u300D\u53EF\u5FEB\u901F\u9009\u62E9\u300C${d.title}\u300D`:t.placeholder="Search for Your Quasar")});function P(){t.searchStr!=""}function D(){t.searchStr!=""&&(t.tip="")}return(d,l)=>{const b=C("dot-hover");return _(),g("div",ee,[u("div",te,[u("img",{src:`https://gitee.com/CatREFuse/img-base/raw/master/icons/${o.iconName}`,class:"search-logo"},null,8,se),p(u("input",{type:"text",class:"text_input",placeholder:c(t).placeholder,onKeydown:l[0]||(l[0]=I(k=>$(),["enter"])),"onUpdate:modelValue":l[1]||(l[1]=k=>c(t).searchStr=k),ref_key:"input",ref:x,onMouseenter:s,onMouseleave:a,onCompositionstart:i,onCompositionend:h},null,40,ne),[[j,c(t).searchStr]]),u("p",{class:"tip",style:f({color:c(t).tip=="\u70B9\u51FB\u4EE5\u641C\u7D22"?"var(--text-mian)":"var(--text-disabled)"})},E(c(t).tip),5),p(u("img",{src:Z,class:"arrow",onClick:l[2]||(l[2]=k=>$()),style:f({opacity:c(t).searchStr==""?.3:1}),onMouseenter:P,onMouseleave:D,onCompositionstart:i,onCompositionend:h},null,36),[[b]])])])}}});var re=F(oe,[["__scopeId","data-v-7028ccdc"]]);const ie={class:"logo-container"},ae=["src"],ce=v({props:{iconName:{default:"baidu.svg"},title:{default:"\u767E\u5EA6"},chosen:{type:Boolean,default:!1},index:null,engine:null},emits:["chose"],setup(o){const e=o;function s(){n().hoverEngine=e.engine}function a(){n().hoverEngine=void 0}const t=N(null),r=N(0);S(()=>{var h;r.value=((h=t.value)==null?void 0:h.clientWidth)||0});function i(){n().selectEngine(e.engine)}return(h,$)=>{const x=C("dot-hover");return p((_(),g("div",{class:"label",onClick:i,style:f({"background-color":e.chosen?"var(--accent-color)":"white"}),onMouseenter:s,onMouseleave:a,ref_key:"label",ref:t},[u("div",ie,[u("img",{class:A({white:e.chosen}),src:`https://gitee.com/CatREFuse/img-base/raw/master/icons/${e.iconName}`},null,10,ae)]),u("p",{class:"title",style:f({color:e.chosen?"white":"var(--text-main)"})},E(e.title),5)],36)),[[x]])}}});var le=F(ce,[["__scopeId","data-v-b0ad1898"]]);const ue={class:"list"},de=v({emits:["engine-change"],setup(o){S(()=>{q.get("./engines.json").then(s=>{n().engines=s.data,n().engine=s.data[0]}).catch(s=>{alert(s)})});function e(s,a){n().selectEngineByIndex(a)}return(s,a)=>(_(),g("div",ue,[(_(!0),g(z,null,Q(c(n)().engines,(t,r)=>{var i;return _(),T(le,{key:r,title:t.title,"icon-name":t.iconName,index:r,onChose:h=>e(h,r),chosen:((i=c(n)().engine)==null?void 0:i.title)==t.title,engine:t},null,8,["title","icon-name","index","onChose","chosen","engine"])}),128))]))}});var he=F(de,[["__scopeId","data-v-ec2619b8"]]);const _e=u("img",{src:X,class:"logo"},null,-1),ge=v({setup(o){function e(s){n().switchEngineByAdd((s==null?void 0:s.shiftKey)?-1:1)}return(s,a)=>{var t,r;return _(),g("div",{class:"search-container",onKeydown:a[0]||(a[0]=I(U(i=>e(i),["prevent"]),["tab"]))},[_e,M(re,{class:"search-bar",iconName:(t=c(n)().engine)==null?void 0:t.iconName,"url-pattern":(r=c(n)().engine)==null?void 0:r.urlPattern},null,8,["iconName","url-pattern"]),M(he)],32)}}}),me=v({setup(o){return(e,s)=>(_(),T(ge,{class:"search"}))}});const pe={class:"main-container"},fe={class:"debugger"},ve={key:0},ye=u("h3",null,"debugger",-1),xe={key:0,class:"footer"},be=y(" \xA9 2020 - 2021 \u{1F353} "),we={href:"http:///bad-strawberry.com",target:"_blank"},Ce=y("Bad Strawberry"),Ee=[Ce],Se=y(", All rights reserved. "),$e={href:"https://www.craft.do/s/Gi8HESIcZQsSIY",target:"_blank"},ke=y("\u7528\u6237\u534F\u8BAE"),Be=[ke],Ne=y(" \xB7 "),Me={href:"https://beian.miit.gov.cn/#/Integrated/index",target:"_blank"},Fe=y("\u6D59 ICP \u5907 2020033146 \u53F7"),Ie=[Fe],qe=v({setup(o){S(()=>{document.title="Quasar"});const e=B({cursor:{x:0,y:0},visualCursor:{x:0,y:0}}),s=B({grow:1,degree:0});w(()=>e.visualCursor,(t,r)=>{const i={x:t.x-r.x,y:t.y-r.y},h=Math.sqrt(i.x*i.x+i.y*i.y);s.grow=Math.min(Math.max(h/20,1),2),s.degree=Math.atan2(i.y,i.x)*180/Math.PI}),S(()=>{document.onmousemove=function(r){e.cursor={x:r.clientX,y:r.clientY}},document.onmousedown=()=>{n().mousedown=!0},document.onmouseup=()=>{n().mousedown=!1},setInterval(()=>{e.visualCursor={x:e.cursor.x,y:e.cursor.y}},50)});function a(){n().debug=!n().debug}return(t,r)=>{const i=C("dot-hover"),h=C("text-hover");return _(),g("div",pe,[u("div",{class:"cursor-container",style:f({transform:`translate(${c(e).visualCursor.x-25}px,${c(e).visualCursor.y-25}px)`})},[u("div",{class:A({cursor:!0,hover:c(n)().hover,clicked:c(n)().mousedown,caret:c(n)().caret}),style:f({transform:c(n)().caret?"none":`rotate(${c(s).degree}deg) scale(${c(s).grow}, 1)  `})},null,6)],4),M(me),u("img",{class:"bg_img",src:G,style:f({transform:"none"})},null,4),u("div",fe,[p(u("div",{class:"debug-trigger",onClick:a},null,512),[[i]]),c(n)().debug?(_(),g("div",ve,[ye,u("p",null,"cursor: "+E(c(e).cursor.x)+", "+E(c(e).cursor.y),1)])):L("",!0)]),c(n)().debug?L("",!0):p((_(),g("div",xe,[u("p",null,[be,p((_(),g("a",we,Ee)),[[i]]),Se]),u("p",null,[p((_(),g("a",$e,Be)),[[i]]),Ne,p((_(),g("a",Me,Ie)),[[i]])])])),[[h]])])}}});function Ae(o){o.directive("dot-hover",(e,s)=>{e.onmouseenter=()=>{n().hover=s.value==null?!0:!s.value},e.onmouseleave=()=>{n().hover=!1}}),o.directive("text-hover",{mounted(e,s){e.onmouseenter=()=>{n().caret=!0},e.onmouseleave=()=>{n().caret=!1}}})}const Te=Y(qe);Te.use(Ae).use(H()).mount("#app");
