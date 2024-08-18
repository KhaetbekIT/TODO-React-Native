import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Form = ({ addHandler }) => {
    const [Value, setValue] = useState('')

    const onChange = (text) => {
        setValue(text)
    }

    return (
        <View>
            <TextInput placeholder='Add text' style={styles.input} onChangeText={onChange} />
            <Button title='Add' onPress={() => addHandler(Value)} color={"green"} />
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#fafa",
        padding: 10,
        marginBottom: 10
    }
})