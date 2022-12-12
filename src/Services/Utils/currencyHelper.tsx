// handler convert string to curency
export const convertToCurrency = (value: string) => {
  const number = parseInt(value.replace(/[^0-9]/g, ''), 10);
  return number.toString() ? number.toLocaleString('id-ID') : '';
};

// handler convert currency to number
export const convertCurrencyToNumber = (value: string) => {
  if (typeof value === 'number') {
    return value;
  } else {
    const number = parseInt(value.replace(/[^0-9]/g, ''));
    return number;
  }
};
