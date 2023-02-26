import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#7186a9',
    justifyContent: 'center',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: 60,
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    color: 'black',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    color: 'black',
    width: '95%',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#7bc246',
    height: 60,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;