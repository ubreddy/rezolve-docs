---
id: api
title: API Components
sidebar_label: API Components
description: Documentation for API Components
---

# API Components

## APIs and API Servers 

The API and API Server components allow you to integrate with various 3rd party services using standard REST or SOAP requests. These components are unique in that they must be paired. Since most API calls require authentication, Creator Studio splits the process into two parts:

## API Servers [To be replaced with Connectors and Connections]

The API Server component handles authentication by managing the base URL and storing credentials (such as a Client ID and Client Secret or an Access Token). Once configured, it authorizes your API calls, so you only need to enter sensitive credentials once. API Servers aren't added to flows—they simply support API components when executed by the bot.

![API Server](../../../static/img/API%20Components/Api_Server.jpg)

## APIs

The API component manages the specifics of each request—choosing the method (GET, POST, PUT, PATCH, or DELETE), constructing the payload, and setting any unique headers. When creating an API, you must select an API Server for authentication, then drag the API into your flow.

![API](../../../static/img/API%20Components/API.jpg)
