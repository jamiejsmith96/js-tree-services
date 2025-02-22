import React from 'react';
import { Container, Title, Text, Grid, Group, Stack, Badge, Timeline, ThemeIcon, Button, Card, Box } from '@mantine/core';
import { IconCalendarEvent, IconCertificate, IconUsers, IconLeaf, IconTrophy, IconPhone } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ResponsiveImage } from '../components/common/ResponsiveImage';

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
      name: 'Joe Vialls',
      role: 'Founder & Lead Arborist',
      certifications: ['NPTC Level 4', 'ISA Certified'],
      image: '/assets/gallery/image_fx_ (22).jpg'
    },
    {
      name: 'Other Name',
      role: 'Senior Arborist',
      certifications: ['NPTC Level 3', 'First Aid Certified'],
      image: '/assets/gallery/image_fx_ (23).jpg'
    }
  ];

  return (
    <>
      {/* Extra padding for mobile header */}
      <Box h="var(--space-xl)" hiddenFrom="sm" />
      
      <Container size="xl" py="var(--space-xxxl)">
        <Stack gap="var(--space-xxxl)">
          {/* Hero Section */}
          <Box className="section-decorator">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Stack gap="var(--space-xl)" align="center">
                <Box maw="var(--content-width-md)" mx="auto">
                  <Title order={1} ta="center">About JS Tree Services</Title>
                  <Text c="dimmed" size="xl" ta="center" mt="var(--space-lg)">
                    With over 8 years of experience, we've built a reputation for excellence in 
                    professional tree care services across Hampshire.
                  </Text>
                </Box>

                <Group justify="center">
                  <Button
                    component={Link}
                    to="/contact"
                    size="lg"
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
            </motion.div>
          </Box>

          {/* Mission & Values */}
          <Box>
            <Box className="section-decorator" mb="var(--space-xxl)">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box maw="var(--content-width-md)" mx="auto">
                  <Title order={2} ta="center">Our Mission & Values</Title>
                  <Text c="dimmed" size="xl" ta="center" mt="var(--space-lg)">
                    Our commitment to quality, safety, and customer satisfaction sets us apart.
                  </Text>
                </Box>
              </motion.div>
            </Box>

            <Grid gutter={{ base: 'xl', sm: 'var(--space-xxl)' }}>
              {[
                {
                  icon: IconLeaf,
                  title: 'Our Mission',
                  text: 'To provide exceptional tree care services while promoting environmental sustainability and maintaining the highest standards of safety and professionalism.',
                  image: '/assets/gallery/image_fx_ (11).jpg'
                },
                {
                  icon: IconUsers,
                  title: 'Our Team',
                  text: 'Our skilled arborists combine years of experience with continuous professional development to deliver the best tree care solutions for our clients.',
                  image: '/assets/gallery/image_fx_ (12).jpg'
                },
                {
                  icon: IconCertificate,
                  title: 'Our Standards',
                  text: 'We maintain the highest industry standards through professional certifications, modern equipment, and strict safety protocols.',
                  image: '/assets/gallery/image_fx_ (13).jpg'
                }
              ].map((item, index) => (
                <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card withBorder padding="var(--space-xl)" radius="md" className="hover-card">
                      <Stack align="center" gap="var(--space-xl)">
                        <ThemeIcon size={40} radius="md" color="green">
                          <item.icon size={20} />
                        </ThemeIcon>
                        <Stack gap="var(--space-md)">
                          <Title order={3} ta="center">{item.title}</Title>
                          <Text ta="center">{item.text}</Text>
                        </Stack>
                        <ResponsiveImage
                          src={item.image}
                          alt={item.title}
                          height={200}
                          radius="md"
                        />
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </Box>

          {/* Journey Timeline */}
          <Box>
            <Box className="section-decorator" mb="var(--space-xxl)">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box maw="var(--content-width-md)" mx="auto">
                  <Title order={2} ta="center">Our Journey</Title>
                  <Text c="dimmed" size="xl" ta="center" mt="var(--space-lg)">
                    Key milestones in our company's growth and development.
                  </Text>
                </Box>
              </motion.div>
            </Box>

            <Card withBorder radius="md" padding="var(--space-xxl)">
              <Timeline active={achievements.length - 1} bulletSize={24} lineWidth={2}>
                {achievements.map((achievement, index) => (
                  <Timeline.Item
                    key={index}
                    bullet={<IconCalendarEvent size={12} />}
                    title={
                      <Text fw={500} size="lg" ta="center">
                        {achievement.year}
                      </Text>
                    }
                  >
                    <Text c="dimmed" size="lg" ta="center">
                      {achievement.text}
                    </Text>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Card>
          </Box>

          {/* Certifications */}
          <Box>
            <Box className="section-decorator" mb="var(--space-xxl)">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box maw="var(--content-width-md)" mx="auto">
                  <Title order={2} ta="center">Our Certifications</Title>
                  <Text c="dimmed" size="xl" ta="center" mt="var(--space-lg)">
                    Professional accreditations that demonstrate our commitment to excellence.
                  </Text>
                </Box>
              </motion.div>
            </Box>

            <Grid gutter={{ base: 'xl', sm: 'var(--space-xxl)' }}>
              {certifications.map((cert, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card withBorder padding="var(--space-xl)" radius="md" className="hover-card">
                      <Stack align="center" gap="var(--space-xl)">
                        <ThemeIcon size={40} radius="md" color="green">
                          <IconTrophy size={20} />
                        </ThemeIcon>
                        <Text size="lg" ta="center">{cert}</Text>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </Box>

          {/* Team Section */}
          <Box>
            <Box className="section-decorator" mb="var(--space-xxl)">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Box maw="var(--content-width-md)" mx="auto">
                  <Title order={2} ta="center">Meet Our Team</Title>
                  <Text c="dimmed" size="xl" ta="center" mt="var(--space-lg)">
                    Expert arborists dedicated to delivering exceptional tree care services.
                  </Text>
                </Box>
              </motion.div>
            </Box>

            <Grid gutter={{ base: 'xl', sm: 'var(--space-xxl)' }}>
              {teamMembers.map((member, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card withBorder padding="var(--space-xl)" radius="md" className="hover-card">
                      <Stack align="center" gap="var(--space-xl)">
                        <ResponsiveImage
                          src={member.image}
                          alt={member.name}
                          height={320}
                          radius="md"
                        />
                        <Stack gap="var(--space-xs)" align="center">
                          <Text size="xl" fw={500} ta="center">{member.name}</Text>
                          <Text size="sm" c="dimmed" ta="center">{member.role}</Text>
                        </Stack>
                        <Group gap="xs" justify="center">
                          {member.certifications.map((cert, i) => (
                            <Badge key={i} color="green" variant="light">
                              {cert}
                            </Badge>
                          ))}
                        </Group>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default About;