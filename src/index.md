---
layout: default
---

<h1 class="dark:text-white">Bienvenido a mi Blog.</h1>

Acá podrás encontrar mis apuntes así como lo que he aprendido sobre Ruby y otras tecnologías de mi interés.

Es como una base de datos de conocimiento, así que si lo que ves te puede servir, tómalo y compártelo si crees que a alguien mas también.

<h2 class="dark:text-white">PUBLICACIONES RECIENTES</h2>

<div class="mt-10 space-y-10 border-t border-gray-200 pt-10 not-prose dark:text-white">
  <% collections.posts.resources[0...3].each do |post| %>
    <%= render Shared::PostItem.new(post: post) %>
  <% end %>
</div>

----

<div class="dark:text-white">
  <p>Creado por: Edwin Einsen Vásquez Velásquez</p>
</div>
{:style="text-align:center"}
