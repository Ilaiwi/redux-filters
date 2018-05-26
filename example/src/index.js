import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { filtersReducer } from 'redux-filters';
import { devToolsEnhancer } from 'redux-devtools-extension';

let store = createStore(filtersReducer, devToolsEnhancer())

class Index extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
// registerServiceWorker();
