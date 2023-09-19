export const HOST = 'http://localhost:3005';
const AUTHROUTE = `${HOST}/api/auth`;
const MESSAGES_ROUTE = `${HOST}/api/messages`;


export const CHECKUSER = `${AUTHROUTE}/check-user`;
export const ONBOARD_USER_ROUTE = `${AUTHROUTE}/onboard-user`;
export const GET_ALL_CONTACTS = `${AUTHROUTE}/get-contacts`;


export const ADD_MESSAGE_ROUTE = `${MESSAGES_ROUTE}/add-message`
export const GET_ALL_MESSAGES = `${MESSAGES_ROUTE}/get-message`;