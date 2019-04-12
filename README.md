# curhatanQ
## text-sharing app

No| routes | method | request |response 
---|---|---|---|---|
1|/register| POST|``` body={fullname, email, password} ```| ```success(201): {message: 'Welcome', token: jwt , userId: ObjectId}, error(500): {message: error message}```
2| /signin| POST| ``` body={email, password} ```| ``` success(200): {message: 'Welcome', token: jwt, userID: ObectId}, error(500): {message: error message} ```
1|/login| POST | ```body = {email,  pasword, id_token: google id_token} ``` |  ```success(200): {message: 'Welcome', token: jwt , userId: ObjectId}, error(500):  {error message} ```
2|/logout| GET| ```headers = {token}``` | ``` success(204: no content, error(500): {error message}  ```
3|/curhatan/|GET|``` headers = {token}``` | ``` success(200): {curhat}, error(500): {error message} ```
4|/curhatan/my-curhat/:userID/| GET| ``` headers = {token} ``` | ``` success(200): {cuhat}, error(500): {error message} ```
5|/curhatan/:curhatID| GET| ```headers = {token}, params = {curhatID} ``` | ``` success(200): {curhat}, error(500):{ error message} ```
6|/curhatan/:userID| POST | ```headers = {token}, body={title, content, userID} ``` | ```success(201): {created curhat}, error(500): {error message}```
7|/curhatan/:userID/delete/:curhatID| DELETE  | ``` headers = {token}, params = {curhatID} ```| ```success(200): {message}, error(500): {error message} ```










