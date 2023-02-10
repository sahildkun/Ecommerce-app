import { compose,applyMiddleware, legacy_createStore as createStore  } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
//root reducer is a big main reducer compprising of various small reducers


const middleWares = [logger]
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer,undefined,composedEnhancers);




//middleWares are like little library helpers that run befor action hits reducer