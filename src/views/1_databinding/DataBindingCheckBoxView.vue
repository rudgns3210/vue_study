<template>
  <div>
    <div>
      <input type="checkbox" name="" id="html" value="HTML" v-model="favoriteLang" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" name="" id="css" value="CSS" v-model="favoriteLang" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" name="" id="js" value="JS" v-model="favoriteLang" />
      <label for="js">JS</label>
    </div>
    <div>선택한 지역: {{favoriteLang}}</div>
  </div>
  <!-- v-model 속성이 무조건 value와 연결되는 것은 아니다.
  input과 select 내에서 v-model은 값과 연결되지만
  checkbox에서는 체크의 유무와 연관되어있다  -->
</template>

<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: []
      // 체크박스는 반드시 배열형태로 선언되어야한다
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
