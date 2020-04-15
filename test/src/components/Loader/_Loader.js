import React, { Component } from 'react';
import {Modal, Text, View} from 'react-native';

import {styles} from './style';

export default class Loader extends Component {
  render() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => {}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Loading.....</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}