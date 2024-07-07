export function isPrime(check: number) {
  if (check < 2) {
    return false
  }
  if (check === 2 || check === 3) {
    return true
  }
  if (check % 2 === 0) {
    return false
  }
  for (let index = 2; index < Math.sqrt(check); index++) {
    if (check % index === 0) {
      return false
    }
  }

  return true
}

export function primeComplete(check: Array<number>) {
  let complete = true
  check.forEach((num) => {
    if (isPrime(num)) {
      complete = false
    }
  })
  return complete
}
