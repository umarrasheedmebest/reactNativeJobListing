import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import FloatingButton from '@components/FloatingButton';
import globalStyles from '@styles/globalStyles';
import JobListItem from '@modules/jobs/components/JobListItem';
import SimpleText from '@components/SimpleText';
import { NO_JOB_FOUND_MESSAGE } from '@constants/messages';

/** View logic for JobListing screen */

const JobListingComponent = ({
    navigateToAddJobScreen,
    setCurrentJobAndNavigate,
    jobs
}) => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <FlatList
                data={jobs}
                renderItem={(data) => <JobListItem item={data?.item} onPress={setCurrentJobAndNavigate} />}
                keyExtractor={(item) => item?.id}
                initialNumToRender={20}
                ListEmptyComponent={() =>
                    <SimpleText
                        title={NO_JOB_FOUND_MESSAGE}
                        variant="heading"
                        style={{
                            textAlign: 'center',
                            marginTop: 50
                        }}
                    />}
            />
            <FloatingButton navigateToAddJobScreen={navigateToAddJobScreen} />
        </SafeAreaView>
    );
};

export default JobListingComponent;
