<template>
  <div>
    <div :style="style1">스타일 바인딩: 글씨는 red, 폰트크기: 30px</div>
    <div :style="style2">스타일 바인딩: 글씨는 green, 폰트크기: 30px</div>
    <button @click="style1.color='blue'">색상바꾸기</button>
    <!-- 버튼이 클릭되면 style1의 color를 blue로 변경하기 -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      style1: {
        color: 'red',
        fontSize: '30px'
      },
      style2: {
        color: 'green',
        fontSize: '30px'
      }
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
