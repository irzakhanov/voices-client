(this["webpackJsonpvoices-client"]=this["webpackJsonpvoices-client"]||[]).push([[0],{15:function(e,c,t){e.exports={header:"header_header__2e_UW",flex:"header_flex__7oaHA",headerLogo:"header_headerLogo__2_FSz"}},30:function(e,c,t){e.exports={btn:"button_btn__3tzkY"}},44:function(e,c,t){},6:function(e,c,t){e.exports={voicesLoading:"voices_voicesLoading__3F-2Z",voicesError:"voices_voicesError__3VxB9",voicesWrap:"voices_voicesWrap__3uEY7",voicesFilter:"voices_voicesFilter__h9gC3",select:"voices_select__1Ol3G",voices:"voices_voices__7n9E0",voice:"voices_voice__2PzX9"}},83:function(e,c,t){"use strict";t.r(c);var n,r=t(0),a=t(12),i=t.n(a),s=t(4),o=(t(43),t(44),t(29)),u=t(5),d=t(9),l=t.n(d),j=t(18),v=t(7),b=t(13),f=t(8),O=t.n(f),h=Object(v.b)("voices/fetch-from-api",function(){var e=Object(j.a)(l.a.mark((function e(c,t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/voices/fetch");case 3:return n=e.sent,e.abrupt("return",n.statusText);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t.rejectWithValue(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(c,t){return e.apply(this,arguments)}}()),p=Object(v.b)("voices/fetch",function(){var e=Object(j.a)(l.a.mark((function e(c,t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/voices");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",t.rejectWithValue(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(c,t){return e.apply(this,arguments)}}()),x=Object(v.c)({name:"voices",initialState:{voices:[],loading:!1,status:"",error:""},extraReducers:(n={},Object(u.a)(n,p.pending,(function(e){e.loading=!0})),Object(u.a)(n,p.fulfilled,(function(e,c){e.loading=!1,e.voices=c.payload})),Object(u.a)(n,p.rejected,(function(e,c){e.error=c.payload,e.loading=!1})),Object(u.a)(n,h.pending,(function(e){e.loading=!0})),Object(u.a)(n,h.fulfilled,(function(e,c){e.status=c.payload,e.loading=!1})),Object(u.a)(n,h.rejected,(function(e,c){e.error=c.payload,e.status="",e.loading=!1})),n)}),g=function(e){return e.voices},_=Object(b.a)(g,(function(e){return e.loading})),m=Object(b.a)(g,(function(e){return e.error})),N=Object(b.a)(g,(function(e){return e.status})),L=Object(b.a)(g,(function(e){var c=new Set;e.voices.forEach((function(e){return c.add(e.language)}));var t,n=[],r=Object(o.a)(c);try{for(r.s();!(t=r.n()).done;){var a=t.value;n.push(a)}}catch(i){r.e(i)}finally{r.f()}return n})),y=x.reducer,w=t(19),E=t(33),k=t(30),F=t.n(k),W=t(1),S=function(e){var c=e.children,t=e.disabled,n=(e.loading,Object(E.a)(e,["children","disabled","loading"]));return Object(W.jsx)("button",Object(w.a)(Object(w.a)({className:F.a.btn},n),{},{disabled:t||!1,children:c}))};S.defaultProps={disabled:!1,loading:!1};var P=t(15),V=t.n(P),z=function(){var e=Object(s.b)(),c=Object(s.c)(_);return Object(W.jsx)("header",{className:V.a.header,children:Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{className:V.a.flex,children:[Object(W.jsx)("div",{className:V.a.headerLogo,children:"Voices"}),Object(W.jsx)(S,{onClick:function(){e(h())},disabled:c||!1,children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"})]})})})},B=t(32),C=t(31),A=t.n(C),G=t(6),J=t.n(G),R=function(e){var c=e.name,t=e.providerLanguage,n=e.sex,r=e.provider,a=e.flags;return Object(W.jsxs)("div",{className:J.a.voice,children:[Object(W.jsxs)("h3",{children:["Name: ",c]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("b",{children:"Language:"})," ",t]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("b",{children:"Sex:"})," ",n]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("b",{children:"Provider:"})," ",r]}),Object(W.jsx)("div",{children:a.map((function(e,c){return Object(W.jsx)("span",{children:e},"".concat(e,"_").concat(c))}))})]})};R.defaultProps={provider:"unknow",flags:[]};var U=R,Y=function(){var e=Object(s.b)(),c=Object(r.useState)("ENG"),t=Object(B.a)(c,2),n=t[0],a=t[1],i=Object(s.c)(function(e){return Object(b.a)(g,(function(c){return c.voices.filter((function(c){return c.language===e}))}))}(n)),o=Object(s.c)(_),u=Object(s.c)(m),d=Object(s.c)(N),l=Object(s.c)(L);Object(r.useEffect)((function(){e(p())}),[e,d]);return o?Object(W.jsx)("div",{className:J.a.voicesLoading,children:Object(W.jsx)(A.a,{type:"Oval",color:"#00BFFF",height:80,width:80})}):u?Object(W.jsx)("div",{className:J.a.voicesError,children:u}):Object(W.jsxs)("div",{className:J.a.voicesWrap,children:[Object(W.jsx)("div",{className:J.a.voicesFilter,children:Object(W.jsx)("select",{onChange:function(e){a(e.target.value)},value:n,className:J.a.select,children:l&&l.map((function(e,c){return Object(W.jsx)("option",{children:e},"".concat(e,"_").concat(c))}))})}),Object(W.jsx)("div",{className:J.a.voices,children:i&&i.map((function(e,c){return Object(W.jsx)(U,{name:e.name,providerLanguage:e.providerLanguage,provider:e.provider,sex:e.sex,flags:e.flags},"".concat(e.id,"_").concat(c))}))})]})};var H=function(){return Object(W.jsxs)("div",{className:"App",children:[Object(W.jsx)(z,{}),Object(W.jsx)("div",{className:"container",children:Object(W.jsx)(Y,{})})]})},I=Object(v.a)({reducer:{voices:y}});O.a.defaults.baseURL="https://voices-server.herokuapp.com",i.a.render(Object(W.jsx)(s.a,{store:I,children:Object(W.jsx)(H,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.9fb89081.chunk.js.map