import React from "react";
import Header from "./Component/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import UseCase from "./Component/UseCase";
import Task from "./Component/Task";
import { GlobalProvider } from "./ContextAPI/GlobalContext";
import EditPage from "./Component/EditPage";
import {v4 as uuid} from "uuid"
 

function App() {
	return (
		<GlobalProvider>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/usecase" component={UseCase} />

					<Route exact path="/task" component={Task} />

					<Route exact path="/task/:id"  component={EditPage} />
				</Switch>
			</Router>
		</GlobalProvider>
	
	);
}

export default App;
