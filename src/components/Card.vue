<template lang="html">
  <section class="flip-card" id="flipCard" @click="turnOverCard">
    <div class="flip-card__inner" id="flipCardInner">
      <div class="flip-card__front">
        <div class="card__exclamation-point" id="mistakeReport"></div>
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
        i: 0,
      }
    },
    methods: {
      turnOverCard(e) {
        if (!this.i) {
          this.flipCardInner.classList.add('flip-card__inner-back');
          this.i++;
        } else {
          this.flipCardInner.classList.remove('flip-card__inner-back');
          this.i--;
        }
      },
    },
    mounted() {
      this.flipCardInner = document.querySelector('#flipCardInner');
    },
  }
</script>
<style lang="less" scoped>
  .mixFlexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flip-card {
    align-self: center;
    background-color: transparent;
    width: 400px;
    height: 300px;
    perspective: 1000px;
  }

  .flip-card__inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background: #fff;
    border-radius: 15px;
    transform: rotateY(0deg);
    transition: transform .5s linear;
  }

  .flip-card__inner-back {
    transform: rotateY(180deg);
    transition: transform .5s linear;
  }

  .flip-card__front,
  .flip-card__back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    color: black;
    background: #fff;
    border-radius: 15px;
  }

  .flip-card__front {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, .3);
    display: grid;
    grid-template-rows: 1fr .2fr;
    grid-template-columns: repeat(3, 1fr);
  }

  .flib-card__word-field {
    font-size: 27px;
  }

  .flip-card__back {
    transform: rotateY(180deg);
    font-size: 27px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flib-card__word-field {
    width: 100%;
    height: 100%;
    letter-spacing: .5px;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 4;
    .mixFlexCenter;
    cursor: pointer;
    padding: 20px;
    text-align: center;
    overflow: hidden;
    position: relative;
  }

  .flib-card__word-prev,
  .flib-card__word-next,
  .flib-card__word-studied {
    width: 100%;
    height: 100%;
    .mixFlexCenter;
    cursor: pointer;
    user-select: none;

    &:hover {
      font-weight: 600;
      transition: fontWeight .7s linear;
    }
  }

  .flib-card__word-prev {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .flib-card__word-studied {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
  }

  .flib-card__word-next {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 3;
    grid-column-end: 4;
  }

  .card__exclamation-point {
    position: absolute;
    top: 13px;
    right: 13px;
    z-index: 10;
    cursor: pointer;

    width: 30px;
    height: 30px;

    background: url('../assets/img/exclamationPoint.svg') no-repeat;
    background-position: 3px 1px;
    background-size: 25px 25px;

    transition: background .1s linear;
  }

  .card__exclamation-point:hover {
    background: url('../assets/img/exclamationPoint2.svg') no-repeat;
    background-position: 3px 1px;
    background-size: 25px 25px;
    transition: background .1s linear;
  }

  .wrapper-form-mistake {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;
    background: rgba(150, 150, 150, .8);

    display: flex;
    align-items: center;
    justify-content: center;

    transform: scale(0);
    transition: transform .3s linear;
  }

  .form-mistake {
    width: 50%;

    background: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .5);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form-mistake__heading {
    margin: 15px 0;
    font-size: 24px;
  }

  .form-mistake__item {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    &:not(:last-child) {
      margin: 0 0 5px 0;
    }

    & > label { 
      margin: 0 0 5px 0;
      font-size: 18px;
    }

    & > input {
      width: 100%;
      height: 33px;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, .5);
      border: 1px solid rgb(186, 186, 186);
      border-radius: 5px;
      padding: 0 8px;
      font-size: 17px;
    }

    & > textarea {
      width: 100%;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, .5);
      border: 1px solid rgb(186, 186, 186);
      border-radius: 5px;
      padding: 5px 8px;
      font-size: 17px;
      resize: none;
    }

    & > input::placeholder {
      letter-spacing: 2px;
    }

    & > textarea::placeholder {
      letter-spacing: 2px;
    }
  }

  .form-mistake__buttons {
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 15px 0;

    & > button {
      padding: 5px 15px;
      background: rgb(199, 199, 199);
      border-radius: 5px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, .5);
    }

    & > button:hover {
      background: rgb(211, 211, 211);
      transition: background .1s linear;
    }
  }
</style>