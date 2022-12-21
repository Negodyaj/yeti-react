import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { IResponse } from '../models/IResponse';
import { baseUrl } from '../constants';
import { getItemFromStorage } from './localStorage.service';

export const sendHttpRequest = <T extends IResponse>(
  path: string,
  dispatch: Dispatch,
  callback: (data: T) => AnyAction,
  body?: unknown,
  method: string = 'GET',
) => {
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  const token = getItemFromStorage('access_token');
  if (token) {
    requestHeaders.set('Authorization', `Bearer ${token}`);
  }

  const options: RequestInit = {
    method: method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined,
  };

  fetch(`${baseUrl}${path}`, options)
    .then((response) => response.json())
    .then((data) => dispatch(callback(data)));
};
