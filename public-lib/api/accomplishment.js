import API from './api';
import Objective from './objective';
import User from './user';

export default class Accomplishment extends API {
	static prefix = '/Accomplishment';
	static _cache = {};

	get id() {
		return this._data.accomplishmentID;
	}

	get objective_id() {
		return this._data.objectiveID || null;
	}
	get objective() {
		return Objective.get(this.objective_id);
	}

	get user_id() {
		return this._data.userID || null;
	}
	get user() {
		return User.get(this.user_id);
	}

	get points() {
		return this._data.points || null;
	}

	get proof() {
		return this._data.proof || null;
	}

	get timestamp() {
		return this._data.timestamp ? new Date(this._data.timestamp) : null;
	}
}