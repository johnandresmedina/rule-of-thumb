import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12}>
          <Box my={2} paddingX={3}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
