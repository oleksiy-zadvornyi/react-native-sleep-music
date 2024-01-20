import React, {useMemo, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';

import {getStyle} from './style';
import {PlaySvg, PauseSvg} from '@/assets/svg';

Sound.setCategory('Playback');
const sound = new Sound(require('@/assets/mp3/file.mp3'), error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

const Home = () => {
  const [isPlaying, setPlaying] = useState(false);
  const styles = useMemo(() => getStyle(), []);

  const togglePlay = () => setPlaying(play => !play);

  const handlePlay = () => {
    if (isPlaying) {
      sound.pause();
      togglePlay();
    } else {
      sound.play();
      togglePlay();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePlay}>
        {isPlaying ? <PauseSvg /> : <PlaySvg />}
      </TouchableOpacity>
    </View>
  );
};

export default Home;
