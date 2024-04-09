import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNotice } from '../redux/actions/noticeActions';
import '../App.css';

const EditNoticeForm = ({ notice, index, setEditIndex }) => {
  const [text, setText] = useState(notice);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(editNotice(index, text));
    setEditIndex(null);
  };

  return (
    <div className="edit-notice-form-container">
      <h2>Edit Notice</h2>
      <form onSubmit={handleSubmit} className="edit-notice-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="edit-notice-input"
        />
        <div className="edit-notice-buttons">
          <button type="submit" className="edit-notice-save-button">Save</button>
          <button
            type="button"
            onClick={() => setEditIndex(null)}
            className="edit-notice-cancel-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNoticeForm;
