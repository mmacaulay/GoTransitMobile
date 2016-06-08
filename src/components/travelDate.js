import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, DatePickerIOS } from 'react-native'
import moment from 'moment'

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default class TravelDate extends Component {
  constructor () {
    super()
    ;['toggleSelecting', 'onDateChange'].forEach((fn) => {
      this[fn] = this[fn].bind(this)
    })
    this.state = {
      selectingDate: false,
      travelDate: new Date()
    }
  }

  toggleSelecting () {
    this.setState({
      selectingDate: !this.state.selectingDate
    })
    if (!this.state.selectingDate) {
      this.props.onDateChange(this.state.travelDate)
    }
  }

  onDateChange (newDate) {
    this.setState({
      travelDate: newDate
    })
  }

  render () {
    console.log('travelDate', this.state.travelDate)
    const dateText = moment(this.state.travelDate).format('MMMM Do YYYY, h:mm a')
    return (
      <View>
        <Text style={styles.label}>When are you travelling?</Text>
        <TouchableHighlight onPress={this.toggleSelecting}>
          <Text>{dateText}</Text>
        </TouchableHighlight>
        {this.state.selectingDate &&
          <View>
            <TouchableHighlight onPress={this.toggleSelecting}>
              <Text>Done</Text>
            </TouchableHighlight>
            <DatePickerIOS date={this.state.travelDate} onDateChange={this.onDateChange} />
          </View>}
      </View>
    )
  }
}

TravelDate.propTypes = {
  onDateChange: React.PropTypes.func.isRequired
}
