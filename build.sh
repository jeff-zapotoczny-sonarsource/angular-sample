#!/bin/bash

# use Angular CLI to trigger a test run so we have coverage data
ng test --code-coverage

# call the sonar scanner
sonar-scanner
