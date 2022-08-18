<template>
  <div>
    <input type="text" v-model="userId"/>
    <!-- v-model을 이용하여 양방향 바인딩이 가능하다 -->
    <button @click="myfunction()">클릭</button>
    <!-- onclick 대신에 @click으로 사용된다.
    파라미터가 존재한다면 myfunction();으로 작성하지만
    전달할 파라미터가 없다면 ;은 생략 가능 -->
    <button @click="changedata()">변경</button><br/>
    <input type="text" v-model="num1"/> +
    <input type="text" v-model="num2"/> =
    <span>{{num1 + num2}}</span><br/>

    <input type="text" v-model.number="num3"/> +
    <input type="text" v-model.number="num4"/> =
    <span>{{num3 + num4}}</span>
    <!-- v-model.number는 해당 문자를 숫자로 자동형변환을 해준다 -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userId: 'Here',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  updated() {},
  unmounted() {},
  methods: {
    myfunction() {
      console.log(this.userId)
    },
    changedata() {
      this.userId = 'kyunghun'
    }
  }
}
</script>
