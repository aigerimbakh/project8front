import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { Provider } from 'react-redux';
import store from '../redux/store';
import EditNoticeForm from '../components/EditNoticeForm';

test('renders EditNoticeForm component', () => {
  const setEditIndex = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <EditNoticeForm notice="Test notice" index={0} setEditIndex={setEditIndex} />
    </Provider>
  );

  const headingElement = getByText('Edit Notice');
  const inputElement = getByPlaceholderText('Enter your notice');
  const saveButton = getByText('Save');
  const cancelButton = getByText('Cancel');

  expect(headingElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(saveButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
});

test('allows user to edit notice', () => {
  const setEditIndex = jest.fn();
  const mockDispatch = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <EditNoticeForm notice="Test notice" index={0} setEditIndex={setEditIndex} />
    </Provider>
  );

  const inputElement = getByPlaceholderText('Enter your notice');
  const saveButton = getByText('Save');

  fireEvent.change(inputElement, { target: { value: 'Updated notice' } });
  fireEvent.submit(saveButton);

  expect(mockDispatch).toHaveBeenCalledWith(editNotice(0, 'Updated notice'));
  expect(setEditIndex).toHaveBeenCalledWith(null);
});
