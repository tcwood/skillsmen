import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

const Dimensions = React.Dimensions || require('Dimensions');

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const styles = StyleSheet.create({
  background: {
    width: 100 * vw,
    height: 100 * vh,
    backgroundColor: 'transparent',
  },
  headerRow: {
    width: 100 * vw,
    height: 14 * vh,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  }, 
  headerText: {
    width: 70 * vw,
    height: 20 * vh,
  }, 
  imageIconContainter: {
    width: 30 * vw,
    height: 20 * vh,
  },
  formBox: {
    width: 86 * vw,
    marginLeft: 7 * vw,
    marginRight: 7 * vw,
    borderColor: '#155FAB',
    borderWidth: 1,
    borderRadius: 5,
    height: 60 * vh,
    marginTop: 5 * vh,
    fontSize: 16,
    color: 'black',
    paddingLeft: 3 * vw,
    paddingRight: 3 * vw,
    paddingTop: 1 * vh,
    lineHeight: 100,
  },
  submitButtonTransparent: {
    width: 86 * vw,
    marginLeft: 7 * vw,
    marginRight: 7 * vw,
    borderColor: '#155FAB',
    borderWidth: 1,
    borderRadius: 5,
    height: 7 * vh,
    marginTop: 2 * vh,
  },
  submitButtonBlue: {
    width: 86 * vw,
    marginLeft: 7 * vw,
    marginRight: 7 * vw,
    borderWidth: 1,
    borderRadius: 5,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: '#155FAB'
  },
  imageIcon: {
    height: 4 * vw,
    width: 4 * vw,
    borderRadius: 4 * vh,
    borderColor: 'white',
  },
  posterImageIcon: {
    width: 11 * vh,
    height: 11 * vh,
    marginLeft: 8 * vw,
    marginRight: 2 * vw,
    marginTop: 6 * vh,
    borderRadius: 5.5 * vh,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  recomendationHead: {
    fontSize: 23,
    fontWeight: '400',
    color: '#616060',
    marginTop: 9 * vh,
    marginLeft: 3 * vw,
  },
  submitTextBlue: {
    fontSize: 19,
    fontWeight: '200',
    color: '#155FAB',
    textAlign: 'center',
    marginTop: 1.5 * vh,
  },
  submitTextWhite: {
    fontSize: 19,
    fontWeight: '300',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 1.5 * vh,
  },
  formText: {

  }
});

const whiteImg = require('../assets/whiteTexturedBackground.png');
const profileIcon = 'http://www.solotradie.com/wp-content/uploads/2015/04/tradesman_laptop.jpg'

class AddRevue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  submitButtonFormatHandler() {
    if (this.state.text.length) {
      return styles.submitButtonBlue
    } else {
      return styles.submitButtonTransparent
    }
  }

  submitButtonFontHandler() {
    if (this.state.text.length) {
      return styles.submitTextWhite
    } else {
      return styles.submitTextBlue
    }
  }

  render() {
    return (
      <Image
        style={ styles.background }
        source={ whiteImg }
      >
        <View style={styles.headerRow}>
          <View style={styles.imageIconContainter}>
            <Image
              style={ styles.posterImageIcon }
              source={{uri: 'http://www.solotradie.com/wp-content/uploads/2015/04/tradesman_laptop.jpg' }}
            />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.recomendationHead}>Write a recomendation</Text>
          </View>
        </View>

        <TextInput 
          style={styles.formBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline={true}>
        </TextInput>

        <View style={this.submitButtonFormatHandler()}>
          <Text style={this.submitButtonFontHandler()}> SUBMIT </Text>
        </View>
      </Image>
    );
  }
}

export default AddRevue;

