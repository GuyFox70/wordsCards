<template>
  <section class="wrapper">
    <page-header @view="view" :sizeCollection="sizeCollection"/>
    <page-content :isCard="isCard" :words="words"/>
  </section>  
</template>

<script>
  import helper from './utils/helper.mjs';
  import PageHeader from '@/Header.vue';
  import PageContent from '@/Content.vue';

  export default {
    components: { PageHeader, PageContent },
    data() {
      return {
        sizeCollection: {},
        arrPartsSpeech: [
          'n',
          'v',
          'adj',
          'pron',
          'adv'
        ],
        i: 0,
        h: helper,
        isCard: 1,
        words: [],
      }
    },
    methods: {
      view(data) {
        this.isCard = data;
      }
    },
    mounted() {
      const lengthArrPartsSpeech = this.arrPartsSpeech.length;

      
      const getSizeCollections = async (path) => {
        try {
          for await (const elem of this.arrPartsSpeech) {
            const data = await this.h.sendFetch(`${path}/${elem}`);
            this.sizeCollection[elem] = data
            // console.log(this.sizeCollection);
          }
        } catch (error) {
          console.log(error);
        }
      };
      
      getSizeCollections('http://127.0.0.1:8000/sizeCollection');
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
