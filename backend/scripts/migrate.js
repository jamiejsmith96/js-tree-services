const path = require('path');

const migrate = async () => {
  try {
    console.log('Initializing Strapi...');
    const appDir = path.resolve(__dirname, '..');
    
    const strapi = require('@strapi/strapi')({
      dir: appDir,
      serveAdminPanel: false,
      autoReload: false
    });

    await strapi.load();
    console.log('Strapi initialized, running migration...');
    
    // Import and run migration
    const { default: migration } = require('../dist/src/bootstrap/data-migration');
    await migration({ strapi });
    
    console.log('Migration completed successfully');
    
    // Cleanup
    await strapi.destroy();
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

migrate();