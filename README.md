# curhatanQ_server
## text-sharing app

No| routes | method | request(if any) |response 
---|---|---|---|---|
1|/login| POST | ```body = {email,  pasword} ``` |  ```success(200) {message: 'Welcome', token: jwt token}, error(500) ```
2|/logout| GET| ```headers = {token}``` | ``` no content(204)  ```
