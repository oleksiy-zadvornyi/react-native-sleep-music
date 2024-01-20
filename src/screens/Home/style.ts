import {StyleSheet} from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2D3250',
      justifyContent: 'center',
      paddingHorizontal: '33%',
    },
    button: {},
  });

  return styles;
};
