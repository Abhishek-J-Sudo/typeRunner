// TypeChallenge.jsx (updated version with character-level feedback for all stages)
import React from 'react';
import { getStageInstructions } from '../utils/gameUtils';

const TypeChallenge = ({ 
  challenge, 
  playerInput, 
  inputCorrect, 
  finishTime, 
  onInputChange, 
  onSubmit,
  currentStage 
}) => {
  // Handle the enter key to submit
  const handleKeyDown = (e) => {
    // Submit on Enter key
    if (e.key === 'Enter') {
      onSubmit();
    }
    
    // Block keyboard shortcuts for copy/paste
    if ((e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')) {
      e.preventDefault();
      return false;
    }
  };
  
  // Prevent paste operations
  const handlePaste = (e) => {
    e.preventDefault();
    return false;
  };
  
  // Prevent right-click context menu
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  // Render challenge based on stage type
  const renderChallenge = () => {
    switch (currentStage) {
      case 1:
        // Basic typing - just display the text
        return <p>{challenge}</p>;
      
      case 2:
        // Missing vowels - display text with underscores
        return <p>{challenge}</p>;
      
      case 3:
        // Emoji challenge - display emojis with bigger font
        return <p className="emoji-challenge">{challenge}</p>;
      
      case 4:
        // Reverse typing - display normal text
        return <p>{challenge}</p>;
      
      default:
        return <p>{challenge}</p>;
    }
  };

  // Render progress helper
  const renderProgressHelper = () => {
    if (!playerInput.trim()) return null;

    switch (currentStage) {
      case 1:
        // For basic typing, show character-by-character feedback
        return renderBasicTypingHelper();
      
      case 2:
        // For vowels challenge, show character-by-character feedback with vowels highlighted
        return renderVowelsHelper();
      
      case 3:
        // For emoji challenge, show word-by-word feedback
        return renderEmojiHelper();
      
      case 4:
        // For reverse typing, show character-by-character feedback with reversed input
        return renderReverseTypingHelper();
      
      default:
        return null;
    }
  };

  // Helper for basic typing progress - character-by-character feedback
  const renderBasicTypingHelper = () => {
    const inputChars = playerInput.split('');
    const challengeChars = challenge.split('');

    return (
      <div className="word-progress-helper">
        <p>Your progress:</p>
        <div className="typed-words">
          {inputChars.map((char, index) => {
            const isCorrect = index < challengeChars.length && char === challengeChars[index];
            return (
              <span 
                key={index} 
                className={isCorrect ? 'char-correct' : 'char-incorrect'}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  // Helper for vowels challenge progress - character-by-character with vowel highlighting
  const renderVowelsHelper = () => {
    const inputChars = playerInput.split('');
    const challengeChars = challenge.split('');
    
    // Find positions of missing vowels (underscores) in the challenge
    const vowelPositions = [];
    challengeChars.forEach((char, index) => {
      if (char === '_') {
        vowelPositions.push(index);
      }
    });

    return (
      <div className="word-progress-helper">
        <p>Your progress:</p>
        <div className="typed-words">
          {inputChars.map((char, index) => {
            const challengeChar = index < challengeChars.length ? challengeChars[index] : '';
            
            // If this is a vowel position (underscore in challenge), any vowel is potentially correct
            // The actual correctness is determined by the backend validation
            const isVowelPosition = challengeChar === '_';
            const isVowel = /[aeiou]/i.test(char);
            
            // For non-vowel positions, the character should match the challenge
            const isCorrectNonVowel = !isVowelPosition && challengeChar === char;
            
            // Visual feedback classes
            let className = '';
            if (isVowelPosition) {
              // For vowel positions, highlight vowels as potentially correct
              className = isVowel ? 'char-correct' : 'char-incorrect';
            } else {
              // For non-vowel positions, mark as incorrect if they don't match
              className = isCorrectNonVowel ? '' : 'char-incorrect';
            }
            
            return (
              <span key={index} className={className}>
                {char}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  // Helper for emoji challenge progress - word-by-word feedback
  const renderEmojiHelper = () => {
    // Split the input into words
    const inputWords = playerInput.trim().split(' ');
    // Split the challenge into emojis
    const emojis = challenge.split(' ');

    return (
      <div className="word-progress-helper">
        <p>Your translation:</p>
        <div className="typed-words">
          {inputWords.map((word, index) => {
              // Determine if we should apply visual classes based on word content
              // This is just visual feedback - actual validation happens in GamePlay.jsx
              const hasContent = word.trim().length > 0;
              const wordClass = hasContent ? 'word-correct' : '';
              
              return (
                <span key={index} className={`emoji-word ${wordClass}`}>
                  {index < emojis.length ? `${emojis[index]} = ` : ''}{word}{' '}
                </span>
              );
            })}
        </div>
        <p className="help-text">Type the word each emoji represents, separated by spaces</p>
      </div>
    );
  };

  // Helper for reverse typing progress - character-by-character with reversed comparison
  const renderReverseTypingHelper = () => {
    // Create reversed version of input for display 
    const reversedInput = playerInput.split('').reverse().join('');
    
    // For character feedback, we'll show what they've typed so far
    const inputChars = playerInput.split('');
    const challengeChars = challenge.split('');

    return (
      <div className="word-progress-helper">
        <p>Reversed Preview:</p>
        <div className="reverse-helper">{reversedInput}</div>
        
        <p>Your Answer:</p>
        <div className="typed-words">
          {inputChars.map((char, index) => {
            // For reverse typing, we check if the reversed position would be correct
            const reversedIndex = challengeChars.length - 1 - index;
            const challengeChar = reversedIndex >= 0 ? challengeChars[reversedIndex] : '';
            const isCorrect = reversedIndex >= 0 && char === challengeChar;
            
            return (
              <span 
                key={index} 
                className={isCorrect ? 'char-correct' : 'char-incorrect'}
              >
                {char}
              </span>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="type-challenge">
      <div className="challenge-instructions">
        <p>{getStageInstructions(currentStage)}</p>
      </div>
      
      <div className="challenge-text">
        {renderChallenge()}
      </div>
      
      {renderProgressHelper()}
      
      <div className="player-input-area">
        {!finishTime ? (
          <>
            <input
              type="text"
              value={playerInput}
              onChange={onInputChange}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
              onContextMenu={handleContextMenu}
              className={inputCorrect === true ? 'correct' : inputCorrect === false ? 'incorrect' : ''}
              placeholder="Type your answer here..."
              autoFocus
              disabled={finishTime !== null}
            />
            <button onClick={onSubmit}>Submit</button>
            {inputCorrect === false && (
              <p className="error-message">Incorrect! Try again.</p>
            )}
          </>
        ) : (
          <div className="completion-info">
            <p>Challenge completed in {(finishTime / 1000).toFixed(2)} seconds!</p>
            <p>Waiting for other players...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TypeChallenge;