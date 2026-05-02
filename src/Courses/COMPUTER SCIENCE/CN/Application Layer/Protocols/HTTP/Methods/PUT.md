PUT = Replace a resource completely

properties:
1. Idempotent
2. Has Request Body
3. Used for Existing Resources

example:
PUT /users/1 HTTP/1.1
Content-Type: application/json

{
  "name": "Abhishek Kumar",
  "email": "abhi@gmail.com"
}

app.put("/users/:id", (req, res) => {
    const id = req.params.id;

    users[id] = {
        id: id,
        name: req.body.name,
        email: req.body.email
    };

    res.send(users[id]);
});