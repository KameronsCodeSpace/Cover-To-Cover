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
    p_username VARCHAR NOT NULL REFERENCES users(username)
    
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id),
    liker_name VARCHAR REFERENCES users(username)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    comment VARCHAR,
    c_post_id INT REFERENCES posts(id),
    commentors_name VARCHAR REFERENCES users(username)
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
--PASSWORD in plain text is 'testing10' for all the users.
   ('Tester1', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'United States', 'I like puppies', 'tester1@us.com','http://localhost:3100/avatar_links/avatar1.jpeg'),
   --2
   ('Tester2', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Angola', 'I like kitties', 'tester2@ang.com', 'http://localhost:3100/avatar_links/avatar2.png'),
   --3
   ('Tester3', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Guiana', 'I like turtles', 'tester3@gu.com', 'http://localhost:3100/avatar_links/avatar3.png'),
   --4
   ('Tester4', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Peru', 'I like cars', 'tester4@per.com', 'http://localhost:3100/avatar_links/avatar4.jpeg'),
   --5
   ('Tester5', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Uganda', 'I like flowers', 'tester5@ug.com', 'http://localhost:3100/avatar_links/avatar5.jpeg'),
   --6
   ('Tester6', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Trinidad', 'I like power', 'tester6@tr.com', 'http://localhost:3100/avatar_links/avatar6.gif'),
   --7
   ('Tester7', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Hong Kong', 'I like headphones', 'tester7@hk.com', 'http://localhost:3100/avatar_links/avatar7.jpeg'),
   --8
   ('Tester8', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Russia', 'I like buckets', 'tester8@ru.com', 'http://localhost:3100/avatar_links/avatar8.jpeg');


INSERT INTO posts (file_src, caption, p_username)
    VALUES
        ('image', 'Moving to the US wasnt as much of a cultural shock as people say. The language was the same, crowd interactions the same, currency was almost equal to what I had back home with no insane conversion rates involved. There were a few things that stood out, everything was just so HUGE! The stores, 4 - 6 lane roads instead of 2, and so many different kinds of food. The other one was how divided people seem to be. Even in such a big city, people typically only interacted with the ones that looked like them. As a new user, I want to know of the experience others had moving to the US, so that I may not feel so overwhelmed with the way of life in a developed country.', 'Tester1'),
        ('image', 'My name is CuriousSalt, I want to learn more about people so that I can satisfy my people watching hobby. I keep to myself normally but I do love to hear stories about random strangers I do not know. I found this awesome site with stories about people from all over the world. The best part is I can start reading and watching these stories right away without making an account and the stories are engaging because other people are interviewing the storyteller.', 'Tester2'),
        ('image', 'My name is PillowMonster, and I found this great site where I can tell people what its like to be a Professional Mourner. Its crazy all the things I heard and experienced when I get hired for this gig. The people are never what you expect!', 'Tester3'),
        ('image', 'Hi, my name is Jo, I am an aspiring traveler. The country I am interested in visiting recently is Turkey. The reason I am interested in Turkey is because it was once known as the Ottoman Empire so it has a rich history and a lot of historical cities and sites. One of the most interesting sites is called the Grand Bazaar in Istanbul. I want to know what to expect from the country and its people. It would also be nice to know a few key words to communicate with the locals.', 'Tester4'),
        ('image', 'Gaming in Asia has been a lifestyle. The culture around it was different. Hotels and gaming cafes with blazing fast internet, powerful PCs, lounge and rest areas, and finally cafeterias.', 'Tester5');

INSERT INTO comments (comment, c_post_id, commentors_name)
    VALUES
        ('Interesting post', '1', 'Tester3')
