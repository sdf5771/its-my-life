import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Route, Routes} from 'react-router-dom';
import HomeContainer from './routes/home/HomeContainer';
import AuthContainer from "./routes/auth/AuthContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/auth' element={<AuthContainer />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
