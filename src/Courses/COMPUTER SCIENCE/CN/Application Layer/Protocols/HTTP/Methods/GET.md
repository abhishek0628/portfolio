GET is used to retrieve data from a server.

Properties:
1.Safe: Does not modify data,only retrives
2.Idempotent: same request,same result
3.Cacheable: Responses can be cached

Limitation:
1. Data visible in URL
2. URL length limit
3. No request body

Example:
Request:
GET /users?id=10 HTTP/1.1
Host: example.com

Response:
HTTP/1.1 200 OK
Content-Type: application/json

{ "id": 10, "name": "Alex" }

using javascript:
fetch("https://example.com/users?id=10")
  .then(response => response.json())
  .then(data => console.log(data));

using python:
import requests
res = requests.get("https://example.com/users", params={"id": 10})
print(res.json())

using curl:
curl "https://example.com/users?id=10"