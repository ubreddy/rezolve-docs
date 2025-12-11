---
id: list-oauth-clients
title: List OAuth Clients
sidebar_label: List OAuth Clients
sidebar_position: 9
displayed_sidebar: integrationSidebar
description: API documentation for retrieving a paginated list of all OAuth clients registered for a tenant
status:
whatsPending:
---

# List OAuth Clients

Retrieves a paginated list of all OAuth clients registered for a tenant. This endpoint returns metadata about each client including name, type, scopes, and status. Used for OAuth client management and administration interfaces.

---

## Endpoint

**Method:** `GET`
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
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | No |

---

## Path Parameters

None.

---

## Query Parameters

| Parameter | Type | Description | Default | Required |
|-----------|------|-------------|---------|----------|
| `limit` | integer | Number of items to return | 50 | No |
| `offset` | integer | Number of items to skip | 0 | No |

---

## Request Body Schema

Not applicable — this is a GET request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/oauth-clients?limit=50&offset=0' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}'
```

**With Pagination:**

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/oauth-clients?limit=10&offset=20' \
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
  "message": "OAuth clients retrieved successfully",
  "data": {
    "clients": [
      {
        "id": "{{oauth_client_id_1}}",
        "name": "ServiceNow Integration",
        "description": "OAuth client for ServiceNow ITSM integration",
        "clientId": "{{client_id_1}}",
        "clientType": "confidential",
        "redirectUris": [
          "{{redirect_uri_1}}"
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
          "{{allowed_origin_1}}"
        ],
        "ipWhitelist": [],
        "status": "active",
        "pkceRequired": false,
        "lastUsedAt": "2025-07-10T12:00:00.000Z",
        "usageCount": 15420,
        "createdAt": "2024-06-15T10:00:00.000Z",
        "createdBy": {
          "id": "{{user_id_1}}",
          "name": "{{user_name_1}}",
          "email": "{{user_email_1}}"
        }
      },
      {
        "id": "{{oauth_client_id_2}}",
        "name": "Backend Reporting Service",
        "description": "Machine-to-machine client for analytics",
        "clientId": "{{client_id_2}}",
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
          "{{allowed_ip_range_1}}"
        ],
        "status": "active",
        "pkceRequired": false,
        "lastUsedAt": "2025-07-10T13:15:00.000Z",
        "usageCount": 892450,
        "createdAt": "2024-01-20T09:00:00.000Z",
        "createdBy": {
          "id": "{{user_id_2}}",
          "name": "{{user_name_2}}",
          "email": "{{user_email_2}}"
        }
      },
      {
        "id": "{{oauth_client_id_3}}",
        "name": "Customer Portal SPA",
        "description": "Public client for customer self-service portal",
        "clientId": "{{client_id_3}}",
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
        "ipWhitelist": [],
        "status": "active",
        "pkceRequired": true,
        "lastUsedAt": "2025-07-10T11:30:00.000Z",
        "usageCount": 45670,
        "createdAt": "2024-09-01T14:00:00.000Z",
        "createdBy": {
          "id": "{{user_id_3}}",
          "name": "{{user_name_3}}",
          "email": "{{user_email_3}}"
        }
      },
      {
        "id": "{{oauth_client_id_4}}",
        "name": "Legacy Mobile App",
        "description": "Deprecated mobile app client",
        "clientId": "{{client_id_4}}",
        "clientType": "public",
        "redirectUris": [
          "{{mobile_callback_uri}}"
        ],
        "grantTypes": [
          "authorization_code",
          "refresh_token"
        ],
        "scopes": [
          "openid",
          "ticketing:read"
        ],
        "allowedOrigins": [],
        "ipWhitelist": [],
        "status": "inactive",
        "pkceRequired": true,
        "lastUsedAt": "2025-01-15T08:00:00.000Z",
        "usageCount": 12340,
        "createdAt": "2023-03-10T11:00:00.000Z",
        "createdBy": {
          "id": "{{user_id_1}}",
          "name": "{{user_name_1}}",
          "email": "{{user_email_1}}"
        }
      }
    ],
    "pagination": {
      "total": 4,
      "limit": 50,
      "offset": 0,
      "hasMore": false
    }
  },
  "timestamp": "2025-07-10T13:20:00.000Z"
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
| `pkceRequired` | boolean | Whether PKCE is required |
| `lastUsedAt` | string\|null | ISO 8601 timestamp of last usage |
| `usageCount` | integer | Total number of token requests |
| `createdAt` | string | ISO 8601 creation timestamp |
| `createdBy` | object | User who created the client |

---

## Client Status Values

| Status | Description |
|--------|-------------|
| `active` | Client is active and can be used |
| `inactive` | Client is disabled but not deleted |
| `revoked` | Client has been permanently revoked |

---

## Client Types

| Type | Description |
|------|-------------|
| `confidential` | Server-side apps that can securely store secrets |
| `public` | SPAs, mobile apps that cannot securely store secrets |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid parameters | Invalid limit or offset values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view OAuth clients |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "Invalid query parameter",
    "details": "limit must be a positive integer between 1 and 100"
  },
  "timestamp": "2025-07-10T13:20:00.000Z"
}
```

---

## Notes

1. **Security:** The `clientSecret` is never returned in list responses. Only the `clientId` is shown for identification.

2. **Pagination:** Use `limit` and `offset` for pagination. Check `pagination.hasMore` to determine if more results exist.

3. **Default Limit:** The default limit is 50 items. Maximum limit may be enforced by the server (typically 100).

4. **All Statuses:** Clients of all statuses are returned. Filter client-side if you only need active clients.

5. **Usage Metrics:** The `usageCount` and `lastUsedAt` fields help identify active vs. dormant clients for security auditing.

6. **PKCE Enforcement:** The `pkceRequired` field indicates if PKCE is enforced for authorization code flows with this client.

7. **Required Roles:** Typically requires `tenant_admin` or `oauth_admin` role to list OAuth clients.

8. **Related Endpoints:**
   - `POST /oauth-clients` — Create new OAuth client
   - `GET /oauth-clients/{clientId}` — Get OAuth client details
   - `PUT /oauth-clients/{clientId}` — Update OAuth client
   - `DELETE /oauth-clients/{clientId}` — Delete OAuth client
   - `POST /oauth-clients/{clientId}/rotate-secret` — Rotate client secret
