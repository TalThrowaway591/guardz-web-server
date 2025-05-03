CREATE TABLE entries(
    title varchar(127),
    body varchar(255),
    ip varchar(31),
    createdTime timestamp,
    active boolean
);
insert into entries
values ('hello', 'world', 'myip', now(), true);