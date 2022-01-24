import { combineReducers } from "redux";

const ADD_ITEM = 'ADD_ITEM';
const INCREMENT_ITEM = 'INCREMENT_ITEM';

export function addItem(item){
    return{
        type: ADD_ITEM,
        item,
    }
}

export function incrementItem(item) {
    return {
      type: INCREMENT_ITEM,
      item
    }
  }

const defaultItems = [
    {
        name: 'Trotineta Xiaomi Mi365',
        count: 1,
    }
];

function items(state=defaultItems, action) {
    switch (action.type) {
        case ADD_ITEM:
          return [
            ...state,
            {
              name: action.item,
              count: 1
            }
          ];
        case INCREMENT_ITEM:
            const item = state.find(itm => action.item === itm.name);
            const other_items = state.filter(itm => action.item !== itm.name);
            return [
                ...other_items,
                {
                    ...item,
                    count: item.count + 1
                }
            ];
        default:
            return state;
    }
  }

const wishlist = combineReducers({
    items
});

export default wishlist;

