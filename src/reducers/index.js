import updateUserInfo from './user-info';
import updateItemList from './item-list';

const reducer = (state, action) => {
    return {
        userInfo: updateUserInfo(state, action),
        itemList: updateItemList(state, action)
    };
};

export default reducer;
