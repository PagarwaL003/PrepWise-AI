export const BASE_URL = "http://localhost:4000";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/v1/auth/register",
    LOGIN: "/api/v1/auth/login",
    GET_PROFILE: "/api/v1/auth/profile",
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/v1/auth/upload-image",
  },
  SESSION: {
    CREATE: "/api/v1/sessions/create",
    GET_ALL: "/api/v1/sessions/my-sessions",
    GET_ONE: (id) => `/api/v1/sessions/${id}`,
    DELETE: (id) => `/api/v1/sessions/${id}`,
  },
  QUESTION: {
    ADD_TO_SESSION: "/api/v1/questions/add",
    PIN: (id) => `/api/v1/questions/${id}/pin`,
    UPDATE_NOTE: (id) => `/api/v1/questions/${id}/note`,
    DELETE: (id) => `/api/v1/questions/${id}`,
  },
  AI: {
    GENERATE_QUESTIONS: "/api/v1/ai/generate-questions",
    GENERATE_EXPLANATION: "/api/v1/ai/generate-explanation",
  },
};
