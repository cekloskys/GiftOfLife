import React from 'react';
import PDFReader from 'rn-pdf-reader-js'
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
    const route = useRoute();
    const pdfUri = route.params?.pdfUri;
    return (
        <PDFReader
            source={{
                uri: pdfUri,
            }}
        />
    );
};

export default DetailScreen;