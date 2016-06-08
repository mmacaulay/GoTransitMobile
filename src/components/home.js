import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import moment from 'moment'

import TravelDate from './travelDate'
import StartingStop from './startingStop'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      travelDate: moment()
    }

    this.onDateChange = this.onDateChange.bind(this)
  }

  onDateChange (date) {
    this.setState({
      travelDate: moment(date)
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <TravelDate onDateChange={this.onDateChange} />
        <StartingStop />
      </View>
    )
  }
}
