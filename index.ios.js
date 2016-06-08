import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Home from './src/components/home'

class GoTransitMobile extends Component {
  render () {
    return (
      <Home />
    )
  }
}

AppRegistry.registerComponent('GoTransitMobile', () => GoTransitMobile)
