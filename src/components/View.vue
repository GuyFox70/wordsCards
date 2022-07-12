<template>
  <div class="top__view view">
    <span class="view__nameItem">View</span>
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
    height: 50px;
  }

  .view__nameItem {
    width: 100%;
    height: 35px;
    border: 1px solid transparent;

    display: flex;
    align-items: center;
    justify-content: center;    
  }

  .top__view:hover .view__nameItem {
    border: 1px solid #d4a373;
  }

  .view__options {
    display: none;
    width: 120px;

    margin: 10px 0 0 0;
    padding: 7px 10px;
    border: 1px solid #e9edc9;
    border-radius: 5px;
    box-shadow: 0px 1px 7px #e9edc9;
  }

  .view:hover .view__options {
    display: block;
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