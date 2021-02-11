<template>
  <div class="container">
    <Header></Header>
    <div class="sidebar">
      <SidebarLeft></SidebarLeft>
      <Nuxt />
    </div>
    <Basket></Basket>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Basket from "~/components/Basket";
import SidebarLeft from "~/components/SidebarLeft";
import SidebarRight from "~/components/SidebarRight";

export default {

  components: {Header, SidebarLeft, SidebarRight, Basket}
}
</script>

<style>
.container {
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
  width: 1440px;
  height: 66px;
}

.sidebar {
  display: flex;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /*cursor: url("../assets/cursor.jpg"),auto;*/
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
