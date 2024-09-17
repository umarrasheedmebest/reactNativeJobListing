import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddJobScreen from '@modules/jobs/screens/AddJob/AddJobContainer';
import JobListingScreen from '@modules/jobs/screens/JobsListing/JobsListingContainer';
import { colors } from '@styles/globalStyles';

/** apps root navigator */
const RootNavigator = () => {
    const MainStack = createStackNavigator();

    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="JobListing"
            >
                <MainStack.Screen
                    options={{
                        title: 'Job Listing', // Customize title
                        headerStyle: {
                            backgroundColor: colors.orange,
                        },
                        headerTintColor: colors.white, // Back arrow and text color
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                    name="JobListing"
                    component={JobListingScreen}
                />
                <MainStack.Screen
                    options={{
                        title: 'Add a new job', // Customize title
                        headerBackTitleVisible: false,
                        headerStyle: {
                            backgroundColor: colors.orange,
                        },
                        headerTintColor: colors.white, // Back arrow and text color
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                    name="AddJob"
                    component={AddJobScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    )

};

export default RootNavigator;
