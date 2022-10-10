import React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import Hamburger from '../../assets/icons/hamburger.svg';

const Todo = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text>Quick Todo</Text>
          <Image
            style={styles.hamburger}
            source={{uri: require('../../assets/icons/hamburger.png')}}
          />
        </View>
        <View>
          <TextInput placeholder="Search task" name="search" />
        </View>
        <View>
          <View>
            <Text>Completed</Text>
            <Text>0</Text>
          </View>
          <View>
            <Text>Pending</Text>
            <Text>0</Text>
          </View>
        </View>
        <View>
          <Text>My Task</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'blue',
  },
  hamburger: {
    width: 66,
    height: 58,
  },
});

export default Todo;
