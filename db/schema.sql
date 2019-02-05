DROP database if exists burgers_db;
create database burgers_db;
use burgers_db;

create table burgers(
    id int not null AUTO_INCREMENT,
    burger_name varchar(100),
    devoured boolean,
    primary key (id)
);