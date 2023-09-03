/** CREACION DB EN DOCKER **/
--EJECUTAR
docker run --name some_postgres -e POSTGRES_USER=susan -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mysusandb -p 5432:5432 -d postgres

/**CREACION DE TABLA EN BD **/
-- CREAR TABLA USUARIOS
CREATE TABLE public.usuarios (
	nombre varchar NULL,
	primer_apellido varchar NULL,
	segundo_apellido varchar NULL,
	cedula_identidad varchar NULL,
	fecha_nacimiento date NULL
);

-- INSERTAR DATOS DE PRUEBA INICIAL 
INSERT INTO public.usuarios (nombre,primer_apellido,segundo_apellido,cedula_identidad,fecha_nacimiento)
	VALUES ('susan','espinal','copa','6943652','23-08-1989');
INSERT INTO public.usuarios (nombre,primer_apellido,segundo_apellido,cedula_identidad,fecha_nacimiento)
	VALUES ('carlos','romero','perez','6875484','15-05-1984');

/** EJECUTAR DESDE EL ARCHIVO INDEX.JS (ARCHIVO MAIN) **/
EJEMPLO: C:\Susan\examen> node index.js

/** USO POSTMAN **/
ejemplo: localhost:3000/usuarios