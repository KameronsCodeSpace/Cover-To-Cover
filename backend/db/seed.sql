DROP DATABASE if exists humanstories;
CREATE DATABASE humanstories;

-- \c humanstories;
-- this database seed will be changed alot but this should be a good start

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    region VARCHAR,
    info VARCHAR
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    user_comment VARCHAR NOT NULL.
    like INT,
    tag VARCHAR 
);

INSERT INTO  
   users (username, password, region, info) 
VALUES
   --1
   ('Tester1', 'testing', 'United States', 'I like puppies'),
   --2
   ('Tester2', 'testing', 'Angola', 'I like kitties'),
   --3
   ('Tester3', 'testing', 'Guiana', 'I like turtles'),
   --4
   ('Tester4', 'testing', 'Peru', 'I like cars'),
   --5
   ('Tester5', 'testing', 'Uganda', 'I like flowers'),
   --6
   ('Tester6', 'testing', 'Trinidad', 'I like power'),
   --7
   ('Tester7', 'testing', 'Hong Kong', 'I like headphones'),
   --8
   ('Tester8', 'testing', 'Moscow', 'I like buckets'),

INSERT INTO  
   posts (user_id, user_comment, like, tag) 
VALUES
   --1
   (4, 'Im telling a story', 4, '#realtalk'),
   --2
   (2, 'Im telling a story', 4, '#realtalk'),
   --3
   (6, 'Im telling a story', 4, '#realtalk'),
   --4
   (7, 'Im telling a story', 4, '#realtalk'),
   --5
   (7, 'Im telling a story', 4, '#realtalk'),
   --6
   (8, 'Im telling a story', 4, '#realtalk'),
   --7
   (4, 'Im telling a story', 4, '#realtalk'),
   --8
   (1, 'Im telling a story', 4, '#realtalk'),
   --9
   (4, 'Im telling a story', 4, '#realtalk'),
   --10
   (2, 'Im telling a story', 4, '#realtalk'),
   --11
   (6, 'Im telling a story', 4, '#realtalk'),
   --12
   (7, 'Im telling a story', 4, '#realtalk'),
   --13
   (7, 'Im telling a story', 4, '#realtalk'),
   --14
   (8, 'Im telling a story', 4, '#realtalk'),
   --15
   (4, 'Im telling a story', 4, '#realtalk'),
   --16
   (1, 'Im telling a story', 4, '#realtalk'),
