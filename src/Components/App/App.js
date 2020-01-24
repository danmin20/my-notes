import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Query } from "react-apollo";
import Notes from "../../Routes/Notes";
import Note from "../../Routes/Note";
import Edit from "../../Routes/Edit";
import Add from "../../Routes/Add";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/my-notes/"} component={Notes} />
          <Route path={"/my-notes/note/:id"} component={Note} />
          <Route path={"/my-notes/add"} component={Add} />
          <Route path={"/my-notes/edit/:id"} component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
