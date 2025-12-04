import{b as A,j as l,a as e,F as I}from"./index-CTQUlAj9.js";import{c as n,k as b}from"./vendor-emotion-D5W-U9Ga.js";import{f as H,r as S}from"./vendor-react-cvpQPKbX.js";import{u as M}from"./useThemeStyles-CBsmOhDc.js";import{P as w,E as p,h as o,Q as P,v as z,D as B,L as G,u as E,p as r,R as a,S as d,q as T,j as f,T as R}from"./vendor-eui-B-2A2V66.js";const k=b`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,F=b`
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`,Y=[{title:"Dashboard",description:"System monitoring dashboard example",icon:"visGauge",path:"/dashboard"},{title:"Components",description:"See example implementations of EUI components",icon:"grid",path:"/components"},{title:"Animations",description:"Interactive animation and effects playground",icon:"play",path:"/animations",badge:"Interactive"},{title:"Color Palette",description:"Explore all theme color tokens",icon:"color",path:"/colors",badge:"60+ colors"},{title:"Token Inspector",description:"Browse and search all computed theme tokens",icon:"inspect",path:"/tokens",badge:"500+ tokens"},{title:"Typography",description:"Font families, scales, and weights",icon:"editorHeading",path:"/typography"}],v="01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";function j(){const{euiTheme:t}=w(),s=15,h=n`
    position: absolute;
    top: 0;
    font-family: ${t.font.familyCode};
    font-size: 14px;
    color: ${t.colors.primary};
    opacity: 0.3;
    animation: ${F} 8s linear infinite;
    white-space: nowrap;
    pointer-events: none;
  `;return e(I,{children:Array.from({length:s}).map((g,c)=>e("div",{css:[h,n`
              left: ${c/s*100}%;
              animation-delay: ${Math.random()*5}s;
              animation-duration: ${5+Math.random()*5}s;
            `],children:Array.from({length:20}).map((m,u)=>e("div",{children:v[Math.floor(Math.random()*v.length)]},u))},c))})}function q(){const{euiTheme:t}=w(),s=H(),h=M(t.colors.primary),[g,c]=S.useState(""),m="> Initializing 90s Hacker Theme...";S.useEffect(()=>{let i=0;const y=setInterval(()=>{i<=m.length?(c(m.slice(0,i)),i++):clearInterval(y)},50);return()=>clearInterval(y)},[]);const u=n`
    text-align: center;
    padding: ${t.size.xxxl} ${t.size.l};
    position: relative;
    overflow: hidden;
    background: radial-gradient(
      ellipse at center,
      ${t.colors.primary}15 0%,
      transparent 70%
    );
  `,$=n`
    font-family: ${t.font.familySerif};
    font-size: 48px;
    font-weight: ${t.font.weight.bold};
    letter-spacing: 4px;
    margin-bottom: ${t.size.m};
    animation: ${k} 0.8s ease-out;
  `,C=n`
    font-family: ${t.font.familyCode};
    color: ${t.colors.primaryText};
    margin-top: ${t.size.l};
    animation: ${k} 0.8s ease-out 0.4s both;

    &::after {
      content: "▋";
      animation: ${A} 1s step-end infinite;
      margin-left: 4px;
    }
  `,x=n`
    font-family: ${t.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
  `;return l(G.Section,{children:[l("div",{css:u,children:[e(j,{}),e("h1",{css:[$,h],children:"EUI Hacker Theme"}),e(p,{justifyContent:"center",gutterSize:"s",children:e(o,{grow:!1,children:l(z,{color:"hollow",children:["v","0.1.9"]})})}),e(E,{css:C,children:g})]}),e(r,{size:"xxl"}),l(p,{gutterSize:"l",children:[e(o,{children:e(a,{hasBorder:!0,paddingSize:"l",style:{textAlign:"center"},children:e(d,{title:"500+",description:"Theme Tokens",titleColor:"primary",titleSize:"l"})})}),e(o,{children:e(a,{hasBorder:!0,paddingSize:"l",style:{textAlign:"center"},children:e(d,{title:"60+",description:"Component Tokens",titleColor:"primary",titleSize:"l"})})}),e(o,{children:e(a,{hasBorder:!0,paddingSize:"l",style:{textAlign:"center"},children:e(d,{title:"10+",description:"CSS Utilities",titleColor:"primary",titleSize:"l"})})}),e(o,{children:e(a,{hasBorder:!0,paddingSize:"l",style:{textAlign:"center"},children:e(d,{title:"4",description:"Animations",titleColor:"primary",titleSize:"l"})})})]}),e(r,{size:"xxl"}),e(T,{}),e(r,{size:"xxl"}),e(f,{size:"xs",children:e("h2",{css:x,children:"Explore the Theme"})}),e(r,{size:"l"}),e(p,{gutterSize:"l",wrap:!0,children:Y.map(i=>e(o,{grow:1,css:n`
              min-width: 280px;
              max-width: 400px;
              flex-basis: 30%;
            `,children:e(P,{icon:e(B,{type:i.icon,size:"xl",color:"primary"}),title:i.title,description:i.description,onClick:()=>s(i.path),paddingSize:"l",css:n`
                height: 100%;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                &:hover {
                  transform: translateY(-4px);
                  box-shadow: 0 0 20px ${t.colors.primary}30;
                }
              `,footer:i.badge?e(z,{color:"hollow",children:i.badge}):void 0})},i.path))}),e(r,{size:"xxl"}),e(T,{}),e(r,{size:"xxl"}),e(f,{size:"xs",children:e("h2",{css:x,children:"Quick Start"})}),e(r,{size:"l"}),l(p,{children:[e(o,{grow:2,children:e(R,{language:"tsx",fontSize:"m",paddingSize:"l",isCopyable:!0,children:`// Install from npm
npm install @p1llus/eui-theme-hacker
// or with yarn
yarn add @p1llus/eui-theme-hacker

// Use with EuiProvider
import { EuiProvider } from '@elastic/eui';
import { EuiThemeHacker, globalHackerStyles } from '@p1llus/eui-theme-hacker';
import { Global } from '@emotion/react';

function App() {
  return (
    <EuiProvider theme={EuiThemeHacker} colorMode="dark">
      <Global styles={globalHackerStyles} />
      <YourApp />
    </EuiProvider>
  );
}`})}),e(o,{grow:1,children:l(a,{paddingSize:"l",hasBorder:!0,children:[e(f,{size:"s",children:e("h3",{children:"What's Included"})}),e(r,{size:"m"}),e(E,{size:"s",children:l("ul",{children:[e("li",{children:"Complete theme token coverage"}),e("li",{children:"Matrix-green color palette"}),e("li",{children:"Monospace typography"}),e("li",{children:"Glow effects for buttons & forms"}),e("li",{children:"Screen effects (scanlines, curvature)"}),e("li",{children:"CSS-in-JS utilities"}),e("li",{children:"Full TypeScript support"})]})}),e(r,{size:"m"})]})})]}),e(r,{size:"xxl"})]})}export{q as default};
