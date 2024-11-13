
import React from 'react';
import { render, screen } from '@testing-library/react';
import SalesTable from '../components/Tables/SalesTable';
import { lineChartData } from 'variables/charts';
import '@testing-library/jest-dom';

describe('SalesTable', () => {
  beforeEach(() => {
    render(<SalesTable />);
  });

  test('renders table headers with all months', () => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
      expect(screen.getByText(month)).toBeInTheDocument();
    });
  });

  test('renders product names from lineChartData', () => {
    lineChartData.forEach(row => {
      expect(screen.getByText(row.name)).toBeInTheDocument();
    });
  });

  test('renders correct number of data cells', () => {
    const dataCells = screen.getAllByRole('gridcell');
    // Number of cells should be (products × months) + product names
    const expectedCells = (lineChartData.length * 12) + lineChartData.length;
    expect(dataCells).toHaveLength(expectedCells);
  });

  test('renders with proper styling', () => {
    const table = screen.getByRole('table');
    expect(table).toHaveStyle({ borderCollapse: 'collapse' });
    expect(table.closest('div')).toHaveStyle({
      backgroundColor: 'white',
      borderRadius: '0.5rem'
    });
  });
});