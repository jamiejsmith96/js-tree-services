import * as React from 'react';
import { Container, Title, Text, Button, Stack, Card } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  private handleReload = (): void => {
    window.location.reload();
  };

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <Container size="sm" py={80}>
          <Card withBorder p="xl" radius="md">
            <Stack gap="xl" align="center">
              <Title order={2} c="red">Something went wrong</Title>
              <Text ta="center" c="dimmed">
                We apologize for the inconvenience. Please try refreshing the page.
              </Text>
              {this.state.error && (
                <Text size="sm" c="dimmed" style={{ wordBreak: 'break-word' }}>
                  {this.state.error.toString()}
                </Text>
              )}
              <Button
                onClick={this.handleReload}
                leftSection={<IconRefresh size={16} />}
                variant="light"
                color="blue"
              >
                Refresh Page
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