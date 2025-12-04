import{P as x,S as w,j as c,a as e}from"./index-CTQUlAj9.js";import{c as t}from"./vendor-emotion-D5W-U9Ga.js";import{r as C}from"./vendor-react-cvpQPKbX.js";import{u as k}from"./useThemeStyles-CBsmOhDc.js";import{P as m,W as E,v as T,X as z,h as p,E as h,R as y,L as v,j as f,p as l,u,T as G,x as P,Y as I}from"./vendor-eui-B-2A2V66.js";const O={"Matrix Greens":{description:"The signature hacker color palette",colors:["green5","green10","green20","green30","green40","green50","green60","green70","green80","green90","green100","green110","green120"]},Backgrounds:{description:"Dark, mysterious backgrounds",colors:["bgDeep","bgDark","bgCard","bgElevated","bgHover"]},Reds:{description:"Danger, alerts, red team",colors:["red20","red40","red60","red80","red100","red120"]},Blues:{description:"Info, links, blue team",colors:["blue20","blue40","blue60","blue80","blue100","blue120"]},Ambers:{description:"Warnings and caution",colors:["amber20","amber40","amber60","amber80","amber100","amber120"]},Purples:{description:"Accent and special states",colors:["purple20","purple40","purple60","purple80","purple100","purple120"]},Neutrals:{description:"Text and UI elements",colors:["gray5","gray10","gray20","gray30","gray40","gray50","gray60","gray70","gray80"]},Glows:{description:"Semi-transparent glow effects",colors:["greenGlow10","greenGlow15","greenGlow25","greenGlow40","redGlow15","redGlow25","blueGlow15","blueGlow25","amberGlow15","purpleGlow15"]},"Pure & Overlay":{description:"Base and overlay colors",colors:["black","white","transparent","blackAlpha50","blackAlpha70","whiteAlpha8","whiteAlpha16"]}},A={"Primary (Green)":{description:"Main brand color - Matrix green",colors:["primary10","primary20","primary30","primary40","primary50","primary60","primary70","primary80","primary90","primary100","primary110","primary120"]},"Accent (Purple)":{description:"Secondary attention color",colors:["accent10","accent20","accent40","accent60","accent80","accent100","accent120"]},"Accent Secondary (Cyan)":{description:"Tertiary accent color",colors:["accentSecondary10","accentSecondary20","accentSecondary40","accentSecondary60","accentSecondary80","accentSecondary100","accentSecondary120"]},Success:{description:"Positive states and confirmations",colors:["success10","success20","success40","success60","success80","success100","success120"]},Warning:{description:"Caution and attention needed",colors:["warning10","warning20","warning40","warning60","warning80","warning100","warning120"]},Danger:{description:"Errors and destructive actions",colors:["danger10","danger20","danger40","danger60","danger80","danger100","danger120"]},Shades:{description:"Background hierarchy and surfaces",colors:["shade10","shade15","shade25","shade40","shade55","shade70","shade90","shade100","shade110","shade120","shade130","shade140","shade145"]}};function R({name:a,value:i,source:o}){const{euiTheme:s}=m(),d=o==="primitive"?`PRIMITIVE_COLORS.${a}`:`SEMANTIC_COLORS.${a}`,r=i.includes("rgba")||i==="transparent";return e(I,{textToCopy:i,children:n=>e(P,{content:c("div",{children:[e("strong",{children:d}),e("br",{}),e("code",{children:i}),e("br",{}),e("em",{children:"Click to copy"})]}),children:c(y,{paddingSize:"s",hasBorder:!0,onClick:n,css:t`
              cursor: pointer;
              text-align: center;
              transition: border-color 0.2s ease;
              height: 130px;
              display: flex;
              flex-direction: column;
              &:hover {
                border-color: ${s.colors.primary};
              }
            `,children:[e("div",{css:t`
                width: 100%;
                height: 60px;
                border-radius: ${s.border.radius.small};
                border: 1px solid ${s.colors.lightShade};
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                overflow: hidden;
                ${r&&`
                  background-image: linear-gradient(45deg, #333 25%, transparent 25%),
                    linear-gradient(-45deg, #333 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #333 75%),
                    linear-gradient(-45deg, transparent 75%, #333 75%);
                  background-size: 10px 10px;
                  background-position: 0 0, 0 5px, 5px -5px, -5px 0px;
                `}
                &:hover {
                  transform: scale(1.02);
                  box-shadow: 0 0 15px ${i};
                }
              `,children:e("div",{css:t`
                  width: 100%;
                  height: 100%;
                  background-color: ${i};
                `})}),e(u,{size:"xs",css:t`
                margin-top: ${s.size.xs};
                word-break: break-all;
                line-height: 1.2;
              `,children:e("code",{children:a})}),e(u,{size:"xs",color:"subdued",css:t`
                font-size: 10px;
                word-break: break-all;
              `,children:i})]})})})}function S({title:a,description:i,colors:o,source:s}){const{euiTheme:d}=m(),r=s==="primitive"?x:w,n=t`
    font-family: ${d.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
  `;return c(y,{paddingSize:"l",hasBorder:!0,children:[c(h,{alignItems:"center",gutterSize:"s",children:[e(p,{grow:!1,children:e(f,{size:"xs",children:e("h3",{css:n,children:a})})}),e(p,{grow:!1,children:c(T,{color:"hollow",children:[o.length," colors"]})})]}),e(u,{size:"s",color:"subdued",children:e("p",{children:i})}),e(l,{size:"m"}),e(h,{wrap:!0,responsive:!0,gutterSize:"m",children:o.map(g=>{const b=r[g];return b?e(p,{grow:!1,style:{width:110},children:e(R,{name:g,value:b,source:s})},g):null})})]})}function D(){const{euiTheme:a}=m(),i=k(a.colors.primary),[o,s]=C.useState("primitive"),d=[{id:"primitive",name:"Primitive Colors",count:Object.keys(x).length},{id:"semantic",name:"Semantic Colors",count:Object.keys(w).length}];return c(v.Section,{children:[e(f,{size:"l",children:e("h1",{css:i,children:"Color Palette"})}),e(l,{size:"s"}),e(u,{color:"subdued",children:e("p",{children:"The complete color system for the 90s Hacker Theme. Click any color to copy its value."})}),e(l,{size:"xl"}),e(z,{children:d.map(r=>c(E,{isSelected:o===r.id,onClick:()=>s(r.id),children:[r.name," ",e(T,{color:"hollow",children:r.count})]},r.id))}),e(l,{size:"xl"}),o==="primitive"&&e(h,{direction:"column",gutterSize:"l",children:Object.entries(O).map(([r,n])=>e(p,{children:e(S,{title:r,description:n.description,colors:n.colors,source:"primitive"})},r))}),o==="semantic"&&e(h,{direction:"column",gutterSize:"l",children:Object.entries(A).map(([r,n])=>e(p,{children:e(S,{title:r,description:n.description,colors:n.colors,source:"semantic"})},r))}),e(l,{size:"xl"}),c(y,{paddingSize:"m",color:"subdued",children:[e(u,{size:"s",children:e("strong",{children:"Usage:"})}),e(l,{size:"s"}),e(G,{language:"tsx",fontSize:"s",paddingSize:"m",isCopyable:!0,children:`import { useEuiTheme } from '@elastic/eui';

function MyComponent() {
  const { euiTheme } = useEuiTheme();
  
  // Access theme colors directly
  const primaryColor = euiTheme.colors.primary;
  const successColor = euiTheme.colors.success;
  
  return (
    <div style={{ color: primaryColor }}>
      Themed content
    </div>
  );
}`})]})]})}export{D as default};
