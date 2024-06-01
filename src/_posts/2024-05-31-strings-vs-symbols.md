---
layout: post
title: "Primeros pasos con Ruby: Strings y Symbols"
description: "Explorando Ruby con los primeros pasos, cadenas y símbolos"
date: 2024-05-31 23:30:17 -0600
human_date: Mayo 31, 2024
headshot: /images/bash.jpg
categories:
  - ruby
  - strings
  - symbols
---

<p align="center">
  <a href="https://ruby-lang.org/es/">
    <img src="https://www.ruby-lang.org/images/header-ruby-logo.png"
    alt="Ruby" />
  </a>
</p>

En Ruby, tanto las cadenas de texto (strings) como los símbolos (symbols) son tipos de datos fundamentales. Aunque pueden parecer similares, tienen diferencias importantes en términos de propósito, uso y comportamiento interno. Pueden definirse con comillas simples ('') o dobles (""). Aquí te proporcionaré lo mas importante de estas diferencias y sus usos recomendados.

<h2 class="dark:text-white">Strings</h2>

Un string es una serie de caracteres o bytes utilizados para almacenar texto o datos binarios. Los strings en Ruby son mutables, es decir, pueden modificarse después de ser creados.

<h3 class="dark:text-white">Creación:</h3>
```ruby
string = "I am a string!"
another_string = 'I am also a string!'
```

<h3 class="dark:text-white">Mutabilidad:</h3>
Los strings pueden modificarse en Ruby. Cada vez que se crea un string, se asigna un nuevo espacio de memoria y un <code class="dark:text-white">object_id</code> único.
```ruby
:001 > "hello".object_id
=> 70102163173680
:002 > "hello".object_id
=> 70102163111540
```

<h3 class="dark:text-white">Concatenación:</h3>
```ruby
four = "Four "
legs = "legs!"
fourlegs = four + legs # "Four legs!"
```

<h3 class="dark:text-white">Concatenación con <code class="dark:text-white">+=</code> y <code class="dark:text-white"><<</code>:</h3>
```ruby
four += legs  # Modifica la variable original
four << legs  # Modifica la variable original
```

<h3 class="dark:text-white">Acceso a Substrings y Caracteres:</h3>
```ruby
string = "This is fun!"
string[1]     # "h"
string[-1]    # "!"

string = "Potatoes!"
string[4..8]  # "toes!"
string[4,5]   # "toes!"
```

<h3 class="dark:text-white">Interpolación:</h3>
La interpolación solo se puede lograr con las comillas dobles. Ya que las comillas dobles activan un nivel más alto de interpretación en Ruby, mientras que las comillas simples son más literales y no interpretan contenido en ellas. Esto proporciona flexibilidad para manejar diferentes tipos de cadenas según las necesidades del programador.
```ruby
passes = 6
"I think I got #{passes} bags of doritos today."  # "I think I got 6 bags of doritos today."

"The square root of 9 is #{Math.strt(9)}"         # "The square root of 9 is 3"
```

<h3 class="dark:text-white">Dividir y Unir cadenas:</h3>
```ruby
string = "Armbar Triangle Omoplata"
drills = string.split         # ["Armbar", "Triangle", "Omoplata"]

string = "Justin,Lucy,Otto"
coolfolks = string.split(/,/) # ["Justin", "Lucy", "Otto"]

array = ["Initiate", "ultimate", "passing", "combo"]
strategy = array.join(" ")    # "Initiate ultimate passing combo"
```

<h2 class="dark:text-white">Symbols</h2>

Un symbol es una serie de caracteres o bytes asociados con un número único (ID) en Ruby. Los symbols son inmutables, lo que significa que solo una copia de un symbol necesita ser creada ya que siempre referencia al mismo objecto en el mismo espacio de memoria, por lo que son eficientes en el uso de espacio.

<h3 class="dark:text-white">Creación:</h3>
```ruby
:my_symbol
:another_symbol
```

<h3 class="dark:text-white">Inmutabilidad:</h3>
Los symbols no pueden modificarse una vez creados y siempre retornan el mismo <code class="dark:text-white">object_id</code>:
```ruby
a = :hello
b = :hello
a.object_id == b.object_id # true
```

```ruby
:001 > :hello.object_id
=> 1266588
:002 > :hello.object_id
=> 1266588
```

<h3 class="dark:text-white">Uso Interno:</h3>
Ruby asocia un número ID a cada symbol. Este ID es más eficiente de manejar en comparación con las cadenas de caracteres, especialmente cuando se utilizan repetidamente los mismos valores como claves en hashes o identificadores de métodos.

<h3 class="dark:text-white">Intercambiabilidad con Strings:</h3>
Ruby permite que los symbols se utilicen en operaciones similares a las strings, pero convierte internamente los tipos según sea necesario. Esto puede llevar a impactos de rendimiento si se realiza la conversión frecuentemente.

<h3 class="dark:text-white">Comparación con Strings:</h3>
Los symbols son más eficientes cuando se utilizan como identificadores que no cambian, como claves de hashes o nombres de métodos. Las strings, al ser mutables, son más adecuadas para manejar y manipular datos textuales.

<h2 class="dark:text-white">Cuándo usar cada Uno</h2>

<h4 class="dark:text-white">Usar Symbols:</h4>

- Cuando se necesitan identificadores constantes.
- Como claves en hashes.
- Para definir métodos o nombres de variables que no cambian.

<h4 class="dark:text-white">Usar Strings:</h4>

- Para manejar y manipular texto.
- Cuando los valores necesitan ser modificables.
- Para entrada de usuario o datos textuales.

<h3 class="dark:text-white">Ejemplos</h3>
Symbols como identificadores:
```ruby
def switch(value)
  case value
  when :foo
    # foo
  when :bar
    # bar
  when :baz
    # baz
  end
end
```

Strings para datos textuales:
```ruby
def append_to(value)
  value.gsub(/foo/, 'bar')
end
```

Comprender las diferencias entre strings y symbols en Ruby es crucial para escribir código eficiente y claro. Utilizar symbols para identificadores constantes y strings para datos mutables y textuales ayuda a optimizar el rendimiento y la claridad del código.
