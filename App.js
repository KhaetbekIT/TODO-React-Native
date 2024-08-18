import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import ListItem from './components/ListItem';
import Form from './components/Form';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const todoArray = [
  { text: "Buy milk", index: 1 },
  { text: "Buy tomato", index: 2 },
  { text: "Be a millioner", index: 3 }
]


export default function App() {
  const [ListOfItem, setListOfItem] = useState(todoArray);

  const addHandler = (value) => {
    setListOfItem(prev => [...prev, { text: value, index: ListOfItem.length + 1 }])
  }

  const onDelete = (index) => {
    setListOfItem(list => {
      return list.filter(item => item.index !== index)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={{ padding: 20 }}>
        <Form addHandler={addHandler} />

        <FlatList data={ListOfItem} renderItem={({ item: { text, index } }) => (
          <ListItem onHandler={onDelete} index={index} text={text} />
        )} />
      </View>
    </SafeAreaView>
  );
}


