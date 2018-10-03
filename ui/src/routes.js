import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import App from './components/App';
import EnsureAuthenticated from './components/EnsureAuthenticated';
import Oauth from "./scenes/Oauth";
import SaveCredentials from "./scenes/SaveCredentials";
import Projects from './scenes/Projects/';
import Project from './scenes/Projects/components/Project'
import ProjectCreate from './scenes/Projects/components/ProjectCreate'

export default (
  <Route path="/" component={App}>
    <Route path="/success" component={SaveCredentials} />
    <Route path="/oauth" component={Oauth} />
    <IndexRedirect to="/projects" />
    <Route component={EnsureAuthenticated}>
      <Route path="/projects" name="My Projects" icon="playlist_add_check">
        <IndexRoute component={Projects} />
        <Route path="create" component={ProjectCreate} />
        <Route path=":pname" component={Project} />
      </Route>
    </Route>
  </Route>
);