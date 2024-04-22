import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNotice } from '../redux/actions/noticeActions';
import EditNoticeForm from './EditNoticeForm';
import NoticeItem from './NoticeItem'; 
import '../App.css';

const NoticeList = () => {
  const notices = useSelector(state => state.notices);
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);

  const handleDelete = (index) => {
    dispatch(deleteNotice(index));
    if (index === editIndex) {
      setEditIndex(null);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="notice-list-container">
      <h2>Новости</h2>
      <ul className="notice-list">
        {notices.map((notice, index) => (
          <NoticeItem
            key={index}
            index={index}
            notice={notice}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            editIndex={editIndex}
          />
        ))}
      </ul>
    </div>
  );
};

export default NoticeList;
