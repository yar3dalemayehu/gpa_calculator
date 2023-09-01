<script setup>
import { calculateGrade } from '../services/calculateGrade'

const props = defineProps(['courses'])
const emit = defineEmits(['setGPA'])

function onCalculate() {
  emit('setGPA', calculateGrade(props.courses))
}
</script>

<template>
  <div>
    <h1>Table</h1>
    <button @click="onCalculate">Caclulate</button>
    <div>
      <table>
        <tr>
          <th>Course Name</th>
          <th>Credit</th>
          <th>Numeric Grade</th>
          <th>Letter Grade</th>
        </tr>
        <tr v-for="course of courses">
          <th>{{ course.courseName ?? '-' }}</th>
          <th>{{ course.credit }}</th>
          <th>{{ course.numericGrade ?? '-' }}</th>
          <th>{{ course.letterGrade.toUpperCase() }}</th>
        </tr>
      </table>
    </div>
  </div>
</template>
