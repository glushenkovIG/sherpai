/**
 * SherpaAI - Main Entry Point
 * 
 * This is the main entry point for the SherpaAI application.
 * It initializes the core components and starts the services.
 */

require('dotenv').config();
const express = require('express');
const { Telegraf } = require('telegraf');
const logger = require('./utils/logger');
const { connectDB } = require('./config/database');
const { initializeAnalytics } = require('./services/analytics');
const { initializeProtection } = require('./services/protection');
const { initializeSocialMaximizer } = require('./services/socialMaximizer');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Telegram bot if token is provided
let bot;
if (process.env.TELEGRAM_BOT_TOKEN) {
  bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
  logger.info('Telegram bot initialized');

  // Register bot middleware and handlers
  require('./bot/middleware')(bot);
  require('./bot/handlers')(bot);
  
  // Launch bot
  bot.launch();
  logger.info('Telegram bot launched');
  
  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
} else {
  logger.warn('No Telegram bot token provided, bot functionality disabled');
}

// Configure Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register routes
app.use('/api', require('./routes/api'));

// Initialize database connection
connectDB()
  .then(() => {
    logger.info('Database connection established');
    
    // Initialize core services
    initializeAnalytics();
    initializeProtection();
    initializeSocialMaximizer();
    
    // Start Express server
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
      logger.info('SherpaAI system initialized and ready');
    });
  })
  .catch(err => {
    logger.error('Failed to connect to database', err);
    process.exit(1);
  });

module.exports = { app, bot }; 