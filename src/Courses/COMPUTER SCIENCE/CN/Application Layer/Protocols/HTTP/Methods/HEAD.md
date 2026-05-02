HEAD is used to get metadata

properties:
1.Safe
2.Idempotent
3.Cacheable

Request:
HEAD /index.html HTTP/1.1
Host: example.com

Response:
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 2048
Last-Modified: Tue, 12 Jan 2026 10:00:00 GMT
