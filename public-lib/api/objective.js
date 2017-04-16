import API from './api';

export default class Objective extends API {
	static prefix = '/Objective';
	static _cache = {};

	get id() {
		return this._data.id;
	}

	get title() {
		return this._data.title || null;
	}

	get description() {
		return this._data.description || null;
	}

	get points() {
		return this._data.basePoints || null;
	}

	get location() {
		return this._data.location ? {
			lat: this._data.location.lat,
			lng: this._data.location.long,
		} : null;
	}
}
