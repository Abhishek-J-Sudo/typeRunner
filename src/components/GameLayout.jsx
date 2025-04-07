import React from 'react';

/**
 * A consistent three-column layout for the TypeRunner game
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.leftSection - Content for the left section (lobby/players)
 * @param {React.ReactNode} props.middleSection - Content for the middle section (gameplay)
 * @param {React.ReactNode} props.rightSection - Content for the right section (results/timing)
 */
const GameLayout = ({ leftSection, middleSection, rightSection }) => {
  return (
    <div className="type-runner-layout">
      <div className="left-section">
        {leftSection}
      </div>
      <div className="middle-section">
        {middleSection}
      </div>
      <div className="right-section">
        {rightSection}
      </div>
    </div>
  );
};

export default GameLayout;