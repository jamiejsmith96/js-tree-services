import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const migrate = async () => {
  try {
    console.log('Initializing Strapi...');
    const appDir = path.resolve(__dirname, '..');
    
    // Import strapi factory
    const { createStrapi } = await import('@strapi/strapi');
    const strapi = await createStrapi({
      dir: appDir,
      distDir: path.join(appDir, 'dist'),
      autoReload: false,
      serveAdminPanel: false,
    }).load();

    await strapi.server.reload();

    console.log('Strapi initialized, running migration...');
    
    // Import and run migration
    const { default: migration } = await import('../dist/src/bootstrap/data-migration.js');
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