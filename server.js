require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

// Only start the server if running locally (not in Vercel)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Scraping: ${process.env.TARGET_URL}`);
  });
}

// Export the Express app for Vercel
module.exports = app;