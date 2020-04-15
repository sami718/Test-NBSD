import {StyleSheet} from 'react-native';
import * as Colors from '../../../assets/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 45,
  },
  card: {
    flex: 1,
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
  logo: {
    width: '100%',
    height: 250,
    flex: 1
  }
});
