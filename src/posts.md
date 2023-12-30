---
layout: page
title: Mis Publicaciones
description: "Listado de todas las publicaciones realizadas en mi blog."
paginate:
  collection: posts
  per_page: 5
  sort_field: date
---

<div class="mt-10 space-y-10 border-t border-gray-200 pt-10 not-prose">
  <% collections.posts.resources.each do |post| %>
    <%= render Shared::PostItem.new(post: post) %>
  <% end %>
</div>
