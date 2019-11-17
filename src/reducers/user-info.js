const updateUserInfo = (state, action) => {

    const defaultUIState = {
        isLoggedIn: false,
        authLoading: false,
        error: false,
        user: undefined
    };

    if (state === undefined) {
        return defaultUIState;
    }

    switch (action.type) {
        case 'LOGOUT':
            return {
                ...defaultUIState
            };

        case 'AUTH_REQUEST':
            return {
                ...state.userInfo,
                authLoading: true
            };

        case 'AUTH_SUCCESS':
            return {
                ...state.userInfo,
                isLoggedIn: true,
                authLoading: false,
                user: action.payload
            };
            
        case 'AUTH_FAILURE':
            return {
                ...state.userInfo,
                authLoading: false,
                error: true
            };
            
        default:
            return state.userInfo;
    }
};

export default updateUserInfo;