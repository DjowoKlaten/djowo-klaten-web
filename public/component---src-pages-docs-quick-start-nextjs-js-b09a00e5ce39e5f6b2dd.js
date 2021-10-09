"use strict";(self.webpackChunkthefront_js_gatsbyjs=self.webpackChunkthefront_js_gatsbyjs||[]).push([[2676],{35902:function(e,t,n){var a=n(95318);t.Z=void 0;var r=a(n(32174)),o=n(85893),l=(0,r.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=l},90823:function(e,t){t.Z={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"}},92331:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(67294),r=n(66449),o=n(67663),l=n(22840),i=n(39211),c=n(67417),s=n(85190),m=n(86810),p=n(78),d=n(36190),g=n(47358),u=function(){var e=(0,r.Z)(),t=e.themeToggler,n=e.palette.mode;return a.createElement(p.Z,{variant:"outlined",onClick:function(){return t()},"aria-label":"Dark mode toggler",color:"light"===n?"primary":"secondary",sx:{borderRadius:2,minWidth:"auto",padding:1,borderColor:(0,o.Fq)(e.palette.divider,.2)}},"light"===n?a.createElement("svg",{width:24,height:24,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})):a.createElement("svg",{width:24,height:24,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})))},h=function(e){var t=e.onSidebarOpen,n=(0,r.Z)(),l=n.palette.mode;return a.createElement(i.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",width:1},a.createElement(i.Z,{display:"flex",component:"a",href:"/",title:"theFront",width:{xs:100,md:120}},a.createElement(i.Z,{component:"img",src:"light"===l?"https://assets.maccarianagency.com/the-front/logos/logo.svg":"https://assets.maccarianagency.com/the-front/logos/logo-negative.svg",height:1,width:1})),a.createElement(i.Z,{sx:{display:{xs:"none",md:"flex"}},alignItems:"center"},a.createElement(i.Z,{marginLeft:3},a.createElement(d.Z,{underline:"none",component:"a",href:"/",color:"text.primary",fontWeight:600},"Home")),a.createElement(i.Z,{marginLeft:3},a.createElement(d.Z,{underline:"none",component:"a",href:"/home",color:"text.primary",fontWeight:600},"All pages")),a.createElement(i.Z,{marginLeft:3},a.createElement(u,null)),a.createElement(i.Z,{marginLeft:3},a.createElement(p.Z,{variant:"contained",color:"primary",component:"a",target:"blank",href:"https://material-ui.com/store/items/the-front-landing-page/",size:"large"},"Purchase now"))),a.createElement(i.Z,{sx:{display:{xs:"flex",md:"none"}},alignItems:"center"},a.createElement(i.Z,{marginRight:2},a.createElement(u,null)),a.createElement(p.Z,{onClick:function(){return t()},"aria-label":"Menu",variant:"outlined",sx:{borderRadius:2,minWidth:"auto",padding:1,borderColor:(0,o.Fq)(n.palette.divider,.2)}},a.createElement(g.Z,null))))},f=n(99465),E=n(49308),Z=n(35902),x=function(e){var t=e.pages,n=e.onClose,l=(0,r.Z)(),c=(0,a.useState)(""),s=c[0],m=c[1];return(0,a.useEffect)((function(){m(window&&window.location?window.location.pathname:"")}),[]),a.createElement(i.Z,{paddingBottom:2},a.createElement(i.Z,{justifyContent:"flex-end",onClick:function(){return n()},display:{xs:"flex",md:"none"}},a.createElement(Z.Z,{fontSize:"small"})),a.createElement(i.Z,{paddingX:2},t.map((function(e,t){return a.createElement(i.Z,{key:t,marginBottom:3},a.createElement(E.Z,{variant:"caption",sx:{fontWeight:700,textTransform:"uppercase",marginBottom:1,display:"block"}},e.groupTitle),a.createElement(i.Z,null,e.pages.map((function(e,t){return a.createElement(i.Z,{marginBottom:.5,key:t},a.createElement(p.Z,{component:"a",href:e.href,target:e.target,fullWidth:!0,sx:{justifyContent:"flex-start",color:s===e.href?l.palette.primary.main:l.palette.text.primary,backgroundColor:s===e.href?(0,o.Fq)(l.palette.primary.main,.1):"transparent",fontWeight:s===e.href?600:400}},e.title))}))))}))),a.createElement(i.Z,null,a.createElement(p.Z,{variant:"outlined",fullWidth:!0,component:"a",href:"/"},"Browse pages")),a.createElement(i.Z,{marginTop:1},a.createElement(p.Z,{variant:"contained",color:"primary",fullWidth:!0,component:"a",target:"blank",href:"https://material-ui.com/store/items/the-front-landing-page/"},"Purchase now")))},y=function(e){var t=e.pages,n=e.open,r=e.variant,o=e.onClose;return a.createElement(f.ZP,{anchor:"left",onClose:function(){return o()},open:n,variant:r,sx:{"& .MuiPaper-root":{width:"100%",maxWidth:256,top:{xs:0,md:67},height:{xs:"100%",md:"calc(100% - 67px)"}}}},a.createElement(i.Z,{sx:{height:"100%",padding:1,paddingTop:{xs:2,sm:3}}},a.createElement(x,{pages:t,onClose:o})))},b=n(4320),v=function(){var e=(0,r.Z)().palette.mode;return a.createElement(b.ZP,{container:!0,spacing:2},a.createElement(b.ZP,{item:!0,xs:12},a.createElement(i.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",width:1,flexDirection:{xs:"column",sm:"row"}},a.createElement(i.Z,{display:"flex",component:"a",href:"/",title:"theFront",width:80},a.createElement(i.Z,{component:"img",src:"light"===e?"https://assets.maccarianagency.com/the-front/logos/logo.svg":"https://assets.maccarianagency.com/the-front/logos/logo-negative.svg",height:1,width:1})),a.createElement(i.Z,{display:"flex",flexWrap:"wrap",alignItems:"center"},a.createElement(i.Z,{marginTop:1,marginRight:2},a.createElement(d.Z,{underline:"none",component:"a",href:"/",color:"text.primary",variant:"subtitle2"},"Home")),a.createElement(i.Z,{marginTop:1,marginRight:2},a.createElement(d.Z,{underline:"none",component:"a",href:"/docs/introduction",color:"text.primary",variant:"subtitle2"},"Documentation")),a.createElement(i.Z,{marginTop:1},a.createElement(p.Z,{variant:"outlined",color:"primary",component:"a",target:"blank",href:"https://material-ui.com/store/items/the-front-landing-page/",size:"small"},"Purchase now"))))),a.createElement(b.ZP,{item:!0,xs:12},a.createElement(E.Z,{align:"center",variant:"subtitle2",color:"text.secondary",gutterBottom:!0},"© theFront. 2021, Maccarian. All rights reserved"),a.createElement(E.Z,{align:"center",variant:"caption",color:"text.secondary",component:"p"},"When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.")))},k=[{groupTitle:"Getting Started",id:"getting-started",pages:[{title:"Introduction",href:"/docs/introduction"},{title:"Quick Start (React Scripts)",href:"/docs/quick-start-react-scripts"},{title:"Quick Start (NextJS)",href:"/docs/quick-start-nextjs"},{title:"Quick Start (GatsbyJS)",href:"/docs/quick-start-gatsbyjs"},{title:"Material-UI",href:"https://next.material-ui.com/",target:"_blank"}]},{groupTitle:"Theme UI",id:"theme-ui",pages:[{title:"Colors",href:"/docs/colors"},{title:"Typography",href:"/docs/typography"},{title:"Shadows",href:"/docs/shadows"},{title:"Page",href:"/docs/page"},{title:"Container",href:"/docs/container"},{title:"Layouts",href:"/docs/layouts"},{title:"Icons",href:"/docs/icons"},{title:"Illustrations",href:"/docs/illustrations"},{title:"Components",href:"https://next.material-ui.com/components/box/",target:"_blank"}]},{groupTitle:"Plugins",id:"plugins",pages:[{title:"AOS Animate",href:"https://michalsnik.github.io/aos/",target:"_blank"},{title:"Formik React Forms",href:"https://formik.org/",target:"_blank"},{title:"React Count Up",href:"https://www.npmjs.com/package/react-countup",target:"_blank"},{title:"Images Carousel and Modals",href:"https://www.npmjs.com/package/react-image-lightbox",target:"_blank"},{title:"Image Lazy Loading",href:"https://www.npmjs.com/package/react-lazy-load-image-component",target:"_blank"},{title:"Image Swiper",href:"https://react-slick.neostack.com/",target:"_blank"},{title:"Typed Text",href:"https://www.npmjs.com/package/react-typed",target:"_blank"},{title:"Visibility Sensor",href:"https://www.npmjs.com/package/react-visibility-sensor",target:"_blank"},{title:"Jarallax",href:"https://www.npmjs.com/package/jarallax",target:"_blank"}]},{groupTitle:"Support & Change Log",id:"support-change-log",pages:[{title:"Support",href:"/docs/support"},{title:"Change Log (v4.1.0)",href:"/docs/change-log"}]}],w=function(e){var t=e.children,n=(0,r.Z)(),p=(0,l.Z)(n.breakpoints.up("md"),{defaultMatches:!0}),d=(0,a.useState)(!1),g=d[0],u=d[1],f=!p&&g;return a.createElement(i.Z,null,a.createElement(s.Z,{position:"fixed",sx:{backgroundColor:n.palette.background.paper,borderBottom:"1px solid "+(0,o.Fq)(n.palette.divider,.1)},elevation:0},a.createElement(m.Z,{maxWidth:1,paddingY:{xs:1,sm:1.5}},a.createElement(h,{onSidebarOpen:function(){u(!0)}}))),a.createElement(y,{onClose:function(){u(!1)},open:f,variant:p?"permanent":"temporary",pages:k}),a.createElement("main",null,a.createElement(i.Z,{height:{xs:58,sm:66}}),a.createElement(i.Z,{display:"flex",flex:"1 1 auto",overflow:"hidden",paddingLeft:{md:"256px"}},a.createElement(i.Z,{display:"flex",flex:"1 1 auto",overflow:"hidden"},a.createElement(i.Z,{flex:"1 1 auto",height:"100%",overflow:"auto"},t,a.createElement(c.Z,null),a.createElement(m.Z,{paddingY:4},a.createElement(v,null)))))))}},50069:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(67294),r=n(89731),o=n(34166),l=n(66449),i=n(90823),c=n(39211),s=n(49308),m=n(36190),p=n(92331),d=n(86810),g=function(){var e=(0,l.Z)(),t=function(t,n){return void 0===t&&(t=""),void 0===n&&(n="jsx"),a.createElement(c.Z,{component:r.Z,language:n,style:o.BV,padding:e.spacing(2)+" !important",borderRadius:4,margin:e.spacing(0)+" !important"},t)};return a.createElement(p.Z,null,a.createElement(d.Z,null,a.createElement(c.Z,{marginBottom:4},a.createElement(s.Z,{variant:"h3",sx:{fontWeight:700}},"Quick Start")),a.createElement(c.Z,{marginBottom:4},a.createElement(s.Z,{variant:"h6",gutterBottom:!0,sx:{fontWeight:700}},"1. Requirements"),a.createElement(s.Z,null,"Before proceeding you'll need to have the latest stable"," ",a.createElement(m.Z,{component:"a",href:"https://nodejs.org/en/",target:"blank"},"nodejs"),".")),a.createElement(c.Z,{marginBottom:4},a.createElement(s.Z,{variant:"h6",gutterBottom:!0,sx:{fontWeight:700}},"2. Install"),a.createElement(s.Z,null,"Open the project folder and install its dependencies. You can use any package manager you want. We recommend"," ",a.createElement(m.Z,{component:"a",href:"https://yarnpkg.com/",target:"blank"},"yarn"),". But you can use also"," ",a.createElement(m.Z,{component:"a",href:"https://www.npmjs.com/",target:"blank"},"npm"),"."),a.createElement(c.Z,{marginTop:2},t("cd [project folder]/nextjs\nyarn install","bash"))),a.createElement(c.Z,{marginBottom:4},a.createElement(s.Z,{variant:"h6",gutterBottom:!0,sx:{fontWeight:700}},"3. Start"),a.createElement(s.Z,{sx:{"& code":{background:i.Z[400],color:e.palette.common.black}}},"Once the installation is done, you can now start your app by running"," ",a.createElement("code",null,"npm run dev")," or ",a.createElement("code",null,"yarn dev"),"."),a.createElement(c.Z,{marginY:2},t("yarn dev","bash")),a.createElement(s.Z,{sx:{"& code":{background:i.Z[400],color:e.palette.common.black}}},"This starts a local webserver at ",a.createElement("code",null,"http://localhost:3000")," ","and auto detect file changes:"),a.createElement(c.Z,{marginY:2},t("ready - started server on http://localhost:3000\n\nevent - compiled successfully","bash"))),a.createElement(c.Z,{marginBottom:4},a.createElement(s.Z,{variant:"h6",gutterBottom:!0,sx:{fontWeight:700}},"3. Build"),a.createElement(c.Z,{marginY:2},t("yarn build","bash")),a.createElement(s.Z,{sx:{"& code":{background:i.Z[400],color:e.palette.common.black}}},"You can also use ",a.createElement("code",null,"npm run build"),"."),a.createElement(c.Z,{marginTop:2},a.createElement(c.Z,{padding:1.5,borderLeft:e.spacing(.5)+" solid "+e.palette.divider},a.createElement(s.Z,{variant:"subtitle2"},"This project doesn’t handle backend logic or databases; it is just a frontend, so you can use it with any backend you want."))))))},u=function(){return a.createElement(g,null)}}}]);
//# sourceMappingURL=component---src-pages-docs-quick-start-nextjs-js-b09a00e5ce39e5f6b2dd.js.map