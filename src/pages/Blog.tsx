import React, { useState } from 'react';
import { Container, Title, Grid, Card, Image, Text, Badge, Group, Stack, TextInput, Select, Button } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconSearch, IconCalendar, IconUser, IconArrowRight, IconShare } from '@tabler/icons-react';
import { BlogPost } from '../types';

const MotionDiv = motion.div;

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    'All Posts',
    'Tree Care Tips',
    'Industry News',
    'Environmental Impact',
    'Safety Guidelines',
    'Seasonal Advice'
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Essential Tree Care Tips for Winter',
      content: `Winter can be harsh on trees, especially in the UK climate. Learn how to protect your trees 
      during the cold months with our expert tips on winter tree care...`,
      author: 'James Smith',
      createdAt: '2023-12-15',
      category: 'Seasonal Advice',
      imageUrl: '/assets/blog/winter-tree-care.jpg',
      readTime: '5 min read',
      tags: ['winter care', 'maintenance', 'seasonal']
    },
    {
      id: 2,
      title: 'The Environmental Benefits of Professional Tree Management',
      content: `Proper tree management plays a crucial role in urban environmentalism. Discover how professional 
      tree care contributes to biodiversity and climate change mitigation...`,
      author: 'Sarah Johnson',
      createdAt: '2023-12-10',
      category: 'Environmental Impact',
      imageUrl: '/assets/blog/environmental-benefits.jpg',
      readTime: '7 min read',
      tags: ['environment', 'sustainability', 'urban forestry']
    },
    // Add more blog posts as needed
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || 
      selectedCategory === 'All Posts' || 
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <Container size="xl" py={80}>
      <Stack gap={60}>
        <div>
          <Title order={1} size="3rem" ta="center">Tree Care Blog</Title>
          <Text c="dimmed" size="xl" ta="center" mt="md" maw={800} mx="auto">
            Expert insights, tips, and news about tree care and maintenance from JS Tree Services.
          </Text>
        </div>

        {/* Featured Posts */}
        <div>
          <Title order={2} size="h2" mb={30}>Featured Articles</Title>
          <Grid>
            {featuredPosts.map((post, index) => (
              <Grid.Col key={post.id} span={{ base: 12, md: 4 }}>
                <Card
                  withBorder
                  padding="lg"
                  radius="md"
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card.Section>
                    <Image
                      src={post.imageUrl}
                      height={200}
                      alt={post.title}
                    />
                  </Card.Section>

                  <Stack mt="md" gap="xs">
                    <Badge color="green" variant="light">
                      {post.category}
                    </Badge>
                    <Text fw={500} size="lg" lineClamp={2}>
                      {post.title}
                    </Text>
                    <Group gap="xs" c="dimmed">
                      <IconCalendar size={16} />
                      <Text size="sm">
                        {new Date(post.createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </Text>
                      <Text size="sm">•</Text>
                      <Text size="sm">{post.readTime}</Text>
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </div>

        {/* Search and Filter */}
        <Grid align="flex-end" gutter="xl">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              leftSection={<IconSearch size={18} />}
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="md"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Select
              placeholder="Select category"
              value={selectedCategory}
              onChange={setSelectedCategory}
              data={categories}
              size="md"
              clearable
            />
          </Grid.Col>
        </Grid>

        {/* All Posts */}
        <Grid>
          {filteredPosts.map((post, index) => (
            <Grid.Col key={post.id} span={12}>
              <MotionDiv
                style={{
                  padding: '24px',
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  backgroundColor: 'white'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Grid gutter={0}>
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Image
                      src={post.imageUrl}
                      height={250}
                      alt={post.title}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 8 }}>
                    <Stack gap="xs" p="xl">
                      <Group justify="space-between">
                        <Badge color="green" variant="light">
                          {post.category}
                        </Badge>
                        <Group gap="xs" c="dimmed">
                          <IconUser size={16} />
                          <Text size="sm">{post.author}</Text>
                        </Group>
                      </Group>
                      
                      <Title order={3}>{post.title}</Title>
                      
                      <Group justify="space-between">
                        <Group gap="xs" c="dimmed">
                          <IconCalendar size={16} />
                          <Text size="sm">
                            {new Date(post.createdAt).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </Text>
                          <Text size="sm">•</Text>
                          <Text size="sm">{post.readTime}</Text>
                        </Group>
                        
                        <Group gap="xs" c="dimmed">
                          <IconShare size={16} />
                          <Text size="sm">Share</Text>
                        </Group>
                      </Group>

                      <Text lineClamp={3} c="dimmed" mb="md">
                        {post.content}
                      </Text>

                      <Group gap={8}>
                        {post.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="outline" 
                            color="gray"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setSearchQuery(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </Group>

                      <Button 
                        variant="subtle" 
                        color="green" 
                        rightSection={<IconArrowRight size={16} />}
                        mt="md"
                      >
                        Read More
                      </Button>
                    </Stack>
                  </Grid.Col>
                </Grid>
              </MotionDiv>
            </Grid.Col>
          ))}
        </Grid>

        {filteredPosts.length === 0 && (
          <Card withBorder padding="xl" radius="md">
            <Stack align="center" gap="md">
              <Text size="lg">No articles found matching your search criteria.</Text>
              <Button 
                variant="subtle" 
                color="green"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
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