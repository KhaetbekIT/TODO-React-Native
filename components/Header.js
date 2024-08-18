import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    main: {
        backgroundColor: "silver",
        paddingVertical: 25,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 18,
        color: "red",
        fontWeight: 600,
    }
})

const Header = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>TODO</Text>
        </View>
    )
}

export default Header