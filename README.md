# nx-workspace

<div id="top"></div>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx.png" 
width="100%" alt="Nx - Smart, Fast and Extensible Build System"></p>

[![License](https://img.shields.io/npm/l/@nrwl/workspace.svg?style=flat)]() [![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat)]() [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)

[![Mergify Status][mergify-status]][mergify] ![labeler workflow](https://github.com/pulanski/nx-workspace/actions/workflows/labeler.yml/badge.svg) ![todo workflow](https://github.com/pulanski/nx-workspace/actions/workflows/todo.yml/badge.svg) [![Issues][issues-shield]][issues-url]

[![LinkedIn][linkedin-shield]][linkedin-url]

  <h2 align="center">nx-workspace</h2>

  <p align="center">
    Remote monorepo housing full stack TypeScript apps available for both web and mobile platforms using Nx, Ionic, Angular, TailwindCSS, RxJS, NestJS, TypeORM, PostgreSQL, and Docker
<!--  <br />    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />
<!--    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    · -->
    <a href="https://github.com/pulanski/nx-workspace/issues">Report Bug</a>
    ·
    <a href="https://github.com/pulanski/nx-workspace/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-monorepo">About The Monorepo</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
       <!-- <li><a href="#installation">Installation</a></li> -->
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE MONOREPO -->

## About The Monorepo

<!-- [Monorepo Screen Shot] is done in VSCode
[![Product Name Screen Shot][product-screenshot]](https://example.com)  -->

This monorepo serves as a single source of truth for all of the dependencies required by the apps/projects I'm currently working on building. It is designed primarily with scale and best-practices in mind such that the codebase progresses cleanly and maintains both high code quality and maintainability over time. This means that if and when I want to take a step back from working on a particular project (to work on another or take a break in general), I can do so and have the ability to come back later and easily start where I left off. In a way, this approach follows the core idea behind writing software with Java back in the day (i.e. write once, run anywhere).

> A quick tip: If you're interested in getting a good bird's eye view of the monorepo architecture, you can check out this neat tool, <a href="https://www.octotree.io/">octotree</a>.

Following the core philosophy behind Nx, the apps themselves are extremely lightweight shells, with the vast majority of functionality abstracted into libraries in an attempt to promote code sharing and reuse between applications at any scale.

This monorepo promotes these principles:

- Your time should be focused on creating something amazing. A project that solves a problem and helps others
- You shouldn't be doing the same tasks over and over like creating a README from scratch
- You should implement DRY principles to the rest of your life :smile:

### Why Nx? How is it useful?

In my mind, the best way to answer this question is to look at what problems Nx helps you solve.

This comes directly from the Nx documentation.

> Nx has a similar design philosophy to Visual Studio Code. Code is a powerful text editor, and you can be very productive with it even if you don't install any extensions. The ecosystem of VSCode's extensions though is what can really level up your productivity.
>
> Nx is similar. The core of Nx is generic, simple, and unobtrusive. Nx plugins, although very useful for many projects, are completely optional.

### What does that mean to _you_, the developer?

In my experience, Nx provides you with really great tools to help you create amazing apps, projects, tools (whatever it may be that you're building) in a manner that is _fast_ and _predictable_ once you're up and running within the ecosystem.

With that being said, let me propose you with a situation. Let's say you're working on an Angular project (this doesn't apply to Angular exclusively and the same course of logic can be used with React, Vue, NestJS, Rust, Python, etc.) and you create this awesome feature that you want to use in some of your other projects. Without utilizing Nx this may look like going through the process of copying the code from project to another and then fixing any new bugs which may have been introduced during the migration. This approach has a few problems. For one, it's messy, results in code duplication, and means that you the developer have to balance all of the dependencies utilized between projects yourself, and make sure you're not creating any circular dependencies. As a result, as your projects scale, the codebase quickly becomes difficult to manage and effectively add to.

As a summary, Nx helps you:

- reduce clutter (no more large portions of disk space clogged by various copies of node_modules)
- promote code reuse (build once, use everywhere)
- helps you air on the side of over-engineering, allowing you to build software at a predictable, granular level.

As a general note:

- While this approach may sound intimidating at first, it is important to note that it has been shown to work at large companies such as Google and Facebook, which are said to have monorepos containing 100s of various apps/projects the company is currently working on producing.

### New to Nx?

- The architecture utilized within the monorepo is quite expansive and contains numerous layers of abstraction, which can be both daunting and difficult to fully grasp for the Nx uninitiated.
- If you're new to Nx and want to try implementing this structure into your own projects, I'd highly recommend going through their <a href="https://nx.dev/getting-started/intro"> documentation</a>. It's well written and can help provide you with a mental model behind everything that's going on (because there's a lot).

### Final Note

If you're interested in demoing/exploring the various projects housed within this monorepo, you can do so by heading over to the Getting Started section found below.

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

This monorepo contains full-stack web and mobile apps built with the following frameworks/libraries/technologies.

Frontend

- [Ionic](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [TailwindCSS](https://tailwindcss.com/)

Backend

- [NestJS](https://nestjs.com/)

ORM

- [TypeORM](https://typeorm.io/)

Database

- [PostgreSQL](https://www.postgresql.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Developer/Design Tools

Within the monorepo is a first class suite of various tools utilized to promote Test Driven Development and to create a consistent Design System (provided out of the box by Nx, pretty cool right?). Each of these tools, expose APIs which, in my opinion, are intuitive, simple-to-use and make the testing and design portions behind software development both easy and even fun to do.

Unit Testing

- [Jest](https://jestjs.io/)

End-to-End Testing

- [Cypress](https://www.cypress.io/)

Design System

- [Storybook](https://storybook.js.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

You can get started by cloning this repo, which can be done via the <a href="https://cli.github.com/"> GitHub CLI </a> using the following shell command.

```sh
gh repo clone pulanski/nx-workspace
```

As a note:

- The GitHub CLI is not required for cloning the project, however it is a tool I came across a while back and have found to be useful in my experience with open-source software development as the API it provides is simple, declarative, and intuitive, making it easy to take a deep-dive into codebases for open-source projects you may find interesting.
- Additionally, the CLI integrates quite nicely with the GitFlow branching strategy via commands like gh pr create --web
- If you don't already have the GitHub CLI, it can be installed to your machine locally via your OS's package manager. Examples are shown below.

  - Mac/Homebrew

  ```sh
  brew install gh
  ```

  - Arch/Manjaro

  ```sh
  yay -S gh
  ```

With the repository cloned to your local machine, you can demo any of the projects found inside the apps directory in the root of the monorepo. Each of these have an associated README included to help you better understand everything that's going on with that part of the stack.

### Prerequisites

Before you can begin working within the monorepo, it's important that you have the you have <a href="https://nodejs.org/en/"> NodeJS </a> installed on your machine as currently everything within the monorepo is reliant on it. With NodeJS installed, and the repo successfully cloned, you can then use the following shell command to install all of the necessary dependencies of projects housed within the repo via the <a href="https://yarnpkg.com/">Yarn</a> package manager.

```sh
yarn
```

As a note:

- Yarn is not required by any means in the development process. There are various JavaScript package managers currently available to JS/TS developers, most notably <a href="https://www.npmjs.com/">npm</a>, <a href="https://yarnpkg.com/">Yarn</a>, and <a href="https://pnpm.io/">pNPM</a> to name a few. However, I tend to go with Yarn as it provides these features out of the box.
  - ⬆️ Emojis
  - [Speed](https://yarnpkg.com/en/compare) 🏃⌁
  - Automatic shrinkwrap with the yarn lockfile
  - Security-centric design

<!-- ### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- USAGE EXAMPLES
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [x] Integrate CircleCI into the CI/CD pipeline
- [ ] Configure GitHub actions for desired pipeline functionality
- [ ] Work on abstracting most of core features and functionality into libraries taking inspiration from the high level design and architecture detailed <a href="https://gist.github.com/trungk18/7ef8766cafc05bc8fd87be22de6c5b12">here</a>
- [ ] Look into integrating Docusaurus, and Compodoc.
- [ ] Add Deep Learning Model built with Tensorflow (Python) to the project using the Tensorflow.js wrapper
- [ ] Dockerize the application for deployment to either Amazon ECS or Google Cloud Run

See the [open issues](https://github.com/pulanski/nx-workspace/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT  [@your_twitter](https://twitter.com/your_username)  -->

## Contact 📫

You can find/get in touch with me on these accounts!

[![](https://camo.githubusercontent.com/e6827ddacb39b17e677eaffdae6995da1cc09076e4d50f2b816d2758873f438c/687474703a2f2f696d672e736869656c64732e696f2f62616467652f2d4769746875622d3030303030303f7374796c653d666c6174266c6f676f3d676974687562266c6f676f436f6c6f723d464646464646)](https://github.com/pulanski/) [![<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png" alt="docker logo" width="24">](https://camo.githubusercontent.com/7508c4b0be1529dd01cccaddf93af5f1a0e3997ad4c9f95b220ac35971fd63da/68747470733a2f2f646362616467652e76657263656c2e6170702f6170692f736869656c642f3139313733313338343834353333363537363f7374796c653d666c6174)](https://camo.githubusercontent.com/7508c4b0be1529dd01cccaddf93af5f1a0e3997ad4c9f95b220ac35971fd63da/68747470733a2f2f646362616467652e76657263656c2e6170702f6170692f736869656c642f3139313733313338343834353333363537363f7374796c653d666c6174) [![Stack Overflow](https://camo.githubusercontent.com/2eb1cfbc7ee785ac8d3346a92d599f9a61fb0851c8734d717fca69bcdca48727/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d537461636b6f766572666c6f772d4645374131363f7374796c653d666c6174266c6f676f3d737461636b2d6f766572666c6f77266c6f676f436f6c6f723d7768697465)](https://stackoverflow.com/users/18581537/josh-kersey?tab=profile)

Monorepo Link: [https://github.com/pulanski/nx-workspace](https://github.com/pulanski/nx-workspace)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Here is a non-exhaustive list of some amazing resources for learning various technologies/languages/frameworks utilized within this monorepo.

- [Fireship](https://www.youtube.com/c/Fireship)
- [Ben Awad](https://www.youtube.com/c/BenAwad97)
- [Joshua Morony](https://www.youtube.com/c/JoshuaMorony)
- [Brandon Roberts](https://www.youtube.com/c/BrandonRobertsDev)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/pulanski/nx-workspace.svg?style=for-the-badge
[contributors-url]: https://github.com/pulanski/nx-workspace/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/pulanski/nx-workspace/network/members
[stars-shield]: https://img.shields.io/github/stars/pulanski/nx-workspace.svg?style=for-the-badge
[stars-url]: https://github.com/pulanski/nx-workspace/stargazers
[issues-shield]: https://img.shields.io/github/issues/pulanski/nx-workspace.svg?style=flat
[issues-url]: https://github.com/pulanski/nx-workspace/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/josh-kersey/
[product-screenshot]: images/screenshot.png
[mergify]: https://mergify.com
[mergify-status]: https://img.shields.io/endpoint.svg?url=https://api.mergify.com/v1/badges/pulanski/nx-workspace&style=flat

> Written with [StackEdit](https://stackedit.io/).
