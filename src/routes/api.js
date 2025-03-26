/**
 * API Routes
 * 
 * Defines the RESTful API endpoints for the application.
 */

const express = require('express');
const router = express.Router();
const { analyzeMessage } = require('../services/protection');
const { analyzeRelationship, findConnectionOpportunities, generateConversationSuggestions } = require('../services/socialMaximizer');

// Protection routes
router.post('/analyze-message', async (req, res) => {
  const { message, context } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  
  try {
    const analysis = await analyzeMessage(message, context);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze message' });
  }
});

// Social maximizer routes
router.get('/relationships/:contactId', (req, res) => {
  const { contactId } = req.params;
  const { interactions } = req.query;
  
  // In a real implementation, interactions would be fetched from a database
  // based on the user's history with the contact
  const mockInteractions = [];
  
  try {
    const analysis = analyzeRelationship(contactId, mockInteractions);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: 'Failed to analyze relationship' });
  }
});

router.get('/opportunities', (req, res) => {
  const { userId, context } = req.query;
  
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  
  try {
    const opportunities = findConnectionOpportunities(userId, context);
    res.json(opportunities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to find connection opportunities' });
  }
});

router.get('/suggest-conversation/:contactId', (req, res) => {
  const { contactId } = req.params;
  const context = req.query;
  
  try {
    const suggestions = generateConversationSuggestions(contactId, context);
    res.json(suggestions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate conversation suggestions' });
  }
});

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

module.exports = router; 