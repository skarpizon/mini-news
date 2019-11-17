const authRequested = () => {
    return {
        type: 'AUTH_REQUEST'
    };
};

const authSuccess = (user) => {
    return {
        type: 'AUTH_SUCCESS',
        payload: user
    };
};

const authError = () => {
    return {
        type: 'AUTH_FAILURE'
    };
};  

const logOut = () => {
    return {
        type: 'LOGOUT'
    };
};  

const itemsRequested = () => {
    return {
      type: 'ITEMLIST_REQUEST'
    };
};

  
const itemsLoaded = (newItems) => {
    return {
      type: 'ITEMLIST_SUCCESS',
      payload: newItems
    };
};
  
const itemsError = () => {
    return {
        type: 'ITEMLIST_FAILURE'
    };
};  

export {
    authRequested,
    authSuccess,
    authError,
    logOut,
    itemsRequested,
    itemsLoaded,
    itemsError
};    