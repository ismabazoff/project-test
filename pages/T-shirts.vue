<template>
  <div class="block">
    <div class="select">
      <a>Сортировать по:</a>
      <select name="" id="">
        <option value="price">цене</option>
        <option value="famous">популярности</option>
      </select>
    </div>
    <div class="cards">
      <div class="card" v-for="item in items">
        <div class="images">
          <img class="popular" :src="item.review">
          <img class="image" :src="item.image">
          <img class="bucket" @click="addToBasket(item)" :src="item.basket">
        </div>
        <p class="description">{{ item.description }}</p>
        <strong class="price">{{ item.price }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
        {
          review: '/images/popular.jpg',
          image: '/images/t-shirt.jpg',
          basket: '/images/cart.jpg',
          description: 'Футболка',
          price: '2000 Р'
        },
      ]
    }
  },
  methods: {
    //Добавить в корзину выбранный товар
    //Добавленные в корзину товары хранятся в basket в store
    //За добавление в корзину отвечает мутация add
    addToBasket(item) {
      this.$store.commit('basket/add', item)
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  margin-top: 34px;
  margin-bottom: 66px;
}

.card {
  height: 272px;
  width: 264px;
  border-radius: 8px;
  /*box-shadow: 0px 2px 3px 0px #000000;*/
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  margin: 8px;
}

.popular {
  height: 20px;
  width: 34px;
  margin-left: 16px;
  margin-top: 17px;
}


.image {
  margin: 18px 20px 16px 0;
  height: 180px;
}

.bucket {
  height: 16px;
  width: 16px;
  margin-top: 16px;
  margin-right: 16px;
  cursor: pointer;
}

.images {
  display: flex;
}

.description {
  margin-left: 16px;
  margin-bottom: 6px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #59606D;
}

.price {
  margin-left: 16px;
  margin-bottom: 16px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

}

.block {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 42px;
  margin-left: 49px;
}

.select {
  margin-right: 70px;
}

</style>
