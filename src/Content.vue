<template>
  <main class="content">
    <words-card :words="words" v-if="isCard"/>
    <words-table :words="words" v-else/>
  </main>
</template>
<script>
  import WordsCard from '@/components/Card.vue';
  import WordsTable from '@/components/Table.vue';

  export default {
    components: { WordsCard, WordsTable },
    name: 'page-content',
    props: {
      isCard: {
        type: Number,
        default: 0,
      },
      words: {
        type: Array,
        default: []
      }
    },
    data() {
      return {}
    },
    methods: {},
    computed: {
      setClassName() {
        return !this.view ? 'flip-card__inner-transform' : '';
      }
    },
    mounted() {
      document.body.classList.add('view-card');
    },
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
  
  .view-card .content {
    align-items: center;
  }

  .view-table .content {
    align-items: flex-start;
  }
</style>