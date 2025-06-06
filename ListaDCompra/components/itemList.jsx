import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function ItemList( { item, markItem, unmarkItem, removeItem }) {
  return (
    <View style={styles.itemList}>
        <Text style={item.bought ? styles.itembought : styles.itemToBuy}>{item?.name}</Text>
        {!item?.bought ? (
            <TouchableOpacity style={styles.actionIcon} onPress={() => markItem(item.id)}>
                <Ionicons name='bag-check-outline' size={24} color = '#fff'/>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.actionIcon } onPress={() => unmarkItem(item.id)}>
                <Ionicons name='bag-check-outline' size={24} color = '#fff'/>
            </TouchableOpacity>
        )}

        <TouchableOpacity
            style={[styles.actionIcon, {backgroundColor: "darkred"}]}
            onPrewss={() => removeItem(item.id)}
        >
            <Ionicons name= 'trash-bin-outline' size= {24} color='#fff'/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
itemList:{
    backgroundColor: '#000000c0',
    padding: 15,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'white',
    marginVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
itemToBuy:{
    flex: 1,
    color: '#fff',
    fontSize: 24,
    textDecorationLine: 'none'
},
ItemBought: {
    flex: 1,
    color: '#fff',
    fontSize: 24,
    textDecorationLine: 'line-through'
},

actionIcon:{
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: 'darkgreen'
}
})