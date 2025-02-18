import React from 'react';
import { Container, Title, Text, Grid, Group, Stack, Badge, Timeline, ThemeIcon, Image, Button, Card, Box } from '@mantine/core';
import { IconCalendarEvent, IconCertificate, IconUsers, IconLeaf, IconTrophy, IconPhone } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const achievements = [
    { year: '2023', text: 'Awarded Best Tree Surgery Service in Hampshire' },
    { year: '2020', text: 'Expanded services to cover all of Hampshire' },
    { year: '2018', text: 'Achieved Arboricultural Association Approved Contractor status' },
    { year: '2015', text: 'Established JS Tree Services in Aldershot' },
  ];

  const certifications = [
    'NPTC Certified Arborists',
    'City & Guilds Qualified',
    'ISO 9001:2015 Certified',
    'Full Public Liability Insurance',
    'Environmental Management System ISO 14001',
    'Safe Contractor Approved'
  ];

  const teamMembers = [
    {
      name: 'James Smith',
      role: 'Founder & Lead Arborist',
      certifications: ['NPTC Level 4', 'ISA Certified'],
      image: '/assets/team/james-smith.jpg'
    },
    // Add more team members as needed
  ];

  return (
    <Container size="xl" py="var(--space-xl)">
      <Stack gap="var(--space-xl)">
        {/* Hero Section */}
        <Box className="section-decorator">
          <Grid gutter="var(--space-lg)" align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="var(--space-lg)" className="fade-in-up">
                <Title order={1}>About JS Tree Services</Title>
                <Text size="xl" c="dimmed">
                  With over 8 years of experience, we've built a reputation for excellence in 
                  professional tree care services across Hampshire. Our commitment to quality, 
                  safety, and customer satisfaction sets us apart.
                </Text>
                <Group>
                  <Button 
                    component={Link}
                    to="/contact"
                    size="lg"
                    color="green"
                    className="interactive-element"
                  >
                    Get in Touch
                  </Button>
                  <Button
                    component="a"
                    href="tel:+441234567890"
                    size="lg"
                    variant="light"
                    leftSection={<IconPhone size={20} />}
                    className="interactive-element"
                  >
                    Call Us
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <div className="fade-in-up delay-1">
                <Image
                  src="/assets/about/team-hero.jpg"
                  radius="md"
                  alt="JS Tree Services Team"
                />
              </div>
            </Grid.Col>
          </Grid>
        </Box>

        {/* Mission & Values */}
        <Grid gutter="var(--space-lg)">
          {[
            {
              icon: IconLeaf,
              title: 'Our Mission',
              text: 'To provide exceptional tree care services while promoting environmental sustainability and maintaining the highest standards of safety and professionalism.'
            },
            {
              icon: IconUsers,
              title: 'Our Team',
              text: 'Our skilled arborists combine years of experience with continuous professional development to deliver the best tree care solutions for our clients.'
            },
            {
              icon: IconCertificate,
              title: 'Our Standards',
              text: 'We maintain the highest industry standards through professional certifications, modern equipment, and strict safety protocols.'
            }
          ].map((item, index) => (
            <Grid.Col span={{ base: 12, md: 4 }} key={index}>
              <Card 
                withBorder 
                padding="var(--space-lg)"
                radius="md"
                className={`hover-card fade-in-up delay-${index + 1}`}
              >
                <ThemeIcon size={48} radius="md" color="green">
                  <item.icon size={24} />
                </ThemeIcon>
                <Title order={3} mt="var(--space-md)">{item.title}</Title>
                <Text mt="var(--space-sm)">{item.text}</Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Company Journey */}
        <Box className="section-decorator">
          <Title order={2} ta="center" mb="var(--space-xl)" className="fade-in-up">Our Journey</Title>
          <Timeline active={achievements.length - 1} bulletSize={24} lineWidth={2}>
            {achievements.map((achievement, index) => (
              <Timeline.Item
                key={index}
                bullet={<IconCalendarEvent size={12} />}
                title={achievement.year}
                className={`interactive-element fade-in-up delay-${index + 1}`}
              >
                <Text c="dimmed" size="lg">
                  {achievement.text}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </Box>

        {/* Certifications */}
        <Card withBorder radius="md" padding="var(--space-xl)" className="hover-card">
          <Title order={2} ta="center" mb="var(--space-xl)" className="fade-in-up">Our Certifications</Title>
          <Grid>
            {certifications.map((cert, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Card 
                  withBorder 
                  padding="var(--space-md)"
                  radius="md"
                  className={`hover-card fade-in-up delay-${index + 1}`}
                >
                  <Group wrap="nowrap" align="flex-start">
                    <ThemeIcon size={36} radius="md" color="green">
                      <IconTrophy size={20} />
                    </ThemeIcon>
                    <Text size="lg">{cert}</Text>
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Card>

        {/* Team Section */}
        <Box className="section-decorator">
          <Title order={2} ta="center" mb="var(--space-xl)" className="fade-in-up">Meet Our Team</Title>
          <Grid>
            {teamMembers.map((member, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Card 
                  withBorder 
                  padding="var(--space-md)"
                  radius="md"
                  className={`hover-card fade-in-up delay-${index + 1}`}
                >
                  <Card.Section>
                    <Image
                      src={member.image}
                      height={300}
                      alt={member.name}
                    />
                  </Card.Section>
                  <Stack mt="var(--space-md)" gap="var(--space-xs)">
                    <Text size="xl" fw={500}>{member.name}</Text>
                    <Text size="sm" c="dimmed">{member.role}</Text>
                    <Group mt="var(--space-xs)">
                      {member.certifications.map((cert, i) => (
                        <Badge key={i} color="green" variant="light">
                          {cert}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default About;