<template>
  <section class="wrapper">
    <page-header/>
    <page-content/>
  </section>  
</template>

<script>
  import PageHeader from '@/Header.vue';
  import PageContent from '@/Content.vue';

  export default {
    components: { PageHeader, PageContent },
    data() {
      return {}
    },
    methods: {},
    mounted() {},
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #d4a373;
  }
  .wrapper {
    width: 100vw;
    height: 100vh;
    backround: #fefae0;

    display: flex;
    flex-direction: column;
  }
</style>
