/*global fetch*/
import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ListView } from 'react-native'

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default class StartingStop extends Component {
  constructor () {
    super()
    ;['textChanged'].forEach((fn) => this[fn] = this[fn].bind(this))
    this.state = {
      text: '',
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => { r1 !== r2 }
      })
    }
  }

  textChanged (text) {
    this.setState({ text })
    if (text.length > 2) {
      fetch(`http://localhost:16080/stops?name=${text}`)
        .then((response) => response.json())
        .then((results) => this.setState({ dataSource: this.state.dataSource.cloneWithRows(results.data) }))
        .catch((error) => console.warn(error))
    } else {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows([]) })
    }
  }

  render () {
    return (
      <View>
        <Text style={styles.label}>Start Stop</Text>
        <TextInput
          style={{height: 40, width: 200, padding: 10, borderColor: 'gray', borderWidth: 1}}
          value={this.state.text}
          onChangeText={(text) => this.textChanged(text)}
          autoCorrect={false}
          />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(row) => <Text>{row.name}</Text>}
           />
      </View>
    )
  }
}
