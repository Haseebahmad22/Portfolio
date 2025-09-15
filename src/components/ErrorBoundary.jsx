import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiRefreshCw, FiHome, FiMail } from 'react-icons/fi';
import { media, typography } from '../utils/responsive';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Generate a unique error ID for tracking
    const errorId = `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.setState({
      error,
      errorInfo,
      errorId
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error ID:', errorId);
      console.groupEnd();
    }

    // In production, you could send this to an error reporting service
    // Example: Sentry, LogRocket, etc.
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo, errorId);
    }
  }

  reportError = (error, errorInfo, errorId) => {
    // Example error reporting (implement with your preferred service)
    const errorReport = {
      id: errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Send to error reporting service
    console.log('Error Report:', errorReport);
  };

  handleRefresh = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null 
    });
    window.location.reload();
  };

  handleGoHome = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null 
    });
    window.location.href = '/';
  };

  handleReportIssue = () => {
    const subject = encodeURIComponent(`Portfolio Error Report - ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error ID: ${this.state.errorId}
Error Message: ${this.state.error?.message || 'Unknown error'}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}

Please describe what you were doing when this error occurred:
[Your description here]
    `);
    
    window.open(`mailto:your-email@example.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback {...this.state} {...this.props} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ error, errorInfo, errorId, handleRefresh, handleGoHome, handleReportIssue }) => {
  return (
    <ErrorContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundPattern />
      
      <ErrorContent
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <ErrorIcon
          animate={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <FiAlertTriangle />
        </ErrorIcon>

        <ErrorTitle>Oops! Something went wrong</ErrorTitle>
        
        <ErrorMessage>
          We're sorry, but something unexpected happened. Don't worry, 
          it's not your fault and we're working to fix these issues.
        </ErrorMessage>

        {process.env.NODE_ENV === 'development' && (
          <ErrorDetails>
            <DetailsTitle>Error Details (Development Mode)</DetailsTitle>
            <ErrorId>Error ID: {errorId}</ErrorId>
            <ErrorText>{error?.message}</ErrorText>
            {error?.stack && (
              <StackTrace>
                <pre>{error.stack}</pre>
              </StackTrace>
            )}
          </ErrorDetails>
        )}

        <ActionButtons>
          <ActionButton 
            onClick={() => window.location.reload()}
            $primary
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiRefreshCw />
            Try Again
          </ActionButton>
          
          <ActionButton 
            onClick={() => window.location.href = '/'}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiHome />
            Go Home
          </ActionButton>
          
          <ActionButton 
            onClick={() => {
              const subject = encodeURIComponent(`Portfolio Error Report - ${errorId}`);
              const body = encodeURIComponent(`Error ID: ${errorId}\nURL: ${window.location.href}`);
              window.open(`mailto:contact@yourportfolio.com?subject=${subject}&body=${body}`);
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail />
            Report Issue
          </ActionButton>
        </ActionButtons>

        <FooterText>
          If this problem persists, please contact support with error ID: 
          <strong> {errorId}</strong>
        </FooterText>
      </ErrorContent>
    </ErrorContainer>
  );
};

// Styled Components
const pulse = keyframes`
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const ErrorContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;

  ${media.mobile} {
    padding: 1rem;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, var(--accent-primary)10 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, var(--accent-secondary)10 0%, transparent 50%);
  animation: ${pulse} 8s ease-in-out infinite;
`;

const ErrorContent = styled(motion.div)`
  max-width: 600px;
  text-align: center;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-primary);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  z-index: 2;

  ${media.tablet} {
    padding: 2rem;
    border-radius: 20px;
  }

  ${media.mobile} {
    padding: 1.5rem;
    border-radius: 16px;
    margin: 0 -0.5rem;
  }
`;

const ErrorIcon = styled(motion.div)`
  font-size: 4rem;
  color: #ff6b6b;
  margin-bottom: 2rem;
  animation: ${float} 3s ease-in-out infinite;

  ${media.mobile} {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const ErrorTitle = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;

  ${media.mobile} {
    font-size: ${typography?.mobile?.h3 || 'clamp(1.25rem, 5vw, 1.75rem)'};
    margin-bottom: 0.75rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;

  ${media.mobile} {
    font-size: ${typography?.mobile?.body || '1rem'};
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

const ErrorDetails = styled.div`
  text-align: left;
  background: var(--bg-secondary);
  border: 1px solid var(--border-secondary);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  max-height: 300px;
  overflow-y: auto;

  ${media.mobile} {
    padding: 1rem;
    margin: 1.5rem 0;
    border-radius: 8px;
  }
`;

const DetailsTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 1rem;

  ${media.mobile} {
    font-size: ${typography?.mobile?.body || '1rem'};
    margin-bottom: 0.75rem;
  }
`;

const ErrorId = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: var(--accent-primary);
  background: var(--bg-tertiary);
  padding: 0.5rem;
  border-radius: 6px;
  margin-bottom: 1rem;

  ${media.mobile} {
    font-size: ${typography?.mobile?.small || '0.875rem'};
    padding: 0.4rem;
  }
`;

const ErrorText = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #ff6b6b;
  background: var(--bg-tertiary);
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  word-break: break-word;

  ${media.mobile} {
    font-size: ${typography?.mobile?.small || '0.875rem'};
    padding: 0.75rem;
  }
`;

const StackTrace = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: var(--text-secondary);
  background: var(--bg-tertiary);
  padding: 1rem;
  border-radius: 6px;
  max-height: 150px;
  overflow-y: auto;

  pre {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
  }

  ${media.mobile} {
    font-size: 0.7rem;
    padding: 0.75rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  ${media.mobile} {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
`;

const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${props => props.$primary ? 'var(--gradient-accent)' : 'var(--bg-tertiary)'};
  color: ${props => props.$primary ? 'white' : 'var(--text-primary)'};
  border: 1px solid ${props => props.$primary ? 'transparent' : 'var(--border-primary)'};
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  ${media.mobile} {
    padding: 0.75rem 1.5rem;
    font-size: ${typography?.mobile?.small || '0.875rem'};
    gap: 0.4rem;
  }

  &:hover {
    background: ${props => props.$primary ? 'var(--accent-primary)' : 'var(--bg-secondary)'};
    border-color: var(--accent-primary);
    box-shadow: 0 10px 30px var(--shadow-primary);
  }

  svg {
    font-size: 1.1rem;

    ${media.mobile} {
      font-size: 1rem;
    }
  }
`;

const FooterText = styled.p`
  font-size: clamp(0.8rem, 2.5vw, 0.9rem);
  color: var(--text-secondary);
  margin: 0;

  ${media.mobile} {
    font-size: ${typography?.mobile?.small || '0.875rem'};
  }

  strong {
    color: var(--accent-primary);
    font-family: 'Courier New', monospace;
  }
`;

export default ErrorBoundary;
