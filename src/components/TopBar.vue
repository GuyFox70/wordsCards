<template>
  <div class="top__nav">
    <lang-btn/>
    <view-btn/>
    <div class="top__print print">
      <div class="print__nameItem">Print</div>
    </div>
  </div>
</template>
<script>
  import LangBtn from '@/components/Lang.vue';
  import ViewBtn from '@/components/View.vue';

  export default {
    components: { LangBtn, ViewBtn },
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

  .print__nameItem {
    height: 36px;
    cursor: pointer;
    border: 1px solid transparent;
    margin: 7px 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .print__nameItem:hover {
    border: 1px solid var(--white);
  }
</style>