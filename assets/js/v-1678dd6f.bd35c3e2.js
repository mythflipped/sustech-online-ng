"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6992],{5870:(e,t,a)=>{a.r(t),a.d(t,{data:()=>n});const n={key:"v-1678dd6f",path:"/transport/bustimer-wx.html",title:"🚌校园巴士时刻表 SUSTech Campus Bus Info",lang:"zh-CN",frontmatter:{sidebar:!1,navbar:!1},excerpt:"",headers:[{level:2,title:"路线图 System Map",slug:"路线图-system-map",children:[]},{level:2,title:"车辆位置 Bus Realtime Loaction",slug:"车辆位置-bus-realtime-loaction",children:[]},{level:2,title:"时间表 Timetable",slug:"时间表-timetable",children:[]}],filePathRelative:"transport/bustimer-wx.md",git:{createdTime:1631432108e3,updatedTime:1633057713e3,contributors:[{name:"liziwl",email:"leezisy@gmail.com",commits:4},{name:"Ziqiang Li",email:"leezisy@gmail.com",commits:1}]}}},7740:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(6252),s=a(3577),i=a(4789);const l=(0,n._)("h1",{id:"🚌校园巴士时刻表-sustech-campus-bus-info",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#🚌校园巴士时刻表-sustech-campus-bus-info","aria-hidden":"true"},"#"),(0,n.Uk)(" 🚌校园巴士时刻表 SUSTech Campus Bus Info")],-1),o=(0,n._)("h2",{id:"路线图-system-map",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#路线图-system-map","aria-hidden":"true"},"#"),(0,n.Uk)(" 路线图 System Map")],-1),r=(0,n._)("p",null,[(0,n._)("a",{"data-fancybox":"",title:"",href:"https://cdn.jsdelivr.net/gh/sustech-cra/sustech-online-ng@master/docs/transport/busline2.png"},[(0,n._)("img",{src:i,alt:""})])],-1),d=(0,n._)("h2",{id:"车辆位置-bus-realtime-loaction",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#车辆位置-bus-realtime-loaction","aria-hidden":"true"},"#"),(0,n.Uk)(" 车辆位置 Bus Realtime Loaction")],-1),m=(0,n._)("p",null,"位置每5秒自动刷新。Location refreshes automatically every 5 seconds",-1),u=(0,n._)("h2",{id:"时间表-timetable",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#时间表-timetable","aria-hidden":"true"},"#"),(0,n.Uk)(" 时间表 Timetable")],-1),c={id:"bustable"},h=(0,n._)("br",null,null,-1);var b=a(9669),g=a.n(b);const p={mounted(){g().get("/2021.json").then((e=>function(e){var t={};for(let a=0;a<e.days.length;a++)t[e.days[a].date]=e.days[a].isOffDay;var a,n=new Date,s=`${new Intl.DateTimeFormat("en",{year:"numeric"}).format(n)}-${new Intl.DateTimeFormat("en",{month:"2-digit"}).format(n)}-${new Intl.DateTimeFormat("en",{day:"2-digit"}).format(n)}`;if(null==t[s]){console.log("Not in GOV declaration");var i=n.getDay();a=6==i||0==i}else console.log("In GOV declaration"),a=t[s];a?(console.log("节假日"),document.getElementById("bustable").getElementsByTagName("button")[1].click()):(console.log("工作日"),document.getElementById("bustable").getElementsByTagName("button")[0].click())}(e.data)))}},f=(0,a(3744).Z)(p,[["render",function(e,t,a,i,b,g){const p=(0,n.up)("Realtimemap"),f=(0,n.up)("bus-timer"),y=(0,n.up)("grid-list"),_=(0,n.up)("data-request"),w=(0,n.up)("object-selector");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,o,r,d,m,(0,n.Wm)(p),u,(0,n._)("div",c,[(0,n.Wm)(w,{objs:{"工作日 Workday":!0,"节假日 Holiday":!1}},{default:(0,n.w5)((e=>[h,(0,n.Wm)(w,{objs:e.selected?{"Line 1 号线 │ 工学院方向 To COE":"/bus_times/one_down.json","Line 1 号线 │ 欣园方向 To Joy Highland":"/bus_times/one_up.json","Line 2 号线 │ 科研楼方向 To Research Building":"/bus_times/two_down.json","Line 2 号线 │ 欣园方向 To Joy Highland":"/bus_times/two_up.json"}:{"Line 1 号线 │ 工学院方向  To COE":"/bus_times/one_down_holiday.json","Line 1 号线 │ 欣园方向 To Joy Highland":"/bus_times/one_up_holiday.json"}},{default:(0,n.w5)((e=>[(0,n.Wm)(_,{path:e.selected},{default:(0,n.w5)((({data:e})=>[e?((0,n.wg)(),(0,n.j4)(f,(0,s.vs)((0,n.dG)({key:0},e)),null,16)):(0,n.kq)("",!0),e?((0,n.wg)(),(0,n.j4)(y,{key:1,data:e.times},null,8,["data"])):(0,n.kq)("",!0)])),_:2},1032,["path"])])),_:2},1032,["objs"])])),_:1})])],64)}]])},4789:(e,t,a)=>{e.exports=a.p+"assets/img/busline2.9ffe20d1.png"}}]);