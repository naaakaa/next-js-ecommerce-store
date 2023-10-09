CREATE TABLE bikes (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  type varchar(30) NOT NULL
);

INSERT INTO bikes
  (name, type)
VALUES
  ('Boat', 'Cargobike'),
  ('Betty', 'Mountainbike')
  ('Elena', 'Touringbike')
  ('G-Bike', 'Trailer');

SELECT * FROM bikes;
