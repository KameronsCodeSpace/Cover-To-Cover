DROP DATABASE if exists humanstories;
CREATE DATABASE humanstories;

\c humanstories;
-- this database seed will be changed alot but this should be a good start

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    region VARCHAR,
    info VARCHAR,
    email VARCHAR,
    avatar VARCHAR
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    file_src VARCHAR,
    caption VARCHAR,
    p_username INT NOT NULL REFERENCES users(id),
);

CREATE TABLE likes(
    post_id INT,
    liker_name VARCHAR
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment VARCHAR,
    c_post_id INT,
    commentors_name VARCHAR
);

CREATE TABLE tags (
   id SERIAL PRIMARY KEY,
   tag_name VARCHAR UNIQUE
);

CREATE TABLE post_tag (
   id SERIAL PRIMARY KEY,
   tag_id INT REFERENCES tags(id),
   ptag_id INT REFERENCES posts(id)
);

INSERT INTO  users (username, password, region, info, email, avatar) 
VALUES
   --1
   ('Tester1', 'testing', 'United States', 'I like puppies', 'tester1@us.com','http://localhost:3100/avatar_links/avatar1.jpeg'),
   --2
   ('Tester2', 'testing', 'Angola', 'I like kitties', 'tester2@ang.com', 'http://localhost:3100/avatar_links/avatar2.png'),
   --3
   ('Tester3', 'testing', 'Guiana', 'I like turtles', 'tester3@gu.com', 'http://localhost:3100/avatar_links/avatar3.png'),
   --4
   ('Tester4', 'testing', 'Peru', 'I like cars', 'tester4@per.com', 'http://localhost:3100/avatar_links/avatar4.jpeg'),
   --5
   ('Tester5', 'testing', 'Uganda', 'I like flowers', 'tester5@ug.com', 'http://localhost:3100/avatar_links/avatar5.jpeg'),
   --6
   ('Tester6', 'testing', 'Trinidad', 'I like power', 'tester6@tr.com', 'http://localhost:3100/avatar_links/avatar6.gif'),
   --7
   ('Tester7', 'testing', 'Hong Kong', 'I like headphones', 'tester7@hk.com', 'http://localhost:3100/avatar_links/avatar7.jpeg'),
   --8
   ('Tester8', 'testing', 'Russia', 'I like buckets', 'tester8@ru.com', 'http://localhost:3100/avatar_links/avatar8.jpeg');

-- INSERT INTO  posts (user_id, user_comment, num_likes, tag) 
-- VALUES
--    --1
--    (4, 'Im telling a story', 4, '#realtalk'),
--    --2
--    (2, 'Im telling a story', 4, '#realtalk'),
--    --3
--    (6, 'Im telling a story', 4, '#realtalk'),
--    --4
--    (7, 'Im telling a story', 4, '#realtalk'),
--    --5
--    (7, 'Im telling a story', 4, '#realtalk'),
--    --6
--    (8, 'Im telling a story', 4, '#realtalk'),
--    --7
--    (4, 'Im telling a story', 4, '#realtalk'),
--    --8
--    (1, 'Im telling a story', 4, '#realtalk'),
--    --9
--    (4, 'Im telling a story', 4, '#realtalk'),
--    --10
--    (2, 'Im telling a story', 4, '#realtalk'),
--    --11
--    (6, 'Im telling a story', 4, '#realtalk'),
--    --12
--    (7, 'Im telling a story', 4, '#realtalk'),
--    --13
--    (7, 'Im telling a story', 4, '#realtalk'),
--    --14
--    (8, 'Im telling a story', 4, '#realtalk'),
--    --15
--    (4, 'Im telling a story', 4, '#realtalk'),
--    --16
--    (1, 'Im telling a story', 4, '#realtalk');
