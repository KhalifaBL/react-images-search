(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),i=a.n(s),c=a(7),o=a.n(c),u=a(18),l=a(2),m=a(3),p=a(5),h=a(4),f=a(6),b=a(19),g=a.n(b).a.create({baseURL:"https://api.unsplash.com/search/photos",headers:{Authorization:"Client-ID 4e389bcbab2af176892a698be3cb88765e41fef70b51d09b04e459ed194fb5c3"}}),d=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={input:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.input)},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form",action:""},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Search Here:"),r.a.createElement("input",{type:"text",value:this.state.input,onChange:function(t){e.setState({input:t.target.value})}}))))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t}),console.log(a.state)},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),t}(r.a.Component),j=(a(43),function(e){var t=e.images.map((function(e){return r.a.createElement(v,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)}),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.onSearchSubmit=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("https://api.unsplash.com/search/photos",{params:{query:t}});case 2:n=e.sent,a.setState({images:n.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(d,{onSubmit:this.onSearchSubmit}),"Found ",this.state.images.length," images",r.a.createElement(j,{images:this.state.images}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.bfcf7564.chunk.js.map