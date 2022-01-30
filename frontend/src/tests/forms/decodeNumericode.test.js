import MessageProvider from 'context/message';
import { DecodeNumericode } from 'forms';
import { shallow, mount } from 'enzyme';

describe('<DecodeNumericode />', () => {
  let component;

  describe('numericode input', () => {
    describe('onChange()', () => {
      beforeEach(() => {
        component = mount(
          <MessageProvider>
            <DecodeNumericode />
          </MessageProvider>,
        );
      })

      it('calls useLocalStorage().set()', () => {
        console.log(component.find('Formik').props().children());
        // console.log(component.props());
      });
    });
  });
});