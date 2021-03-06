import { Box, Grid } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import PropTypes from 'prop-types'
import React from 'react'
import Product from './Product'

ProductList.propTypes = {
   data: PropTypes.array,
}

ProductList.defaultProps = {
   data: [],
}

function ProductList({ data }) {
   return (
      <Box style={{ margin: '0.5rem' }}>
         <Grid container>
            {data?.map((product) => (
               <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
               </Grid>
            ))}
         </Grid>
      </Box>
   )
}

export default ProductList
