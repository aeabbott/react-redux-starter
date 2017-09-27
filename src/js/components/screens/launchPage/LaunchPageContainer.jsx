import { connect } from 'react-redux';
import setNameInfo from '/Users/n0235530/PracticeProjects/react-starter-kit/src/js/actions/nameActions.js';
import LaunchPage from '/Users/n0235530/PracticeProjects/react-starter-kit/src/js/components/screens/launchPage/LaunchPage.jsx';


const mapStateToProps = state => ({
    name: state.post.name,
});

const mapDispatchToProps = dispatch => ({
    setNameInfo: (name) => dispatch(setNameInfo(name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LaunchPage);
