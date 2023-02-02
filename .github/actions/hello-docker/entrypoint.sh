#!/bin/sh -l

# Please make this file executable before pushing to github
# chmod +x .github/actions/hello-docker/entrypoint.sh

echo "::debug ::Debug Message"
echo "::warning ::Warning Message"
echo "::error ::Error Message"
echo "::add-mask::$1"

time = $(date)

echo "Hello $1"
echo "::set-output name=time::$time"
echo "::group::Some expandable logs"
echo "First log"
echo "Second log"
echo "Third log"
echo '::endgroup::'

echo '::set-env name=HELLO::hello'