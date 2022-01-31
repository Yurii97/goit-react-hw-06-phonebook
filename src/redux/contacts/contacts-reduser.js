import {createReducer, combineReducers } from "@reduxjs/toolkit";
import {addContact, removeContact, filterAct} from './contacts-actions'

const localContacts=localStorage.getItem('contacts');
const parseContacts = JSON.parse(localContacts)

const contacts = createReducer(parseContacts?? [],{
    [addContact]:(state, {payload})=>[payload, ...state],         
    [removeContact]:(state, {payload})=>state.filter(({id})=>id!==payload)
});

const filter = createReducer('',{
    [filterAct]:(_, {payload})=>payload
});

export default combineReducers({
    contacts,
    filter
});