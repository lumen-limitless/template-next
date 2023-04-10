//error boundary component for react and next js in typescript

import React from 'react'

interface Props {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <section className="gap-3">
          <h1 className="text-3xl">Something went wrong.</h1>
          <button
            className="bg-blue rounded-full p-3"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </section>
      )
    }

    return this.props.children
  }
}
