---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

# Bienvenido a mi Blog.

### PUBLICACIONES RECIENTES

Mis últimas publicaciones

<div class="mt-10 space-y-10 border-t border-gray-200 pt-10 not-prose">
  <% collections.posts.resources[0..4].each do |post| %>
    <%= render Shared::PostItem.new(post: post) %>
  <% end %>
</div>

----

**Creado por: Edwin Einsen Vásquez Velásquez**
{:style="text-align:center"}
