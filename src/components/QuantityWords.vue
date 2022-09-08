<template>
  <section class="quantity-words quantity">
    <div class="quantity__left-arrow">&lt;</div>
    <input type="text" class="quantity__number" maxlength="3" :value="amountWords"/>
    <div class="quantity__right-arrow">&gt;</div>
  </section>
</template>

<script>
  export default {
    name: 'quantity-words',
    data() {
      return {
        amountWords: 100,
      }
    },
  }
</script>

<style scoped>
  @import url('../assets/css/quantityWords.css');
</style>