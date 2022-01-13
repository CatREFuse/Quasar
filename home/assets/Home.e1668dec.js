import{b as v,r as T,v as D,x as C,w as S,e as w,f as l,g as h,h as r,k as _,y as M,u as c,z as $,i as b,t as k,o as A,n as q,F as I,A as W,B as z,j as E,l as K,C as f,D as L}from"./vendor.a6db5cbf.js";import{u as t}from"./index.7954c653.js";var P="./assets/quasar_logo.ebe1606d.svg",R="./assets/icon_right.6e42ab05.svg";const V={class:"w-full"},j={class:"flex flex-row items-center h-14 w-full gap-2 py-0 pl-4 pr-2 rounded-[1rem] bg-white text-sm md:text-base align-middle"},Q=["src"],U=["placeholder"],Y=v({props:{urlPattern:{type:String,default:"https://www.baidu.com/s?wd={query}",required:!1},iconName:{type:String,default:"baidu.svg",required:!1}},setup(u){const o=u;function n(){t().caret=!0}function i(){t().caret=!1}const e=T({tip:"",searchStr:"",placeholder:"",isComposing:!1});let p=D(()=>o.urlPattern.replace("{query}",e.searchStr));function d(){e.isComposing=!0}function a(){setTimeout(()=>{e.isComposing=!1},10)}function g(s){e.searchStr!=""&&(e.isComposing||(t().engine,t().postRecord(e.searchStr,t().engine),window.open(p.value,"_blank")))}const x=C(null);S(()=>t().engine,()=>{setTimeout(()=>{var s;return(s=x.value)==null?void 0:s.focus()},100)}),S(()=>e.searchStr,()=>{if(!e.searchStr.startsWith("\\")){for(let s of t().engines)if(e.searchStr==s.command||e.searchStr==s.title){e.tip=`\u6309\u4E0B\u7A7A\u683C\u9009\u62E9\u300C${s.title}\u300D ${s.loginRequire==1?" / \u9700\u8981\u767B\u5F55":""}`;break}else e.tip="";for(let s of t().engines)(e.searchStr.startsWith(s.command+" ")||e.searchStr.startsWith(s.title+" "))&&(t().selectEngine(s),e.searchStr="")}}),S(()=>t().hoverEngine,(s,m)=>{e.searchStr==""&&(s?e.placeholder=`\u8F93\u5165\u300C${s.command}\u300D\u53EF\u5FEB\u901F\u9009\u62E9\u300C${s.title}\u300D`:e.placeholder="Search for Your Quasar")});function B(){e.searchStr!=""}function F(){e.searchStr!=""&&(e.tip="")}return(s,m)=>{const N=w("dot-hover");return l(),h("div",V,[r("div",j,[r("img",{src:`https://gitee.com/CatREFuse/img-base/raw/master/icons/${u.iconName}`,class:"w-6 h-6 select-none"},null,8,Q),_(r("input",{type:"text",class:"w-full h-14 font-bold placeholder:text-gray-300 placeholder:font-bold outline-none",placeholder:c(e).placeholder,onKeydown:m[0]||(m[0]=$(y=>g(),["enter"])),"onUpdate:modelValue":m[1]||(m[1]=y=>c(e).searchStr=y),ref_key:"input",ref:x,onMouseenter:n,onMouseleave:i,onCompositionstart:d,onCompositionend:a},null,40,U),[[M,c(e).searchStr]]),r("p",{class:"text-xs font-medium",style:b({color:c(e).tip=="\u70B9\u51FB\u4EE5\u641C\u7D22"?"var(--text-mian)":"var(--text-disabled)"})},k(c(e).tip),5),_(r("img",{src:R,class:"select-none hover:cursor-pointer w-8 h-8",onClick:m[2]||(m[2]=y=>g()),style:b({opacity:c(e).searchStr==""?.3:1}),onMouseenter:B,onMouseleave:F,onCompositionstart:d,onCompositionend:a},null,36),[[N]])])])}}});var G=(u,o)=>{const n=u.__vccOpts||u;for(const[i,e]of o)n[i]=e;return n};const H={class:"w-4 h-4 overflow-hidden"},O=["src"],Z=v({props:{iconName:{default:"baidu.svg"},title:{default:"\u767E\u5EA6"},chosen:{type:Boolean,default:!1},index:null,engine:null},emits:["chose"],setup(u){const o=u;function n(){t().hoverEngine=o.engine}function i(){t().hoverEngine=void 0}const e=C(null),p=C(0);A(()=>{var a;p.value=((a=e.value)==null?void 0:a.clientWidth)||0});function d(){t().selectEngine(o.engine)}return(a,g)=>{const x=w("dot-hover");return _((l(),h("div",{class:"relative inline-flex items-center gap-2 py-0 px-4 bg-white rounded-2xl h-11 md:h-12 transition-all select-none hover:drop-shadow-2xl hover:transition-all hover:cursor-pointer group",onClick:d,style:b({"background-color":o.chosen?"var(--accent-color)":"white"}),onMouseenter:n,onMouseleave:i,ref_key:"label",ref:e},[r("div",H,[r("img",{class:q({white:o.chosen}),src:`https://gitee.com/CatREFuse/img-base/raw/master/icons/${o.iconName}`},null,10,O)]),r("p",{class:"font-bold text-base md:text[17px]",style:b({color:o.chosen?"white":"var(--text-main)"})},k(o.title),5)],36)),[[x]])}}});var J=G(Z,[["__scopeId","data-v-767314f5"]]);const X={class:"flex flex-row items-start p-0 gap-3 md:gap-4 flex-wrap w-full user-select-none"},ee=v({emits:["engine-change"],setup(u){function o(n,i){t().selectEngineByIndex(i)}return(n,i)=>(l(),h("div",X,[(l(!0),h(I,null,W(c(t)().engines,(e,p)=>{var d;return l(),z(J,{key:p,title:e.title,"icon-name":e.iconName,index:p,onChose:a=>o(a,p),chosen:((d=c(t)().engine)==null?void 0:d.title)==e.title,engine:e},null,8,["title","icon-name","index","onChose","chosen","engine"])}),128))]))}}),te=r("img",{src:P,class:"w-40 md:w-60 select-none"},null,-1),se={key:0,name:"footer",class:"text-center md:fixed md:bottom-6 md:right-[28px] md:text-right md:z-[100] select-text text-sm mt-4 font-medium opacity-30"},oe={class:"my-2"},ne=f(" \xA9 2020 - 2021 \u{1F353} "),re={href:"http:///bad-strawberry.com",target:"_blank",class:"decoration-none hover:underline"},ie=f("Bad Strawberry"),ae=[ie],le=f(". "),ce=r("span",null,"All rights reserved.",-1),ue={href:"https://www.craft.do/s/Gi8HESIcZQsSIY",target:"_blank",class:"decoration-none hover:underline"},de=f("\u7528\u6237\u534F\u8BAE"),he=[de],pe=f(" \xB7 "),me={href:"https://beian.miit.gov.cn/#/Integrated/index",target:"_blank",class:"decoration-none hover:underline"},_e=f("\u6D59 ICP \u5907 2020033146 \u53F7 - 2"),fe=[_e],ge=v({setup(u){function o(n){t().switchEngineByAdd((n==null?void 0:n.shiftKey)?-1:1)}return(n,i)=>{var d,a;const e=w("dot-hover"),p=w("text-hover");return l(),h("div",{class:"flex flex-col gap-4 md:gap-6",onKeydown:i[0]||(i[0]=$(L(g=>o(g),["prevent"]),["tab"]))},[te,E(Y,{class:"w-full",iconName:(d=c(t)().engine)==null?void 0:d.iconName,"url-pattern":(a=c(t)().engine)==null?void 0:a.urlPattern},null,8,["iconName","url-pattern"]),E(ee),c(t)().debug?K("",!0):_((l(),h("div",se,[r("p",oe,[ne,_((l(),h("a",re,ae)),[[e]]),le,ce]),r("p",null,[_((l(),h("a",ue,he)),[[e]]),pe,_((l(),h("a",me,fe)),[[e]])])])),[[p]])],32)}}}),ve={class:"col-start-2 col-end-12 md:col-start-2 md:col-end-7 md:min-w-[512px] md:max-w-[720px] mt-16"},be=v({setup(u){return(o,n)=>(l(),h("div",ve,[E(ge,{class:"w-full"})]))}});export{be as default};
