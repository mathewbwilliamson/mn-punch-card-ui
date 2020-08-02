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
  console.log('\x1b[44m%s \x1b[0m', '[matt] asinList', asinList);
  return asinList.some((i) => i === asin);
};
