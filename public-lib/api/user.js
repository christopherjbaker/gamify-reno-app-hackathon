import API from './api';

export default class User extends API {
	static prefix = '/User';
	static _cache = {};

	get id() {
		return this._data.userID;
	}

	get avatar() {
		return this._data.userPicture;
	}

	get rating() {
		return this._data.userRating;
	}
}
