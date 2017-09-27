import  { SET_NAME_INFO }  from '/Users/n0235530/PracticeProjects/react-starter-kit/src/js/actions/nameActions.js';

const initialState = {
    name: '',

};

export default (currentState = initialState, action = {}) => {
    switch (action.type) {
        case SET_NAME_INFO: {
            console.info(action)
            return { ...currentState, name: action.name };
        }
        default: {
            return currentState;
        }
    }
};
