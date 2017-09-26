export const SET_POST_INFO = 'SET_POST_INFO';

export function setPostInfo(postInfo){
    return {
        type: SET_POST_INFO,
        ...postInfo,
    };
}