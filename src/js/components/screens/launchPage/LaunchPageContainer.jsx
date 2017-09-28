import { connect } from 'react-redux';
import setNameInfo from '../../../actions/nameActions.js';
import { navigateForward } from '../../../actions/navigationActions.js';
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
