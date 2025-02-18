import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container, Title, Text, Group, Stack, Badge, Button, Box, Card } from '@mantine/core';
import { IconCalendar, IconUser, IconArrowLeft, IconShare } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';

// Mock data - replace with actual data fetching
const blogPosts: Record<string, BlogPost> = {
  'winter-tree-care': {
    id: 1,
    title: 'Essential Tree Care Tips for Winter',
    content: `Winter can be harsh on trees, especially in the UK climate...`,
    author: 'James Smith',
    createdAt: '2023-12-15',
    category: 'Seasonal Advice',
    imageUrl: '/assets/blog/winter-tree-care.jpg',
    readTime: '5 min read',
    tags: ['winter care', 'maintenance', 'seasonal']
  },
};

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async () => {
    try {
      if (typeof navigator.share === 'function') {
        await navigator.share({
          title: post.title,
          text: post.content.substring(0, 100) + '...',
          url: window.location.href,
        });
      }
    } catch (error) {
      console.log('Share failed:', error);
    }
  };

  return (
    <Container size="xl" py="var(--space-xl)">
      <Stack gap="var(--space-xl)">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            component={Link}
            to="/blog"
            variant="subtle"
            color="gray"
            leftSection={<IconArrowLeft size={16} />}
            className="interactive-element"
          >
            Back to Blog
          </Button>
        </motion.div>

        <Card withBorder padding="var(--space-xl)" radius="md" className="hover-card">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box style={{ margin: '0 -24px 24px' }}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                }}
              />
            </Box>

            <Stack gap="var(--space-md)">
              <Group justify="space-between">
                <Badge color="green" variant="light" size="lg">
                  {post.category}
                </Badge>
                <Group gap="xs" c="dimmed">
                  <IconUser size={16} />
                  <Text size="sm">{post.author}</Text>
                </Group>
              </Group>

              <Title order={1}>{post.title}</Title>

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

                {'share' in navigator && (
                  <Button 
                    variant="subtle"
                    color="gray"
                    leftSection={<IconShare size={16} />}
                    onClick={handleShare}
                    className="interactive-element"
                  >
                    Share
                  </Button>
                )}
              </Group>

              <Box mt="var(--space-lg)">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Text mb="var(--space-md)">{paragraph}</Text>
                  </motion.div>
                ))}
              </Box>

              <Group gap="var(--space-xs)" mt="var(--space-lg)">
                {post.tags.map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge 
                      variant="outline" 
                      color="gray"
                      className="interactive-element"
                      component={Link}
                      to={`/blog?tag=${tag}`}
                      styles={{
                        root: {
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: 'var(--background-light)',
                            transform: 'translateY(-2px)'
                          }
                        }
                      }}
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </Group>
            </Stack>
          </motion.div>
        </Card>
      </Stack>
    </Container>
  );
};

export default BlogDetail;