import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const PlaySvg = () => (
  <Svg viewBox="0 0 30 30" fill="white">
    <G data-name="Layer 2">
      <Path
        d="M15 2.5A12.5 12.5 0 1027.5 15 12.514 12.514 0 0015 2.5zm4.968 14.14l-5.647 3.942a2 2 0 01-3.144-1.64v-7.883a2 2 0 013.144-1.641l5.647 3.941a2 2 0 010 3.28z"
        fill="none"
      />
      <Path d="M15 0a15 15 0 1015 15A15.016 15.016 0 0015 0zm0 27.5A12.5 12.5 0 1127.5 15 12.514 12.514 0 0115 27.5z" />
      <Path d="M19.968 13.36L14.32 9.417a2 2 0 00-3.144 1.64v7.883a2 2 0 003.144 1.641l5.647-3.941v-.001a2 2 0 000-3.28z" />
    </G>
  </Svg>
);
export default PlaySvg;
