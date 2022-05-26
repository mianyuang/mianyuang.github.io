(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{508:function(t,a,s){"use strict";s.r(a);var n=s(65),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-router路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-router路由"}},[t._v("#")]),t._v(" Vue-router路由")]),t._v(" "),s("h4",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("理解：一个路由（route）就是一组映射关系，多个路由需要路由器（router）进行管理。")])]),t._v(" "),s("li",[s("p",[t._v("前端路由：key是路径，value是组件")])])]),t._v(" "),s("h4",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装vue-router，命令npm i vue-router")])]),t._v(" "),s("li",[s("p",[t._v("应用插件：Vue.use(VueRouter)")])]),t._v(" "),s("li",[s("p",[t._v("编写router配置项")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("//引入VueRouter\nimport VueRouter from 'vue-router'\n//引入组件\n//创建router实例对象，并去管理一组一组路由规则\nconst router = new VueRouter({\n  routes:[\n    {\n      path:'/about',\n      component:.........\n    }\n  ]\n})\n")])])])]),t._v(" "),s("li",[s("p",[t._v("实现切换（active-class可配置高亮样式）")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("active-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/about"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("About"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("指定展示位置")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"几个注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#几个注意点"}},[t._v("#")]),t._v(" 几个注意点")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("路由组件通常存放在pages文件夹，一般组件通常放在components文件夹。")])]),t._v(" "),s("li",[s("p",[t._v("通过切换，隐藏了路由组件，默认是被销毁的，需要的时候在去挂载。")])]),t._v(" "),s("li",[s("p",[t._v("每个组件都有自己的$route属性，里面存储着自己的路由信息。")])]),t._v(" "),s("li",[s("p",[t._v("整个应用只有一个router，可以通过组建的$router属性获取到。")])])]),t._v(" "),s("h4",{attrs:{id:"多级路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多级路由"}},[t._v("#")]),t._v(" 多级路由")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("配置多级路由项，使用children配置项：")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("routes:[\n  {\n    path:'about',\n    component:About,\n    children:[\n      {\n        path:'news',\n        component:News\n      }\n    ]\n  }\n]\n")])])])]),t._v(" "),s("li",[s("p",[t._v("跳转（需要写完整路径）")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("active-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/about/news"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("News"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"路由的query参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由的query参数"}},[t._v("#")]),t._v(" 路由的query参数")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("传递参数")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("// 第一种 to字符串的写法\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("active-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/about/news?id=666&title=nihao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("News"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n//第二种写法 to对象写法\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("active-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n  path:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/about/news"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\n  query:{\n    id:666,\n    title:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("你好"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("\n  }\n}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("News"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])]),t._v(" "),s("li",[s("p",[t._v("接收参数")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("$route.query.id\n$route.query.title\n\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"命名路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名路由"}},[t._v("#")]),t._v(" 命名路由")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("给路由命名")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("routes:[\n  {\n    path:'about',\n    component:About,\n    children:[\n      {\n        path:'news',\n        name:'hello',\n        component:News\n      }\n    ]\n  }\n]\n")])])])]),t._v(" "),s("li",[s("p",[t._v("简化跳转")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("active-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{name:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("News"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n//命名传递参数\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("active-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n  name:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\n  query:{\n    id:666,\n    title:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("你好"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("\n  }\n}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("News"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"路由的params参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由的params参数"}},[t._v("#")]),t._v(" 路由的params参数")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("配置路由，声明接收params参数")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("routes:[\n  {\n    path:'about',\n    component:About,\n    children:[\n      {\n        path:'news/:id/:title', //使用占位符声明接收params参数\n        name:'hello',\n        component:News\n      }\n    ]\n  }\n]\n")])])])]),t._v(" "),s("li",[s("p",[t._v("传递参数")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("// to字符串写法\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("active-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/news/666/nihao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("News"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n//to对象传递参数\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("active-class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":to")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n  name:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\n  params:{\n    id:666,\n    title:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("你好"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("\n  }\n}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("News"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("📌特别注意：路由携带params参数时，若使用to对象写法，则不能使用path配置项，必须要使用name配置。")])]),t._v(" "),s("h4",{attrs:{id:"路由的props配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由的props配置"}},[t._v("#")]),t._v(" 路由的props配置")]),t._v(" "),s("p",[t._v("让路由组件更方便的接收参数")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("routes:[\n  {\n    path:'about',\n    component:About,\n    children:[\n      {\n        path:'news/:id/:title', //使用占位符声明接收params参数\n        name:'hello',\n        component:News,\n        //第一种写法，props值为对象，该对象中所有的key-value的组合最终都会通过props组件传递给当前组件\n        props:{a:900}\n        //第二种写法，props值为布尔值，布尔值为true，则把路由接收到的所有params参数通过props传递给当前组件\n        props:true\n        //第三种写法，props值为函数，该函数返回的对象中每一组key-value都会通过props传给当前组件\n        props(route){\n          return {\n            id:route.query.id,\n            title:route.query.title\n          }\n        }\n      }\n    ]\n  }\n]\n")])])]),s("h4",{attrs:{id:"编程式路由导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编程式路由导航"}},[t._v("#")]),t._v(" 编程式路由导航")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("作用：不借助router-link实现路由跳转，让路由跳转更加灵活")])]),t._v(" "),s("li",[s("p",[t._v("具体编码实现")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("this.$router.push({\n  name:'xiangqing',\n  params:{\n    id:xxxx,\n    title:xxxxx\n  }\n})\nthis.$router.replace({   //替换方式\n   name:'xiangqing',\n  params:{\n    id:xxxx,\n    title:xxxxx\n  }\n})\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"缓存路由组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存路由组件"}},[t._v("#")]),t._v(" 缓存路由组件")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("作用：让不展示的路由组件保持挂载，不被销毁。")])]),t._v(" "),s("li",[s("p",[t._v("具体编码实现：")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("news"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"两个新的生命周期钩子函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两个新的生命周期钩子函数"}},[t._v("#")]),t._v(" 两个新的生命周期钩子函数")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。")])]),t._v(" "),s("li",[s("p",[t._v("具体名字：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("activated 路由组件被激活触发。")])]),t._v(" "),s("li",[s("p",[t._v("deactivated路由组件失活时触发。")])])])])]),t._v(" "),s("h4",{attrs:{id:"路由守卫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由守卫"}},[t._v("#")]),t._v(" 路由守卫")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("作用：对路由进行权限控制")])]),t._v(" "),s("li",[s("p",[t._v("分类：全局守卫、独享守卫、组件内守卫")])]),t._v(" "),s("li",[s("p",[t._v("全局守卫")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("//全局前置守卫，初始化时执行，每次路由切换时执行\nrouter.beforeEach(to,from,next)=>{\n  ..............\n}\n//全局后置守卫，初始化时执行，每次路由切换后执行\nrouter.afterEach(to,from)=>{\n...............\n  if(to.meta.title){\n    document.title=to.meta.title\n  }else{\n    document.title='vue_test'\n  }\n}\n")])])])]),t._v(" "),s("li",[s("p",[t._v("独享守卫")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("// 某一个路由独享的守卫 写在想要使用的路由里面\nrouter.beforeEnter(to,from,next)=>{\n  ..............\n}\n  \n\n")])])])]),t._v(" "),s("li",[s("p",[t._v("组件内守卫")]),t._v(" "),s("div",{staticClass:"language-vue&#x20;jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("//路由进入之前触发的函数\nbeforeRouteEnter(to,from.next){\n.....\n}\n//路由离开时触发的函数\nbeforeRouteLeave(to,from.next){\n.....\n}\n\n")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);