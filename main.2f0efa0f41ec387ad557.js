(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,o){},QfWi:function(t,e,o){"use strict";o.r(e);o("L1EO");var n,c=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],r=document.querySelector('button[data-action="start"]'),a=document.querySelector('button[data-action="stop"]'),i=document.querySelector("body");function u(t,e){e.setAttribute("off","off"),t.removeAttribute("off")}r.addEventListener("click",(function(){u(a,r),n=setInterval((function(){return e=0,o=c.length-1,t=Math.floor(Math.random()*(o-e+1)+e),n=c[t],void(i.style.cssText="background-color: "+n+";");var t,e,o,n}),1e3),console.log(n)})),a.addEventListener("click",(function(){u(r,a),clearInterval(n)}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.2f0efa0f41ec387ad557.js.map