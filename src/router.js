import Vue from 'vue'
import VueRouter from 'vue-router'
// 手机微信首页登录页面
import login from './components/view/login-interface/login.vue'
import loginsjzc from './components/view/login-interface/loginsjzc.vue'
import loginwxdl from './components/view/login-interface/loginwxdl.vue'
// // My center
import homepage from './components/view/homepage.vue'
import zhongjian from './components/view/zhongjian.vue'
// // 基本信息 
// import mymessagehe from './components/view/essential-information/mymessagehe.vue'
// import message from './components/message.vue'
// import personalinfdbianji from './components/personalinfdbianji.vue'
// import ticationinfo from './components/ticationinfo.vue'
import loginpassword from './components/loginpassword.vue'
import ticationinform from '@/components/view/essential-information/ticationinform.vue'
import mydexinxi from './components/view/essential-information/mydexinxi.vue'
import personalinf from './components/personalinf.vue'
// import mydexinxidbianji from './components/view/essential-information/mydexinxidbianji.vue'

// //课程管理
import coursehome from './components/view/courseguanli/coursehome.vue'
// import coursetwo from './components/view/courseguanli/coursetwo.vue'
// import coursetwoyfbck from './components/view/courseguanli/coursetwoyfbck.vue'

// // 我的问答
import questionswenda from './components/view/questionsanswers/questionswenda.vue'


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'diyige',
            component: login,
            // children:[{
            // }]
        },
        {
            path: '/loginwxdl',
            name: 'loginwxdl',
            component: loginwxdl
        },
        {
            path: '/loginsjzc',
            name: 'loginsjzc',
            component: loginsjzc
        },
        // //My center 
        {
            path: '/homepage',
            name: 'homepage',
            component: homepage,
            children: [{
                path: '',
                name: 'zhongjian',
                component: zhongjian,
            },
            // 表头基本信息
            {
                path: 'mydexinxi',
                name: 'mydexinxi',
                component: mydexinxi,
                children: [{
                    path: 'personalinf',
                    name: 'personalinf',
                    component: personalinf,
                },
                {
                    path: '',
                    name: 'ticationinform',
                    component: ticationinform,
                },
                {
                    path: '',
                    name: 'loginpassword',
                    component: loginpassword,
                },
                ]
               
            },
            // 表头课程管理
            {
                path: 'coursehome',
                name: 'coursehome',
                component: coursehome,
                

            },
            // 表头我的问答
            {
                path: 'questionswenda',
                name: 'questionswenda',
                component: questionswenda,
            },

                // {
                //     path: 'mydexinxi',
                //     name: 'mydexinxi',
                //     component: mydexinxi,
                //     children: [{
                //         path: '',
                //         name: 'personalinf',
                //         component: personalinf,
                //     },]

                // },
                // {
                //     path: 'coursehome',
                //     name: 'coursehome',
                //     component: coursehome,
                // }

            ],

        },
        //     {
        //         path: 'mydexinxi',
        //         name: 'mydexinxi',
        //         component: mydexinxi,
        //         children: [{
        //             path: 'personalinf',
        //             name: 'personalinf',
        //             component: personalinf,
        //         },

        //         {
        //             path: 'ydexinxidbianji',
        //             name: 'mydexinxidbianji',
        //             component: mydexinxidbianji,
        //         },
        //     ]

        //     },
        //     {
        //         path: '/coursehome',
        //         name: 'coursehome',
        //         component: coursehome,
        //         children: [{
        //             path: '',
        //             name: 'zhongjian',
        //             component: zhongjian,
        //         }]
        //     },
        //     {
        //         path: '/questionswenda',
        //         name: 'questionswenda',
        //         component: questionswenda,
        //     },
        //     ]


        // },
        // // 基本信息，登录密码
        // {
        //     path: '/mymessagehe',
        //     name: 'mymessagehe',
        //     component: mymessagehe,
        // },
        // {
        //     path: '/ticationinform',
        //     name: 'ticationinform',
        //     component: ticationinform,
        // },
        // // {
        // //     path: '/mydexinxi',
        // //     name: 'mydexinxi',
        // //     component: mydexinxi,

        // // },
        // // {
        // //     path: '/mydexinxidbianji',
        // //     name: 'mydexinxidbianji',
        // //     component: mydexinxidbianji,
        // // },
        // //课程管理
        // // {
        // //     path: '/coursehome',
        // //     name: 'coursehome',
        // //     component: coursehome,
        // // },
        // {
        //     path: '/coursetwo',
        //     name: 'coursetwo',
        //     component: coursetwo,
        // },
        // {
        //     path: '/coursetwoyfbck',
        //     name: 'coursetwoyfbck',
        //     component: coursetwoyfbck,
        // },
        // // 我的问答
        // // {
        // //     path: '/questionswenda',
        // //     name: 'questionswenda',
        // //     component: questionswenda,
        // // },
    ]
})


