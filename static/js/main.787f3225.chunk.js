(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),a=n(13),c=n.n(a),i=(n(23),n(24),n(0));var o=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"jumbotron jumbotron-fluid",id:"jumboTron",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("h1",{className:"display-4",children:[Object(i.jsx)("i",{className:"fas fa-user-friends"})," ",Object(i.jsx)("b",{children:"Company Directory"})]}),Object(i.jsx)("p",{className:"lead",children:"Search by first or last name or select a column heading to sort."})]})})})},l=n(14),d=n(15),h=n(18),u=n(17),j=n(16),b=n.n(j),m=function(){return b.a.get("https://randomuser.me/api/?results=30")},f=(n(44),function(e){return Object(i.jsx)("form",{children:Object(i.jsx)("div",{className:"form-group search-widget",children:Object(i.jsx)("div",{className:"input-group mb-3",children:Object(i.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search directory for Employee",id:"search"})})})})}),O=(n(45),n(4)),p=n.n(O),v=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={sortOrder:"",results:[],search:""},e.handleInputChange=function(t){if("search"===t.target.name){var n=t.target.value.toLowerCase();e.setState({search:n})}},e.sortByFName=function(){var t=e.state.results.sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e.sortByLName=function(){var t=e.state.results.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"DESC"===e.state.sortOrder?(t.reverse(),e.setState({sortOrder:"ASC"})):e.setState({sortOrder:"DESC"}),e.setState({results:t})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){e.setState({results:t.data.results}),console.log(e.state.results)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{handleInputChange:this.handleInputChange,search:this.state.search}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)("table",{className:"table table-striped table-resposive text-center table-hover",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Image"}),Object(i.jsxs)("th",{children:["First Name ",Object(i.jsx)("span",{className:"downArrow",onClick:this.sortByFName})]}),Object(i.jsxs)("th",{children:["Last Name ",Object(i.jsx)("span",{className:"downArrow",onClick:this.sortByLName})]}),Object(i.jsx)("th",{children:"Phone"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{children:"DOB "})]})}),this.state.results&&this.state.results.map((function(t){return t.name.first.toLowerCase().includes(e.state.search)?Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:t.picture.thumbnail,className:"rounded-circle",alt:"thumbnail"})}),Object(i.jsx)("td",{children:t.name.first}),Object(i.jsx)("td",{children:t.name.last}),Object(i.jsx)("td",{children:t.phone}),Object(i.jsx)("td",{children:t.email}),Object(i.jsx)("td",{children:p()(t.dob.date,"mediumDate")})]})},t.login.uuid):t.name.last.toLowerCase().includes(e.state.search)?Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:t.picture.thumbnail,className:"rounded-circle",alt:"thumbnail"})}),Object(i.jsx)("td",{children:t.name.first}),Object(i.jsx)("td",{children:t.name.last}),Object(i.jsxs)("td",{children:[t.phone," "]}),Object(i.jsx)("td",{children:t.email}),Object(i.jsx)("td",{children:p()(t.dob.date,"mediumDate")})]})},t.login.uuid):null}))]})})]})}}]),n}(s.a.Component);var x=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{}),Object(i.jsx)(v,{})]})},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(i.jsx)(x,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.787f3225.chunk.js.map