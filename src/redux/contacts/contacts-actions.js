import { createAction } from "@reduxjs/toolkit"

export const addContact = createAction('contacts/add');
export const removeContact = createAction('contacts/delete');
export const filterAct = createAction('contacts/filter');