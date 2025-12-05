import{u as C,r as z,c as u,j as a,d as e,E as T,m as d,e as c,D as A,G as O,bn as j,o as k,f as w,n as I,h as M,l as f,i as y}from"./index-CplmWIIo.js";import{u as W}from"./useThemeStyles-5PosgjHC.js";import{E as x}from"./stat-CCFDuoIj.js";import{E as F}from"./field_search-Cc9F2HHJ.js";import{E as G,a as L}from"./code_block-DLnWOn4G.js";import"./form_control_layout-SsBD87P6.js";import"./delay_render-Ch35Zyxi.js";const V=[{id:"all",name:"All Tokens"},{id:"colors",name:"Colors"},{id:"size",name:"Size & Spacing"},{id:"typography",name:"Typography"},{id:"borders",name:"Borders"},{id:"shadows",name:"Shadows"},{id:"animation",name:"Animation"},{id:"other",name:"Other"}];function $(i,h=""){const s=[];for(const[p,o]of Object.entries(i)){const r=h?`${h}.${p}`:p;if(o!==null&&typeof o=="object"&&!Array.isArray(o))s.push(...$(o,r));else{let n="other";r.includes("color")||r.includes("Color")||r.includes("shade")||r.includes("background")||r.includes("border")&&r.includes("Color")?n="colors":r.includes("size")||r.includes("Size")||r.includes("base")||r.includes("spacing")||r.includes("width")||r.includes("radius")?n="size":r.includes("font")||r.includes("Font")||r.includes("family")||r.includes("weight")||r.includes("scale")?n="typography":r.includes("border")||r.includes("Border")?n="borders":r.includes("shadow")||r.includes("Shadow")?n="shadows":(r.includes("animation")||r.includes("speed")||r.includes("easing"))&&(n="animation"),s.push({path:r,value:o,category:n})}}return s}function R(i){return typeof i!="string"?!1:i.startsWith("#")||i.startsWith("rgb")||i.startsWith("hsl")||i.startsWith("rgba")||i.startsWith("hsla")}function B(i){return typeof i=="string"?i:typeof i=="number"||typeof i=="boolean"?String(i):Array.isArray(i)?JSON.stringify(i):i===null?"null":i===void 0?"undefined":JSON.stringify(i)}function D({path:i,value:h}){const{euiTheme:s}=C(),p=B(h),o=R(h);return e(L,{textToCopy:`euiTheme.${i}`,children:r=>a("div",{onClick:r,title:"Click to copy path",css:u`
            display: grid;
            grid-template-columns: 40px 1fr 120px;
            gap: ${s.size.m};
            align-items: center;
            padding: ${s.size.s} ${s.size.m};
            cursor: pointer;
            border-bottom: 1px solid ${s.colors.lightShade};
            transition: background-color 0.15s ease;
            width: 100%;
            &:hover {
              background-color: ${s.colors.lightestShade};
            }
            &:last-child {
              border-bottom: none;
            }
          `,children:[e("div",{children:o&&e("div",{css:u`
                  width: 24px;
                  height: 24px;
                  border-radius: ${s.border.radius.small};
                  border: 1px solid ${s.colors.lightShade};
                `,style:{backgroundColor:p}})}),e("div",{children:e(w,{color:"hollow",css:u`
                font-family: ${s.font.familyCode};
              `,children:i})}),e(y,{size:"s",css:u`
              font-family: ${s.font.familyCode};
              color: ${o?s.colors.text:s.colors.primary};
              text-align: right;
            `,children:p})]})})}function H(){const{euiTheme:i}=C();return a("div",{css:u`
        display: grid;
        grid-template-columns: 40px 1fr 120px;
        gap: ${i.size.m};
        padding: ${i.size.xs} ${i.size.m};
        border-bottom: 2px solid ${i.colors.lightShade};
      `,children:[e(y,{size:"xs",color:"subdued",children:e("strong",{children:"Sample"})}),e(y,{size:"xs",color:"subdued",children:e("strong",{children:"Token"})}),e(y,{size:"xs",color:"subdued",css:u`
          text-align: right;
        `,children:e("strong",{children:"Value"})})]})}function K(){const{euiTheme:i}=C(),h=W(i.colors.primary),[s,p]=z.useState(""),[o,r]=z.useState("all"),n=u`
    font-family: ${i.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
  `,m=z.useMemo(()=>$(i),[i]),S=z.useMemo(()=>m.filter(t=>{const g=s===""||t.path.toLowerCase().includes(s.toLowerCase())||B(t.value).toLowerCase().includes(s.toLowerCase()),l=o==="all"||t.category===o;return g&&l}),[m,s,o]),E=z.useMemo(()=>{const t={};for(const g of S){const l=g.path.split(".")[0];t[l]||(t[l]=[]),t[l].push(g)}return t},[S]),b=z.useMemo(()=>({total:m.length,colors:m.filter(t=>t.category==="colors").length,size:m.filter(t=>t.category==="size").length,typography:m.filter(t=>t.category==="typography").length,filtered:S.length}),[m,S]);return a(M.Section,{children:[e(k,{size:"l",children:e("h1",{css:h,children:"Token Inspector"})}),e(f,{size:"s"}),e(y,{color:"subdued",children:e("p",{children:"Explore all computed theme tokens. Click any token to copy its access path."})}),e(f,{size:"l"}),a(T,{gutterSize:"l",children:[e(c,{children:e(d,{hasBorder:!0,paddingSize:"m",children:e(x,{title:b.total,description:"Total Tokens",titleColor:"primary",titleSize:"s"})})}),e(c,{children:e(d,{hasBorder:!0,paddingSize:"m",children:e(x,{title:b.colors,description:"Colors",titleColor:"primary",titleSize:"s"})})}),e(c,{children:e(d,{hasBorder:!0,paddingSize:"m",children:e(x,{title:b.size,description:"Size/Spacing",titleColor:"primary",titleSize:"s"})})}),e(c,{children:e(d,{hasBorder:!0,paddingSize:"m",children:e(x,{title:b.typography,description:"Typography",titleColor:"primary",titleSize:"s"})})}),s&&e(c,{grow:!1,children:e(d,{hasBorder:!0,paddingSize:"m",children:e(x,{title:b.filtered,description:"Matches",titleColor:"success",titleSize:"s"})})})]}),e(f,{size:"l"}),e(F,{placeholder:"Search tokens by path or value...",value:s,onChange:t=>p(t.target.value),isClearable:!0,fullWidth:!0}),e(f,{size:"l"}),e(O,{children:V.map(t=>e(A,{isSelected:o===t.id,onClick:()=>r(t.id),children:t.name},t.id))}),e(f,{size:"xl"}),e(T,{direction:"column",gutterSize:"m",children:Object.entries(E).map(([t,g])=>a(c,{children:[e(j,{id:`group-${t}`,arrowDisplay:"none",buttonContent:a(T,{alignItems:"center",gutterSize:"s",children:[e(c,{grow:!1,children:e(k,{size:"xxs",children:e("span",{css:n,children:t})})}),e(c,{grow:!1,children:e(w,{color:"hollow",children:g.length})})]}),paddingSize:"m",initialIsOpen:Object.keys(E).length<=3,children:a(d,{hasBorder:!0,paddingSize:"none",css:u`
                  display: flex;
                  flex-direction: column;
                `,children:[e(H,{}),g.map(l=>e(D,{path:l.path,value:l.value},l.path))]})}),e(I,{margin:"s"})]},t))}),S.length===0&&e(d,{color:"subdued",paddingSize:"l",children:e(y,{textAlign:"center",color:"subdued",children:e("p",{children:"No tokens match your search criteria."})})}),e(f,{size:"xl"}),a(d,{paddingSize:"m",color:"subdued",children:[e(y,{size:"s",children:e("strong",{children:"Usage:"})}),e(f,{size:"s"}),e(G,{language:"tsx",fontSize:"s",paddingSize:"m",isCopyable:!0,children:`import { useEuiTheme } from '@elastic/eui';

function MyComponent() {
  const { euiTheme } = useEuiTheme();
  
  return (
    <div style={{ 
      color: euiTheme.colors.primary,
      fontFamily: euiTheme.font.family,
      padding: euiTheme.size.m,
    }}>
      Themed content using tokens
    </div>
  );
}`})]})]})}export{K as default};
