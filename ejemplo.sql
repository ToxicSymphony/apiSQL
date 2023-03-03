create database ejemplo
use ejemplo

create table usuarios(
id_usuario int primary key identity(100,1),
nombre varchar (80) not null,
apellido1 varchar (80) not null,
apellido2 varchar (80),
correo varchar(80) not null,
contraseña varchar (12) not null,
permisos varchar (20),
tel bigint)
SELECT * FROM usuarios
create table indicadores(
id_indicador int primary key identity (200,1),
nombre varchar (100),
descripcion1 varchar (100),
descripcion2 varchar (500),
fecha date
)

create table usuarios_indicadores(
id_usuario1 int
constraint apodo1 foreign key (id_usuario1) references usuarios (id_usuario),
id_indicador1 int 
constraint apodo2 foreign key (id_indicador1) references indicadores (id_indicador))

//*1433
