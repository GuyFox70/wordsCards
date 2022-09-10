<template>
  <section class="table" v-if="words.length !== 0">
    <div class="table__row">
      <span class="table__cell table__th">word</span>
      <span class="table__cell table__th">transcription</span>
      <span class="table__cell table__th">translate</span>
    </div>
    <div class="table__row">
      <span class="table__cell table__td">test</span>
      <span class="table__cell table__td">test</span>
      <span class="table__cell table__td">test</span>
    </div>
  </section>
  <words-empty v-else/>
</template>

<script>
  import WordsEmpty from '@/components/Empty.vue';

  export default {
    name: 'words-table',
    components: { WordsEmpty },
    props: {
      words: {
        type: Array,
        default: [],
      }
    }
  }
</script>

<style scoped>
  @import url('../assets/css/table.css');
</style>