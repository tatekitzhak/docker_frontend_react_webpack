/**
 * https://stackoverflow.com/questions/63710726/what-is-the-best-way-to-use-a-different-api-url-in-production-for-a-create-react
 * https://joshuapleduc.medium.com/use-constants-to-set-backend-url-for-both-production-and-development-904ca269d48f
 *  */ 
var constants = {
    END_POINT: 'api/category',
    HOST: 'localhost',
    PORT: '8000' || process.env.REACT_APP_PORT
}
/* 
const prod = {
	url: {
		BASE_URL: 'https://my-heroku-app.herokuapp.com/api/v1/',
		AUTH_URL: 'https://my-heroku-app.herokuapp.com/',
	},
};

const dev = {
	url: {
		BASE_URL: 'http://localhost:3090/api/v1/',
		AUTH_URL: 'http://localhost:3090/',
	},
};

export const config = process.env.NODE_ENV_ === 'development' ? dev : prod;
 */
let BASE_URI = '';
let MEDIA_SERVER_VAL = '';
let FRONTEND_SERVER_VAL = ''; 

switch (process.env.NODE_ENV_) {
    case 'development':
        BASE_URI = `http://localhost:${constants.PORT}/${constants.END_POINT}`;
        MEDIA_SERVER_VAL = 'http://localhost:8000';
        FRONTEND_SERVER_VAL = 'http://localhost:8000';
        break;
    case 'production':
        BASE_URI = `http://18.216.178.71/${constants.END_POINT}`;
        MEDIA_SERVER_VAL = process.env.API_SERVER;
        FRONTEND_SERVER_VAL = process.env.API_SERVER;
        break;
    default:
        BASE_URI = 'http://localhost:8000';
        MEDIA_SERVER_VAL = 'http://localhost:8000';
        FRONTEND_SERVER_VAL = 'http://localhost:3000';
        break;
}

export const API_URL = BASE_URI;
export const MEDIA_SERVER = MEDIA_SERVER_VAL;
export const FRONTEND_SERVER = FRONTEND_SERVER_VAL;

export const SESSION_DURATION = 5*3600*1000;