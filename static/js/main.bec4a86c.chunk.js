(this.webpackJsonpvk_app=this.webpackJsonpvk_app||[]).push([[0],{257:function(e,t){},259:function(e,t){},268:function(e,t){},270:function(e,t){},296:function(e,t){},298:function(e,t){},299:function(e,t){},304:function(e,t){},306:function(e,t){},312:function(e,t){},314:function(e,t){},333:function(e,t){},345:function(e,t){},348:function(e,t){},403:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(56),i=c.n(s),o=c(35),r=c.n(o),a=c(87),d=c.n(a),j=c(156),l=c(58),b=c(9),h=(c(251),c(404)),u=c(405),f=c(406),O=(c(90),c.p+"static/media/coin.3da6cf29.png"),x=c(5),m=function(e){var t=e.id,c=e.go,n=(e.fetchedUser,e.likes),s=e.increment;return Object(x.jsxs)(b.j,{id:t,children:[Object(x.jsx)(b.k,{children:"App"}),Object(x.jsxs)(b.g,{children:[Object(x.jsxs)(b.f,{className:"navigation-bar",children:[Object(x.jsx)(b.d,{size:"l",className:"navigation-button1",stretched:!0,mode:"secondary",before:Object(x.jsx)(h.a,{}),onClick:c,"data-to":"menu",children:"\u041c\u0435\u043d\u044e"}),Object(x.jsx)(b.d,{size:"l",className:"navigation-button2",stretched:!0,mode:"secondary",before:Object(x.jsx)(u.a,{}),onClick:c,"data-to":"top",children:"\u0422\u043e\u043f"}),Object(x.jsx)(b.d,{size:"l",className:"navigation-button3",stretched:!0,mode:"secondary",before:Object(x.jsx)(f.a,{}),onClick:c,"data-to":"store",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"})]}),Object(x.jsx)(b.f,{children:Object(x.jsxs)("h1",{className:"textch",children:["\u0412\u0430\u0448 \u0441\u0447\u0451\u0442: ",n]})})]}),Object(x.jsx)("img",{className:"button-coin",src:O,onClick:s})]})},p=function(e){return Object(x.jsxs)(b.j,{id:e.id,children:[Object(x.jsx)(b.k,{left:Object(x.jsx)(b.l,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0435\u043d\u044e"}),Object(x.jsx)(b.g,{header:Object(x.jsx)(b.h,{mode:"secondary",children:"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c: "}),children:Object(x.jsx)(b.i,{className:"profile_href",href:"https://vk.com/id"+e.fetchedUser.id,children:Object(x.jsx)(b.e,{disabled:!0,before:e.fetchedUser.photo_200?Object(x.jsx)(b.c,{src:e.fetchedUser.photo_200}):null,description:"\u0412\u0430\u0448 id: "+e.fetchedUser.id,children:"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name)})})})]})},g=function(e){return Object(x.jsxs)(b.j,{id:e.id,children:[Object(x.jsx)(b.k,{left:Object(x.jsx)(b.l,{onClick:e.go,"data-to":"home"}),children:"\u0422\u043e\u043f"}),Object(x.jsx)(b.g,{children:Object(x.jsx)(b.f,{children:Object(x.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},k=function(e){return Object(x.jsxs)(b.j,{id:e.id,children:[Object(x.jsx)(b.k,{left:Object(x.jsx)(b.l,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(x.jsx)(b.g,{children:Object(x.jsx)(b.f,{children:Object(x.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},v=function(){var e=Object(n.useState)("home"),t=Object(l.a)(e,2),s=t[0],i=t[1],o=Object(n.useState)(null),a=Object(l.a)(o,2),h=a[0],u=a[1],f=Object(n.useState)(Object(x.jsx)(b.m,{size:"large"})),O=Object(l.a)(f,2),v=O[0],y=O[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,u(t),y(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var U=function(e){i(e.currentTarget.dataset.to)};c(91);return Object(x.jsx)(b.a,{children:Object(x.jsx)(b.b,{children:Object(x.jsxs)(b.n,{activePanel:s,popout:v,children:[Object(x.jsx)(m,{id:"home",fetchedUser:h,go:U,likes:likes,increment:function(){setLikes(likes+1)}}),Object(x.jsx)(p,{id:"menu",fetchedUser:h,go:U}),Object(x.jsx)(g,{id:"top",go:U}),Object(x.jsx)(k,{id:"store",go:U})]})})})};r.a.send("VKWebAppInit"),i.a.render(Object(x.jsx)(v,{}),document.getElementById("root"))},90:function(e,t,c){}},[[403,1,2]]]);
//# sourceMappingURL=main.bec4a86c.chunk.js.map