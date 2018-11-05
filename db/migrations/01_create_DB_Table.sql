-- SQL Instructions for Postgres
-- Create two Databases one for prod and test
CREATE DATABASE murphy;
CREATE DATABASE murphy_test;
-- Create Tables

-- Creating MURPHY_USERS table
-- Table contains USER_ID which is primary key
-- First Name, Last Name, Email ID and Password of the user

-- Later we may consider adding a flag to indicate if the user is currently renting somewhere
-- to avoid the user from making multiple bookings
CREATE TABLE murphy_users(user_id SERIAL PRIMARY KEY, 
	first_name varchar(60),
	last_name varchar(60),
	email varchar(60),
	password varchar(200));

-- Creating MURPHY_SPACES table
-- Table contains SPACE_ID which is primary key
-- Space Name, Description, price per night, Owner id which is a foreign key from users
CREATE TABLE murphy_spaces(space_id SERIAL PRIMARY KEY, 
	space_name varchar(60),
	space_desc varchar(100),
	price_per_night float,
	owner_id integer,
	CONSTRAINT fk_spaces_users
	FOREIGN KEY (owner_id)
	REFERENCES murphy_users(user_id));