DOCTL ?= doctl
SPEC ?= app.yaml
SPEC_STAGING ?= app.staging.yaml
APP_ID ?= <set-app-id>
APP_ID_STAGING ?= <set-staging-app-id>

ifeq ($(firstword $(MAKECMDGOALS)),read)
READ_EXTRA := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
READ_ENVIRONMENT := $(strip $(firstword $(READ_EXTRA)))
ifeq ($(READ_ENVIRONMENT),)
READ_ENVIRONMENT := production
endif
READ_SPEC_FILE := $(if $(filter staging,$(READ_ENVIRONMENT)),$(SPEC_STAGING),$(SPEC))
READ_APP_ID := $(if $(filter staging,$(READ_ENVIRONMENT)),$(APP_ID_STAGING),$(APP_ID))
endif

ifeq ($(firstword $(MAKECMDGOALS)),deploy)
DEPLOY_EXTRA := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
DEPLOY_ENVIRONMENT := $(strip $(firstword $(DEPLOY_EXTRA)))
ifeq ($(DEPLOY_ENVIRONMENT),)
DEPLOY_ENVIRONMENT := production
endif
DEPLOY_SPEC_FILE := $(if $(filter staging,$(DEPLOY_ENVIRONMENT)),$(SPEC_STAGING),$(SPEC))
DEPLOY_APP_ID := $(if $(filter staging,$(DEPLOY_ENVIRONMENT)),$(APP_ID_STAGING),$(APP_ID))
endif

.PHONY: read deploy staging

staging:
	@:

read:
	@if ! command -v $(DOCTL) >/dev/null 2>&1; then \
		echo "$(DOCTL) not found. Install doctl and run: doctl auth init" >&2; \
		exit 1; \
	fi
	@if [ "$(READ_ENVIRONMENT)" = "staging" ]; then \
		if [ -z "$(strip $(APP_ID_STAGING))" ] || [ "$(strip $(APP_ID_STAGING))" = "<set-staging-app-id>" ]; then \
			echo "APP_ID_STAGING is not set. Export APP_ID_STAGING before running 'make read staging'." >&2; \
			exit 1; \
		fi; \
	fi
	@if [ -z "$(strip $(READ_APP_ID))" ] || [ "$(strip $(READ_APP_ID))" = "<set-app-id>" ]; then \
		echo "APP_ID is not set. Export APP_ID before running 'make read'." >&2; \
		exit 1; \
	fi
	@target_env="$(READ_ENVIRONMENT)"; \
	spec_file="$(READ_SPEC_FILE)"; \
	app_id="$(READ_APP_ID)"; \
	echo "Saving $$target_env DigitalOcean spec to $$spec_file..."; \
	$(DOCTL) apps spec get "$$app_id" > "$$spec_file"

deploy:
	@if [ ! -f "$(DEPLOY_SPEC_FILE)" ]; then \
		echo "Spec $(DEPLOY_SPEC_FILE) not found" >&2; \
		exit 1; \
	fi
	@if ! command -v $(DOCTL) >/dev/null 2>&1; then \
		echo "$(DOCTL) not found. Install doctl and run: doctl auth init" >&2; \
		exit 1; \
	fi
	@if [ "$(DEPLOY_ENVIRONMENT)" = "staging" ]; then \
		if [ -z "$(strip $(APP_ID_STAGING))" ] || [ "$(strip $(APP_ID_STAGING))" = "<set-staging-app-id>" ]; then \
			echo "APP_ID_STAGING is not set. Export APP_ID_STAGING before running 'make deploy staging'." >&2; \
			exit 1; \
		fi; \
	fi
	@if [ -z "$(strip $(DEPLOY_APP_ID))" ] || [ "$(strip $(DEPLOY_APP_ID))" = "<set-app-id>" ]; then \
		echo "APP_ID is not set. Export APP_ID before running 'make deploy'." >&2; \
		exit 1; \
	fi
	@echo "Deploying $(DEPLOY_SPEC_FILE) to $(DEPLOY_ENVIRONMENT) app $(DEPLOY_APP_ID)..."
	@$(DOCTL) apps update $(DEPLOY_APP_ID) --spec $(DEPLOY_SPEC_FILE) --update-sources
