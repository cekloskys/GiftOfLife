import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import pictures from '../../../assets/data/pictures.json';
import PictureComponent from '../../components/PictureComponent';

const PDFScreen = () => {

    return (
        <View style={styles.container}>
            <FlatList 
                data={pictures} 
                renderItem={({item}) => <PictureComponent post={item} />} 
            />
        </View>
    );
};

export default PDFScreen;