/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Flights from "./components/Flights";
import Flight from "./components/Flight";
import NewFlightForm from "./components/NewFlightForm";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import SearchResult from "./components/SearchResult";

class App extends React.Component {
	render() {
		return (
			<div className="App" style={{margin:"20px"}}>
				<Router>
					<React.Fragment>
						<SearchForm/>
						<div className="nav">
							<Link to="/flights" style={{marginRight:"16px"}} className="link-flights">Flights</Link>
							<Link to="/signup" style={{marginRight:"16px"}} className="link-signup">Sign Up</Link>
							<Link to="#" style={{marginRight:"16px"}} className="link-profile">Profile</Link>
						</div>
						<Switch>
							<Route exact path = "/flights" render ={()=> <Flights/>} />
							<Route exact path = "/flights/:flightId" render ={({match, history})=> <Flight match={match} history={history}/>} />
							<Route exact path = "/signup" render ={({history})=> <SignUpForm history={history}/>} />
							<Route exact path = "/newflight" render={({history})=>  <NewFlightForm history={history}/>} />
							<Route exact path = "/search/:search_url" render={({match, history})=> <SearchResult match={match} history={history}/>} />
							<Route exact path = "/" render={()=>  <Redirect to="/flights" />} />
							<Route path="*" render={() => <NotFound/>} />
						</Switch>
					</React.Fragment>
				</Router>
			</div>
		);
	}
}

export default App;
