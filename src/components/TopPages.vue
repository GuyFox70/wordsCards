<template>
  <div class="top__pages">
    <p>page</p>
    <span class="top__currentPage" contenteditable="true">1</span>
    <p>of</p>
    <p class="top__totalPages">100</p>
  </div>
</template>
<script>
  export default {
    name: 'top-pages',
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .top__pages {
    width: 12%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .top__currentPage {
    width: 50px;
    padding: 0 5px;
    border: 1px solid #ccd5ae;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>