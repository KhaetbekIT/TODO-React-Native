import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "#fafafa",
        marginVertical: 10,
        borderWidth: 1,
        maxWidth: "70%",
        width: "100%",
        marginHorizontal: "auto"
    }
})

const ListItem = ({ index, text, onHandler }) => {
    return (
        <TouchableOpacity onPress={() => onHandler(index)}>
            <Text style={styles.text}>
                {index}. {text}
            </Text>
        </TouchableOpacity>
    )
}

export default ListItem

