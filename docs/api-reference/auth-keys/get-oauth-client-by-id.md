---
id: get-oauth-client-by-id
title: Get OAuth Client by ID
sidebar_label: Get OAuth Client by ID
sidebar_position: 10
displayed_sidebar: integrationSidebar
description: API documentation for retrieving detailed information about a specific OAuth client
status:
whatsPending:
---

# Get OAuth Client by ID

Retrieves detailed information about a specific OAuth client by its unique identifier. This endpoint returns the full configuration for an OAuth client including scopes, redirect URIs, token settings, and usage statistics. Used for OAuth client management and troubleshooting.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/oauth-clients/{clientId}`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header. Requires admin-level permissions.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | No |

---

## Path Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `clientId` | string (UUID) | The unique identifier of the OAuth client | Yes |

---

## Query Parameters

None.

---

## Request Body Schema

Not applicable — this is a GET request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/oauth-clients/{{oauth_client_id}}' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "OAuth client retrieved successfully",
  "data": {
    "id": "{{oauth_client_id}}",
    "name": "ServiceNow Integration",
    "description": "OAuth client for ServiceNow ITSM integration",
    "clientId": "{{client_id}}",
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
      "idTokenLifetime": 3600,
      "tokenFormat": "jwt",
      "refreshTokenRotation": true,
      "reuseInterval": 0
    },
    "pkceSettings": {
      "required": false,
      "allowPlainChallenge": false,
      "supportedMethods": ["S256"]
    },
    "consent": {
      "requireConsent": true,
      "skipConsentForFirstParty": true,
      "consentLifetime": 2592000
    },
    "security": {
      "requireClientAuthentication": true,
      "allowedAuthMethods": ["client_secret_post", "client_secret_basic"],
      "enforceHttps": true,
      "validateRedirectUri": true
    },
    "usage": {
      "totalTokenRequests": 154200,
      "successfulTokenRequests": 153890,
      "failedTokenRequests": 310,
      "activeTokenCount": 245,
      "lastUsedAt": "2025-07-10T12:00:00.000Z",
      "lastUsedFromIp": "{{last_used_ip}}",
      "firstUsedAt": "2024-06-16T08:30:00.000Z",
      "averageRequestsPerDay": 428
    },
    "audit": {
      "createdAt": "2024-06-15T10:00:00.000Z",
      "createdBy": {
        "id": "{{created_by_user_id}}",
        "name": "{{created_by_user_name}}",
        "email": "{{created_by_user_email}}"
      },
      "updatedAt": "2025-05-20T14:00:00.000Z",
      "updatedBy": {
        "id": "{{updated_by_user_id}}",
        "name": "{{updated_by_user_name}}",
        "email": "{{updated_by_user_email}}"
      },
      "lastSecretRotatedAt": "2025-01-15T09:00:00.000Z",
      "secretRotationCount": 2
    },
    "tenant": {
      "id": "{{tenant_id}}",
      "name": "{{tenant_name}}"
    }
  },
  "timestamp": "2025-07-10T13:25:00.000Z"
}
```

---

## OAuth Client Object Schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique internal identifier (UUID) |
| `name` | string | Human-readable name |
| `description` | string | Description of the client's purpose |
| `clientId` | string | OAuth client ID for authentication |
| `clientType` | string | Client type: `confidential` or `public` |
| `redirectUris` | array | Registered redirect URIs |
| `grantTypes` | array | Allowed OAuth grant types |
| `scopes` | array | Permitted scopes |
| `allowedOrigins` | array | CORS allowed origins |
| `ipWhitelist` | array | IP restrictions |
| `status` | string | Client status: `active`, `inactive`, `revoked` |
| `tokenSettings` | object | Token configuration |
| `pkceSettings` | object | PKCE configuration |
| `consent` | object | Consent screen settings |
| `security` | object | Security configuration |
| `usage` | object | Usage statistics |
| `audit` | object | Audit trail information |
| `tenant` | object | Associated tenant |

---

## Token Settings Object

| Field | Type | Description |
|-------|------|-------------|
| `accessTokenLifetime` | integer | Access token lifetime in seconds |
| `refreshTokenLifetime` | integer | Refresh token lifetime in seconds |
| `idTokenLifetime` | integer | ID token lifetime in seconds |
| `tokenFormat` | string | Token format: `jwt` or `opaque` |
| `refreshTokenRotation` | boolean | Whether refresh tokens are rotated on use |
| `reuseInterval` | integer | Seconds a rotated refresh token remains valid |

---

## PKCE Settings Object

| Field | Type | Description |
|-------|------|-------------|
| `required` | boolean | Whether PKCE is required for auth code flow |
| `allowPlainChallenge` | boolean | Allow plain code challenge (not recommended) |
| `supportedMethods` | array | Supported challenge methods: `S256`, `plain` |

---

## Usage Statistics Object

| Field | Type | Description |
|-------|------|-------------|
| `totalTokenRequests` | integer | Total token requests made |
| `successfulTokenRequests` | integer | Successful token requests |
| `failedTokenRequests` | integer | Failed token requests |
| `activeTokenCount` | integer | Currently active (non-expired) tokens |
| `lastUsedAt` | string\|null | ISO 8601 timestamp of last usage |
| `lastUsedFromIp` | string\|null | IP address of last request |
| `firstUsedAt` | string\|null | ISO 8601 timestamp of first usage |
| `averageRequestsPerDay` | number | Average daily token requests |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid client ID format | The clientId is not a valid UUID |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view this OAuth client |
| `404 Not Found` | OAuth client not found | No OAuth client exists with the specified ID |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "OAUTH_CLIENT_NOT_FOUND",
    "message": "OAuth client not found",
    "details": "No OAuth client exists with ID: {{oauth_client_id}}"
  },
  "timestamp": "2025-07-10T13:25:00.000Z"
}
```

---

## Notes

1. **Security:** The `clientSecret` is never returned. Only the `clientId` is shown for identification.

2. **UUID Format:** The `clientId` path parameter must be a valid UUID. Invalid formats will return a 400 error.

3. **Detailed Configuration:** Unlike the list endpoint, this response includes full configuration details:
   - Token settings (lifetimes, rotation policy)
   - PKCE settings
   - Consent configuration
   - Security settings

4. **Usage Analytics:** The `usage` object provides comprehensive statistics for auditing and monitoring client activity.

5. **Audit Trail:** The `audit` object tracks creation, updates, and secret rotation history for compliance.

6. **Token Settings:** Review `tokenSettings` to understand token lifetimes:
   - `accessTokenLifetime`: Typically 1 hour (3600 seconds)
   - `refreshTokenLifetime`: Typically 24 hours (86400 seconds)
   - `idTokenLifetime`: Typically 1 hour (3600 seconds)

7. **PKCE Enforcement:** Check `pkceSettings.required` to know if PKCE is mandatory for authorization code flows.

8. **Required Roles:** Typically requires `tenant_admin` or `oauth_admin` role to view OAuth client details.

9. **Related Endpoints:**
   - `GET /oauth-clients` — List all OAuth clients
   - `POST /oauth-clients` — Create new OAuth client
   - `PUT /oauth-clients/{clientId}` — Update OAuth client
   - `DELETE /oauth-clients/{clientId}` — Delete OAuth client
   - `POST /oauth-clients/{clientId}/rotate-secret` — Rotate client secret
