import React from 'react';
import { Container, Title, Text, Paper, Grid, Button, Stack, Box, Group, Accordion } from '@mantine/core';
import { IconPhone, IconMail } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';

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
    <Container size="xl" py="var(--space-xl)">
      <Box className="section-decorator">
        <Title
          order={1}
          ta="center"
          style={{
            animation: 'fadeInUp 0.6s ease-out forwards',
            opacity: 0
          }}
        >
          Frequently Asked Questions
        </Title>
        <Text
          c="dimmed"
          size="xl"
          ta="center"
          mt="var(--space-md)"
          mb="var(--space-xl)"
          maw={800}
          mx="auto"
          style={{
            animation: 'fadeInUp 0.6s ease-out forwards',
            animationDelay: '0.1s',
            opacity: 0
          }}
        >
          Find answers to common questions about our tree surgery services, pricing, and coverage areas.
          If you can't find what you're looking for, we're here to help.
        </Text>
      </Box>
      
      <Grid gutter="var(--space-lg)">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Paper 
            shadow="xs" 
            p="var(--space-lg)" 
            radius="md"
            className="hover-card"
            style={{
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '0.2s',
              opacity: 0
            }}
          >
            <Stack gap="var(--space-md)">
              <Accordion
                key={location.key}
                styles={{
                  item: {
                    borderRadius: 'var(--mantine-radius-md)',
                    border: '1px solid var(--mantine-color-gray-3)',
                    marginBottom: 'var(--space-xs)',
                    backgroundColor: 'white',
                    overflow: 'hidden',
                    transition: 'all var(--transition-normal)',
                    '&:hover': {
                      borderColor: 'var(--mantine-color-green-filled)',
                    }
                  },
                  control: {
                    padding: 'var(--space-md)',
                    transition: 'all var(--transition-normal)',
                    '&:hover': {
                      backgroundColor: 'var(--background-light)',
                      color: 'var(--mantine-color-green-filled)'
                    }
                  },
                  content: {
                    padding: 'var(--space-md)',
                    paddingTop: 0,
                  }
                }}
              >
                {faqs.map((faq, index) => (
                  <Accordion.Item 
                    key={index} 
                    value={`faq-${index}`}
                    style={{
                      animation: `fadeInUp 0.6s ease-out forwards`,
                      animationDelay: `${(index + 1) * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <Accordion.Control>{faq.question}</Accordion.Control>
                    <Accordion.Panel>
                      <Text>{faq.answer}</Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Stack>
          </Paper>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper 
            p="var(--space-lg)" 
            radius="md" 
            className="hover-card"
            style={{
              backgroundColor: 'var(--background-light)',
              animation: 'fadeInUp 0.6s ease-out forwards',
              animationDelay: '0.3s',
              opacity: 0
            }}
          >
            <Stack gap="var(--space-md)">
              <Title order={3}>Still Have Questions?</Title>
              <Text>
                Can't find the answer you're looking for? Feel free to contact us directly. 
                Our team is always happy to help with any queries about our tree surgery services.
              </Text>
              
              <Stack gap="var(--space-xs)">
                <Button
                  component="a"
                  href="tel:+441234567890"
                  variant="light"
                  color="green"
                  leftSection={<IconPhone size={20} />}
                  fullWidth
                  className="interactive-element"
                >
                  01234 567890
                </Button>
                
                <Button
                  component="a"
                  href="mailto:info@jstreeservices.com"
                  variant="subtle"
                  color="green"
                  leftSection={<IconMail size={20} />}
                  fullWidth
                  className="interactive-element"
                >
                  info@jstreeservices.com
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default FAQ;