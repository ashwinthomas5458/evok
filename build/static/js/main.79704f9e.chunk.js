(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(5),l=t.n(c);t(11);var s=function(){return n.a.createElement("header",{className:"flex"},n.a.createElement("button",{className:"logo"},"LOGO"),n.a.createElement("div",{className:"categories flex"},n.a.createElement("img",{src:"svgs/categories.svg",alt:""}),n.a.createElement("p",null,"Categories")),n.a.createElement("div",{className:"search"},n.a.createElement("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M12.5688 11.6813L10.25 9.38125C11.1501 8.25901 11.5859 6.83456 11.468 5.40081C11.3501 3.96706 10.6873 2.63299 9.61595 1.6729C8.54461 0.712818 7.14613 0.199695 5.70808 0.239045C4.27003 0.278396 2.9017 0.867227 1.88446 1.88446C0.867227 2.9017 0.278396 4.27003 0.239045 5.70808C0.199695 7.14613 0.712818 8.54461 1.6729 9.61595C2.63299 10.6873 3.96706 11.3501 5.40081 11.468C6.83456 11.5859 8.25901 11.1501 9.38125 10.25L11.6813 12.55C11.7394 12.6086 11.8085 12.6551 11.8846 12.6868C11.9608 12.7185 12.0425 12.7349 12.125 12.7349C12.2075 12.7349 12.2892 12.7185 12.3654 12.6868C12.4415 12.6551 12.5106 12.6086 12.5688 12.55C12.6814 12.4335 12.7444 12.2777 12.7444 12.1156C12.7444 11.9535 12.6814 11.7978 12.5688 11.6813ZM5.875 10.25C5.00971 10.25 4.16385 9.99341 3.44438 9.51268C2.72492 9.03195 2.16416 8.34867 1.83303 7.54924C1.50189 6.74981 1.41526 5.87015 1.58407 5.02148C1.75288 4.17281 2.16955 3.39326 2.78141 2.78141C3.39326 2.16955 4.17281 1.75288 5.02148 1.58407C5.87015 1.41526 6.74981 1.50189 7.54924 1.83303C8.34867 2.16416 9.03195 2.72492 9.51268 3.44438C9.99341 4.16385 10.25 5.00971 10.25 5.875C10.25 7.03532 9.78907 8.14812 8.96859 8.96859C8.14812 9.78907 7.03532 10.25 5.875 10.25Z",fill:"#B2B2B2"})),n.a.createElement("input",{type:"search",placeholder:"What do you want to learn?"})),n.a.createElement("a",{href:"/"},"Join as Tutor"),n.a.createElement("button",{className:"signup"},"Signup"),n.a.createElement("button",{className:"login"},"Login with Gmail"))};var i=function(){return n.a.createElement("div",{className:"cover"},n.a.createElement("div",{className:"cover rings"},n.a.createElement("img",{src:"svgs/Ellipse 1.svg",alt:""}),n.a.createElement("img",{src:"svgs/Ellipse 2.svg",alt:""}),n.a.createElement("img",{src:"svgs/Ellipse 3.svg",alt:""})),n.a.createElement("div",{className:"cover coverContent flex"},n.a.createElement("div",{className:"content flex"},n.a.createElement("h1",null,"Watch & Learn from Experts."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Avitae, quis arcu donec risus vestibulum. "),n.a.createElement("button",{className:"login"},"Login with Gmail ",n.a.createElement("img",{src:"svgs/Arrow 1.svg",alt:""}))),n.a.createElement("img",{src:"Rectangle 101.png",alt:""})))},o=t(1),m=t.n(o),u=t(3),f=t(2),E=function(){var e=Object(r.useState)([]),a=Object(f.a)(e,2),t=a[0],n=a[1];Object(r.useEffect)((function(){c()}),[]);var c=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://j4b1yj8zg7.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/course-category/get-all");case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.next=8,n(t.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{courseCategories:t}},v=function(){var e=Object(r.useState)([]),a=Object(f.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)([]),l=Object(f.a)(c,2),s=l[0],i=l[1],o=Object(r.useState)([]),E=Object(f.a)(o,2),v=E[0],g=E[1];Object(r.useEffect)((function(){d()}),[]);var d=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={value:"featured"},e.next=3,fetch("https://j4b1yj8zg7.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/course/home",{method:"POST",body:JSON.stringify(a)});case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.next=9,n(r.data.featured_courses);case 9:return e.next=11,i(r.data.popular_courses);case 11:return e.next=13,g(r.data.course_with_offers);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{featuredCourses:t,popularCourses:s,offerCourses:v}};var g=function(e){var a=e.image,t=e.author,r=e.offer,c=e.free,l=e.offerPrice,s=e.price,i=e.title,o=e.description;return n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:a,alt:"",className:"cardImage"}),n.a.createElement("div",{className:"marked flex"},n.a.createElement("img",{src:"svgs/Vector.svg",alt:""})),n.a.createElement("div",{className:"name flex"},n.a.createElement("p",null,t)),n.a.createElement("div",{className:r?"offer flex":"hidden"},n.a.createElement("p",null,"offer")),n.a.createElement("div",{className:"text flex"},n.a.createElement("h2",null,i),n.a.createElement("p",null,o)),n.a.createElement("div",{className:"star flex"},n.a.createElement("img",{src:"svgs/Vector-1.svg",alt:""}),n.a.createElement("p",null,"4.5")),n.a.createElement("div",{className:"price flex"},n.a.createElement("p",{className:c?"hidden":""},"\u20b9",l),n.a.createElement("p",null,c?"free":"\u20b9".concat(s))))};var d=function(e){var a=e.featured;return n.a.createElement("div",{className:"container featured flex"},n.a.createElement("figure",{className:"flex"},n.a.createElement("h3",null,"Featured Courses"),n.a.createElement("a",{href:"/",className:"view"},"View all",n.a.createElement("svg",{width:"25",height:"8",viewBox:"0 0 25 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z",fill:"#000000"})))),n.a.createElement("div",{className:"list flex"},n.a.createElement("div",{className:"grid"},a.map((function(e){return n.a.createElement(g,{image:e.image,author:e.creator,offer:e.offer,free:e.free,offerPrice:e.offer_price,price:e.price,title:e.name,description:e.description?"".concat(e.description.slice(0,20),".."):"No description",marked:e.is_bookmarked,key:"".concat(e.creator_id,"key").concat(e.id).concat(e.name)})})))))};var p=function(e){var a=e.courseCategory;return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"course"},a))};var h=function(e){var a=e.courseCategories;return n.a.createElement("div",{className:"courseCategories"},n.a.createElement("div",{className:"rings courseCategories"},n.a.createElement("img",{src:"svgs/Ellipse 4.svg",alt:""}),n.a.createElement("img",{src:"svgs/Ellipse 5.svg",alt:""})),n.a.createElement("div",{className:"content flex"},n.a.createElement("figure",{className:"flex"},n.a.createElement("h3",null,"Course Categories"),n.a.createElement("a",{href:"/",className:"view"},"View all Courses",n.a.createElement("img",{src:"svgs/Arrow 1.svg",alt:""}))),n.a.createElement("div",{className:"list flex"},n.a.createElement("div",{className:"grid"},a.map((function(e){return n.a.createElement(p,{courseCategory:e.name,key:"".concat(e.id).concat(e.name)})}))))))};var C=function(e){var a=e.popular;return n.a.createElement("div",{className:"container popular flex"},n.a.createElement("figure",{className:"flex"},n.a.createElement("h3",null,"Popular Courses"),n.a.createElement("a",{href:"/",className:"view"},"View all",n.a.createElement("svg",{width:"25",height:"8",viewBox:"0 0 25 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z",fill:"#000000"})))),n.a.createElement("div",{className:"list flex"},n.a.createElement("div",{className:"grid"},a.map((function(e){return n.a.createElement(g,{image:e.image,author:e.creator,offer:e.offer,free:e.free,offerPrice:e.offer_price,price:e.price,title:e.name,description:e.description?"".concat(e.description.slice(0,20),".."):"No description",marked:e.is_bookmarked,key:"".concat(e.creator_id,"key").concat(e.id).concat(e.name)})})))))};var N=function(e){var a=e.offer;return n.a.createElement("div",{className:"container withOffer flex"},n.a.createElement("figure",{className:"flex"},n.a.createElement("h3",null,"Courses with offers"),n.a.createElement("a",{href:"/",className:"view"},"View all",n.a.createElement("svg",{width:"25",height:"8",viewBox:"0 0 25 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z",fill:"#000000"})))),n.a.createElement("div",{className:"list flex"},n.a.createElement("div",{className:"grid"},a.map((function(e){return n.a.createElement(g,{image:e.image,author:e.creator,offer:e.offer,free:e.free,offerPrice:e.offer_price,price:e.price,title:e.name,description:e.description?"".concat(e.description.slice(0,20),".."):"No description",marked:e.is_bookmarked,key:"".concat(e.creator_id,"key").concat(e.id).concat(e.name)})})))))};var x=function(){return n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"rings section"},n.a.createElement("img",{src:"svgs/Ellipse 6.svg",alt:""}),n.a.createElement("img",{src:"svgs/Ellipse 7.svg",alt:""})),n.a.createElement("div",{className:"content flex"},n.a.createElement("h1",null,"Get our mobile app"),n.a.createElement("p",null,"Download our mobile app for more personalised experience."),n.a.createElement("p",null,"Available on"),n.a.createElement("figure",{className:"flex"},n.a.createElement("a",{href:"/"},n.a.createElement("img",{src:"svgs/Google Play - eng.svg",alt:""})),n.a.createElement("a",{href:"/"},n.a.createElement("img",{src:"svgs/App Store - eng.svg",alt:""})))))};var w=function(){var e=E().courseCategories,a=v(),t=a.featuredCourses,r=a.popularCourses,c=a.offerCourses;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{featured:t}),n.a.createElement(h,{courseCategories:e}),n.a.createElement(C,{popular:r}),n.a.createElement(N,{offer:c}),n.a.createElement(x,null))};var b=function(){return n.a.createElement("footer",{className:"flex"},n.a.createElement("div",{className:"footer flex"},n.a.createElement("button",{className:"logo"},"Logo"),n.a.createElement("figure",{className:"flex"},n.a.createElement("p",null,"\xa92020 All rights reserved | Terms & Conditions | Privacy Policy"),n.a.createElement("p",null,"Powered by ",n.a.createElement("strong",null,"Evoque Innovative Lab")))))};var y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,null),n.a.createElement("div",{className:"main"},n.a.createElement(i,null),n.a.createElement(w,null)),n.a.createElement(b,null))};l.a.render(n.a.createElement(y,null),document.getElementById("root"))},6:function(e,a,t){e.exports=t(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.79704f9e.chunk.js.map