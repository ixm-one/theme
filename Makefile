MAKEFLAGS += --no-builtin-rules
.PHONY: build serve

build:
	bundle exec jekyll build --incremental

serve:
	bundle exec jekyll serve --incremental --livereload $(if $(WSL_INTEROP),--force_polling)
