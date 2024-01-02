// eslint-disable-next-line
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    // eslint-disable-next-line
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    // eslint-disable-next-line
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
