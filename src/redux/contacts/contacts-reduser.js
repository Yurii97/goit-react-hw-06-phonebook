import {createReducer, combineReducers } from "@reduxjs/toolkit";
import {addContact, removeContact, filterAct} from './contacts-actions'

const localContacts=localStorage.getItem('contacts');
const parseContacts = JSON.parse(localContacts)
const refLocalStorage=(arr)=>localStorage.setItem('contacts', JSON.stringify(arr))

const contacts = createReducer(parseContacts?? [],{
    [addContact]:(state, {payload})=>{
        const refContacts = [payload, ...state];
        refLocalStorage(refContacts);
        return refContacts
    },         
    [removeContact]:(state, {payload})=>{
        const refContacts = state.filter(({id})=>id!==payload);
        refLocalStorage(refContacts);
        return refContacts;
    }
});

const filter = createReducer('',{
    [filterAct]:(_, {payload})=>payload
});

export default combineReducers({
    contacts,
    filter
});