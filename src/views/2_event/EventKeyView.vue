<template>
  <div>
    <!-- <input type="search" name="" id="" @keyup="checkEnter($event)" v-model="searchText"/> -->
    <!-- 위 코드를 아래 코드로 변환 가능 -->
    <input type="search" name="" id="" @keyup.enter="doSearch" v-model="searchText"/>
    <!-- 첫번째 input 태그 코드는 키가 눌러졌을때 특정 함수를 호출하여
    함수 내에서 어떠한 키가 눌러졌는지 판별하는 코드지만
    두번째 input 태그 코드로 변환하면서 엔터가 눌러졌는지
    판별하는 함수를 작성할 필요가 없어졌다. -->
      <!-- .enter 엔터키가 눌러졌을 때 반응
      .tab 탭키가 눌러졌을 때 반응
      .delete delete 혹은 백스페이스가 눌러졌을 때
      .esc
      .space 스페이스바가 눌러졌을 때
      .up 위쪽 화살표
      .down 아래쪽 화살표
      .left 왼쪽 화살표
      .right 오른쪽 화살표가 눌러졌을 때
      .ctrl.x
        등 해당 키가 눌러졌을 경우 반응한다.
      .stop - event.stopPropagation()
      .prevent - event.preventDefault();
       -->
    <button @click="doSearch">조회</button>
    <button type="submit" @click.prevent="doSearch">prevent버튼</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  updated() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(event) {
      // 엔터키를 입력했을 때 keycode 값이 13 이므로
      // 엔터키가 눌러졌는지를 판별하기 위해 13과 비교
      if (event.keyCode === 13) {
        this.doSearch()
        // doSearch도 오브젝트안에 있기때문에 this로 작성해주어야한다.
      }
    }
  }
}
</script>
