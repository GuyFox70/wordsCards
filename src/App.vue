<template>
  <section class="wrapper">
    <page-header @view="view" :sizeCollection="sizeCollection"/>
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
        sizeCollection: 0,
        arrPartsSpeech: [
          'n',
          'v',
          'adj',
          'pron',
          'adv'
        ],
        i: 0,
      }
    },
    methods: {
      view(data) {
        this.isTable = data;
      }
    },
    mounted() {
      // getSizeCollection(this.arrPartsSpeech[this.i])
      // .then(data => {
        // this.sizeCollection = data;
      // })
      // .catch(console.error);

      async function getSizeCollection(str) {
        const response = await fetch(`http://127.0.0.1:8000/sizeCollection/${ str }`);

        if (response.ok) {
          const { data } = await response.json();
          return data;
        } else {
          throw new Error('Fetch is failed!');
        }
      },

    }
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
