# [0.18.0](https://github.com/stencila/schema/compare/v0.17.0...v0.18.0) (2019-07-25)


### Bug Fixes

* **Package:** Remove unnecessary files from module ([1fe7dbd](https://github.com/stencila/schema/commit/1fe7dbd))


### Features

* **Docs:** Sort properties table by required fields then alphabetically ([d41cadd](https://github.com/stencila/schema/commit/d41cadd))

# [0.17.0](https://github.com/stencila/schema/compare/v0.16.3...v0.17.0) (2019-07-25)

### Bug Fixes

- **DatatableColumn:** Extend Thing to have name property ([d97c997](https://github.com/stencila/schema/commit/d97c997))
- **DatatableColumn:** Remove duplicated meta property ([8638638](https://github.com/stencila/schema/commit/8638638))
- **Entity:** Move meta property from Thing to Entity ([c03f3f8](https://github.com/stencila/schema/commit/c03f3f8)), closes [/github.com/stencila/encoda/pull/177#issuecomment-514822427](https://github.com//github.com/stencila/encoda/pull/177/issues/issuecomment-514822427)
- **Language bindings:** Flag a property if it is an override ([6bb1ec5](https://github.com/stencila/schema/commit/6bb1ec5)), closes [/github.com/stencila/schema/pull/97#issuecomment-514400261](https://github.com//github.com/stencila/schema/pull/97/issues/issuecomment-514400261)
- **Link:** Add title property to Link ([8d43755](https://github.com/stencila/schema/commit/8d43755)), closes [/github.com/stencila/encoda/pull/177#issuecomment-514822427](https://github.com//github.com/stencila/encoda/pull/177/issues/issuecomment-514822427)
- **Python bindings:** Fix spacing and regnerate test snapshots ([7050b5c](https://github.com/stencila/schema/commit/7050b5c))
- **Python bindings:** Use is not None ([2f41f2a](https://github.com/stencila/schema/commit/2f41f2a))
- **Schema generation:** Sort children and descendants for more deterministic output ([d04a423](https://github.com/stencila/schema/commit/d04a423))
- **Typescript bindings:** Create a dist/index.js file ([f03c2e1](https://github.com/stencila/schema/commit/f03c2e1))
- Replace \$extends and remove unecessary use of object ([b24d8e3](https://github.com/stencila/schema/commit/b24d8e3))
- Updated Python types generation to be more PEP8 compliant ([1e7a6c0](https://github.com/stencila/schema/commit/1e7a6c0))

### Features

- **Python and R bindings:** Initial versions of bindings for Python and R ([8266cf7](https://github.com/stencila/schema/commit/8266cf7))
- **Python bindings:** Add utilty functions for converting to/from JSON ([b4c8aa4](https://github.com/stencila/schema/commit/b4c8aa4))
- **Typescript:** Adds factory functions for Typescript ([39d0fc6](https://github.com/stencila/schema/commit/39d0fc6)), closes [#84](https://github.com/stencila/schema/issues/84)
- **Util:** Add markTypes TypeMap ([1552d06](https://github.com/stencila/schema/commit/1552d06))

## [0.16.3](https://github.com/stencila/schema/compare/v0.16.2...v0.16.3) (2019-07-24)

### Bug Fixes

- **Build:** Add missing TypeScript types to fix TypeGuard usage ([f57d055](https://github.com/stencila/schema/commit/f57d055))

## [0.16.2](https://github.com/stencila/schema/compare/v0.16.1...v0.16.2) (2019-07-24)

### Bug Fixes

- **Build:** Expose TypeScript files in module distribution ([a985686](https://github.com/stencila/schema/commit/a985686))

## [0.16.1](https://github.com/stencila/schema/compare/v0.16.0...v0.16.1) (2019-07-24)

### Bug Fixes

- **Build:** Add outDir option to fix module distribution ([05b1bac](https://github.com/stencila/schema/commit/05b1bac))

# [0.16.0](https://github.com/stencila/schema/compare/v0.15.0...v0.16.0) (2019-07-24)

### Bug Fixes

- **Type Guards:** Expose TypeMaps in packaged module ([cdb61e4](https://github.com/stencila/schema/commit/cdb61e4))

### Features

- **TypeGuards:** Port type guards from Encoda to Schema project ([cb0c050](https://github.com/stencila/schema/commit/cb0c050))
- Added Entity and made it the base of everything (including Thing) ([a0d89b8](https://github.com/stencila/schema/commit/a0d89b8))