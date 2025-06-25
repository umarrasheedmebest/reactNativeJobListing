import React from 'react';
import {SafeAreaView, FlatList, ListRenderItem} from 'react-native';
import JobListItem from '../../components/JobListItem';
import globalStyles from '../../../../common/styles/globalStyles';
import SimpleText from '../../../../common/components/SimpleText';
import {NO_JOB_FOUND_MESSAGE} from '../../../../constants/messages';
import FloatingButton from '../../../../common/components/FloatingButton';
import {Job} from '../../../../store/slices/jobSlice';
import {JobListingComponentProps} from '../../../../types/jobListing';

const JobListingComponent = ({
  navigateToAddJobScreen,
  setCurrentJobAndNavigate,
  jobs,
}: JobListingComponentProps) => {
  const renderItem: ListRenderItem<Job> = ({item}) => (
    <JobListItem item={item} onPress={setCurrentJobAndNavigate} />
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
        initialNumToRender={20}
        ListEmptyComponent={() => (
          <SimpleText
            title={NO_JOB_FOUND_MESSAGE}
            variant="heading"
            style={{
              textAlign: 'center',
              marginTop: 50,
            }}
          />
        )}
      />
      <FloatingButton navigateToAddJobScreen={navigateToAddJobScreen} />
    </SafeAreaView>
  );
};

export default JobListingComponent;
