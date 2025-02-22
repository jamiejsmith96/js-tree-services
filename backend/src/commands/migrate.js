module.exports = {
  async migrate({ strapi }) {
    try {
      const uploadFile = async (filePath, name) => {
        try {
          const path = require('path');
          const fs = require('fs/promises');
          
          // Remove leading slash and adjust path
          const relativePath = filePath.replace(/^\//, '');
          const absolutePath = path.join(process.cwd(), '..', 'public', relativePath);
          console.log('Attempting to upload file:', absolutePath);
          
          const stats = await fs.stat(absolutePath);
          const buffer = await fs.readFile(absolutePath);
          
          const file = {
            buffer,
            name,
            size: stats.size,
            type: 'image/jpeg',
          };

          const uploadedFiles = await strapi.plugins.upload.services.upload.upload({
            data: {},
            files: file
          });

          console.log('File uploaded successfully:', name);
          return uploadedFiles[0];
        } catch (error) {
          console.error(`Error uploading file ${filePath}:`, error);
          throw error;
        }
      };

      console.log('Starting migration...');
      
      // Example blog post
      const post = {
        title: 'Essential Tree Care Tips for Winter',
        slug: 'essential-tree-care-tips-for-winter',
        content: 'Winter can be harsh on trees...',
        author: 'James Smith',
        publishedAt: '2024-02-15',
        category: 'Seasonal Advice',
        coverImage: '/assets/gallery/image_fx_ (25).jpg',
        readTime: '5 min read',
        tags: ['winter care', 'maintenance', 'seasonal']
      };

      const imageName = post.coverImage.split('/').pop();
      const uploadedImage = await uploadFile(post.coverImage, imageName);

      await strapi.entityService.create('api::blog-post.blog-post', {
        data: {
          ...post,
          coverImage: uploadedImage.id,
          publishedAt: new Date(post.publishedAt),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      console.log('Migration completed successfully');
    } catch (error) {
      console.error('Migration failed:', error);
    }
  },
};