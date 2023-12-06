class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }

  _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
  }

    getCards() {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._checkResponse);
    }

    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._checkResponse);
    }

    setUserInfo(name, status) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: status,
        }),
      }).then(this._checkResponse);
    }

    createCard(name, link) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link,
        }),
      }).then(this._checkResponse);
    }

    deleteCard(id) {
      return fetch(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then(this._checkResponse);
    }

    toggleLike(id, like) {
      return fetch(`${this._baseUrl}/cards/${id}/likes/`, {
        method: like ? 'DELETE' : 'PUT',
        headers: this._headers,
      }).then(this._checkResponse);
    }

    setUserAvatar(avatar) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar,
        }),
      }).then(this._checkResponse);
    }
  }


  const api = new Api({
    baseUrl: 'http://api.talidoom.students.nomoredomainsmonster.ru',
    headers: {
      authorization: '54d35243-1fca-49b5-b527-f8e0d850da93',
      // authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzAxMjcyMzE0fQ.l9w-71hBtRut6yM_dbngU2Uhzn2XZVJLsi12s-8KJo4',
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': "*"
    },
  });

  export default api;

