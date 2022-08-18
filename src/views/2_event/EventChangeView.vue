<template>
<!-- Change Event는 select 태그, input type=checkbox, radio 태그에서 가장 많이 사용된다. -->
  <div>
    <!-- 첫번째 select에는 도시 이름이,
    첫번째 select에서 선택된 결과에 따라
    두번째 select의 값이 변경되도록 구성
    = 멀티 셀렉트형태가 가장 많이 사용된다 -->
    <select name="" id="" @change="changeCity($event)" v-model="selectedCity">
      <option value="">==도시선택==</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList">
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList">
        {{dong.dongTitle}}
      </option>
    </select>
    <!-- ($event)는 생략가능 -->
    <!-- 위 코드를 아래 코드로 간단하게 작성 가능
    하지만 아래 코드보다는 위 코드가 가독성이나 협업부분에서 더 선호되는 방식 -->
    <!-- <select name="" id="" v-model="selectedCity">
      <option value="">==도시선택==</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList">
        {{ city.title }}
      </option>
    </select> -->
    <!-- 함수를 거치지않고 함수의 내용을 v-for 안에 직접 작성 가능 -->
    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in dongList.filter((dong) => dong.cityCode === selectedCity)">
        {{dong.dongTitle}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '051', title: '부산' },
        { cityCode: '064', title: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울 4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산 1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산 2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산 3동' },
        { cityCode: '051', dongCode: '4', dongTitle: '부산 4동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주 1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주 2동' },
        { cityCode: '064', dongCode: '3', dongTitle: '제주 3동' },
        { cityCode: '064', dongCode: '4', dongTitle: '제주 4동' }
      ],
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  updated() {},
  unmounted() {},
  methods: {
    changeCity(event) {
      console.log(event.target.tagName)
      this.selectedDongList = this.dongList.filter(dong => dong.cityCode === this.selectedCity)
    }
  }
}
</script>
