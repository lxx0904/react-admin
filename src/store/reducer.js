import { MENU_TOGGLE } from './actionType'

const defaultStore = {
    menuToggle: false
}

export default function (state = defaultStore, actions) {
    switch (actions.type) {
        case MENU_TOGGLE:
            return { ...state, menuToggle: !state.menuToggle }
        default:
            return state;
    }
}