import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
  <Container>
    <Toast hasDescription type="info">
      <FiAlertCircle />

      <div>
        <strong>Error</strong>
        <p>Descricao</p>
      </div>

      <button type="button" >
        <FiXCircle size={16} />
      </button>
    </Toast>

    <Toast hasDescription type="sucess">
      <FiAlertCircle />

      <div>
        <strong>Error</strong>
        <p>Descricao</p>
      </div>

      <button type="button" >
        <FiXCircle size={16} />
      </button>
    </Toast>

    <Toast hasDescription type="error">
      <FiAlertCircle />

      <div>
        <strong>Error</strong>
        <p>Descricao</p>
      </div>

      <button type="button" >
        <FiXCircle size={16} />
      </button>
    </Toast>
  </Container>

  );
};

export default ToastContainer;
