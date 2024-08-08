<script>
import BreadCrumbs from "./components/BreadCrumbs.vue";
import Table from "./components/Table/Table.vue";
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
    <div class="main-container"><Filters /> <Table /></div>
  </main>
  <footer></footer>
</template>

<style lang="scss">
.main-container {
  display: flex;
}
</style>
