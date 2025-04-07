// utils/sentences.js
const fallbackSentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "All that glitters is not gold.",
    "Early to bed and early to rise makes a man healthy wealthy and wise.",
    "Life is what happens when you are busy making other plans.",
    "The only thing we have to fear is fear itself.",
    "In the end we only regret the chances we didn't take.",
    "Be yourself everyone else is already taken.",
    "You miss one hundred percent of the shots you don't take.",
    "The best way to predict the future is to create it.",
    "If you want something you never had you must do something you never did.",
    "Believe you can and you are halfway there.",
    "Change your thoughts and you change your world.",
    "Every accomplishment starts with the decision to try.",
    "The secret of getting ahead is getting started.",
    "Success is not final failure is not fatal it is the courage to continue that counts.",
    "It always seems impossible until it is done.",
    "Keep your face to the sunshine and you cannot see a shadow.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop."
  ];
  
  // Helper function to clean sentences from API responses
  const cleanSentence = (sentence) => {
    // Remove any quotes at beginning or end
    sentence = sentence.replace(/^["']|["']$/g, '');
    
    // Make sure sentence ends with a period if it doesn't have ending punctuation
    if (!sentence.match(/[.!?]$/)) {
      sentence += '.';
    }
    
    return sentence;
  };
  
  // Function to get random sentences from API
  const getRandomSentencesFromAPI = async (count = 4) => {
    try {
      const sentences = [];
      
      // Make API calls to get random sentences
      for (let i = 0; i < count; i++) {
        const response = await fetch('https://api.quotable.io/random?maxLength=100');
        const data = await response.json();
        sentences.push(cleanSentence(data.content));
      }
      
      return sentences;
    } catch (error) {
      console.error("Error fetching random sentences:", error);
      // Fall back to predefined sentences if API fails
      return getRandomFallbackSentences(count);
    }
  };
  
  // Fallback function if API fails
  const getRandomFallbackSentences = (count) => {
    const sentences = [];
    const indices = new Set();
    
    while (sentences.length < count && sentences.length < fallbackSentences.length) {
      const randomIndex = Math.floor(Math.random() * fallbackSentences.length);
      
      if (!indices.has(randomIndex)) {
        indices.add(randomIndex);
        sentences.push(fallbackSentences[randomIndex]);
      }
    }
    
    return sentences;
  };
  
  // Function to create a sentence with missing vowels
  const createMissingVowelsSentence = (sentence) => {
    return {
      display: sentence.replace(/[aeiou]/gi, '_'),
      answer: sentence
    };
  };
  
  // Function to prepare sentences for all game stages
  const prepareSentencesForGame = async () => {
    try {
      // Get 3 unique sentences (Stage 1, 2, and 4)
      const sentences = await getRandomSentencesFromAPI(3);
      
      return {
        stage1: { display: sentences[0], answer: sentences[0] },
        stage2: createMissingVowelsSentence(sentences[1]),
        stage4: { display: sentences[2], answer: sentences[2] }
        // Stage 3 will be handled by the emoji module
      };
    } catch (error) {
      console.error("Error preparing sentences:", error);
      const fallbackSentences = getRandomFallbackSentences(3);
      
      return {
        stage1: { display: fallbackSentences[0], answer: fallbackSentences[0] },
        stage2: createMissingVowelsSentence(fallbackSentences[1]),
        stage4: { display: fallbackSentences[2], answer: fallbackSentences[2] }
      };
    }
  };
  
  export { prepareSentencesForGame, getRandomSentencesFromAPI, getRandomFallbackSentences };