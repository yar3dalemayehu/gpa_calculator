import { Course } from '../types/course'

export const grade_weights = {
  F: 0,
  FX: 0,
  D: 1,
  'C-': 1.75,
  C: 2,
  'C+': 2.5,
  'B-': 2.75,
  B: 3,
  'B+': 3.5,
  'A-': 3.75,
  A: 4,
  'A+': 4
}

export function calculateGrade(gradeList: Course[]) {
  let total_grade = 0
  let credit_sum = 0

  for (const grade of gradeList) {
    // fail if letter grade is F or FX
    if (grade.letterGrade.toLowerCase() === 'f' || grade.letterGrade.toLowerCase() === 'fx') {
      // return a negative number to indicate fail
      return -1
    }

    credit_sum += grade.credit
    let subject_weight = grade_weights[grade.letterGrade] * grade.credit
    total_grade += subject_weight
  }

  if (!credit_sum) return 0

  const GPA = total_grade / credit_sum

  return GPA
}
