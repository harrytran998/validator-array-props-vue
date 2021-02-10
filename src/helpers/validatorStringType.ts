export function validatorStringType(values: any[]) {
  // Validator
  const validator = function (value: string) {
    if (values.includes(value)) {
      return true
    } else {
      console.error(
        `The prop ${propName?.toString()} value ${value} is invalid,
        expected one of '${values.join(`', '`)}'`,
      )
      return false
    }
  }

  let propName = ''
  validator.for = function (value: string) {
    propName = value
    return validator
  }
  return validator
}
