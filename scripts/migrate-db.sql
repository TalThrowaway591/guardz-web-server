-- init DB and seed it
CREATE DATABASE guardz;

\c guardz

CREATE TABLE entries(
    id varchar(25),
    title varchar(127),
    body varchar(255),
    ip varchar(31),
    createdTimestamp timestamp,
    active boolean
);
insert into entries
values (
        'entry_vnb489y237u',
        'hello',
        'world',
        '::1',
        now(),
        true
    );