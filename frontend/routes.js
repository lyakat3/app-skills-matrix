import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import UserApp from './components/user/App';
import AdminApp from './components/admin/App';
import { Dashboard as AdminDashboard } from './components/admin/Dashboard';
import { DashboardPage as UserDashboard } from './components/user/dashboard/Dashboard';
import { ManageUsersPage } from './components/admin/users/ManageUsersPage';
import { ManageMatricesPage } from './components/admin/matrices/ManageMatricesPage';
import { EvaluationPage } from './components/user/evaluations/EvaluationPage';
import { EvaluationCategoryPage } from './components/user/evaluations/evaluation/EvaluationCategoryPage';

export const adminRoutes = (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={AdminApp}>
      <IndexRoute component={AdminDashboard}/>
      <Route path="dashboard" name="Dashboard" component={AdminDashboard}/>
      <Route path="users" component={ManageUsersPage} />
      <Route path="matrices" component={ManageMatricesPage} />
    </Route>
  </Router>
);

export const userRoutes = (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={UserApp}>
      <IndexRoute component={UserDashboard}/>
      <Route path="dashboard" name="Dashboard" component={UserDashboard}/>
      <Route path="evaluations/:evaluationId" component={EvaluationPage} />
      <Route path="evaluations/:evaluationId/category/:category" component={EvaluationCategoryPage} />
    </Route>
  </Router>
);
