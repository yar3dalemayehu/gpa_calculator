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

const errors = {
  invalid: 'Invalid value',
  required: 'Required',
  noCourses: 'At least one course needed',
  above100: "Value can't exceed 100",
  below0: "Value can't be below 0"
}

const noErrors = {
  course: null,
  grade: null,
  credit: null
}

const formErrors = ref({ ...noErrors })

const formData = ref({ ...initialData })
const useNumeric = ref(true)
const noOfCourses = ref(1)

function resetFormData() {
  formData.value = { ...initialData }
}

function addCourse(event) {
  event.preventDefault()

  if (!validateForm()) return

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

function validateForm() {
  if (noOfCourses.value === 0) {
    formErrors.value.course = errors.noCourses
    return false
  }
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
      <div v-if="formErrors.course">{{ formErrors.course }}</div>
    </div>
    <div>
      <div>
        <input
          type="radio"
          id="useNumericGrade"
          name="grde_type"
          :value="true"
          v-model="useNumeric"
          checked
        />
        <label for="useNumericGrade">Numeric Grade</label><br />
        <input
          type="radio"
          id="useLetterGrade"
          name="grde_type"
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
