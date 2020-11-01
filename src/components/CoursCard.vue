<template>
  <div 
    class="border m-2 p-2 flex justify-between"
    :class="distanceStyle"
  >
    <div>
      <h1 class="text-lg font-bold">{{ coursName }}</h1>
      <p> {{ coursPosition }} </p>
    </div>
              <base-button
      text="Sélectionner"
      @click="addToSelection"
    >
    </base-button>
    <delete-button
    text="Supprimer de la sélection"
    @click="deleteToSelection"
    >

    </delete-button>
    </div>
</template>

<script>
export default {
  name: "cours-card",
  props: ['cour'],
  computed: {
    coursName(){
      return this.cour.title;
    },
    coursPosition(){
      return this.cour.description.toUpperCase()
    },
    isDistancing() {
      if(this.cour.position == "distanciel"){
        return true
      }
      return false
    },
    distanceStyle() {
      return { 
        'bg-gray-600': this.isDistancing, 
        'border-white': this.isDistancing, 
        'border-black': !this.isDistancing 
      }
    }
  },
  methods: {
    addToSelection() {
      this.$emit('add-cours', this.cour)
    },
    deleteToSelection() {
      this.$emit('delete-cours', this.cour)
    }
  }
}
</script>

<style scoped>
</style>