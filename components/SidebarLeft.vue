<template>
  <div>
    <h1>Каталог</h1>
    <ul>
      <li><NuxtLink to="/" exact-active-class="active">Рюкзаки</NuxtLink></li>
      <li><NuxtLink to="/T-shirts" exact-active-class="active">Футболки</NuxtLink></li>
      <li><NuxtLink to="/Shirts" exact-active-class="active">Рубашки</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">

.active{
  text-decoration: underline;
}

div {
  margin-top: 32px;
  margin-left: 88px;
  display: flex;
  flex-direction: column;
}

ul {
  margin-top: 24px;
  padding-left: 0;
  li{
    list-style-type: none;
    margin-bottom: 16px;
    font-family: PT Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    a{
      text-decoration: none;
      color: #59606D;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>
