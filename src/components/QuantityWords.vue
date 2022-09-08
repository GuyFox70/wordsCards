<template>
  <section class="quantity-words quantity">
    <div class="quantity__left-arrow">&lt;</div>
    <!-- <div class="quantity__number">100</div> -->
    <input type="text" class="quantity__number" maxlength="3" value="100"/>
    <div class="quantity__right-arrow">&gt;</div>
  </section>
</template>

<script>
  export default {
    name: 'quantity-words'
  }
</script>

<style scoped>
  @import url('../assets/css/quantityWords.css');
</style>