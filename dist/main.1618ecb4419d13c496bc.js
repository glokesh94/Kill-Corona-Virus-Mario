webpackJsonp([1],{"0EcA":function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o("GiK3"),u=r(l),c=o("KSGD"),d=r(c),f=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.boardDetails=o.props.boardDetails,o.mushrooms=o.props.mushrooms,o.startTime=(new Date).getTime(),o.steps=0,o.shiftDirection=function(e){o.intervalId&&clearInterval(o.intervalId),o.intervalId=setInterval(function(){switch(e){case 37:o.setState({top:o.state.top,left:o.state.left-1}),o.checkDirection(e);break;case 38:o.setState({top:o.state.top-1,left:o.state.left}),o.checkDirection(e);break;case 39:o.setState({top:o.state.top,left:o.state.left+1}),o.checkDirection(e);break;case 40:o.setState({top:o.state.top+1,left:o.state.left}),o.checkDirection(e);break;default:return}},50);var t=o.props.mushrooms.find(function(e){return e.x===o.state.left&&e.y===o.state.top&&e.remaining});t&&o.props.eatMushroom(t,o.startTime,o.steps)},o.checkDirection=function(e){e.keyCode&&(o.steps+=1);var t=e.keyCode||e,r=o.state,n=r.left,a=r.top,i=o.boardDetails.verticalBlocks-1;n>o.boardDetails.horizontalBlocks-1-1&&39===t?o.shiftDirection(37):a>i-1&&40===t?o.shiftDirection(38):a<1&&38===t?o.shiftDirection(40):n<1&&37===t?o.shiftDirection(39):o.shiftDirection(t)},o.state={top:0,left:0},o}return i(t,e),s(t,[{key:"componentDidMount",value:function(){window.onkeydown=this.checkDirection}},{key:"componentWillUnmount",value:function(){this.intervalId&&clearInterval(this.intervalId)}},{key:"render",value:function(){var e={height:this.boardDetails.blockHeight+"px",width:this.boardDetails.blockWidth+"px",marginTop:this.state.top*this.boardDetails.blockHeight+"px",marginLeft:this.state.left*this.boardDetails.blockWidth+"px"};return u.default.createElement("div",null,u.default.createElement("div",{className:"entity player",style:e}))}}]),t}(l.Component);f.propTypes={boardDetails:d.default.object.isRequired,mushrooms:d.default.array.isRequired,eatMushroom:d.default.func.isRequired},t.default=f},"7BGO":function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=o("GiK3"),c=r(u),d=o("CIox"),f=o("KSGD"),p=r(f),h=o("0EcA"),m=r(h),b=o("Mk2L"),y=r(b),k=function(e){function t(e){a(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));o.totalMushrooms=Math.round((o.props.horizontalBlocks+o.props.verticalBlocks)/2),o.eatMushroom=function(e,t,r){var a=[].concat(n(o.state.mushrooms));a[e.key].remaining=!1,o.setState({mushrooms:a,score:o.state.score+1}),o.totalMushrooms===o.state.score&&(o.props.setTotalTime(t,r),o.props.history.push("/score"))},o.state={blockWidth:30,blockHeight:30,mushrooms:[],score:0},o.props.horizontalBlocks||o.props.verticalBlocks||o.props.history.push("/");for(var r=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},s=o.props.horizontalBlocks,l=o.props.verticalBlocks,u=0;u<o.totalMushrooms;u++)o.state.mushrooms.push({key:u,x:r(0,s-1),y:r(0,l-1),remaining:!0});return o}return s(t,e),l(t,[{key:"render",value:function(){var e=this,t={width:this.props.horizontalBlocks*this.state.blockWidth+"px",height:this.props.verticalBlocks*this.state.blockHeight+"px"};return c.default.createElement("div",null,c.default.createElement("h2",{className:"funky"},"🙂 Kill-Corona-Virus-Mario 🙂 Develop by ",c.default.createElement("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/me-gupta-lokesh/",target:"_blank"},"Lokesh")," 🙂 "),c.default.createElement("p",null,"Score: ",this.state.score," / ",this.totalMushrooms),c.default.createElement("p",null,"Start with any of the arrow keys"),c.default.createElement("div",{className:"board",style:t},c.default.createElement(m.default,{boardDetails:{blockWidth:this.state.blockWidth,blockHeight:this.state.blockHeight,horizontalBlocks:this.props.horizontalBlocks,verticalBlocks:this.props.verticalBlocks},mushrooms:this.state.mushrooms,eatMushroom:this.eatMushroom}),this.state.mushrooms.filter(function(e){return e.remaining}).map(function(t){return c.default.createElement(y.default,{key:t.key,x:t.x,y:t.y,blockWidth:e.state.blockWidth,blockHeight:e.state.blockHeight})})))}}]),t}(u.Component);k.propTypes={horizontalBlocks:p.default.number.isRequired,verticalBlocks:p.default.number.isRequired,setTotalTime:p.default.func.isRequired,history:p.default.any.isRequired},t.default=(0,d.withRouter)(k)},Mk2L:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o("GiK3"),u=r(l),c=o("KSGD"),d=r(c),f=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={x:o.props.x,y:o.props.y,blockWidth:o.props.blockWidth,blockHeight:o.props.blockHeight},o}return i(t,e),s(t,[{key:"render",value:function(){var e={width:this.state.blockWidth+"px",height:this.state.blockHeight+"px",marginLeft:this.state.x*this.state.blockWidth+"px",marginTop:this.state.y*this.state.blockHeight+"px"};return u.default.createElement("div",null,u.default.createElement("div",{className:"entity mushroom",style:e}))}}]),t}(l.Component);f.propTypes={x:d.default.number.isRequired,y:d.default.number.isRequired,blockWidth:d.default.number.isRequired,blockHeight:d.default.number.isRequired},t.default=f},"XgI/":function(e,t){throw new Error("Module build failed: Error: Missing binding C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\node-sass\\vendor\\win32-x64-64\\binding.node\nNode Sass could not find a binding for your current environment: Windows 64-bit with Node.js 10.x\n\nFound bindings for the following environments:\n  - Linux 64-bit with Node.js 12.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\node-sass\\lib\\binding.js:15:13)\n    at Object.<anonymous> (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\node-sass\\lib\\index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at Object.<anonymous> (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\sass-loader\\lib\\loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at loadLoader (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\webpack\\lib\\NormalModule.js:182:3)\n    at NormalModule.build (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\webpack\\lib\\NormalModule.js:275:15)\n    at Compilation.buildModule (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\webpack\\lib\\Compilation.js:157:10)\n    at factoryCallback (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\webpack\\lib\\Compilation.js:348:12)\n    at factory (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\webpack\\lib\\NormalModuleFactory.js:243:5)\n    at applyPluginsAsyncWaterfall (C:\\Users\\Lokes\\OneDrive\\Desktop\\Game\\New\\Kill-Corona-Virus-Mario\\node_modules\\webpack\\lib\\NormalModuleFactory.js:94:13)")},"Yq+E":function(e,t,o){var r=o("XgI/");"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0};n.transform=void 0;o("MTIv")(r,n);r.locals&&(e.exports=r.locals)},ewcn:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},l=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=o("GiK3"),c=r(u),d=o("F8kA"),f=o("ziJz"),p=r(f),h=o("7BGO"),m=r(h),b=o("ukzJ"),y=r(b),k=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.setBlocks=function(e,t){o.setState({horizontalBlocks:e,verticalBlocks:t})},o.setTotalTime=function(e,t){var r=(new Date).getTime()-e;o.setState({totalTime:r,steps:t})},o.renderHome=function(){return c.default.createElement(p.default,s({setBlocks:o.setBlocks},o.state))},o.renderBoard=function(){return c.default.createElement(m.default,s({setTotalTime:o.setTotalTime},o.state))},o.renderScore=function(){return c.default.createElement(y.default,o.state)},o.state={horizontalBlocks:0,verticalBlocks:0,totalTime:0,steps:0},o}return i(t,e),l(t,[{key:"render",value:function(){return c.default.createElement(d.BrowserRouter,null,c.default.createElement("div",null,c.default.createElement(d.Route,{path:"/",render:this.renderHome,exact:!0}),c.default.createElement(d.Route,{path:"/board",render:this.renderBoard}),c.default.createElement(d.Route,{path:"/score",render:this.renderScore})))}}]),t}(u.Component);t.default=k},qYAe:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=o("GiK3"),a=r(n),i=o("O27J"),s=o("ewcn"),l=r(s);o("Yq+E"),(0,i.render)(a.default.createElement(l.default,null),document.getElementById("root"))},ukzJ:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o("GiK3"),u=r(l),c=o("F8kA"),d=o("CIox"),f=o("KSGD"),p=r(f),h=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.props.totalTime||o.props.history.push("/"),o}return i(t,e),s(t,[{key:"render",value:function(){var e=Math.floor(this.props.totalTime%36e5/6e4),t=Math.floor(this.props.totalTime%6e4/1e3);return u.default.createElement("div",{className:"funky"},u.default.createElement("h2",{className:"funky"},"🙂 Kill-Corona-Virus-Mario 🙂 Develop by ",u.default.createElement("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/me-gupta-lokesh/",target:"_blank"},"Lokesh")," 🙂 "),u.default.createElement("h2",null,u.default.createElement("p",null,e?e+" minute(s), ":"",t||0," second(s)"),u.default.createElement("p",null,this.props.steps||0," Steps taken")),u.default.createElement("br",null),u.default.createElement(c.Link,{className:"btn flat",to:"/board"},"Restart"),u.default.createElement(c.Link,{className:"btn flat",to:"/"},"Home"))}}]),t}(l.Component);h.propTypes={totalTime:p.default.number.isRequired,steps:p.default.number.isRequired,history:p.default.any.isRequired},t.default=(0,d.withRouter)(h)},ziJz:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o("GiK3"),u=r(l),c=o("CIox"),d=o("KSGD"),f=r(d),p=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.play=function(){o.props.setBlocks(parseInt(o.state.width,10),parseInt(o.state.height,10)),o.props.history.push("/board")},o.handleChangeWidth=function(e){o.setState({width:e.target.value},function(){o.areValuesValid()})},o.handleChangeHeight=function(e){o.setState({height:e.target.value},function(){o.areValuesValid()})},o.state={width:void 0,height:void 0,isValid:!1},o}return i(t,e),s(t,[{key:"areValuesValid",value:function(){this.setState({isValid:this.state.width>0&&this.state.height>0&&this.state.width<=20&&this.state.height<=10})}},{key:"render",value:function(){return u.default.createElement("div",{className:"coronaVirus"},u.default.createElement("h2",{className:"funky"},"🙂 Kill-Corona-Virus-Mario 🙂 Develop by ",u.default.createElement("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/me-gupta-lokesh/",target:"_blank"},"Lokesh")," 🙂 "),u.default.createElement("p",{className:"notesOtherContent"},"Kill Your Lockdown Time"),u.default.createElement("div",{class:"Player"}),u.default.createElement("p",{className:"notesContent"},"Enter dimensions Width: 1-20 & Height: 1-10"),u.default.createElement("input",{type:"number",min:"1",max:"20",className:"flat",onChange:this.handleChangeWidth,placeholder:"Width 1 - 20"}),u.default.createElement("input",{type:"number",min:"1",max:"10",className:"flat",onChange:this.handleChangeHeight,placeholder:"Height 1 - 10"}),u.default.createElement("br",null),u.default.createElement("button",{className:"btn flat funky",onClick:this.play,disabled:!this.state.isValid},"Play"))}}]),t}(l.Component);p.propTypes={setBlocks:f.default.func.isRequired,history:f.default.any.isRequired},t.default=(0,c.withRouter)(p)}},["qYAe"]);