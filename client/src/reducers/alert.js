import {SET_ALERT, REMOVE_ALERT} from '../actions/types';

const initialState = [
    {
        id: 1,
        msg: 'Please log in',
        alertType: 'success'
    }
];

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_ALERT'
    }
}