CONNECT is used to establish a tunnel through an HTTP proxy to another server.

1. Client → Proxy
CONNECT example.com:443 HTTP/1.1
Host: example.com:443
2. Proxy → Server

Proxy does NOT fetch webpage. Instead it:

opens TCP connection to example.com:443
3. Proxy → Client

If successful:

HTTP/1.1 200 Connection Established
4. Tunnel is created

Now:

proxy stops interpreting data
just blindly forwards bytes both ways

So:

Client ⇄ Proxy ⇄ Server
        (dumb pipe now)
        