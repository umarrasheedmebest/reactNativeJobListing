import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '../navigation/RootNavigator';
import {ReactNode} from 'react';
import {Job} from '../store/slices/jobSlice';

export type AddJobContainerProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddJob'>;
  route: RouteProp<RootStackParamList, 'AddJob'>;
};

export type AddJobScreenServiceProps = {
  navigation: {
    goBack: () => void;
  };
  route: {
    params?: {
      job?: Job;
    };
  };
  children: (props: {
    getPhotoFromGallery: (slot: number) => void;
    imageSlote1: string | null;
    imageSlote2: string | null;
    imageSlote3: string | null;
    handleSave: () => void;
    setTitle: (title: string) => void;
    title: string | null;
  }) => ReactNode;
};

export type AddJobScreenProps = {
  getPhotoFromGallery: (slot: number) => void;
  imageSlote1: string | null;
  imageSlote2: string | null;
  imageSlote3: string | null;
  handleSave: () => void;
  setTitle: (title: string) => void;
  title: string | null;
};
