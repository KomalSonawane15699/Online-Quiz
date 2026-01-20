const API_BASE_URL = 'http://localhost:8080/api/v1';

export const API_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}/register`,
  LOGIN: `${API_BASE_URL}/login`,
  QUIZZES: `${API_BASE_URL}/quiz`,
  QUIZZES_BY_TEACHER: `${API_BASE_URL}/quiz/by-teacher`,
  EVENTS: `${API_BASE_URL}/events`,
  TOP_STUDENTS: `${API_BASE_URL}/top10students`,
  // Add more endpoints here as needed
};

export default API_ENDPOINTS;
