import React from 'react';

import GlobalStyle from './styles/global';
import ToastContainer from './components/ToastContainer';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);


export default App;
