/**
 * Telegram Bot Middleware
 * 
 * Defines middleware functions for the Telegram bot.
 */

const logger = require('../utils/logger');

module.exports = (bot) => {
  // Logging middleware
  bot.use((ctx, next) => {
    const userId = ctx.from?.id;
    const username = ctx.from?.username;
    const messageText = ctx.message?.text;
    
    logger.info(`Bot request from user ${userId} (${username || 'unknown'}): ${messageText || 'non-text message'}`);
    
    return next();
  });

  // Rate limiting middleware
  bot.use((ctx, next) => {
    // In a real implementation, this would check if the user has exceeded rate limits
    // For this placeholder, we'll just let all requests through
    return next();
  });

  // User tracking middleware
  bot.use((ctx, next) => {
    // In a real implementation, this would update the user's last active timestamp
    // and potentially create the user if they don't exist
    return next();
  });

  // Context enrichment middleware
  bot.use(async (ctx, next) => {
    // In a real implementation, this would add useful context to the ctx object
    // like user preferences, protection settings, etc.
    
    // For this placeholder, we'll just add some dummy data
    ctx.state.userSettings = {
      protectionLevel: 'high',
      notificationsEnabled: true,
      language: 'en'
    };
    
    return next();
  });
}; 