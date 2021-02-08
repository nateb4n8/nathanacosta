(this.webpackJsonpnathanacosta=this.webpackJsonpnathanacosta||[]).push([[0],{56:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(12),i=c.n(n),s=(c(56),c(87)),r=c(48),j=c(97),d=c(2);function l(e){const t=e.children;return Object(d.jsx)("div",{style:{padding:16},children:Object(d.jsx)(s.a,{container:!0,justify:"center",spacing:4,children:Object(d.jsx)(s.a,{container:!0,item:!0,justify:"center",xs:12,md:10,lg:8,xl:6,children:t})})})}var o=c(99),b=c(100),h=c(91),x=c(90),O=c(92),m=c(101),p=c(93),u=c(94);function f(){const e=window.data.education;return Object(d.jsxs)(b.a,{style:{width:"100%"},children:[Object(d.jsx)(x.a,{title:"Education"}),Object(d.jsx)(h.a,{style:{padding:0},children:Object(d.jsx)(O.a,{disablePadding:!0,component:"nav",children:e.map((e=>Object(d.jsxs)(m.a,{button:!0,component:"a",href:e.href,children:[Object(d.jsx)(p.a,{children:Object(d.jsx)(o.a,{alt:"".concat(e.educator," logo"),src:e.image})}),Object(d.jsx)(u.a,{primary:e.educator,secondary:Object(d.jsxs)("span",{children:[e.cert,Object(d.jsx)("br",{}),Object(d.jsx)("small",{children:e.duration})]})})]},e.cert)))})}),Object(d.jsx)("div",{})]})}function g(){const e=window.data.experience;return Object(d.jsxs)(b.a,{style:{width:"100%"},children:[Object(d.jsx)(x.a,{title:"Experience"}),Object(d.jsx)(h.a,{style:{padding:0},children:Object(d.jsx)(O.a,{disablePadding:!0,component:"nav",children:e.map((e=>Object(d.jsxs)(m.a,{button:!0,component:"a",href:e.href,children:[Object(d.jsx)(p.a,{children:Object(d.jsx)(o.a,{alt:"".concat(e.employer," logo"),src:e.image})}),Object(d.jsx)(u.a,{primary:e.title,secondary:Object(d.jsxs)("span",{children:[e.employer,Object(d.jsx)("br",{}),Object(d.jsx)("small",{children:e.duration})]})})]},e.title+e.employer)))})}),Object(d.jsx)("div",{})]})}var w=c(49),y=c(95),v=c(13);const N=Object(y.a)((e=>({avatar:{width:200,height:200,backgroundColor:"#eaeaea",borderStyle:"solid",borderColor:"#eaeaea",borderWidth:10,marginTop:"1rem"},banner:{position:"absolute",zIndex:-1,backgroundColor:e.palette.primary.main,width:"100%"},titles:{color:"#fff",paddingTop:"1rem"}})));function k(){const e=N(),t=Object(a.useState)(0),c=Object(w.a)(t,2),n=c[0],i=c[1];return Object(a.useEffect)((()=>{i(document.getElementById("header").clientHeight)}),[]),Object(d.jsxs)(s.a,{container:!0,direction:"column",alignItems:"center",id:"header",children:[n?Object(d.jsx)("div",{className:e.banner,style:{height:n-105}}):null,Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsxs)("div",{className:e.titles,children:[Object(d.jsx)(v.a,{align:"center",variant:"h4",color:"inherit",children:"Nathan Acosta"}),Object(d.jsx)(v.a,{align:"center",variant:"h5",color:"inherit",children:"Software Engineer"})]})}),Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsx)(o.a,{id:"nathan-avatar",alt:"Nathan Acosta Avatar",src:window.data.header.avatarHref,className:e.avatar})})]})}function E(){return Object(d.jsxs)(b.a,{style:{width:"100%"},children:[Object(d.jsx)(h.a,{children:Object(d.jsx)(v.a,{variant:"body1",align:"left",children:window.data.introduction})}),Object(d.jsx)("div",{})]})}function C(){const e=window.data.proficiencies;return Object(d.jsxs)(b.a,{style:{width:"100%"},children:[Object(d.jsx)(x.a,{title:"Proficiencies"}),Object(d.jsx)(h.a,{children:Object(d.jsx)(s.a,{container:!0,spacing:2,children:e.map((e=>Object(d.jsx)(s.a,{item:!0,xs:12,sm:4,children:e.map((e=>Object(d.jsx)(v.a,{children:e},e)))},e.toString())))})}),Object(d.jsx)("div",{})]})}var I=c(98);const P=Object(y.a)((()=>({card:{width:"100%"},cardContent:{padding:0},avatar:{width:128,height:128}})));function S(){const e=P(),t=window.data.projects;return Object(d.jsxs)(b.a,{className:e.card,children:[Object(d.jsx)(x.a,{title:"Projects"}),Object(d.jsx)(h.a,{className:e.cardContent,children:Object(d.jsx)(O.a,{disablePadding:!0,component:"nav",children:t.map((e=>Object(d.jsxs)(m.a,{button:!0,component:"a",href:e.link,children:[Object(d.jsx)(I.a,{smUp:!0,children:Object(d.jsx)(p.a,{children:Object(d.jsx)(o.a,{src:e.image,alt:"".concat(e.title," screenshot")})})}),Object(d.jsx)(I.a,{xsDown:!0,children:Object(d.jsx)(p.a,{children:Object(d.jsx)(o.a,{src:e.image,alt:"".concat(e.title," screenshot")})})}),Object(d.jsx)(u.a,{primary:e.title,secondary:Object(d.jsxs)("span",{children:[e.desc,Object(d.jsx)("br",{}),Object(d.jsx)("small",{children:e.tech})]})})]},e.title)))})}),Object(d.jsx)("div",{})]})}var A=c(35),B=c(47),H=c(46),z=c(96);function J(){const e=[{href:window.data.social.githubHref,label:"Github",icon:A.a},{href:window.data.social.linkedin,label:"LinkedIn",icon:A.b},{href:"mailto:".concat(window.data.social.email),label:"Email",icon:B.a}];return Object(d.jsx)(l,{children:Object(d.jsx)(s.a,{container:!0,justify:"center",spacing:3,children:e.map((e=>Object(d.jsx)(s.a,{item:!0,children:Object(d.jsx)(z.a,{href:e.href,color:"primary","aria-label":"".concat(e.label," Button"),children:Object(d.jsx)(H.a,{icon:e.icon,size:"2x"})})},e.href)))})})}const T=Object(r.a)({typography:{useNextVariants:!0},palette:{primary:{main:"#1976d2"},secondary:{main:"#ffb74d"}}});function D(){return Object(d.jsxs)(j.a,{theme:T,children:[Object(d.jsx)(k,{}),Object(d.jsx)(J,{}),Object(d.jsx)(l,{children:Object(d.jsxs)(s.a,{container:!0,spacing:2,children:[Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsx)(E,{})}),Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsx)(C,{})}),Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsx)(S,{})}),Object(d.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(g,{})}),Object(d.jsx)(s.a,{item:!0,xs:12,md:6,children:Object(d.jsx)(f,{})})]})})]})}i.a.render(Object(d.jsx)(D,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3d1dbbe9.chunk.js.map