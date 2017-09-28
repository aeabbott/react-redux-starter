import { connect } from 'react-redux';
import setNameInfo from '/Users/n0235530/PracticeProjects/react-starter-kit/src/js/actions/nameActions.js';
import { navigateForward } from '/Users/n0235530/PracticeProjects/react-starter-kit/src/js/actions/navigationActions.js';
import LaunchPage from './LaunchPage';


const mapStateToProps = state => ({
    name: state.post.name,
});

const mapDispatchToProps = dispatch => ({
    navigateForward: () => dispatch(navigateForward()),
    setNameInfo: (name) => dispatch(setNameInfo(name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LaunchPage);
