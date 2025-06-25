import { useEffect, useState } from 'react';
import { launchCamera } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';

import { Alert } from 'react-native';
import { addJob, editJob, Job } from '../../../../store/slices/jobSlice';
import { ADD_IMAGE_MESSAGE, ADD_TITLE_MESSAGE } from '../../../../constants/messages';
import { AddJobScreenServiceProps } from '../../../../types/addJob';

const AddJobScreenServiceComponent = ({ children, navigation, route }: AddJobScreenServiceProps) => {
    const dispatch = useDispatch();
    const [imageSlote1, setImageSlot1] = useState<string | null>(null);
    const [imageSlote2, setImageSlot2] = useState<string | null>(null);
    const [imageSlote3, setImageSlot3] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);

    const currentJob = route.params?.job;

    useEffect(() => {
        if (currentJob) {
            setImageSlot1(currentJob.images[0]);
            setImageSlot2(currentJob.images[1]);
            setImageSlot3(currentJob.images[2]);
            setTitle(currentJob.title);
        }
    }, [currentJob]);

    const getPhotoFromGallery = (slot: number) => {
        launchCamera({ mediaType: 'photo', quality: 1, saveToPhotos: true }, (response) => {
            if (response.didCancel || response.errorCode || !response.assets?.[0]?.uri) {
                console.log('ImagePicker cancelled or failed');
                return;
            }

            const uri = response.assets[0].uri;
            if (slot === 1) setImageSlot1(uri);
            else if (slot === 2) setImageSlot2(uri);
            else setImageSlot3(uri);
        });
    };

    const getImages = (): string[] => {
        const images: string[] = [];
        if (imageSlote1) images.push(imageSlote1);
        if (imageSlote2) images.push(imageSlote2);
        if (imageSlote3) images.push(imageSlote3);
        return images;
    };

    const handleSave = () => {
        if ((imageSlote1 || imageSlote2 || imageSlote3) && title) {
            const job: Job = {
                id: currentJob?.id || new Date().toISOString(),
                title,
                images: getImages(),
            };

            if (currentJob) {
                dispatch(editJob(job));
            } else {
                dispatch(addJob(job));
            }

            setImageSlot1(null);
            setImageSlot2(null);
            setImageSlot3(null);
            navigation.goBack();
        } else {
            Alert.alert(!title ? ADD_TITLE_MESSAGE : ADD_IMAGE_MESSAGE);
        }
    };

    return children({
        getPhotoFromGallery,
        imageSlote1,
        imageSlote2,
        imageSlote3,
        handleSave,
        setTitle,
        title,
    });
};

export default AddJobScreenServiceComponent;
