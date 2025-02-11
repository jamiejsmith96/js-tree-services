import React from 'react';
import { Container, Title, Text, Grid, Group, Stack, Badge, Timeline, ThemeIcon, Image, Button, Card } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconCalendarEvent, IconCertificate, IconUsers, IconLeaf, IconTrophy, IconPhone } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const MotionDiv = motion.div;

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
    <Container size="xl" py={80}>
      <Stack gap={80}>
        {/* Hero Section */}
        <Grid gutter={40} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Stack gap="xl">
                <Title order={1} size="3rem">About JS Tree Services</Title>
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
                  >
                    Get in Touch
                  </Button>
                  <Button
                    component="a"
                    href="tel:+441234567890"
                    size="lg"
                    variant="light"
                    leftSection={<IconPhone size={20} />}
                  >
                    Call Us
                  </Button>
                </Group>
              </Stack>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/assets/about/team-hero.jpg"
                radius="md"
                alt="JS Tree Services Team"
              />
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* Mission & Values */}
        <Grid gutter={40}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder padding="xl" radius="md">
              <ThemeIcon size={48} radius="md" color="green">
                <IconLeaf size={24} />
              </ThemeIcon>
              <Title order={3} mt="md">Our Mission</Title>
              <Text mt="sm">
                To provide exceptional tree care services while promoting environmental 
                sustainability and maintaining the highest standards of safety and professionalism.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder padding="xl" radius="md">
              <ThemeIcon size={48} radius="md" color="green">
                <IconUsers size={24} />
              </ThemeIcon>
              <Title order={3} mt="md">Our Team</Title>
              <Text mt="sm">
                Our skilled arborists combine years of experience with continuous professional 
                development to deliver the best tree care solutions for our clients.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card withBorder padding="xl" radius="md">
              <ThemeIcon size={48} radius="md" color="green">
                <IconCertificate size={24} />
              </ThemeIcon>
              <Title order={3} mt="md">Our Standards</Title>
              <Text mt="sm">
                We maintain the highest industry standards through professional certifications, 
                modern equipment, and strict safety protocols.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Company Journey */}
        <div>
          <Title order={2} size="2.5rem" ta="center" mb={50}>Our Journey</Title>
          <Timeline active={achievements.length - 1} bulletSize={24} lineWidth={2}>
            {achievements.map((achievement, index) => (
              <Timeline.Item
                key={index}
                bullet={<IconCalendarEvent size={12} />}
                title={achievement.year}
              >
                <Text color="dimmed" size="lg">
                  {achievement.text}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>

        {/* Certifications */}
        <Card withBorder radius="md" padding="xl">
          <Title order={2} size="2.5rem" ta="center" mb={40}>Our Certifications</Title>
          <Grid>
            {certifications.map((cert, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Card withBorder padding="md" radius="md">
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
        <div>
          <Title order={2} size="2.5rem" ta="center" mb={40}>Meet Our Team</Title>
          <Grid>
            {teamMembers.map((member, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Card withBorder padding="md">
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card.Section>
                      <Image
                        src={member.image}
                        height={300}
                        alt={member.name}
                      />
                    </Card.Section>
                    <Stack mt="md" gap="xs">
                      <Text size="xl" fw={500}>{member.name}</Text>
                      <Text size="sm" c="dimmed">{member.role}</Text>
                      <Group mt="xs">
                        {member.certifications.map((cert, i) => (
                          <Badge key={i} color="green" variant="light">
                            {cert}
                          </Badge>
                        ))}
                      </Group>
                    </Stack>
                  </MotionDiv>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </Stack>
    </Container>
  );
};

export default About;