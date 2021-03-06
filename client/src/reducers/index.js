import { combineReducers } from "redux";
import FlightsReducer from "./flights_reducer";
import LanesReducer from "./lanes_reducer";
import AirplanesReducer from "./airplanes_reducer";
import AirlinesReducer from "./airlines_reducer";
import UsersReducer from "./users_reducer";
import auth from "./auth_reducer";
import TicketReducer from "./ticket_reducer";
import LaneMaxCountReducer from "./lane_max_count_reducer"

export default combineReducers({
	flights: FlightsReducer,
	lanes: LanesReducer,
  airplanes: AirplanesReducer,
  airlines: AirlinesReducer,
	users: UsersReducer,
	auth,
  tickets: TicketReducer,
  laneMaxCount: LaneMaxCountReducer
});