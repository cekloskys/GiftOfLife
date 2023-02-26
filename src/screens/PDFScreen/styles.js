import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7186a9',
  },
  image: {
    alignSelf: 'center',
    width: '100%',
    aspectRatio: 3/2,
    flex: 1, 
    zIndex: 1,
    marginTop: 10,
    resizeMode: 'contain',
    borderRadius: 5,
  },
});

export default styles;