import*as e from"react";var t={184:(e,t)=>{var n;!function(){var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},703:(e,t,n)=>{var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};(()=>{r.d(o,{O:()=>h});const t=(e=>{var t={};return r.d(t,e),t})({default:()=>e.default});function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}var a,s=r(697),c=r.n(s),l=r(184),p=r.n(l);var u="object"===typeof window&&window.Element||function(){};c().oneOfType([c().string,c().func,function(e,t,n){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},c().shape({current:c().any})]);var f=c().oneOfType([c().func,c().string,c().shape({$$typeof:c().symbol,render:c().func}),c().arrayOf(c().oneOfType([c().func,c().string,c().shape({$$typeof:c().symbol,render:c().func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;var d=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],b={active:c().bool,"aria-label":c().string,block:c().bool,color:c().string,disabled:c().bool,outline:c().bool,tag:f,innerRef:c().oneOfType([c().object,c().func,c().string]),onClick:c().func,size:c().string,children:c().node,className:c().string,cssModule:c().object,close:c().bool},y=function(e){var r,o;function s(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}o=e,(r=s).prototype=Object.create(o.prototype),r.prototype.constructor=r,i(r,o);var c=s.prototype;return c.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},c.render=function(){var e=this.props,r=e.active,o=e["aria-label"],i=e.block,s=e.className,c=e.close,l=e.cssModule,u=e.color,f=e.outline,b=e.size,y=e.tag,v=e.innerRef,h=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,d);c&&"undefined"===typeof h.children&&(h.children=t.default.createElement("span",{"aria-hidden":!0},"×"));var O="btn"+(f?"-outline":"")+"-"+u,g=function(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}(p()(s,{close:c},c||"btn",c||O,!!b&&"btn-"+b,!!i&&"btn-block",{active:r,disabled:this.props.disabled}),l);h.href&&"button"===y&&(y="a");var m=c?"Close":null;return t.default.createElement(y,n({type:"button"===y&&h.onClick?"button":void 0},h,{className:g,ref:v,onClick:this.onClick,"aria-label":o||m}))},s}(t.default.Component);y.propTypes=b,y.defaultProps={color:"secondary",tag:"button"};const v=y,h=e=>t.default.createElement(v,e,e.value?e.value:"Ahoj, jak se mas?")})();var i=o.O;export{i as MyButton};