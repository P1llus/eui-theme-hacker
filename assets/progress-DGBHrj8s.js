import{c as a,I as i,a5 as R,aE as ce,k as ue,aF as de,a0 as H,aG as ve,aH as Y,aI as d,$ as be,r as C,u as ge,L as B,M as u,N as me,X as G,aJ as fe,W as pe,O as t}from"./index-CplmWIIo.js";var J;function ye(o,r){return r||(r=o.slice(0)),Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(r)}}))}var Z=function(r){return`
  &::-webkit-progress-value {
    `.concat(r,`
  }
  &::-moz-progress-bar {
    `).concat(r,`
  }
`)},Se=function(r){return`
  &::before {
    `.concat(r,`
  }
`)},n=function(r,e,s){var l=e?Z:Se;return`
    `.concat(l("background-color: ".concat(r,";")),`
    `).concat(e&&s==="preferred"?"border-color: ".concat(r,";"):"",`
  `).trim()},U=function(r){return`
  `.concat(i("top",0),`
  `).concat(i("left",0),`
  `).concat(i("right",0),`
  background-color: transparent;
  `).concat(r?`
      &::-webkit-progress-bar {
        background-color: transparent;
      }`:"",`
`)},he=ue(J||(J=ye([`
  0% {
    transform: scaleX(1) translateX(-100%);
  }
  100% {
    transform: scaleX(1) translateX(100%);
  }
`]))),xe={name:"187h6sp-static",styles:"position:relative;label:static;"},Ce=function(r,e){var s=r.euiTheme,l=r.highContrastMode,c=l?s.colors.emptyShade:s.colors.lightShade;return{euiProgress:a("overflow:hidden;background-color:",c,";;label:euiProgress;"),native:a("display:block;",i("width","100%")," &::-webkit-progress-bar{background-color:",c,";}",R(r,{none:`
          appearance: none;
          border: none;
          border-radius: `.concat(s.size.s,`;
        `),preferred:l!=="forced"?`
              border: `.concat(s.border.thin,`;
              border-radius: `).concat(s.size.s,`;
              `).concat(i("min-height",s.size.s),`
            `):i("min-height",s.size.m),forced:"background-color: revert;"})," ",de,`{/* Note: FF/Mozilla doesn't actually support animating the native progress bar
          @see https://bugzilla.mozilla.org/show_bug.cgi?id=662351 */`,Z("transition: width ".concat(s.animation.normal," linear")),";};label:native;"),indeterminate:a("&::before{position:absolute;content:'';",i("width","100%")," ",i("top",0)," ",i("bottom",0)," ",i("left",0)," transform:scaleX(0) translateX(0%);animation:",he," 1s ",s.animation.resistance," infinite;",R(r,{forced:`
            `.concat(i("border-top-style","solid"),`
            `).concat(i("border-top-color","transparent"),`
          `)}),";",ce,`{animation:none;transform:scaleX(1) translateX(0%);background:repeating-linear-gradient(
            -45deg,
            transparent,
            transparent `,s.size.m,`,
            rgb(0, 0, 0, 0.25) `,s.size.m,`,
            rgb(0, 0, 0, 0.25) `,s.size.l,`
          );}};label:indeterminate;`),_sharedSizeCSS:function(v){return`
      `.concat(i("height",v),`
      `).concat(R(r,{forced:`
          &::before {
            `.concat(i("border-top-width",v),`
          }`)}),`
    `)},get xs(){return a(this._sharedSizeCSS(l?s.size.xs:s.size.xxs),";label:xs;")},get s(){return a(this._sharedSizeCSS(s.size.xs),";label:s;")},get m(){return a(this._sharedSizeCSS(s.size.s),";label:m;")},get l(){return a(this._sharedSizeCSS(s.size.m),";label:l;")},fixed:a("position:fixed;z-index:",Number(s.levels.header)+1,";",U(e),";;label:fixed;"),absolute:a("position:absolute;",U(e)," ",i("border-top-left-radius","inherit")," ",i("border-top-right-radius","inherit"),";;label:absolute;"),static:xe,primary:a(n(s.colors.primary,e,l),";;label:primary;"),success:a(n(s.colors.success,e,l),";;label:success;"),warning:a(n(s.colors.warning,e,l),";;label:warning;"),danger:a(n(s.colors.danger,e,l),";;label:danger;"),subdued:a(n(s.colors.textSubdued,e,l),";;label:subdued;"),accent:a(n(s.colors.accent,e,l),";;label:accent;"),accentSecondary:a(n(s.colors.accentSecondary,e,l),";;label:accentSecondary;"),vis0:a(n(s.colors.vis.euiColorVis0,e,l),";;label:vis0;"),vis1:a(n(s.colors.vis.euiColorVis1,e,l),";;label:vis1;"),vis2:a(n(s.colors.vis.euiColorVis2,e,l),";;label:vis2;"),vis3:a(n(s.colors.vis.euiColorVis3,e,l),";;label:vis3;"),vis4:a(n(s.colors.vis.euiColorVis4,e,l),";;label:vis4;"),vis5:a(n(s.colors.vis.euiColorVis5,e,l),";;label:vis5;"),vis6:a(n(s.colors.vis.euiColorVis6,e,l),";;label:vis6;"),vis7:a(n(s.colors.vis.euiColorVis7,e,l),";;label:vis7;"),vis8:a(n(s.colors.vis.euiColorVis8,e,l),";;label:vis8;"),vis9:a(n(s.colors.vis.euiColorVis9,e,l),";;label:vis9;"),customColor:a(n("currentColor",e,l),";;label:customColor;")}},_e=function(r){return{euiProgress__data:a("display:flex;justify-content:space-between;gap:",r.euiTheme.size.xs,";",ve(r.euiTheme)," ",H(r,"xs"),";;label:euiProgress__data;"),l:a(H(r,"s"),";;label:l;")}},Pe={euiProgress__label:a("flex-grow:1;",Y(),";;label:euiProgress__label;")},Te={name:"15ioh86-customColor",styles:"color:currentColor;label:customColor;"},ze=function(r){var e=r.euiTheme;return{euiProgress__valueText:a("flex-grow:1;flex-shrink:0;font-feature-settings:'tnum' 1;",be("right")," ",Y(),";;label:euiProgress__valueText;"),primary:a("color:",e.colors.textPrimary,";;label:primary;"),success:a("color:",e.colors.textSuccess,";;label:success;"),warning:a("color:",e.colors.textWarning,";;label:warning;"),danger:a("color:",e.colors.textDanger,";;label:danger;"),subdued:a("color:",e.colors.textSubdued,";;label:subdued;"),accent:a("color:",e.colors.textAccent,";;label:accent;"),accentSecondary:a("color:",e.colors.textAccentSecondary,";;label:accentSecondary;"),vis0:a("color:",d(e.colors.vis.euiColorVis0)(e),";;label:vis0;"),vis1:a("color:",d(e.colors.vis.euiColorVis1)(e),";;label:vis1;"),vis2:a("color:",d(e.colors.vis.euiColorVis2)(e),";;label:vis2;"),vis3:a("color:",d(e.colors.vis.euiColorVis3)(e),";;label:vis3;"),vis4:a("color:",d(e.colors.vis.euiColorVis4)(e),";;label:vis4;"),vis5:a("color:",d(e.colors.vis.euiColorVis5)(e),";;label:vis5;"),vis6:a("color:",d(e.colors.vis.euiColorVis6)(e),";;label:vis6;"),vis7:a("color:",d(e.colors.vis.euiColorVis7)(e),";;label:vis7;"),vis8:a("color:",d(e.colors.vis.euiColorVis8)(e),";;label:vis8;"),vis9:a("color:",d(e.colors.vis.euiColorVis9)(e),";;label:vis9;"),customColor:Te}},Ve=["className","color","size","position","max","valueText","label","value","labelProps"];function _(){return _=Object.assign?Object.assign.bind():function(o){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var s in e)({}).hasOwnProperty.call(e,s)&&(o[s]=e[s])}return o},_.apply(null,arguments)}function K(o,r){return je(o)||ke(o,r)||Oe(o,r)||we()}function we(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oe(o,r){if(o){if(typeof o=="string")return Q(o,r);var e={}.toString.call(o).slice(8,-1);return e==="Object"&&o.constructor&&(e=o.constructor.name),e==="Map"||e==="Set"?Array.from(o):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Q(o,r):void 0}}function Q(o,r){(r==null||r>o.length)&&(r=o.length);for(var e=0,s=Array(r);e<r;e++)s[e]=o[e];return s}function ke(o,r){var e=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(e!=null){var s,l,c,b,v=[],y=!0,S=!1;try{if(c=(e=e.call(o)).next,r!==0)for(;!(y=(s=c.call(e)).done)&&(v.push(s.value),v.length!==r);y=!0);}catch(P){S=!0,l=P}finally{try{if(!y&&e.return!=null&&(b=e.return(),Object(b)!==b))return}finally{if(S)throw l}}return v}}function je(o){if(Array.isArray(o))return o}function Re(o,r){if(o==null)return{};var e,s,l=Ae(o,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(s=0;s<c.length;s++)e=c[s],r.indexOf(e)>=0||{}.propertyIsEnumerable.call(o,e)&&(l[e]=o[e])}return l}function Ae(o,r){if(o==null)return{};var e={};for(var s in o)if({}.hasOwnProperty.call(o,s)){if(r.indexOf(s)>=0)continue;e[s]=o[s]}return e}var Ie=["primary","success","warning","danger","subdued","accent","accentSecondary","vis0","vis1","vis2","vis3","vis4","vis5","vis6","vis7","vis8","vis9"],Ee=function(r){var e=r.className,s=r.color,l=s===void 0?"success":s,c=r.size,b=c===void 0?"m":c,v=r.position,y=v===void 0?"static":v,S=r.max,P=r.valueText,T=P===void 0?!1:P,h=r.label,z=r.value,m=r.labelProps,A=Re(r,Ve),I=C.useRef(null),E=C.useRef(null),N=C.useState(),$=K(N,2),ee=$[0],re=$[1],se=C.useState(),X=K(se,2),L=X[0],oe=X[1],V=!fe(S),w=Ie.includes(l),O=ge(),F=w?{}:{color:l},ae=w?{}:{color:d(l)(O.euiTheme)},g=Ce(O,V),M=[g.euiProgress,V&&g.native,!V&&g.indeterminate,g[b],g[y],w?g[l]:g.customColor],W=_e(O),le=[W.euiProgress__data,b==="l"&&W[b]],te=[Pe.euiProgress__label,m?.css],q=ze(O),ne=[q.euiProgress__valueText,w?q[l]:g.customColor],D=B("euiProgress",e),ie=B("euiProgress__label",m?.className),p;return T===!0?p=u(pe,{token:"euiProgress.valueText",default:"{value}%",values:{value:z}}):T&&(p=T),C.useEffect(function(){var x,f,k,j;re((x=(f=I.current)===null||f===void 0?void 0:f.textContent)!==null&&x!==void 0?x:""),oe((k=(j=E.current)===null||j===void 0?void 0:j.textContent)!==null&&k!==void 0?k:"")},[h,p,z]),V?u(G.Fragment,null,h||T?u("div",{css:le,className:"euiProgress__data"},h&&u("div",_({ref:function(f){E.current=f}},m,{className:ie,css:te,"aria-hidden":"true"}),h),p&&u("div",{ref:function(f){I.current=f},style:ae,css:ne,className:"euiProgress__valueText","aria-hidden":"true"},p)):void 0,u(me,null,u("div",{"aria-live":"polite","aria-atomic":"true"},u("span",null,h&&u(G.Fragment,null,L," "),p||z))),u("progress",_({css:M,className:D,style:F,max:S,value:z,"aria-valuetext":ee||void 0,"aria-label":L||void 0},A))):u("div",_({css:M,style:F,className:D},A))};Ee.propTypes={className:t.string,"aria-label":t.string,"data-test-subj":t.string,css:t.any,size:t.any,color:t.oneOfType([t.any.isRequired,t.any.isRequired]),position:t.any,max:t.number,valueText:t.oneOfType([t.bool.isRequired,t.node.isRequired]),label:t.node,labelProps:t.shape({className:t.string,"aria-label":t.string,"data-test-subj":t.string,css:t.any})};export{Ee as E};
