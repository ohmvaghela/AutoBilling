#!/bin/bash

RED="\e[31m"
GREEN="\e[32m"
ENDCOLOR="\e[0m"

kubectl apply -f ./kubernetes/configs/namespaces.yaml

if [ $? -eq 0 ]; then
    echo -e "${GREEN}namespace.yaml applied successfully ${ENDCOLOR}"
else
    echo -e "${RED}Failed to apply namespace.yaml ${ENDCOLOR}"
    exit 1
fi

kubectl apply -f ./kubernetes/configs/.
kubectl apply -f ./kubernetes/deployment/.

if [ $? -eq 0 ]; then
    echo -e "${GREEN} other resources applied successfully ${ENDCOLOR}"
else
    echo -e "${RED}Failed to apply some resource ${ENDCOLOR}"
    exit 1
fi
