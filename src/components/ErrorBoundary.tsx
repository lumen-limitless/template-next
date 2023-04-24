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
        <section className="flex h-full w-full flex-grow flex-col items-center justify-center gap-3">
          <h1 className="text-3xl">Something went wrong.</h1>
          <button
            className="text-bold inline-flex items-center justify-center gap-1 rounded-full bg-blue-500 p-3 text-white"
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
