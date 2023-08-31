import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ onAnimationFinish }) => (
  <View style={styles.splashContainer}>
    <LottieView
      style={styles.splash}
      source={require('./assets/splashscreen.json')}
      autoPlay
      loop={false}
      onAnimationFinish={onAnimationFinish}
    />
  </View>
);

const MainContent = () => (
  <View style={styles.mainContainer}>
    <Text style={styles.text}>Your Awesome App Home Screen!</Text>
  </View>
);

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const handleAnimationFinish = () => {
    setLoaded(true);
  };

  return (
    <View style={styles.container}>
      {loaded ? <MainContent /> : <SplashScreen onAnimationFinish={handleAnimationFinish} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContainer: {
    width: 200,
    height: 200,
  },
  splash: {
    flex: 1,
  },
  mainContainer: {
    marginTop: 100,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default App;
