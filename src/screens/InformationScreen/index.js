import React, { useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import styles from './styles';

const InformationScreen = () => {

  const video = useRef(null);
  const [status, setStatus] = React.useState({});
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{uri: "https://giftoflifechc.s3.amazonaws.com/PSA_Captions_wtrmk.mp4"}}
        posterSource={require('../../../assets/GriffinsforLife.jpg')}
        posterStyle={{resizeMode: 'cover'}}
        usePoster={true}
        useNativeControls
        resizeMode="contain"
      />
    </ScrollView>
  );
};

export default InformationScreen;