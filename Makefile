SHELL := /bin/bash
CWD := $(shell cd -P -- '$(shell dirname -- "$0")' && pwd -P)

docker-images:
	docker build -t sphinx_rtd_theme:latest .

docker-run:
	rm -f .container_id
	docker run --cidfile=.container_id --mount type=bind,source="$(CWD)/src",target=/project/src,readonly sphinx_rtd_theme:latest

docker-copy-assets:
	docker cp "$(shell cat .container_id):/project/sphinx_rtd_theme" .
	docker cp "$(shell cat .container_id):/project/package-lock.json" .
