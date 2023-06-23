<template>
  <div>
    <label for="noOfCourses">How Many Courses are there in the semester</label>
    <input id="noOfCourses" type="number" min="0" placeholder="Number of Courses" />
  </div>
  <div>
    <div>
      <input type="radio" id="useNumericGrade" name="fav_language" value="2" checked />
      <label for="useNumericGrade">Numeric Grade</label><br />
      <input type="radio" id="useLetterGrade" name="fav_language" value="1" />
      <label for="useLetterGrade">Letter Grade</label><br />
    </div>
    <form>
      <div>
        <div>
          <label>Course Name</label>
          <input type="text" id="courseName" />
        </div>
        <div>
          <label>Credit</label>
          <input type="number" id="credit" min="0" />
        </div>
        <div>
          <label>Numeric Grade(from 100%)</label>
          <input type="number" id="numericGrade" min="0" max="100" />
        </div>
        <div>
          <label>Letter Grade</label>
          <input type="text" id="numericGrade" minlength="1" maxlength="2" />
        </div>
      </div>
      <div>
        <button type="submit">Add</button>
        <button type="reset">Clear Form</button>
        <button>Clear Table</button>
      </div>
    </form>
  </div>
</template>
