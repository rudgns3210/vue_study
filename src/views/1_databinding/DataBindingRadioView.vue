<template>
  <div>
    <div>
      <input type="radio" name="" id="html" value="HTML" v-model="favoriteLang" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="" id="css" value="CSS" v-model="favoriteLang" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" name="" id="js" value="JS" v-model="favoriteLang" />
      <label for="js">JS</label>
    </div>
    <div>선택한 지역: {{favoriteLang}}</div>
  </div>
  <!-- v-model 속성이 무조건 value와 연결되는 것은 아니다.
  input과 select 내에서 v-model은 값과 연결되지만
  checkbox와 radio속성 에서는 체크의 유무와 연관되어있다  -->
</template>

<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ''
      // v-model로 radio 속성과 데이터 바인딩을 할 경우 데이터선언 자체를 반드시 문자열 형태로로 선언되어야한다
      // 그 이유는 CheckBox는 복수 선택이 가능하지만
      // Radio 속성은 단 하나만 선택되기 때문이다
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
