<template>
  <div class="top__view view">
    <span class="view__btn">View</span>
    <div class="view__list">
      <div class="view__item">
        <input type="radio" name="view" id="card" checked @change="showCard"/>
        <label for="card">Card</label>
      </div>
      <div class="view__item">
        <input type="radio" name="view" id="table" @change="showTable"/>
        <label for="table">Table</label>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'view-btn',
    data() {
      return {}
    },
    methods: {
      showCard() {
        this.$emit('view', 1);
      },
      showTable() {
        this.$emit('view', 0);
      },
    },
    mounted() {
      
    },
  }
</script>
<style scoped>
  @import url('../assets/css/view.css');
</style>