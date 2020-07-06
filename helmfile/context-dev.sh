#!/bin/bash
echo "Logging in to Dev K8 Cluster.."
az aks get-credentials --resource-group EsDCDTSDevRG --name EsDCDTSDevRG-K8S
echo "Done."

# Since we didn't get these from the createSPN script, we have to fetch them now.
if [ -z "$DOCKER_TAG" ]
then
    export DOCKER_TAG=latest
fi
export BASE_DOMAIN=dts-stn.dev
export GITHUB_USER=$(az keyvault secret show --vault-name DTSSecrets --name dts-github-user --query value -otsv)
export GITHUB_TOKEN=$(az keyvault secret show --vault-name DTSSecrets --name dts-github-token --query value -otsv)
export MONGO_DB_PASS=$(az keyvault secret show --vault-name DTSSecrets --name dts-goc-emp-dir-dev-db-pass --query value -otsv)
export MONGO_DB_ROOT_PASS=$(az keyvault secret show --vault-name DTSSecrets --name dts-goc-emp-dir-dev-db-root-pass-dev --query value -otsv)
export MONGO_CONN_STRING=$(az keyvault secret show --vault-name DTSSecrets --name dts-goc-emp-dir-mongo-connection-string-dev --query value -otsv)
export NODE_JWTSECRET=$(az keyvault secret show --vault-name DTSSecrets --name dts-goc-emp-dir-jwtsecret-dev --query value -otsv)