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

export function calculateGrade(gradeList: any[]) {
  // TODO: handle f, fx and invalid cases

  let total_grade = 0
  let credit_sum = 0
  gradeList.forEach((ele) => {
    credit_sum += ele.credit
    let subject_weight = grade_weights[ele.letterGrade] * ele.credit
    total_grade += subject_weight
    // fail if letter grade is F or FX
  })

  const GPA = total_grade / credit_sum

  return GPA
}
