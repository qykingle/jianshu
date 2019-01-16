import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style'
import Header from './common/header'
import { GlobalStyle2 } from './statics/iconfont/iconfont.js'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
class App extends Component {
  render () {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalStyle2 />
        <div>
          <Provider store={store}>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home} />
              </div>
            </BrowserRouter>
          </Provider>
        </div>
      </Fragment>

    )
  }
}

export default App
