SHELL := /bin/bash
CWD := $(shell cd -P -- '$(shell dirname -- "$0")' && pwd -P)

docker-images:
	docker-compose build

docker-npm-build:
	rm -f .container_id
	docker-compose run -d sphinx_rtd_theme build > .container_id
	docker container wait "$(shell cat .container_id)"
	docker cp "$(shell cat .container_id):/project/sphinx_rtd_theme" .
	docker cp "$(shell cat .container_id):/project/package-lock.json" .
	@echo "Done building"

docker-npm-dev:
	docker-compose run sphinx_rtd_theme dev
	
docker-build-all: docker-images docker-npm-build
