<template>
  <div class="top__view view">
    <span class="view__nameItem">View</span>
    <div class="view__wrap-options">
      <div class="view__options">
        <div class="view__optionsItem">
          <input type="radio" name="view" id="card" checked/>
          <label for="card">Card</label>
        </div>
        <div class="view__optionsItem">
          <input type="radio" name="view" id="table"/>
          <label for="table">Table</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'top-view',
    data() {
      return {
        
      }
    },
    methods: {
      
    },
  }
</script>
<style scoped>
  .view {
    width: 70px;
    height: 50px;
  }

  .view__nameItem {
    height: 36px;
    cursor: pointer;
    border: 1px solid transparent;
    margin: 7px 0;

    display: flex;
    align-items: center;
    justify-content: center;    
  }

  .top__view:hover .view__nameItem {
    border: 1px solid #d4a373;
  }

  .view__wrap-options {
    width: 120px;
    transform: scale(0);
    border: 1px solid transparent;
    position: relative;
    z-index: 1;
  }

  .view__options {
    margin: 2px 0 0 0;
    border: 1px solid #e9edc9;
    border-radius: 5px;
    box-shadow: 0px 1px 7px #e9edc9;
    padding: 8px;
  }

  .view:hover .view__wrap-options {
    transform: scale(1);
  }

  .view__optionsItem {
    border-radius: 5px;
    height: 30px;

    display: flex;
    align-items: center;
  }

  .view__optionsItem:hover {
    box-shadow: 0px 1px 7px #e9edc9;
    transition: box-shadow .1s linear;
  }

  .view__optionsItem > input {
    margin: 0 7px 0 7px;
    cursor: pointer;
    display: none;
  }

  .view__optionsItem > label {
    cursor: pointer;
    line-height: 20px;
    display: flex;
    align-items: center;
  }

  .view__optionsItem > label:before {
    display: block;
    content: "";
    width: 17px;
    height: 17px;
    background: url("../assets/img/radio.svg");
    margin: 0 7px 0 7px;
  }

  .view__optionsItem > input:checked + label:before {
    background: url("../assets/img/radioChecked.svg");
  }
</style>