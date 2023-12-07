// export const baseUrl = " https://auth.nomoreparties.co";
export const baseUrl = "http://api.talidoom.students.nomoredomainsmonster.ru"

function getJson(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function register(data) {
  return fetch(`${baseUrl}/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzAxMjcyMzE0fQ.l9w-71hBtRut6yM_dbngU2Uhzn2XZVJLsi12s-8KJo4',
    },
    body: JSON.stringify(data),
  }).then(getJson);
}

export function authorize(data) {
  return fetch(`${baseUrl}/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzAxMjcyMzE0fQ.l9w-71hBtRut6yM_dbngU2Uhzn2XZVJLsi12s-8KJo4',
    },
    body: JSON.stringify(data),
  }).then(getJson);
}

export function getContent(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(getJson);
}
