# TP de Arquitectura de Software (75.73) del 1er cuatrimestre de 2018

## Como orquestar los containers

```sh
# Levantar todos los containers
sudo docker-compose up -d --build

# Bajar algun container 
sudo docker-compose stop <container>

```

## Lista de containers:

- Graphite

- Cadvisor

- Grafana

- Nginx

- 4 x Aplicacion Node.js

- 4 x Aplicacion Flask + Gunicorn (1 worker)

- Aplicacion Flask + Gunicorn (3 workers)

## Cómo medir carga

Se utilizaron distintos escenarios predefinidos. Se generó carga con Artillery y se recolectaron los datos con Grafana + StatsD + Cadvisor

## Endpoints de interés

### Aplicacion Node.js 

```sh
# index
http://localhost:5555/node/

# Endpoint lento y liviano
# Simula una llamada a una base de datos con un sleep de un tiempo random de hasta 4 segundos
http://localhost:5555/node/db

# Endpoint lento y pesado
# Recibe por parametro un entero y genera un ciclo de ese tamaño
http://localhost:5555/node/calc/<int>

# Contenido estático

## Sirve una foto de 63 kb de mi perra Uma alentando a la selección
http://localhost:5555/node/static/pic.jpg

## Sirve un archivo pdf de 2 Mb
http://localhost:5555/node/static/book.pdf

```

### Aplicacion Node.js + loadbalancer

```sh
# index
http://localhost:5555/node_replicated/

# Endpoint lento y liviano
# Simula una llamada a una base de datos con un sleep de un tiempo random de hasta 4 segundos
http://localhost:5555/node_replicated/db

# Endpoint lento y pesado
# Recibe por parametro un entero y genera un ciclo de ese tamaño
http://localhost:5555/node_replicated/calc/<int>

# Contenido estático

## Sirve una foto de 63 kb de mi perra Uma alentando a la selección
http://localhost:5555/node_replicated/static/pic.jpg

## Sirve un archivo pdf de 2 Mb
http://localhost:5555/node_replicated/static/book.pdf

```

### Aplicacion Flask + Gunicorn (1 worker)

```sh
# index
http://localhost:5555/gunicorn/

# Endpoint lento y liviano
# Simula una llamada a una base de datos con un sleep de un tiempo random de hasta 4 segundos
http://localhost:5555/gunicorn/db

# Endpoint lento y pesado
# Recibe por parametro un entero y genera un ciclo de ese tamaño
http://localhost:5555/gunicorn/calc/<int>

# Contenido estático

## Sirve una foto de 63 kb de mi perra Uma alentando a la selección
http://localhost:5555/gunicorn/static/pic.jpg

## Sirve un archivo pdf de 2 Mb
http://localhost:5555/gunicorn/static/book.pdf

```

### Aplicacion Flask + Gunicorn (3 workers)

```sh
# index
http://localhost:5555/gunicorn_multiple/

# Endpoint lento y liviano
# Simula una llamada a una base de datos con un sleep de un tiempo random de hasta 4 segundos
http://localhost:5555/gunicorn_multiple/db

# Endpoint lento y pesado
# Recibe por parametro un entero y genera un ciclo de ese tamaño
http://localhost:5555/gunicorn_multiple/calc/<int>

# Contenido estático

## Sirve una foto de 63 kb de mi perra Uma alentando a la selección
http://localhost:5555/gunicorn_multiple/static/pic.jpg

## Sirve un archivo pdf de 2 Mb
http://localhost:5555/guniorn_multiple/static/book.pdf

```

### Aplicacion Flask + Gunicorn (1 worker) + loadbalancer

```sh
# index
http://localhost:5555/gunicorn_replicated/

# Endpoint lento y liviano
# Simula una llamada a una base de datos con un sleep de un tiempo random de hasta 4 segundos
http://localhost:5555/gunicorn_replicated/db

# Endpoint lento y pesado
# Recibe por parametro un entero y genera un ciclo de ese tamaño
http://localhost:5555/gunicorn_replicated/calc/<int>

# Contenido estático

## Sirve una foto de 63 kb de mi perra Uma alentando a la selección
http://localhost:5555/gunicorn_replicated/static/pic.jpg

## Sirve un archivo pdf de 2 Mb
http://localhost:5555/guniorn_replicated/static/book.pdf

```

## Cómo acceder a las estadísticas

```sh

# Aplicacion Grafana
http://localhost

# Aplicacion Graphite 
http://localhost:8090

# Aplicacion Cadvisor
http://localhost:8080

```



