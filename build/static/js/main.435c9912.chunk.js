(this.webpackJsonpfirst_project=this.webpackJsonpfirst_project||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(10),r=a.n(m),o=a(2),c=a(3),i=a(4),s=a(5);var u=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"https://www.logolynx.com/images/logolynx/bd/bdb4767220c29c67a6a332864b8ecaa1.jpeg",alt:"Meme"}),l.a.createElement("div",null,l.a.createElement("text",null,"A Meme Generator")))},h=a(11),p=a(1),b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(h.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t].url;this.setState({randomImg:a})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",name:"topText",placeholder:"topText",value:this.state.topText,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"bottomText",placeholder:"bottomText",value:this.state.botomText,onChange:this.handleChange}),l.a.createElement("button",null,"GEN")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg,alt:"your meme"}),l.a.createElement("h2",{className:"top"},this.state.topText),l.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(n.Component),d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(b,null))}}]),a}(n.Component);r.a.render(l.a.createElement(d,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.435c9912.chunk.js.map