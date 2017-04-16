import API from './api';
import Objective from './objective';
import User from './user';

export default class Accomplishment extends API {
	static prefix = '/Accomplishment';
	static _cache = {};

	static byObjective({ id: objectiveID }) {
		return this.search('ByObjective', { objectiveID });
	}

	static byUser({ id: userID }) {
		return this.search('ByUser', { userID });
	}

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

	toJSON() {
		return {
			id: this.id,
			objective_id: this.objective_id,
			user_id: this.user_id,
			points: this.points,
			proof: this.proof,
			timestamp: this.timestamp,
		};
	}
}
