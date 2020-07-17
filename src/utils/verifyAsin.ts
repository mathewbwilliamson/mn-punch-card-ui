const isAsinLengthCorrect = (asin: string) => {
  console.log('\x1b[44m%s \x1b[0m', '[matt] asin.length', asin.length);
  return asin.length === 10;
};

const isAsinStartsWithB = (asin: string) => {
  console.log(
    '\x1b[44m%s \x1b[0m',
    '[matt] THING',
    asin.toLocaleLowerCase()[0] === 'b'
  );

  return asin.toLocaleLowerCase()[0] === 'b';
};

export const verifyAsin = (asin: string) => {
  return isAsinLengthCorrect(asin) && isAsinStartsWithB(asin);
};
