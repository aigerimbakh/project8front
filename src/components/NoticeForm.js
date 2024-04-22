import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNotice } from '../redux/actions/noticeActions';
import '../App.css';

const NoticeForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addNotice(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter notice..." className="input" />
      <button type="submit" className="button">Add Notice</button>
    </form>
  );
};

export default NoticeForm;
