# BLOG Website made with Bridgetown
[![Netlify Status](https://api.netlify.com/api/v1/badges/dab98bff-4ef4-4ba6-b065-38d764f0b1a4/deploy-status)](https://app.netlify.com/sites/blog-einsen/deploys)

Welcome to my new Blog website! Created with Bridgetown and TailwindCSS.

<h2 align="center">Blog</h2>
<div align="center">

  [![bridgetown ~> 1.3.0](https://img.shields.io/static/v1?label=bridgetown&message=1.3.0&color=green&logo=github)](https://www.bridgetownrb.com/)
  [![Ruby - >=2.7](https://img.shields.io/badge/Ruby->%3D2.7-red?logo=ruby&logoColor=white)](https://ruby-lang.org)
  [![Node.js - >=10.13](https://img.shields.io/badge/Node.js->%3D10.13-blue?logo=node.js&logoColor=white)](https://nodejs.org)
  [![Yarn - 1](https://img.shields.io/badge/Yarn-1-blue?logo=yarn&logoColor=white)](https://classic.yarnpkg.com)

  [![stars - blog](https://img.shields.io/github/stars/ZarakiLancelot/blog?style=social)](https://github.com/ZarakiLancelot/blog)
  [![forks - blog](https://img.shields.io/github/forks/ZarakiLancelot/blog?style=social)](https://github.com/ZarakiLancelot/blog)
  [![License - MIT](https://img.shields.io/badge/License-MIT-blue)](#license)

</div>

## Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Development](#development)
- [Commands](#commands)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Prerequisites

- [GCC](https://gcc.gnu.org/install/)
- [Make](https://www.gnu.org/software/make/)
- [Ruby](https://www.ruby-lang.org/en/downloads/)
  - `>= 2.7`
- [Bridgetown Gem](https://rubygems.org/gems/bridgetown)
  - `gem install bridgetown -N`
- [Node](https://nodejs.org)
  - `>= 12`
- [Yarn](https://yarnpkg.com)

## Install

```sh
cd bridgetown-site-folder
bundle install && yarn install
```
> Learn more: [Bridgetown Getting Started Documentation](https://www.bridgetownrb.com/docs/).

## Development

To start your site in development mode, run `bin/bridgetown start` and navigate to [localhost:4000](https://localhost:4000/)!

Use a [theme](https://github.com/topics/bridgetown-theme) or add some [plugins](https://www.bridgetownrb.com/plugins/) to get started quickly.

### Commands

```sh
# running locally
bin/bridgetown start

# build & deploy to production
bin/bridgetown deploy

# load the site up within a Ruby console (IRB)
bin/bridgetown console
```

> Learn more: [Bridgetown CLI Documentation](https://www.bridgetownrb.com/docs/command-line-usage)

## Deployment

You can deploy Bridgetown sites on hosts like Render or Vercel as well as traditional web servers by simply building and copying the output folder to your HTML root.

> Read the [Bridgetown Deployment Documentation](https://www.bridgetownrb.com/docs/deployment) for more information.

## Contributing

If repo is on GitHub:

1. Fork it
2. Clone the fork using `git clone` to your local development machine.
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create a new Pull Request
