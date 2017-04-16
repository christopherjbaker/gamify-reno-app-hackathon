import API from './api';
import Accomplishment from './accomplishment';

export default class User extends API {
	static prefix = '/User';
	static _cache = {};

	get id() {
		return this._data.userID;
	}

	get avatar() {
		return this._data.userPicture;
	}

	get points() {
		return this._data.userRating;
	}

	get level() {
		return this._data.userLevel || null;
	}

	getAccomplishments() {
		return Accomplishment.byUser({
			id: this.id,
		});
	}

	toJSON() {
		return {
			id: this.id,
			avatar: this.avatar,
			points: this.points,
			level: this.level,
		};
	}
}
