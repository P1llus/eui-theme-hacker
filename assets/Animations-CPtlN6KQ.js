import{P as c,j as t,a as e,b as v,p as G,g as B,t as N,c as R,d as P,e as j,f as F,h as O,s as V,i as H}from"./index-CTQUlAj9.js";import{c as r}from"./vendor-emotion-D5W-U9Ga.js";import{r as f}from"./vendor-react-cvpQPKbX.js";import{u as L}from"./useThemeStyles-CBsmOhDc.js";import{P as M,E as d,u as h,R as g,h as o,o as b,U,p as i,V as W,L as _,j as p,q as x,T as z,v as q,t as T}from"./vendor-eui-B-2A2V66.js";const a=({title:n,exportName:y,children:m,code:w})=>t(o,{style:{minWidth:200},children:[t(g,{paddingSize:"l",hasBorder:!0,style:{textAlign:"center",minHeight:140},children:[t(d,{direction:"column",alignItems:"center",justifyContent:"center",style:{height:"100%"},children:[e(o,{grow:!1,children:m}),e(o,{grow:!1,children:e(h,{size:"xs",color:"subdued",children:n})})]}),e(h,{size:"xs",children:y})]}),e(i,{size:"s"}),e(z,{language:"tsx",fontSize:"s",paddingSize:"s",whiteSpace:"pre-wrap",children:w})]});function X(){const{euiTheme:n}=M(),y=L(n.colors.primary),[m,w]=f.useState(1),[l,E]=f.useState(c.green100),[$,A]=f.useState(!1),[S,k]=f.useState(!1),I=r`
    color: ${l};
    text-shadow: 0 0 ${5*m}px ${l},
      0 0 ${10*m}px ${l},
      0 0 ${20*m}px ${l};
    font-size: 24px;
    font-family: ${n.font.familySerif};
  `,u=r`
    font-family: ${n.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${n.colors.primaryText};
  `;return t(_.Section,{css:r`
        ${$?V:""}
        ${S?H:""}
      `,children:[e(p,{size:"l",children:e("h1",{css:y,children:"Animation Playground"})}),e(i,{size:"s"}),e(h,{color:"subdued",children:e("p",{children:"Interactive demos of all hacker theme animations and effects."})}),e(i,{size:"xl"}),e(p,{size:"xs",children:e("h2",{css:u,children:"Keyframe Animations"})}),e(i,{size:"m"}),t(d,{gutterSize:"l",wrap:!0,children:[e(a,{title:"Blink Animation",exportName:"blinkAnimation",code:"animation: ${blinkAnimation} 1s step-end infinite",children:e("span",{css:r`
              font-size: 32px;
              animation: ${v} 1s step-end infinite;
            `,children:"▋"})}),e(a,{title:"Pulse Animation",exportName:"pulseAnimation",code:"animation: ${pulseAnimation} 2s ease-in-out infinite",children:e("div",{css:r`
              width: 60px;
              height: 60px;
              background: ${n.colors.primary};
              border-radius: 50%;
              animation: ${G} 2s ease-in-out infinite;
            `})}),e(a,{title:"Glitch Animation",exportName:"glitchAnimation",code:"animation: ${glitchAnimation} 0.3s ease infinite",children:e("span",{css:r`
              font-size: 24px;
              font-family: ${n.font.familySerif};
              color: ${n.colors.primary};
              &:hover {
                animation: ${B} 0.3s ease infinite;
              }
            `,children:"HOVER ME"})}),e(a,{title:"Type Animation",exportName:"typeAnimation",code:"animation: ${typeAnimation} 2s steps(20) forwards",children:e("span",{css:r`
              font-family: ${n.font.familyCode};
              font-size: 16px;
              color: ${n.colors.primary};
              overflow: hidden;
              white-space: nowrap;
              animation: ${N} 2s steps(20) forwards;
              border-right: 2px solid ${n.colors.primary};
            `,children:"System initialized..."})})]}),e(i,{size:"xl"}),e(x,{}),e(i,{size:"xl"}),e(p,{size:"xs",children:e("h2",{css:u,children:"CSS-in-JS Utilities"})}),e(i,{size:"m"}),t(d,{gutterSize:"l",wrap:!0,children:[e(a,{title:"Glowing Text",exportName:"glowText()",code:"css`${glowText(euiTheme.colors.primary)}`",children:e("span",{css:[R(n.colors.primary),r`
                font-size: 24px;
              `],children:"Glowing Text"})}),e(a,{title:"Glowing Border",exportName:"glowBorder()",code:"css`${glowBorder(euiTheme.colors.primary)}`",children:e("div",{css:[P(n.colors.primary),r`
                padding: 16px 24px;
                border: 2px solid;
                border-radius: 4px;
                display: inline-block;
              `],children:"Glowing Border"})}),e(a,{title:"Typing Cursor",exportName:"typingCursor",code:"css`${typingCursor}`",children:e("span",{css:[j,r`
                font-size: 18px;
                color: ${n.colors.primary};
              `],children:"Typing cursor"})}),e(a,{title:"Pulsing Indicator",exportName:"pulsingIndicator",code:"css`${pulsingIndicator}`",children:e("div",{css:[F,r`
                width: 16px;
                height: 16px;
                background: ${n.colors.primary};
                border-radius: 50%;
              `]})})]}),e(i,{size:"xl"}),e(x,{}),e(i,{size:"xl"}),e(p,{size:"xs",children:e("h2",{css:u,children:"Terminal Card"})}),e(i,{size:"m"}),e(g,{paddingSize:"l",css:[O,r`
            padding-top: 40px;
          `],children:e(h,{css:r`
            font-family: ${n.font.familyCode};
          `,children:e("pre",{children:`$ whoami
hacker

$ cat /etc/motd
Welcome to the Matrix.
The system is ready.

$ _`})})}),e(i,{size:"s"}),e(h,{size:"xs",children:e("code",{children:"terminalCard"})}),e(i,{size:"xs"}),e(z,{language:"tsx",fontSize:"s",paddingSize:"s",children:"css`${terminalCard}`"}),e(i,{size:"xl"}),e(x,{}),e(i,{size:"xl"}),e(p,{size:"xs",children:e("h2",{css:u,children:"Interactive Glow Effect"})}),e(i,{size:"m"}),t(d,{children:[e(o,{grow:2,children:e(g,{paddingSize:"l",hasBorder:!0,children:e("div",{css:r`
                text-align: center;
                padding: 40px 0;
              `,children:e("span",{css:I,children:"GLOW INTENSITY"})})})}),e(o,{grow:1,children:t(g,{paddingSize:"l",hasBorder:!0,children:[e(b,{label:"Intensity",children:e(U,{min:0,max:3,step:.1,value:m,onChange:s=>w(parseFloat(s.currentTarget.value)),showValue:!0})}),e(i,{size:"m"}),e(b,{label:"Color",children:e(d,{gutterSize:"s",wrap:!0,children:[{color:c.green100,name:"Green"},{color:c.blue100,name:"Cyan"},{color:c.purple100,name:"Purple"},{color:c.red80,name:"Red"},{color:c.amber100,name:"Amber"}].map(({color:s,name:C})=>e(o,{grow:!1,children:e(W,{size:"s",onClick:()=>E(s),fill:l===s,css:r`
                        background-color: ${l===s?s:"transparent"};
                        border-color: ${s};
                        color: ${l===s?c.black:s};
                      `,children:C})},C))})})]})})]}),e(i,{size:"xl"}),e(x,{}),e(i,{size:"xl"}),t(d,{alignItems:"center",gutterSize:"s",children:[e(o,{grow:!1,children:e(p,{size:"xs",children:e("h2",{css:u,children:"CRT Effects"})})}),e(o,{grow:!1,children:e(q,{color:"warning",children:"Experimental"})})]}),e(i,{size:"s"}),e(h,{size:"s",color:"subdued",children:e("p",{children:"Toggle CRT monitor effects on this page"})}),e(i,{size:"m"}),t(d,{children:[e(o,{grow:!1,children:e(T,{label:"Scanlines",checked:$,onChange:s=>A(s.target.checked)})}),e(o,{grow:!1,children:e(T,{label:"Screen Curvature",checked:S,onChange:s=>k(s.target.checked)})})]}),e(i,{size:"m"}),e(z,{language:"tsx",fontSize:"s",paddingSize:"m",children:"// Apply to body or container\ncss`${scanlineEffect}`\ncss`${crtCurvature}`"}),e(i,{size:"xl"}),t(g,{paddingSize:"m",color:"subdued",children:[e(h,{size:"s",children:e("strong",{children:"Usage:"})}),e(i,{size:"s"}),e(z,{language:"tsx",fontSize:"s",paddingSize:"m",isCopyable:!0,children:`import {
  blinkAnimation,
  pulseAnimation,
  glitchAnimation,
  typeAnimation,
  glowText,
  glowBorder,
  typingCursor,
  pulsingIndicator,
  terminalCard,
  scanlineEffect,
  crtCurvature,
} from '@p1llus/eui-theme-hacker';`})]})]})}export{X as default};
