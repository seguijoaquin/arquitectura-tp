#!/bin/sh
if [ -e myreport_$1 ]; then
	npm run artillery -- report myreport_$1
else
	echo "ERROR: Debe ejecutar artillery para poder generar un reporte primero y pasar el nombre del escenario por parametro"
fi
