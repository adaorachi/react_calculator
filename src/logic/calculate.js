import operate from './operate';

const calculate = (calcObj, buttonName) => {
  const isNumber = numStr => /\d/.test(numStr);
  const isOperation = opr => /\+|-|x|÷|%/.test(opr);
  let { total, next, operation } = calcObj;
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    next = (-1 * next).toString();
    total = (-1 * total).toString();
  } else if (isNumber(buttonName)) {
    if (next) {
      if (operation) {
        next += buttonName;
      } else if (total && !operation) {
        total += buttonName;
        next += buttonName;
      }
    } else {
      if (total) {
        next = buttonName;
      } else {
        next = buttonName;
        total = buttonName;
      } if (operation) {
        next = buttonName;
      }
    }
  } else if (isOperation(buttonName)) {
    if (!operation && total) {
      next = null;
      operation = buttonName;
    }
  }

  return { total, next, operation };
};

export default calculate;
