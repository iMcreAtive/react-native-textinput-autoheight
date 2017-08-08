import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Platform
} from 'react-native';


export default class EpandTextInput extends Component{

  constructor(props){
    super(props);

    this.state = {
      height: 30
    }
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={1}
        { ...this.props }
        height={ this.state.height }
        underlineColorAndroid="transparent"
        onContentSizeChange={(event) => {
          this.setState({ height: event.nativeEvent.contentSize.height + (Platform.OS === 'ios' ? 5 : 0) });
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 0,
    padding: 0,
    fontWeight: 'normal',
    color: '#666'
  }
});
