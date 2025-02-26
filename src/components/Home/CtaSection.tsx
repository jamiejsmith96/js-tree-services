import React from 'react';
import { Box, Container, Grid, Card, Stack, Title, Text, Button, Group, Badge } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconPhone, IconMailFilled, IconClock24, IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export const CtaSection: React.FC = () => {
  return (
    <Box py="var(--space-xl)">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Grid gutter="var(--space-lg)" style={{ alignItems: 'stretch' }}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card 
                withBorder 
                padding="var(--space-xl)"
                radius="md"
                className="hover-card"
                bg="var(--mantine-color-red-0)"
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <Stack style={{ height: '100%' }}>
                  <Box style={{ flex: 1 }}>
                    <Badge 
                      color="red" 
                      size="lg" 
                      radius="sm" 
                      variant="filled"
                      mb="var(--space-sm)"
                    >
                      24/7 Emergency Service
                    </Badge>
                    <Title order={2} style={{ color: 'var(--mantine-color-red-9)' }}>
                      Need Emergency Assistance?
                    </Title>
                    <Text size="lg" mt="xs">
                      Our emergency team is available 24/7 for urgent tree care situations 
                      across all our service areas.
                    </Text>

                    <Box 
                      style={{ 
                        borderTop: '1px solid var(--mantine-color-red-2)',
                        paddingTop: 'var(--space-md)',
                        marginTop: 'var(--space-xl)'
                      }}
                    >
                      <Group gap="xs" mb="xs">
                        <IconClock24 size={18} style={{ color: 'var(--mantine-color-red-7)' }} />
                        <Text fw={500}>Average Response Time: 20-30 minutes</Text>
                      </Group>
                      <Text size="sm" c="dimmed">
                        We prioritize emergency calls and aim to reach you as quickly as possible
                      </Text>
                    </Box>
                  </Box>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      component="a"
                      href="tel:+441234567890"
                      size="xl"
                      color="red"
                      fullWidth
                      leftSection={<IconPhone size={20} />}
                      rightSection={<IconArrowUpRight size={20} />}
                      className="interactive-element"
                      styles={{
                        root: {
                          boxShadow: '0 4px 12px rgba(225, 45, 57, 0.2)'
                        }
                      }}
                    >
                      Call Emergency Hotline
                    </Button>
                  </motion.div>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card 
                withBorder 
                padding="var(--space-xl)"
                radius="md"
                className="hover-card"
                bg="var(--mantine-color-green-0)"
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <Stack style={{ height: '100%' }}>
                  <Box style={{ flex: 1 }}>
                    <Badge 
                      color="green" 
                      size="lg" 
                      radius="sm" 
                      variant="filled"
                      mb="var(--space-sm)"
                    >
                      Free Consultation
                    </Badge>
                    <Title order={2} style={{ color: 'var(--mantine-color-green-9)' }}>
                      Get a Free Quote
                    </Title>
                    <Text size="lg" mt="xs">
                      Not sure what you need? Contact us for a free consultation 
                      and detailed quote for your tree care requirements.
                    </Text>

                    <Box 
                      style={{ 
                        borderTop: '1px solid var(--mantine-color-green-2)', 
                        paddingTop: 'var(--space-md)',
                        marginTop: 'var(--space-xl)'
                      }}
                    >
                      <Stack gap="xs">
                        <Text fw={500}>What's included:</Text>
                        <Group gap="xs">
                          <Box 
                            style={{ 
                              width: 6, 
                              height: 6, 
                              borderRadius: '50%', 
                              backgroundColor: 'var(--mantine-color-green-6)' 
                            }} 
                          />
                          <Text size="sm">Site assessment and consultation</Text>
                        </Group>
                        <Group gap="xs">
                          <Box 
                            style={{ 
                              width: 6, 
                              height: 6, 
                              borderRadius: '50%', 
                              backgroundColor: 'var(--mantine-color-green-6)' 
                            }} 
                          />
                          <Text size="sm">Detailed cost breakdown</Text>
                        </Group>
                        <Group gap="xs">
                          <Box 
                            style={{ 
                              width: 6, 
                              height: 6, 
                              borderRadius: '50%', 
                              backgroundColor: 'var(--mantine-color-green-6)' 
                            }} 
                          />
                          <Text size="sm">Professional recommendations</Text>
                        </Group>
                      </Stack>
                    </Box>
                  </Box>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      component={Link}
                      to="/contact"
                      size="xl"
                      color="green"
                      fullWidth
                      leftSection={<IconMailFilled size={20} />}
                      rightSection={<IconArrowUpRight size={20} />}
                      className="interactive-element"
                      styles={{
                        root: {
                          boxShadow: '0 4px 12px rgba(34, 139, 34, 0.2)'
                        }
                      }}
                    >
                      Request Free Quote
                    </Button>
                  </motion.div>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};