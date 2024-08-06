<script>
import BreadCrumbs from "./components/BreadCrumbs.vue";
import Table from "./components/Table.vue";
import PageTitle from "./components/PageTitle.vue";
import Filters from "./components/Filters/Filters.vue";

export default {
  components: { BreadCrumbs, Table, PageTitle, Filters },
};
</script>

<template>
  <header></header>
  <main>
    <BreadCrumbs />
    <PageTitle />
    <Filters />
    <Table />
  </main>
  <footer></footer>
</template>

<style scoped>
header {
  height: 208px;
  background-color: #f3f3f3;
  width: 100%;
}
footer {
  height: 345px;
  background-color: #f3f3f3;
  width: 100%;
}
</style>
