# notes for experimenting w/ @stencila/schema

Read about how `` ` backtick blocks ` `` in `schema/<Type>.md` can be transcluded via `encoda` into other formats. Try adding some of these blocks to one of the `schema/*.md` doc files. Then run the following to regen the doc site

```bash
# only run once to start webserve in watch mode:
npm run docs:serve

# in another terminal, run these each time to regenerate docs
# replace 'Article.md' below with the name of the edited *.md file

# run encoda on the file
./node_modules/.bin/encoda process schema/Article.md

# rebuild schema files and static html
./node_modules/.bin/ts-node ts/docs.ts
```
