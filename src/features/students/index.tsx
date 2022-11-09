import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEditPage from './pages/AddEditPage';
import ListPage from './pages/ListPage';

export default function StudentFeature() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path} exact>
        <ListPage></ListPage>
      </Route>
      <Route path={`${match.path}/add`}>
        <AddEditPage></AddEditPage>
      </Route>
      <Route path={`${match.path}/:student`}>
        <AddEditPage></AddEditPage>
      </Route>
    </Switch>
  );
}
