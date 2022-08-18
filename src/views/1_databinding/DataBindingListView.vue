<template>
  <div>
    <div>
      <select name="" id="">
        <option :value="city.code" :key="city.code" v-for="city in cities">{{city.title}}</option>
      </select>
      <!-- v-for를 이용하여 자바에서의 for문과 같은 반복문을 사용할 수 있다.
      for in 문과 같이 사용가능 = cities의 요소 하나하나를 city 변수에 담아 요소 끝까지 반복한다.
      v-for를 사용할 땐 꼭 v-for를 사용하는 태그 안에 key 속성을 사용해야하며 key의 값은 유일한 값만 허용된다.
      여기서는 cities의 code가 유일하며 cities를 city변수에 담아오기떄문에 city.code 로 작성한다. -->
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>음료명</th>
            <th>가격</th>
            <th>주문수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="drink.drinkId" v-for="drink in drinkList">
            <td>{{drink.drinkId}}</td>
            <td>{{drink.drinkName}}</td>
            <td>{{drink.price}}</td>
            <td><input type="number" name="" id="" v-model="drink.qty"></td>
            <td>{{drink.price * drink.qty}}</td>
          </tr>
          <!-- 반복 하고자하는 태그에 v-for를 적용시킬 수 있다. -->
          <!-- 만약 가져온 요소에서 유니크한 값이 없다면
          :key="i" v-for=(drink, i) in drinkList 와 같이
          가져와서 담을 변수를 ( )로 패킹하고 콤마 뒤에 인덱스명을 지정한다. 이후 key에 해당 인덱스명을 지정한다.-->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: '코카콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '오렌지주스',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: '커피',
          price: 500,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: '물',
          price: 700,
          qty: 1
        },
        {
          drinkId: '5',
          drinkName: '보리차',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '6',
          drinkName: '포카리',
          price: 1000,
          qty: 1
        }
      ]
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
