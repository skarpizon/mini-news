const updateItemList = (state, action) => {

    const defaultILState = {
        items: [],
        loading: false,
        error: false
    };

    if (state === undefined) {
        return defaultILState;
    }

    switch (action.type) {
        case 'ITEMLIST_REQUEST':
            return {
                ...state.itemList,
                loading: true,
                error: false
            };

        case 'ITEMLIST_SUCCESS':
            return {
                ...state.itemList,
                items: action.payload,
                loading: false
            };
            
        case 'ITEMLIST_FAILURE':
            return {
                ...state.itemList,
                error: true
            };
            
        default:
            return state.itemList;
    }
};

export default updateItemList;