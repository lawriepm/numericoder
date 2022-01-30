import { useContext } from 'react';
import { MessageContext } from 'context/message';

export default function useMessageContext() {
  return useContext(MessageContext);
}
