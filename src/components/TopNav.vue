<template>
  <div class="top__nav">
    <top-lang/>
    <top-view/>
    <div class="actions__print">
      <span>Print</span>
    </div>
  </div>
</template>
<script>
  import TopLang from '@/components/Lang.vue';
  import TopView from '@/components/View.vue';

  export default {
    components: { TopLang, TopView },
    name: 'top-nav',
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .top__nav {
    width: 20%;
    padding-top: 14px;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .top__nav > div {
    width: 70px;
    cursor: pointer;
  }

  .actions__print {
    height: 50px;

  }

  .actions__print > span {
    display: block;
    border: 1px solid transparent;
    width: 100%;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .actions__print > span:hover {
    border: 1px solid #d4a373;
  }
</style>