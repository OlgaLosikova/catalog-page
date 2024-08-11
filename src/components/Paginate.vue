<script>
import Paginate from "vuejs-paginate-next";

export default {
  components: {
    paginate: Paginate,
  },
  data() {
    return {
      page: 1,
      pageCount:Math.ceil(this.$store.state.data.length/20),
    };
  },
  methods: {
    setPage(pageNum) {
      this.$store.commit("setPage", pageNum);
    },
  },
};
</script>

<template>
  <paginate
    v-model="page"
    :page-count="pageCount"
    :page-range="3"
    :margin-pages="2"
    :click-handler="setPage"
    :prev-text="'Предыдущая'"
    :next-text="'Следующая'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :active-class="'active'"
  >
  </paginate>
</template>

<style lang="scss">
@import "../assets/style/variables";

.pagination {
  display: flex;
  margin-top: 32px;
  gap: 4px;
  font-size: 16px;
  padding-left: 0;
}
li {
  list-style-type: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-width: 29px;
  height: 32px;
  justify-content: center;
}
li:first-child {
  margin-right: 4px;
}
li:last-child {
  margin-left: 4px;
}
.pagination > li:first-child::before {
  content: "";
  display: inline-block;
  background-image: url(/src/assets/svg/arrow-left.svg);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
}
.pagination > li:last-child::after {
  content: "";
  display: inline-block;
  background-image: url(/src/assets/svg/arrow-right.svg);
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
}
.active {
  background-color: $bg-color-active;
  color: $bg-color-white;
  border-radius: 7px;
}
</style>
