import React from "react";
import "../App.css";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          className='button'
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}  className='button'>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
