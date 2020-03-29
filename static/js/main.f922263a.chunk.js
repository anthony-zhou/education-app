(this["webpackJsonpeducation-app"]=this["webpackJsonpeducation-app"]||[]).push([[0],{243:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=(a(40),a(7)),u=a(8),i=a(4),s=a(9),m=a(10),p=a(248),h=a(247);var d=function(){return r.a.createElement("div",{className:"problem-statement"},r.a.createElement("h1",null,"Maximum Practice"),r.a.createElement("i",null,r.a.createElement("b",null,"Skills practiced:")," Array, Looping"),r.a.createElement("p",null,"Find the maximum value in an array of integers using a ",r.a.createElement("code",null,"for")," loop."),r.a.createElement("h2",null,"Input"),r.a.createElement("p",null,"An array of integers."),r.a.createElement("h2",null,"Output"),r.a.createElement("p",null,"The largest integer in the array."),r.a.createElement("h2",null,"Example"),r.a.createElement("i",null,"Input"),r.a.createElement("br",null),r.a.createElement(p.a,{language:"javascript",style:h.a},"[5, -4, 3, 1, 7]"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",null,"Output"),r.a.createElement("br",null),r.a.createElement(p.a,{language:"javascript",style:h.a},"5"),r.a.createElement("h2",null,"Instructions:"),r.a.createElement("p",null,"Modify the main function to return the correct output."),r.a.createElement("div",{className:"tooltip"},"Hover here for a hint",r.a.createElement("span",{className:"tooltiptext"},"Try storing the maximum value in a variable and updating it as you go along.")))};var E=function(e){return r.a.createElement("div",{className:"problem"},r.a.createElement(d,null))};var g=function(e){return r.a.createElement("div",{className:"student"},e.name,e.status)};var v=function(){return r.a.createElement("div",{className:"students"},r.a.createElement(g,{name:"John Mulaney",status:"completed"}))};var f=function(){return r.a.createElement("div",{className:"teacher-view"},r.a.createElement(E,{filename:"findmax.txt"}),r.a.createElement(v,null))},b=a(32),y=a.n(b);var O=function(e){return r.a.createElement("button",{id:"run-button",className:"pure-material-button-contained",onClick:function(t){t.preventDefault();var a=e.content;!function(t){var a=[1,5,4,3,2];console.log(t(a)),0===t(a)?(console.log("It works"),e.setCorrect(!0)):(e.setCorrect(!1),console.log("It doesn't work."));e.togglePopup()}(Function("return "+a)())}},"Run")},j=(a(239),a(240),a(27),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"popup\\_inner"},r.a.createElement("h1",null,this.props.text),r.a.createElement("button",{onClick:this.props.togglePopup},"close me")))}}]),a}(r.a.Component)),N=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={content:k,showPopup:!1,correct:!1},n.togglePopup=n.togglePopup.bind(Object(i.a)(n)),n.handleChange=n.handleChange.bind(Object(i.a)(n)),n.setCorrect=n.setCorrect.bind(Object(i.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState({content:e})}},{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"setCorrect",value:function(e){this.setState({correct:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"student-view"},r.a.createElement(E,{filename:"findmax.txt"}),r.a.createElement(y.a,{id:"code-editor",mode:"javascript",theme:"monokai",onChange:this.handleChange,value:this.state.content,width:"auto",height:"auto",fontSize:14,name:"code-editor",editorProps:{$blockScrolling:!0}}),r.a.createElement(O,{name:this.props.studentName,content:this.state.content,togglePopup:this.togglePopup,setCorrect:this.setCorrect}),this.state.showPopup?r.a.createElement(j,{text:this.state.correct?r.a.createElement(C,null):"Not all test cases passed. Please try again.",togglePopup:this.togglePopup}):null)}}]),a}(r.a.Component);function C(){return r.a.createElement("div",null,"Congrats! All test cases passed!",r.a.createElement("form",{method:"POST",action:"https://arcane-spire-25876.herokuapp.com/api/users"},r.a.createElement("input",{type:"hidden",name:"userFinished",value:"Anthony Zhou"}),r.a.createElement("input",{type:"hidden",name:"url",value:"https://anthony-zhou.github.io/education-app/#/student"}),r.a.createElement("button",null,"Submit to teacher")))}var k="function (nums) {\n  //enter code\n  return 0;\n}\n",w=N,P=a(11);function S(e){Object(P.f)();return r.a.createElement("button",{id:"signup-btn"},"start coding!")}var x=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={name:""},n.handleChange=n.handleChange.bind(Object(i.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.props.changeStudentName(e.target.value),this.setState({name:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"intro-screen"},r.a.createElement("div",{id:"wrapper"},r.a.createElement("h1",{style:{color:"white"}},"Welcome to the Education App!"),r.a.createElement("form",{method:"POST",action:"https://arcane-spire-25876.herokuapp.com/api/users"},r.a.createElement("input",{type:"hidden",name:"url",value:"http://localhost:3000/education-app/#/student"}),r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",onChange:this.handleChange,value:this.state.name,required:!0}),r.a.createElement(S,{name:this.state.name}))))}}]),a}(r.a.Component),I=(a(243),a(18)),A=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={studentName:""},e.changeStudentName=e.changeStudentName.bind(Object(i.a)(e)),e}return Object(u.a)(a,[{key:"changeStudentName",value:function(e){this.setState({studentName:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(I.a,{basename:"/"},r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/instructor"},r.a.createElement(f,null)),r.a.createElement(P.a,{path:"/student"},r.a.createElement(w,{studentName:this.state.studentName})),r.a.createElement(P.a,{path:"/"},r.a.createElement(x,{changeStudentName:this.changeStudentName})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,t,a){},35:function(e,t,a){e.exports=a(244)},40:function(e,t,a){}},[[35,1,2]]]);
//# sourceMappingURL=main.f922263a.chunk.js.map