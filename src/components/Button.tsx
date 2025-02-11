import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: colors.BACKGROUND,
    width: 200,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  title: {
    fontStyle: 'normal',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#28a0d8',
  },
});
