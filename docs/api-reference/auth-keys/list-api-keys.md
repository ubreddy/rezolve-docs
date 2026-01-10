---
id: list-api-keys
title: List API Keys
sidebar_label: List API Keys
sidebar_position: 4
displayed_sidebar: integrationSidebar
description: API documentation for retrieving a paginated list of API keys
status:
whatsPending:
---

# List API Keys

Retrieves a paginated list of all API keys for a tenant. This endpoint returns metadata about each key including name, scopes, status, and expiration details. Used for API key management and administration interfaces.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/api-keys`

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

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/api-keys?limit=50&offset=0' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}'
```

**With Pagination:**

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/api-keys?limit=10&offset=20' \
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
  "message": "API keys retrieved successfully",
  "data": {
    "apiKeys": [
      {
        "id": "{{key_id_1}}",
        "name": "Production Integration Key",
        "description": "API key for ServiceNow integration",
        "prefix": "ak_live_xxxx",
        "scopes": [
          "ticketing:read",
          "ticketing:write",
          "users:read"
        ],
        "protocol": "rest",
        "ipWhitelist": [
          "{{allowed_ip_range_1}}",
          "{{allowed_ip_range_2}}"
        ],
        "environment": "live",
        "status": "active",
        "expiresAt": "2026-07-10T12:50:00.000Z",
        "lastUsedAt": "2025-07-10T10:30:00.000Z",
        "usageCount": 15420,
        "createdAt": "2025-01-15T10:00:00.000Z",
        "createdBy": {
          "id": "{{user_id}}",
          "name": "{{user_name}}",
          "email": "{{user_email}}"
        },
        "updatedAt": "2025-06-01T14:00:00.000Z",
        "updatedBy": {
          "id": "{{user_id}}",
          "name": "{{user_name}}",
          "email": "{{user_email}}"
        }
      },
      {
        "id": "{{key_id_2}}",
        "name": "Test Environment Key",
        "description": "API key for development testing",
        "prefix": "ak_test_xxxx",
        "scopes": [
          "ticketing:read",
          "ticketing:write",
          "ticketing:delete"
        ],
        "protocol": "rest",
        "ipWhitelist": [],
        "environment": "test",
        "status": "active",
        "expiresAt": null,
        "lastUsedAt": "2025-07-09T16:45:00.000Z",
        "usageCount": 892,
        "createdAt": "2025-03-20T09:00:00.000Z",
        "createdBy": {
          "id": "{{user_id}}",
          "name": "{{user_name}}",
          "email": "{{user_email}}"
        },
        "updatedAt": null,
        "updatedBy": null
      },
      {
        "id": "{{key_id_3}}",
        "name": "Slack Bot Integration",
        "description": "API key for Slack bot integration",
        "prefix": "ak_live_yyyy",
        "scopes": [
          "ticketing:read",
          "ticketing:write",
          "notifications:write"
        ],
        "protocol": "rest",
        "ipWhitelist": [
          "{{allowed_ip_range_3}}"
        ],
        "environment": "live",
        "status": "active",
        "expiresAt": "2025-12-31T23:59:59.000Z",
        "lastUsedAt": "2025-07-10T12:55:00.000Z",
        "usageCount": 45670,
        "createdAt": "2024-06-15T11:00:00.000Z",
        "createdBy": {
          "id": "{{user_id}}",
          "name": "{{user_name}}",
          "email": "{{user_email}}"
        },
        "updatedAt": "2025-01-10T10:00:00.000Z",
        "updatedBy": {
          "id": "{{user_id}}",
          "name": "{{user_name}}",
          "email": "{{user_email}}"
        }
      },
      {
        "id": "{{key_id_4}}",
        "name": "Expired Legacy Key",
        "description": "Old integration key - expired",
        "prefix": "ak_live_zzzz",
        "scopes": [
          "ticketing:read"
        ],
        "protocol": "rest",
        "ipWhitelist": [],
        "environment": "live",
        "status": "expired",
        "expiresAt": "2025-01-01T00:00:00.000Z",
        "lastUsedAt": "2024-12-28T09:15:00.000Z",
        "usageCount": 8920,
        "createdAt": "2024-01-01T10:00:00.000Z",
        "createdBy": {
          "id": "{{user_id}}",
          "name": "{{user_name}}",
          "email": "{{user_email}}"
        },
        "updatedAt": null,
        "updatedBy": null
      }
    ],
    "pagination": {
      "total": 4,
      "limit": 50,
      "offset": 0,
      "hasMore": false
    }
  },
  "timestamp": "2025-07-10T12:55:00.000Z"
}
```

---

## API Key Object Schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique API key identifier |
| `name` | string | Human-readable name |
| `description` | string | Description of the key's purpose |
| `prefix` | string | Key prefix (first 12 characters for identification) |
| `scopes` | array | List of permission scopes |
| `protocol` | string | API protocol (`rest`, `graphql`) |
| `ipWhitelist` | array | Allowed IP addresses/CIDR ranges |
| `environment` | string | Environment type: `live` or `test` |
| `status` | string | Key status (see values below) |
| `expiresAt` | string\|null | ISO 8601 expiration timestamp (null if no expiration) |
| `lastUsedAt` | string\|null | ISO 8601 timestamp of last usage |
| `usageCount` | integer | Total number of API calls made with this key |
| `createdAt` | string | ISO 8601 creation timestamp |
| `createdBy` | object | User who created the key |
| `updatedAt` | string\|null | ISO 8601 last update timestamp |
| `updatedBy` | object\|null | User who last updated the key |

---

## API Key Status Values

| Status | Description |
|--------|-------------|
| `active` | Key is active and can be used |
| `inactive` | Key is disabled but not deleted |
| `expired` | Key has passed its expiration date |
| `revoked` | Key has been permanently revoked |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid parameters | Invalid limit or offset values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view API keys |
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
  "timestamp": "2025-07-10T12:55:00.000Z"
}
```

---

## Notes

1. **Security:** The full API key value is never returned in list responses. Only the prefix is shown for identification purposes.

2. **Pagination:** Use `limit` and `offset` for pagination. Check `pagination.hasMore` to determine if more results exist.

3. **Default Limit:** The default limit is 50 items. Maximum limit may be enforced by the server (typically 100).

4. **Status Filtering:** All keys regardless of status are returned. Filter client-side or use additional query parameters if available.

5. **Usage Metrics:** The `usageCount` and `lastUsedAt` fields help identify active vs. dormant keys for security auditing.

6. **Expiration:** Keys with `expiresAt` in the past will have `status: "expired"` and will no longer work for authentication.

7. **Required Roles:** Typically requires `tenant_admin` or `api_admin` role to list API keys.

8. **Audit Logging:** All API key listing operations are logged for security compliance.

9. **Related Endpoints:**
   - `POST /api-keys` — Create new API key
   - `GET /api-keys/{id}` — Get single API key details
   - `PUT /api-keys/{id}` — Update API key
   - `DELETE /api-keys/{id}` — Revoke/delete API key
   - `POST /api-keys/{id}/rotate` — Rotate API key
   - `POST /api-key/validate` — Validate an API key
