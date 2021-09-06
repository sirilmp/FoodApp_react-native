import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import popularData from '../assets/data/popularData'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../assets/colors/Colors';


const PopularCard = ({ navigation }) => {
    return (
        <>
            {popularData.map((item) => (
                <View key={item.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('Details',{item:item})} style={styles.popularDataItemWrapper}>
                        <View>
                            <View style={styles.subHeadingWrapper}>
                                <MaterialCommunityIcons name="crown" size={14} color={Colors.primary} />
                                <Text style={styles.subHeading} >top of the week</Text>
                            </View>
                            <View style={styles.detailsWrapper} >
                                <Text style={styles.detailsHeading}>{item.title}</Text>
                                <Text style={styles.detailsWeight}>{item.weight}</Text>
                            </View>
                            <View style={styles.popularDataIteFooter}>
                                <View style={styles.addButton}>
                                    <FontAwesome name="plus" size={10} color={Colors.textDark} />
                                </View>
                                <View style={styles.ratingWrapping}>
                                    <FontAwesome name="star" />
                                    <Text style={styles.ratingText}>{item.rating}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.popularDataItemImageWrapper}>
                            <Image style={styles.popularDataIteImage} source={item.image} />
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </>
    )
}

export default PopularCard

const styles = StyleSheet.create({
    popularDataWrapper: {
        flex: 1
    },
    popularHeading: {
        fontSize: 16,
        color: Colors.textDark,
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'bold',
        marginBottom: 11
    },
    popularDataItemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 20,
        backgroundColor: Colors.background,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 20,
        elevation: 2
    },
    subHeadingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 27,
    },
    subHeading: {
        fontWeight: '500',
        fontSize: 14,
        marginLeft: 10,
    },
    detailsWrapper: {
        flex: 1,
        marginLeft: 20,
        marginTop: 20,
    },
    detailsHeading: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 5,
        color: Colors.textDark,
    },
    detailsWeight: {
        fontSize: 12,
        fontWeight: '400',
        marginBottom: 5,
        color: Colors.textLight
    },
    popularDataIteFooter: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    addButton: {
        width: 90,
        height: 53,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25
    },
    ratingWrapping: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.textDark,
        marginLeft: 5
    },
    popularDataItemImageWrapper: {
        marginLeft: 60
    },
    popularDataIteImage: {
        width: 248,
        height: 143,
        resizeMode: 'contain'
    },
})
