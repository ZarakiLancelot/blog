---
layout: post
title:  "Bridgetown"
description: "Generalidades sobre Bridgetown, la siguiente generación de framework fullstack y progresivo generador de sitios, realizado en Ruby"
date:   2023-12-30 00:37:57 -0600
human_date: Diciembre 30, 2023
categories:
  - updates
  - ruby
  - bridgetown
---

<p align="center">
  <a href="https://www.bridgetownrb.com">
    <img src="https://www.bridgetownrb.com/images/bridgetown-logo-twitter-card.jpg?v=1" alt="Bridgetown" width="750" />
  </a>
</p>

<h2 class="dark:text-white">¿Qué es Bridgetown?</h2>

Es un framework fullstack generador de sitios progresivos con Ruby. Está construido sobre tecnologías como Ruby, Puma y Roda. Al igual que el mismo Ruby, Bridgetown está
optimizadoo para "la felicidad de los desarrolladores web". Es muy fácil de utilizar Bridgetown porque se agrega contenido en Markdown (lenguaje de marcado), junto con diseños y componentes que utilizan sintaxis de plantilla como Liquid o ERB, y que luego Bridgetown compila HTML, CSS Y JavaScript en una carpeta de salido para el sitio web.

Bridgetown utiliza Ruby, así como Node para el procesamiento basado en JavaScript en la parte del frontend.

<h3 class="dark:text-white">INSTRUCCIONES INICIALES</h3>

<h4 class="dark:text-white">Requisitos</h4>

<ul>
  <li>
    <p>
      <a href="https://gcc.gnu.org/install/" class="dark:text-white">GCC</a> y <a href="https://www.gnu.org/software/make/" class="dark:text-white">Make</a> (los cuales puedes verificar a través de los comandos `gcc -v`, `g++ v` y `make -v`)
    </p> 
  </li>
  <li>
    <p>
      <a href="https://www.ruby-lang.org/en/downloads/" class="dark:text-white">Ruby</a> versión 2.7 o superior (puedes verificar tu versión de ruby con el comando `ruby -v`)
    </p>
  </li>
  <li>
    <p>
      <a href="https://nodejs.org/" class="dark:text-white">Node</a> versión 12 o superior (la cual puedes verificar con el comando `node -v`)
    </p>
  </li>
  <li>
    <p>
      <a href="https://yarnpkg.com/" class="dark:text-white">Yarn</a> (puedes verificar la versión con el comando `yarn -v`)
    </p>
  </li>
</ul>

<h4 class="dark:text-white">Instalación</h4>

- Instalar Bridgetwon y sus dependencias (gemas relacionadas)

```shell{.dark:text-white}
gem install bridgetown -N
```

- Crear un nuevo sitio con Bridgetown './mi_sitio'

```shell{.dark:text-white}
bridgetown new mi_sitio
```

- Moverse al nuevo directorio creado

```shell{.dark:text-white}
cd mi_sitio
```

- Ejecutar el servidor de desarrollo

```shell{.dark:text-white}
bin/bridgetown start
```

- Abra un navegador web (Mozilla, Chrome, Brave, Safari, Opera) y escriba 'http://localhost:4000'

- Y ¡Listo!

Bridgetown requiere de archivos de post tipo blog nombrados acorde al siguiente formato:

'YEAR-MONTH-DAY-title.EXT'

Donde 'YEAR' es un número de cuatro dígitos, 'MONTH' y 'DAY' son ambos números de dos dígitos, y 'EXT' es la extensión del archivo representando el formato usado en el archivo (por ejemplo, 'md' para Markdown).

Bridgetown también ofrece soporte para snippets de código:

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

Verifica la documentación <a href="https://bridgetownrb.com/docs/" class="dark:text-white">Bridgetown docs</a> para más información de cómo obtener lo mejor y último de Bridgetown.

<em class="dark:text-white">Diviértete y <strong class="dark:text-white">buena suerte</strong>!</em>
