import  { SET_NAME_INFO }  from '../actions/nameActions.js';

const initialState = {
    name: '',
    location: {
        search: '',
    },

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
