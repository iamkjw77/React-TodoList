(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{385:function(n,e,t){},389:function(n,e,t){"use strict";t.r(e);t(186),t(196);var r,o,c=t(1),i=t.n(c),a=t(180),d=(t(385),t(11)),u=function(n){return"".concat(n/16,"rem")},l={colors:{black:"#212529",lightGray:"#e9ecef",gray:"#dee2e6",white:"#f8f9fa",violet:"#a61e4d",pink:"#e64980",red:"#e03131",green:"#40c057",blue:"#339af0"},fontSizes:{small:u(14),base:u(16),lg:u(18),xl:u(20),xxl:u(24),xxxl:u(36),titleSize:u(50)},paddings:{small:u(16),base:u(32),lg:u(48),xl:u(64),xxl:u(80),xxxl:u(96)},margins:{small:u(16),base:u(32),lg:u(48),xl:u(64),xxl:u(80),xxxl:u(96)},interval:{base:u(50),lg:u(100),xl:u(150),xxl:u(200)}},s=t(15),f=t(181),b=Object(d.b)(r||(r=Object(s.a)(["\n  ","\n  body {\n    background: ",";\n  }\n"])),f.a,(function(n){return n.theme.colors.black})),h=t(3),m=d.d.div(o||(o=Object(s.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  position: relative;\n  width: 512px;\n  height: 768px;\n  background-color: ",";\n  border-radius: 1rem;\n  margin: 0 auto;\n  margin-top: ",";\n  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.interval.base}));var x,j=function(n){var e=n.children;return Object(h.jsx)(m,{children:e})},g=t(68),p=t(115),O=t(185),v=[{id:1,content:"HTML",completed:!0},{id:2,content:"CSS",completed:!1},{id:3,content:"JS",completed:!1},{id:4,content:"React",completed:!1}],y=function(n,e){switch(e.type){case"CREATE":return[].concat(Object(O.a)(n),[e.todo]);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(p.a)(Object(p.a)({},n),{},{completed:!n.completed}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:throw new Error("Unhandled action type: ".concat(e.type))}},w=i.a.createContext(),k=i.a.createContext(),S=i.a.createContext();function z(n){var e=n.children,t=i.a.useReducer(y,v),r=Object(g.a)(t,2),o=r[0],c=r[1],a=i.a.useRef(5);return Object(h.jsx)(w.Provider,{value:o,children:Object(h.jsx)(k.Provider,{value:c,children:Object(h.jsx)(S.Provider,{value:a,children:e})})})}function E(){var n=i.a.useContext(w);if(!n)throw new Error("Cannot find TodoProvider");return n}function C(){var n=i.a.useContext(k);if(!n)throw new Error("Cannot find TodoProvider");return n}var T=d.d.div(x||(x=Object(s.a)(["\n  padding: ",";\n  border-bottom: ",";\n\n  time {\n    font-size: ",";\n    color: ",";\n    font-weight: bold;\n  }\n\n  .day {\n    display: block;\n    margin-top: ",";\n    color: ",";\n    font-size: ",";\n  }\n\n  .tasks-left {\n    color: ",";\n    font-size: ",";\n    margin-top: ",";\n    font-weight: bold;\n  }\n"])),(function(n){var e=n.theme;return"".concat(e.paddings.lg," ").concat(e.paddings.base," ").concat(e.paddings.small)}),(function(n){var e=n.theme;return"1px solid ".concat(e.colors.gray)}),(function(n){return n.theme.fontSizes.xxxl}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.margins.small}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.fontSizes.base}),(function(n){return n.theme.colors.pink}),(function(n){return n.theme.fontSizes.lg}),(function(n){return n.theme.margins.base}));var R,G,P,M,D,J,L=function(){var n=new Date,e=n.getDay(),t=E().filter((function(n){return!n.completed}));return Object(h.jsxs)(T,{children:[Object(h.jsxs)("time",{children:[n.toString().slice(4,15),Object(h.jsx)("span",{className:"day",children:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]})]}),Object(h.jsxs)("div",{className:"tasks-left",children:["To do left: ",t.length]})]})},A=t(67),F=d.d.div(R||(R=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 1px solid ",";\n  font-size: ",";\n  margin-right: ",";\n  cursor: pointer;\n\n  ","\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.margins.small}),(function(n){return n.done&&Object(d.c)(G||(G=Object(s.a)(["\n      border: 1px solid ",";\n      color: ",";\n    "])),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.green}))})),N=d.d.div(P||(P=Object(s.a)(["\n  flex: 1;\n  font-size: ",";\n  color: ",";\n  ","\n"])),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.colors.black}),(function(n){return n.done&&Object(d.c)(M||(M=Object(s.a)(["\n      color: ",";\n    "])),(function(n){return n.theme.colors.gray}))})),V=d.d.div(D||(D=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  opacity: 0;\n  cursor: pointer;\n  color: ",";\n  font-size: ",";\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.fontSizes.xxl}),(function(n){return n.theme.colors.red})),B=d.d.li(J||(J=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  padding: "," 0;\n  &:hover {\n    "," {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.theme.paddings.small}),V);function H(n){var e=n.id,t=n.done,r=n.text,o=C();return Object(h.jsxs)(B,{id:e,children:[Object(h.jsx)(F,{done:t,onClick:function(){return o({type:"TOGGLE",id:e})},children:t&&Object(h.jsx)(A.c,{})}),Object(h.jsx)(N,{done:t,children:r}),Object(h.jsx)(V,{onClick:function(){return o({type:"REMOVE",id:e})},children:Object(h.jsx)(A.b,{})})]},e)}var I,U=i.a.memo(H),W=d.d.ul(I||(I=Object(s.a)(["\n  flex: 1;\n  padding: ",";\n  overflow-y: auto;\n  /* background-color: ","; */\n"])),(function(n){var e=n.theme;return"".concat(e.paddings.small," ").concat(e.paddings.base," ").concat(e.paddings.lg)}),(function(n){return n.theme.colors.gray}));var q,K,Q,X,Y,Z=function(){var n=E();return Object(h.jsx)(W,{children:n.map((function(n){return Object(h.jsx)(U,{id:n.id,text:n.content,done:n.completed},n.id)}))})},$=d.d.button(q||(q=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translate(-50%, 50%);\n\n  width: 80px;\n  height: 80px;\n  cursor: pointer;\n  z-index: 5;\n  font-size: ",";\n  color: ",";\n  border-radius: 50%;\n\n  border: none;\n  outline: none;\n\n  background: ",";\n  transition: 0.125s all ease-in;\n\n  &:hover {\n    background: ",";\n  }\n  &:active {\n    background: ",";\n  }\n\n  ","\n"])),(function(n){return n.theme.fontSizes.titleSize}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.green}),(function(n){return n.open&&Object(d.c)(K||(K=Object(s.a)(["\n      background: ",";\n      &:hover {\n        background: ",";\n      }\n      &:active {\n        background: ",";\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "])),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.violet}),(function(n){return n.theme.colors.red}))})),_=d.d.div(Q||(Q=Object(s.a)(["\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n"]))),nn=d.d.form(X||(X=Object(s.a)(["\n  background: ",";\n  padding: ",";\n  padding-bottom: ",";\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  border-top: 1px solid ",";\n"])),(function(n){return n.theme.colors.lightGray}),(function(n){return n.theme.paddings.base}),(function(n){return n.theme.paddings.xl}),(function(n){return n.theme.colors.gray})),en=d.d.input(Y||(Y=Object(s.a)(["\n  padding: ",";\n  border-radius: 4px;\n  border: 1px solid ",";\n  width: 100%;\n  outline: none;\n  font-size: ",";\n"])),(function(n){return n.theme.paddings.small}),(function(n){return n.theme.colors.gray}),(function(n){return n.theme.fontSizes.lg}));function tn(){var n=i.a.useState(!1),e=Object(g.a)(n,2),t=e[0],r=e[1],o=i.a.useState(""),c=Object(g.a)(o,2),a=c[0],d=c[1],u=i.a.useRef();i.a.useEffect((function(){t&&u.current.focus()}),[t]);var l=C(),s=function(){var n=i.a.useContext(S);if(!n)throw new Error("Cannot find TodoProvider");return n}();return Object(h.jsxs)(h.Fragment,{children:[t&&Object(h.jsx)(_,{children:Object(h.jsx)(nn,{onSubmit:function(n){n.preventDefault(),l({type:"CREATE",todo:{id:s.current,content:a,completed:!1}}),s.current+=1,d(""),r(!1)},children:Object(h.jsx)(en,{placeholder:"Enter your to-do!",onChange:function(n){d(n.target.value)},value:a,ref:u})})}),Object(h.jsx)($,{onClick:function(){return r(!t)},open:t,children:Object(h.jsx)(A.a,{})})]})}var rn=i.a.memo(tn);var on=function(){return Object(h.jsxs)(d.a,{theme:l,children:[Object(h.jsx)(b,{}),Object(h.jsx)(z,{children:Object(h.jsxs)(j,{children:[Object(h.jsx)(L,{}),Object(h.jsx)(Z,{}),Object(h.jsx)(rn,{})]})})]})};Object(a.render)(Object(h.jsx)(c.StrictMode,{children:Object(h.jsx)(on,{})}),document.getElementById("root"))}},[[389,1,2]]]);
//# sourceMappingURL=main.7a899549.chunk.js.map