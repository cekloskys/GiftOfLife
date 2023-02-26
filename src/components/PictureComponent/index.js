import React from 'react';
import { Pressable, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const PictureComponent = ({post}) => {

    const pdfUri = post.pdfUri;
    const imgUri = post.imgUri

    const navigation = useNavigation();
    const goToDetailPage = () => {
        navigation.navigate('Read More', { pdfUri: pdfUri });
    };

    return (
        <Pressable onPress={goToDetailPage}>
            <Image
                source={{ uri: imgUri }}
                style={styles.image}
            />
        </Pressable>
    );
};

export default PictureComponent;