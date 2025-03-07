import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';

const tableHeadingStyle = {
  color: '#7a56d6',
  fontWeight: 'bold',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  mb: 2
};

const TransactionsTable = ({ transactions = [] }) => (
  <>
    <Typography variant="h6" sx={tableHeadingStyle}>
      Transaction Details
    </Typography>
    <TableContainer
      component={Paper}
      sx={{
        mb: 4,
        background: 'linear-gradient(135deg, rgba(122, 86, 214, 0.15) 0%, rgba(76, 48, 158, 0.25) 100%)',
        boxShadow: '0 8px 32px 0 rgba(122, 86, 214, 0.1)',
        border: '1px solid rgba(122, 86, 214, 0.2)',
      }}
      className="transactions-table"
    >
      <Table>
        <TableHead>
          <TableRow>
            {['ID', 'Image', 'Title', 'Description', 'Price', 'Category', 'Status'].map((heading) => (
              <TableCell key={heading} sx={{ color: '#7a56d6', fontWeight: 'bold' }}>
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <TableRow key={transaction.id || transaction._id}>
                <TableCell sx={{ color: '#fff' }}>{transaction.id || transaction._id || 'N/A'}</TableCell>
                <TableCell>
                  <img
                    src={transaction.image || 'https://via.placeholder.com/50'}
                    alt={transaction.title || 'No Image'}
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }}
                  />
                </TableCell>
                <TableCell sx={{ color: '#fff' }}>{transaction.title || 'N/A'}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{transaction.description || 'N/A'}</TableCell>
                <TableCell sx={{ color: '#fff' }}>₹{(transaction.price || 0).toLocaleString()}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{transaction.category || 'N/A'}</TableCell>
                <TableCell sx={{ color: '#fff' }}>
                  <span style={{ color: transaction.sold ? '#00C49F' : '#FF8042' }}>
                    {transaction.sold ? '✔ Sold' : '✖ Not Sold'}
                  </span>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center" sx={{ color: '#fff' }}>
                No transactions found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);

export default TransactionsTable;
