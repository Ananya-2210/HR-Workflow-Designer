import { setupWorker } from 'msw/browser';
import { handlers } from '../api/mockApi';

export const worker = setupWorker(...handlers);
