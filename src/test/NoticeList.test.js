import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import NoticeList from '../components/NoticeList';
import '@testing-library/jest-dom/extend-expect';

test('renders NoticeList component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <NoticeList />
    </Provider>
  );

  const headingElement = getByText('Notice List');
  expect(headingElement).toBeInTheDocument();
});

test('renders NoticeItem for each notice', () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <NoticeList />
    </Provider>
  );

  const noticeItems = getAllByTestId('notice-item');
  expect(noticeItems.length).toBe(store.getState().notices.length);
});

test('allows user to delete notice', () => {
  const { getByText, getAllByTestId } = render(
    <Provider store={store}>
      <NoticeList />
    </Provider>
  );

  const deleteButtons = getAllByTestId('delete-button');
  fireEvent.click(deleteButtons[0]);

  const noticeItems = getAllByTestId('notice-item');
  expect(noticeItems.length).toBe(store.getState().notices.length);
});
