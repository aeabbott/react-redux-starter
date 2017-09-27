export const SET_NAME_INFO = 'SET_NAME_INFO';


export default function setNameInfo(name) {
    return{
        type: SET_NAME_INFO,
        name,
    }
}
