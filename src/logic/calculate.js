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
  } else if (buttonName === '=') {
    if (next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    } else {
      return {};
    }
  } else if (buttonName === '.') {
    if (total && next) {
      if (operation) {
        next += buttonName;
      }
      if (!total.includes('.') && !next.includes('.')) {
        next += '.';
        total += '.';
      }
    } else {
      total = '0.';
      next = '0.';
    }
  }

  return { total, next, operation };
};

export default calculate;
