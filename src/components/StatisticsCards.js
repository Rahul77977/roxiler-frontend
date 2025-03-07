import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const cardStyle = {
  background: 'linear-gradient(135deg, rgba(122, 86, 214, 0.15) 0%, rgba(76, 48, 158, 0.25) 100%)',
  boxShadow: '0 8px 32px 0 rgba(122, 86, 214, 0.1)',
  border: '1px solid rgba(122, 86, 214, 0.2)',
  color: '#fff'
};

const StatisticsCards = ({ statistics = {} }) => {
  const {
    totalSaleAmount = 0,
    totalSoldItems = 0,
    totalNotSoldItems = 0
  } = statistics;

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {[
        { title: 'Total Sale Amount', value: `₹${totalSaleAmount.toLocaleString()}` },
        { title: 'Total Sold Items', value: totalSoldItems },
        { title: 'Total Not Sold Items', value: totalNotSoldItems }
      ].map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: 14 }} gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatisticsCards;
