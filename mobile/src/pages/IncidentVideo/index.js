import React from "react";
import {useNavigation, useRoute} from '@react-navigation/native';
import { WebView } from 'react-native-webview';



    export default function IncidentVideo(){
        const navigation = useNavigation();
        const route = useRoute();
        const video_link = route.params.video_link;
        function navigateBack(){
            navigation.goBack();
    }
    return (
        <WebView style={{ flex: 1 }} source={{uri:video_link}} />
);

    }