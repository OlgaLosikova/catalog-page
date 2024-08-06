<script>
export default {
  data() {
    return {
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
    <div v-for="filter in filters" :key="filter.title">
      <div class="filter__header">
        <h3>{{ filter.title }}</h3>
        <img src="../../assets/svg/arrow-down.svg" alt="expand" /><img
          src="../../assets/svg/arrow-up.svg"
          alt="collapse"
        />
      </div>

      <p class="filter__item" v-for="item in filter.categories">{{ item }}</p>
    </div>
  </aside>
</template>

<style lang="scss">
.filter {
  text-align: start;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  width: 240px;
  &__header {
    display: flex;
  }
  &__item {
    margin-left: 8px;
  }
}
</style>
