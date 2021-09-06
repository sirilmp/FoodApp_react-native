import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import Colors from '../assets/colors/Colors';
import categoryData from '../assets/data/categoryData'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const categoryDataItem = (({ item }) => (
    <View style={[styles.categoryDataItemWrapper, { backgroundColor: item.selected ? Colors.primary : Colors.background }]}>
        <Image style={styles.categoryDataItemImage} source={item.image}
        />
        <Text style={styles.categoryDataItemTitle}>{item.title}</Text>
        <View style={[styles.categoryDataItemIcon, { backgroundColor: item.selected ? Colors.background : Colors.secondary }]}>
            <FontAwesome name='chevron-right' size={8} style={{ color: item.selected ? Colors.textDark : Colors.textLight }} />
        </View>
    </View>
))
const CategoryCard = () => {
    return (
        <View style={styles.categoryWrapper}>
        <Text style={styles.categoryHeading}>Categories</Text>
        <View style={styles.categoryItemEWrapper}>
            <FlatList
                data={categoryData}
                renderItem={categoryDataItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    </View>
    )
}

export default CategoryCard

const styles = StyleSheet.create({

    categoryWrapper: {
        marginTop: 30,
    },
    categoryHeading: {
        fontSize: 16,
        color: Colors.textDark,
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'bold'
    },
    categoryDataItemWrapper: {
        width: 105,
        height: 177,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 20,
        marginTop: 15,
        alignItems: 'center',
        shadowColor:'#000',
        shadowOffset:{
            width: 0,
            height:2
        },
        shadowOpacity:0.05,
        shadowRadius:20,
        elevation:2
    },
    categoryDataItemImage: {
        marginTop: 20,
        marginBottom: 10,
        width: 60,
        height: 60
    },
    categoryDataItemTitle: {
        fontSize: 14,
        fontWeight: '500'
    },
    categoryDataItemIcon: {
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
