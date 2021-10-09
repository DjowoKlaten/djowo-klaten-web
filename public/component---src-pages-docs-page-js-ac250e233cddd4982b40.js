"use strict";(self.webpackChunkthefront_js_gatsbyjs=self.webpackChunkthefront_js_gatsbyjs||[]).push([[8101],{35902:function(e,t,n){var r=n(95318);t.Z=void 0;var a=r(n(32174)),o=n(85893),i=(0,a.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=i},90823:function(e,t){t.Z={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"}},92331:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a=n(66449),o=n(67663),i=n(22840),l=n(39211),s=n(67417),c=n(85190),m=n(86810),p=n(78),d=n(36190),g=n(47358),h=function(){var e=(0,a.Z)(),t=e.themeToggler,n=e.palette.mode;return r.createElement(p.Z,{variant:"outlined",onClick:function(){return t()},"aria-label":"Dark mode toggler",color:"light"===n?"primary":"secondary",sx:{borderRadius:2,minWidth:"auto",padding:1,borderColor:(0,o.Fq)(e.palette.divider,.2)}},"light"===n?r.createElement("svg",{width:24,height:24,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})):r.createElement("svg",{width:24,height:24,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})))},u=function(e){var t=e.onSidebarOpen,n=(0,a.Z)(),i=n.palette.mode;return r.createElement(l.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",width:1},r.createElement(l.Z,{display:"flex",component:"a",href:"/",title:"theFront",width:{xs:100,md:120}},r.createElement(l.Z,{component:"img",src:"light"===i?"https://assets.maccarianagency.com/the-front/logos/logo.svg":"https://assets.maccarianagency.com/the-front/logos/logo-negative.svg",height:1,width:1})),r.createElement(l.Z,{sx:{display:{xs:"none",md:"flex"}},alignItems:"center"},r.createElement(l.Z,{marginLeft:3},r.createElement(d.Z,{underline:"none",component:"a",href:"/",color:"text.primary",fontWeight:600},"Home")),r.createElement(l.Z,{marginLeft:3},r.createElement(d.Z,{underline:"none",component:"a",href:"/home",color:"text.primary",fontWeight:600},"All pages")),r.createElement(l.Z,{marginLeft:3},r.createElement(h,null)),r.createElement(l.Z,{marginLeft:3},r.createElement(p.Z,{variant:"contained",color:"primary",component:"a",target:"blank",href:"https://material-ui.com/store/items/the-front-landing-page/",size:"large"},"Purchase now"))),r.createElement(l.Z,{sx:{display:{xs:"flex",md:"none"}},alignItems:"center"},r.createElement(l.Z,{marginRight:2},r.createElement(h,null)),r.createElement(p.Z,{onClick:function(){return t()},"aria-label":"Menu",variant:"outlined",sx:{borderRadius:2,minWidth:"auto",padding:1,borderColor:(0,o.Fq)(n.palette.divider,.2)}},r.createElement(g.Z,null))))},f=n(99465),E=n(49308),Z=n(35902),x=function(e){var t=e.pages,n=e.onClose,i=(0,a.Z)(),s=(0,r.useState)(""),c=s[0],m=s[1];return(0,r.useEffect)((function(){m(window&&window.location?window.location.pathname:"")}),[]),r.createElement(l.Z,{paddingBottom:2},r.createElement(l.Z,{justifyContent:"flex-end",onClick:function(){return n()},display:{xs:"flex",md:"none"}},r.createElement(Z.Z,{fontSize:"small"})),r.createElement(l.Z,{paddingX:2},t.map((function(e,t){return r.createElement(l.Z,{key:t,marginBottom:3},r.createElement(E.Z,{variant:"caption",sx:{fontWeight:700,textTransform:"uppercase",marginBottom:1,display:"block"}},e.groupTitle),r.createElement(l.Z,null,e.pages.map((function(e,t){return r.createElement(l.Z,{marginBottom:.5,key:t},r.createElement(p.Z,{component:"a",href:e.href,target:e.target,fullWidth:!0,sx:{justifyContent:"flex-start",color:c===e.href?i.palette.primary.main:i.palette.text.primary,backgroundColor:c===e.href?(0,o.Fq)(i.palette.primary.main,.1):"transparent",fontWeight:c===e.href?600:400}},e.title))}))))}))),r.createElement(l.Z,null,r.createElement(p.Z,{variant:"outlined",fullWidth:!0,component:"a",href:"/"},"Browse pages")),r.createElement(l.Z,{marginTop:1},r.createElement(p.Z,{variant:"contained",color:"primary",fullWidth:!0,component:"a",target:"blank",href:"https://material-ui.com/store/items/the-front-landing-page/"},"Purchase now")))},y=function(e){var t=e.pages,n=e.open,a=e.variant,o=e.onClose;return r.createElement(f.ZP,{anchor:"left",onClose:function(){return o()},open:n,variant:a,sx:{"& .MuiPaper-root":{width:"100%",maxWidth:256,top:{xs:0,md:67},height:{xs:"100%",md:"calc(100% - 67px)"}}}},r.createElement(l.Z,{sx:{height:"100%",padding:1,paddingTop:{xs:2,sm:3}}},r.createElement(x,{pages:t,onClose:o})))},v=n(4320),k=function(){var e=(0,a.Z)().palette.mode;return r.createElement(v.ZP,{container:!0,spacing:2},r.createElement(v.ZP,{item:!0,xs:12},r.createElement(l.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",width:1,flexDirection:{xs:"column",sm:"row"}},r.createElement(l.Z,{display:"flex",component:"a",href:"/",title:"theFront",width:80},r.createElement(l.Z,{component:"img",src:"light"===e?"https://assets.maccarianagency.com/the-front/logos/logo.svg":"https://assets.maccarianagency.com/the-front/logos/logo-negative.svg",height:1,width:1})),r.createElement(l.Z,{display:"flex",flexWrap:"wrap",alignItems:"center"},r.createElement(l.Z,{marginTop:1,marginRight:2},r.createElement(d.Z,{underline:"none",component:"a",href:"/",color:"text.primary",variant:"subtitle2"},"Home")),r.createElement(l.Z,{marginTop:1,marginRight:2},r.createElement(d.Z,{underline:"none",component:"a",href:"/docs/introduction",color:"text.primary",variant:"subtitle2"},"Documentation")),r.createElement(l.Z,{marginTop:1},r.createElement(p.Z,{variant:"outlined",color:"primary",component:"a",target:"blank",href:"https://material-ui.com/store/items/the-front-landing-page/",size:"small"},"Purchase now"))))),r.createElement(v.ZP,{item:!0,xs:12},r.createElement(E.Z,{align:"center",variant:"subtitle2",color:"text.secondary",gutterBottom:!0},"© theFront. 2021, Maccarian. All rights reserved"),r.createElement(E.Z,{align:"center",variant:"caption",color:"text.secondary",component:"p"},"When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.")))},w=[{groupTitle:"Getting Started",id:"getting-started",pages:[{title:"Introduction",href:"/docs/introduction"},{title:"Quick Start (React Scripts)",href:"/docs/quick-start-react-scripts"},{title:"Quick Start (NextJS)",href:"/docs/quick-start-nextjs"},{title:"Quick Start (GatsbyJS)",href:"/docs/quick-start-gatsbyjs"},{title:"Material-UI",href:"https://next.material-ui.com/",target:"_blank"}]},{groupTitle:"Theme UI",id:"theme-ui",pages:[{title:"Colors",href:"/docs/colors"},{title:"Typography",href:"/docs/typography"},{title:"Shadows",href:"/docs/shadows"},{title:"Page",href:"/docs/page"},{title:"Container",href:"/docs/container"},{title:"Layouts",href:"/docs/layouts"},{title:"Icons",href:"/docs/icons"},{title:"Illustrations",href:"/docs/illustrations"},{title:"Components",href:"https://next.material-ui.com/components/box/",target:"_blank"}]},{groupTitle:"Plugins",id:"plugins",pages:[{title:"AOS Animate",href:"https://michalsnik.github.io/aos/",target:"_blank"},{title:"Formik React Forms",href:"https://formik.org/",target:"_blank"},{title:"React Count Up",href:"https://www.npmjs.com/package/react-countup",target:"_blank"},{title:"Images Carousel and Modals",href:"https://www.npmjs.com/package/react-image-lightbox",target:"_blank"},{title:"Image Lazy Loading",href:"https://www.npmjs.com/package/react-lazy-load-image-component",target:"_blank"},{title:"Image Swiper",href:"https://react-slick.neostack.com/",target:"_blank"},{title:"Typed Text",href:"https://www.npmjs.com/package/react-typed",target:"_blank"},{title:"Visibility Sensor",href:"https://www.npmjs.com/package/react-visibility-sensor",target:"_blank"},{title:"Jarallax",href:"https://www.npmjs.com/package/jarallax",target:"_blank"}]},{groupTitle:"Support & Change Log",id:"support-change-log",pages:[{title:"Support",href:"/docs/support"},{title:"Change Log (v4.1.0)",href:"/docs/change-log"}]}],b=function(e){var t=e.children,n=(0,a.Z)(),p=(0,i.Z)(n.breakpoints.up("md"),{defaultMatches:!0}),d=(0,r.useState)(!1),g=d[0],h=d[1],f=!p&&g;return r.createElement(l.Z,null,r.createElement(c.Z,{position:"fixed",sx:{backgroundColor:n.palette.background.paper,borderBottom:"1px solid "+(0,o.Fq)(n.palette.divider,.1)},elevation:0},r.createElement(m.Z,{maxWidth:1,paddingY:{xs:1,sm:1.5}},r.createElement(u,{onSidebarOpen:function(){h(!0)}}))),r.createElement(y,{onClose:function(){h(!1)},open:f,variant:p?"permanent":"temporary",pages:w}),r.createElement("main",null,r.createElement(l.Z,{height:{xs:58,sm:66}}),r.createElement(l.Z,{display:"flex",flex:"1 1 auto",overflow:"hidden",paddingLeft:{md:"256px"}},r.createElement(l.Z,{display:"flex",flex:"1 1 auto",overflow:"hidden"},r.createElement(l.Z,{flex:"1 1 auto",height:"100%",overflow:"auto"},t,r.createElement(s.Z,null),r.createElement(m.Z,{paddingY:4},r.createElement(k,null)))))))}},62755:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(67294),a=n(89731),o=n(34166),i=n(66449),l=n(90823),s=n(39211),c=n(49308),m=n(92331),p=n(86810),d=function(){var e=(0,i.Z)(),t=function(t,n){return void 0===t&&(t=""),void 0===n&&(n="javascript"),r.createElement(s.Z,{component:a.Z,language:n,style:o.BV,padding:e.spacing(2)+" !important",borderRadius:4,margin:e.spacing(0)+" !important"},t)};return r.createElement(m.Z,null,r.createElement(p.Z,null,r.createElement(s.Z,{marginBottom:4},r.createElement(c.Z,{variant:"h3",gutterBottom:!0,sx:{fontWeight:700}},"Page component"),r.createElement(c.Z,{gutterBottom:!0,sx:{"& code":{background:l.Z[400],color:e.palette.common.black}}},'The "Page" component decraration is inside'," ",r.createElement("code",null,"src/components/Page.js")),r.createElement(c.Z,{gutterBottom:!0,sx:{"& code":{background:l.Z[400],color:e.palette.common.black}}},'The "Page" component is the bootstrap point of the whole app and the parent component of the views and pages.'),r.createElement(c.Z,{sx:{marginBottom:2,"& code":{background:l.Z[400],color:e.palette.common.black}}},"The declaration of the ",r.createElement("code",null,"useDarkMode")," hook, the initialization of the ",r.createElement("code",null,"AOS")," plugin and Material-UI's"," ",r.createElement("code",null,"ThemeProvider"),' are in the "Page" component.'),r.createElement(s.Z,null,t("import React, { useState, useEffect } from 'react';\nimport PropTypes from 'prop-types';\nimport { ThemeProvider } from '@mui/material/styles';\nimport Paper from '@mui/material/Paper';\nimport CssBaseline from '@mui/material/CssBaseline';\nimport getTheme from 'theme';\nimport AOS from 'aos';\n\nexport const useDarkMode = () => {\n\n  ...\n  [The hook logic]\n  ...\n\n  return [themeMode, themeToggler, mountedComponent];\n};\n\nexport default function Page({ children }) {\n  React.useEffect(() => {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector('#jss-server-side');\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n\n    AOS.init({\n      once: true,\n      delay: 50,\n      duration: 500,\n      easing: 'ease-in-out',\n    });\n  }, []);\n\n  const [themeMode, themeToggler, mountedComponent] = useDarkMode();\n\n  useEffect(() => {\n    AOS.refresh();\n  }, [mountedComponent, themeMode]);\n\n  return (\n    <ThemeProvider theme={getTheme(themeMode, themeToggler)}>\n      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}\n      <CssBaseline />\n      <Paper elevation={0}>{children}</Paper>\n    </ThemeProvider>\n  );\n}\n\nPage.propTypes = {\n  children: PropTypes.node.isRequired,\n};\n"))),r.createElement(s.Z,null,r.createElement(c.Z,{variant:"h4",sx:{fontWeight:700,marginBottom:2}},"Example of the use of the Page component"),r.createElement(s.Z,null,t("import React from 'react';\n...\n[Other components import]\n...\n\nimport Page from './components/Page';\n\nconst browserHistory = createBrowserHistory();\n\nconst App = () => {\n  return (\n    <Page>\n      <Router history={browserHistory}>\n        <Routes />\n      </Router>\n    </Page>\n  );\n};\n\nexport default App;")))))},g=function(){return r.createElement(d,null)}}}]);
//# sourceMappingURL=component---src-pages-docs-page-js-ac250e233cddd4982b40.js.map