(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const d=document.getElementById("name"),l=document.getElementById("fullName"),o=document.getElementById("message"),p=document.querySelector(".btnGenerate"),f=document.querySelector("img"),c=document.querySelector("input"),h=document.querySelector(".btnAnswer"),g=document.querySelector(".message"),y=()=>Math.floor(Math.random()*563),i=t=>{t.classList.remove("invisible")},u=t=>{t.classList.add("invisible")};p.addEventListener("click",()=>{const t=y();u(g),u(d),u(l),c.value="",fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json").then(r=>r.json()).then(r=>{const n=r[t];if(n)n.biography.fullName.length===0?l.innerHTML=`<strong>Fullname</strong>: ${n.name} <br> <strong>Alter Egos</strong>: ${n.biography.alterEgos}`:l.innerHTML=`<strong>Fullname</strong>: ${n.biography.fullName} <br> <strong>Alter Egos</strong>: ${n.biography.alterEgos} `,f.src=n.images.md,d.innerHTML=n.name,i(f),i(c);else throw new Error("Database error, click again")}).catch(r=>{o.innerHTML=r.message,i(g),o.classList.remove("invisible")})});c.addEventListener("keyup",t=>{t.keyCode===13&&h.click()});h.addEventListener("click",()=>{o.innerHTML="",i(g),i(o);const t=c.value.toLowerCase();fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json").then(r=>r.json()).then(r=>{const n=r.find(({name:a})=>a===d.innerText);(n.name.toLowerCase().includes(t)||n.biography.fullName.toLowerCase().includes(t))&&t.length>3?(u(c),o.innerHTML=' <img src="https://www.svgrepo.com/show/207509/checked-tick.svg" alt="correct" srcset="">Congratulations, you got it right!',i(d),i(l)):t.length<=2?o.innerHTML='<img src="https://www.svgrepo.com/show/207510/cancel.svg" alt="error" srcset=""> Enter at least 3 letters':o.innerHTML='<img src="https://www.svgrepo.com/show/207510/cancel.svg" alt="error" srcset=""> Sorry you made a mistake, please try again.'})});
