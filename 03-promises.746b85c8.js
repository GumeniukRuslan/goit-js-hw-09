function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form"),u=l.querySelector('[name="delay"]'),a=l.querySelector('[name="step"]'),s=l.querySelector('[name="amount"]');function d(e,n){return new Promise(((t,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function f(n){e(i).Notify.success(`✅ Fulfilled promise ${n.position} in ${n.delay}ms`)}function c(n){e(i).Notify.failure(`❌ Rejected promise ${n.position} in ${n.delay}ms`)}l.addEventListener("submit",(function(n){n.preventDefault(),function(n,t,o){n||e(i).Report.failure("Amount cannot be lesser than 1!","","Sorry!");let r=t;for(let e=1;e<=n;e++)d(e,r).then(f,c),r+=o}(parseInt(s.value),parseInt(u.value),parseInt(a.value))}));
//# sourceMappingURL=03-promises.746b85c8.js.map