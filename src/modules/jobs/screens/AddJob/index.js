import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import globalStyles from '@styles/globalStyles';
import JobSlot from '@modules/jobs/components/JobSlot';
import Button from '@components/Button';
import TextInputField from '@components/TextInputField';

/** View logic for AddJobScreen screen */
const AddJobScreenComponent = ({
    getPhotoFromGallery,
    imageSlote1,
    imageSlote2,
    imageSlote3,
    handleSave,
    setTitle,
    title
}) => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <TextInputField
                label="Add a title"
                value={title}
                onChangeText={(value) => setTitle(value)}
                width={0.9}
                isDynamic={true}
                blurOnSubmit={false}
                autoFocus={true}
            />
            <View style={styles.container}>
                <JobSlot item={{ url: imageSlote1, slot: 1 }} onPress={() => getPhotoFromGallery(1)} />
                <JobSlot item={{ url: imageSlote2, slot: 2 }} onPress={() => getPhotoFromGallery(2)} />
                <JobSlot item={{ url: imageSlote3, slot: 3 }} onPress={() => getPhotoFromGallery(3)} />
            </View>

            <Button
                title="Save Job"
                width={0.5} // 90% of the screen width if isDynamic is true
                isDynamic={true}
                onPress={handleSave}
            />
        </SafeAreaView>
    );
};

export default AddJobScreenComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 10
    },
});
