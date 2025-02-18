import React, { useState } from 'react';
import { Container, Title, Text, Grid, Card, Stack, TextInput, Select, Button, Box } from '@mantine/core';
import { IconSearch, IconFilter } from '@tabler/icons-react';
import BlogPost from '../components/Blog/BlogPost';
import type { BlogPost as BlogPostType } from '../types/blog';

interface Category {
  value: string;
  label: string;
}

const categories: Category[] = [
  { value: 'all', label: 'All Posts' },
  { value: 'tree-care', label: 'Tree Care Tips' },
  { value: 'news', label: 'Industry News' },
  { value: 'environmental', label: 'Environmental Impact' },
  { value: 'safety', label: 'Safety Guidelines' },
  { value: 'seasonal', label: 'Seasonal Advice' }
];

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    title: 'Essential Tree Care Tips for Winter',
    content: `Winter can be harsh on trees, especially in the UK climate. Learn how to protect your trees 
    during the cold months with our expert tips on winter tree care. From proper pruning techniques to 
    protecting roots from frost damage, we cover everything you need to know.`,
    author: 'James Smith',
    publishedAt: '2023-12-15',
    category: 'Seasonal Advice',
    coverImage: '/assets/blog/winter-tree-care.jpg',
    readTime: '5 min read',
    tags: ['winter care', 'maintenance', 'seasonal']
  },
  {
    id: 2,
    title: 'The Environmental Benefits of Professional Tree Management',
    content: `Proper tree management plays a crucial role in urban environmentalism. Discover how professional 
    tree care contributes to biodiversity and climate change mitigation. Learn about sustainable practices 
    and their long-term impact on our local ecosystem.`,
    author: 'Sarah Johnson',
    publishedAt: '2023-12-10',
    category: 'Environmental Impact',
    coverImage: '/assets/blog/environmental-benefits.jpg',
    readTime: '7 min read',
    tags: ['environment', 'sustainability', 'urban forestry']
  },
  {
    id: 3,
    title: 'Understanding Tree Preservation Orders',
    content: `A comprehensive guide to Tree Preservation Orders (TPOs) and how they affect property owners. 
    Learn about the legal requirements, application process, and what you can and cannot do with protected trees.`,
    author: 'Michael Brown',
    publishedAt: '2023-12-05',
    category: 'Industry News',
    coverImage: '/assets/blog/tree-preservation.jpg',
    readTime: '6 min read',
    tags: ['legal', 'regulations', 'property']
  },
];

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = 
      !selectedCategory || 
      selectedCategory === 'all' || 
      post.category === categories.find(cat => cat.value === selectedCategory)?.label;

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <Container size="xl" py="var(--space-xl)">
      <Stack gap="var(--space-xl)">
        <Box className="section-decorator">
          <Title
            order={1}
            ta="center"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              opacity: 0
            }}
          >
            Tree Care Blog
          </Title>
          <Text
            c="dimmed"
            size="xl"
            ta="center"
            mt="var(--space-md)"
            maw={800}
            mx="auto"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '0.1s',
              opacity: 0
            }}
          >
            Expert insights, tips, and news about tree care and maintenance from JS Tree Services.
          </Text>
        </Box>

        {/* Featured Posts */}
        <div>
          <Title
            order={2}
            mb="var(--space-lg)"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '0.2s',
              opacity: 0
            }}
          >
            Featured Articles
          </Title>
          <Grid>
            {featuredPosts.map((post, index) => (
              <Grid.Col key={post.id} span={{ base: 12, md: 4 }}>
                <BlogPost {...post} index={index} isFeatured />
              </Grid.Col>
            ))}
          </Grid>
        </div>

        {/* Search and Filter */}
        <Card
          withBorder
          radius="md"
          padding="var(--space-lg)"
          className="hover-card"
          style={{
            animation: 'fadeInUp 0.6s ease-out forwards',
            animationDelay: '0.3s',
            opacity: 0
          }}
        >
          <Grid align="flex-end" gutter="var(--space-md)">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <TextInput
                leftSection={<IconSearch size={18} />}
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.currentTarget.value)}
                size="md"
                className="interactive-element"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Select
                leftSection={<IconFilter size={18} />}
                placeholder="Select category"
                value={selectedCategory}
                onChange={setSelectedCategory}
                data={categories.map(cat => ({ value: cat.value, label: cat.label }))}
                size="md"
                clearable
                className="interactive-element"
              />
            </Grid.Col>
          </Grid>
        </Card>

        {/* All Posts */}
        <Stack gap="var(--space-lg)">
          {filteredPosts.map((post, index) => (
            <BlogPost key={post.id} {...post} index={index} />
          ))}
        </Stack>

        {filteredPosts.length === 0 && (
          <Card 
            withBorder 
            padding="var(--space-xl)" 
            radius="md"
            className="hover-card"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '0.3s',
              opacity: 0
            }}
          >
            <Stack align="center" gap="var(--space-md)">
              <Text size="lg">No articles found matching your search criteria.</Text>
              <Button 
                variant="light" 
                color="green"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="interactive-element"
              >
                Clear Filters
              </Button>
            </Stack>
          </Card>
        )}
      </Stack>
    </Container>
  );
};

export default Blog;