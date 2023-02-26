import { View, Alert, Image, Dimensions, Text } from 'react-native';
import CountDown from 'react-native-countdown-component';
import styles from './styles';

const HomeScreen = () => {

  const event = new Date(2023, 4, 11, 14, 0, 0);
  const today = new Date();
  var msTillEvent = event.getTime() - today.getTime();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require('../../../assets/gift-of-life.png')}
          style={{
            width: Dimensions.get('screen').width * 0.9,
            height: Dimensions.get('screen').width * 0.9,
            resizeMode: 'contain',
          }}
        />
      </View>
      <CountDown
        until={msTillEvent / 1000}
        onFinish={() => Alert.alert('Gift of Life', 'Let\'s Celebrate!')}
        onPress={() => Alert.alert('Gift of Life', 'Students Save Lives!')}
        size={30}
        digitStyle={{ backgroundColor: '#7bc246' }}
        style={{ marginTop: 20 }}
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>April 11, 2023, 2-4PM</Text>
        <Text style={styles.title}>Fournier Circle</Text>
      </View>
    </View>
  );
};

export default HomeScreen;