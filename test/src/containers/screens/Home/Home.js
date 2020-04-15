import React, { Component } from 'react';
import { View, Alert, Text, FlatList, SafeAreaView, Image} from 'react-native';

import {request} from '../../../lib/api';
import _Loader from '../../../components/Loader/_Loader';
import {styles} from './Styles';

import { connect } from 'react-redux';
import {getData} from '../../../redux/actions/index';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      availableInfo: null,
    };
  }

  componentDidMount() {
    let responseOperation = {
      success: (res) => {
        this.setState({availableInfo: res});
        this.props.getData(res.data);
      },
      error: (err) => {
        this.setState({loading: false}, () => {
          Alert.alert('Error', err.description || '');
        });
      },
      complete: () => {
        this.setState({loading: false});
      },
    };

    request(responseOperation);
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          {this.props.list.length ?
            <View>
              <Text>The Records Are - </Text>
            </View>
            :
            <Text>There are no records...</Text>
          }
          <FlatList
            data={this.props.list || []}
            renderItem={({item}) => (
              <View style={styles.card}>
                <View style={{flex: 1, flexDirection: 'row' }}>
                  <View style={{flex: 1, flexDirection: 'row' }}>
                    <Text>{item.first_name }</Text>
                    <Text>  {item.last_name}</Text>
                  </View>
                  <Image
                    style={styles.logo}
                    source={{
                      uri: item.avatar,
                    }}
                  />
                </View>
                <Text>{item.email}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
          <_Loader visible={this.state.loading} />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: (data) => dispatch(getData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
