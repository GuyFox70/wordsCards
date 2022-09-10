<template>
  <section class="quantity-words quantity">
    <div class="quantity__left-arrow" @click="decreaseAmount">&lt;</div>
    <input type="text" class="quantity__number" maxlength="3" v-model="amount"/>
    <div class="quantity__right-arrow" @click="increaseAmount">&gt;</div>
  </section>
</template>

<script>
  export default {
    name: 'quantity-words',
    data() {
      return {
        amount: 100,
      }
    },
    methods: {
      decreaseAmount() {
        if (this.amount > 10) {
          this.amount -= 10;
        } else {
          return;
        }
      },
      increaseAmount() {
        if (this.amount < 100) {
          this.amount += 10;
        } else {
          return;
        }
      },
    },
  }
</script>

<style scoped>
  @import url('../assets/css/quantityWords.css');
</style>