const migrate = async () => {
  let strapi: any = null;
  
  try {
    console.log('Starting migration process...');
    console.log('Working directory:', process.cwd());
    
    // Create and start Strapi with debug info
    console.log('Loading Strapi...');
    const { createStrapi } = await import('@strapi/strapi');
    console.log('Creating Strapi instance...');
    
    strapi = await createStrapi({
      appDir: process.cwd(),
      autoReload: false,
      serveAdminPanel: false,
    }).load();

    console.log('Strapi started successfully');
    console.log('Running migration...');
    
    // Import migration function
    const { default: dataMigration } = await import('../src/bootstrap/data-migration');
    
    // Run migration
    await dataMigration({ strapi });
    
    console.log('Migration completed successfully');
    
    // Stop Strapi and exit
    if (strapi) {
      console.log('Shutting down Strapi...');
      await strapi.destroy();
    }
    process.exit(0);
  } catch (error) {
    console.error('Migration failed with error:', error);
    if (strapi) {
      try {
        await strapi.destroy();
      } catch (destroyError) {
        console.error('Error shutting down Strapi:', destroyError);
      }
    }
    process.exit(1);
  }
};

console.log('Migration script starting...');
migrate().catch((error) => {
  console.error('Uncaught error in migration:', error);
  process.exit(1);
});
