<template>
  <div class="top__btnMenu">Menu</div> 
</template>
<script>
  export default {
    name: 'top-btn-menu',
    data() {
      return {
        
      }
    },
    methods: {
      
    },
  }
</script>
<style scoped>
  .top__btnMenu {
    cursor: pointer;
    border: 1px solid transparent;
    padding: 5px 10px;
  }

  .top__btnMenu:hover {
    border: 1px solid #d4a373;
  }

  .top__nav {
    display: flex;
    align-items: center;
  }
</style>