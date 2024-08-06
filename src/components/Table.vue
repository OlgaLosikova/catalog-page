<script>

</script>

<template>
<div class="table">
    <div class="table-header">
        <!-- выбранные фильтры -->
      <p class="table-header__title">Сортровать по:</p>
            <div @click="filtersStore.isOpenSort=true" class="buttons-wrapper">
        <img src="../assets/svg/view-small.svg" alt="view-small"><img src="../assets/svg/view-big.svg" alt="view-big">
      </div>
 
    </div>
    <div  class="table-body">
     <!-- cards -->
    </div>

    <div class="table-empty">
      <h2>Нет ни одного товара</h2>
      <p>Попробуйте сбросить или изменить параметры фильтрации</p>
    </div>
  </div>
</template>

<style lang="scss">

</style>

