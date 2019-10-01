import React from 'react';
import { shallow } from 'enzyme';
import '../../../../../../../../../testHelper';

import PeerReviewLink from '../../../../../../../../../../app/assets/javascripts/components/overview/my_articles/components/Categories/List/Assignment/Header/Links/PeerReviewLink';

describe('PeerReviewLink', () => {
  it('should display the link', () => {
    const component = shallow(
      <PeerReviewLink
        assignment={{ sandboxUrl: 'url' }}
        current_user={{ username: 'username' }}
      />
    );

    const link = component.find('a');
    expect(link.length).toEqual(1);
    expect(link.props().href).toContain('url/username');
  });
});
