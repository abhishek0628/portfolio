.

🔹 8. Spatial Data Types (Advanced)

Spatial data types are used to store geometric or geographic data like:

Locations
Shapes
Distances
Areas

These are heavily used in mapping systems, GPS apps, and anything involving “where is this thing?”

🔷 Common Spatial Data Types
1. POINT

Represents a single location (x, y)
👉 Like latitude and longitude

Example:

location POINT

Insert:

INSERT INTO places (name, location)
VALUES ('College', POINT(76.08, 11.61));

👉 One coordinate = one place

2. LINESTRING

Represents a line connecting multiple points

👉 Used for roads, routes

Example:

route LINESTRING

Insert:

INSERT INTO routes (name, route)
VALUES ('Route1', LINESTRING(0 0, 1 1, 2 2));
3. POLYGON

Represents a closed shape (area)

👉 Used for regions, boundaries, zones

Example:

area POLYGON

Insert:

INSERT INTO regions (name, area)
VALUES ('ZoneA', POLYGON((0 0, 0 5, 5 5, 5 0, 0 0)));

👉 First and last point must be same (closed shape)

4. MULTIPOINT / MULTILINESTRING / MULTIPOLYGON

Collections of multiple shapes

👉 Because one shape clearly wasn’t complicated enough

🔷 Real-world Example

Imagine a Food Delivery App:

Restaurant location → POINT
Delivery route → LINESTRING
Delivery zone → POLYGON
🔷 Useful Spatial Functions (MySQL style)
ST_Distance(p1, p2) → distance between points
ST_Area(polygon) → area of region
ST_Contains(polygon, point) → check if inside

Example:

SELECT ST_Distance(
    POINT(76.08, 11.61),
    POINT(76.10, 11.65)
);
🔷 Why Spatial Data Types Matter
Efficient storage of geographic data
Fast spatial queries
Enables location-based services

Without them, you’d be storing coordinates as text and pretending that’s fine.

🧠