import { useEffect, useState } from 'react';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import { addJob, editJob } from '@store/slices/jobSlice';
import { ADD_IMAGE_MESSAGE, ADD_TITLE_MESSAGE } from '@constants/messages';
import { Alert } from 'react-native';

/** business logic for AddJobScreen screen */
const AddJobScreenServiceComponent = ({
    children,
    navigation,
    route
}) => {
    const dispatch = useDispatch();
    const [imageSlote1, setImageSlot1] = useState(null);
    const [imageSlote2, setImageSlot2] = useState(null);
    const [imageSlote3, setImageSlot3] = useState(null);
    const [title, setTitle] = useState(null);
    const currentJob = route.params?.job;

    useEffect(() => {
        if (currentJob) {
            setImageSlot1(currentJob.images[0]);
            setImageSlot2(currentJob.images[1]);
            setImageSlot3(currentJob.images[2]);
            setTitle(currentJob.title);
        }
    }, [currentJob]);

    const getPhotoFromGallery = (slot) => {
        launchCamera({ mediaType: 'photo', quality: 1, saveToPhotos: true }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorCode);
            } else {
                if (slot == 1) {
                    setImageSlot1(response.assets[0].uri);
                } else if (slot == 2) {
                    setImageSlot2(response.assets[0].uri);
                } else {
                    setImageSlot3(response.assets[0].uri);
                }
            }
        });
    }

    const getImages = () => {
        let images = []
        if (imageSlote1) {
            images.push(imageSlote1)
        }
        if (imageSlote2) {
            images.push(imageSlote2)
        }
        if (imageSlote3) {
            images.push(imageSlote3)
        }
        return images;
    }

    const handleSave = () => {
        if ((imageSlote1 || imageSlote2 || imageSlote3) && title) {
            const job = { id: currentJob?.id || new Date().toISOString(), title: title, images: getImages() };
            if (currentJob) {
                dispatch(editJob(job));
            } else {
                dispatch(addJob(job));
            }
            setImageSlot1('');
            setImageSlot2('');
            setImageSlot3('');
            navigation.goBack();
        } else {
            if (!title) {
                Alert.alert(ADD_TITLE_MESSAGE);
            } else {
                Alert.alert(ADD_IMAGE_MESSAGE);
            }
        }
    };

    return children({
        getPhotoFromGallery,
        imageSlote1,
        imageSlote2,
        imageSlote3,
        handleSave,
        setTitle,
        title
    });
}

export default AddJobScreenServiceComponent;
