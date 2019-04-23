import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Blah' }, { name: 'Glah' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});
it('can get a list of comments and display them', (done) => {
  // Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // Find the 'getComment' button and click it
  wrapped.find('.get-comment').simulate('click');

   // Introduce a PAUSE
   moxios.wait(() => {
     wrapped.update();
    // Expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);
    done();
    wrapped.unmount();
   });

});
