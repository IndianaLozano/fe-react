Primero, desinstalar node si ya lo tenemos

```
sudo apt-get purge nodejs
```

Luego, descargar la última versión de Node JS desde: https://nodejs.org/

Extraer los archivos en una carpeta (idealmente donde guardemos programas o herramientas)

Una vez extraido, copiar la ruta a los binarios:
Dentro de la carptea de node, entrar a la carpeta bin. Abrir una terminal en esa carpeta. Ejecutar pwd y copiar el resultado para usarlo despues.

Abrir el archivo rc que corresponda a la consola que usamos (.bashrc si usamos bash o .zshrc si usamos zsh).

```
code ~/.bashrc
code ~/.zshrc
```

Dentro de ese archivo, agrerar una linea al final que contenga lo siguiente, reemplazando lo que esta entre corchetes por la direccion que obtuvimos antes con pwd:

```bash
export PATH="[lo que copiamos antes]:$PATH"
```

Ya deberia estar node instalado, si no les funciona prueben iniciar una terminal de nuevo (incluida la de visual studio code) para refrescar los cambios.