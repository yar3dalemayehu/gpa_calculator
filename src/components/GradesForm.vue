<script setup>
import { ref } from 'vue'
import { getNumericGrade } from '../services/convertGrades'

const emit = defineEmits(['add', 'clear'])

const initialData = {
  courseName: null,
  credit: null,
  numericGrade: null,
  letterGrade: null
}

const formData = ref({ ...initialData })
const useNumeric = ref(true)
const noOfCourses = ref(0)

function resetFormData() {
  formData.value = { ...initialData }
}

function addCourse(event) {
  event.preventDefault()
  if (useNumeric.value) {
    formData.value.letterGrade = getNumericGrade(formData.value.numericGrade)
  }
  const data = { ...formData.value }
  emit('add', data)
  resetFormData()
}

function clearTable(event) {
  event.preventDefault()
  emit('clear')
}
</script>

<template>
  <div>
    <div>
      <label for="noOfCourses">How Many Courses are there in the semester</label>
      <input
        v-model="noOfCourses"
        id="noOfCourses"
        type="number"
        min="0"
        placeholder="Number of Courses"
      />
    </div>
    <div>
      <div>
        <input
          type="radio"
          id="useNumericGrade"
          name="fav_language"
          :value="true"
          v-model="useNumeric"
          checked
        />
        <label for="useNumericGrade">Numeric Grade</label><br />
        <input
          type="radio"
          id="useLetterGrade"
          name="fav_language"
          :value="false"
          v-model="useNumeric"
        />
        <label for="useLetterGrade">Letter Grade</label><br />
      </div>
      <form>
        <div>
          <div v-if="useNumeric">
            <label>Numeric Grade(from 100%)</label>
            <input
              v-model="formData.numericGrade"
              type="number"
              id="numericGrade"
              min="0"
              max="100"
            />
          </div>
          <div v-else>
            <label>Letter Grade</label>
            <input
              v-model="formData.letterGrade"
              type="text"
              id="letterGrade"
              minlength="1"
              maxlength="2"
            />
          </div>
          <div>
            <label>Credit</label>
            <input v-model="formData.credit" type="number" id="credit" min="0" />
          </div>
          <div>
            <label>Course Name</label>
            <input v-model="formData.courseName" type="text" id="courseName" />
          </div>
        </div>
        <div>
          <button type="submit" v-on:click="addCourse">Add</button>
          <button type="reset" v-on:click="resetFormData()">Clear Form</button>
          <button v-on:click="clearTable">Clear Table</button>
        </div>
      </form>
    </div>
  </div>
</template>
