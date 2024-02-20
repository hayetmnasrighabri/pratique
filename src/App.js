import React from 'react'
import Products from './components/products'
import { ErrorBoundary } from 'react-error-boundary'
function App() {
  return (
    <div>
      <ErrorBoundary>
      <Products product="orange"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Products product="banane"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Products product="apple"/>
      </ErrorBoundary>
    </div>
  )
}

export default App
