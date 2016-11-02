local_modules_dir = ./node_modules/.bin


.PHONY: all
all: build


.PHONY: install
install:
	npm update


.PHONY: build
build: install
	$(local_modules_dir)/webpack
  

.PHONY: dev
dev: build
	$(local_modules_dir)/webpack-dev-server --content-base docs/ --inline --hot --host 0.0.0.0

.PHONY: prod
prod: install
	NODE_ENV='production' $(local_modules_dir)/webpack -p