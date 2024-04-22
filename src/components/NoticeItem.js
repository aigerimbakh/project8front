import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNotice } from '../redux/actions/noticeActions';
import EditNoticeForm from './EditNoticeForm';
import '../App.css';

const NoticeItem = React.memo(({ index, notice, handleDelete, handleEdit, editIndex }) => {
  const dispatch = useDispatch();

  return (
    <li className="notice-item">
      {index === editIndex ? (
        <EditNoticeForm notice={notice} index={index} setEditIndex={handleEdit} />
      ) : (
        <>
          <p>{notice}</p>
          <div className="notice-item-buttons">
            <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
            <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
          </div>
        </>
      )}
    </li>
  );
}, (prevProps, nextProps) => {
 
  return prevProps.notice === nextProps.notice && prevProps.editIndex === nextProps.editIndex;
});

export default NoticeItem;
