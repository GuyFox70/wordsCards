<template>
  <div class="top__pages">
    <p>page</p>
    <span class="top__currentPage" contenteditable="true">1</span>
    <p>of</p>
    <p class="top__totalPages">{{ sizeCollection }}</p>
  </div>
</template>
<script>
  export default {
    name: 'switch-pages',
    props: {
      sizeCollection: {
        type: Number,
        required: true,
        default: 0,
      }
    },
    data() {
      return {}
    },
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
    border: 1px solid var(--white);
    border-radius: 5px;
    cursor: pointer;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>