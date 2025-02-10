import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

import {Image, Text, View} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

interface LoadingSpinnerProps {
  visible: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({visible}) => {
  const rotation = useSharedValue(0);

  // Define the animation
  rotation.value = withRepeat(
    withSpring(360, {damping: 1, stiffness: 100}),
    -1, // Infinite repeat
    false,
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  return (
    <Spinner
      visible={visible}
      textContent={'Cargando...'}
      textStyle={{color: '#FFF'}}>
      <View
        style={{
          width: 110,
          margin: 'auto',
          alignItems: 'center',
          marginTop: '80%',
        }}>
        <Animated.View style={animatedStyle}>
          <Image
            source={require('../assets/images/logo.png')}
            alt="logo"
            style={{width: 60, height: 60}}
          />
        </Animated.View>
        <Text style={{color: 'white'}}>Cargando...</Text>
      </View>
    </Spinner>
  );
};

export default LoadingSpinner;
