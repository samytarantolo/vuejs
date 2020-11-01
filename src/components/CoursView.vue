<template>

  <div class="flex">
    <selection-box
      :selection="selection"
    >
    </selection-box>

    <div class="w-4/5 mt-2">
      <cours-card 
        v-for="(cour, index) in school.cours"
        :key="index"
        :cour="cour"
        @add-cours="addCoursToSelection"
        @delete-cours="deleteCoursToSelection"
        >
      </cours-card>
    </div>
    

  </div>
    
</template>

<script>
import schoolData from '../data/cours.json'
import CoursCard from './CoursCard.vue'
import SelectionBox from './SelectionBox.vue'

export default {
  name: "cours-view",
  components: {
    CoursCard,
    SelectionBox
  },
  data() {
    return {
      school: schoolData,
      selection: [],
    }
  },
  methods: {
    addCoursToSelection(cour){
      this.selection.push(cour)
      this.$emit('child-event', cour)
    },
    deleteCoursToSelection(cour){
      this.selection.splice(cour, 1)
      this.$emit('child-event', cour)
    }
  }
}
</script>

<style>

</style>