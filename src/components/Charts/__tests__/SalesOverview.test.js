
import React from 'react';
import { render, screen } from '@testing-library/react';
import SalesOverview from '../SalesOverview';

describe('SalesOverview', () => {
  const mockProps = {
    title: 'Sales Overview',
    percentage: 27,
    chart: <div data-testid="mock-chart" />
  };

  test('renders with correct title and percentage', () => {
    render(<SalesOverview {...mockProps} />);
    expect(screen.getByText('Sales Overview')).toBeInTheDocument();
    expect(screen.getByText('27% more')).toBeInTheDocument();
  });

  test('displays chart component', () => {
    render(<SalesOverview {...mockProps} />);
    expect(screen.getByTestId('mock-chart')).toBeInTheDocument();
  });

  test('shows positive percentage in green', () => {
    render(<SalesOverview {...mockProps} />);
    const percentageText = screen.getByText('27% more');
    expect(percentageText).toHaveStyle({ color: 'green.400' });
  });

  test('shows negative percentage in red', () => {
    render(<SalesOverview {...{ ...mockProps, percentage: -27 }} />);
    const percentageText = screen.getByText('-27% more');
    expect(percentageText).toHaveStyle({ color: 'red.400' });
  });
});