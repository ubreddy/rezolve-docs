---
id: overview
title: API Reference Overview
sidebar_label: Overview
sidebar_position: 1
displayed_sidebar: integrationSidebar
description: Comprehensive API Reference documentation for authentication, credentials, and administrative operations
status:
whatsPending:
---

# API Reference

This section provides comprehensive documentation for the platform APIs, enabling programmatic access to authentication, credential management, and administrative operations.

---

## Overview

The APIs allow you to programmatically interact with the platform's capabilities, enabling automation and custom integrations with external systems. All APIs follow RESTful conventions and return JSON responses.

---

## Base URL

```
{{base_url}}/api/v1
```

Replace `{{base_url}}` with your environment-specific URL (e.g., `https://api.rezolve.ai`).

---

## Getting Started

To get started with the APIs, you will need:

1. **API Credentials** — Obtain your API key or OAuth credentials from the platform settings
2. **Base URL** — The API endpoint for your environment
3. **Tenant ID** — Your organization's unique identifier
4. **Authentication** — Configure proper authentication headers

---

## Authentication

All API requests (except health checks) require authentication using one of the following methods:

| Method | Header | Use Case |
|--------|--------|----------|
| Bearer Token (JWT) | `Authorization: Bearer {{token}}` | User-based authentication |
| API Key | `X-API-Key: {{api_key}}` | Machine-to-machine integration |
| OAuth 2.0 | `Authorization: Bearer {{access_token}}` | Third-party application access |

### Required Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token or API key | Yes |
| `accept` | `application/json` | Yes |
| `content-type` | `application/json` (for POST/PATCH/PUT) | Conditional |
| `x-tenantid` | Your tenant UUID | Yes |
| `realmname` | Authentication realm name | No |

---

## Available API Endpoints

### API Keys

Manage API keys for programmatic access to the platform.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api-keys` | Create a new API key |
| `GET` | `/api-keys` | List all API keys |
| `GET` | `/api-keys/{keyId}` | Get API key by ID |
| `POST` | `/api-keys/{keyId}/validate` | Validate an API key |
| `POST` | `/api-keys/{keyId}/rotate` | Rotate an API key |
| `DELETE` | `/api-keys/{keyId}` | Revoke/delete an API key |

### OAuth Clients

Manage OAuth 2.0 clients for third-party application integration.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/oauth-clients` | Create a new OAuth client |
| `GET` | `/oauth-clients` | List all OAuth clients |
| `GET` | `/oauth-clients/{clientId}` | Get OAuth client by ID |
| `PATCH` | `/oauth-clients/{clientId}` | Update OAuth client configuration |
| `DELETE` | `/oauth-clients/{clientId}` | Delete an OAuth client |

### Credentials Vault

Store and manage encrypted credentials for third-party integrations.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/credentials` | Store encrypted credentials |
| `GET` | `/credentials/{integrationId}` | Get credential with decrypted data |
| `GET` | `/credentials/{integrationId}/details` | Get credential metadata (without secrets) |
| `PATCH` | `/credentials/{integrationId}/{credentialId}` | Update credential metadata |
| `DELETE` | `/credentials/{integrationId}/{credentialId}` | Delete/revoke a credential |

### Admin Operations

Administrative endpoints for tenant and system management.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/admin/health` | Admin health check |
| `GET` | `/admin/audit-logs` | Get paginated audit logs |
| `GET` | `/admin/tenants/{tenantId}` | Get tenant details |
| `PATCH` | `/admin/tenants/{tenantId}` | Update tenant configuration |
| `DELETE` | `/admin/tenants/{tenantId}` | Delete a tenant |
| `GET` | `/admin/tenants/{tenantId}/stats` | Get tenant statistics |
| `POST` | `/admin/dek/rotate` | Trigger DEK rotation |
| `POST` | `/admin/service-account/create` | Create service account |
| `POST` | `/admin/jobs/trigger` | Trigger background job |
| `GET` | `/admin/jobs/{jobName}/stats` | Get job queue statistics |

### Health Checks

Monitor service availability and health status.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/health` | Default health check (root) |
| `GET` | `/api/v1/health` | API health check |
| `GET` | `/api/v1/admin/health` | Detailed admin health check |

---

## Supported Authentication Types

The credentials vault supports 8 authentication types:

| Auth Type | Description |
|-----------|-------------|
| `oauth2_bearer` | OAuth 2.0 Bearer Token |
| `oauth2_client_credentials` | OAuth 2.0 Client Credentials |
| `api_key` | API Key authentication |
| `basic_auth` | Basic Authentication |
| `bearer_token` | Simple Bearer Token |
| `jwt` | JSON Web Token |
| `saml` | SAML Token |
| `custom` | Custom authentication |

---

## Response Format

All API responses follow a consistent format:

### Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data
  },
  "timestamp": "2025-07-10T14:00:00.000Z"
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      // Additional error details
    }
  },
  "timestamp": "2025-07-10T14:00:00.000Z"
}
```

---

## HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| `200 OK` | Request successful |
| `201 Created` | Resource created successfully |
| `400 Bad Request` | Invalid request body or parameters |
| `401 Unauthorized` | Authentication failed |
| `403 Forbidden` | Insufficient permissions |
| `404 Not Found` | Resource not found |
| `409 Conflict` | Resource conflict (duplicate, already exists) |
| `422 Unprocessable Entity` | Validation error |
| `500 Internal Server Error` | Server-side error |
| `503 Service Unavailable` | Service unhealthy |

---

## Rate Limiting

API requests may be subject to rate limiting. When rate limited, you will receive a `429 Too Many Requests` response with headers indicating:

- `X-RateLimit-Limit` — Maximum requests allowed
- `X-RateLimit-Remaining` — Requests remaining in current window
- `X-RateLimit-Reset` — Time when the rate limit resets

---

## Pagination

List endpoints support pagination using query parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `limit` | integer | 50 | Number of items to return |
| `offset` | integer | 0 | Number of items to skip |

**Example:**
```
GET /api/v1/admin/audit-logs?limit=100&offset=0
```

---

## Security Best Practices

1. **Store secrets securely** — Never expose API keys or tokens in client-side code
2. **Use HTTPS** — All API requests must use HTTPS
3. **Rotate credentials** — Regularly rotate API keys and tokens
4. **Least privilege** — Request only the scopes/permissions you need
5. **Monitor usage** — Review audit logs for unauthorized access attempts
6. **IP whitelisting** — Restrict API access to known IP addresses when possible

---

## Need Help?

- For API issues, check the error response details
- Review the specific endpoint documentation for request/response examples
- Contact support for authentication or access issues
