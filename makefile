modules_dir = ./node_modules/.bin


.PHONY: all
all: build


.PHONE: clean
clean:
# We'd love to clear out the entire "docs" directory, but we
# don't want to remove the CNAME file, which is required to
# use GitHub Pages with Cloudflare.
	find docs ! -name CNAME -type f | xargs rm -f;


.PHONY: install
install:
# Currently, on my MacBook, `npm update --dev` isn't
# installing missing dev dependencies.
#
# https://github.com/npm/npm/issues/16901
	npm install


.PHONY: build
build: install clean
	$(modules_dir)/webpack
  

.PHONY: dev
dev: build
	$(modules_dir)/webpack-dev-server --content-base docs/ --inline --hot --host 0.0.0.0

.PHONY: prod
prod: install clean
	NODE_ENV='production' $(modules_dir)/webpack -p