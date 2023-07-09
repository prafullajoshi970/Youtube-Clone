
var initialState = {
  product: [],

};

const myreducer = (state = initialState, action) => {

  switch (action.type) {
    case 'Youtube':
      return {
        ...state,
        product: action.payload
      };

    default:
      return state;
  }
};


export default myreducer;