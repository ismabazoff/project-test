<template>
  <div class="header">
    <div>
      <p>TestList</p>
    </div>
    <div @click="openBasket">
      <img src="../assets/Vector.jpg" alt="">
      <div class="number" v-if="clothes.length > 0">
        <pre>{{ clothes.length }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    //Открыть корзину
    openBasket() {
      this.$store.commit('basket/open')
      document.body.style.overflow = 'hidden'
      document.querySelector('.backgroundModal').style.display = 'block'
    }
  },
  computed: {
    clothes() {
      return this.$store.state.basket.clothes
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

p {
  margin-left: 88px;
  /*font-family: PT Sans;*/
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #59606D;
}

img {
  margin-right: 108px;
  cursor: pointer;
  z-index: 1;
}

.number {
  background-color: #959DAD;
  color: white;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  margin-top: -40px;
  margin-left: 12px;
  pre{
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 10px;
    letter-spacing: 0em;
    text-align: left;
  }
}
</style>
