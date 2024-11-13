import React from 'react';
import { render, screen } from '@testing-library/react';
import SalesTable from './SalesTable';
import { lineChartData, lineChartOptions } from 'variables/charts';

describe('SalesTable', () => {
  it('renders the table with correct headers', () => {
    render(<SalesTable />);
    const firstMonth = new Date(lineChartOptions.xaxis.categories[0])
      .toLocaleString('default', { month: 'short' });
    expect(screen.getByText(firstMonth)).toBeInTheDocument();
  });

  it('displays correct number of rows', () => {
    render(<SalesTable />);
    const rows = screen.getAllByRole('row');
    // +1 for header row
    expect(rows.length).toBe(lineChartData.length + 1);
  });

  it('shows product names', () => {
    render(<SalesTable />);
    expect(screen.getByText('Mobile apps')).toBeInTheDocument();
    expect(screen.getByText('Websites')).toBeInTheDocument();
  });
});