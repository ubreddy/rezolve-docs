---
id: rotate-api-key
title: Rotate API Key
sidebar_label: Rotate API Key
sidebar_position: 7
displayed_sidebar: integrationSidebar
description: API documentation for rotating API keys while preserving configuration
status:
whatsPending:
---

# Rotate API Key

Rotates an existing API key by generating a new key value while preserving all configuration settings (name, scopes, IP whitelist, etc.). The old key is invalidated and a new key is issued. This is the recommended approach for periodic key rotation as part of security best practices.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v1/api-keys/{keyId}/rotate`

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
| `keyId` | string (UUID) | The unique identifier of the API key to rotate | Yes |

---

## Query Parameters

None.

---

## Request Body Schema

Not applicable — this endpoint typically requires no request body. Optional parameters may be supported:

```json
{
  "gracePeriodMinutes": 60,
  "expiresIn": 365
}
```

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `gracePeriodMinutes` | integer | Minutes during which both old and new keys work | No |
| `expiresIn` | integer | New expiration time in days (resets expiration) | No |

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v1/api-keys/{{key_id}}/rotate' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}'
```

**With Grace Period:**

```bash
curl --request POST \
  --url '{{base_url}}/api/v1/api-keys/{{key_id}}/rotate' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "gracePeriodMinutes": 60
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "API key rotated successfully",
  "data": {
    "id": "{{key_id}}",
    "name": "Production Integration Key",
    "description": "API key for ServiceNow integration",
    "newApiKey": "{{new_generated_api_key}}",
    "newPrefix": "ak_live_xxxx",
    "previousPrefix": "ak_live_yyyy",
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
    "expiresAt": "2026-07-10T13:10:00.000Z",
    "rotation": {
      "rotatedAt": "2025-07-10T13:10:00.000Z",
      "rotatedBy": {
        "id": "{{user_id}}",
        "name": "{{user_name}}",
        "email": "{{user_email}}"
      },
      "rotationCount": 3,
      "previousKeyInvalidatedAt": "2025-07-10T13:10:00.000Z",
      "gracePeriod": null
    }
  },
  "timestamp": "2025-07-10T13:10:00.000Z"
}
```

---

## Success Response with Grace Period

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "API key rotated successfully with grace period",
  "data": {
    "id": "{{key_id}}",
    "name": "Production Integration Key",
    "newApiKey": "{{new_generated_api_key}}",
    "newPrefix": "ak_live_xxxx",
    "previousPrefix": "ak_live_yyyy",
    "scopes": [
      "ticketing:read",
      "ticketing:write",
      "users:read"
    ],
    "environment": "live",
    "status": "active",
    "rotation": {
      "rotatedAt": "2025-07-10T13:10:00.000Z",
      "rotatedBy": {
        "id": "{{user_id}}",
        "name": "{{user_name}}",
        "email": "{{user_email}}"
      },
      "rotationCount": 3,
      "gracePeriod": {
        "enabled": true,
        "minutes": 60,
        "previousKeyValidUntil": "2025-07-10T14:10:00.000Z"
      }
    }
  },
  "timestamp": "2025-07-10T13:10:00.000Z"
}
```

:::warning Important
The `newApiKey` value is only returned once during rotation. Store it securely as it cannot be retrieved again.
:::

---

## What Gets Preserved

| Setting | Preserved | Notes |
|---------|-----------|-------|
| `id` | Yes | Key ID remains the same |
| `name` | Yes | Name unchanged |
| `description` | Yes | Description unchanged |
| `scopes` | Yes | All permissions preserved |
| `protocol` | Yes | Protocol setting preserved |
| `ipWhitelist` | Yes | IP restrictions preserved |
| `environment` | Yes | Environment unchanged |
| `apiKey` | No | New key value generated |
| `prefix` | No | New prefix from new key |
| `expiresAt` | Optional | Can be reset with `expiresIn` |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid key ID format | The keyId is not a valid UUID |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to rotate API keys |
| `404 Not Found` | API key not found | No API key exists with the specified ID |
| `409 Conflict` | Key is inactive | Cannot rotate an inactive, expired, or revoked key |
| `429 Too Many Requests` | Rate limit exceeded | Too many rotation requests (security protection) |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "KEY_INACTIVE",
    "message": "Cannot rotate an inactive API key",
    "details": "The API key is currently in 'revoked' status. Create a new key instead."
  },
  "timestamp": "2025-07-10T13:10:00.000Z"
}
```

---

## Notes

1. **Security Best Practice:** Rotate API keys periodically (e.g., every 90 days) as part of your security policy.

2. **New Key Only Shown Once:** The new API key value is only returned in the rotation response. Store it immediately in a secure location.

3. **Preserved Settings:** All configuration (name, scopes, IP whitelist, etc.) is preserved. Only the key value changes.

4. **Grace Period:** If supported, use `gracePeriodMinutes` to allow both old and new keys to work during a transition period. This prevents service disruption during key update in integrations.

5. **Immediate Invalidation:** Without a grace period, the old key is immediately invalidated. Ensure all integrations are ready to switch.

6. **Rotation Count:** The `rotationCount` tracks how many times the key has been rotated, useful for auditing.

7. **ID Preservation:** The key ID (`keyId`) remains unchanged, making it easy to track the same logical key across rotations.

8. **Preferred Over Delete:** Rotation is preferred over delete + create because:
   - Preserves all configuration
   - Maintains audit history
   - Keeps the same key ID for tracking

9. **Required Roles:** Typically requires `tenant_admin` or `api_admin` role to rotate API keys.

10. **Rate Limiting:** Rotation may be rate-limited to prevent abuse (e.g., max 10 rotations per hour per key).

11. **Notifications:** Key owners may receive notifications about the rotation depending on tenant settings.

12. **Related Endpoints:**
    - `GET /api-keys` — List all API keys
    - `GET /api-keys/{keyId}` — Get API key details
    - `POST /api-keys` — Create new API key
    - `PUT /api-keys/{keyId}` — Update API key settings
    - `DELETE /api-keys/{keyId}` — Revoke/delete API key
    - `POST /api-key/validate` — Validate an API key
