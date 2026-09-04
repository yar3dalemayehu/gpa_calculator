<script setup>
import { calculateGrade } from '../services/calculateGrade'

const props = defineProps(['courses'])
const emit = defineEmits(['setGPA', 'remove'])

function onCalculate() {
  emit('setGPA', calculateGrade(props.courses))
}

function onRemove(index) {
  emit('remove', index)
}
</script>

<template>
  <div class="card">
    <div class="title-container flex-wrap">
      <h1 class="title">Grade List</h1>
      <div><button @click="onCalculate">Calculate</button></div>
    </div>
    <div class="table-container">
      <table class="grade-table" cellspacing="0">
        <tr>
          <th>#</th>
          <th>Course Name</th>
          <th>Credit</th>
          <th>Numeric Grade</th>
          <th>Letter Grade</th>
          <th></th>
        </tr>
        <tr v-for="(course, i) of courses" :key="i">
          <td>{{ i }}</td>
          <td>{{ course.courseName ?? '-' }}</td>
          <td>{{ course.credit }}</td>
          <td>{{ course.numericGrade ?? '-' }}</td>
          <td>{{ course.letterGrade.toUpperCase() }}</td>
          <td><button type="button" @click="onRemove(i)" aria-label="Delete course">✕</button></td>
        </tr>

        <tr v-if="courses.length === 0" class="no-courses-text">
          <td colspan="6" align="center">No Courses Found</td>
        </tr>
      </table>
    </div>
  </div>
</template>
