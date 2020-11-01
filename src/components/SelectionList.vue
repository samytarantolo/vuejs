<template>
  <div class="container w-4/5 mx-auto mt-4">
    <h1 class="text-lg font-bold">Ma sélection de matières</h1>

    <div v-if="selection.length == 0">
      <p>Aucune matières sélectionnée</p>
    </div>
    <div v-else>
      <div>
        Selection : {{ selection.length }}
      </div>
      <div
        v-for="cours in selection"
        :key="cours.title" 
        class="border border-black my-4 p-2 w-2/6"
      >
        <img :src="coursPhoto(cours.image)" alt="">
        <h3>{{ cours.title }} ({{ cours.description }})</h3>
        <span>{{ cours.date }}</span>
        <p>{{ cours.td }} au total</p>
      </div>
    </div>

  </div>
  
</template>

<script>
export default {
  name: "selection-list",
  props: ['selection'],
  methods: {
    coursPhoto(img) {
      return require('@/assets/img/'+img)
    }
  }
}
</script>

<style scoped>
  img {
    width: 500px;
  }
</style>