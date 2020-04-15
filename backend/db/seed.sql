DROP DATABASE IF EXISTS stories;

CREATE DATABASE stories;

\c stories;

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
    p_username VARCHAR NOT NULL
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
   ('Tester1', 'testing', 'United States', 'I like puppies', 'tester1@us.com','http://localhost:3100/avatar_links/avatar1.jpeg'),
   ('Tester2', 'testing', 'Angola', 'I like kitties', 'tester2@ang.com', 'http://localhost:3100/avatar_links/avatar2.png'),
   ('Tester3', 'testing', 'Guiana', 'I like turtles', 'tester3@gu.com', 'http://localhost:3100/avatar_links/avatar3.png'),
   ('Tester4', 'testing', 'Peru', 'I like cars', 'tester4@per.com', 'http://localhost:3100/avatar_links/avatar4.jpeg'),
   ('Tester5', 'testing', 'Uganda', 'I like flowers', 'tester5@ug.com', 'http://localhost:3100/avatar_links/avatar5.jpeg'),
   ('Tester6', 'testing', 'Trinidad', 'I like power', 'tester6@tr.com', 'http://localhost:3100/avatar_links/avatar6.gif'),
   ('Tester7', 'testing', 'Hong Kong', 'I like headphones', 'tester7@hk.com', 'http://localhost:3100/avatar_links/avatar7.jpeg'),
   ('Tester8', 'testing', 'Russia', 'I like buckets', 'tester8@ru.com', 'http://localhost:3100/avatar_links/avatar8.jpeg');

INSERT INTO posts (file_src, caption, p_username)
    VALUES
        ('image', 'Moving to the US wasnt as much of a cultural shock as people say. The language was the same, crowd interactions the same, currency was almost equal to what I had back home with no insane conversion rates involved. There were a few things that stood out, everything was just so HUGE! The stores, 4 - 6 lane roads instead of 2, and so many different kinds of food. The other one was how divided people seem to be. Even in such a big city, people typically only interacted with the ones that looked like them. As a new user, I want to know of the experience others had moving to the US, so that I may not feel so overwhelmed with the way of life in a developed country.', 'Dan');

