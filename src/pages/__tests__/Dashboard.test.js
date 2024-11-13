
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';
import { withLDProvider } from 'launchdarkly-react-client-sdk';

// Mock the LaunchDarkly SDK
jest.mock('launchdarkly-react-client-sdk', () => ({
  withLDProvider: jest.fn((Component) => Component),
  useFlags: jest.fn(() => ({ lineChart: true }))
}));

describe('Dashboard', () => {
  test('renders main dashboard title', () => {
    render(<Dashboard />);
    expect(screen.getByText("Aprendan como Mabel y Oscar se convirtieron en el equipo de ventas mas exitosos de GitHub LATAM")).toBeInTheDocument();
  });

  test('renders statistics cards', () => {
    render(<Dashboard />);
    expect(screen.getByText("Today's Moneys")).toBeInTheDocument();
    expect(screen.getByText("Today's Users")).toBeInTheDocument();
    expect(screen.getByText("New Clients")).toBeInTheDocument();
    expect(screen.getByText("Total Sales")).toBeInTheDocument();
  });

  test('renders charts', () => {
    render(<Dashboard />);
    expect(screen.getByText("Active Users")).toBeInTheDocument();
    expect(screen.getByText("Sales Overview")).toBeInTheDocument();
  });
});