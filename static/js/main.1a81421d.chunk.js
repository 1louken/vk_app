(this.webpackJsonpvk_app=this.webpackJsonpvk_app||[]).push([[0],{131:function(e,t,c){},133:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(18),i=c.n(s),r=c(17),a=c.n(r),d=c(26),o=c.n(d),j=c(30),b=c(21),l=c(6),h=(c(130),c(134)),u=c(135),O=c(136),x=(c(131),c(5)),p=function(e){var t=e.id,c=e.go;e.fetchedUser;return Object(x.jsxs)(l.g,{id:t,children:[Object(x.jsx)(l.h,{children:"App"}),Object(x.jsxs)(l.d,{className:"navigation-bar",children:[Object(x.jsx)(l.c,{size:"l",className:"navigation-button1",stretched:!0,mode:"secondary",before:Object(x.jsx)(h.a,{}),onClick:c,"data-to":"menu",children:"\u041c\u0435\u043d\u044e"}),Object(x.jsx)(l.c,{size:"l",className:"navigation-button2",stretched:!0,mode:"secondary",before:Object(x.jsx)(u.a,{}),onClick:c,"data-to":"top",children:"\u0422\u043e\u043f"}),Object(x.jsx)(l.c,{size:"l",className:"navigation-button3",stretched:!0,mode:"secondary",before:Object(x.jsx)(O.a,{}),onClick:c,"data-to":"store",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"})]})]})},f=new URLSearchParams(window.location.search).get("vk_user_id"),m=function(e){return Object(x.jsxs)(l.g,{id:e.id,children:[Object(x.jsx)(l.h,{left:Object(x.jsx)(l.i,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0435\u043d\u044e"}),Object(x.jsx)(l.e,{header:Object(x.jsxs)(l.f,{mode:"secondary",children:["\u0412\u0430\u0448 id: ",f," "]}),children:Object(x.jsx)(l.d,{children:Object(x.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},g=function(e){return Object(x.jsxs)(l.g,{id:e.id,children:[Object(x.jsx)(l.h,{left:Object(x.jsx)(l.i,{onClick:e.go,"data-to":"home"}),children:"\u0422\u043e\u043f"}),Object(x.jsx)(l.e,{children:Object(x.jsx)(l.d,{children:Object(x.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},v=function(e){return Object(x.jsxs)(l.g,{id:e.id,children:[Object(x.jsx)(l.h,{left:Object(x.jsx)(l.i,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(x.jsx)(l.e,{children:Object(x.jsx)(l.d,{children:Object(x.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},k=function(){var e=Object(n.useState)("home"),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),r=Object(b.a)(i,2),d=r[0],h=r[1],u=Object(n.useState)(Object(x.jsx)(l.j,{size:"large"})),O=Object(b.a)(u,2),f=O[0],k=O[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){s(e.currentTarget.dataset.to)};return Object(x.jsx)(l.a,{children:Object(x.jsx)(l.b,{children:Object(x.jsxs)(l.k,{activePanel:c,popout:f,children:[Object(x.jsx)(p,{id:"home",fetchedUser:d,go:y}),Object(x.jsx)(m,{id:"menu",go:y}),Object(x.jsx)(g,{id:"top",go:y}),Object(x.jsx)(v,{id:"store",go:y})]})})})};a.a.send("VKWebAppInit"),i.a.render(Object(x.jsx)(k,{}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.1a81421d.chunk.js.map