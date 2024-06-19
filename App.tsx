import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Container} from './src/Container';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container />
    </QueryClientProvider>
  );
}

export default App;
