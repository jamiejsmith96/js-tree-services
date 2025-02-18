import React from 'react';
import { Card, Text, Title, Group, Stack, Badge, Button, Box } from '@mantine/core';
import { IconCalendar, IconUser, IconArrowRight, IconShare } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import type { BlogPostProps } from '../../types/blog';

const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const BlogPost: React.FC<BlogPostProps> = ({
  title,
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
  const slug = createSlug(title);

  const handleShare = async () => {
    try {
      if (typeof navigator.share === 'function') {
        await navigator.share({
          title,
          text: content.substring(0, 100) + '...',
          url: `${window.location.origin}/blog/${slug}`
        });
      } else {
        await navigator.clipboard.writeText(`${window.location.origin}/blog/${slug}`);
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
    <Card 
      withBorder 
      padding="var(--space-lg)"
      radius="md"
      className="hover-card"
      style={{
        animation: 'fadeInUp 0.6s ease-out forwards',
        animationDelay: `${(index + 1) * 0.1}s`,
        opacity: 0
      }}
    >
      <Card.Section>
        <Box style={{ overflow: 'hidden' }}>
          <img
            src={coverImage || ''}
            alt={title}
            style={{
              width: '100%',
              height: isFeatured ? '200px' : '250px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </Box>
      </Card.Section>

      <Stack mt="var(--space-md)" gap="var(--space-xs)">
        <Group justify="space-between">
          <Badge color="green" variant="light" size="lg">
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
            style={{ 
              transition: 'color 0.2s ease',
            }}
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

        <Text lineClamp={3} c="dimmed" mb="var(--space-md)">
          {content}
        </Text>

        {tags && tags.length > 0 && (
          <Group gap="var(--space-xs)">
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
          mt="var(--space-md)"
          component={Link}
          to={`/blog/${slug}`}
          className="interactive-element"
        >
          Read More
        </Button>
      </Stack>
    </Card>
  );
};

export default BlogPost;