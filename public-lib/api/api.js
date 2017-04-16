import qs from 'querystring';

const uri = 'https://gamifyreno.azurewebsites.net';

export default class API {
	static prefix = '';

	static async request(method = 'GET', url, query, body, headers = {}) {
		method = method.toUpperCase();

		if (query && typeof query === 'object') {
			for (let key in query) {
				if (typeof query[key] === 'undefined') {
					delete query[key];
				}
			}

			if (Object.keys(query).length) {
				query = `?${ qs.stringify(query) }`;
			}
			else {
				query = null;
			}
		}

		if (typeof query !== 'string') {
			query = '';
		}

		if (this._cache) {
			if (!this._cache[method]) {
				this._cache[method] = {};
			}

			if (!this._cache[method][url]) {
				this._cache[method][url] = {};
			}

			if (this._cache[method][url][query]) {
				return this._cache[method][url][query];
			}
		}

		headers.Accept = 'application/json';
		if (typeof body !== 'undefined') {
			headers['Content-Type'] = 'application/json';
			body = JSON.stringify(body);
		}

		let result = await fetch(`${ uri }${ this.prefix }${ url }${ query }`, { method, headers, body })
			.then(async (response) => {
				if (response.status >= 300 || response.status < 100) {
					let error = new Error(response.statusText);
					error.response = await response.json();

					throw error;
				}

				return response.json();
			})
		;

		if (result && this._cache) {
			this._cache[method][url][query] = result;
		}

		return result;
	}

	static async get(id) {
		if (!id) {
			return null;
		}

		let result = this.request('GET', 'ById', { id });

		return new this(result);
	}

	static async search(path, query) {
		let results = this.request('GET', path, query);

		return results.map(result => new this(result));
	}

	constructor(data) {
		this._data = data;
	}
}
