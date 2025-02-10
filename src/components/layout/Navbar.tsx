import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '../../constants/colors';

export const Navbar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.jpg')}
          alt="Logo"
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.BACKGROUND,
    paddingHorizontal: 20,
    paddingVertical: 10,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  logo: {
    width: 50,
    height: 50,
  },
});
