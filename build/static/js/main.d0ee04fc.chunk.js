(this["webpackJsonptodo-practice"]=this["webpackJsonptodo-practice"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(11);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),i=a(6),c=a(5),u=a(1),s=a(2),d=a(4),m=a(3),f=(a(16),function(e){var t=e.done,a=e.toDo;return o.a.createElement("div",{className:"main-header"},o.a.createElement("h1",null,"My Todo List"),o.a.createElement("p",null,o.a.createElement("span",null,a)," ","more to do,"," ",o.a.createElement("span",null,t)," ","done"))}),b=(a(17),function(e){var t=e.placeholder,a=e.onFiltered;return o.a.createElement("input",{type:"text",className:"form-control search-panel",placeholder:t||"Search..",onChange:function(e){var t=e.target.value.toLowerCase().replace(" ","");a({label:t})}})}),p=a(9),v=(a(18),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={done:!1,important:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.onDeleted,n=e.onToggleImportant,r=e.onToggleDone,l=e.important,i=e.done,c={todoItem:"todo-list-item ",todoItemText:"todo-list-item-text ",importantBtn:"important-icon ",deleteBtn:"delete-icon"};return l&&(c.todoItemText+=" important"),i&&(c.todoItemText+=" done"),o.a.createElement("span",{className:c.todoItem},o.a.createElement("span",{className:c.todoItemText,onClick:function(){return r()}},t),o.a.createElement("button",{type:"button",className:c.deleteBtn,onClick:function(){return a()}},o.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-x-octagon",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"}))),o.a.createElement("button",{type:"button",className:c.importantBtn,onClick:function(){return n()}},o.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-exclamation-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),o.a.createElement("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"}))))}}]),a}(o.a.Component)),g=(a(19),function(e){var t=e.todos,a=e.onDeleted,n=e.onToggleDone,r=e.onToggleImportant,l=e.filter,i=t;l.tag&&(i=i.filter((function(e){return"done"===l.tag?e.done:"active"===l.tag?!e.done:"all"===l.tag||void 0}))),l.label&&(console.log("adsf"),i=i.filter((function(e){return e.label.toLowerCase().replace(" ","").includes(l.label)})));var c=i.map((function(e){var t=e.id,l=Object(p.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(v,Object.assign({},l,{onDeleted:function(){return a(t)},onToggleDone:function(){return n(t)},onToggleImportant:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},c)}),h=(a(20),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).filterHandler=function(e){var t=e.target;Object(c.a)(t.parentNode.children).forEach((function(e){e.classList.remove("active")})),t.classList.add("active");var a={tag:e.target.textContent.toLowerCase()};n.props.onFiltered(a)},n.state={active:"All"},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{className:"btn btn-default active",type:"button",onClick:this.filterHandler},"All"),o.a.createElement("button",{className:"btn btn-default",type:"button",onClick:this.filterHandler},"Active"),o.a.createElement("button",{className:"btn btn-default",type:"button",onClick:this.filterHandler},"Done"))}}]),a}(o.a.Component)),E=(a(21),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).labelHandler=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onCreated(n.state.label),n.setState({label:""})},n.state={label:" "},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{className:"TodoItemCreator",onSubmit:this.onSubmit},o.a.createElement("input",{className:"TodoInput form-control",type:"text",placeholder:"New todo (name)",value:this.state.label,onChange:this.labelHandler}),o.a.createElement("button",{className:"btn-info",type:"submit"},"Create!"))}}]),a}(o.a.Component)),D=(a(22),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).maxId=1,n.deleteFieldHandler=function(e){n.setState((function(t){var a=t.todoData,n=a.findIndex((function(t){return t.id===e}));return{todoData:[].concat(Object(c.a)(a.slice(0,n)),Object(c.a)(a.slice(n+1)))}}))},n.onToggleImportant=function(e){n.setState((function(t){var a=t.todoData.findIndex((function(t){return t.id===e}));return{todoData:n.toggleTodoItemProp(a,"important")}}))},n.onToggleDone=function(e){n.setState((function(t){var a=t.todoData.findIndex((function(t){return t.id===e}));return{todoData:n.toggleTodoItemProp(a,"done")}}))},n.onFiltered=function(e){if(e.tag)"all"===e.tag?n.setState((function(e){var t=e.filter;return t.tag=!1,{filter:t}})):n.setState((function(t){var a=t.filter;return a.tag=e.tag,{filter:a}}));else if(e.label){var t=n.state.filter;t.label=e.label,n.setState({filter:t})}else if(""===e.label){var a=Object(i.a)({},n.state.filter);a.label=e.label,n.setState({filter:a})}},n.state={todoData:[n.createTodoItem("Drink coffee"),n.createTodoItem("Drink tea"),n.createTodoItem("Drink tears")],filter:{}},n}return Object(s.a)(a,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"toggleTodoItemProp",value:function(e,t){var a=this.state.todoData,n=a[e],o=Object(i.a)({},n);return o[t]=!n[t],[].concat(Object(c.a)(a.slice(0,e)),[o],Object(c.a)(a.slice(e+1)))}},{key:"createFieldHandler",value:function(e){var t=this;this.setState((function(a){var n=a.todoData,o=t.createTodoItem(e);return{todoData:[].concat(Object(c.a)(n),[o])}}))}},{key:"render",value:function(){var e=this,t=this.state.todoData,a=t.filter((function(e){return!e.done})).length,n=t.length-a;return o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,{toDo:a,done:n}),o.a.createElement(b,{onFiltered:this.onFiltered}),o.a.createElement(h,{onFiltered:this.onFiltered}),o.a.createElement(g,{todos:t,onDeleted:this.deleteFieldHandler,onToggleDone:this.onToggleDone,onToggleImportant:this.onToggleImportant,filter:this.state.filter}),o.a.createElement(E,{onCreated:function(t){return e.createFieldHandler(t)}}))}}]),a}(o.a.Component));l.a.render(o.a.createElement(D,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d0ee04fc.chunk.js.map