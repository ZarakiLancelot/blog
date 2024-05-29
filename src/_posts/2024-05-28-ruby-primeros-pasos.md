---
layout: post
title: "Primeros pasos con Ruby: Varibales, Tipos de Datos y Operadores"
description: "Explorando Ruby con los primeros pasos, información básica de la sintaxis"
date: 2024-05-28 23:44:32 -0600
human_date: Mayo 28, 2024
headshot: /images/bash.jpg
categories:
  - ruby
  - variables
  - operadores
  - tipos de datos
---

<p align="center">
  <a href="https://ruby-lang.org/es/">
    <img src="https://www.ruby-lang.org/images/header-ruby-logo.png"
    alt="Ruby" />
  </a>
</p>

Ruby es un lenguaje de programación conocido por su simplicidad y elegancia. En esta entrada, vamos a explorar los conceptos básicos de Ruby, incluyendo variables, tipos de datos y operadores, para que puedas empezar a escribir tus primeros programas en Ruby.

<h2 class="dark:text-white">Variables en Ruby</h2>

Las variables en Ruby se utilizan para almacenar datos que pueden ser usados y manipulados posteriormente en el programa. A diferencia de algunos lenguajes, no necesitas declarar el tipo de dato que contendrá la variable; Ruby lo hace automáticamente (lo infiere).

<h3 class="dark:text-white">Ejemplo de declaración de variables:</h3>

```ruby
nombre = "Edwin"
edad = 40
es_estudiante = true
```

En el ejemplo anterior, nombre es una variable de tipo cadena (string), edad es un número entero (integer), y es_estudiante es un valor booleano.

Tipos de Datos en Ruby
Ruby maneja varios tipos de datos básicos que son esenciales para cualquier programa:

1. Números

-- Enteros (Integer): Representan números enteros, positivos o negativos.
```ruby
entero = 42
```

-- Flotantes (Float): Representan números con punto decimal.
```ruby
flotante = 3.14
```

2. Cadenas (String)

Las cadenas son secuencias de caracteres encerradas entre comillas simples o dobles.
```ruby
cadena_comillas_simple = 'Hola mundo'
cadena_comillas_dobles = "Ruby es genial!"
```
Más adelante en otra entrada hablaremos de las diferencias y distintos usos entre las comillas simples y dobles, según la necesidad de interpretar el contenido de la cadena. Entender estas diferencias te ayudará a elegir la forma adecuada de definir tus cadenas en diferentes situaciones.

3. Símbolos (Symbol)

Los símbolos son inmutables y se utilizan como identificadores o claves en hashes.
```ruby
simbolo = :mi_simbolo
```

4. Booleanos (Boolean)

Los valores booleanos pueden ser `true` o `false`.
```ruby
verdadero = true
falso = false
```

5. Arrays

Los arrays son listas ordenadas de elementos, que pueden ser de cualquier tipo.
```ruby
arreglo = [1, "dos", :tres, 4.0]
```

6. Hashes

Los hashes son colecciones de pares clave-valor.
```ruby
hash = {nombre: "Edwin", edad: 40, ciudad: "Guatemala"}
```

<h2 class="dark:text-white">Operadores en Ruby</h2>
Ruby ofrece una variedad de operadores para realizar operaciones en variables y valores.

<h3 class="dark:text-white">Operadores Aritméticos</h3>
<ul>
  <li>
    <strong class="dark:text-white">Suma (+):</strong> <code class="dark:text-white">2 + 3</code> devuelve <code class="dark:text-white">5</code>
  </li>
  <li>
    <strong class="dark:text-white">Resta (-):</strong> <code class="dark:text-white">5 - 2</code> devuelve <code class="dark:text-white">3</code>
  </li>
  <li>
    <strong class="dark:text-white">Multiplicación (*):</strong> <code class="dark:text-white">4 * 3</code> devuelve <code class="dark:text-white">12</code>
  </li>
  <li>
    <strong class="dark:text-white">División (/):</strong> <code class="dark:text-white">8 / 2</code> devuelve <code class="dark:text-white">4</code>
  </li>
  <li>
    <strong class="dark:text-white">Módulo (%):</strong> <code class="dark:text-white">10 % 3</code> devuelve <code class="dark:text-white">1</code>
  </li>
  <li>
    <strong class="dark:text-white">Exponenciación (**):</strong> <code class="dark:text-white">2 ** 3</code> devuelve <code class="dark:text-white">8</code>
  </li>
</ul>

<h3 class="dark:text-white">Operadores de Comparación</h3>
<ul>
  <li>
    <strong class="dark:text-white">Igual a (==):</strong> <code class="dark:text-white">5 == 5</code> devuelve <code class="dark:text-white">true</code>
  </li>
  <li>
    <strong class="dark:text-white">Distinto de (!=):</strong> <code class="dark:text-white">5 != 3</code> devuelve <code class="dark:text-white">true</code>
  </li>
  <li>
    <strong class="dark:text-white">Mayor que (>):</strong> <code class="dark:text-white">6 > 4</code> devuelve <code class="dark:text-white">true</code>
  </li>
  <li>
    <strong class="dark:text-white">Menor que (<):</strong> <code class="dark:text-white">3 < 7</code> devuelve <code class="dark:text-white">true</code>
  </li>
  <li>
    <strong class="dark:text-white">Mayor o igual que (>=):</strong> <code class="dark:text-white">5 >= 5</code> devuelve <code class="dark:text-white">true</code>
  </li>
  <li>
    <strong class="dark:text-white">Menor o igual que (<=):</strong> <code class="dark:text-white">4 <= 6</code> devuelve <code class="dark:text-white">true</code>
  </li>
</ul>

<h3 class="dark:text-white">Operadores Lógicos</h3>
<ul>
  <li>
    <strong class="dark:text-white">Y (&&):</strong> <code class="dark:text-white">true && false</code> devuelve <code class="dark:text-white">false</code>
  </li>
  <li>
    <strong class="dark:text-white">O (||):</strong> <code class="dark:text-white">true || false</code> devuelve <code class="dark:text-white">true</code>
  </li>
  <li>
    <strong class="dark:text-white">No (!):</strong> <code class="dark:text-white">!true</code> devuelve <code class="dark:text-white">false</code>
  </li>
</ul>

<h2 class="dark:text-white">Ejemplos prácticos</h2>
Veamos algunos ejemplos que combinan los conceptos de los diferentes operadores:
```ruby
# Declaración de variables
nombre = "Edwin"
edad = 40
es_programador = true

# Uso de operadores aritméticos
suma = edad + 2         # 40
producto = edad * 2     # 80

# Uso de operadores de comparación
mayor_de_edad = edad >= 18   # true

# Uso de operadores lógicos
puede_votar = (edad >= 18) && es_programador  # true

# Uso de cadenas y símbolos
mensaje = "Hola, #{nombre}!"  # "Hola, Edwin!"
```

Entender los fundamentos de variables, tipos de datos y operadores en Ruby es crucial para comenzar a escribir programas efectivos y eficientes. Con estos conceptos básicos, estamos listos para explorar más características de Ruby, explorar a profundiad cada uno de ellos y construir aplicaciones más complejas.

<strong class="dark:text-white">¡Sigue practicando y diviértete codificando con Ruby!</strong>
