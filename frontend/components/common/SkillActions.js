import React, { PropTypes } from 'react';
import { ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

import { SKILL_STATUS } from '../../modules/user/evaluation';

const statusIcon = (currentStatus, previousStatus) => {
  if (currentStatus === SKILL_STATUS.ATTAINED) {
    return <Glyphicon className='pull-right skill-status-icon skill-status-icon--attained' glyph='ok-sign'/>;
  } else if (currentStatus === SKILL_STATUS.FEEDBACK) {
    return <Glyphicon className='pull-right skill-status-icon skill-status-icon--feedback' glyph='question-sign'/>;
  } else if (currentStatus === SKILL_STATUS.OBJECTIVE) {
    return <Glyphicon className='pull-right skill-status-icon skill-status-icon--objective' glyph='exclamation-sign'/>;
  }

  return <Glyphicon className='pull-right skill-status-icon skill-status-icon--not-attained' glyph='remove-sign'/>;
};

const SkillActions = ({ skillStatus, onAttained, onNotAttained, onFeedbackRequest, onSetObjective }) => (
  <div>
    <ButtonGroup>
      <Button
        bsStyle='default'
        bsSize='large'
        onClick={onAttained}>
        {'Attained'}
      </Button>
      <Button
        bsStyle='default'
        bsSize='large'
        onClick={onNotAttained}>
        {'Not attained'}
      </Button>
      <Button
        bsStyle='default'
        bsSize='large'
        onClick={onFeedbackRequest}>
        {'Feedback'}
      </Button>
      <Button
        bsStyle='default'
        bsSize='large'
        onClick={onSetObjective}>
        {'Objective'}
      </Button>
    </ButtonGroup>
    { statusIcon(skillStatus.current, skillStatus.previous) }
  </div>
);

SkillActions.propTypes = {
  skillStatus: PropTypes.shape({
    current: PropTypes.string,
    previous: PropTypes.string
  }).isRequired,
  onAttained: PropTypes.func.isRequired,
  onNotAttained: PropTypes.func.isRequired,
  onFeedbackRequest: PropTypes.func.isRequired,
  onSetObjective: PropTypes.func.isRequired,
};

export default SkillActions;