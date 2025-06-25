import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import JobListingScreen from '../modules/jobs/screens/JobsListing/JobsListingContainer';
import { colors } from '../common/styles/globalStyles';
import AddJobScreen from '../modules/jobs/screens/AddJob/AddJobContainer';

export type RootStackParamList = {
  JobListing: undefined;
  AddJob: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="JobListing">
        <Stack.Screen
          name="JobListing"
          component={JobListingScreen}
          options={{
            title: 'Job Listing',
            headerStyle: {
              backgroundColor: colors.orange,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="AddJob"
          component={AddJobScreen}
          options={{
            title: 'Add a new job',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.orange,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
