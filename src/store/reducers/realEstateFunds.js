export const realEstateFundsDefault = {
  funds: [
    {
      ticker: 'HSML11',
      segment: 'Shoppings',
      quantity: 50,
      averagePrice: 100,
      totalAmount: 5000
    },
    {
      ticker: 'MALL11',
      segment: 'Shoppings',
      quantity: 100,
      averagePrice: 100,
      totalAmount: 10000
    }
  ]
};

const reducer = (state = realEstateFundsDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
