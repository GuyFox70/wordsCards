<template>
  <section class="wrapper">
    <page-header @view="view"/>
    <page-content :isTable="isTable"/>
  </section>  
</template>

<script>
  import PageHeader from '@/Header.vue';
  import PageContent from '@/Content.vue';

  export default {
    components: { PageHeader, PageContent },
    data() {
      return {
        isTable: 0,
      }
    },
    methods: {
      view(data) {
        this.isTable = data;
      }
    },
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
    color: #fff;
    list-style-type: none;
  }
  :root {
    --bg-color: #85CDCA;
    --bg-color-sub-list: #40B3A2;
    --white: #fff;
    --shadow-dark: rgba(0,0,0,.3);
  }
  .wrapper {
    width: 100vw;
    height: 100vh;
    background: var(--bg-color);

    display: flex;
    flex-direction: column;
  }
</style>
