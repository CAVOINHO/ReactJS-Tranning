import { Box } from '@material-ui/core'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ListPage from '../../features/Product/Pages/ListPage'
import DetailPage from './Pages/DetailPage'

ProductFeature.propTypes = {}

function ProductFeature(props) {
   const match = useRouteMatch()
   return (
      <Box pt={4}>
         <Switch>
            <Route path={match.url} exact component={ListPage} />
            <Route path={`${match.url}/:productId`} component={DetailPage} />
         </Switch>
      </Box>
   )
}

export default ProductFeature
