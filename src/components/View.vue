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
      return {
        body: null,
      }
    },
    methods: {
      showCard() {
        this.body.classList.remove('view-table');
        this.body.classList.add('view-card');
        this.$emit('view', 1);
      },
      showTable() {
        this.body.classList.remove('view-card');
        this.body.classList.add('view-table');
        this.$emit('view', 0);
      },
    },
    mounted() {
      this.body = document.body;
    },
  }
</script>
<style scoped>
  @import url('../assets/css/view.css');
</style>