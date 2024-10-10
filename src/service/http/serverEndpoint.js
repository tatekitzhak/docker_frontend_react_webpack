import { DOMAIN_NAME } from '../../../config/HTTP_URL_Settings';

export const ServerEndpoints = {
    WEB_SCRAPING: 'web-scraping',
    UPLOAD_FILE: 'transcribe',
    UOPLOAD_TEXT_CONTENT: 'read-text-content',
    FETCH_GATEGORY: 'api/category',
    SUBGATEGORY_TOPICS: 'api/category/subcategory/topics',
    CHANGE_PASSWORD: '/auth/changepassword/',
    LOGIN_USER: '/auth/login/',
    GET_SELF_PHOTOS_NEXT_PAGE: '/social/pictures/?page=',
    GET_SELF_BOARDS_NEXT_PAGE: '/social/boards/?page=',
    GET_HOME_POSTS_NEXT_PAGE: '/social/feed/?page=',
    GET_BOARDS_DETAILS: '/social/boardsdetails/',
    CREATE_BOARD: '/social/create-new-board/',
    CHECK_EMAIL: '/auth/checkemail/',
    SIGN_UP_USER: '/auth/register/',
    SEND_POST: '/social/create-new-post/',
    ADD_POST_TO_BOARD: '/social/addnewposttoboard/',
  };


export const baseUrl = `${DOMAIN_NAME}/${ServerEndpoints.UOPLOAD_TEXT_CONTENT}`;