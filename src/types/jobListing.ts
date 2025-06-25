import {ReactNode} from 'react';
import {Job} from '../store/slices/jobSlice';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '../navigation/RootNavigator';

export type JobListingService = {
  children: (params: {
    navigateToAddJobScreen: () => void;
    setCurrentJobAndNavigate: (job: Job) => void;
    jobs: Job[];
  }) => ReactNode;
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
};

export type JobListingComponentProps = {
  navigateToAddJobScreen: () => void;
  setCurrentJobAndNavigate: (job: Job) => void;
  jobs: Job[];
};

export type JobListingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'JobListing'>;
  route: RouteProp<RootStackParamList, 'JobListing'>;
};
