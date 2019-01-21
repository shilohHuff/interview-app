
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'
import App from './App'

import registerServiceWorker from './registerServiceWorker';

//Here redux dev tools is wired into the application. In a productioon targeted application this should be remvoed.
//This also seems to break firefox compatibility. Known Issue.
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();