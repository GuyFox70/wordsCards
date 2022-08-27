<template>
  <header class="top">
    <top-btn-menu/>
    <top-pages/>
    <top-nav/>
</header>
</template>
<script>
  import TopBtnMenu from '@/components/BtnMenu.vue';
  import TopPages from '@/components/TopPages.vue';
  import TopNav from '@/components/TopNav.vue';

  export default {
    components: { TopBtnMenu, TopPages, TopNav },
    name: 'page-header',
    data() {
      return {}
    },
  }
</script>
<style scoped>
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 25px;
    height: 50px;
    box-shadow: 0px 1px 7px #e9edc9;
  }
</style>