(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!t;)t=a[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=()=>{const e=document.getElementById("content");e&&e.replaceChildren()},n=e.p+"da960589df773d46b29a.png",a=()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.innerHTML="Hyattsville's Umpteenth Empanada Shop";const a=new Image;a.src=n;const o=document.createElement("p");return o.innerHTML="While Hyattsville has a number of empanada shops, none are like this one...fictitious",e.appendChild(t),e.appendChild(a),e.appendChild(o),e};(()=>{const e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("class","navigation");const o=document.createElement("button");o.innerHTML="Home";const r=document.createElement("button");r.innerHTML="About Us & Contact",o.addEventListener("click",(function(e){t(),a()})),r.addEventListener("click",(function(){t(),(()=>{const e=document.getElementById("content"),t=document.createElement("h1");t.innerHTML="A little more about us!",e.appendChild(t);const n=["Who?","What?","When?","Where?","Why?","How do I get in touch?"],a=["We're a bunch of enthusiastic empanada lovers from Hyattsville!","We started this restaurant when we realized we needed to make the webpage for our programming assignment","We opened up the page just today, 10/19/23","Well the restaurant is supposed to be in Hyattsville, MD, right off Route 1","We make the best spinach and chicken empanadas, all others we're kinda just ok","Address: 1 Nunya Blvd. Phone: (301) - 555 - 6511, email: nunya@nadaempandada.com"],o=document.createElement("table"),r=document.createElement("tr"),c=document.createElement("th");c.innerHTML="The Big Questions!";const i=document.createElement("th");i.innerHTML="The Average Sized Answers",r.appendChild(c),r.appendChild(i),o.appendChild(r);for(let e=0;e<n.length;e++){const t=document.createElement("tr"),r=document.createElement("td");r.innerHTML=n[e];const c=document.createElement("td");c.innerHTML=a[e],t.appendChild(r),t.appendChild(c),o.appendChild(t)}e.appendChild(o)})()})),n.appendChild(o),n.appendChild(r),document.body.insertBefore(n,e)})(),a()})();