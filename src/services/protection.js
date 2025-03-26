/**
 * Protection Service
 * 
 * This service provides social engineering protection capabilities
 * by analyzing messages and interactions for potential threats.
 */

const logger = require('../utils/logger');
const { NlpManager } = require('node-nlp');

// Initialize NLP manager for pattern recognition
const manager = new NlpManager({ languages: ['en'] });

/**
 * Initialize the protection service
 */
const initializeProtection = async () => {
  logger.info('Initializing protection service');
  
  // Load pretrained models or train new ones
  try {
    // In a real implementation, we would load existing models
    // or train new ones based on known social engineering patterns
    await trainModels();
    logger.info('Protection models initialized successfully');
  } catch (error) {
    logger.error('Failed to initialize protection models', error);
  }
};

/**
 * Train the NLP models for detecting social engineering patterns
 */
const trainModels = async () => {
  // Add basic social engineering intents and entities
  // These would be much more comprehensive in a real implementation
  
  // Phishing detection
  manager.addDocument('en', 'verify your account', 'phishing.attempt');
  manager.addDocument('en', 'confirm your password', 'phishing.attempt');
  manager.addDocument('en', 'update your payment information', 'phishing.attempt');
  
  // Urgency tactics
  manager.addDocument('en', 'urgent action required', 'urgency.tactic');
  manager.addDocument('en', 'respond immediately', 'urgency.tactic');
  manager.addDocument('en', 'limited time offer', 'urgency.tactic');
  
  // Authority exploitation
  manager.addDocument('en', 'this is the IT department', 'authority.exploitation');
  manager.addDocument('en', 'message from your bank', 'authority.exploitation');
  manager.addDocument('en', 'your boss asked me to contact you', 'authority.exploitation');
  
  // Train the model
  await manager.train();
  
  logger.info('Protection models trained successfully');
};

/**
 * Analyze a message for social engineering attempts
 * 
 * @param {string} message - The message to analyze
 * @param {object} context - Additional context about the message and sender
 * @returns {object} Analysis results including threat assessment
 */
const analyzeMessage = async (message, context = {}) => {
  try {
    // Basic NLP analysis
    const result = await manager.process('en', message);
    
    // Historical pattern analysis would happen here
    // Context analysis would happen here
    // Behavioral deviation detection would happen here
    
    // Determine threat level based on combined factors
    const threatLevel = calculateThreatLevel(result, context);
    
    return {
      isThreateningSocial: threatLevel > 0.6,
      threatLevel,
      detectedPatterns: result.classifications,
      suggestedResponse: generateSuggestedResponse(threatLevel, result),
      explanation: generateExplanation(result)
    };
  } catch (error) {
    logger.error('Error analyzing message', error);
    return {
      error: 'Failed to analyze message',
      isThreateningSocial: false,
      threatLevel: 0
    };
  }
};

/**
 * Calculate a threat level score based on NLP results and context
 */
const calculateThreatLevel = (nlpResult, context) => {
  // This would be a much more sophisticated algorithm in a real implementation
  let score = 0;
  
  // Check if any high-risk intents were detected
  if (nlpResult.classifications && nlpResult.classifications.length > 0) {
    for (const classification of nlpResult.classifications) {
      if (classification.intent.includes('phishing') && classification.score > 0.7) {
        score += 0.5;
      }
      if (classification.intent.includes('urgency') && classification.score > 0.7) {
        score += 0.3;
      }
      if (classification.intent.includes('authority') && classification.score > 0.7) {
        score += 0.3;
      }
    }
  }
  
  // Consider contextual factors
  if (context.isNewContact) {
    score += 0.2;
  }
  if (context.containsLinks) {
    score += 0.2;
  }
  if (context.requestsPersonalInfo) {
    score += 0.4;
  }
  
  // Cap the score at 1.0
  return Math.min(score, 1.0);
};

/**
 * Generate a suggested response based on threat analysis
 */
const generateSuggestedResponse = (threatLevel, nlpResult) => {
  if (threatLevel > 0.8) {
    return "I need to verify this request through official channels before proceeding.";
  } else if (threatLevel > 0.5) {
    return "Could you provide more information about this request?";
  } else {
    return null; // No suggested response needed for low threat levels
  }
};

/**
 * Generate an explanation of the threat assessment
 */
const generateExplanation = (nlpResult) => {
  // This would provide a user-friendly explanation of why something was flagged
  let explanation = [];
  
  if (nlpResult.classifications && nlpResult.classifications.length > 0) {
    for (const classification of nlpResult.classifications) {
      if (classification.intent.includes('phishing') && classification.score > 0.7) {
        explanation.push("This message contains patterns common in phishing attempts.");
      }
      if (classification.intent.includes('urgency') && classification.score > 0.7) {
        explanation.push("This message uses urgency tactics that are common in scams.");
      }
      if (classification.intent.includes('authority') && classification.score > 0.7) {
        explanation.push("This message claims authority in a way that's common in social engineering.");
      }
    }
  }
  
  return explanation.join(' ');
};

module.exports = {
  initializeProtection,
  analyzeMessage
}; 