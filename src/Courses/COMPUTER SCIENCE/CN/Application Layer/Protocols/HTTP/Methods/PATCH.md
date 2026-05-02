PATCH = partial update of a resource

Properties:
Partial update
Usually not idempotent (depends on implementation)
Uses a request body
More bandwidth-efficient than PUT

PATCH /user/1
{
  "city": "Amsterdam"
}