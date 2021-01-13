/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as themeReducer from './themeReducer';
// import * as swipeReducer from './swipeReducer';
// import * as matchReducer from './matchReducer';
// import * as streamReducer from './streamReducer';
// import * as feedReducer from './feedReducer';
export default Object.assign(loginReducer, loadingReducer, themeReducer, swipeReducer, matchReducer, feedReducer,);
