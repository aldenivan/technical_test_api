	# Technical Test

	Essa api permite que o usuário se cadastre na plataforma, faça o login na mesma, atualize suas informações veja outros usuários e delete sua conta caso necessário.

	## Documentação da API

	### As rotas abaixo não necessitam de autorização

	#### ROTA USERS

	#### Criar um perfil para o usuário

	```http
	  POST /api/users/register
	```

	Formato da requisição:

	```js
	  Body:
		{
		   "fullName": "Aldenivan Junior",
       "cpf": "00000000000",
       "password": "Juni@r10",
       "genre": "male"	
		}
	```

	Formato da resposta: 201 CREATED

	```js
	  Body:
		{
      "fullName": "Aldenivan Junior",
      "cpf": "00000000000",
      "genre": "male",
      "surname": null,
      "phone": null,
      "address": null,
      "observations": null,
      "id": "5a5ae3f5-f3b1-4403-a887-660dddd7d34c",
      "createdAt": "2022-07-05T23:54:54.347Z",
      "updatedAt": "2022-07-05T23:54:54.347Z",
      "isAdm": false,
      "profilePhoto":         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX19fXMzMzz8/Pw8PDNzc3t7e3R0dHl5eXh4eHa2trV1dXb29vp6enJycno6OjT09MhDu1kAAAFMElEQVR4nO2d2W6rMBCG6wXbGIzf/20PDidNwpKwTGbG1XwXVaUWiV+zesM/P4IgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCH8O0/chdO2NEIbeUL8QKLoPbczZWjVhrcuxDYOmfjEgmhCzU0usi90fEKl9m+2KvF+RoW531T6uWe+ZujUOH/XdDBl9pb7adHv03ezYNtQvewYft+NvQa7PjDrsNeB/V+0qi0bTHTDgJDFW5alNPKivEHvq197PKYFjwvHUL76XkwJHiQP1q++jaU8KHB21ilg03WmBlUgMFwQqVUHR8EfLxAz22eZ0lrnjmNcMHdJFharl7af+qj7F3E8vFIoHmXM+hTChSoHvOAPEhKyNCGLC0YhsI9HAmJCxEXsggWzTKUAtvMO0d7vczjxg6qb9xY70Caa5xoM5qVIsZ4nBMmmB5TgRMAyVsiwVwoXhGIgcZ2wGwDBk2ZtqyEQzphqGCuHqfYHhOPjSFFsdCiGLBcuuBlihE4X4iEJROCMyzKV/vloAV3yOo3zQro1jX/rTAArkOchvjm0v+QDHFSgDOQJmWCyAUw3DVDoywAlkmWhAA9FyDEPQroblVNsP2NITWycd3TQDKWS7WwEsm3Js2SZ6mFxjOU6WTgAZkWcxnAAxImMTFiNeF5j4RmEBYHkmc02k/7m6cY/lfP4LV/00cU4zExf9tIbt7MOVfGo5ju0X+PMSLfcgnNDhdLapQ+AFibwr4TPnJFZ19EmfiMVKYvCXPh9swus5EnTnYF2soQ4uOBKMNYXgE7vNWKUBJ4Yd0Zgqi0DdvPrbR40uzJ5nnlF1SPPV27cb+Of+aVrmg4vbQvDynOSwLjIu/rGJiff4yXQ3l7Rh5U++e847sfMrOqY+gfE0xn+BantW3jQ3th6/5x6uEh8CyzjvcMLw7vdxphJf5y9S7A9pfM1HLCUuJ2gOaGzmW1U4SlxbeNqnUS/0FdiNNIbVJjTlYN6/qTbDRm/HrNPZXFhLKnqj11VqY4bObvU8vLbrj63IxntOIoNvzLNOPYozfYib8gqcFoI/rzml5GIXvPdjNRx/hi469fGZjk8o7tyFkR7se4BNKIKtbs/hsm9Id6C7Ep9hsssUcKfQnLTSw+NjvuWjBRZ+CrtzdkZq6fMp6LbSFcgX9TXknss1MnWy+WKamaBONvqbaWbC0RoR9tDhKrRG1KB7u7egrBgIJhxp6QTimJDSiDgmVKqjEohlQmWp0ino+fR3kKXTb7czDxxNd9pgmZDsGBTskcr3ZAqBGlGgShQFA6tUTFAUjO/33M9YfIGIeaaQ8LdrfHXyYgX85hSrn/kFWyCykxK4KcDBioNguym6k2K7KWq5n0Au+mCHKQ+AW/TxhhUPHKpCAoFKYY6Dvz2Vvw7mEAq/VhQw68X31kS5KEQd/d7BncpAm2ajEkghEX2Ujy2RYBoDVyLJxD6iRJKJqCLx6NmmsxBNCBcihsREKBBltiYRLh8Wrp+//ySQfFsU7EfMFnA43A36FbM5TD5Fe/7s9ifIPfTOlzaYsrpo7uCNlXvgdrS7OXLr6B59y4Nt5Pg3Nxsf1ufYHSgp6OBgNI76eDnoAxMA7Gh53w58WSNzfQUTdl1VvU4ll3SX69TPiLS5redmZxOOiiz3yHN3zxlNaOPO3GpdbkOVn1Uwvqh8b0vn4vq57mowQ+jamLOzr/a0o+FyjG0YuH9EYRem6cModCQWyi9dCH1fs+m2MAXqlxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEgYp/cWtE3eYmjAIAAAAASUVORK5CYII="
}
	```

	**Possíveis Erros**

	- Chave faltando: 400 BAD REQUEST

	```js
	   {
        "error": [
          "genre is a required field"
        ]
      }
	```

	- CPF já existe: 400 BAD REQUEST

	```js
	    {
        "message": "CPF already registered"
      }
	```

	- E-mail e/ou password em formato errado: 400 BAD REQUEST

	```js
	    {
          "error": [
            "CPF must contain only 11 numbers",
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
          ]
        }
	```

	---

	---

	#### Login da conta do usuário

	```http
	  POST /api/users/login
	```

	Formato da requisição:

	```js
	  Body:
		{
      "cpf": "00000000000",
      "password": "Juni@r10"
    }
	```

	Formato da resposta: 200 OK

	```js
	  Body:
		{
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiIwMDAwMDAwMDAwMCIsInBhc3N3b3JkIjoiSnVuaUByMTAiLCJpYXQiOjE2NTc2MzU4MTYsImV4cCI6MTY1NzcyMjIxNn0.o5BafD5QDw10OjQnHeUy0gQhFENJkMqIstDOeU2ZQBA"
    }
	```

	**Possíveis erros:**

	- E-mail ou senha errados: 400 BAD REQUEST

	```js
	     {
          "message": "Wrong email/password"
       }
	```

	- Chave faltando: 400 BAD REQUEST

	```js
	    {
        "error": [
          "password is a required field"
        ]
      }
	```

	---

	---

	### As rotas abaixo necessitam de autorização

	Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

	Authorization: Bearer {token}

	#### Pegar informações do advogado

	```http
	  GET /api/users
	```

	Formato da requisição:

	```js
	Body: null;
	```

	Formato da resposta: 200 OK

	```js
	  Body:
      [
        {
          "id": "36cec4ad-8bb5-495c-8b2d-1ab05a06d8eb",
          "createdAt": "2022-07-05T23:54:54.347Z",
          "updatedAt": "2022-07-05T23:54:54.347Z",
          "fullName": "Aldenivan",
          "cpf": "00000000002",
          "password": "$2b$10$OA5OSi7bYSVotoCSeWBWeOwG4kgAPDv/EzWbgihCCniIqj56oRai6",
          "surname": null,
          "genre": "Male",
          "phone": null,
          "address": null,
          "observations": null,
          "isAdm": false,
          "profilePhoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX19fXMzMzz8/Pw8PDNzc3t7e3R0dHl5eXh4eHa2trV1dXb29vp6enJycno6OjT09MhDu1kAAAFMElEQVR4nO2d2W6rMBCG6wXbGIzf/20PDidNwpKwTGbG1XwXVaUWiV+zesM/P4IgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCH8O0/chdO2NEIbeUL8QKLoPbczZWjVhrcuxDYOmfjEgmhCzU0usi90fEKl9m+2KvF+RoW531T6uWe+ZujUOH/XdDBl9pb7adHv03ezYNtQvewYft+NvQa7PjDrsNeB/V+0qi0bTHTDgJDFW5alNPKivEHvq197PKYFjwvHUL76XkwJHiQP1q++jaU8KHB21ilg03WmBlUgMFwQqVUHR8EfLxAz22eZ0lrnjmNcMHdJFharl7af+qj7F3E8vFIoHmXM+hTChSoHvOAPEhKyNCGLC0YhsI9HAmJCxEXsggWzTKUAtvMO0d7vczjxg6qb9xY70Caa5xoM5qVIsZ4nBMmmB5TgRMAyVsiwVwoXhGIgcZ2wGwDBk2ZtqyEQzphqGCuHqfYHhOPjSFFsdCiGLBcuuBlihE4X4iEJROCMyzKV/vloAV3yOo3zQro1jX/rTAArkOchvjm0v+QDHFSgDOQJmWCyAUw3DVDoywAlkmWhAA9FyDEPQroblVNsP2NITWycd3TQDKWS7WwEsm3Js2SZ6mFxjOU6WTgAZkWcxnAAxImMTFiNeF5j4RmEBYHkmc02k/7m6cY/lfP4LV/00cU4zExf9tIbt7MOVfGo5ju0X+PMSLfcgnNDhdLapQ+AFibwr4TPnJFZ19EmfiMVKYvCXPh9swus5EnTnYF2soQ4uOBKMNYXgE7vNWKUBJ4Yd0Zgqi0DdvPrbR40uzJ5nnlF1SPPV27cb+Of+aVrmg4vbQvDynOSwLjIu/rGJiff4yXQ3l7Rh5U++e847sfMrOqY+gfE0xn+BantW3jQ3th6/5x6uEh8CyzjvcMLw7vdxphJf5y9S7A9pfM1HLCUuJ2gOaGzmW1U4SlxbeNqnUS/0FdiNNIbVJjTlYN6/qTbDRm/HrNPZXFhLKnqj11VqY4bObvU8vLbrj63IxntOIoNvzLNOPYozfYib8gqcFoI/rzml5GIXvPdjNRx/hi469fGZjk8o7tyFkR7se4BNKIKtbs/hsm9Id6C7Ep9hsssUcKfQnLTSw+NjvuWjBRZ+CrtzdkZq6fMp6LbSFcgX9TXknss1MnWy+WKamaBONvqbaWbC0RoR9tDhKrRG1KB7u7egrBgIJhxp6QTimJDSiDgmVKqjEohlQmWp0ino+fR3kKXTb7czDxxNd9pgmZDsGBTskcr3ZAqBGlGgShQFA6tUTFAUjO/33M9YfIGIeaaQ8LdrfHXyYgX85hSrn/kFWyCykxK4KcDBioNguym6k2K7KWq5n0Au+mCHKQ+AW/TxhhUPHKpCAoFKYY6Dvz2Vvw7mEAq/VhQw68X31kS5KEQd/d7BncpAm2ajEkghEX2Ujy2RYBoDVyLJxD6iRJKJqCLx6NmmsxBNCBcihsREKBBltiYRLh8Wrp+//ySQfFsU7EfMFnA43A36FbM5TD5Fe/7s9ifIPfTOlzaYsrpo7uCNlXvgdrS7OXLr6B59y4Nt5Pg3Nxsf1ufYHSgp6OBgNI76eDnoAxMA7Gh53w58WSNzfQUTdl1VvU4ll3SX69TPiLS5redmZxOOiiz3yHN3zxlNaOPO3GpdbkOVn1Uwvqh8b0vn4vq57mowQ+jamLOzr/a0o+FyjG0YuH9EYRem6cModCQWyi9dCH1fs+m2MAXqlxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEgYp/cWtE3eYmjAIAAAAASUVORK5CYII="
        },
        {
          "id": "76fbf1c0-919c-4740-9c47-523c4100ce41",
          "createdAt": "2022-07-05T23:54:54.347Z",
          "updatedAt": "2022-07-12T13:22:16.138Z",
          "fullName": "11",
          "cpf": "1111",
          "password": "$2b$10$.r1iOE/RXmBBGvOt51w5xu12TpeKi7/Kj9vkieJVRFk6M6pXI4Ovi",
          "surname": "1",
          "genre": "1",
          "phone": "1",
          "address": "1",
          "observations": "1",
          "isAdm": false,
          "profilePhoto": "1"
        },
        {
          "id": "5055a00f-cbb0-44ee-8ae7-f440dd0e51e6",
          "createdAt": "2022-07-05T23:54:54.347Z",
          "updatedAt": "2022-07-05T23:54:54.347Z",
          "fullName": "Aldenivan Junior",
          "cpf": "00000000000",
          "password": "$2b$10$Fpp86pr5Rgw4vGzpvCink.mR7lt/6tO/UV4tFitt6J6s94qSHn0Na",
          "surname": null,
          "genre": "male",
          "phone": null,
          "address": null,
          "observations": null,
          "isAdm": false,
          "profilePhoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX19fXMzMzz8/Pw8PDNzc3t7e3R0dHl5eXh4eHa2trV1dXb29vp6enJycno6OjT09MhDu1kAAAFMElEQVR4nO2d2W6rMBCG6wXbGIzf/20PDidNwpKwTGbG1XwXVaUWiV+zesM/P4IgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCH8O0/chdO2NEIbeUL8QKLoPbczZWjVhrcuxDYOmfjEgmhCzU0usi90fEKl9m+2KvF+RoW531T6uWe+ZujUOH/XdDBl9pb7adHv03ezYNtQvewYft+NvQa7PjDrsNeB/V+0qi0bTHTDgJDFW5alNPKivEHvq197PKYFjwvHUL76XkwJHiQP1q++jaU8KHB21ilg03WmBlUgMFwQqVUHR8EfLxAz22eZ0lrnjmNcMHdJFharl7af+qj7F3E8vFIoHmXM+hTChSoHvOAPEhKyNCGLC0YhsI9HAmJCxEXsggWzTKUAtvMO0d7vczjxg6qb9xY70Caa5xoM5qVIsZ4nBMmmB5TgRMAyVsiwVwoXhGIgcZ2wGwDBk2ZtqyEQzphqGCuHqfYHhOPjSFFsdCiGLBcuuBlihE4X4iEJROCMyzKV/vloAV3yOo3zQro1jX/rTAArkOchvjm0v+QDHFSgDOQJmWCyAUw3DVDoywAlkmWhAA9FyDEPQroblVNsP2NITWycd3TQDKWS7WwEsm3Js2SZ6mFxjOU6WTgAZkWcxnAAxImMTFiNeF5j4RmEBYHkmc02k/7m6cY/lfP4LV/00cU4zExf9tIbt7MOVfGo5ju0X+PMSLfcgnNDhdLapQ+AFibwr4TPnJFZ19EmfiMVKYvCXPh9swus5EnTnYF2soQ4uOBKMNYXgE7vNWKUBJ4Yd0Zgqi0DdvPrbR40uzJ5nnlF1SPPV27cb+Of+aVrmg4vbQvDynOSwLjIu/rGJiff4yXQ3l7Rh5U++e847sfMrOqY+gfE0xn+BantW3jQ3th6/5x6uEh8CyzjvcMLw7vdxphJf5y9S7A9pfM1HLCUuJ2gOaGzmW1U4SlxbeNqnUS/0FdiNNIbVJjTlYN6/qTbDRm/HrNPZXFhLKnqj11VqY4bObvU8vLbrj63IxntOIoNvzLNOPYozfYib8gqcFoI/rzml5GIXvPdjNRx/hi469fGZjk8o7tyFkR7se4BNKIKtbs/hsm9Id6C7Ep9hsssUcKfQnLTSw+NjvuWjBRZ+CrtzdkZq6fMp6LbSFcgX9TXknss1MnWy+WKamaBONvqbaWbC0RoR9tDhKrRG1KB7u7egrBgIJhxp6QTimJDSiDgmVKqjEohlQmWp0ino+fR3kKXTb7czDxxNd9pgmZDsGBTskcr3ZAqBGlGgShQFA6tUTFAUjO/33M9YfIGIeaaQ8LdrfHXyYgX85hSrn/kFWyCykxK4KcDBioNguym6k2K7KWq5n0Au+mCHKQ+AW/TxhhUPHKpCAoFKYY6Dvz2Vvw7mEAq/VhQw68X31kS5KEQd/d7BncpAm2ajEkghEX2Ujy2RYBoDVyLJxD6iRJKJqCLx6NmmsxBNCBcihsREKBBltiYRLh8Wrp+//ySQfFsU7EfMFnA43A36FbM5TD5Fe/7s9ifIPfTOlzaYsrpo7uCNlXvgdrS7OXLr6B59y4Nt5Pg3Nxsf1ufYHSgp6OBgNI76eDnoAxMA7Gh53w58WSNzfQUTdl1VvU4ll3SX69TPiLS5redmZxOOiiz3yHN3zxlNaOPO3GpdbkOVn1Uwvqh8b0vn4vq57mowQ+jamLOzr/a0o+FyjG0YuH9EYRem6cModCQWyi9dCH1fs+m2MAXqlxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEgYp/cWtE3eYmjAIAAAAASUVORK5CYII="
        }
    ]
	```
  
  **Possíveis erros:**

	- Sem token: 401 BAD REQUEST

	```js
	    {
        "message": "Missing authorization headers"
      }
	```

	```http
	  GET /api/users/profile
	```

	Formato da requisição:

	```js
	Body: null;
	```

	Formato da resposta: 200 OK

	```js
	  Body:
		{
      "id": "5055a00f-cbb0-44ee-8ae7-f440dd0e51e6",
      "createdAt": "2022-07-05T23:54:54.347Z",
      "updatedAt": "2022-07-05T23:54:54.347Z",
      "fullName": "Aldenivan Junior",
      "cpf": "00000000000",
      "surname": null,
      "genre": "male",
      "phone": null,
      "address": null,
      "observations": null,
      "isAdm": false,
      "profilePhoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX19fXMzMzz8/Pw8PDNzc3t7e3R0dHl5eXh4eHa2trV1dXb29vp6enJycno6OjT09MhDu1kAAAFMElEQVR4nO2d2W6rMBCG6wXbGIzf/20PDidNwpKwTGbG1XwXVaUWiV+zesM/P4IgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCH8O0/chdO2NEIbeUL8QKLoPbczZWjVhrcuxDYOmfjEgmhCzU0usi90fEKl9m+2KvF+RoW531T6uWe+ZujUOH/XdDBl9pb7adHv03ezYNtQvewYft+NvQa7PjDrsNeB/V+0qi0bTHTDgJDFW5alNPKivEHvq197PKYFjwvHUL76XkwJHiQP1q++jaU8KHB21ilg03WmBlUgMFwQqVUHR8EfLxAz22eZ0lrnjmNcMHdJFharl7af+qj7F3E8vFIoHmXM+hTChSoHvOAPEhKyNCGLC0YhsI9HAmJCxEXsggWzTKUAtvMO0d7vczjxg6qb9xY70Caa5xoM5qVIsZ4nBMmmB5TgRMAyVsiwVwoXhGIgcZ2wGwDBk2ZtqyEQzphqGCuHqfYHhOPjSFFsdCiGLBcuuBlihE4X4iEJROCMyzKV/vloAV3yOo3zQro1jX/rTAArkOchvjm0v+QDHFSgDOQJmWCyAUw3DVDoywAlkmWhAA9FyDEPQroblVNsP2NITWycd3TQDKWS7WwEsm3Js2SZ6mFxjOU6WTgAZkWcxnAAxImMTFiNeF5j4RmEBYHkmc02k/7m6cY/lfP4LV/00cU4zExf9tIbt7MOVfGo5ju0X+PMSLfcgnNDhdLapQ+AFibwr4TPnJFZ19EmfiMVKYvCXPh9swus5EnTnYF2soQ4uOBKMNYXgE7vNWKUBJ4Yd0Zgqi0DdvPrbR40uzJ5nnlF1SPPV27cb+Of+aVrmg4vbQvDynOSwLjIu/rGJiff4yXQ3l7Rh5U++e847sfMrOqY+gfE0xn+BantW3jQ3th6/5x6uEh8CyzjvcMLw7vdxphJf5y9S7A9pfM1HLCUuJ2gOaGzmW1U4SlxbeNqnUS/0FdiNNIbVJjTlYN6/qTbDRm/HrNPZXFhLKnqj11VqY4bObvU8vLbrj63IxntOIoNvzLNOPYozfYib8gqcFoI/rzml5GIXvPdjNRx/hi469fGZjk8o7tyFkR7se4BNKIKtbs/hsm9Id6C7Ep9hsssUcKfQnLTSw+NjvuWjBRZ+CrtzdkZq6fMp6LbSFcgX9TXknss1MnWy+WKamaBONvqbaWbC0RoR9tDhKrRG1KB7u7egrBgIJhxp6QTimJDSiDgmVKqjEohlQmWp0ino+fR3kKXTb7czDxxNd9pgmZDsGBTskcr3ZAqBGlGgShQFA6tUTFAUjO/33M9YfIGIeaaQ8LdrfHXyYgX85hSrn/kFWyCykxK4KcDBioNguym6k2K7KWq5n0Au+mCHKQ+AW/TxhhUPHKpCAoFKYY6Dvz2Vvw7mEAq/VhQw68X31kS5KEQd/d7BncpAm2ajEkghEX2Ujy2RYBoDVyLJxD6iRJKJqCLx6NmmsxBNCBcihsREKBBltiYRLh8Wrp+//ySQfFsU7EfMFnA43A36FbM5TD5Fe/7s9ifIPfTOlzaYsrpo7uCNlXvgdrS7OXLr6B59y4Nt5Pg3Nxsf1ufYHSgp6OBgNI76eDnoAxMA7Gh53w58WSNzfQUTdl1VvU4ll3SX69TPiLS5redmZxOOiiz3yHN3zxlNaOPO3GpdbkOVn1Uwvqh8b0vn4vq57mowQ+jamLOzr/a0o+FyjG0YuH9EYRem6cModCQWyi9dCH1fs+m2MAXqlxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEgYp/cWtE3eYmjAIAAAAASUVORK5CYII="
    }
	```

	---

	---

	#### Atualizar informações do usuário

	```http
	  PATCH /api/users/update 
	```

	Formato da requisição:

	```js
	  Body:
		{
      "surname": "Juninho_._Play",
      "phone": "(41) 99592-1352",
      "address": "Rua Candido Fontoura, 507",
      "observations": "Nothing"
    } 
	```

	Formato da resposta: 200 OK

	```js
	  Body:
		{
      "id": "e31b60ce-4a2d-4f6d-a615-3e5aef7c0165",
      "createdAt": "2022-07-05T23:54:54.347Z",
      "updatedAt": "2022-07-11T11:38:01.641Z",
      "fullName": "Aldenivan",
      "cpf": "00000000010",
      "surname": "Juninho_._Play",
      "genre": "Male",
      "phone": "(41) 99592-1352",
      "address": "Rua Candido Fontoura, 507",
      "observations": "Nothing",
      "isAdm": false,
      "profilePhoto": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX19fXMzMzz8/Pw8PDNzc3t7e3R0dHl5eXh4eHa2trV1dXb29vp6enJycno6OjT09MhDu1kAAAFMElEQVR4nO2d2W6rMBCG6wXbGIzf/20PDidNwpKwTGbG1XwXVaUWiV+zesM/P4IgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCH8O0/chdO2NEIbeUL8QKLoPbczZWjVhrcuxDYOmfjEgmhCzU0usi90fEKl9m+2KvF+RoW531T6uWe+ZujUOH/XdDBl9pb7adHv03ezYNtQvewYft+NvQa7PjDrsNeB/V+0qi0bTHTDgJDFW5alNPKivEHvq197PKYFjwvHUL76XkwJHiQP1q++jaU8KHB21ilg03WmBlUgMFwQqVUHR8EfLxAz22eZ0lrnjmNcMHdJFharl7af+qj7F3E8vFIoHmXM+hTChSoHvOAPEhKyNCGLC0YhsI9HAmJCxEXsggWzTKUAtvMO0d7vczjxg6qb9xY70Caa5xoM5qVIsZ4nBMmmB5TgRMAyVsiwVwoXhGIgcZ2wGwDBk2ZtqyEQzphqGCuHqfYHhOPjSFFsdCiGLBcuuBlihE4X4iEJROCMyzKV/vloAV3yOo3zQro1jX/rTAArkOchvjm0v+QDHFSgDOQJmWCyAUw3DVDoywAlkmWhAA9FyDEPQroblVNsP2NITWycd3TQDKWS7WwEsm3Js2SZ6mFxjOU6WTgAZkWcxnAAxImMTFiNeF5j4RmEBYHkmc02k/7m6cY/lfP4LV/00cU4zExf9tIbt7MOVfGo5ju0X+PMSLfcgnNDhdLapQ+AFibwr4TPnJFZ19EmfiMVKYvCXPh9swus5EnTnYF2soQ4uOBKMNYXgE7vNWKUBJ4Yd0Zgqi0DdvPrbR40uzJ5nnlF1SPPV27cb+Of+aVrmg4vbQvDynOSwLjIu/rGJiff4yXQ3l7Rh5U++e847sfMrOqY+gfE0xn+BantW3jQ3th6/5x6uEh8CyzjvcMLw7vdxphJf5y9S7A9pfM1HLCUuJ2gOaGzmW1U4SlxbeNqnUS/0FdiNNIbVJjTlYN6/qTbDRm/HrNPZXFhLKnqj11VqY4bObvU8vLbrj63IxntOIoNvzLNOPYozfYib8gqcFoI/rzml5GIXvPdjNRx/hi469fGZjk8o7tyFkR7se4BNKIKtbs/hsm9Id6C7Ep9hsssUcKfQnLTSw+NjvuWjBRZ+CrtzdkZq6fMp6LbSFcgX9TXknss1MnWy+WKamaBONvqbaWbC0RoR9tDhKrRG1KB7u7egrBgIJhxp6QTimJDSiDgmVKqjEohlQmWp0ino+fR3kKXTb7czDxxNd9pgmZDsGBTskcr3ZAqBGlGgShQFA6tUTFAUjO/33M9YfIGIeaaQ8LdrfHXyYgX85hSrn/kFWyCykxK4KcDBioNguym6k2K7KWq5n0Au+mCHKQ+AW/TxhhUPHKpCAoFKYY6Dvz2Vvw7mEAq/VhQw68X31kS5KEQd/d7BncpAm2ajEkghEX2Ujy2RYBoDVyLJxD6iRJKJqCLx6NmmsxBNCBcihsREKBBltiYRLh8Wrp+//ySQfFsU7EfMFnA43A36FbM5TD5Fe/7s9ifIPfTOlzaYsrpo7uCNlXvgdrS7OXLr6B59y4Nt5Pg3Nxsf1ufYHSgp6OBgNI76eDnoAxMA7Gh53w58WSNzfQUTdl1VvU4ll3SX69TPiLS5redmZxOOiiz3yHN3zxlNaOPO3GpdbkOVn1Uwvqh8b0vn4vq57mowQ+jamLOzr/a0o+FyjG0YuH9EYRem6cModCQWyi9dCH1fs+m2MAXqlxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEgYp/cWtE3eYmjAIAAAAASUVORK5CYII="
    }
```

**Possíveis erros:**

- Sem token: 401 BAD REQUEST

	```js
	    {
        "message": "Missing authorization headers"
      }
	``` 

---

---

#### Remover conta do usuário

```http
  DELETE /api/users/delete
```

Formato da requisição:

```js
Body: null;
```

Formato da resposta: 200 OK

```js
    {
      "message": "User deleted with success"
    }
```

**Possíveis erros:**

- Sem token: 401 BAD REQUEST

	```js
	    {
        "message": "Missing authorization headers"
      }
	``` 
---

---
