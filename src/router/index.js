import Vue from 'vue'
import Router from 'vue-router'

import index from "@/views/home/index"
import Login from "@/views/login/login"
import notice from "@/views/notice/notice"
import user from "@/views/user/user"
import life from "@/views/life/life"
import partyToday from "@/views/partyToday/partyToday"

import newsDetail from "@/views/newsDetail/newsDetail"
import newsList from "@/views/newsList/newsList"

import anytimephoto from "@/views/anytimephoto/anytimephoto"

import map from "@/views/map/map"
import info from "@/views/info/info"
import score from "@/views/score/score"
import uppass from  "@/views/uppass/uppass"
import pay from    "@/views/pay/pay"
import scoreList from "@/views/scoreList/scoreList"

import auditStatus from "@/views/auditStatus/auditStatus"
import lifeChoice from "@/views/lifeChoice/lifeChoice"
import interaction from "@/views/interaction/interaction"
import interactionDetail from "@/views/interaction/interactionDetail"

Vue.use(Router)
const router= new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path:"/login",
      name:"login",
      component:Login,
      meta:{
        title:"登录",
       
      }
    },
    //通知早知道列表路由
    {
      path: "/notice",
      name: "notice",
      component: notice,
      meta:{
        title:"通知早知道",
        type: 2
      }
    }, 
    //通知早知道列表详情路由
    {
      path:"/noticeDetail/:id" ,
      name:"noticeDetail",
      component: newsDetail,
      meta:{
        title:"通知早知道", 
      }
    },
    //我的建党页面路由
    {
      path: "/user",
      name: "user",
      component: user,
      meta:{
        title:"我的建档"
      }
    },
    //信工新闻眼列表路由
    {
      path: "/newseye",
      name: "newseye",
      component: newsList,
      meta: {
        title: "信工新闻眼",
        type:0,
        page: 1,
        rows: 10
      }
    },
    //轮播图详细信息路由
    {
      path: "/newsDetail/:id",
      name: "newsDetail",
      component: newsDetail,
      meta: {
        title: "随时随地学",
      }
    },
    // 信工新闻眼列表项详细信息路由
    {
      path: "/newseyeDetail/:id",
      name: "newseyeDetail",
      component: newsDetail,
      meta: {
        title: "信工新闻眼",
      }
    },
    //掌上组织生活路由
    {
      path:"/life",
      name:"life",
      component:life,
      meta:{
        title:"掌上组织生活"
      }
    },
    //党上组织生活--->政治学习列表路由
    {
      path:"/study",
      name:"study",
      component: newsList,
      meta:{
        title:"政治学习",
        type:8
      }
    },
    //党上组织生活--->政治学习列表详情路由
    {
      path:"/studyDetail/:id",
      name:"studyDetail",
      component: newsDetail,
      meta:{
        title:"政治学习"
      }
    },
    //地图
    {
      path:"/map",
      name:"map",
      component:map,
      meta:{
        title:"地图"
      }

    },
    //党建一点通路由
   {
     path: "/oneclick",
     name: "oneclick",
     component: newsList,
    //  component: partyOneClick,
      meta: {
        title: "党建一点通",
        type:3,
      }
    },
    //党建一点通列表详情页面
    {
      path: "/oneclickDetail/:id",
      name: "oneclickDetail",
      component: newsDetail,
      meta: {
        title: "党建一点通",
      }
    },
    //党员亮身份列表页面
    {
      path:"/showidentity",
      name:"showidentity",
      component: newsList,
      meta:{
        title: "党员亮身份",
        type:5
      }
    },
    //党员亮身份详情页面
    {
      path: "/showidentityDetail:/id",
      name: "showidentityDetail",
      component: newsDetail,
      meta: {
        title: "党员亮身份"
      }
   },
    //党史上的今天
    {
      path:"/today",
      name:"today",
      component: partyToday,
      meta:{
        title:"党史上的今天"
      }
    },
    //随时随地学列表路由
    {
      path:"/anytimestudy",
      name:"anytimestudy",
      component: newsList,
      meta:{
        title:"随时随地学",
        type:6

      }
    },
    //随时随地学列表详情路由
    {
      path: "/anytimestudyDetail/:id",
      name: "anytimestudyDetail",
      component: newsDetail,
      meta: {
        title: "随时随地学"

      }
    },
    //制度建设列表路由
    {
      path:"/system",
      name:"system",
      component: newsList,
      meta:{
        title:"制度建设",
        type:4
      }
    },
    //制度建设列表详情路由
    {
      path:"/systemDetail:/id",
      name:"systemDetail",
      component: newsDetail,
      meta:{
        title:"制度建设"
      }
    },
    //活动特色列表路由
    {
      path:"/activity",
      name:"activity",
      component: newsList,
      meta:{
        title:"特色活动",
        type:1
      }
    },
    //特色活动列表详情路由
    {
      path: "/activityDetail/:id",
      name: "activityDetail",
      component: newsDetail,
      meta: {
        title: "特色活动",
      }

    },
    //随时随地拍列表路由
    {
      path:"/anytimephoto",
      name:"anytimephoto",
      component: anytimephoto,
      meta:{
        title:"随时随地拍",
        type:7
      }
    },
    //随时随地拍列表详情页面
    {
      path: "/anytimephotoDetail",
      name: "anytimephotoDetail",
      component: newsDetail,
      meta: {
        requiresAuth: true,
        title: "随时随地拍"
      }
    },
    //个人信息路由
    {
      path:"/info",
      name:"info",
      component:info,
      meta:{
        title:"个人信息",
        requiresAuth: true
      }
    },
    //编辑个人信息
    {
      path:"/editinfo",
      name:"editinfo",
      component:info,
      meta:{
        title:"编辑个人信息"

      }
    },
    //个人量化积分
    {
      path:"/score",
      name:"score",
      component:score,
      meta:{
        title:"个人量化积分",
        requiresAuth: true
      }
    },

   //修改密码
    {
      path:"/uppass",
      name:"uppass",
      component:uppass,
      meta:{
        title:"修改密码",
        requiresAuth: true
      }
    },
    //党费缴纳
    {
      path:"/pay",
      name:"pay",
      component:pay,
      meta:{
        title:"党费缴纳",
        requiresAuth: true
      }
    },
    //积分明细列表
    {
      path:"/scoreList",
      name:"scoreList",
      component: scoreList,
      meta:{
        title:"积分明细",
        requiresAuth: true

      }
    },
    //思想汇报路由
    {
      path:"/auditStatus",
      name:"auditStatus",
      component: auditStatus,
      meta:{
        title:"思想汇报",
        requiresAuth:true,      
      }
    },
    //心得总结
    {
      path:"/ideology",
      name:"ideology",
      component: auditStatus,
      meta: {
        title: "心得总结",
        requiresAuth: true,
      }


    },
    //民主评议
    {
      path:"/lifeChoice",
      name:"lifeChoice",
      component: lifeChoice,
      meta:{
        title:"掌上组织生活",
        // requiresAuth: true,
      }
    },
    //党员云互动
    {
      path:"/interaction",
      name:"interaction",
      component: interaction,
      meta:{
        title:"党员云互动"
      }

    },
    //党员互动之回复
    {
      path:"/interactionDetail",
      name:"interactionDetail",
      component: interactionDetail,
      meta:{
        title:"党员云互动"
      }   
    },
    //民主评议
    {
      path:"/discuss",
      name:"discuss",
      component: () => import ( "@/views/discuss/discuss"),
      meta:{
        title:"民主评议"
      }
    },
    //个人总结
    {
      path:"/personalsummary",
      name:"personalsummary",
      component: () => import("@/views/personalsummary/personalsummary"),
      meta:{
        title:"个人总结"
      }
    },
    {
      path:"/Members",
      name:"Members",
      component: () => import("@/views/members/members"),
      meta:{
        title:"参评党员"
      }
    },
    //修改党员互动评论回复的bug
    {
      path:"/chat",
      name:"chat",
      component:() =>import ("@/views/test/chating"),
      meta:{
        title:"测试"
      }
    },
    //弹簧效果
    { 
      path: "/second",
      name: "second",
      component: () => import("@/views/test/second"),
      meta: {
        title: "测试"
      }
    },
    //测试弹簧效果对其他页面有没有影响
    {
      path:"/three",
      name:"three",
      component: () => import("@/views/test/three"),

    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let username = JSON.parse(window.localStorage.vuex).fromData.username
    if (!username) {
        next({
          path: '/login',
          // query: { redirect:"/login" }
        })
    } else   {
      next()
     }
  } 



})





export default router
