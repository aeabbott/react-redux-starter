import SET_POST_INFO from '../actions/postActions';

export default function postReducer(state = [], action) {
    switch(action.type) {
        case 'SET_POST_INFO':
            return [...state,
                Object.assign({}, action.postInfo)
            ];

        default:
            return state;
    }
}

