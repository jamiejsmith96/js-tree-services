import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Container, Title, Text, Button, Stack, Card } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Container size="sm" py={80}>
          <Card withBorder padding="xl" radius="md">
            <Stack gap="xl" align="center">
              <Title order={2} c="red">Something went wrong</Title>
              <Text ta="center" c="dimmed">
                We apologize for the inconvenience. Please try refreshing the page or contact our support team if the problem persists.
              </Text>
              <Button
                onClick={this.handleReload}
                leftSection={<IconRefresh size={16} />}
                color="green"
              >
                Reload Page
              </Button>
            </Stack>
          </Card>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;