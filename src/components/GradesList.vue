<script setup>
import { calculateGrade } from '../services/calculateGrade'

const props = defineProps(['courses'])
const emit = defineEmits(['setGPA'])

function onCalculate() {
  emit('setGPA', calculateGrade(props.courses))
}
</script>

<template>
  <div class="card">
    <div class="title-container">
      <h1 class="title">Grade List</h1>
      <div><button @click="onCalculate">Caclulate</button></div>
    </div>
    <div class="table-container">
      <table class="grade-table" cellspacing="0">
        <tr>
          <th>#</th>
          <th>Course Name</th>
          <th>Credit</th>
          <th>Numeric Grade</th>
          <th>Letter Grade</th>
        </tr>
        <tr v-for="(course, i) of courses" :key="i">
          <td>{{ i }}</td>
          <td>{{ course.courseName ?? '-' }}</td>
          <td>{{ course.credit }}</td>
          <td>{{ course.numericGrade ?? '-' }}</td>
          <td>{{ course.letterGrade.toUpperCase() }}</td>
        </tr>

        <tr v-if="courses.length === 0" class="no-courses-text">
          <td colspan="5" align="center">No Courses Found</td>
        </tr>
      </table>
    </div>
  </div>
</template>
