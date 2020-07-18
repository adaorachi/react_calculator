import big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const numOneEval = big(numberOne);
  const numTwoEval = big(numberTwo);
  let finalOpr;
  switch (operation) {
    case '+':
      finalOpr = numOneEval.plus(numTwoEval).toString();
      break;
    case '-':
      finalOpr = numOneEval.minus(numTwoEval).toString();
      break;
    case 'x':
      finalOpr = numOneEval.times(numTwoEval).toString();
      break;
    case '÷':
      if (numberTwo !== '0') {
        finalOpr = numOneEval.div(numTwoEval).toString();
      }
      break;
    case '%':
      finalOpr = numOneEval.div(100).toString();
      break;
    default:
      finalOpr = null;
      break;
  }
  return finalOpr;
};

export default operate;
