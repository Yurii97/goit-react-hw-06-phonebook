import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import actions from './contacts-actions'

const contacts = createReducer([],{
    [actions.addContact]:(state, {payload})=>[payload, ...state],
    [actions.removeContact]:(state, {payload})=>state.filter(({id})=>id!==payload)
})

const filter = createReducer('',{
    [actions.filter]:(_, {payload})=>payload
})



export default combineReducers({
    contacts,
    filter
});