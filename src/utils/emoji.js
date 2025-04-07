// utils/emoji.js

// Array of emoji-to-word mappings
const emojiMappings = [
    { emoji: "🍕", word: "pizza" },
    { emoji: "🏠", word: "house" },
    { emoji: "🐶", word: "dog" },
    { emoji: "😂", word: "laugh" },
    { emoji: "🌮", word: "taco" },
    { emoji: "🌎", word: "earth" },
    { emoji: "📱", word: "phone" },
    { emoji: "🚗", word: "car" },
    { emoji: "🎉", word: "party" },
    { emoji: "👋", word: "wave" },
    { emoji: "❤️", word: "heart" },
    { emoji: "🔥", word: "fire" },
    { emoji: "🌧️", word: "rain" },
    { emoji: "🎵", word: "music" },
    { emoji: "🎮", word: "game" },
    { emoji: "📚", word: "books" },
    { emoji: "🏀", word: "basketball" },
    { emoji: "🍔", word: "burger" },
    { emoji: "🍦", word: "icecream" },
    { emoji: "🚀", word: "rocket" },
    { emoji: "🌈", word: "rainbow" },
    { emoji: "🎸", word: "guitar" },
    { emoji: "🏆", word: "trophy" },
    { emoji: "🧠", word: "brain" },
    { emoji: "⚽", word: "football" },
    { emoji: "💻", word: "computer" },
    { emoji: "🎂", word: "cake" },
    { emoji: "🚲", word: "bicycle" },
    { emoji: "🌻", word: "sunflower" }
  ];
  
  /**
   * Generate a random emoji challenge
   * @param {number} count - Number of emojis to include in the challenge
   * @returns {Object} Object containing the display string and answer string
   */
  const getRandomEmojiChallenge = (count = 5) => {
    // Ensure we don't ask for more emojis than we have
    const emojiCount = Math.min(count, emojiMappings.length);
    
    // Shuffle the array and take the first 'count' elements
    const shuffled = [...emojiMappings].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, emojiCount);
    
    // Create the challenge object
    const challenge = {
      display: selected.map(item => item.emoji).join(" "),
      answer: selected.map(item => item.word).join(" ")
    };
    
    return challenge;
  };
  
  /**
   * Prepare the emoji stage for a game
   */
  const prepareEmojiStage = () => {
    return getRandomEmojiChallenge(5);
  };
  
  export { prepareEmojiStage, getRandomEmojiChallenge, emojiMappings };