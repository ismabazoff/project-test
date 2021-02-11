<template>
  <div>
    <div :class="{
      basket: true,
      opened:$store.state.basket.isOpened
    }">
      <div class="top">
        <h1>Корзина</h1>
        <img class="close-basket" @click="closeBasket" src="../assets/Group2.jpg" alt="">
      </div>
      <div class="send">
        <p id="clothes-basket" v-if="clothes.length == 0">Пока что вы ничего не добавили
          в корзину.</p>
        <div class="clothes-in-basket">
          <strong v-if="clothes.length > 0">Товары в корзине</strong>
        </div>
        <!--      Отобразить добавленные в корзину товары-->
        <div class="cloth" v-for="cloth in clothes">
          <div>
            <img class="image" :src="cloth.image" alt="">
          </div>
          <div class="about">
            <p class="description">{{ cloth.description }}</p>
            <a class="price">{{ cloth.price }}</a>
            <img class="popular" :src="cloth.review" alt="">
          </div>
          <div>
            <img class="delete" @click="deleteCloth(cloth)" src="../assets/delete.jpg">
          </div>
        </div>

        <form class="submit" @submit="sendForm" v-if="clothes.length > 0">
          <h3>Оформить заказ</h3>
          <input :class="{
                    error:nameError,
                  }"
                 v-model="name"
                 @input="removeBorder"
                 type="text"
                 placeholder="Ваше имя"
          >
          <input :class="{
                    error:mobileError,
                  }"
                 v-phone
                 v-model="mobile"
                 @input="removeBorder"
                 type="text"
                 placeholder="Телефон"
          >
          <input :class="{
                    error:addressError,
                  }"
                 v-model="address"
                 @input="removeBorder"
                 type="text"
                 placeholder="Адрес"
          >
          <input type="submit">
        </form>

        <button v-if="clothes.length == 0" @click="closeBasket">Перейти к выбору</button>

        <div class="fill" v-if="clothes.length > 0">
          <span>!!</span>
          <pre>Все поля обязательные.<br/>После удачной отправки формы содержимое<br/>корзины очищается</pre>
        </div>
      </div>
      <div class="sent">
        <div>
          <img src="../assets/ok.jpg" alt="">
        </div>
        <div>
          <pre>Заявка успешно отправлена</pre>
        </div>
        <div>
          <a>Вскоре наш менеджер свяжется с Вами</a>
        </div>
      </div>
    </div>

        <div class="backgroundModal"></div>
<!--    <div :class="{backgroundModal:true,-->
<!--                  opened:$store.state.basket.isOpened-->
<!--                  }"-->
<!--    ></div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      mobile: '',
      address: '',
      nameError: false,
      mobileError: false,
      addressError: false
    }
  },
  computed: {
    clothes() {
      return this.$store.state.basket.clothes
    }
  },
  methods: {
    // Закрыть корзину
    closeBasket() {
      this.$store.commit('basket/close')
      this.nameError = false
      this.mobileError = false
      this.addressError = false
      document.body.style.overflow = ''
      document.querySelector('.backgroundModal').style.display = 'none'
      document.querySelector('.send').style.display = 'block'
      document.querySelector('.sent').style.display = 'none'
    },
    deleteCloth(cloth) {
      this.$store.commit('basket/delete', cloth)
      console.log(2)
    },
    sendForm(e) {
      // Отправка заявки на исполнение заказа с валидацией и масками для соответствующих полей;
      // 1-для телефона должна работать маска
      // 2-Когда мы нажимаем на кнопку отправить,должны отправляться данные с заполненной формой и кол-вом товара
      // 3-Когда мы нажимаем на кнопку отправить проверять заполненны ли все инпуты,если не заполнен хотя бы один,значит нельзя отправить,
      // и незаполненный инпут выделять красной рамкой и форму не отправлять
      e.preventDefault()
      if (this.name == '') {
        this.nameError = true
      }
      if (this.mobile == '') {
        this.mobileError = true
      }
      if (this.address == '') {
        this.addressError = true
      }
      if (this.name != '' && this.mobile != '' && this.address != '') {
        this.name = ''
        this.mobile = ''
        this.address = ''
        this.$store.commit('basket/removeClothes')
        document.querySelector('.send').style.display = 'none'
        document.querySelector('.sent').style.display = 'flex'
      }
    },
    removeBorder() {
      this.nameError = false
      this.mobileError = false
      this.addressError = false
    }
  },
}
</script>

<style scoped lang="scss">
.basket {
  background-color: white;
  width: 460px;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  bottom: 0;
  margin-right: -460px;
  padding-left: 48px;
  padding-right: 48px;
  transition: margin 0.7s;
  overflow: auto;
  .error {
    border: 1px solid red;
  }
  .top {
    display: flex;
    justify-content: space-between;
  }
  button {
    border: none;
    background-color: black;
    color: white;
    height: 50px;
    width: 364px;
    border-radius: 8px;
    margin-bottom: 32px;
    cursor: pointer;
    &:hover {
      background-color: #59606D;
    }
  }
  input[type="submit"] {
    background-color: black;
    color: white;
    margin-top: 24px;
    &:hover {
      background-color: #59606D;
    }
  }
  h1 {
    margin-top: 52px;
  }
  &::-webkit-scrollbar {
    width: 0px;
  }
}

#clothes-basket {
  padding-top: 24px;
}

.sent {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    margin-top: 366px;
    margin-bottom: 24px;
  }
  pre {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    /* identical to box height */

    display: flex;
    align-items: flex-end;
    text-align: center;

    color: #000000;
  }
  a {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: #59606D;
  }
}

.close-basket {
  height: 14px;
  width: 14px;
  margin-top: 65px;
  cursor: pointer;
}

.opened {
  display: block;
  margin-right: 0;
}

.clothes-in-basket {
  padding-top: 24px;
  padding-bottom: 16px;

  strong {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #59606D;
  }
}

p {
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  height: 56px;
  width: 364px;
}

#clothes-basket {
  margin: 0 48px 24px 0;
}

.backgroundModal {
  position: fixed;
  display: none;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.about {
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 35px;
}

.cloth {
  height: 120px;
  width: 364px;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 12px;
}

.submit {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  margin-bottom: 24px;

  input {
    height: 50px;
    width: 364px;
    border-radius: 8px;
    border: none;
    margin-top: 16px;
    background-color: #F8F8F8;
    padding-left: 14px;
  }

  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #59606D;
  }
}

.image {
  height: 90px;
  width: 70.56818389892578px;
  margin: 15px 0 15px 25px;
}

.description {
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  height: 36px;
  width: 170px;
  margin-top: 12px;
  margin-bottom: 6px;
  color: #59606D;
}

.price {
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
}

.popular {
  margin-top: 16px;
  margin-bottom: 12px;
}

.delete {
  cursor: pointer;
  margin: 49px 22px 49px 0;
}

.fill {
  margin-bottom: 115px;
  width: 364px;
  display: flex;
  align-items: flex-start;
  span {
    height: 41px;
    width: 19px;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 41px;
    letter-spacing: 0em;
    color: red;
    margin-right: 8px;
  }
  pre {
    margin-top: 8px;
  }
}
</style>
