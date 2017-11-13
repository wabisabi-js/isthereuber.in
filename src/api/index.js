import axios from 'axios';

export default axios.create({
	baseURL: 'https://isthereuber-db.now.sh/cities',
	timeout: 2000
});
