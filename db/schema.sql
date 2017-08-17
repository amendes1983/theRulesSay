DROP DATABASE if exists therulessay;
CREATE DATABASE therulessay;
USE therulessay;

CREATE TABLE host(
  id INT  NOT NULL AUTO_INCREMENT,
  host_name VARCHAR(50) NOT NULL,
  host_phone INT(10) NOT NULL,
  address VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE rating(
  id INT NOT NULL AUTO_INCREMENT,
  likes INT(100),
  dislikes INT(100),
  PRIMARY KEY(id)
);

CREATE TABLE user(
  id INT  NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);
