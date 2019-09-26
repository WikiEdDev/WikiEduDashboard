import React from 'react';
import { shallow } from 'enzyme';
import '../../../../../../../../../testHelper';

import Actions from '../../../../../../../../../../app/assets/javascripts/components/overview/my_articles/components/Categories/List/Assignment/Header/Actions';

describe('Actions', () => {
  const props = {
    article: {},
    assignment: {},
    courseSlug: 'course/slug',
    current_user: {},
    isComplete: false,
    username: 'username',

    isEnglishWikipedia: jest.fn(),
    handleUpdateAssignment: jest.fn(),
    refreshAssignments: jest.fn(),
    unassign: jest.fn(),
  };

  it('shows the default buttons', () => {
    const component = shallow(<Actions {...props} />);
    expect(component.find('RemoveButton').length).to.equal(1);
    expect(component.find('PageViews').length).to.equal(0);
    expect(component.find('MarkAsIncompleteButton').length).to.equal(0);
    expect(component.find('OnClickOutside(PeerReviewChecklist)').length).to.equal(0);
    expect(component.find('Connect(OnClickOutside(Feedback))').length).to.equal(0);
    expect(component.find('OnClickOutside(MainspaceChecklist)').length).to.equal(0);
    expect(component.find('OnClickOutside(FinalArticleChecklist)').length).to.equal(0);
  });

  it('should show the PageViews component if there is an article_id', () => {
    const component = shallow(<Actions {...props} assignment={{ article_id: 1 }} />);
    expect(component.find('PageViews').length).to.equal(1);
  });

  it('should show the PageViews and MarkAsIncomplete button if the assignment is complete', () => {
    const component = shallow(<Actions {...props} isComplete={true} />);
    expect(component.find('PageViews').length).to.equal(1);
    expect(component.find('MarkAsIncompleteButton').length).to.equal(1);
  });

  describe('isEnglishWikipedia() returns true', () => {
    it('should show the PeerReviewChecklist', () => {
      const component = shallow(
        <Actions {...props} isEnglishWikipedia={jest.fn().mockReturnValue(true)} />
      );
      expect(component.find('OnClickOutside(PeerReviewChecklist)').length).to.equal(1);
    });

    it('should show the Feedback and MainspaceChecklist if the role is set to 0', () => {
      const component = shallow(
        <Actions
          {...props}
          assignment={{ role: 0 }}
          isEnglishWikipedia={jest.fn().mockReturnValue(true)}
        />
      );

      expect(component.find('Connect(OnClickOutside(Feedback))').length).to.equal(1);
      expect(component.find('OnClickOutside(MainspaceChecklist)').length).to.equal(1);
    });

    it('should show the Feedback and FinalArticleChecklist if the role is 0 and the article_id is set', () => {
      const component = shallow(
        <Actions
          {...props}
          assignment={{ role: 0, article_id: 99 }}
          isEnglishWikipedia={jest.fn().mockReturnValue(true)}
        />
      );

      expect(component.find('Connect(OnClickOutside(Feedback))').length).to.equal(1);
      expect(component.find('OnClickOutside(FinalArticleChecklist)').length).to.equal(1);
    });
  });
});
