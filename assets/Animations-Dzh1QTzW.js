import{u as v,r as f,P as c,c as r,j as t,d as e,E as d,b as B,p as G,q as N,t as R,s as P,v as j,w as F,x as O,i as m,y as H,m as g,e as o,z as E,l as i,A as M,B as V,h as W,o as p,n as x,f as L,C as b}from"./index-CplmWIIo.js";import{u as U}from"./useThemeStyles-5PosgjHC.js";import{E as _}from"./button-BCLZ4SCd.js";import{E as q}from"./range-j8zNb8M3.js";import{E as z}from"./code_block-DLnWOn4G.js";import"./hex_to_rgb-D4r-UCvZ.js";import"./form_control_layout-SsBD87P6.js";import"./delay_render-Ch35Zyxi.js";const a=({title:n,exportName:y,children:h,code:w})=>t(o,{style:{minWidth:200},children:[t(g,{paddingSize:"l",hasBorder:!0,style:{textAlign:"center",minHeight:140},children:[t(d,{direction:"column",alignItems:"center",justifyContent:"center",style:{height:"100%"},children:[e(o,{grow:!1,children:h}),e(o,{grow:!1,children:e(m,{size:"xs",color:"subdued",children:n})})]}),e(m,{size:"xs",children:y})]}),e(i,{size:"s"}),e(z,{language:"tsx",fontSize:"s",paddingSize:"s",whiteSpace:"pre-wrap",children:w})]});function ie(){const{euiTheme:n}=v(),y=U(n.colors.primary),[h,w]=f.useState(1),[l,T]=f.useState(c.green100),[$,A]=f.useState(!1),[S,k]=f.useState(!1),I=r`
    color: ${l};
    text-shadow: 0 0 ${5*h}px ${l},
      0 0 ${10*h}px ${l},
      0 0 ${20*h}px ${l};
    font-size: 24px;
    font-family: ${n.font.familySerif};
  `,u=r`
    font-family: ${n.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${n.colors.primaryText};
  `;return t(W.Section,{css:r`
        ${$?M:""}
        ${S?V:""}
      `,children:[e(p,{size:"l",children:e("h1",{css:y,children:"Animation Playground"})}),e(i,{size:"s"}),e(m,{color:"subdued",children:e("p",{children:"Interactive demos of all hacker theme animations and effects."})}),e(i,{size:"xl"}),e(p,{size:"xs",children:e("h2",{css:u,children:"Keyframe Animations"})}),e(i,{size:"m"}),t(d,{gutterSize:"l",wrap:!0,children:[e(a,{title:"Blink Animation",exportName:"blinkAnimation",code:"animation: ${blinkAnimation} 1s step-end infinite",children:e("span",{css:r`
              font-size: 32px;
              animation: ${B} 1s step-end infinite;
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
                animation: ${N} 0.3s ease infinite;
              }
            `,children:"HOVER ME"})}),e(a,{title:"Type Animation",exportName:"typeAnimation",code:"animation: ${typeAnimation} 2s steps(20) forwards",children:e("span",{css:r`
              font-family: ${n.font.familyCode};
              font-size: 16px;
              color: ${n.colors.primary};
              overflow: hidden;
              white-space: nowrap;
              animation: ${R} 2s steps(20) forwards;
              border-right: 2px solid ${n.colors.primary};
            `,children:"System initialized..."})})]}),e(i,{size:"xl"}),e(x,{}),e(i,{size:"xl"}),e(p,{size:"xs",children:e("h2",{css:u,children:"CSS-in-JS Utilities"})}),e(i,{size:"m"}),t(d,{gutterSize:"l",wrap:!0,children:[e(a,{title:"Glowing Text",exportName:"glowText()",code:"css`${glowText(euiTheme.colors.primary)}`",children:e("span",{css:[P(n.colors.primary),r`
                font-size: 24px;
              `],children:"Glowing Text"})}),e(a,{title:"Glowing Border",exportName:"glowBorder()",code:"css`${glowBorder(euiTheme.colors.primary)}`",children:e("div",{css:[j(n.colors.primary),r`
                padding: 16px 24px;
                border: 2px solid;
                border-radius: 4px;
                display: inline-block;
              `],children:"Glowing Border"})}),e(a,{title:"Typing Cursor",exportName:"typingCursor",code:"css`${typingCursor}`",children:e("span",{css:[F,r`
                font-size: 18px;
                color: ${n.colors.primary};
              `],children:"Typing cursor"})}),e(a,{title:"Pulsing Indicator",exportName:"pulsingIndicator",code:"css`${pulsingIndicator}`",children:e("div",{css:[O,r`
                width: 16px;
                height: 16px;
                background: ${n.colors.primary};
                border-radius: 50%;
              `]})})]}),e(i,{size:"xl"}),e(x,{}),e(i,{size:"xl"}),e(p,{size:"xs",children:e("h2",{css:u,children:"Terminal Card"})}),e(i,{size:"m"}),e(g,{paddingSize:"l",css:[H,r`
            padding-top: 40px;
          `],children:e(m,{css:r`
            font-family: ${n.font.familyCode};
          `,children:e("pre",{children:`$ whoami
hacker

$ cat /etc/motd
Welcome to the Matrix.
The system is ready.

$ _`})})}),e(i,{size:"s"}),e(m,{size:"xs",children:e("code",{children:"terminalCard"})}),e(i,{size:"xs"}),e(z,{language:"tsx",fontSize:"s",paddingSize:"s",children:"css`${terminalCard}`"}),e(i,{size:"xl"}),e(x,{}),e(i,{size:"xl"}),e(p,{size:"xs",children:e("h2",{css:u,children:"Interactive Glow Effect"})}),e(i,{size:"m"}),t(d,{children:[e(o,{grow:2,children:e(g,{paddingSize:"l",hasBorder:!0,children:e("div",{css:r`
                text-align: center;
                padding: 40px 0;
              `,children:e("span",{css:I,children:"GLOW INTENSITY"})})})}),e(o,{grow:1,children:t(g,{paddingSize:"l",hasBorder:!0,children:[e(E,{label:"Intensity",children:e(q,{min:0,max:3,step:.1,value:h,onChange:s=>w(parseFloat(s.currentTarget.value)),showValue:!0})}),e(i,{size:"m"}),e(E,{label:"Color",children:e(d,{gutterSize:"s",wrap:!0,children:[{color:c.green100,name:"Green"},{color:c.blue100,name:"Cyan"},{color:c.purple100,name:"Purple"},{color:c.red80,name:"Red"},{color:c.amber100,name:"Amber"}].map(({color:s,name:C})=>e(o,{grow:!1,children:e(_,{size:"s",onClick:()=>T(s),fill:l===s,css:r`
                        background-color: ${l===s?s:"transparent"};
                        border-color: ${s};
                        color: ${l===s?c.black:s};
                      `,children:C})},C))})})]})})]}),e(i,{size:"xl"}),e(x,{}),e(i,{size:"xl"}),t(d,{alignItems:"center",gutterSize:"s",children:[e(o,{grow:!1,children:e(p,{size:"xs",children:e("h2",{css:u,children:"CRT Effects"})})}),e(o,{grow:!1,children:e(L,{color:"warning",children:"Experimental"})})]}),e(i,{size:"s"}),e(m,{size:"s",color:"subdued",children:e("p",{children:"Toggle CRT monitor effects on this page"})}),e(i,{size:"m"}),t(d,{children:[e(o,{grow:!1,children:e(b,{label:"Scanlines",checked:$,onChange:s=>A(s.target.checked)})}),e(o,{grow:!1,children:e(b,{label:"Screen Curvature",checked:S,onChange:s=>k(s.target.checked)})})]}),e(i,{size:"m"}),e(z,{language:"tsx",fontSize:"s",paddingSize:"m",children:"// Apply to body or container\ncss`${scanlineEffect}`\ncss`${crtCurvature}`"}),e(i,{size:"xl"}),t(g,{paddingSize:"m",color:"subdued",children:[e(m,{size:"s",children:e("strong",{children:"Usage:"})}),e(i,{size:"s"}),e(z,{language:"tsx",fontSize:"s",paddingSize:"m",isCopyable:!0,children:`import {
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
} from '@p1llus/eui-theme-hacker';`})]})]})}export{ie as default};
