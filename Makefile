CD=$(shell pwd)
MOCHA=$(CD)/node_modules/.bin/mocha
MOCHA_REPORTER ?= dot

default: test
test: mocha-tests

mocha-tests:
	$(MOCHA) --reporter $(MOCHA_REPORTER)

.PHONY: default test \
  mocha-tests
