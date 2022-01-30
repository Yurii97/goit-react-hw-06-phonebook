import { createAction } from "@reduxjs/toolkit"

const addContact = createAction('contacts/add');
const removeContact = createAction('contacts/delete');
const filter = createAction('contacts/filter')

export default {addContact, removeContact, filter}