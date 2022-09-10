<template>
  <div class="top__nav">
    <quantity-words/>
    <lang-btn/>
    <view-btn @view="view"/>
    <print-btn/>
  </div>
</template>
<script>
  import QuantityWords from '@/components/QuantityWords.vue';
  import LangBtn from '@/components/Lang.vue';
  import ViewBtn from '@/components/View.vue';
  import PrintBtn from '@/components/Print.vue'

  export default {
    components: { QuantityWords, LangBtn, ViewBtn, PrintBtn },
    name: 'top-bar',
    data() {
      return {}
    },
    methods: {
      view(data) {
        this.$emit('view', data);
      }
    },
  }
</script>
<style scoped>
  .top__nav {
    width: 30%;

    display: flex;
    justify-content: space-around;
    align-items: center;
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