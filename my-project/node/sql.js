var createTables = "create table if not exists `usr_user`(`id` int(10) unsigned auto_increment, `name` varchar(100) not null, `phone` varchar(20), `password` varchar(32) not null, `email` varchar(100), `icon` varchar(100), `created_time` int(10) not null, `flag` int(5), primary key (`id`))ENGINE=InnoDB auto_increment=1000 default charset=utf8;";
var changeTitle = 'alter table usr_user change i j int(10) not null';