import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import globalStyles from '../../../../common/styles/globalStyles';
import TextInputField from '../../../../common/components/TextInputField';
import JobSlot from '../../components/JobSlot';
import Button from '../../../../common/components/Button';
import { AddJobScreenProps } from '../../../../types/addJob';

const AddJobScreenComponent = ({
    getPhotoFromGallery,
    imageSlote1,
    imageSlote2,
    imageSlote3,
    handleSave,
    setTitle,
    title,
}: AddJobScreenProps) => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <TextInputField
                label="Add a title"
                value={title ?? ''}
                onChangeText={setTitle}
                width={0.9}
                isDynamic
                blurOnSubmit={false}
                autoFocus
            />
            <View style={styles.container}>
                <JobSlot item={{ url: imageSlote1, slot: 1 }} onPress={() => getPhotoFromGallery(1)} />
                <JobSlot item={{ url: imageSlote2, slot: 2 }} onPress={() => getPhotoFromGallery(2)} />
                <JobSlot item={{ url: imageSlote3, slot: 3 }} onPress={() => getPhotoFromGallery(3)} />
            </View>

            <Button
                title="Save Job"
                width={0.5}
                isDynamic
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
        marginTop: 10,
    },
});
