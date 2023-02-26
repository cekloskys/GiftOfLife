import { View, Pressable, Image, Dimensions, Text, Linking } from 'react-native';
import styles from './styles';

const SignUpScreen = () => {

    const onPress = () =>
        Linking.canOpenURL('https://www.donors1.org/about-gift-of-life/community-outreach/college-programs/gift-of-life-college-challenge/').then(() => {
            Linking.openURL('https://www.donors1.org/about-gift-of-life/community-outreach/college-programs/gift-of-life-college-challenge/');
        });

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
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <View style={styles.bottomContainer}>
                <Text style={styles.title}>April 11, 2023, 2-4PM</Text>
                <Text style={styles.title}>Fournier Circle</Text>
                <Text style={styles.subtitle}>Outdoors, music, games and snacks to spread the word about organ donation.</Text>
            </View>
        </View>
    );
};

export default SignUpScreen;