<template>
<!-- template 안에 태그는 무조건 최상위 태그 하나로 전체를        묶어야한다. 따라서 div를 가장 많이 이용한다. -->
<div>
  <h1>Hello {{userName}}</h1>
  <!-- 문자 데이터를 바인딩 할 경우 {{}} 안에 키를 입력한다. -->
  <p>{{message}}</p>
</div>
</template>

<script>
export default {
  // html태그(template태그 안을 의미) 내에서 사용할 데이터는
  // data(){} 함수 내 return 오브젝트 안에 정의 후 사용해야한다.
  data() {
    return {
      userName: 'Kyunghun Lee',
      message: 'Welcome to Here'
    }
  }
}
</script>

<style scoped>
.text-red{
  color: red;
}
</style>

<!-- <template>
  <div>
    <h1>{{sampleData}}</h1>
    <h1>{{sampleData2}}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
     sampleData: 'Hello',
     sampleData2: 'KyungHun'
  };
},
  setup() {},
  created() {},
  mounted() {},
  updated() {},
  unmounted() {},
  methods: {

  }
}
</script> -->
