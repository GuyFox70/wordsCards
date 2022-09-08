<template>
  <div class="top__pages">
    <span>page</span>
    <input class="top__currentPage" maxlength="3" value="1"/>
    <span>of</span>
    <span class="top__totalPages">100</span>
  </div>
</template>
<script>
  export default {
    name: 'switch-pages',
    props: {
      sizeCollection: {
        type: Object,
        required: true,
        default: {},
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
    text-align: center;
    background: transparent;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>