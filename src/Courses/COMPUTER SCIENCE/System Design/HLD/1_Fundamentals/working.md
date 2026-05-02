port:80
🌐 1. How HTTP Works (Step-by-Step)

HTTP is a request–response protocol between a client (browser) and a server.

🧠 Core Idea
Client asks for something
Server gives it (or doesn’t, if it’s in a bad mood like a 404)
📍 Step 1: URL Entered

You type:

http://example.com/index.html

Browser splits it into:

Protocol: HTTP
Domain: example.com
Resource: /index.html
📍 Step 2: DNS Lookup

Before HTTP even starts:

Browser asks DNS:

example.com → IP address

Now it knows where to send the request.

📍 Step 3: TCP Connection (Handshake)

HTTP runs on TCP, so first:

TCP 3-way handshake:
Client → SYN
Server → SYN + ACK
Client → ACK

Now a reliable connection exists.

Yes, it takes 3 steps just to say “hello.” Humans are not the only dramatic ones.

📍 Step 4: HTTP Request Sent

Client sends:

GET /index.html HTTP/1.1
Host: example.com
Key parts:
GET → method (others: POST, PUT, DELETE)
/index.html → resource
Host → required in HTTP/1.1
📍 Step 5: Server Processes Request

Server:

Checks file or backend logic
Generates response (HTML, JSON, etc.)
📍 Step 6: HTTP Response

Server replies:

HTTP/1.1 200 OK
Content-Type: text/html

<html>...</html>
Important parts:
Status code:
200 → success
404 → not found
500 → server messed up
Body → actual content
📍 Step 7: Browser Renders Page

Browser:

Parses HTML
Requests CSS, JS, images (more HTTP requests)
Builds the page

Congratulations, you now have a website.