"use strict";(self.webpackChunkdr_rusakova=self.webpackChunkdr_rusakova||[]).push([[960],{6960:function(e,t,s){s.r(t),s.d(t,{default:function(){return pe}});var n=s(2791),i=s(560),r={},o=s(9439),a=s(1087),c=s(7689),l=s(4805),d=s(3168),m=s(8008),u=s(9823),x=[{name:"Home",to:"/"},{name:"About cosmetics",to:"#about"},{name:"Brands",to:"#brands"},{name:"Products",to:"#products"},{name:"Contact",to:"#contact"}],h=s(9523),f=s(8584),p=s(9185),_=(s(6369),s(1458)),j="HeaderCosmetics_flexWrapper__LL-2k",b="HeaderCosmetics_main__UwOjS",g="HeaderCosmetics_header__bp8Xr",v="HeaderCosmetics_wrapper__PterD",Z="HeaderCosmetics_nav__SG6hZ",w="HeaderCosmetics_item__cyIIl",N="HeaderCosmetics_active__7TMvK",C="HeaderCosmetics_nav_mobile__I-czR",y="HeaderCosmetics_showMob__7+GSb",k="HeaderCosmetics_nav_mobile_wrapper__XgYLO",S="HeaderCosmetics_show__zXH+V",B="HeaderCosmetics_mobileLogo__FECnh",H="HeaderCosmetics_btn_open__a9zFF",z="HeaderCosmetics_btn_close__XVCLo",M="HeaderCosmetics_link_items__1giVb",P=s(184),T=function(){var e=(0,d.$)().t,t=(0,l.useMediaQuery)({query:"(min-width: 1280px)"}),s=(0,l.useMediaQuery)({query:"(max-width: 1279px)"}),i=(0,n.useState)(!1),r=(0,o.Z)(i,2),T=r[0],W=r[1],E=(0,n.useState)(""),L=(0,o.Z)(E,2),A=L[0],O=L[1],I=function(){W(!T)};return(0,n.useEffect)((function(){document.body.style.overflow=T?"hidden":"visible"}),[T]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:j,children:(0,P.jsx)("header",{className:g,id:"home",children:(0,P.jsx)(h.Z,{children:(0,P.jsxs)("div",{className:v,children:[(0,P.jsxs)("nav",{className:Z,children:[(0,P.jsx)(a.rU,{to:"/",children:(0,P.jsx)("img",{src:_,alt:"",width:"150",height:"150"})}),t&&(0,P.jsx)(f.Z,{}),s&&(0,P.jsx)("button",{type:"button",className:H,onClick:I,children:(0,P.jsx)(m.Z,{color:"inherit",fontSize:"large"})}),t&&x.map((function(t){var s=t.name,n=t.to;return(0,P.jsx)("div",{children:(0,P.jsx)(a.OL,{to:n,className:A===n?"".concat(w," ").concat(N):"".concat(w),onClick:function(){return"/"!==n?function(e){O(e),window.location.href=e}(n):null},children:e(s)})},s)}))]}),s&&(0,P.jsx)("nav",{onClick:function(e){e.target===e.currentTarget&&W(!T)},className:T?"".concat(C," ").concat(y):C,children:(0,P.jsxs)("div",{className:T?"".concat(k," ").concat(S):k,children:[(0,P.jsx)("button",{type:"button",className:z,onClick:I,children:(0,P.jsx)(u.Z,{color:"inherit",fontSize:"large"})}),(0,P.jsx)("div",{style:{marginBottom:40,paddingTop:20},children:(0,P.jsx)(f.Z,{})}),x.map((function(t){var s=t.name,n=t.to;return(0,P.jsxs)("div",{className:M,children:[(0,P.jsx)(a.OL,{to:n,end:!0,className:A===n?"".concat(w," ").concat(N):"".concat(w),onClick:function(){return"/"!==n?function(e){W(!T),O(e),window.location.href=e}(n):null},children:e(s)}),(0,P.jsx)(a.rU,{to:"/courses",className:B,children:(0,P.jsx)("img",{src:_,alt:"",width:"150",height:"150"})})]},s)}))]})})]})})})}),(0,P.jsx)("main",{className:b,children:(0,P.jsx)(n.Suspense,{fallback:(0,P.jsx)(p.Z,{}),children:(0,P.jsx)(c.j3,{})})})]})},W=(0,n.memo)(T),E=s(6015),L=s(4565),A=s(9926),O=s(2542),I=s(6875),F=s(5194),D=s(199),G={btn:"Products_btn__Tltqt",buy:"Products_buy__fZP8S",buttons:"Products_buttons__cm-jf",imgModal:"Products_imgModal__CBqnN",litters:"Products_litters__fP1Yn",title:"Products_title__Ed-aS",subtitle:"Products_subtitle__4LayV",desc:"Products_desc__rIhfg"},R=s(1413),U=s(4942),X=s(5987),q=s(4164),Q=function(e){var t=e.children,s=e.portal,n=void 0===s?document.body:s;return(0,q.createPortal)(t,n)},V="Modal_Modal__k2+bo",Y="Modal_overlay__MWUMH",$="Modal_content__Ivkch",J="Modal_opened__GsSnX",K="Modal_isClosing__G0QB2",ee=["className","children","isOpen","onClose","lazy","id"],te=function(e){var t,s=e.className,r=e.children,a=e.isOpen,c=e.onClose,l=e.lazy,d=e.id,m=(0,X.Z)(e,ee),u=(0,n.useState)(!1),x=(0,o.Z)(u,2),h=x[0],f=x[1],p=(0,n.useState)(!1),_=(0,o.Z)(p,2),j=_[0],b=_[1],g=(0,n.useRef)(),v=(t={},(0,U.Z)(t,J,a),(0,U.Z)(t,K,h),t),Z=(0,n.useCallback)((function(){c&&(f(!0),g.current=setTimeout((function(){c(),f(!1)}),300))}),[c]),w=(0,n.useCallback)((function(e){e.stopPropagation()}),[]),N=(0,n.useCallback)((function(e){"Escape"===e.key&&Z()}),[Z]);return(0,n.useEffect)((function(){a&&b(!0)}),[a]),(0,n.useEffect)((function(){return a&&window.addEventListener("keydown",N),function(){clearTimeout(g.current),window.removeEventListener("keydown",N)}}),[a,N]),l&&!j?null:(0,P.jsx)(Q,{children:(0,P.jsx)("div",(0,R.Z)((0,R.Z)({className:(0,i.A)(V,v,[s])},m),{},{children:(0,P.jsx)("div",{className:Y,onClick:Z,children:(0,P.jsx)("div",{id:d,className:$,onClick:w,children:r})})}))})},se=(0,n.memo)(te),ne=function(){var e=(0,n.useState)([]),t=(0,o.Z)(e,2),s=t[0],i=t[1],r=(0,n.useState)(null),a=(0,o.Z)(r,2),c=a[0],l=a[1],m=(0,n.useState)(!1),u=(0,o.Z)(m,2),x=u[0],f=u[1],p=(0,d.$)(),_=p.t,j=p.i18n;(0,n.useEffect)((function(){var e=_("cosmetics.list",{returnObjects:!0});i(e)}),[j.language,_]);var b=(0,n.useMemo)((function(){return s.map((function(e,t){return(0,P.jsxs)(O.Z,{sx:{maxWidth:350,width:"100%",display:"flex",flexDirection:"column",backgroundColor:"transparent",paddingBottom:2},children:[(0,P.jsx)(E.Z,{sx:{position:"relative",paddingBottom:"100%",overflow:"hidden",borderRadius:"7px"},children:(0,P.jsx)(D.Z,{sx:{position:"absolute",top:0,bottom:0,left:0,right:0,objectFit:"cover",objectPosition:"center"},component:"img",alt:e.title,height:"140",image:"assets/cosmetics/".concat(e.img)})}),(0,P.jsxs)(F.Z,{sx:{display:"flex",flexDirection:"column",height:"100%",padding:"16px 0"},children:[(0,P.jsx)(L.Z,{gutterBottom:!0,sx:{color:"#ffffff8a",textTransform:"uppercase",fontSize:18},children:e.liters}),(0,P.jsx)(L.Z,{gutterBottom:!0,sx:{fontSize:"1.2rem",marginBottom:2,fontWeight:700,textTransform:"uppercase",color:"white"},children:e.title}),(0,P.jsx)(L.Z,{variant:"body2",color:"text.secondary",sx:{color:"#ffffff8a",flexShrink:1,marginBottom:2},children:e.subtitle}),(0,P.jsx)(L.Z,{variant:"h4",sx:{fontSize:"24px",textAlign:"right",fontWeight:700,marginTop:"auto",color:"white",textTransform:"uppercase"},children:e.price})]}),(0,P.jsx)(I.Z,{className:G.buttons,sx:{padding:0,textTransform:"lowercase",alignItems:"flex-start"},children:(0,P.jsx)(A.Z,{onClick:function(){return g(e.id)},className:G.btn,sx:{fontSize:16,textTransform:"inherit",fontWeight:"normal",border:"none",color:"rgb(202, 151, 61)",opacity:.5},children:_("cosmetics.link")})})]},e.id)}))}),[s,_]),g=function(e){l(e),f(!0),document.body.style.overflow="hidden"},v=(0,n.useMemo)((function(){return s.find((function(e){return e.id===c}))}),[c,s]);return(0,P.jsxs)("section",{id:"products",children:[(0,P.jsx)(h.Z,{children:(0,P.jsxs)(E.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"50px 0"},children:[(0,P.jsx)(L.Z,{variant:"h2",sx:{fontSize:"48px",textAlign:"center",fontWeight:700,marginBottom:"10px",textTransform:"uppercase"},children:_("cosmetics.title")}),(0,P.jsx)(L.Z,{variant:"h4",sx:{fontSize:"18px",textAlign:"center",fontWeight:300,marginBottom:"60px",maxWidth:"600px"},children:_("cosmetics.subtitle")}),(0,P.jsx)(E.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:3,width:"100%"},children:b}),(0,P.jsx)(I.Z,{className:G.buttons,children:(0,P.jsx)("a",{href:"https://www.instagram.com/dr.rusakova.clinic?igsh=bDBpZjJteGE1bm9i",className:G.buy,children:_("courses.link")})})]})}),(0,P.jsx)(se,{lazy:!0,isOpen:x,onClose:function(){l(""),f(!1),document.body.style.overflow=""},className:G.imgModal,children:v&&(0,P.jsx)("div",{className:G.modal,children:(0,P.jsx)("div",{className:G.modal,children:(0,P.jsxs)("div",{className:G.data,children:[(0,P.jsxs)(E.Z,{sx:{position:"relative",paddingBottom:"100%",overflow:"hidden",borderRadius:"7px"},children:[(0,P.jsx)(D.Z,{sx:{position:"absolute",top:0,bottom:0,left:0,right:0,objectFit:"cover",objectPosition:"center"},component:"img",alt:v.title,height:"140",image:"assets/cosmetics/".concat(v.img)}),(0,P.jsx)(L.Z,{className:G.litters,sx:{position:"absolute",bottom:"10px",right:"10px",fontSize:"20px"},children:v.liters})]}),(0,P.jsx)("h3",{className:G.title,children:v.title}),(0,P.jsx)("h3",{className:G.subtitle,children:v.subtitle}),(0,P.jsx)("ul",{className:G.desc,children:v.description.opis.map((function(e){return(0,P.jsx)("li",{children:e})}))}),(0,P.jsx)(L.Z,{variant:"h4",sx:{fontSize:"24px",textAlign:"right",fontWeight:700,marginTop:"auto",color:"black",textTransform:"uppercase"},children:v.price}),(0,P.jsx)(I.Z,{className:G.buttons,children:(0,P.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/dr.rusakova.clinic?igsh=bDBpZjJteGE1bm9i",className:G.buy,children:_("courses.link")})})]})})})})]})},ie=(0,n.memo)(ne),re=s(7839),oe=s(1658),ae=s(4789),ce=s(6485),le=s(8282),de=s(9136),me=(s(1105),{Brands:"Brands_Brands__CuYQc",title:"Brands_title__TzU3z",swiperWrapper:"Brands_swiperWrapper__uj4RR",thumb:"Brands_thumb__C1Wx-"}),ue=function(e){var t=e.className,s=(0,n.useState)([]),r=(0,o.Z)(s,2),a=r[0],c=r[1],l=(0,d.$)(),m=l.t,u=l.i18n;(0,n.useEffect)((function(){var e=m("brands.list",{returnObjects:!0});c(e)}),[u.language,m]);var x=(0,n.useMemo)((function(){return a.map((function(e,t){return(0,P.jsx)(le.jw,{children:(0,P.jsx)("div",{className:me.thumb,children:(0,P.jsx)("img",{alt:e.brandName,src:"assets/brands/".concat(e.brandImg),className:me.splideTest})})},e.brandName)}))}),[a]);return(0,P.jsx)("div",{className:(0,i.A)(me.Brands,{},[t]),id:"brands",children:(0,P.jsxs)("div",{className:me.swiperWrapper,children:[(0,P.jsx)(h.Z,{children:(0,P.jsx)("h2",{className:me.title,children:m("brands.title")})}),(0,P.jsx)(le.tv,{extensions:{AutoScroll:de.l},options:{type:"loop",drag:"free",perPage:4,pagination:!1,arrows:!1,autoScroll:{rewind:!1,speed:.2},breakpoints:{640:{perPage:1,arrows:!0}}},children:x})]})})},xe=(0,n.memo)(ue),he=s(385),fe=function(e){var t=e.className;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(W,{}),(0,P.jsxs)("div",{className:(0,i.A)(r.Cosmetics,{},[t]),children:[(0,P.jsx)(he.Z,{}),(0,P.jsx)(re.ZH,{}),(0,P.jsx)(ce.n9,{}),(0,P.jsx)(xe,{}),(0,P.jsx)(ie,{}),(0,P.jsx)(oe.Z,{}),(0,P.jsx)(ae.Z,{})]})]})},pe=(0,n.memo)(fe)}}]);
//# sourceMappingURL=960.17bae165.chunk.js.map