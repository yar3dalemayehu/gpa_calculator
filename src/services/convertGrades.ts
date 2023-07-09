export function getNumericGrade(grade: number): string {
  if (grade < 0 || grade > 100) {
    return 'invalid'
  }

  if (grade < 30) {
    return 'F'
  } else if (grade >= 30 && grade < 40) {
    return 'FX'
  } else if (grade >= 40 && grade < 45) {
    return 'D'
  } else if (grade >= 45 && grade < 50) {
    return 'C-'
  } else if (grade >= 50 && grade < 60) {
    return 'C'
  } else if (grade >= 60 && grade < 65) {
    return 'C+'
  } else if (grade >= 65 && grade < 68) {
    return 'B-'
  } else if (grade >= 68 && grade < 75) {
    return 'B'
  } else if (grade >= 75 && grade < 80) {
    return 'B+'
  } else if (grade >= 80 && grade < 83) {
    return 'A-'
  } else if (grade >= 83 && grade < 90) {
    return 'A'
  } else {
    return 'A+'
  }
}
