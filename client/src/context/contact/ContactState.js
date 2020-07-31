import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "James Bond",
        email: "jb@bd.com",
        phone: "333-333-3333",
        type: "professional",
      },
      {
        id: 2,
        name: "Alicia Keys",
        email: "ak@sa.com",
        phone: "333-333-3333",
        type: "personal",
      },
      {
        id: 3,
        name: "James Bond",
        email: "jb@bd.com",
        phone: "333-333-3333",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete Contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
      }}>
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
