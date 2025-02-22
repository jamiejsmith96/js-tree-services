import React, { useState } from 'react';
import { Container, Title, Text, Grid, Card, Stack, Select, Button, Box } from '@mantine/core';
import { IconSearch, IconFilter } from '@tabler/icons-react';
import { TextInput } from '@mantine/core';
import { motion } from 'framer-motion';
import BlogPost from '../components/Blog/BlogPost';
import { blogPosts } from '../data/blog';
import type { BlogPost as BlogPostType } from '../types/blog';

const categories = [
  { value: 'all', label: 'All Posts' },
  { value: 'seasonal', label: 'Seasonal Advice' },
  { value: 'environmental', label: 'Environmental Impact' },
  { value: 'industry', label: 'Industry News' },
  { value: 'tips', label: 'Tree Care Tips' }
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
      post.category.toLowerCase() === categories.find(cat => cat.value === selectedCategory)?.label.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Extra padding for mobile header */}
      <Box h="var(--space-xl)" hiddenFrom="sm" />
      
      <Container size="xl" py="var(--space-xxxl)">
        <Stack gap="var(--space-xxxl)">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box className="section-decorator">
              <Title order={1} ta="center">Tree Care Blog</Title>
              <Text
                c="dimmed"
                size="xl"
                ta="center"
                mt="var(--space-lg)"
                maw="var(--content-width-md)"
                mx="auto"
              >
                Expert insights, tips, and news about tree care and maintenance from JS Tree Services.
              </Text>
            </Box>
          </motion.div>

          {/* Featured Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box>
              <Title order={2} ta="center" mb="var(--space-xl)">
                Featured Articles
              </Title>
              <Grid gutter={{ base: 'xl', sm: 'var(--space-xl)' }}>
                {featuredPosts.map((post, index) => (
                  <Grid.Col key={post.id} span={{ base: 12, md: 4 }}>
                    <BlogPost {...post} index={index} isFeatured />
                  </Grid.Col>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card
              withBorder
              radius="md"
              padding="var(--space-xl)"
              className="hover-card"
            >
              <Grid align="flex-end" gutter={{ base: 'md', sm: 'xl' }}>
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
          </motion.div>

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Stack gap="var(--space-xl)">
              {filteredPosts.map((post, index) => (
                <BlogPost key={post.id} {...post} index={index} />
              ))}
            </Stack>
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card
                withBorder
                padding="var(--space-xl)"
                radius="md"
                className="hover-card"
              >
                <Stack align="center" gap="var(--space-lg)">
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
            </motion.div>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Blog;