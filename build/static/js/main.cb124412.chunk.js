(this.webpackJsonpsample_app=this.webpackJsonpsample_app||[]).push([[0],{25:function(e,t,o){},26:function(e,t,o){},33:function(e,t,o){"use strict";o.r(t);var c=o(9),n=o.n(c),a=o(19),s=o.n(a),i=(o(25),o(20)),d=o(17),r=(o(26),o(13)),p=r.a.initializeApp({apiKey:"AIzaSyDdpvRb-5Ep7T9gslvj1spQVevXBj9U-uY",authDomain:"todo-80d71.firebaseapp.com",projectId:"todo-80d71",storageBucket:"todo-80d71.appspot.com",messagingSenderId:"176254510912",appId:"1:176254510912:web:45065e7a931a59f75afca5",measurementId:"G-P4HSTT980F"}).firestore(),l=o(8);var u=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),o=t[0],n=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),u=s[0],j=s[1];return Object(c.useEffect)((function(){p.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){j(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Let's Create TODO App"}),Object(l.jsx)("input",{type:"text",value:o,onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("button",{onClick:function(e){p.collection("todos").add({todo:o,timestamp:r.a.firestore.FieldValue.serverTimestamp()}),j([].concat(Object(i.a)(u),[o])),n("")},disabled:!o,children:"Add"}),Object(l.jsx)("ul",{children:u.map((function(e){return Object(l.jsxs)("div",{className:"task-list",children:[Object(l.jsx)("li",{children:e.todo}),Object(l.jsx)("button",{onClick:function(t){p.collection("todos").doc(e.id).delete()},children:"X"})]})}))})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cb124412.chunk.js.map