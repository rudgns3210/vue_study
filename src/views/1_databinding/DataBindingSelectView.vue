<template>
  <div>
    <select name="" id="" v-model="SelectCity">
      <option value=""></option>
      <option value="02">서울</option>
      <option value="051">부산</option>
      <option value="064">제주</option>
    </select>
    <!-- v-model은 사용자가 값을 변경 가능한 곳에만 사용가능 -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      SelectCity: '02'
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
