SHELL := /bin/bash
CWD := $(shell cd -P -- '$(shell dirname -- "$0")' && pwd -P)

docker-images:
	docker-compose build

docker-run:
        docker-compose run sphinx_rtd_theme $(command)

docker-copy-assets:
	docker cp "$(shell cat .container_id):/project/sphinx_rtd_theme" .
	docker cp "$(shell cat .container_id):/project/package-lock.json" .
