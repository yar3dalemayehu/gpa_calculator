<script setup>
import { ref } from 'vue'
import { getNumericGrade } from '../services/convertGrades'
import { grade_weights } from '../services/calculateGrade'
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
  above100: "Value can't exceed 100",
  below0: "Value can't be below 0"
}

const noErrors = {
  grade: null,
  credit: null
}

const formErrors = ref({ ...noErrors })

const formData = ref({ ...initialData })
const useNumeric = ref(true)

function resetFormData() {
  formData.value = { ...initialData }
  formErrors.value = { ...noErrors }
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
  formErrors.value = { ...noErrors }
  emit('clear')
}

function validateForm() {
  // no of courses validation

  // numeric grade validation
  if (useNumeric.value) {
    if (!formData.value.numericGrade) {
      formErrors.value.grade = errors.required
      return false
    } else if (formData.value.numericGrade < 0) {
      formErrors.value.grade = errors.below0
      return false
    } else if (formData.value.numericGrade > 100) {
      formErrors.value.grade = errors.above100
      return false
    }
  } else {
    // letter grade validation
    if (!formData.value.letterGrade) {
      formErrors.value.grade = errors.required
      return false
    }
    let value = formData.value.letterGrade.toUpperCase()
    if (!grade_weights[value]) {
      formErrors.value.grade = errors.invalid
      return false
    }
  }
  formErrors.value.grade = null

  if (!formData.value.credit) {
    formErrors.value.credit = errors.required
    return false
  } else if (formData.value.credit < 0) {
    formErrors.value.credit = errors.below0
    return false
  }
  formErrors.value.credit = null

  return true
}
</script>

<template>
  <div class="card flex column form-gap">
    <div class="flex column form-gap">
      <div class="flex form-gap flex-wrap">
        <div class="flex form-gap width-auto">
          <input
            type="radio"
            id="useNumericGrade"
            name="grade_type"
            :value="true"
            v-model="useNumeric"
            checked
          />
          <label for="useNumericGrade">Numeric Grade</label><br />
        </div>
        <div class="flex form-gap width-auto">
          <input
            type="radio"
            id="useLetterGrade"
            name="grade_type"
            :value="false"
            v-model="useNumeric"
          />
          <label for="useLetterGrade">Letter Grade</label><br />
        </div>
      </div>
      <form class="card-gap flex column">
        <div class="form-gap flex flex-wrap">
          <div class="form-input column" v-if="useNumeric">
            <label for="numericGrade">Numeric Grade (from 100%)</label>
            <div>
              <input
                v-model="formData.numericGrade"
                type="number"
                id="numericGrade"
                min="0"
                max="100"
              />
              <div class="error" :class="{ invisible: !formErrors.grade }">
                {{ formErrors.grade }}
              </div>
            </div>
          </div>
          <div class="form-input column" v-else>
            <label for="letterGrade">Letter Grade</label>
            <div>
              <input
                v-model="formData.letterGrade"
                type="text"
                id="letterGrade"
                minlength="1"
                maxlength="2"
              />
              <div class="error" :class="{ invisible: !formErrors.grade }">
                {{ formErrors.grade }}
              </div>
            </div>
          </div>
          <div class="form-input column">
            <label for="credit">Credit</label>
            <div>
              <input v-model="formData.credit" type="number" id="credit" min="0" />
              <div class="error" :class="{ invisible: !formErrors.credit }">
                {{ formErrors.credit }}
              </div>
            </div>
          </div>
          <div class="form-input column">
            <label for="courseName">Course Name (optional)</label>
            <div>
              <input v-model="formData.courseName" type="text" id="courseName" />
              <div class="error invisible"></div>
            </div>
          </div>
        </div>
        <div class="flex form-gap flex-wrap">
          <button type="submit" v-on:click="addCourse">Add</button>
          <button type="reset" v-on:click="resetFormData()">Clear Form</button>
          <button v-on:click="clearTable">Clear Table</button>
        </div>
      </form>
    </div>
  </div>
</template>
