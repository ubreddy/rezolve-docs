---
id: get-api-key-by-id
title: Get API Key by ID
sidebar_label: Get API Key by ID
sidebar_position: 5
displayed_sidebar: integrationSidebar
description: API documentation for retrieving a specific API key by its ID
status:
whatsPending:
---

# Get API Key by ID

Retrieves detailed information about a specific API key by its unique identifier. This endpoint returns the full metadata for an API key including configuration, usage statistics, and audit information. Used for API key management and troubleshooting.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/api-keys/{keyId}`

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
| `keyId` | string (UUID) | The unique identifier of the API key | Yes |

---

## Query Parameters

None.

---

## Request Body Schema

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/api-keys/{{key_id}}' \
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
  "message": "API key retrieved successfully",
  "data": {
    "id": "{{key_id}}",
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
    "permissions": {
      "ticketing": {
        "read": true,
        "write": true,
        "delete": false,
        "admin": false
      },
      "users": {
        "read": true,
        "write": false,
        "admin": false
      },
      "catalog": {
        "read": false,
        "write": false
      },
      "reports": {
        "read": false
      }
    },
    "rateLimit": {
      "requestsPerMinute": 100,
      "requestsPerHour": 5000,
      "requestsPerDay": 50000,
      "currentUsage": {
        "minuteCount": 12,
        "hourCount": 234,
        "dayCount": 1542
      }
    },
    "expiresAt": "2026-07-10T12:50:00.000Z",
    "isExpired": false,
    "daysUntilExpiration": 365,
    "usage": {
      "totalRequests": 154200,
      "successfulRequests": 153890,
      "failedRequests": 310,
      "lastUsedAt": "2025-07-10T12:55:00.000Z",
      "lastUsedFromIp": "{{client_ip}}",
      "firstUsedAt": "2025-01-16T08:30:00.000Z",
      "averageRequestsPerDay": 856
    },
    "audit": {
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
      },
      "lastRotatedAt": null,
      "rotationCount": 0
    },
    "tenant": {
      "id": "{{tenant_id}}",
      "name": "{{tenant_name}}"
    }
  },
  "timestamp": "2025-07-10T13:00:00.000Z"
}
```

---

## API Key Object Schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique API key identifier (UUID) |
| `name` | string | Human-readable name |
| `description` | string | Description of the key's purpose |
| `prefix` | string | Key prefix for identification (first 12 chars) |
| `scopes` | array | List of permission scopes |
| `protocol` | string | API protocol (`rest`, `graphql`) |
| `ipWhitelist` | array | Allowed IP addresses/CIDR ranges |
| `environment` | string | Environment type: `live` or `test` |
| `status` | string | Key status: `active`, `inactive`, `expired`, `revoked` |
| `permissions` | object | Detailed permission breakdown by resource |
| `rateLimit` | object | Rate limit configuration and current usage |
| `expiresAt` | string\|null | ISO 8601 expiration timestamp |
| `isExpired` | boolean | Whether the key is currently expired |
| `daysUntilExpiration` | integer\|null | Days remaining until expiration |
| `usage` | object | Usage statistics |
| `audit` | object | Audit trail information |
| `tenant` | object | Associated tenant information |

---

## Usage Statistics Object

| Field | Type | Description |
|-------|------|-------------|
| `totalRequests` | integer | Total API requests made with this key |
| `successfulRequests` | integer | Number of successful requests (2xx responses) |
| `failedRequests` | integer | Number of failed requests (4xx/5xx responses) |
| `lastUsedAt` | string\|null | ISO 8601 timestamp of last usage |
| `lastUsedFromIp` | string\|null | IP address of last request |
| `firstUsedAt` | string\|null | ISO 8601 timestamp of first usage |
| `averageRequestsPerDay` | number | Average daily request count |

---

## Rate Limit Object

| Field | Type | Description |
|-------|------|-------------|
| `requestsPerMinute` | integer | Maximum requests allowed per minute |
| `requestsPerHour` | integer | Maximum requests allowed per hour |
| `requestsPerDay` | integer | Maximum requests allowed per day |
| `currentUsage.minuteCount` | integer | Requests made in current minute |
| `currentUsage.hourCount` | integer | Requests made in current hour |
| `currentUsage.dayCount` | integer | Requests made today |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid key ID format | The keyId is not a valid UUID |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view this API key |
| `404 Not Found` | API key not found | No API key exists with the specified ID |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "API_KEY_NOT_FOUND",
    "message": "API key not found",
    "details": "No API key exists with ID: {{key_id}}"
  },
  "timestamp": "2025-07-10T13:00:00.000Z"
}
```

---

## Notes

1. **Security:** The full API key value is never returned. Only the prefix is shown for identification purposes.

2. **UUID Format:** The `keyId` must be a valid UUID. Invalid formats will return a 400 error.

3. **Detailed Permissions:** Unlike the list endpoint, this response includes a detailed `permissions` breakdown showing exactly what resources and actions the key can access.

4. **Rate Limit Monitoring:** The `rateLimit.currentUsage` object shows real-time usage against limits, useful for monitoring and troubleshooting.

5. **Usage Analytics:** The `usage` object provides comprehensive statistics for auditing and identifying usage patterns.

6. **Expiration Info:** The `isExpired` and `daysUntilExpiration` fields make it easy to identify keys needing renewal.

7. **Audit Trail:** The `audit` object tracks creation, updates, and rotation history for compliance requirements.

8. **Required Roles:** Typically requires `tenant_admin` or `api_admin` role to view API key details.

9. **Related Endpoints:**
   - `GET /api-keys` — List all API keys
   - `POST /api-keys` — Create new API key
   - `PUT /api-keys/{keyId}` — Update API key
   - `DELETE /api-keys/{keyId}` — Revoke/delete API key
   - `POST /api-keys/{keyId}/rotate` — Rotate API key
   - `POST /api-key/validate` — Validate an API key
