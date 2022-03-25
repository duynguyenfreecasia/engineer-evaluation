# Engineer evaluation FE

### Tech stack
  
- [Angular 13][angular]
- [Angular Material][mat]:  UI component and Angular CDK
- [CSS preprocessor][scss]: SCSS

[angular]: https://angular.io/
[mat]: https://material.angular.io/
[scss]: https://sass-lang.com/guide

### Setting up the development environment 🛠

- `git clone https://github.com/techcross-lab/engineer-evaluation.git`
- `cd engineer-evaluation/front-end`
- `npm install`
- `npm start` for starting Angular web application
- The app should run on `http://localhost:4200/`

### Build

-  `npm run staging`: Bundle and publish project files with domain staging. Files which are generated will be placed inside `dist` folder.
- `npm run build`: Bundle and publish project files with domain go live. Files which are generated will be placed inside `dist` folder.

### High-level design
#### Principles

All components are following:
- OnPush Change Detection and async pipes: all components use observable and async pipe for rendering data without any single manual subscribe. Only some places are calling subscribe for dispatching an action.
- SCAMs (single component Angular modules) for tree-shakable components, meaning each component will have a respective module.
- Guide: https://angular.io/guide/cheatsheet


### Project structure.
```
+-- src
|   +-- api: API call
|   +-- app
  |   +-- infrastructure
    |   +-- components: base components
    |   +-- services: services for infrastructure      
    |   +-- constants: constants for infrastructure
    |   +-- directives: directives for infrastructure
    |   +-- interfaces: interfaces for infrastructure
    |   +-- enums: enums for infrastructure
    |   +-- utils: utils for infrastructure
    |   +-- guards: guards for infrastructure
    |   +-- pipes: pipes for infrastructure
  |   +-- modules
    |   +-- form: dynamic form just transfer FormInput is gender form
    |   +-- module name (***):
      |   +-- components: list component children module
      |   +-- services: services for module      
      |   +-- constants: constants for module
      |   +-- directives: directives for module
      |   +-- interfaces: interfaces for module
      |   +-- enums: enums for module
      |   +-- routing and module: enums for module
  |   +-- assets: Static files (such as: *.scss, *.json, *svg, ...) should be stored in this folder.
+-- index.html 
```
