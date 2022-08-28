<template>
  <div class="top__nav">
    <lang-btn/>
    <view-btn/>
    <print-btn/>
  </div>
</template>
<script>
  import LangBtn from '@/components/Lang.vue';
  import ViewBtn from '@/components/View.vue';
  import PrintBtn from '@/components/Print.vue'

  export default {
    components: { LangBtn, ViewBtn, PrintBtn },
    name: 'top-bar',
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .top__nav {
    width: 20%;

    display: flex;
    justify-content: space-around;
  }

  .top__nav > div {
    width: 70px;
    cursor: pointer;
  }

  .top__print {
    width: 70px;
    height: 50px;
  }
</style>