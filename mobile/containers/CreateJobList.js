import { connect } from 'react-redux';
import Router from '../navigation/Router';
import JobList from '../components/JobList';
import Actions from '../actions/index';

const getFilteredJobs = (jobs, filter) => {
  if (!filter) {
    return jobs;
  }
  return jobs.filter((job) => { 
    job.title = job.title || '';
    job.description = job.description || '';
    job.profession = job.profession || '';
    job.address = job.address || '';

    return (
      job.title.toLowerCase().indexOf(filter.toLowerCase()) >= 0 || 
      job.profession.toLowerCase().indexOf(filter.toLowerCase()) >= 0 ||
      job.description.toLowerCase().indexOf(filter.toLowerCase()) >= 0 ||
      job.address.toLowerCase().indexOf(filter.toLowerCase()) >= 0 
    ); 
  });
};

const mapStateToProps = (state) => {
  return {
    jobs: getFilteredJobs(state.jobList.jobList, state.jobList.filter),
    filter: state.jobList.filter,
    showMap: state.jobList.showMap,
    userId: state.profile.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  goToJob: (jobId, isOwner = false) => {
    const params = {
      jobId,
      isOwner,
    };
    ownProps.navigator.push(Router.getRoute('jobProfile', params));
  },
  updateJobs: () => {
    dispatch(Actions.updateJobList());
  },
  changeFilter: (filter) => {
    dispatch(Actions.changeJobFilter(filter));
  },
  toggleShowMap: (showMap) => {
    dispatch(Actions.toggleShowMap(showMap));
  },
});


const CreateJobList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobList);

export default CreateJobList;
