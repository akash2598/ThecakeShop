(this.webpackJsonpdemo_react=this.webpackJsonpdemo_react||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(17),r=c.n(n),l=(c(42),c(43),c(7)),o=c(3),i=c(4),d=c(5),j=c.n(d),b=c(6),u=c(0);var h=Object(b.b)((function(e,t){return console.log(".....state",e),{islogin:e&&e.isloggedin}}))((function(e){var t=Object(o.h)().url;console.log("url",t);var c=Object(s.useState)({}),a=Object(l.a)(c,2),n=a[0],r=a[1],d=Object(s.useState)(),b=Object(l.a)(d,2),h=b[0],x=b[1],p=Object(o.g)();return Object(s.useEffect)((function(){var e="https://apibyashu.herokuapp.com/api/cake/"+p.cakeid;j()({method:"get",url:e}).then((function(e){r(e.data.data)}),(function(e){console.log("Error:-",e)}))}),[]),Object(u.jsx)("div",{class:"card mb-3",style:{width:"Auto",margin:"30px"},children:Object(u.jsxs)("div",{class:"row g-0",children:[Object(u.jsx)("div",{class:"col-md-4",children:Object(u.jsx)("img",{style:{margin:"20px",height:"500px"},src:n.image,alt:"...",class:"img-fluid"})}),Object(u.jsx)("div",{class:"col-md-8",children:Object(u.jsxs)("div",{class:"card-body",children:[Object(u.jsx)("h5",{class:"card-title",children:n.name}),Object(u.jsx)("br",{}),Object(u.jsx)("h6",{class:"card-text",children:n.description}),Object(u.jsxs)("h3",{class:"card-text",children:["CURRENT PRICE : ",Object(u.jsxs)("label",{style:{color:"orange"},children:[" ",n.price]})]}),Object(u.jsxs)("h6",{class:"card-text",children:[Object(u.jsx)("b",{children:"91%"})," of buyers enjoyed this product ",Object(u.jsx)("b",{children:"(87 votes)"})]}),Object(u.jsx)("h3",{class:"card-text",children:Object(u.jsx)("b",{children:"Weight:  3KG"})}),Object(u.jsxs)("h3",{class:"card-text",children:["FLAVOUR : ",Object(u.jsx)("label",{style:{color:"orange"},children:" HAZELNUT CAKE"})]}),Object(u.jsx)("h6",{class:"card-text",children:Object(u.jsx)("b",{children:"TYPE"})}),Object(u.jsx)("h6",{class:"card-text",children:"GENERAL"}),localStorage.token?Object(u.jsx)("button",{type:"button",class:"btn btn-warning",onClick:function(){var e=localStorage.token;j()({url:"https://apibyashu.herokuapp.com/api/addcaketocart",method:"post",headers:{authtoken:e},data:{cakeid:n.cakeid,name:n.name,image:n.image,price:n.price,weight:n.weight}}).then((function(e){console.log("cake isss data",e.data),x("Item Added to cart successfully..")}),(function(e){console.log(e)}))},children:"Add to Cart"}):Object(u.jsx)("div",{children:Object(u.jsx)(i.b,{to:"/login",children:Object(u.jsx)("button",{className:"btn btn-primary",children:" Please Login to buy"})})}),"             ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),h&&Object(u.jsxs)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert",children:[h,Object(u.jsx)("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close",children:Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})]})})]})})}));var x=Object(b.b)((function(e,t){return console.log(".....state",e),{user:e&&e.user.name,islogin:e&&e.isloggedin}}))((function(e){var t=Object(s.useState)(),c=Object(l.a)(t,2),a=c[0],n=c[1];return Object(u.jsx)("div",{className:"NavBar",children:Object(u.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(u.jsxs)(i.b,{to:"/",children:[" ",Object(u.jsx)("a",{class:"navbar-brand",href:"#",children:"The Cake Shop"})," "]}),Object(u.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{class:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(u.jsxs)("ul",{class:"navbar-nav mr-auto",children:[Object(u.jsx)("li",{class:"nav-item active",children:e.user&&Object(u.jsxs)("a",{class:"nav-link",href:"#",children:["Welcome ",e.user," ",Object(u.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)("a",{class:"nav-link",href:"#",children:"Link"})}),Object(u.jsxs)("li",{class:"nav-item dropdown",children:[Object(u.jsx)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Dropdown"}),Object(u.jsxs)("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(u.jsx)("a",{class:"dropdown-item",href:"#",children:"Action"}),Object(u.jsx)("a",{class:"dropdown-item",href:"#",children:"Another action"}),Object(u.jsx)("div",{class:"dropdown-divider"}),Object(u.jsx)("a",{class:"dropdown-item",href:"#",children:"Something else here"})]})]}),Object(u.jsx)("li",{class:"nav-item",children:Object(u.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})})]}),Object(u.jsxs)("form",{class:"form-inline my-2 my-lg-0",children:[Object(u.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){n(e.target.value)}}),Object(u.jsxs)(i.b,{to:"/search/search?cakes="+a,children:[" ",Object(u.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]}),e.islogin?Object(u.jsxs)("div",{children:[Object(u.jsxs)(i.b,{to:"/cart",children:[" ",Object(u.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Cart"})]}),Object(u.jsx)("button",{onClick:function(){e.dispatch({type:"LOGOUT"}),localStorage.token=""},className:"btn btn-primary",children:"Logout"})," "]}):Object(u.jsx)(i.b,{to:"/login",children:Object(u.jsx)("button",{className:"btn btn-primary",children:"Login"})})]})]})]})})})),p=c(34),O=c(35),m=c(37),g=c(36),f=function(e){Object(m.a)(c,e);var t=Object(g.a)(c);function c(){var e;return Object(p.a)(this,c),(e=t.call(this)).user={},e.getName=function(t){e.user.name=t.target.value},e.getEmail=function(t){e.user.email=t.target.value},e.getPassword=function(t){e.user.password=t.target.value},e.Register=function(){if(e.user.email&&e.user.password&&e.user.name){j()({url:"https://apibyashu.herokuapp.com/api/register",method:"post",data:e.user}).then((function(e){console.log("response from api",e.data)}),(function(e){console.log("Error from api",e)}))}else e.setState({errorMessage:"Please fill details"})},e.state={},e}return Object(O.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{style:{width:"50%",margin:"auto"},children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",class:"form-control",placeholder:"Enter Name",onChange:this.getName}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"email",class:"form-control",placeholder:"Enter Email",onChange:this.getEmail}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"password",class:"form-control",placeholder:"Enter Password",onChange:this.getPassword}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:this.Register,className:"btn btn-primary",children:"Register"}),Object(u.jsx)("div",{style:{color:"red"},children:this.state.errorMessage})]})})}}]),c}(s.Component);var v=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{style:{margin:"10px"},children:[Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("label",{for:"inputAddress",children:"Name"}),Object(u.jsx)("input",{type:"text",class:"form-control",id:"inputAddress"})]}),Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("label",{for:"inputAddress",children:"Phone"}),Object(u.jsx)("input",{type:"number",class:"form-control",id:"inputAddress"})]}),Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("label",{for:"inputAddress2",children:"Address "}),Object(u.jsx)("input",{type:"text",class:"form-control",id:"inputAddress2"})]}),Object(u.jsxs)("div",{class:"form-row",children:[Object(u.jsxs)("div",{class:"form-group col-md-6",children:[Object(u.jsx)("label",{for:"inputCity",children:"City"}),Object(u.jsx)("input",{type:"text",class:"form-control",id:"inputCity"})]}),Object(u.jsxs)("div",{class:"form-group col-md-6",children:[Object(u.jsx)("label",{for:"inputZip",children:"Zip"}),Object(u.jsx)("input",{type:"number",class:"form-control",id:"inputZip"})]})]}),Object(u.jsxs)(i.b,{to:"/checkout/payment",children:[" ",Object(u.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Next"})]})]})})};var y=Object(b.b)((function(e,t){return{cart:null===e||void 0===e?void 0:e.cart}}))((function(e){var t;return console.log("/////cart from redux",e.cart),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[(null===(t=e.cart)||void 0===t?void 0:t.length)>0&&e.cart.map((function(e,t){return Object(u.jsxs)("div",{class:"d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded",children:[Object(u.jsx)("div",{class:"mr-1",children:Object(u.jsx)("img",{class:"rounded",src:e.image,width:"70"})}),Object(u.jsx)("div",{class:"d-flex flex-column align-items-center product-details",children:Object(u.jsx)("span",{class:"font-weight-bold",children:e.name})}),Object(u.jsxs)("div",{class:"d-flex flex-row align-items-center qty",children:[Object(u.jsx)("i",{class:"fa fa-minus text-danger"}),Object(u.jsx)("h5",{class:"text-grey mt-1 mr-1 ml-1",children:e.price}),Object(u.jsx)("i",{class:"fa fa-plus text-success"})]}),Object(u.jsx)("div",{})]})})),Object(u.jsx)("div",{class:"d-flex justify-content-center row",children:Object(u.jsx)(i.b,{to:"/checkout/address",children:Object(u.jsx)("button",{class:"btn btn-warning btn-block btn-lg ml-2 pay-button justify-content-center",type:"button",children:"Next"})})})]})})}));var k=function(){return Object(u.jsx)("div",{children:"Order page"})};var w=function(){return Object(u.jsx)("div",{children:"Payment page"})};var E=function(){var e=Object(o.h)(),t=e.url,c=e.path;return console.log("..",e),console.log("url",t),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-4",children:Object(u.jsxs)("ul",{class:"list-group",children:[Object(u.jsxs)(i.b,{to:t,children:["  ",Object(u.jsx)("li",{class:"list-group-item active",children:"Cart Summary"})]}),Object(u.jsxs)(i.b,{to:t+"/address",children:["   ",Object(u.jsx)("li",{class:"list-group-item",children:" Address"})]}),Object(u.jsxs)(i.b,{to:t+"/payment",children:["  ",Object(u.jsx)("li",{class:"list-group-item",children:" Payment"})]}),Object(u.jsxs)(i.b,{to:t+"/order",children:["  ",Object(u.jsx)("li",{class:"list-group-item",children:"Order"})]})]})}),Object(u.jsxs)("div",{className:"col-8",children:[Object(u.jsx)(o.b,{exact:!0,path:c,component:y}),Object(u.jsx)(o.b,{exact:!0,path:c+"/address",component:v}),Object(u.jsx)(o.b,{exact:!0,path:c+"/payment",component:w}),Object(u.jsx)(o.b,{exact:!0,path:c+"/order",component:k})]})]})};var N=function(){return Object(u.jsx)("div",{className:"Carousel",style:{width:"90%",margin:"auto"},children:Object(u.jsxs)("div",{id:"carouselExampleIndicators",class:"carousel slide","data-ride":"carousel",children:[Object(u.jsxs)("ol",{class:"carousel-indicators",children:[Object(u.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",class:"active"}),Object(u.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),Object(u.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})]}),Object(u.jsxs)("div",{class:"carousel-inner",children:[Object(u.jsx)("div",{class:"carousel-item active",children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/ashudev/image/upload/v1615291611/d6irltnfa9kknsq9pi1y.jpg",class:"d-block w-100",alt:"...",height:"500"})}),Object(u.jsx)("div",{class:"carousel-item",children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/ashudev/image/upload/v1615293948/nvtmmgae8zbq2qdwfznc.jpg",class:"d-block w-100",alt:"...",height:"500"})}),Object(u.jsx)("div",{class:"carousel-item",children:Object(u.jsx)("img",{src:"https://res.cloudinary.com/ashudev/image/upload/v1615294654/fstgjqzauobzircprd51.jpg",class:"d-block w-100",alt:"...",height:"500"})})]}),Object(u.jsxs)("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev",children:[Object(u.jsx)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(u.jsx)("span",{class:"sr-only",children:"Previous"})]}),Object(u.jsxs)("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next",children:[Object(u.jsx)("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(u.jsx)("span",{class:"sr-only",children:"Next"})]})]})})};var C=function(e){return console.log("props received",e),Object(u.jsx)("div",{class:"grid",children:Object(u.jsx)("div",{className:"Card",style:{width:"50%",margin:"auto"},children:Object(u.jsx)("div",{class:"card-deck",children:Object(u.jsxs)("div",{class:"card",style:{width:180},children:[Object(u.jsx)(i.b,{to:"/cake/"+e.countrydata.cakeid,children:Object(u.jsx)("img",{src:e.countrydata.image,class:"card-img-top",alt:"...",height:"100"})}),Object(u.jsx)("div",{class:"card-body",children:Object(u.jsx)("h5",{class:"card-title",children:e.countrydata.name})})]})})})})};var S=function(e){var t=c(68).parse(e.location.search).cakes,a=Object(s.useState)(),n=Object(l.a)(a,2),r=n[0],o=n[1],i="https://apibyashu.herokuapp.com/api/searchcakes?q="+t;return Object(s.useEffect)((function(){j()({method:"get",url:i}).then((function(e){console.log("response from all cake api",e.data.data),o(e.data.data)}),(function(e){console.log("Error from all cake api",e)}))}),[]),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:(null===r||void 0===r?void 0:r.length)>0?r.map((function(e,t){return Object(u.jsx)(C,{countrydata:e},t)})):Object(u.jsx)("div",{children:"NO result found"})})})};function A(e){Object(s.useEffect)((function(){}),{});var t=Object(s.useState)(),c=Object(l.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)({}),o=Object(l.a)(r,2),d=o[0],b=(o[1],{});return Object(u.jsx)("div",{style:{width:"50%",margin:"auto"},children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{class:"form-control",placeholder:"Enter Email",onChange:function(e){b.email=e.target.value}}),Object(u.jsx)("br",{}),d.email,Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{class:"form-control",placeholder:"Enter Password",onChange:function(e){b.password=e.target.value}}),Object(u.jsx)("br",{}),d.password,Object(u.jsx)("button",{onClick:function(){if(b.email&&b.password){j()({url:"https://apibyashu.herokuapp.com/api/login",method:"post",data:b}).then((function(t){console.log("response from api",t.data),t.data.token?(e.history.push("/"),localStorage.token=t.data.token,console.log("...previous path",e.url),e.dispatch({type:"LOGIN",payload:{email:t.data.email,name:t.data.name}})):alert("invalid ")}),(function(e){console.log("Error from api",e),n(e)}))}else console.log(b.email),n("Please fill all details")},className:"btn btn-primary",children:"Login"}),Object(u.jsx)("div",{style:{float:"left"},children:Object(u.jsx)(i.b,{to:"/signup",children:" Not a user?"})}),Object(u.jsx)("div",{style:{float:"right"},children:Object(u.jsx)(i.b,{to:"/forgotpassword",children:" Forgot Password ?"})}),Object(u.jsx)("div",{style:{color:"red"},children:a})]})})}A=Object(o.i)(A);var P=Object(b.b)((function(e,t){return console.log(".....state",e),{url:e&&e.url}}))(A);var L=function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){j()({method:"get",url:"https://apibyashu.herokuapp.com/api/allcakes"}).then((function(e){console.log("response from all cake api",e.data.data),a(e.data.data)}),(function(e){console.log("Error from all cake api",e)}))}),[]),Object(u.jsxs)("div",{className:"Home",children:[Object(u.jsx)(N,{}),Object(u.jsx)("div",{className:"row",children:(null===c||void 0===c?void 0:c.length)>0&&c.map((function(e,t){return Object(u.jsx)(C,{countrydata:e},t)}))})]})};var I=Object(b.b)()((function(e){var t=localStorage.token,c=Object(s.useState)([]),a=Object(l.a)(c,2),n=a[0],r=a[1],o="https://apibyashu.herokuapp.com/api/cakecart";return Object(s.useEffect)((function(){j()({url:o,method:"post",headers:{authtoken:t},data:{}}).then((function(e){console.log("cake data",e.data),r(e.data.data),console.log("cakes is ",n)}),(function(e){console.log(e)}))}),[]),Object(u.jsx)("div",{children:(null===n||void 0===n?void 0:n.length)>0?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"My cart"}),n.map((function(e,c){return Object(u.jsx)("div",{class:"container mt-5 mb-5",children:Object(u.jsx)("div",{class:"d-flex justify-content-center row",children:Object(u.jsxs)("div",{class:"col-md-8",children:[Object(u.jsx)("div",{class:"p-2"}),Object(u.jsxs)("div",{class:"d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded",children:[Object(u.jsx)("div",{class:"mr-1",children:Object(u.jsx)("img",{class:"rounded",src:e.image,width:"70"})}),Object(u.jsx)("div",{class:"d-flex flex-column align-items-center product-details",children:Object(u.jsx)("span",{class:"font-weight-bold",children:e.name})}),Object(u.jsxs)("div",{class:"d-flex flex-row align-items-center qty",children:[Object(u.jsx)("i",{class:"fa fa-minus text-danger"}),Object(u.jsx)("h5",{class:"text-grey mt-1 mr-1 ml-1",children:e.price}),Object(u.jsx)("i",{class:"fa fa-plus text-success"})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{class:"btn btn-warning ",type:"button",onClick:function(){return function(e,c){var s,a;s=e,a=c,j()({url:"https://apibyashu.herokuapp.com/api/removecakefromcart",method:"post",headers:{authtoken:t},data:{email:s,cakeid:a}}).then((function(e){console.log("cake remove data data",e.data),j()({url:o,method:"post",headers:{authtoken:t},data:{}}).then((function(e){r(e.data.data)}),(function(e){console.log(e)})),console.log("cakes is ",n)}),(function(e){console.log(e)}))}(e.email,e.cakeid)},children:"Remove"})}),Object(u.jsx)("div",{class:"d-flex align-items-center",children:Object(u.jsx)("i",{class:"fa fa-trash mb-1 text-danger"})})]})]})})})})),Object(u.jsx)("div",{class:"d-flex justify-content-center row",children:Object(u.jsx)(i.b,{to:"/checkout",children:Object(u.jsx)("button",{class:"btn btn-warning btn-block btn-lg ml-2 pay-button justify-content-center",type:"button",onClick:function(){e.dispatch({type:"CARTDATA",payload:n})},children:"Proceed to Checkout"})})})]}):Object(u.jsx)("div",{children:"No items in cart"})})}));var R=Object(b.b)((function(e,t){return{user:null===e||void 0===e?void 0:e.user,islogin:e&&e.isloggedin}}))((function(e){if(localStorage.token&&!e.user){var t=localStorage.token;console.log("already log in"),j()({method:"get",url:"https://apibyashu.herokuapp.com/api/getuserdetails",headers:{authtoken:t}}).then((function(t){console.log("data",t),e.dispatch({type:"ALREADY_LOG_IN",payload:t.data.data})}),(function(e){console.log("error",e)}))}return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(x,{}),Object(u.jsx)("div",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/",exact:!0,component:L}),!localStorage.token&&Object(u.jsx)(o.b,{path:"/login",exact:!0,component:P}),Object(u.jsx)(o.b,{path:"/signup",exact:!0,component:f}),Object(u.jsx)(o.b,{path:"/search/:text",exact:!0,component:S}),Object(u.jsx)(o.b,{path:"/cake/:cakeid",exact:!0,component:h}),localStorage.token&&Object(u.jsx)(o.b,{path:"/cart",exact:!0,component:I}),localStorage.token&&Object(u.jsx)(o.b,{path:"/checkout",component:E}),Object(u.jsx)(o.b,{path:"/*",children:Object(u.jsx)(o.a,{to:"/"})})]})})]})})})),T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))},D=(c(70),c(71),c(73),c(19)),G=c(15),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return console.log("login is successfull"),(e=Object(G.a)({},e)).isloggedin=!0,e.user=t.payload,e;case"LOGOUT":return console.log("logout is successfull"),(e=Object(G.a)({},e)).isloggedin=!1,e.user="",e;case"ALREADY_LOG_IN":return console.log("Already log in"),(e=Object(G.a)({},e)).isloggedin=!0,e.user=t.payload,e;case"CARTDATA":return console.log("Cart data saveed"),(e=Object(G.a)({},e)).cart=t.payload,e;default:return e}},F=Object(D.b)(q);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b.a,{store:F,children:Object(u.jsx)(R,{})})}),document.getElementById("root")),T()}},[[74,1,2]]]);
//# sourceMappingURL=main.32bb33a9.chunk.js.map