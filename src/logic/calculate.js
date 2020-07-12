import operate from './operate';

const calculate = (calcObj, buttonName) => {
  const isNumber = numStr => /\d/.test(numStr);
  const isOperation = opr => /\+|-|x|÷|%/.test(opr);
  let { total, next, operation } = calcObj;
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  return { total, next, operation };
};

export default calculate;
