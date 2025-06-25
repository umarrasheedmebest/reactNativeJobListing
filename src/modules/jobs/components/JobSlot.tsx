import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import { colors } from '../../../common/styles/globalStyles';
import { JobSlotProps } from '../../../types/jobSlot';

const JobSlot: React.FC<JobSlotProps> = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.slot} onPress={onPress}>
            {item.url ? (
                <Image
                    source={{ uri: item.url }}
                    style={styles.image}
                />
            ) : (
                <Text style={styles.plusSign}>+</Text>
            )}
            <View style={styles.slotTextContainer}>
                <Text style={styles.slotText}>Slot {item?.slot}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    slot: {
        width: 100,
        height: 120,
        backgroundColor: colors.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.orange,
        borderWidth: 1,
    },
    plusSign: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.blackish,
    },
    slotText: {
        padding: 5,
        fontSize: 16,
        marginLeft: 10,
        color: colors.white,
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    slotTextContainer: {
        backgroundColor: colors.orange,
        position: 'absolute',
        bottom: 0,
        width: 100,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});

export default JobSlot;
