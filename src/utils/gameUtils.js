// utils/gameUtils.js

import { prepareSentencesForGame } from './sentences';
import { prepareEmojiStage } from './emoji';

/**
 * Prepares all challenges for a game
 * @returns {Promise<Object>} Object containing challenges for all 4 stages
 */
const prepareGameChallenges = async () => {
  try {
    // Get sentences for stages 1, 2, and 4
    const sentences = await prepareSentencesForGame();
    
    // Get emoji challenge for stage 3
    const emojiChallenge = prepareEmojiStage();
    
    return {
      ...sentences,
      stage3: emojiChallenge
    };
  } catch (error) {
    console.error("Error preparing game challenges:", error);
    throw error;
  }
};

/**
 * Process input for a specific stage
 * @param {string} input - The user's input
 * @param {Object} challenge - The challenge object for the current stage
 * @param {number} stage - The current stage number
 * @returns {boolean} Whether the input is correct
 */
const validateInput = (input, challenge, stage) => {
  if (!challenge) return false;
  
  // For stage 4 (reverse typing), we need to reverse the input before comparing
  if (stage === 4) {
    // We reverse the entire sentence character by character
    const reversed = input.split('').reverse().join('');
    return reversed === challenge.answer;
  }
  
  // For all other stages, we simply compare with the answer
  return input.trim().toLowerCase() === challenge.answer.trim().toLowerCase();
};

/**
 * Get stage-specific instructions
 * @param {number} stage - The current stage number
 * @returns {string} Instructions for the current stage
 */
const getStageInstructions = (stage) => {
  switch (stage) {
    case 1:
      return "Type the sentence exactly as shown below:";
    case 2:
      return "Fill in the missing vowels to complete the sentence:";
    case 3:
      return "Type the words represented by these emojis (separated by spaces):";
    case 4:
      return "Type the sentence in reverse (right to left):";
    default:
      return "Type the challenge:";
  }
};

export { prepareGameChallenges, validateInput, getStageInstructions };