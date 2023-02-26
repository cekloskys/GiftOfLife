import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: '97%',
    aspectRatio: 3/2,
    flex: 1, 
    zIndex: 1,
    marginTop: 10,
    resizeMode: 'contain',
    borderRadius: 5,
  },
});

export default styles;