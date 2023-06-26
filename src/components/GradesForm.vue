<script setup>
import { ref } from 'vue';

const initialData = {
  courseName: null,
  credit: null,
  numericGrade: null,
  letterGrade: null
};

const formData = ref(initialData);
const useNumeric = ref(true)
const noOfCourses = ref(0)

function resetFormData(){
  console.log("================");
  formData.value = initialData 
}
</script>


<template>
  <h1>{{ formData }}</h1>
  <div>
    <label for="noOfCourses">How Many Courses are there in the semester</label>
    <input v-model="noOfCourses" id="noOfCourses" type="number" min="0" placeholder="Number of Courses" />
  </div>
  <div>
    <div>
      <input type="radio" id="useNumericGrade" name="fav_language" :value=true v-model="useNumeric" checked />
      <label for="useNumericGrade">Numeric Grade</label><br />
      <input type="radio" id="useLetterGrade" name="fav_language" :value=false v-model="useNumeric" />
      <label for="useLetterGrade">Letter Grade</label><br />
    </div>
    <form>
      <div>
        <div>
          <label>Course Name</label>
          <input v-model="formData.courseName" type="text" id="courseName" />
        </div>
        <div>
          <label>Credit</label>
          <input v-model="formData.credit" type="number" id="credit" min="0" />
        </div>
        <div v-if="useNumeric">
          <label>Numeric Grade(from 100%)</label>
          <input v-model="formData.numericGrade" type="number" id="numericGrade" min="0" max="100" />
        </div>
        <div v-else>
          <label>Letter Grade</label>
          <input v-model="formData.letterGrade" type="text" id="letterGrade" minlength="1" maxlength="2" />
        </div>
      </div>
      <div>
        <button type="submit">Add</button>
        <button type="reset" v-on:click="resetFormData()">Clear Form</button>
        <button>Clear Table</button>
      </div>
    </form>
  </div>
</template>
