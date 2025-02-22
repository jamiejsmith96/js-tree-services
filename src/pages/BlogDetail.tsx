import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container, Title, Text, Group, Button, Stack, Badge, Box } from '@mantine/core';
import { IconCalendar, IconArrowLeft, IconUser, IconTag } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blog';
import { ResponsiveImage } from '../components/common/ResponsiveImage';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      {/* Extra padding for mobile header */}
      <Box h="var(--space-xl)" hiddenFrom="sm" />
      
      <Container size="xl" py="var(--space-xxxl)">
        <Stack gap="var(--space-xxxl)">
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

          <article>
            <Stack gap="var(--space-xl)">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box className="section-decorator" mb="var(--space-xl)">
                  <Title order={1} mb="var(--space-lg)">
                    {post.title}
                  </Title>
                  <Group gap="var(--space-md)">
                    <Badge color="green" size="lg">
                      {post.category}
                    </Badge>
                    <Group gap="xs" c="dimmed">
                      <IconCalendar size={16} />
                      <Text size="sm">
                        {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </Text>
                    </Group>
                    <Group gap="xs" c="dimmed">
                      <IconUser size={16} />
                      <Text size="sm">{post.author}</Text>
                    </Group>
                    <Text size="sm" c="dimmed">{post.readTime}</Text>
                  </Group>
                </Box>

                <Box>
                  <Box mb="var(--space-xl)">
                    <ResponsiveImage
                      src={post.coverImage}
                      alt={post.title}
                      height={400}
                      radius="md"
                    />
                  </Box>

                  <Box maw="var(--content-width-md)" mx="auto">
                    <Text 
                      size="lg" 
                      className="blog-content"
                      style={{
                        whiteSpace: 'pre-line',
                        lineHeight: 1.8
                      }}
                    >
                      {post.content}
                    </Text>
                  </Box>
                </Box>
              </motion.div>

              {post.tags && post.tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Group gap="xs" align="center">
                    <IconTag size={16} style={{ color: 'var(--mantine-color-dimmed)' }} />
                    <Text size="sm" c="dimmed">Tags:</Text>
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        color="gray"
                        component={Link}
                        to={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="interactive-element"
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
                    ))}
                  </Group>
                </motion.div>
              )}
            </Stack>
          </article>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Box ta="center">
              <Text c="dimmed" mb="var(--space-lg)">
                Found this article helpful? Share it with others who might benefit.
              </Text>
              <Button
                component={Link}
                to="/contact"
                size="lg"
                variant="gradient"
                gradient={{ from: 'var(--gradient-start)', to: 'var(--gradient-end)' }}
                className="interactive-element"
              >
                Get in Touch
              </Button>
            </Box>
          </motion.div>
        </Stack>
      </Container>
    </>
  );
};

export default BlogDetail;