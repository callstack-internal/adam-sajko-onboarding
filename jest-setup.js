import '@testing-library/react-native/extend-expect';
import {setupServer} from 'msw/node';
import {handlers} from './src/mocks/handlers';

jest.useFakeTimers();

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
