import { push } from 'connected-react-router';

function appPush(location) {
    return push(location + window.location.search)
}

export function navigateForward() {
    return(dispatch, getState) => {
        let nextScreen = '';
        const state = getState();

        switch (state.router.location.pathname) {
            case '/' :
                nextScreen = '/page-two'
            break;


            case '/page-two' :
                nextScreen = '/page-three'
             break;


        default:
              nextScreen = '';
            }

            dispatch(appPush(nextScreen));
        };
    }

