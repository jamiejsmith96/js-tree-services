import path from 'path';
import fs from 'fs/promises';

async function uploadFile(strapi: any, filePath: string, name: string) {
  try {
    // Remove leading slash and adjust path
    const relativePath = filePath.replace(/^\//, '');
    const absolutePath = path.join(process.cwd(), '..', 'public', relativePath);
    console.log('Attempting to upload file:', absolutePath);
    
    const stats = await fs.stat(absolutePath);
    const buffer = await fs.readFile(absolutePath);
    
    const file = {
      buffer,
      hash: path.parse(name).name,
      name,
      size: stats.size,
      type: 'image/jpeg',
      stream: () => buffer,
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
}

async function migrateBlogPosts(strapi: any) {
  const blogPosts = [
    {
      title: 'Essential Tree Care Tips for Winter',
      slug: 'essential-tree-care-tips-for-winter',
      content: `Winter can be harsh on trees, especially in the UK climate...`,
      author: 'James Smith',
      publishedAt: '2024-02-15',
      category: 'Seasonal Advice',
      coverImage: '/assets/gallery/image_fx_ (25).jpg',
      readTime: '5 min read',
      tags: ['winter care', 'maintenance', 'seasonal']
    }
    // Add other blog posts here
  ];

  for (const post of blogPosts) {
    try {
      const imageName = path.basename(post.coverImage);
      const uploadedImage = await uploadFile(strapi, post.coverImage, imageName);

      await strapi.entityService.create('api::blog-post.blog-post', {
        data: {
          title: post.title,
          slug: post.slug,
          content: post.content,
          author: post.author,
          publishedAt: new Date(post.publishedAt).toISOString(),
          category: post.category,
          coverImage: uploadedImage.id,
          readTime: post.readTime,
          tags: post.tags,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      });

      console.log(`Migrated blog post: ${post.title}`);
    } catch (error) {
      console.error(`Error migrating blog post ${post.title}:`, error);
    }
  }
}

async function migrateGalleryItems(strapi: any) {
  const galleryItems = [
    {
      imageUrl: '/assets/gallery/image_fx_ (5).jpg',
      description: 'Complex tree removal in residential area',
      category: 'Tree Felling',
      location: 'Surrey',
      date: '2024-02-15'
    }
    // Add other gallery items here
  ];

  for (const item of galleryItems) {
    try {
      const imageName = path.basename(item.imageUrl);
      const uploadedImage = await uploadFile(strapi, item.imageUrl, imageName);

      await strapi.entityService.create('api::gallery-item.gallery-item', {
        data: {
          imageUrl: uploadedImage.id,
          description: item.description,
          category: item.category,
          location: item.location,
          date: new Date(item.date).toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          publishedAt: new Date().toISOString(),
        },
      });

      console.log(`Migrated gallery item: ${item.description}`);
    } catch (error) {
      console.error(`Error migrating gallery item:`, error);
    }
  }
}

export default async ({ strapi }: { strapi: any }) => {
  try {
    console.log('Starting data migration...');
    await migrateBlogPosts(strapi);
    await migrateGalleryItems(strapi);
    console.log('Data migration completed successfully');
  } catch (error) {
    console.error('Error during data migration:', error);
    throw error;
  }
};