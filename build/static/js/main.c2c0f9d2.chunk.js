(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,function(e,t,n){e.exports={button:"Feedback_button__2yDdE",buttonContainer:"Feedback_buttonContainer__Ank1A"}},,function(e,t,n){e.exports={notification:"Notification_notification__2g5NA"}},function(e,t,n){e.exports={title:"Section_title__1P6Mz"}},function(e,t,n){e.exports={mainContainer:"FeedBack_mainContainer__2aMA1"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),o=n.n(i),r=(n(13),n(14),n(2)),s=n(4),b=n.n(s),u=n(0),d=function(e){var t=e.feedback,n=e.onGiveFeedback;return Object(u.jsx)("button",{type:"button",className:b.a.button,"data-feedback":t,onClick:n,children:t})},j=function(e){var t=e.options,n=e.onGiveFeedback;return Object(u.jsx)("div",{className:b.a.buttonContainer,children:t.map((function(e){return Object(u.jsx)(d,{feedback:e,onGiveFeedback:n},e.toString())}))})},l=n(6),f=n.n(l),h=function(){return Object(u.jsx)("p",{className:f.a.notification,children:"No feedback given"})},O=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return a?Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good:",t]}),Object(u.jsxs)("li",{children:["Neutral:",n]}),Object(u.jsxs)("li",{children:["Bad:",c]}),Object(u.jsxs)("li",{children:["Total:",a]}),Object(u.jsxs)("li",{children:["Positive feedback:",i,"%"]})]}):Object(u.jsx)(h,{})},k=n(7),x=n.n(k),v=function(e){var t=e.title,n=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:x.a.title,children:t}),n]})};v.defaultProps={children:[]};var p=v,_=n(8),g=n.n(_),m=["good","neutral","bad"];function N(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),o=Object(r.a)(i,2),s=o[0],b=o[1],d=Object(c.useState)(0),l=Object(r.a)(d,2),f=l[0],h=l[1],k=function(){return n+s+f};return Object(u.jsxs)("div",{className:g.a.mainContainer,children:[Object(u.jsx)(p,{title:"Please leave feedback",children:Object(u.jsx)(j,{options:m,onGiveFeedback:function(e){switch(e.target.dataset.feedback){case"good":a((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":h((function(e){return e+1}));break;default:return}}})}),Object(u.jsx)(p,{title:"Statistics",children:Object(u.jsx)(O,{good:n,neutral:s,bad:f,total:k(),positivePercentage:function(){var e=k();return 0===n?0:Math.round(n/e*100)}()})})]})}var F=function(){return Object(u.jsx)(N,{})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.c2c0f9d2.chunk.js.map