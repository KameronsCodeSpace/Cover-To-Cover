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
   ('UnglovedGravity', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'United States', 'I like puppies', 'UnglovedGravity@us.com','https://api.adorable.io/avatars/285/UnglovedGravity.png'),
   --2
   ('DemandingPetowker', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Angola', 'I like kitties', 'DemandingPetowker@ang.com', 'https://api.adorable.io/avatars/285/DemandingPetowker.png'),
   --3
   ('HamletsTrick', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Guiana', 'I like turtles', 'HamletsTrick@gu.com', 'https://api.adorable.io/avatars/285/HamletsTrick.png'),
   --4
   ('TooDressing', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Peru', 'I like cars', 'TooDressing@per.com', 'https://api.adorable.io/avatars/285/TooDressing.png'),
   --5
   ('ReconditeJiffy', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Uganda', 'I like flowers', 'ReconditeJiffy@ug.com', 'https://api.adorable.io/avatars/285/ReconditeJiffy.png'),
   --6
   ('GiggleDemanding', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Trinidad', 'I like power', 'GiggleDemanding@tr.com', 'https://api.adorable.io/avatars/285/GiggleDemanding.png'),
   --7
   ('MakeshiftNeedles', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Hong Kong', 'I like headphones', 'MakeshiftNeedles@hk.com', 'https://api.adorable.io/avatars/285/MakeshiftNeedles.png'),
   --8
   ('TopGarlic', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Russia', 'I like buckets', 'TopGarlic@ru.com', 'https://api.adorable.io/avatars/285/TopGarlic.png'),
   --9
   ('BellaIntel', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Uzbekistan', 'I like buckets', 'BellaIntel@ru.com', 'https://api.adorable.io/avatars/285/BellaIntel.png'),
   --10
   ('HeadbandArmchair', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Serbia', 'I like buckets', 'HeadbandArmchair@ru.com', 'https://api.adorable.io/avatars/285/HeadbandArmchair.png'),
   --11
   ('ProduceFondly', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'United Arab Emirates', 'I like buckets', 'ProduceFondly@ru.com', 'https://api.adorable.io/avatars/285/ProduceFondly.png'),
   --12
   ('GreenSuitably', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Malaysia', 'I like buckets', 'GreenSuitably@ru.com', 'https://api.adorable.io/avatars/285/GreenSuitably.png'),
   --13
   ('AttemptRebuilt', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Belarus', 'I like buckets', 'AttemptRebuilt@ru.com', 'https://api.adorable.io/avatars/285/AttemptRebuilt.png'),
   --14
   ('VacuousRecover', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Barbados', 'I like buckets', 'VacuousRecover@ru.com', 'https://api.adorable.io/avatars/285/VacuousRecover.png'),
   --15
   ('RirstLandmass', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Czech Republic', 'I like buckets', 'RirstLandmass@ru.com', 'https://api.adorable.io/avatars/285/RirstLandmass.png'),
   --16
   ('TricksterSatisfaction', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Monaco', 'I like buckets', 'TricksterSatisfaction@ru.com', 'https://api.adorable.io/avatars/285/TricksterSatisfaction.png'),
   --17
   ('CosMyth', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'The Gambia', 'I like buckets', 'CosMyth@ru.com', 'https://api.adorable.io/avatars/285/CosMyth.png'),
   --18
   ('ApatheticJokester', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Belgium', 'I like buckets', 'ApatheticJokester@ru.com', 'https://api.adorable.io/avatars/285/ApatheticJokester.png'),
   --19
   ('FlickaUpper', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Bangladesh', 'I like buckets', 'FlickaUpper@ru.com', 'https://api.adorable.io/avatars/285/FlickaUpper.png'),
   --20
   ('WildfowlVillage', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Estonia', 'I like buckets', 'WildfowlVillage@ru.com', 'https://api.adorable.io/avatars/285/WildfowlVillage.png'),
   --21
   ('CharleyPoppycock', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'South Sudan', 'I like buckets', 'CharleyPoppycock@ru.com', 'https://api.adorable.io/avatars/285/CharleyPoppycock.png'),
   --22
   ('RembrantBoal', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'El Salvador', 'I like buckets', 'RembrantBoal@ru.com', 'https://api.adorable.io/avatars/285/RembrantBoal.png'),
   --23
   ('CrincersScientist', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Sao Tome and Principe', 'I like buckets', 'CrincersScientist@ru.com', 'https://api.adorable.io/avatars/285/CrincersScientist.png'),
   --24
   ('BrightGlider', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Kiribati', 'I like buckets', 'BrightGlider@ru.com', 'https://api.adorable.io/avatars/285/BrightGlider.png'),
   --25
   ('DollaRappetizer', '$2b$12$fPdgdHjt8bPCXzQpFpOR4eZ7u/r5SWGLWd7YC2ZRldxa4XSAASCsG', 'Republic of Kosovo', 'I like buckets', 'DollaRappetizer@ru.com', 'https://api.adorable.io/avatars/285/DollaRappetizer.png'),

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
