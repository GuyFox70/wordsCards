<template>
  <section class="card" @click="turnOverCard" v-if="words.length !== 0">

      <div class="card-front" id="front">
        <!-- <div class="card-front__exclamation-point" id="mistakeIcon" @click.stop="openReport"></div> -->
        <div class="card-front__word-field" id="wordField">Example</div>
        <div class="card-front__word-prev" id="prevWord">prev</div>
        <div class="card-front__word-studied" id="studied">know</div>
        <div class="card-front__word-next" id="nextWord">next</div>
      </div>

      <div class="card-back" id="back">

        <div class="card-back__content">
          <div class="card-back__translate-field" id="translateField">Пример</div>
        </div>

      </div>
  </section>
  <words-empty v-else/>
</template>

<script>
  import WordsEmpty from '@/components/Empty.vue';

  export default {
    components: { WordsEmpty },
    name: 'words-card',
    props: {
      words: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        fornt: null,
        back: null,
        i: 0
      }
    },
    methods: {
      turnOverCard() {
        if (!this.i) {
          this.i++;
          this.card.classList.add('card-front-turnOver');    
          this.back.classList.add('card-back-turnOver');
        } else {
          this.i--;
          this.card.classList.remove('card-front-turnOver');
          this.back.classList.remove('card-back-turnOver');
        }
      }
    },
    mounted() {
      this.card = document.querySelector('#front');
      this.back = document.querySelector('#back');
    },
  }
</script>

<style scoped>
  @import url('../assets/css/card.css');
</style>