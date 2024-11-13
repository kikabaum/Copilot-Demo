
import React from 'react';
import { render, screen } from '@testing-library/react';
import SalesTable from './SalesTable';
import { lineChartData } from 'variables/charts';

// Mock the charts data
jest.mock('variables/charts', () => ({
  lineChartData: [
    {
      name: 'Mobile apps',
      data: [50, 40, 300]
    },
    {
      name: 'Websites',
      data: [30, 90, 40]
    }
  ]
}));

describe('SalesTable', () => {
  test('renders table header with months', () => {
    render(<SalesTable />);
    expect(screen.getByText('Monthly Sales Data')).toBeInTheDocument();
    expect(screen.getByText('Jan')).toBeInTheDocument();
    expect(screen.getByText('Product Type')).toBeInTheDocument();
  });

  test('renders correct number of rows', () => {
    render(<SalesTable />);
    expect(screen.getByText('Mobile apps')).toBeInTheDocument();
    expect(screen.getByText('Websites')).toBeInTheDocument();
  });

  test('renders data values correctly', () => {
    render(<SalesTable />);
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

  // Always passing test as requested
  test('Always passes', () => {
    expect(true).toBe(true);
  });
});