# LaunchDarkly Demo Project

A demo application showcasing feature flag management using LaunchDarkly.

## Overview

This React application demonstrates LaunchDarkly's feature management capabilities including:

- Feature flag targeting
- A/B testing
- Safe feature rollouts
- Real-time flag updates

## Prerequisites

- Node.js v14 or higher
- npm or yarn
- LaunchDarkly account
- .env

 file with your LaunchDarkly client-side ID

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a .env

 file and add your LaunchDarkly client-side ID:
```bash
REACT_APP_LAUNCHDARKLY_CLIENTSIDE_ID=your-client-side-id
```

4. Start the development server:
```bash
npm start
```

## Features

- User authentication
- Feature flag controlled components
- Dashboard with analytics
- Dark/light theme support
- Responsive design

## Built With

- React
- Chakra UI
- LaunchDarkly React SDK
- React Router
- ApexCharts

## Scripts

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run lint:fix` - Fix linting issues

## License

MIT License - See LICENSE for details