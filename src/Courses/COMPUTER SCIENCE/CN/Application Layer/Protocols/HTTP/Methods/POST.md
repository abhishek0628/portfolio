POST is used to send data to the server

Properties:
1. Has a Request Body
2. Not Idempotent :same request different result
3. Not Safe: changes data in server
4. Data Not Visible in URL

Example;
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "Alex",
  "age": 21
}
