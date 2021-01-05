(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{172:function(e,t,n){"use strict";n.r(t);var r=n(171),s=n(55),a=n(56),o=n(58),c=n(57),i=n(6),u=n(0),l=n.n(u),h=n(165),f=n.n(h),j=(n(178),n(170));n(287);function d(e,t,n){if("undefined"==typeof t&&(t=e,e=0),"undefined"==typeof n&&(n=1),n>0&&e>=t||n<0&&e<=t)return[];for(var r=[],s=e;n>0?s<t:s>t;s+=n)r.push(s);return r}function b(e){return Object(i.jsx)("button",{className:"square",onClick:e.onClick,style:{background:e.value}})}var p=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={background:"#fff"},e.handleChange=function(t){e.setState({background:t.hex})},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(i.jsx)(j.a,{color:this.state.background,onChange:this.handleChange,onChangeComplete:this.props.handleChangeComplete})}}]),n}(l.a.Component),v=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).renderSquare=function(t){return Object(i.jsx)(b,{value:e.props.squares[t],onClick:function(){return e.props.onClick(t)}})},e.renderRow=function(t,n){var r=d(t*n,(t+1)*n);return Object(i.jsx)("div",{className:"board-row",children:r.map(e.renderSquare)})},e}return Object(a.a)(n,[{key:"renderRows",value:function(e,t){var n=d(0,e),r=this.renderRow;return n.map((function(e){return r(e,t)}))}},{key:"render",value:function(){var e=this.props.n_rows,t=this.props.n_cols;return this.renderRows(e,t)}}]),n}(l.a.Component),m=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).handleColourChange=function(e){n.setState({colour:e.hex})},n.change_n_rows=function(e){n.setState({n_rows:parseInt(e.target.value)?parseInt(e.target.value):1})},n.change_n_cols=function(e){n.setState({n_cols:parseInt(e.target.value)?parseInt(e.target.value):1})},n.state={n_rows:6,n_cols:9,colour:"#fff",history:[{squares:Array(256).fill(null)}],stepNumber:0,xIsNext:!0},n.connect(),console.log("connected"),n}return Object(a.a)(r,[{key:"connect",value:function(){n(391).connect("mqtt://test.mosquitto.org",{clientId:"mqttjs01"}).on("connect",(function(){}))}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();g(n)||n[e]||(n[e]=this.state.colour,this.setState({history:t.concat([{squares:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2==0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],s=g(r.squares),a=n.map((function(e,n){var r=n?"Go to move #"+n:"Go to game start";return Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){return t.jumpTo(n)},children:r})},n)}));return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),Object(i.jsxs)("div",{className:"game",children:[Object(i.jsx)("div",{className:"game-board",children:Object(i.jsx)(v,{squares:r.squares,n_rows:this.state.n_rows,n_cols:this.state.n_cols,onClick:function(e){return t.handleClick(e)}})}),Object(i.jsx)("div",{children:Object(i.jsx)(p,{handleChangeComplete:this.handleColourChange})}),Object(i.jsxs)("div",{className:"game-info",children:[Object(i.jsx)("div",{children:e}),Object(i.jsx)("ol",{children:a})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:["Number of rows:",Object(i.jsx)("input",{type:"number",onChange:this.change_n_rows})]}),Object(i.jsxs)("div",{children:["Number of cols:",Object(i.jsx)("input",{type:"number",onChange:this.change_n_cols})]})]})]})}}]),r}(l.a.Component);function g(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var s=Object(r.a)(t[n],3),a=s[0],o=s[1],c=s[2];if(e[a]&&e[a]===e[o]&&e[a]===e[c])return e[a]}return null}f.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))},178:function(e,t,n){},293:function(e,t){},295:function(e,t){},372:function(e,t){},373:function(e,t){},375:function(e,t){},377:function(e,t){},380:function(e,t){},382:function(e,t){},393:function(e,t){},395:function(e,t){},421:function(e,t){},422:function(e,t){}},[[172,1,2]]]);
//# sourceMappingURL=main.471970d1.chunk.js.map