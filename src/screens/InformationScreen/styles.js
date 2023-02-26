import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7186a9',
  },
  video: {
    alignSelf: 'center',
    width: '97%',
    aspectRatio: 16/9,
    flex: 1, 
    zIndex: 1,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default styles;