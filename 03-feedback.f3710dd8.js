!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,p=Math.max,g=Math.min,b=function(){return v.Date.now()};function y(e,t,n){var r,i,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function S(){var e=b();if(y(e))return j(e);f=setTimeout(S,function(e){var n=t-(e-c);return s?g(n,a-(e-l)):n}(e))}function j(e){return f=void 0,v&&r?m(e):(r=i=void 0,u)}function O(){var e=b(),n=y(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return function(e){return l=e,f=setTimeout(S,t),d?m(e):u}(c);if(s)return f=setTimeout(S,t),m(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=x(t)||0,T(n)&&(d=!!n.leading,a=(s="maxWait"in n)?p(x(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},O.flush=function(){return void 0===f?u:j(b())},O}function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==i}(e))return r;if(T(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=T(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):u.test(e)?r:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return T(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};const S={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textArea:document.querySelector("textarea")},j="feedback-form-state";S.form.addEventListener("input",e(t)((function(e){const t={email:"INPUT"===e.target.nodeName?e.target.value:S.input.value,feedback:"TEXTAREA"===e.target.nodeName?e.target.value:S.textArea.value};localStorage.setItem(j,JSON.stringify(t))}),500)),S.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("email: ",S.input.value),console.log("feedback: ",S.textArea.value),S.form.reset(),localStorage.removeItem(j)})),function(){const e=localStorage.getItem(j);e&&(S.input.value=JSON.parse(e).email,S.textArea.value=JSON.parse(e).feedback)}()}();
//# sourceMappingURL=03-feedback.f3710dd8.js.map