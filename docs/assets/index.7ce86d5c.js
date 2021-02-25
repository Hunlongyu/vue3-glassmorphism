import{d as e,V as o,r as n,a as l,c as a,b as s,w as r,t,v as c,e as i,f as u,g as p,o as f,h as d}from"./vendor.2d06f70b.js";function m(e){let o=e.toLowerCase();const n=[];if(/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(o)){if(4===o.length){let e="#";for(let n=1;n<4;n+=1)e+=o.slice(n,n+1).concat(o.slice(n,n+1));o=e}for(let e=1;e<7;e+=2)n.push(parseInt("0x"+o.slice(e,e+2)));return n.join(", ")}return console.warn("颜色值错误, 应该为: #fff 或者 #ffffff. The color value should be #fff or #ffffff."),"255, 255, 255"}!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(n){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((n,s)=>{const r=new URL(e,l);if(self[o].moduleMap[r])return n(self[o].moduleMap[r]);const t=new Blob([`import * as m from '${r}';`,`${o}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(t),onerror(){s(new Error(`Failed to import: ${e}`)),a(c)},onload(){n(self[o].moduleMap[r]),a(c)}});document.head.appendChild(c)})),self[o].moduleMap={}}}("assets/");const v={mounted:(e,o)=>{const n=o.value;let l=m(n.color),a=n.blur||3,s=n.opacity||.2;e.style.background=`rgba(${l}, ${s})`,e.style["backdrop-filter"]=`blur(${a}px)`},updated:(e,o)=>{const n=o.value;let l=m(n.color),a=n.blur||3,s=n.opacity||.2;e.style.background=`rgba(${l}, ${s})`,e.style["backdrop-filter"]=`blur(${a}px)`}},h={install(e){e.directive("glassmorphism",v)}};window.Vue&&window.Vue.use(h);var g=e({name:"App",components:{VueSlider:o},directives:{glassmorphism:v},setup(){const e=n(3),o=n(.2),a=n("255,255,255"),s=n("#ffffff"),r=l({blur:3,opacity:.2,color:"#ffffff"});return{blur:e,transparency:o,color:a,currentColor:s,blurChangeEvent:function(e){r.blur=e},transparencyChangeEvent:function(e){r.opacity=e},colorChangeEvent:function(){a.value=function(e){const o=[];for(let n=1;n<7;n+=2)o.push(parseInt("0x"+e.slice(n,n+2)));return o.join(", ")}(s.value),r.color=s.value},config:r}}});const b={class:"home"},y={class:"home-wrapper"},C=s("header",{class:"header"},[s("div",{class:"title"},"Vue3 Glassmorphism")],-1),w={class:"body"},V={class:"show"},$={class:"icon icon1"},U={class:"icon icon2"},j={class:"box"},x=s("div",{class:"logo"},[s("img",{src:"https://cn.vuejs.org/images/logo.png",alt:""})],-1),E=s("div",{class:"name"},"Vue",-1),L=s("div",{class:"describe"},"渐进式 JavaScript 框架",-1),R={class:"icon icon3"},k={class:"generator"},M={class:"blur"},_={class:"value"},A=s("span",null,"模糊值",-1),G={class:"transparency"},I={class:"value"},O=s("span",null,"透明度",-1),F={class:"color"},S=s("span",{class:"label"},"颜色",-1),B=s("footer",{class:"footer"},[s("h2",null,"什么是 Glassmorphism ?"),s("p",null,"Glassmorphism 是流行的磨砂玻璃美学的统一名称. 该效果具有透明度的背景模糊, 并使用堆叠的图层显示界面的深度和上下文."),s("p",null,[i("使用方法: "),s("a",{href:"https://github.com/Hunlongyu/vue3-glassmorphism"},"官网文档")])],-1);g.render=function(e,o,n,l,i,d){const m=u("vue-slider"),v=p("glassmorphism");return f(),a("div",b,[s("div",y,[C,s("main",w,[s("div",V,[r(s("div",$,"🚀",512),[[v,e.config]]),r(s("div",U,"🔥",512),[[v,e.config]]),r(s("div",j,[x,E,L],512),[[v,e.config]]),r(s("div",R,"😍",512),[[v,{blur:e.blur,opacity:e.transparency,color:e.currentColor}]])]),s("div",k,[s("div",M,[s("div",_,[A,s("span",null,t(e.blur),1)]),s(m,{modelValue:e.blur,"onUpdate:modelValue":o[1]||(o[1]=o=>e.blur=o),min:0,max:20,interval:.5,tooltip:"none",onChange:e.blurChangeEvent},null,8,["modelValue","interval","onChange"])]),s("div",G,[s("div",I,[O,s("span",null,t(e.transparency),1)]),s(m,{modelValue:e.transparency,"onUpdate:modelValue":o[2]||(o[2]=o=>e.transparency=o),min:.01,max:1,interval:.01,tooltip:"none",onChange:e.transparencyChangeEvent},null,8,["modelValue","min","interval","onChange"])]),s("div",F,[S,r(s("input",{type:"color",id:"head","onUpdate:modelValue":o[3]||(o[3]=o=>e.currentColor=o),onInput:o[4]||(o[4]=o=>e.colorChangeEvent())},null,544),[[c,e.currentColor]])])])]),B])])};d(g).mount("#app");
