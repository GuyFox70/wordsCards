<template>
  <main class="content">
    <word-card v-if="isCard"/>
    <word-table v-else/>
  </main>
</template>
<script>
  import WordCard from './components/Card.vue';
  import WordTable from './components/Table.vue';

  export default {
    components: { WordCard, WordTable },
    name: 'page-content',
    props: {
      isCard: {
        type: Number,
        required: true,
        default: 0,
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
      
    },
  }
</script>
<style scoped>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-grow: 1;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
  }
</style>