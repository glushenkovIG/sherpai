/**
 * Telegram Bot Handlers
 * 
 * Defines the handlers for various bot commands and interactions.
 */

const { analyzeMessage } = require('../services/protection');
const { generateConversationSuggestions } = require('../services/socialMaximizer');
const logger = require('../utils/logger');

module.exports = (bot) => {
  // Start command
  bot.start((ctx) => {
    logger.info(`New user started bot: ${ctx.from.id}`);
    ctx.reply(
      'Welcome to SherpaAI! 🚀\n\n' +
      'I\'m your personal social sovereignty agent, designed to:\n' +
      '- Protect you from social engineering\n' +
      '- Maximize your social capabilities\n' +
      '- Help you maintain meaningful relationships\n\n' +
      'Use /help to see available commands.'
    );
  });

  // Help command
  bot.help((ctx) => {
    ctx.reply(
      'SherpaAI Bot Commands:\n\n' +
      '/start - Start the bot\n' +
      '/help - Show this help message\n' +
      '/analyze - Analyze a message for social engineering\n' +
      '/suggest - Get conversation suggestions for a contact\n' +
      '/status - Check your social network status\n' +
      '/protect - Toggle protection mode'
    );
  });

  // Analyze command
  bot.command('analyze', (ctx) => {
    const message = ctx.message.text.split('/analyze ')[1];
    
    if (!message) {
      return ctx.reply('Please provide a message to analyze.\nExample: /analyze Please verify your account by clicking this link');
    }
    
    analyzeMessage(message)
      .then(analysis => {
        let responseText = '';
        
        if (analysis.isThreateningSocial) {
          responseText = '⚠️ CAUTION: This message contains social engineering patterns!\n\n';
          responseText += `Threat level: ${Math.round(analysis.threatLevel * 100)}%\n\n`;
          
          if (analysis.explanation) {
            responseText += `Why: ${analysis.explanation}\n\n`;
          }
          
          if (analysis.suggestedResponse) {
            responseText += `Suggested response: "${analysis.suggestedResponse}"\n\n`;
          }
          
          responseText += 'Remember to verify requests through official channels.';
        } else {
          responseText = '✅ This message appears to be safe.\n\n';
          
          if (analysis.threatLevel > 0.3) {
            responseText += 'However, always maintain caution in digital communications.';
          }
        }
        
        ctx.reply(responseText);
      })
      .catch(error => {
        logger.error('Error analyzing message', error);
        ctx.reply('Sorry, I encountered an error while analyzing the message. Please try again later.');
      });
  });

  // Suggest command
  bot.command('suggest', (ctx) => {
    const params = ctx.message.text.split('/suggest ')[1];
    
    if (!params) {
      return ctx.reply('Please provide a contact name.\nExample: /suggest John');
    }
    
    // In a real implementation, we would look up the contact ID based on the name
    // For this placeholder, we'll use a dummy ID
    const contactId = 'dummy-contact-id';
    
    generateConversationSuggestions(contactId)
      .then(suggestions => {
        if (!suggestions || suggestions.length === 0) {
          return ctx.reply('Sorry, I couldn\'t generate any suggestions for this contact.');
        }
        
        let responseText = '💬 Here are some conversation suggestions:\n\n';
        
        suggestions.forEach((suggestion, index) => {
          responseText += `${index + 1}. "${suggestion.text}"\n\n`;
        });
        
        ctx.reply(responseText);
      })
      .catch(error => {
        logger.error('Error generating suggestions', error);
        ctx.reply('Sorry, I encountered an error while generating suggestions. Please try again later.');
      });
  });

  // Status command
  bot.command('status', (ctx) => {
    // In a real implementation, this would pull real data from the analytics service
    ctx.reply(
      '📊 Your Social Network Status:\n\n' +
      'Total Contacts: 248\n' +
      'Active Relationships: 42\n' +
      'Relationships Needing Attention: 15\n' +
      'New Connection Opportunities: 7\n\n' +
      'Use /details for a more comprehensive analysis.'
    );
  });

  // Protection toggle command
  bot.command('protect', (ctx) => {
    // In a real implementation, this would toggle protection settings
    ctx.reply(
      '🛡️ Protection Mode: ACTIVE\n\n' +
      'I will analyze all incoming messages for potential social engineering attempts and alert you to suspicious patterns.'
    );
  });

  // Handle normal messages
  bot.on('text', (ctx) => {
    // In a real implementation, this would process the message based on the user's settings
    // For now, we'll just respond with a placeholder
    ctx.reply('I\'ve received your message. Use specific commands like /analyze or /suggest to use my capabilities.');
  });

  // Handle errors
  bot.catch((err, ctx) => {
    logger.error(`Bot error: ${err}`, { userId: ctx.from?.id });
    ctx.reply('Sorry, something went wrong. Please try again later.');
  });
}; 