<template>
  <div class="top__btnMenu btnMenu">
    <div class="btnMenu__text">Menu</div>
    <ul class="btnMenu__items">
      <li class="btnMenu__item speechPart">
        <span>speech part</span>
        <!-- <ul class="btnMenu__subitems">
          <li>nouns</li>
          <li>adjectives</li>
          <li>verbs</li> 
        </ul> -->
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
    display: block;
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
    display: none;
    width: 200px;

    margin: 10px 0 0 0;
    padding: 7px 15px;
    border: 1px solid #e9edc9;
    border-radius: 5px;
    box-shadow: 0px 1px 7px #e9edc9;
  }

  .speechPart {
    display: flex;
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
</style>