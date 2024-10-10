/**
 * https://stackoverflow.com/questions/63710726/what-is-the-best-way-to-use-a-different-api-url-in-production-for-a-create-react
 * https://joshuapleduc.medium.com/use-constants-to-set-backend-url-for-both-production-and-development-904ca269d48f
 *  */ 
var constants = {
    END_POINT: 'api/category',
    HOST: 'localhost',
    PORT: '8000' //|| ENV.REACT_APP_PORT
}

//  LOCALHOST HTTP API ENV (development)

const LOCALHOST_URL='http://localhost'
const PORT="4000"

//  SERVER HTTP API ENV
const SERVER_URL='http://18.117.15.244'


//  TESTING HTTP API ENV
const REACT_APP_API_URL='localhost:4000'


let BASE_URI = '';
let MEDIA_SERVER_VAL = '';
let FRONTEND_SERVER_VAL = ''; 

switch ('ENV.NODE_ENV_') {
    case 'development':
        BASE_URI = 'localhost';//`${ENV.LOCALHOST}`;
        MEDIA_SERVER_VAL = 'http://localhost:8000';
        FRONTEND_SERVER_VAL = 'http://localhost:8000';
        break;
    case 'production':
        // BASE_URI = `${ENV.CONVERTIBLE_RESOURCE}`;
        // MEDIA_SERVER_VAL = ENV.API_SERVER;
        // FRONTEND_SERVER_VAL = ENV.API_SERVER;
        break;
    case 'testing':
        // BASE_URI = `http://18.216.178.71:${constants.PORT}`;
        // MEDIA_SERVER_VAL = ENV.API_SERVER;
        // FRONTEND_SERVER_VAL = ENV.API_SERVER;
        break;
    default:
        BASE_URI = 'http://localhost:8000';
        MEDIA_SERVER_VAL = 'http://localhost:8000';
        FRONTEND_SERVER_VAL = 'http://localhost:3000';
        break;
}

export const DOMAIN_NAME = BASE_URI;
export const MEDIA_SERVER = MEDIA_SERVER_VAL;
export const FRONTEND_SERVER = FRONTEND_SERVER_VAL;