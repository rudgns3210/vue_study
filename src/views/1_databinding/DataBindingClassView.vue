<template>
  <div>
    <!-- <div :class="{'text-red': true, active:true}">클래스 바인딩</div> -->
    <!-- 클래스 바인딩은 특이하게 '{}' 오브젝트를 넣을 수 있다. 오브젝트형태로 'key':value로 구성되어있다
    여러개의 클래스를 적용시킬 수 있으며 ,로 구분한다.
    클래스명이 하나의 단어로 되어 있다면 ''를 생략할 수 있지만,
    클래스명 안에 -가 존재할 경우 '' 로 감싸줘야한다.
-->
    <div :class="{'text-red': hasError, active:isactive}">클래스 바인딩(오브젝트 형태로 바인딩 - 주로 사용된다)</div>
    <!-- value 부분은 true, false로 판별이 가능하므로 프로그램코드를 작성할 수 있으므로 위와 같이 작성 가능. -->
    <div :class="class2">클래스 바인딩2(배열형태로 바인딩)</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isactive: false,
      hasError: false,
      class2: ['isactive', 'hasError']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  updated() {},
  unmounted() {},
  methods: {

  }
}
</script>

<style scoped>
 .active{
  background-color: green;
  font-weight: bold;
 }

 .text-red{
  color: red;
 }
</style>
