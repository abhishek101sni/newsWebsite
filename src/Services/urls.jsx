const baseUrl = 'https://news-b4c3.onrender.com';

const getApiUrl = (endpoint) => baseUrl + endpoint;

export const GET_ARTICLES = getApiUrl('/api/article');



