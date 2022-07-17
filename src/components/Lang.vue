<template>
  <div class="top__switchLang switchLang">
    <div class="switchLang__nameItem">Lang</div>
    <div class="switchLang__wrap-options">
      <div class="switchLang__options">
        <div class="switchLang__optionsItem">
          <input type="radio" name="lang" id="eng" checked/>
          <label for="eng">English</label>
        </div>
        <div class="switchLang__optionsItem">
          <input type="radio" name="lang" id="ru"/>
          <label for="ru">Russian</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'top-lang',
    data() {
      return {
        
      }
    },
    methods: {
      
    },
  }
</script>
<style scoped>
  .switchLang {
    width: 70px;
    height: 50px;
  }

  .switchLang__nameItem {
    height: 36px;
    cursor: pointer;
    border: 1px solid transparent;
    margin: 7px 0;

    display: flex;
    align-items: center;
    justify-content: center;  
  }

  .top__switchLang:hover .switchLang__nameItem {
    border: 1px solid #d4a373;
  }

  .switchLang__wrap-options {
    width: 120px;
    transform: scale(0);
    border: 1px solid transparent;
    position: relative;
    z-index: 1;
  }

  .switchLang__options {
    margin: 2px 0 0 0;
    border: 1px solid #e9edc9;
    border-radius: 5px;
    box-shadow: 0px 1px 7px #e9edc9;
    padding: 8px;
  }

  .switchLang:hover .switchLang__wrap-options {
    transform: scale(1);
  }

  .switchLang__optionsItem {
    border-radius: 5px;
    height: 30px;

    display: flex;
    align-items: center;
  }

  .switchLang__optionsItem:hover {
    box-shadow: 0px 1px 7px #e9edc9;
    transition: box-shadow .1s linear;
  }

  .switchLang__optionsItem > input {
    margin: 0 7px 0 7px;
    cursor: pointer;
    display: none;
  }

  .switchLang__optionsItem > label {
    cursor: pointer;
    line-height: 20px;
    display: flex;
    align-items: center;
  }

  .switchLang__optionsItem > label:before {
    display: block;
    content: "";
    width: 17px;
    height: 17px;
    background: url("../assets/img/radio.svg");
    margin: 0 7px 0 7px;
  }

  .switchLang__optionsItem > input:checked + label:before {
    background: url("../assets/img/radioChecked.svg");
  }
</style>