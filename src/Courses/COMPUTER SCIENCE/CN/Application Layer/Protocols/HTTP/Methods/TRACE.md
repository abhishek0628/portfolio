TRACE sends request back to you exactly as the server received it.

TRACE /test HTTP/1.1
Host: example.com
X-Demo: hello

HTTP/1.1 200 OK
Content-Type: message/http

TRACE /test HTTP/1.1
Host: example.com
X-Demo: hello

TRACE was designed for:

Debugging proxies
Checking what intermediaries (like proxies) modify
Verifying request transformations