import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const MessageContext = createContext();

export default function MessageProvider({ children }) {
  const [message, setMessage] = useState();
  const settings = useMemo(() => ({ message, setMessage }), [message]);

  return (
    <MessageContext.Provider
      value={settings}
    >
      {children}
    </MessageContext.Provider>
  );
}

MessageProvider.propTypes = {
  children: PropTypes.node,
};

MessageProvider.defaultProps = {
  children: null,
};
