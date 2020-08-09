const isAsinLengthCorrect = (asin: string) => {
  return asin.length === 10;
};

const isAsinStartsWithB = (asin: string) => {
  return asin.toLocaleLowerCase()[0] === 'b';
};

export const verifyAsin = (asin: string) => {
  return isAsinLengthCorrect(asin) && isAsinStartsWithB(asin);
};

export const verifyAsinIsUnique = (asin: string, asinList: string[]) => {
  return !asinList.some((i) => i === asin);
};
