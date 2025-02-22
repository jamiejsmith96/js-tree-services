import React from 'react';
import { Card, Text, Title, Group, Stack, Badge, Button, Box } from '@mantine/core';
import { IconCalendar, IconUser, IconArrowRight, IconShare } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { motion } from 'framer-motion';
import type { BlogPostProps } from '../../types/blog';
import { ResponsiveImage } from '../common/ResponsiveImage';

const BlogPost: React.FC<BlogPostProps> = ({
  id,
  title,
  slug,
  content,
  author,
  publishedAt,
  category,
  tags,
  coverImage,
  readTime,
  isFeatured = false,
  index = 0
}) => {
  const handleShare = async () => {
    try {
      const url = `${window.location.origin}/blog/${slug}`;
      if (typeof navigator.share === 'function') {
        await navigator.share({
          title,
          text: content.substring(0, 100) + '...',
          url
        });
      } else {
        await navigator.clipboard.writeText(url);
        notifications.show({
          title: 'Link Copied!',
          message: 'The article link has been copied to your clipboard.',
          color: 'green'
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        withBorder 
        padding="var(--space-xl)"
        radius="md"
        className="hover-card"
      >
        <Card.Section mb="var(--space-lg)">
          <Box style={{ overflow: 'hidden' }}>
            <ResponsiveImage
              src={coverImage}
              alt={title}
              height={isFeatured ? 200 : 250}
              className="hover-image"
            />
          </Box>
        </Card.Section>

        <Stack gap="var(--space-lg)">
          <Group justify="space-between">
            <Badge color="green" variant="light" size="lg" radius="md">
              {category}
            </Badge>
            <Group gap="xs" c="dimmed">
              <IconUser size={16} />
              <Text size="sm">{author}</Text>
            </Group>
          </Group>

          <Link 
            to={`/blog/${slug}`} 
            style={{ textDecoration: 'none', color: 'inherit' }}
            className="interactive-element"
          >
            <Title 
              order={isFeatured ? 3 : 2} 
              className="hover-title"
            >
              {title}
            </Title>
          </Link>

          <Group justify="space-between">
            <Group gap="xs" c="dimmed">
              <IconCalendar size={16} />
              <Text size="sm">
                {new Date(publishedAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </Text>
              <Text size="sm">•</Text>
              <Text size="sm">{readTime}</Text>
            </Group>

            <Button 
              variant="subtle"
              color="gray"
              leftSection={<IconShare size={16} />}
              onClick={handleShare}
              className="interactive-element"
            >
              Share
            </Button>
          </Group>

          <Text lineClamp={3} c="dimmed" size="lg">
            {content}
          </Text>

          {tags && tags.length > 0 && (
            <Group gap="xs">
              {tags.map((tag) => (
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
          )}

          <Button 
            variant="light" 
            color="green" 
            rightSection={<IconArrowRight size={16} />}
            component={Link}
            to={`/blog/${slug}`}
            className="interactive-element"
            fullWidth
          >
            Read More
          </Button>
        </Stack>
      </Card>
    </motion.div>
  );
};

export default BlogPost;