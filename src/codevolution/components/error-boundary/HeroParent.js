import React, { Component } from 'react';
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';

class HeroParent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default HeroParent;
