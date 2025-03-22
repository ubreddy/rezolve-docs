---
id: deployments
title: Deployments
sidebar_label: Deployments
description: Documentation for Deployments
---

# Deployments

The Deploy Component button allows you to deploy an individual Card, Script, Slot, API, or API Server directly to the Production Folder without needing to create a Deployment Package. Only components that are in a WIP (Work in Progress) state can be deployed individually.


## Package Deployment

Package Deployment allows you to deploy multiple components and/or flows to the Production Folder at the same time. You can find this feature in the Deployment menu.

![Production Deployments](../../static/img/Creator%20Studio/Production_Deployments.jpg)

Note that once a package is deployed, any components in the Production Folder that share the same name as components in your package will be overwritten. Usually this is done intentionally to modify existing components in the Production Folder, but in the event that this could be done by mistake, a warning message will appear to give you the opportunity to cancel your deployment.

![Conflicts Screen](../../static/img/Creator%20Studio/Conflicts_Screen.jpg)
