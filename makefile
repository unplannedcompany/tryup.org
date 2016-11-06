local_modules_dir = ./node_modules/.bin


.PHONY: all
all: build


.PHONE: clean
clean:
# We'd love to clear out the entire "docs" directory, but we
# don't want to remove the CNAME file, which is required to
# use GitHub Pages with Cloudfare.
	find docs ! -name CNAME -type f | xargs rm;


.PHONY: install
install:
	npm update


.PHONY: build
build: install clean
	$(local_modules_dir)/webpack
  

.PHONY: dev
dev: build
	$(local_modules_dir)/webpack-dev-server --content-base docs/ --inline --hot --host 0.0.0.0

.PHONY: prod
prod: install clean
	NODE_ENV='production' $(local_modules_dir)/webpack -p