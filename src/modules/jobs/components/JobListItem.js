import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import SimpleText from '@components/SimpleText';
import { colors } from '@styles/globalStyles';
import * as Progress from 'react-native-progress';
import { getProgress } from '@utils/common';

/** component for showing transaction single row */
const JobListItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
            <SimpleText title={item?.title} variant="heading" />
            <View style={styles.listProgress}>
                <Progress.Bar progress={getProgress(item?.images?.length)} width={250} color={colors.orange} />
                <SimpleText title={`${item?.images?.length}/3`} variant="subtitle" style={{ marginLeft: 10, }} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: colors.lightGrey,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20,
        paddingVertical: 20,
    },
    listProgress: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        height: 5,
        backgroundColor: colors.orange,
        borderRadius: 5,
        marginRight: 20,
        width: 250,
    },
});

export default JobListItem;
