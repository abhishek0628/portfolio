DELETE is an HTTP method used to remove a resource from the server.

properties:
1.Idempotent


DELETE /users/1 HTTP/1.1
Host: example.com

1. Hard delete
Data is permanently removed from database
2. Soft delete (very common)
Data is NOT removed
Just marked:
