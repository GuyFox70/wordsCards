<template>
  <section class="flip-card" id="flipCard" @click="turnOverCard">
    <div class="flip-card__inner" id="flipCardInner">
      <div class="flip-card__front">
        <div class="card__exclamation-point" id="mistakeIcon"></div>
        <div class="flib-card__word-field" id="wordField">Example</div>
        <div class="flib-card__word-prev" id="prevWord">prev</div>
        <div class="flib-card__word-studied" id="studied">know</div>
        <div class="flib-card__word-next" id="nextWord">next</div>
      </div>
      <div class="flip-card__back">
        <div class="flib-card__translate-field" id="translateField">Пример</div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'eng-card',
    data() {
      return {
        flipCardInner: null,
        mistakeIcon: null,
        i: 0,
      }
    },
    methods: {
      turnOverCard(e) {
        if (!this.i) {
          this.flipCardInner.classList.add('flip-card__inner-back');
          this.mistakeIcon.setAttribute('style', 'left: 13px');
          this.i++;
        } else {
          this.flipCardInner.classList.remove('flip-card__inner-back');
          this.mistakeIcon.removeAttribute('style');
          this.i--;
        }
      },
    },
    mounted() {
      this.flipCardInner = document.querySelector('#flipCardInner');
      this.mistakeIcon = document.querySelector('#mistakeIcon');
    },
  }
</script>
<style lang="less" scoped>
  @import '../assets/less/card.less';
</style>