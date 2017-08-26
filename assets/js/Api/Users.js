import Axios from 'axios'

export default class UsersApi {

	static get() {
		return Axios.get('/api/users.php').then(response => {
			return response.data;
		}).catch(error => {
			return error;
		});
	}

}