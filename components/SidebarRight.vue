<template>
  <div class="block">
    <div class="select">
      <a>Сортировать по:</a>
      <select name="" id="">
        <option value="price">цене</option>
        <option value="famous">популярности</option>
      </select>
    </div>
    <Backpacks></Backpacks>
  </div>
</template>

<script>
import Backpacks from '../pages/Backpacks'

export default {
  components: {Backpacks}
}
</script>

<style scoped>
.block{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 42px;
  margin-left: 49px;
}

.select{
  margin-right: 70px;
}

</style>
