export const IMC = (weight, height) => {
  return (weight / ((height / 100 ) **2)).toFixed(2);
}

export const notANumber = value => (isNaN(value) || value.trim() == '');