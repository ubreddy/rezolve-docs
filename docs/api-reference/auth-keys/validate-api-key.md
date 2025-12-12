---
id: validate-api-key
title: Validate API Key
sidebar_label: Validate API Key
sidebar_position: 2
displayed_sidebar: integrationSidebar
description: API documentation for validating API keys with optional IP verification
status:
whatsPending:
---

# Validate API Key

Validates an API key and optionally verifies it against a specific client IP address. This endpoint is used for authentication verification, API key validation before granting access, and IP-based access control enforcement.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v1/api-key/validate`

---

## Authentication

This endpoint may be called without Bearer token authentication as it is used to validate API keys themselves. However, depending on configuration, a valid tenant context may still be required.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `content-type` | Must be `application/json` | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Conditional |

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
| `apiKey` | string | The API key to validate | Yes |
| `clientIp` | string | The client IP address for IP-based validation | Yes |

---

## Request Body Example

```json
{
  "apiKey": "string",
  "clientIp": "string"
}
```

**Typical Request:**

```json
{
  "apiKey": "{{api_key}}",
  "clientIp": "{{client_ip}}"
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v1/api-key/validate' \
  --header 'accept: application/json' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "apiKey": "ak_live_7f3d8a2b1c4e5f6g7h8i9j0k1l2m3n4o",
    "clientIp": "192.168.1.100"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "API key is valid",
  "data": {
    "valid": true,
    "apiKey": {
      "id": "{{key_id}}",
      "name": "Production API Key",
      "prefix": "ak_live_xxxx",
      "status": "active",
      "type": "live",
      "scopes": [
        "ticketing:read",
        "ticketing:write",
        "users:read"
      ],
      "permissions": {
        "canCreateTickets": true,
        "canReadTickets": true,
        "canUpdateTickets": true,
        "canDeleteTickets": false,
        "canManageUsers": false
      },
      "rateLimit": {
        "requestsPerMinute": 100,
        "requestsPerHour": 5000,
        "requestsPerDay": 50000
      },
      "ipRestrictions": {
        "enabled": true,
        "allowedIps": ["{{allowed_ip_range_1}}", "{{allowed_ip_range_2}}"],
        "clientIpValid": true
      },
      "expiresAt": "2026-01-01T00:00:00.000Z",
      "lastUsedAt": "2025-07-10T12:45:00.000Z",
      "createdAt": "2024-01-15T10:00:00.000Z"
    },
    "tenant": {
      "id": "{{tenant_id}}",
      "name": "{{tenant_name}}",
      "status": "active"
    }
  },
  "timestamp": "2025-07-10T12:45:30.000Z"
}
```

---

## Invalid API Key Response

**Status Code:** `200 OK` (or `401 Unauthorized` depending on implementation)

```json
{
  "success": false,
  "message": "API key validation failed",
  "data": {
    "valid": false,
    "reason": "INVALID_KEY",
    "details": "The provided API key does not exist or has been revoked"
  },
  "timestamp": "2025-07-10T12:45:30.000Z"
}
```

---

## IP Restriction Failed Response

**Status Code:** `200 OK` (or `403 Forbidden`)

```json
{
  "success": false,
  "message": "API key validation failed",
  "data": {
    "valid": false,
    "reason": "IP_NOT_ALLOWED",
    "details": "The client IP address is not in the allowed list for this API key",
    "clientIp": "{{client_ip}}",
    "allowedRanges": ["{{allowed_ip_range_1}}", "{{allowed_ip_range_2}}"]
  },
  "timestamp": "2025-07-10T12:45:30.000Z"
}
```

---

## Validation Failure Reasons

| Reason Code | Description |
|-------------|-------------|
| `INVALID_KEY` | API key does not exist or is malformed |
| `KEY_REVOKED` | API key has been revoked |
| `KEY_EXPIRED` | API key has expired |
| `KEY_INACTIVE` | API key is inactive/disabled |
| `IP_NOT_ALLOWED` | Client IP not in allowed list |
| `RATE_LIMIT_EXCEEDED` | API key has exceeded rate limits |
| `TENANT_INACTIVE` | Associated tenant is inactive |
| `SCOPE_INVALID` | API key lacks required scopes |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Missing required fields or malformed JSON |
| `401 Unauthorized` | Invalid API key | The API key is invalid, expired, or revoked |
| `403 Forbidden` | IP restriction failed | Client IP not allowed for this API key |
| `404 Not Found` | API key not found | The specified API key does not exist |
| `422 Unprocessable Entity` | Validation error | Invalid field format (e.g., invalid IP address) |
| `429 Too Many Requests` | Rate limit exceeded | Too many validation requests |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Invalid request body",
    "details": {
      "apiKey": "Field is required",
      "clientIp": "Must be a valid IP address"
    }
  },
  "timestamp": "2025-07-10T12:45:30.000Z"
}
```

---

## Notes

1. **Purpose:** This endpoint validates API keys before granting access to protected resources. It's commonly used by API gateways and middleware.

2. **IP Validation:** The `clientIp` field is used to verify that the request originates from an allowed IP address when IP restrictions are enabled for the API key.

3. **Key Types:**
   - `live` — Production API keys
   - `test` — Test/sandbox API keys
   - `internal` — Internal service keys

4. **Scopes:** The response includes the scopes granted to the API key, which determine what resources and actions are permitted.

5. **Rate Limits:** The response includes rate limit configuration for the API key. Use this to implement client-side throttling.

6. **Key Prefix:** Only the key prefix is returned in responses for security. The full API key is never echoed back.

7. **Expiration:** Check `expiresAt` to determine if the key is approaching expiration and needs renewal.

8. **Caching:** Validation results can be cached briefly (e.g., 60 seconds) to reduce validation overhead, but should be re-validated for sensitive operations.

9. **IPv4 and IPv6:** The `clientIp` field supports both IPv4 (e.g., `192.168.1.100`) and IPv6 (e.g., `2001:db8::1`) addresses.

10. **Related Endpoints:**
    - `POST /api-key/create` — Create new API key
    - `GET /api-key/list` — List API keys
    - `PUT /api-key/{id}` — Update API key
    - `DELETE /api-key/{id}` — Revoke API key
    - `POST /api-key/{id}/rotate` — Rotate API key
