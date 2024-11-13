
import React from 'react';
import { render, screen } from '@testing-library/react';
import SalesTable from './SalesTable';
import { lineChartData } from 'variables/charts';

describe('SalesTable', () => {
  it('renders the table with correct headers', () => {
    render(<SalesTable />);
    expect(screen.getByText('Mobile apps')).toBeInTheDocument();
    expect(screen.getByText('Websites')).toBeInTheDocument();
  });

  it('displays correct number of rows', () => {
    render(<SalesTable />);
    const rows = screen.getAllByRole('row');
    // +1 for header row
    expect(rows.length).toBe(lineChartData[0].data.length + 1);
  });

  it('shows the caption', () => {
    render(<SalesTable />);
    expect(screen.getByText('Monthly Sales Performance')).toBeInTheDocument();
  });
});