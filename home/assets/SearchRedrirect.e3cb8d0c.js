import{u as r}from"./index.e8bd2633.js";import{b as o,k as s,M as a,o as t,c as l}from"./vendor.b0c01671.js";const i=o({props:{query:null,engine:null},setup(u){const e=u;let n=s(!1);return a(()=>{if(!n.value)r().selectEngineByCommand(e.engine||"bd"),r().doSearch(e.query||""),n.value=!0;else return}),(c,p)=>(t(),l("h4",null,"Quasar \u6B63\u5728\u4E3A\u4F60\u8DF3\u8F6C..."))}});export{i as default};
