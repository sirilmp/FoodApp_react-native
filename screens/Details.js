import React from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import Colors from '../assets/colors/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details = ({ route ,navigation}) => {
    const { item } = route.params;
    // console.log(item)


    const ingredientsItems = ({ item }) => (
        <View style={styles.ingredientsItemWrapper}>
            <Image source={item.image} />
        </View>
    )

    return (
        <SafeAreaView>
            <View style={styles.detailsWrapper}>
                <View style={styles.headerIconWrapper}>
                    <TouchableOpacity onPress={() => { navigation.goBack()}}>
                        <View style={styles.arrow}>
                            <FontAwesome name="chevron-left" size={11} color={Colors.textDark} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.star}>
                        <FontAwesome name="star" size={12} color={Colors.background} />
                    </View>
                </View>
                <View style={styles.detailsItems}>
                    <Text style={styles.detailHeading}>
                        {item.title}
                    </Text>
                    <Text style={styles.detailPrice}>
                        ₹ {item.price}
                    </Text>
                    <View style={styles.detailSubSection}>
                        <View style={styles.detailSubSectionTexts}>
                            <Text style={styles.detailSubSectionTextHead}>
                                Size
                            </Text>
                            <Text style={styles.detailSubSectionTextTail}>
                                {item.size}
                            </Text>
                            <Text style={styles.detailSubSectionTextHead}>
                                Crust
                            </Text>
                            <Text style={styles.detailSubSectionTextTail}>
                                {item.crust}
                            </Text>
                            <Text style={styles.detailSubSectionTextHead}>
                                Delivery in
                            </Text>
                            <Text style={styles.detailSubSectionTextTail}>
                                {item.deliveryTime}
                            </Text>
                        </View>
                        <View style={styles.detailSubSectionImgWrapper}>
                            <Image style={styles.detailSubSectionImg} source={item.image} />
                        </View>
                    </View>
                    <View style={styles.ingredientsWrapper}>
                        <Text style={styles.ingredientsTitle}>Ingredients</Text>
                        <View style={styles.ingredientsImgs}>
                            <FlatList data={item.ingredients} renderItem={ingredientsItems} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.placeOrderBtn}>
                    <Text style={styles.placeOrderBtnText}>Place an order</Text>
                    <FontAwesome name="chevron-right" size={10} color={Colors.textDark} />
                </TouchableOpacity>
            </View>
            <StatusBar backgroundColor={Colors.secondary} />
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    detailsWrapper: {
        marginTop: 30,
        height: "100%"
    },
    headerIconWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    arrow: {
        borderColor: Colors.textLight,
        borderWidth: 2,
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    star: {
        backgroundColor: Colors.primary,
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailHeading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.textDark,
        marginTop: 31,
        maxWidth: 150,
        paddingLeft: 20
    },
    detailPrice: {
        fontSize: 32,
        fontWeight: '500',
        color: Colors.price,
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 20
    },
    detailSubSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20
    },
    detailSubSectionTexts: {

    },
    detailSubSectionTextHead: {
        marginTop: 20,
        fontSize: 14,
        fontWeight: '400',
        color: Colors.textLight,
        marginBottom: 5
    },
    detailSubSectionTextTail: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.textDark,
    },
    detailSubSectionImgWrapper: {
        marginRight: -60,
    },
    detailSubSectionImg: {
        width: 356,
        height: 196,
        resizeMode: 'contain',
        paddingRight: -20
    },
    ingredientsWrapper: {
        marginTop: 60
    },
    ingredientsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 19,
        paddingLeft: 20
    },
    ingredientsItemWrapper: {
        width: 100,
        height: 80,
        backgroundColor: Colors.background,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 20,
        marginBottom: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 20,
        elevation: 1
    },
    placeOrderBtn: {
        width: "80%",
        marginLeft:'10%',
        height: 62,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 32,
        position: 'absolute',
        bottom: 80

    },
    placeOrderBtnText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
        fontFamily:'Montserrat-Bold'
    },
})
