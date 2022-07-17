<template>
  <main class="content">
    <eng-card/>
  </main>
</template>
<script>
  import EngCard from './components/Card.vue';

  export default {
    components: { EngCard },
    name: 'page-content',
  }
</script>
<style scoped>
  .content {
    display: flex;
    justify-content: center;

    flex-grow: 1;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
  }
</style>