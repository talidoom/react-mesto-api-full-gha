// export const baseUrl = " https://auth.nomoreparties.co";
export const baseUrl = "http://localhost/api"

function getJson(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function register(data) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(getJson);
}

export function authorize(data) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
