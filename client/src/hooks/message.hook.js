import {useCallback} from 'react'

export const useMessage = () => {
    return useCallback( text => {
        const authErrorMessage = document.getElementById("authErrorMessage");
        if (text) {
            authErrorMessage.style.visibility   = "visible";
            authErrorMessage.innerHTML          = text;
        } else {
            authErrorMessage.style.visibility   = "hiden";
        }
    }, [ ])
}