import React from 'react';
import { Container, Title, Accordion, Text, Paper, Grid } from '@mantine/core';

const FAQ: React.FC = () => {
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
    <Container size="xl">
      <Title order={1} mb="xl">Frequently Asked Questions</Title>
      
      <Grid>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Paper shadow="xs" p="xl" radius="md">
            <Accordion>
              {faqs.map((faq, index) => (
                <Accordion.Item key={index} value={`faq-${index}`}>
                  <Accordion.Control>{faq.question}</Accordion.Control>
                  <Accordion.Panel>
                    <Text>{faq.answer}</Text>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Paper>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper shadow="xs" p="xl" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
            <Title order={3} mb="md">Still Have Questions?</Title>
            <Text mb="xl">
              Can't find the answer you're looking for? Feel free to contact us directly. 
              Our team is always happy to help with any queries about our tree surgery services.
            </Text>
            <Text>
              Call us: <strong>01234 567890</strong><br />
              Email: <strong>info@jstreeservices.com</strong>
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default FAQ;