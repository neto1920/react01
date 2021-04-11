import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Footer(props){
    return (
        <View style={style.Container}>
            <Text style={style.headerText}>{props.title}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    Container: {
        paddingBottom: 30,
        paddingBottom: 20,
        backgroundColor: 'navy',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,        
        marginTop: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default Footer;