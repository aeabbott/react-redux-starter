import { push } from 'connected-react-router';

function appPush(location) {
    return push(location + window.location.search)
}

export function navigateForward() {
    return(dispatch, getState) => {
        let destinationScreen = '';
        const state = getState();

        switch (state.router.location.pathname) {
            case '/launch-page' :
                destinationScreen = '/page-two'
            break;


            case '/' :
                destinationScreen = '/page-three'
             break;


        default:
                destinationScreen = '';
            }

            dispatch(appPush(destinationScreen));
        };
    }

