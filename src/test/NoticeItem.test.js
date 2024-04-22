import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'; 
import store from '../redux/store';
import NoticeItem from '../components/NoticeItem';

test('renders NoticeItem component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <NoticeItem index={0} notice="Test notice" handleDelete={() => {}} handleEdit={() => {}} editIndex={null} />
    </Provider>
  );

  const noticeElement = getByText('Test notice');
  expect(noticeElement).toBeInTheDocument();
});

test('renders EditNoticeForm when editIndex matches index', () => {
  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <NoticeItem index={0} notice="Test notice" handleDelete={() => {}} handleEdit={() => {}} editIndex={0} />
    </Provider>
  );

  const inputElement = getByPlaceholderText('Enter your notice');
  expect(inputElement).toBeInTheDocument();
});

test('does not render EditNoticeForm when editIndex does not match index', () => {
  const { queryByPlaceholderText } = render(
    <Provider store={store}>
      <NoticeItem index={0} notice="Test notice" handleDelete={() => {}} handleEdit={() => {}} editIndex={1} />
    </Provider>
  );

  const inputElement = queryByPlaceholderText('Enter your notice');
  expect(inputElement).not.toBeInTheDocument();
});
