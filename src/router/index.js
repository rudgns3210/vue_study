import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    // 프리패치를 전혀 사용하지 않는 방법
    // 한번에 모든걸 다운받음
    // 100% 접근하는 페이지 ex) home은 app.js에 포함될 수 있게
    // 상단에 import 시키기.
  },
  //  아래의 두 방식은 Lazy Load가 적용된 사례이다.
  //  하지만 사용빈도에 따라 프리패치를 사용함으로써
  //  성능 향상을 기대할 수 있다.
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about", webpackPrefetch: true */ '../views/AboutView.vue')
    // vue 버전이 업데이트되면서 사용하지 않는게 기본값
    // true로 설정함으로써 프리패치 적용 가능!
    // 첫 로딩시 캐시에 올림 따라서
    // 해당 페이지를 방문하지 않아도 페이지를 캐시에 올림
    // 장점은 화면이 전환될 때 속도는 빠르다.
    // 프리패치 사용이 많아지면 첫 페이지 로딩이 느려진다.
    // 자주 방문하는 페이지에 프리패치를 적용시키자
    // 또는 클릭시 페이지를 내려 받기에는 해당 사이즈가 클 땐
    // 프리패치를 사용하자
  },
  {
    path: '/contact',
    name: 'contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
    // vue 버전이 업데이트되면서 웹팩프리패치를 사용하지 않는게 기본값으로 적용되어 있다.
    // 프리패치를 비활성화하면 첫 페이지 로딩시 캐시에 없음
    // 해당 페이지에 접근을 시도할 시점에 캐시에 등록된다
    // 지주 방문하지 않을 페이지에는 프리패치 적용 X
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingHtmlView.vue')
    // String과 Html의 ChunkName을 동일하게 해줌으로써
    // 둘 중 어느 하나에 접근하더라도 두개의 코드 모두를 하나의 파일로 내려 받게할 수 있다 = 그룹핑
    // 연관성 있는 파일들끼리 그룹핑하기
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () =>
      import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingSelectView.vue')
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckBoxView',
    component: () =>
      import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingCheckBoxView.vue')
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () =>
      import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingRadioView.vue')
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttributeView',
    component: () =>
      import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () =>
      import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingListView.vue')
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () =>
      import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingClassView.vue')
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () =>
      import(/* webpackChunkName: "databinding" */ '../views/1_databinding/DataBindingStyleView.vue')
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () =>
      import(/* webpackChunkName: "event" */ '../views/2_event/EventClickView.vue')
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () =>
      import(/* webpackChunkName: "event" */ '../views/2_event/EventChangeView.vue')
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () =>
      import(/* webpackChunkName: "event" */ '../views/2_event/EventKeyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
