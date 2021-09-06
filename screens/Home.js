import React from 'react';

import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import Colors from '../assets/colors/Colors';
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategoryCard from '../components/CategoryCard';
import PopularCard from '../components/PopularCard';







const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior='automatic'
                showsVerticalScrollIndicator={false}
            >
                <SafeAreaView>
                    <View style={styles.headerWrapper}>
                        <Image source={require('../assets/images/user.png')} style={styles.profileImage} />
                        <Feather name='bar-chart-2' size={34} color={Colors.textDark} style={{
                            transform: [{ rotate: "90deg" }]
                        }} />
                    </View>
                </SafeAreaView>
                <View style={styles.titleWrapper}>
                    <Text style={styles.subTitle}>
                        Food
                    </Text>
                    <Text style={styles.title}>
                        Delivery
                    </Text>
                </View>
                <View style={styles.searchWrapper}>
                    <FontAwesome name='search' size={16} color={Colors.textDark} />
                    <TextInput style={styles.inputBox} selectionColor={Colors.textLight} placeholderTextColor={Colors.textLight} placeholder='search...' />
                </View>
                <CategoryCard />
                <PopularCard navigation={navigation} />
            </ScrollView>
            <StatusBar backgroundColor={Colors.primary} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        paddingHorizontal: 20,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    profileImage: {
        width: 40,
        height: 40,
    },
    titleWrapper: {
        marginTop: 30
    },
    subTitle: {
        fontSize: 16,
        color: Colors.textDark,
        marginBottom: 5,
        fontFamily: 'Montserrat-Regular'
    },
    title: {
        fontSize: 32,
        color: Colors.textDark,
        fontFamily: 'Montserrat-Bold'
    },
    searchWrapper: {
        marginTop: 27,
        flexDirection: 'row',
        alignItems: 'center',

    },
    inputBox: {
        marginLeft: 12,
        color: Colors.textDark,
        flex: 1,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '500',
        borderBottomWidth: 2,
        borderBottomColor: Colors.textLight
    },

})
