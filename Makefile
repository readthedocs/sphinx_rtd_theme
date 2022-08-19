SHELL := /bin/bash
CWD := $(shell cd -P -- '$(shell dirname -- "$0")' && pwd -P)

docker-images:
	docker build -t sphinx_rtd_theme:latest .

docker-run:
	rm -f .container_id
	docker run --cidfile=.container_id -t -i -p 1919:1919 \
                --network host \
		--mount type=bind,source="$(CWD)",target=/project-readonly,readonly \
		--mount type=volume,dst=/project-readonly/sphinx_rtd_theme.egg-info,volume-driver=local \
		--mount type=bind,source="$(CWD)/src",target=/project/src,readonly  \
		--mount type=bind,source="$(CWD)/docs",target=/project/docs \
		sphinx_rtd_theme:latest $(command)

docker-copy-assets:
	docker cp "$(shell cat .container_id):/project/sphinx_rtd_theme" .
	docker cp "$(shell cat .container_id):/project/package-lock.json" .
