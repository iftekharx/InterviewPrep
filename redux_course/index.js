const redux = require("redux");

const produce = require("immer").produce;
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

//(previousState, action) => newState

// const intialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };
const intialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 10,
};

const cakeReducer = (state = intialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return produce(state, (draft) => {
        draft.numOfCakes = draft.numOfCakes - 1;
      });
    // return {
    //     ...state,
    //     numOfCakes: state.numOfCakes - 1,
    //   };
    case CAKE_RESTOCKED:
      return produce(state, (draft) => {
        draft.numOfCakes = draft.numOfCakes + action.payload;
      });
    // return {
    //   ...state,
    //   numOfCakes: state.numOfCakes + action.payload,
    // };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

const unsubsribe = store.subscribe(() => {});
store.dispatch(orderCake());
store.dispatch(restockCake(3));

store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(restockIceCream(2));

unsubsribe();
