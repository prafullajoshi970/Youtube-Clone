
var initialState = {
  product: [],

};

const myreducer = (state = initialState, action) => {

  switch (action.type) {
    case 'electronics':
      return {
        ...state,
        product: action.payload
      };

    default:
      return state;
  }
};


export default myreducer;