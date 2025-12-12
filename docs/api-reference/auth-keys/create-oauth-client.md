---
id: create-oauth-client
title: Create OAuth Client
sidebar_label: Create OAuth Client
sidebar_position: 8
displayed_sidebar: integrationSidebar
description: API documentation for creating new OAuth clients for third-party application integration
status:
whatsPending:
---

# Create OAuth Client

Creates a new OAuth client for third-party application integration. OAuth clients enable secure authorization flows for external applications to access the API on behalf of users. Supports standard OAuth 2.0 grant types including authorization code, client credentials, and more.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v1/oauth-clients`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header. Requires admin-level permissions.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `content-type` | Must be `application/json` | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | No |

---

## Path Parameters

None.

---

## Query Parameters

None.

---

## Request Body Schema

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `name` | string | Human-readable name for the OAuth client | Yes |
| `description` | string | Description of the client's purpose | No |
| `clientType` | string | Client type: `confidential` or `public` | Yes |
| `redirectUris` | array | List of allowed redirect URIs for authorization callbacks | Yes |
| `grantTypes` | array | Allowed OAuth grant types | Yes |
| `scopes` | array | List of permission scopes the client can request | Yes |
| `allowedOrigins` | array | CORS allowed origins for browser-based clients | No |
| `ipWhitelist` | array | Allowed IP addresses/CIDR ranges | No |

---

## Request Body Example

```json
{
  "name": "string",
  "description": "string",
  "clientType": "confidential",
  "redirectUris": [
    "string"
  ],
  "grantTypes": [
    "authorization_code"
  ],
  "scopes": [
    "string"
  ],
  "allowedOrigins": [
    "string"
  ],
  "ipWhitelist": [
    "string"
  ]
}
```

**Typical Request — Web Application:**

```json
{
  "name": "ServiceNow Integration",
  "description": "OAuth client for ServiceNow ITSM integration",
  "clientType": "confidential",
  "redirectUris": [
    "{{redirect_uri_1}}",
    "{{redirect_uri_2}}"
  ],
  "grantTypes": [
    "authorization_code",
    "refresh_token"
  ],
  "scopes": [
    "ticketing:read",
    "ticketing:write",
    "users:read",
    "offline_access"
  ],
  "allowedOrigins": [
    "{{allowed_origin}}"
  ],
  "ipWhitelist": []
}
```

**Typical Request — Machine-to-Machine:**

```json
{
  "name": "Backend Service",
  "description": "Server-to-server integration for reporting service",
  "clientType": "confidential",
  "redirectUris": [],
  "grantTypes": [
    "client_credentials"
  ],
  "scopes": [
    "ticketing:read",
    "reports:read"
  ],
  "allowedOrigins": [],
  "ipWhitelist": [
    "{{allowed_ip_range_1}}",
    "{{allowed_ip_range_2}}"
  ]
}
```

**Typical Request — Single Page Application (SPA):**

```json
{
  "name": "Customer Portal SPA",
  "description": "Public OAuth client for customer self-service portal",
  "clientType": "public",
  "redirectUris": [
    "{{spa_callback_uri}}",
    "{{spa_silent_renew_uri}}"
  ],
  "grantTypes": [
    "authorization_code"
  ],
  "scopes": [
    "openid",
    "profile",
    "ticketing:read",
    "ticketing:write"
  ],
  "allowedOrigins": [
    "{{spa_origin}}"
  ],
  "ipWhitelist": []
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v1/oauth-clients' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "name": "ServiceNow Integration",
    "description": "OAuth client for ServiceNow ITSM integration",
    "clientType": "confidential",
    "redirectUris": [
      "{{redirect_uri}}"
    ],
    "grantTypes": [
      "authorization_code",
      "refresh_token"
    ],
    "scopes": [
      "ticketing:read",
      "ticketing:write",
      "users:read"
    ],
    "allowedOrigins": [
      "{{allowed_origin}}"
    ],
    "ipWhitelist": []
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "OAuth client created successfully",
  "data": {
    "id": "{{oauth_client_id}}",
    "name": "ServiceNow Integration",
    "description": "OAuth client for ServiceNow ITSM integration",
    "clientId": "{{client_id}}",
    "clientSecret": "{{client_secret}}",
    "clientType": "confidential",
    "redirectUris": [
      "{{redirect_uri}}"
    ],
    "grantTypes": [
      "authorization_code",
      "refresh_token"
    ],
    "scopes": [
      "ticketing:read",
      "ticketing:write",
      "users:read"
    ],
    "allowedOrigins": [
      "{{allowed_origin}}"
    ],
    "ipWhitelist": [],
    "status": "active",
    "tokenSettings": {
      "accessTokenLifetime": 3600,
      "refreshTokenLifetime": 86400,
      "idTokenLifetime": 3600
    },
    "pkceRequired": false,
    "createdAt": "2025-07-10T13:15:00.000Z",
    "createdBy": {
      "id": "{{user_id}}",
      "name": "{{user_name}}",
      "email": "{{user_email}}"
    },
    "tenant": {
      "id": "{{tenant_id}}",
      "name": "{{tenant_name}}"
    }
  },
  "timestamp": "2025-07-10T13:15:00.000Z"
}
```

:::warning Important
The `clientSecret` is only returned once during creation. Store it securely as it cannot be retrieved again.
:::

---

## Client Types

| Type | Description | Use Case |
|------|-------------|----------|
| `confidential` | Client can securely store credentials | Server-side web apps, backend services |
| `public` | Client cannot securely store credentials | SPAs, mobile apps, desktop apps |

---

## Grant Types

| Grant Type | Description | Use Case |
|------------|-------------|----------|
| `authorization_code` | Standard OAuth 2.0 authorization code flow | Web applications with user login |
| `client_credentials` | Machine-to-machine authentication | Backend services, APIs |
| `refresh_token` | Obtain new access tokens without re-auth | Long-lived sessions |
| `password` | Direct username/password exchange (legacy) | Trusted first-party apps only |
| `implicit` | Token returned directly (deprecated) | Legacy SPAs (use auth code + PKCE instead) |

---

## Available Scopes

| Scope | Description |
|-------|-------------|
| `openid` | OpenID Connect - user identity |
| `profile` | User profile information |
| `email` | User email address |
| `offline_access` | Request refresh tokens |
| `ticketing:read` | Read access to tickets |
| `ticketing:write` | Create and update tickets |
| `ticketing:delete` | Delete tickets |
| `ticketing:admin` | Full ticketing administration |
| `users:read` | Read user information |
| `users:write` | Create and update users |
| `catalog:read` | Read service catalog |
| `reports:read` | Access reports and analytics |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Missing required fields or invalid format |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to create OAuth clients |
| `409 Conflict` | Duplicate name | OAuth client with this name already exists |
| `422 Unprocessable Entity` | Validation error | Invalid redirect URI, grant type, or scope |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body",
    "details": {
      "redirectUris": "Invalid URI format: 'not-a-valid-url'",
      "grantTypes": "Invalid grant type: 'custom_grant'. Allowed: authorization_code, client_credentials, refresh_token, password, implicit"
    }
  },
  "timestamp": "2025-07-10T13:15:00.000Z"
}
```

---

## Notes

1. **Client Secret Security:** The `clientSecret` is only shown once upon creation. Store it in a secure secrets manager immediately.

2. **Confidential vs Public:**
   - **Confidential:** Use for server-side apps that can securely store the client secret
   - **Public:** Use for browser-based SPAs or mobile apps; consider enabling PKCE

3. **Redirect URI Validation:** Redirect URIs must use HTTPS in production (except localhost for development). They are strictly matched during authorization.

4. **PKCE Support:** For public clients, PKCE (Proof Key for Code Exchange) is recommended or required for enhanced security.

5. **Allowed Origins:** Required for browser-based clients to enable CORS. Must match the origin of your web application.

6. **IP Whitelist:** Optional security layer to restrict token requests to specific IP addresses.

7. **Token Lifetimes:** Default token lifetimes are configured at creation. Contact admin to customize:
   - Access Token: 1 hour (3600 seconds)
   - Refresh Token: 24 hours (86400 seconds)
   - ID Token: 1 hour (3600 seconds)

8. **Scope Consent:** Depending on configuration, users may need to consent to requested scopes during authorization.

9. **Required Roles:** Typically requires `tenant_admin` or `oauth_admin` role to create OAuth clients.

10. **Related Endpoints:**
    - `GET /oauth-clients` — List all OAuth clients
    - `GET /oauth-clients/{clientId}` — Get OAuth client details
    - `PUT /oauth-clients/{clientId}` — Update OAuth client
    - `DELETE /oauth-clients/{clientId}` — Delete OAuth client
    - `POST /oauth-clients/{clientId}/rotate-secret` — Rotate client secret
    - `POST /oauth/token` — Token endpoint for OAuth flows
    - `GET /oauth/authorize` — Authorization endpoint
