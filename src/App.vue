<script setup>
import GradesForm from './components/GradesForm.vue'
import GradesList from './components/GradesList.vue'
import GradeDisplay from './components/GradeDisplay.vue'
import { ref } from 'vue'

const courses = ref([])
const GPA = ref((0).toFixed(2))

function onCourseAdd(newCourse) {
  courses.value.push(newCourse)
}

function clearTable() {
  courses.value = []
}

function onSetGPA(gpa) {
  GPA.value = gpa.toFixed(2)
}
</script>

<template>
  <div class="flex column card-gap container">
    <div class="card-gap grid grid-2-1">
      <GradesForm class="flex-2" @add="onCourseAdd" @clear="clearTable" />
      <GradeDisplay class="flex-1" :GPA="GPA" />
    </div>
    <GradesList :courses="courses" @setGPA="onSetGPA" />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}

.flex-1 {
  flex-grow: 1;
}

.flex-2 {
  flex-grow: 2;
}
</style>
