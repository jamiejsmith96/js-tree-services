import React from 'react';
import { Container, Title, Text, Card, Grid, Button, Stack, Box } from '@mantine/core';
import { IconPhone, IconMail } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Accordion } from '@mantine/core';

const FAQ: React.FC = () => {
  const location = useLocation();
  const faqs = [
    {
      question: "What areas do you cover?",
      answer: "We primarily serve Aldershot, Farnborough, Fleet, and surrounding areas in Hampshire. Contact us to check if we cover your specific location."
    },
    {
      question: "Are you fully insured?",
      answer: "Yes, we carry comprehensive public liability insurance up to £5 million and employer's liability insurance. We're happy to provide insurance documentation upon request."
    },
    {
      question: "How much does tree removal cost?",
      answer: "The cost varies depending on the size, location, and condition of the tree. We provide free, no-obligation quotes after assessing the job in person."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide 24/7 emergency tree surgery services for dangerous or fallen trees. Contact our emergency hotline for immediate assistance."
    },
    {
      question: "What qualifications do your tree surgeons have?",
      answer: "All our tree surgeons are NPTC qualified and hold relevant certificates in chainsaw use, aerial rescue, and tree felling. We regularly update our training to maintain the highest standards."
    },
    {
      question: "Do I need planning permission to remove a tree?",
      answer: "It depends on whether the tree is protected by a Tree Preservation Order (TPO) or located in a Conservation Area. We can help check this and assist with any necessary applications."
    }
  ];

  return (
    <>
      {/* Extra padding for mobile header */}
      <Box h="var(--space-xl)" hiddenFrom="sm" />
      
      <Container size="xl" py="var(--space-xxxl)">
        <Stack gap="var(--space-xxxl)">
          <Box className="section-decorator">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title order={1} ta="center">Frequently Asked Questions</Title>
              <Text
                c="dimmed"
                size="xl"
                ta="center"
                mt="var(--space-lg)"
                maw="var(--content-width-md)"
                mx="auto"
              >
                Find answers to common questions about our tree surgery services, pricing, and coverage areas.
                If you can't find what you're looking for, we're here to help.
              </Text>
            </motion.div>
          </Box>
          
          <Grid gutter={{ base: 'xl', sm: 'var(--space-xl)' }}>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card 
                  withBorder
                  padding="var(--space-xl)" 
                  radius="md"
                  className="hover-card"
                >
                  <Accordion
                    key={location.key}
                    variant="separated"
                    radius="md"
                    defaultValue="faq-0"
                    styles={{
                      item: {
                        border: '1px solid var(--mantine-color-green-2)',
                        backgroundColor: 'white',
                        borderRadius: 'var(--mantine-radius-md)',
                        overflow: 'hidden',
                        '&[data-active]': {
                          backgroundColor: 'var(--mantine-color-green-0)'
                        }
                      },
                      control: {
                        padding: 'var(--space-lg)',
                        '&:hover': {
                          backgroundColor: 'var(--mantine-color-green-0)'
                        }
                      },
                      chevron: {
                        color: 'var(--mantine-color-green-filled)'
                      },
                      panel: {
                        padding: 'var(--space-lg)',
                        paddingTop: 0
                      }
                    }}
                  >
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Accordion.Item value={`faq-${index}`}>
                          <Accordion.Control>
                            <Text fw={500}>{faq.question}</Text>
                          </Accordion.Control>
                          <Accordion.Panel>
                            <Text c="dimmed" size="lg">{faq.answer}</Text>
                          </Accordion.Panel>
                        </Accordion.Item>
                      </motion.div>
                    ))}
                  </Accordion>
                </Card>
              </motion.div>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card 
                  withBorder
                  padding="var(--space-xl)" 
                  radius="md" 
                  className="hover-card"
                  bg="var(--mantine-color-green-0)"
                >
                  <Stack gap="var(--space-xl)">
                    <Stack gap="var(--space-md)">
                      <Title order={3} ta="center">Still Have Questions?</Title>
                      <Text ta="center" size="lg">
                        Can't find the answer you're looking for? Feel free to contact us directly. 
                        Our team is always happy to help with any queries about our tree surgery services.
                      </Text>
                    </Stack>
                    
                    <Stack gap="var(--space-md)">
                      <Button
                        component="a"
                        href="tel:+441234567890"
                        size="lg"
                        color="green"
                        leftSection={<IconPhone size={20} />}
                        className="interactive-element"
                      >
                        Call Us
                      </Button>
                      
                      <Button
                        component="a"
                        href="mailto:info@jstreeservices.com"
                        variant="light"
                        color="green"
                        size="lg"
                        leftSection={<IconMail size={20} />}
                        className="interactive-element"
                      >
                        Email Us
                      </Button>
                    </Stack>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default FAQ;