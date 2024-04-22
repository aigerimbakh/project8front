import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { Provider } from 'react-redux';
import store from '../redux/store';
import NoticeForm from '../components/NoticeForm';

test('renders NoticeForm component', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <NoticeForm />
    </Provider>
  );

  const inputElement = getByPlaceholderText('Enter notice...');
  const buttonElement = getByText('Add Notice');

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('allows user to add notice', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <NoticeForm />
    </Provider>
  );

  const inputElement = getByPlaceholderText('Enter notice...');
  const buttonElement = getByText('Add Notice');

  fireEvent.change(inputElement, { target: { value: 'Test notice' } });
  fireEvent.click(buttonElement);

  expect(inputElement.value).toBe('');
});
