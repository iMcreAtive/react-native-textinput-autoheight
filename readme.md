# React Native <TextInput> Auto-height

Install:
```sh
$ npm i react-native-textinput-autoheight --save
```
Exampe:
```javascript
import AutoheightTextInput from 'react-native-textinput-autoheight';

<AutoheightTextInput
    value={this.state.text}
    onChangeText={ this._onChangeText.bind(this) }
/>

_onChangeText(text){
    this.setState({ text });
}
```

You can use all PropTypes of TextInput.

# Newline hook

```javascript
import AutoheightTextInput from 'react-native-textinput-autoheight';

<AutoheightTextInput
    value={this.state.text}
    onChangeText={ this._onChangeText.bind(this) }
    onSubmitEditing={ this._onSubmitEditing.bind(this) }
    blurOnSubmit={ false }
/<

_onSubmitEditing(){
    if (!this.state.text.endsWith("\n")) {
        let text = this.state.text;
        text = text + "\n";
        this.setState({ text });
    }
}

_onChangeText(text){
    this.setState({ text });
}
```
