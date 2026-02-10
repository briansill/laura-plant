import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h4 className="themeFontColor textCenter">{this.props.fallback}</h4>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;