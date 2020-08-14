<template>
  <div>
    <city-header
      :nowcity="nowcity"
      :cities="cities"
      @change="changeNowCity"
    ></city-header>
    <city-list
      :hotcities="hotcities"
      :cities="cities"
      :letter="letter"
      @change="changeNowCity"
    ></city-list>
    <city-alphabet :cities="cities" @change="changeAlphabet"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotcities: [],
      cities: {},
      letter: '',
      nowcity: '杭州'
    }
  },
  methods: {
    getCityInfo () {
      axios.get('api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotcities = data.hotCities
        this.cities = data.cities
      }
    },
    changeAlphabet (letter) {
      this.letter = letter
    },
    changeNowCity (city) {
      this.nowcity = city
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="scss" scoped>

</style>
