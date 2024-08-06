<script>
import Search from "../Search.vue";
import Checkbox from "./Checkbox.vue";

export default {
  components: { Search, Checkbox },
  data() {
    return {
      isExpanded:true,
      filters: [
        {
          title: "Категории",
          categories: [
            "Авиация",
            "Автомобили и мотоциклы",
            "Аэрографы и компрессоры",
            "Военная техника",
            "Доработка моделей",
            "Железная дорога",
            "Инструмент",
            "Клей",
            "Краска",
            "Литература",
            "Миниатюра и диорама",
            "Модели для детей",
            "Модельная химия",
            "Печатная продукция",
            "Флот",
            "Футляры и подставки",
          ],
        },
        {
          title: "Производитель",
          categories: [
            "AVD",
            "Advanced Modeling",
            "Start Scale Models (SSM)",
            "Edmon Studia",
            "Modelcollect",
            "ModelGun",
            "Восточный Экспресс",
            "Advanced Modeling",
          ],
        },
        {
          title: "Масштаб",
          categories: [
            "1:24",
            "1:6",
            "1:12",
            "1:9",
            "1:32",
            "1:35",
            "1:43",
            "1:16",
          ],
        },
        { title: "Цена", categories: ["от", "до"] },
      ],
    };
  },
};
</script>

<template>
  <aside class="filter">
    <div class="filter-container" v-for="filter in filters" :key="filter.title">
      <div class="filter__header">
        <h3>{{ filter.title }}</h3>
        <img v-if="!isExpanded" src="../../assets/svg/arrow-down.svg" alt="expand" /><img v-else
          src="../../assets/svg/arrow-up.svg"
          alt="collapse"
        />
      </div>
      <Search v-if="filter.title !== 'Категории' && filter.title !== 'Цена'" />
      <p
        v-if="filter.title === 'Категории'"
        class="filter__item"
        v-for="item in filter.categories"
      >
        {{ item }}
      </p>
      <Checkbox
        v-else-if="
          filter.title === 'Производитель'|| filter.title === 'Масштаб'
        "
        v-for="item in filter.categories"
        :label="item"
      />
    </div>
  </aside>
</template>

<style lang="scss">
@import "../../assets/style/variables";

.filter {
  text-align: start;
  background-color: $bg-color-white;
  border-radius: 16px;
  padding: 16px;
  width: 240px;
  &__header {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    margin-left: 8px;
    margin-block-end: 6px;
    margin-block-start: 6px;
  }
  &-container{
    min-height: 264px;
    display: flex;
    flex-direction: column;
  }
}
</style>
