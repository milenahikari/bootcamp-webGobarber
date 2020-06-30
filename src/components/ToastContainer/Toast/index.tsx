import React, { useEffect } from 'react';

import {
  FiAlertCircle,
  FiXCircle,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';
import { Container } from './styles';
import { ToastMessage, useToast } from '../../../hooks/toast';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasdescription={Number(!!message.description)}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
        <button onClick={() => removeToast(message.id)} type="button">
          <FiXCircle size={18} />
        </button>
      </div>
    </Container>
  );
};

export default Toast;
