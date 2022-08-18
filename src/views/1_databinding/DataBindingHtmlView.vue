<template>
  <div>
    <div>{{htmlString}}</div>
    <!-- 문자열로 바인딩 하려면 {{}} 안에 data의 키값 -->
    <div v-html="htmlString"></div>
    <!-- html 태그 자체를 바인딩 하려면 v-html="" 안에 data의 키값 -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문자</p>'
    }
  },
  setup() {},
  created() {},
  // created는 vue 컴포넌트가 실행되는 순간 자동으로 created내에 정의된 코드가 실행된다.
  mounted() {},
  // template 내에 지정된 html dom이 화면에 로딩이 되는 순간 mounted 코드 실행
  updated() {},
  unmounted() {},
  // 해당 컴포넌트에서 다른 컴포넌트로 이동할 때 unmounted내 코드 실행
  methods: {
    // 함수 작성 부분
  }
}
</script>
