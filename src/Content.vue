<template>
  <main class="content">
    <eng-card v-if="isCard"/>
    <h1 v-else>Test</h1>
  </main>
</template>
<script>
  import EngCard from './components/Card.vue';

  export default {
    components: { EngCard },
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