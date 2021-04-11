import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header(props){
    return (
        <View style={style.Container}>
            <Text style={style.headerText}>{props.title}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    Container: {
        paddingTop: 30,
        paddingBotton: 20,
        backgroundColor: 'navy',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,        
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default Header;