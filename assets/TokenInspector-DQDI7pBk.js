import{j as a,a as e}from"./index-CTQUlAj9.js";import{c as u}from"./vendor-emotion-D5W-U9Ga.js";import{r as z}from"./vendor-react-cvpQPKbX.js";import{u as j}from"./useThemeStyles-CBsmOhDc.js";import{P as C,E as x,R as d,S as T,h as c,W as A,X as O,ap as W,j as k,v as w,q as I,L,p as f,u as y,an as M,T as F,Y as G}from"./vendor-eui-B-2A2V66.js";const R=[{id:"all",name:"All Tokens"},{id:"colors",name:"Colors"},{id:"size",name:"Size & Spacing"},{id:"typography",name:"Typography"},{id:"borders",name:"Borders"},{id:"shadows",name:"Shadows"},{id:"animation",name:"Animation"},{id:"other",name:"Other"}];function $(i,h=""){const s=[];for(const[p,o]of Object.entries(i)){const r=h?`${h}.${p}`:p;if(o!==null&&typeof o=="object"&&!Array.isArray(o))s.push(...$(o,r));else{let n="other";r.includes("color")||r.includes("Color")||r.includes("shade")||r.includes("background")||r.includes("border")&&r.includes("Color")?n="colors":r.includes("size")||r.includes("Size")||r.includes("base")||r.includes("spacing")||r.includes("width")||r.includes("radius")?n="size":r.includes("font")||r.includes("Font")||r.includes("family")||r.includes("weight")||r.includes("scale")?n="typography":r.includes("border")||r.includes("Border")?n="borders":r.includes("shadow")||r.includes("Shadow")?n="shadows":(r.includes("animation")||r.includes("speed")||r.includes("easing"))&&(n="animation"),s.push({path:r,value:o,category:n})}}return s}function V(i){return typeof i!="string"?!1:i.startsWith("#")||i.startsWith("rgb")||i.startsWith("hsl")||i.startsWith("rgba")||i.startsWith("hsla")}function B(i){return typeof i=="string"?i:typeof i=="number"||typeof i=="boolean"?String(i):Array.isArray(i)?JSON.stringify(i):i===null?"null":i===void 0?"undefined":JSON.stringify(i)}function P({path:i,value:h}){const{euiTheme:s}=C(),p=B(h),o=V(h);return e(G,{textToCopy:`euiTheme.${i}`,children:r=>a("div",{onClick:r,title:"Click to copy path",css:u`
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
            `,children:p})]})})}function v(){const{euiTheme:i}=C();return a("div",{css:u`
        display: grid;
        grid-template-columns: 40px 1fr 120px;
        gap: ${i.size.m};
        padding: ${i.size.xs} ${i.size.m};
        border-bottom: 2px solid ${i.colors.lightShade};
      `,children:[e(y,{size:"xs",color:"subdued",children:e("strong",{children:"Sample"})}),e(y,{size:"xs",color:"subdued",children:e("strong",{children:"Token"})}),e(y,{size:"xs",color:"subdued",css:u`
          text-align: right;
        `,children:e("strong",{children:"Value"})})]})}function N(){const{euiTheme:i}=C(),h=j(i.colors.primary),[s,p]=z.useState(""),[o,r]=z.useState("all"),n=u`
    font-family: ${i.font.familySerif};
    letter-spacing: 2px;
    text-transform: uppercase;
  `,m=z.useMemo(()=>$(i),[i]),S=z.useMemo(()=>m.filter(t=>{const g=s===""||t.path.toLowerCase().includes(s.toLowerCase())||B(t.value).toLowerCase().includes(s.toLowerCase()),l=o==="all"||t.category===o;return g&&l}),[m,s,o]),E=z.useMemo(()=>{const t={};for(const g of S){const l=g.path.split(".")[0];t[l]||(t[l]=[]),t[l].push(g)}return t},[S]),b=z.useMemo(()=>({total:m.length,colors:m.filter(t=>t.category==="colors").length,size:m.filter(t=>t.category==="size").length,typography:m.filter(t=>t.category==="typography").length,filtered:S.length}),[m,S]);return a(L.Section,{children:[e(k,{size:"l",children:e("h1",{css:h,children:"Token Inspector"})}),e(f,{size:"s"}),e(y,{color:"subdued",children:e("p",{children:"Explore all computed theme tokens. Click any token to copy its access path."})}),e(f,{size:"l"}),a(x,{gutterSize:"l",children:[e(c,{children:e(d,{hasBorder:!0,paddingSize:"m",children:e(T,{title:b.total,description:"Total Tokens",titleColor:"primary",titleSize:"s"})})}),e(c,{children:e(d,{hasBorder:!0,paddingSize:"m",children:e(T,{title:b.colors,description:"Colors",titleColor:"primary",titleSize:"s"})})}),e(c,{children:e(d,{hasBorder:!0,paddingSize:"m",children:e(T,{title:b.size,description:"Size/Spacing",titleColor:"primary",titleSize:"s"})})}),e(c,{children:e(d,{hasBorder:!0,paddingSize:"m",children:e(T,{title:b.typography,description:"Typography",titleColor:"primary",titleSize:"s"})})}),s&&e(c,{grow:!1,children:e(d,{hasBorder:!0,paddingSize:"m",children:e(T,{title:b.filtered,description:"Matches",titleColor:"success",titleSize:"s"})})})]}),e(f,{size:"l"}),e(M,{placeholder:"Search tokens by path or value...",value:s,onChange:t=>p(t.target.value),isClearable:!0,fullWidth:!0}),e(f,{size:"l"}),e(O,{children:R.map(t=>e(A,{isSelected:o===t.id,onClick:()=>r(t.id),children:t.name},t.id))}),e(f,{size:"xl"}),e(x,{direction:"column",gutterSize:"m",children:Object.entries(E).map(([t,g])=>a(c,{children:[e(W,{id:`group-${t}`,arrowDisplay:"none",buttonContent:a(x,{alignItems:"center",gutterSize:"s",children:[e(c,{grow:!1,children:e(k,{size:"xxs",children:e("span",{css:n,children:t})})}),e(c,{grow:!1,children:e(w,{color:"hollow",children:g.length})})]}),paddingSize:"m",initialIsOpen:Object.keys(E).length<=3,children:a(d,{hasBorder:!0,paddingSize:"none",css:u`
                  display: flex;
                  flex-direction: column;
                `,children:[e(v,{}),g.map(l=>e(P,{path:l.path,value:l.value},l.path))]})}),e(I,{margin:"s"})]},t))}),S.length===0&&e(d,{color:"subdued",paddingSize:"l",children:e(y,{textAlign:"center",color:"subdued",children:e("p",{children:"No tokens match your search criteria."})})}),e(f,{size:"xl"}),a(d,{paddingSize:"m",color:"subdued",children:[e(y,{size:"s",children:e("strong",{children:"Usage:"})}),e(f,{size:"s"}),e(F,{language:"tsx",fontSize:"s",paddingSize:"m",isCopyable:!0,children:`import { useEuiTheme } from '@elastic/eui';

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
}`})]})]})}export{N as default};
