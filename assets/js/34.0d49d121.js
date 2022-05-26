(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{506:function(t,a,e){"use strict";e.r(a);var s=e(65),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue脚手架配置代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue脚手架配置代理"}},[t._v("#")]),t._v(" VUE脚手架配置代理")]),t._v(" "),e("h4",{attrs:{id:"方法一"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[t._v("#")]),t._v(" 方法一")]),t._v(" "),e("p",[t._v("在vue.config.js中添加如下配置：")]),t._v(" "),e("div",{staticClass:"language-vue&#x20;jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[t._v('devServer:{\n  proxy:"http://localhost:5000"\n}\n')])])]),e("p",[t._v("说明：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("优点：配置简单，请求资源时直接发给前端")])]),t._v(" "),e("li",[e("p",[t._v("缺点：不能配置多个代理，不能灵活控制请求是否走代理。")])]),t._v(" "),e("li",[e("p",[t._v("工作方式：若按照上面的配置代理，当前请求不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）")])])]),t._v(" "),e("h4",{attrs:{id:"方法二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[t._v("#")]),t._v(" 方法二")]),t._v(" "),e("p",[t._v("在vue.config.js中编写详细配置：")]),t._v(" "),e("div",{staticClass:"language-vue&#x20;jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[t._v("module.exports = {\n  devServer:{\n    proxy:{\n      'api1':{ //匹配所有'api1'开头的请求路径\n        target: 'http:localhost:5000' //代理目标的基础路径\n        changeOrigin: true,\n        pathRewrite:{'^/api1':''}\n      }\n      'api2':{ //匹配所有'api2'开头的请求路径\n        target: 'http:localhost:5001' //代理目标的基础路径\n        changeOrigin: true,\n        pathRewrite:{'^/api2':''}\n      }\n    }\n  }\n}\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);