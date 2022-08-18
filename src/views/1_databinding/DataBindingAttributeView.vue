<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly/>
    <input type="text" name="" id="" :value="userId" readonly/>
    <!-- value 속성에 v-bind를 이용해서 직접 바인드를 할 수 있다
    직접바인딩을 하고자하는 속성 앞에 ' : ' 를 이용하여 v-bind는 생략이 가능하다
    위에 두 코드는 같은 의미다-->
    <img :src="imgSrc" alt="" style="width:100px; height: auto;" /><br/>
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
    <!-- disabled = 비활성화
    disabled="txt1 === ''" -> txt1이 비어 있다면 true이므로
    버튼이 비활성화된다.
    txt1에 어떠한 값이 존재한다면 조건식이 False이므로
    버튼이 활성화된다. -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: '123123',
      imgSrc: 'https://danawalab.github.io/images/2020-02-15-Common-vuejs-uiComponentLibrary/Untitled%201.png',
      txt1: ''
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
