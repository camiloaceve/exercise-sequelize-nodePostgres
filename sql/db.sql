CREATE TABLE IF NOT EXISTS projects (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectId INTEGER REFERENCES projects(id)
)

INSERT INTO projects(name, priority, description, deliverydate)
    VALUES('Make a web app', 1, 'Using Javascript', '2020-11-25');

INSERT INTO tasks(name, done, projectId)
    VALUES('Donwload Nodejs', false, 1,);