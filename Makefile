.PHONY: git-hook
git-hook:
	# Allow bash script execute
	chmod -R 777 .githooks
	# Authorize system can run all script in scripts folder
	chmod -R 777 scripts
	git config core.ignoreCase false
	git config core.eol lf
	git config core.hooksPath .githooks
