import"./assets/modulepreload-polyfill-3cfb730f.js";const s="feedback-form-state",n=document.querySelector(".feedback-form");n.addEventListener("input",r);n.addEventListener("submit",m);function m(e){e.preventDefault();const t=n.elements.email.value.trim(),a=n.elements.message.value.trim(),o={email:t,message:a};!t||!a||(localStorage.removeItem(s),n.reset(),console.log(o))}function r(){const e=n.elements.email.value.trim(),t=n.elements.message.value.trim();i(s,{email:e,message:t})}function i(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function l(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function c(){const e=l(s);n.elements.email.value=e.email,n.elements.message.value=e.message}c();
//# sourceMappingURL=commonHelpers2.js.map
