import { connect } from 'react-redux';
import { setPostInfo } from 'actions/postActions';
import LaunchPage from './LaunchPage';


const mapStateToProps = state => ({
    name: state.postInfo.name,
});

const mapDispatchToProps = dispatch => ({
    setPostInfo: postInfo => dispatch(setPostInfo(postInfo)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LaunchPage);
