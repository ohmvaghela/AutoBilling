(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3972],{99875:function(r,e){var o;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var r=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)r.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&r.push(l)}}else if("object"===i){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var a in o)t.call(o,a)&&o[a]&&r.push(a)}}}return r.join(" ")}r.exports?(n.default=n,r.exports=n):void 0===(o=function(){return n}.apply(e,[]))||(r.exports=o)}()},22920:function(r,e,o){"use strict";o.d(e,{q:function(){return Q}});function t(r){var e=function(r){var e=r.theme,o=r.prefix,t={nextPart:new Map,validators:[]};return s(Object.entries(r.classGroups),o).forEach((function(r){var o=r[0];l(r[1],t,o,e)})),t}(r),o=r.conflictingClassGroups,t=r.conflictingClassGroupModifiers,a=void 0===t?{}:t;return{getClassGroupId:function(r){var o=r.split("-");return""===o[0]&&1!==o.length&&o.shift(),n(o,e)||function(r){if(i.test(r)){var e=i.exec(r)[1],o=e?.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}(r)},getConflictingClassGroupIds:function(r,e){var t=o[r]||[];return e&&a[r]?[].concat(t,a[r]):t}}}function n(r,e){if(0===r.length)return e.classGroupId;var o=r[0],t=e.nextPart.get(o),i=t?n(r.slice(1),t):void 0;if(i)return i;if(0!==e.validators.length){var l=r.join("-");return e.validators.find((function(r){return(0,r.validator)(l)}))?.classGroupId}}var i=/^\[(.+)\]$/;function l(r,e,o,t){r.forEach((function(r){if("string"!==typeof r){if("function"===typeof r)return r.isThemeGetter?void l(r(t),e,o,t):void e.validators.push({validator:r,classGroupId:o});Object.entries(r).forEach((function(r){var n=r[0];l(r[1],a(e,n),o,t)}))}else{(""===r?e:a(e,r)).classGroupId=o}}))}function a(r,e){var o=r;return e.split("-").forEach((function(r){o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)})),o}function s(r,e){return e?r.map((function(r){return[r[0],r[1].map((function(r){return"string"===typeof r?e+r:"object"===typeof r?Object.fromEntries(Object.entries(r).map((function(r){var o=r[0],t=r[1];return[e+o,t]}))):r}))]})):r}function c(r){if(r<1)return{get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function n(n,i){o.set(n,i),++e>r&&(e=0,t=o,o=new Map)}return{get:function(r){var e=o.get(r);return void 0!==e?e:void 0!==(e=t.get(r))?(n(r,e),e):void 0},set:function(r,e){o.has(r)?o.set(r,e):n(r,e)}}}function d(r){var e=r.separator||":",o=1===e.length,t=e[0],n=e.length;return function(r){for(var i,l=[],a=0,s=0,c=0;c<r.length;c++){var d=r[c];if(0===a){if(d===t&&(o||r.slice(c,c+n)===e)){l.push(r.slice(s,c)),s=c+n;continue}if("/"===d){i=c;continue}}"["===d?a++:"]"===d&&a--}var u=0===l.length?r:r.substring(s),p=u.startsWith("!");return{modifiers:l,hasImportantModifier:p,baseClassName:p?u.substring(1):u,maybePostfixModifierPosition:i&&i>s?i-s:void 0}}}function u(r){return{cache:c(r.cacheSize),splitModifiers:d(r),...t(r)}}var p=/\s+/;function f(r,e){var o=e.splitModifiers,t=e.getClassGroupId,n=e.getConflictingClassGroupIds,i=new Set;return r.trim().split(p).map((function(r){var e=o(r),n=e.modifiers,i=e.hasImportantModifier,l=e.baseClassName,a=e.maybePostfixModifierPosition,s=t(a?l.substring(0,a):l),c=Boolean(a);if(!s){if(!a)return{isTailwindClass:!1,originalClassName:r};if(!(s=t(l)))return{isTailwindClass:!1,originalClassName:r};c=!1}var d=function(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach((function(r){"["===r[0]?(e.push.apply(e,o.sort().concat([r])),o=[]):o.push(r)})),e.push.apply(e,o.sort()),e}(n).join(":");return{isTailwindClass:!0,modifierId:i?d+"!":d,classGroupId:s,originalClassName:r,hasPostfixModifier:c}})).reverse().filter((function(r){if(!r.isTailwindClass)return!0;var e=r.modifierId,o=r.classGroupId,t=r.hasPostfixModifier,l=e+o;return!i.has(l)&&(i.add(l),n(o,t).forEach((function(r){return i.add(e+r)})),!0)})).reverse().map((function(r){return r.originalClassName})).join(" ")}function b(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=m(r))&&(t&&(t+=" "),t+=e);return t}function m(r){if("string"===typeof r)return r;for(var e,o="",t=0;t<r.length;t++)r[t]&&(e=m(r[t]))&&(o&&(o+=" "),o+=e);return o}function g(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var t,n,i,l=a;function a(r){var o=e[0],a=e.slice(1).reduce((function(r,e){return e(r)}),o());return t=u(a),n=t.cache.get,i=t.cache.set,l=s,s(r)}function s(r){var e=n(r);if(e)return e;var o=f(r,t);return i(r,o),o}return function(){return l(b.apply(null,arguments))}}function h(r){var e=function(e){return e[r]||[]};return e.isThemeGetter=!0,e}var v=/^\[(?:([a-z-]+):)?(.+)\]$/i,y=/^\d+\/\d+$/,x=new Set(["px","full","screen"]),w=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,k=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,z=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function C(r){return M(r)||x.has(r)||y.test(r)||j(r)}function j(r){return $(r,"length",_)}function G(r){return $(r,"size",R)}function P(r){return $(r,"position",R)}function S(r){return $(r,"url",q)}function I(r){return $(r,"number",M)}function M(r){return!Number.isNaN(Number(r))}function N(r){return r.endsWith("%")&&M(r.slice(0,-1))}function E(r){return B(r)||$(r,"number",B)}function O(r){return v.test(r)}function A(){return!0}function T(r){return w.test(r)}function W(r){return $(r,"",D)}function $(r,e,o){var t=v.exec(r);return!!t&&(t[1]?t[1]===e:o(t[2]))}function _(r){return k.test(r)}function R(){return!1}function q(r){return r.startsWith("url(")}function B(r){return Number.isInteger(Number(r))}function D(r){return z.test(r)}function F(){var r=h("colors"),e=h("spacing"),o=h("blur"),t=h("brightness"),n=h("borderColor"),i=h("borderRadius"),l=h("borderSpacing"),a=h("borderWidth"),s=h("contrast"),c=h("grayscale"),d=h("hueRotate"),u=h("invert"),p=h("gap"),f=h("gradientColorStops"),b=h("gradientColorStopPositions"),m=h("inset"),g=h("margin"),v=h("opacity"),y=h("padding"),x=h("saturate"),w=h("scale"),k=h("sepia"),z=h("skew"),$=h("space"),_=h("translate"),R=function(){return["auto",O,e]},q=function(){return[O,e]},B=function(){return["",C]},D=function(){return["auto",M,O]},F=function(){return["","0",O]},H=function(){return[M,I]},J=function(){return[M,O]};return{cacheSize:500,theme:{colors:[A],spacing:[C],blur:["none","",T,O],brightness:H(),borderColor:[r],borderRadius:["none","","full",T,O],borderSpacing:q(),borderWidth:B(),contrast:H(),grayscale:F(),hueRotate:J(),invert:F(),gap:q(),gradientColorStops:[r],gradientColorStopPositions:[N,j],inset:R(),margin:R(),opacity:H(),padding:q(),saturate:H(),scale:H(),sepia:F(),skew:J(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[T]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],[O])}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",E]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:F()}],shrink:[{shrink:F()}],order:[{order:["first","last","none",E]}],"grid-cols":[{"grid-cols":[A]}],"col-start-end":[{col:["auto",{span:["full",E]},O]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[A]}],"row-start-end":[{row:["auto",{span:[E]},O]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal"].concat(["start","end","center","between","around","evenly","stretch"])}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(["start","end","center","between","around","evenly","stretch"],["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(["start","end","center","between","around","evenly","stretch"],["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",O,e]}],"min-w":[{"min-w":["min","max","fit",O,C]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[T]},T,O]}],h:[{h:[O,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",O,C]}],"max-h":[{"max-h":[O,e,"min","max","fit"]}],"font-size":[{text:["base",T,j]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",I]}],"font-family":[{font:[A]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",M,I]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",O,C]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(["solid","dashed","dotted","double","none"],["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",C]}],"underline-offset":[{"underline-offset":["auto",O,C]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],[P])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",G]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},S]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[].concat(["solid","dashed","dotted","double","none"],["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(["solid","dashed","dotted","double","none"])}],"outline-offset":[{"outline-offset":[O,C]}],"outline-w":[{outline:[C]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[C]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",T,W]}],"shadow-color":[{shadow:[A]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",T,O]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:J()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:J()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[E,O]}],"translate-x":[{"translate-x":[_]}],"translate-y":[{"translate-y":[_]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[C,I]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function H(r,e){for(var o in e)L(r,o,e[o]);return r}var J=Object.prototype.hasOwnProperty,K=new Set(["string","number","boolean"]);function L(r,e,o){if(J.call(r,e)&&!K.has(typeof o)&&null!==o){if(Array.isArray(o)&&Array.isArray(r[e]))r[e]=r[e].concat(o);else if("object"===typeof o&&"object"===typeof r[e]){if(null===r[e])return void(r[e]=o);for(var t in o)L(r[e],t,o[t])}}else r[e]=o}function Q(r){for(var e=arguments.length,o=new Array(e>1?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return"function"===typeof r?g.apply(void 0,[F,r].concat(o)):g.apply(void 0,[function(){return H(F(),r)}].concat(o))}}}]);