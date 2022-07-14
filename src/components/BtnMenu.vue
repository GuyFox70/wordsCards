<template>
  <div class="top__btnMenu btnMenu">
    <div class="btnMenu__text">Menu</div>
    <ul class="btnMenu__items">
      <li class="btnMenu__item speechPart">
        <span class="item__speechPart">speech part</span>
        <ul class="item__subitems">
          <li>nouns</li>
          <li>adjectives</li>
          <li>verbs</li> 
        </ul>
      </li>
      <li class="btnMenu__item">Example</li>
      <li class="btnMenu__item">Example</li>
      <li class="btnMenu__item">Example</li>
      <li class="btnMenu__item">Example</li>
      <li class="btnMenu__item">Example</li>
      <li class="btnMenu__item">Example</li>
    </ul>
  </div> 
</template>
<script>
  export default {
    name: 'top-btn-menu',
    data() {
      return {
        
      }
    },
    methods: {
      
    },
  }
</script>
<style scoped>
  .btnMenu {
    width: 70px;
    height: 50px;
  }

  .btnMenu:hover .btnMenu__items {
    /* display: block; */
    width: 200px;
    height: auto;
    overflow: inherit;

    margin: 10px 0 0 0;
    padding: 10px 15px;
    border: 1px solid #e9edc9;
    border-radius: 5px;
    box-shadow: 0px 1px 7px #e9edc9;
    opacity: 1;

    transition: opacity .1s linear;
  }

  .top__btnMenu:hover .btnMenu__text {
    border: 1px solid #d4a373;
  }

  .btnMenu__text {
    cursor: pointer;
    border: 1px solid transparent;
    width: 100%;
    height: 35px;
    margin: 8px 0 0 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btnMenu__items {
    /* display: none; */
    width: 0px;
    height: 0px;
    overflow: hidden;
    opacity: 0;
  }

  .btnMenu__item {
    cursor: pointer;
    height: 25px;
    padding: 0 10px;
  }

  .btnMenu__item:not(:last-child) {
    margin-bottom: 7px;
  }

  .btnMenu__item:hover {
    box-shadow: 0px 1px 7px #e9edc9;
    transition: box-shadow .1s linear;
  }

  .speechPart {
    position: relative;
    display: flex;
  }

  .item__speechPart {
    display: block;
    flex-grow: 1;
  }

  .item__subitems {
    position: absolute;
    top: 0;
    right: -170px;

    width: 150px;

    padding: 7px 15px;
    border: 1px solid #e9edc9;
    border-radius: 5px;
    box-shadow: 0px 1px 7px #e9edc9;
    z-index: 10;
  }

  .item__subitems > li {
    width: 100%;
    height: 25px;
    padding: 0 10px;
  }

  .item__subitems > li:hover {
    box-shadow: 0px 1px 7px #e9edc9;
    transition: box-shadow .1s linear;
  }

  .item__subitems > li:not(:last-child) {
    margin-bottom: 7px;
  }
</style>