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

- 4 x Aplicacion Node.js (1 standalone y 3 tras loadbalancer)

- 4 x Aplicacion Flask + Gunicorn (1 worker) (1 standalone y 3 tras loadbalancer)

- Aplicacion Flask + Gunicorn (3 workers)

## Cómo medir carga

Se utilizaron distintos escenarios predefinidos. Una vez levantados los containers, para medir carga sobre los mismos:

```sh
# Me muevo hasta el directorio de Artillery
cd perf

# Instalo dependencias 
npm install

# Ejecuto el escenario elegido 
npm run scenario <scenario> <aplicacion>

```

## Escenarios
Los distintos escenarios son

### Root
- Nombre: ``` root ```
- Descripción: Endpoint sencillo tipo 'Hola mundo'

### DB
- Nombre: ``` db ```
- Descripción: Endpoint lento y liviano

### Calc
- Nombre: ``` calc ```
- Descripción: Genera un ciclo de 1.000.000 de operaciones

### Light Static
- Nombre: ``` light_static ```
- Descripción: Sirve una foto de 63 kb

### Heavy Static
- Nombre: ``` heavy_static ```
- Descripción: Sirve un archivo pdf de 2 Mb


## Aplicaciones
Los distintos entornos de aplicaciones son

### Gunicorn
- Entonrno: ``` gunicorn ```
- Target: http://localhost:5555/gunicorn/

### Gunicorn Multiple
- Entonrno: ``` gunicorn_multiple ```
- Target: http://localhost:5555/gunicorn_multiple/

### Gunicorn Replicated
- Entonrno: ``` gunicorn_replicated ```
- Target: http://localhost:5555/gunicorn_replicated/

### Node
- Entorno: ``` node ```
- Target: http://localhost:5555/node/

### Node Replicated
- Entorno: ``` node_replicated ```
- Target: http://localhost:5555/node_replicated/



## Endpoints de interés

### Aplicacion Node.js 

```sh
# Endpoint sencillo
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



