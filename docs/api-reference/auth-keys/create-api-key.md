---
id: create-api-key
title: Create API Key
sidebar_label: Create API Key
sidebar_position: 3
displayed_sidebar: integrationSidebar
description: API documentation for creating new API keys with scopes and restrictions
status:
whatsPending:
---

# Create API Key

Creates a new API key for a tenant. API keys are used for programmatic access to the ticketing system and other modules. This endpoint allows administrators to generate keys with specific scopes, IP restrictions, and expiration settings.

---

## Endpoint

**Method:** `POST`
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
| `name` | string | Human-readable name for the API key | Yes |
| `description` | string | Description of the API key's purpose | No |
| `scopes` | string | Comma-separated list of permission scopes | Yes |
| `protocol` | string | Protocol type (e.g., `rest`, `graphql`) | No |
| `ipWhitelist` | string | Comma-separated list of allowed IP addresses/CIDR ranges | No |
| `environment` | string | Environment type: `live` or `test` | Yes |
| `expiresIn` | integer | Expiration time in days (e.g., 1, 30, 365) | No |

---

## Request Body Example

```json
{
  "name": "string",
  "description": "string",
  "scopes": "string",
  "protocol": "string",
  "ipWhitelist": "string",
  "environment": "live",
  "expiresIn": 1
}
```

**Typical Request:**

```json
{
  "name": "Production Integration Key",
  "description": "API key for ServiceNow integration",
  "scopes": "ticketing:read,ticketing:write,users:read",
  "protocol": "rest",
  "ipWhitelist": "{{allowed_ip_range}}",
  "environment": "live",
  "expiresIn": 365
}
```

**Minimal Request:**

```json
{
  "name": "Test Key",
  "scopes": "ticketing:read",
  "environment": "test"
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v1/api-keys' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "name": "Production Integration Key",
    "description": "API key for ServiceNow integration",
    "scopes": "ticketing:read,ticketing:write,users:read",
    "protocol": "rest",
    "ipWhitelist": "{{allowed_ip_range}}",
    "environment": "live",
    "expiresIn": 365
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "API key created successfully",
  "data": {
    "id": "{{key_id}}",
    "name": "Production Integration Key",
    "description": "API key for ServiceNow integration",
    "apiKey": "{{generated_api_key}}",
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
    "createdAt": "2025-07-10T12:50:00.000Z",
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
  "timestamp": "2025-07-10T12:50:00.000Z"
}
```

:::warning Important
The full `apiKey` value is only returned once during creation. Store it securely as it cannot be retrieved again.
:::

---

## Available Scopes

| Scope | Description |
|-------|-------------|
| `ticketing:read` | Read access to tickets |
| `ticketing:write` | Create and update tickets |
| `ticketing:delete` | Delete tickets |
| `ticketing:admin` | Full ticketing administration |
| `users:read` | Read user information |
| `users:write` | Create and update users |
| `users:admin` | Full user administration |
| `catalog:read` | Read service catalog |
| `catalog:write` | Modify service catalog |
| `reports:read` | Access reports and analytics |
| `queues:read` | Read queue information |
| `queues:write` | Manage queue assignments |
| `notifications:read` | Read notifications |
| `notifications:write` | Send notifications |
| `*` | Full access (all scopes) |

---

## Environment Types

| Environment | Description |
|-------------|-------------|
| `live` | Production environment - real data and operations |
| `test` | Test/sandbox environment - for development and testing |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Missing required fields or invalid format |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to create API keys |
| `409 Conflict` | Duplicate name | API key with this name already exists |
| `422 Unprocessable Entity` | Validation error | Invalid scope, IP format, or other field |
| `429 Too Many Requests` | Rate limit exceeded | Too many API key creation requests |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body",
    "details": {
      "scopes": "Invalid scope 'ticketing:invalid'. Valid scopes: ticketing:read, ticketing:write, ticketing:delete, ticketing:admin",
      "ipWhitelist": "Invalid CIDR notation: '192.168.1.999'"
    }
  },
  "timestamp": "2025-07-10T12:50:00.000Z"
}
```

---

## Notes

1. **Key Security:** The full API key is only shown once upon creation. Store it securely in a secrets manager or vault. It cannot be retrieved later.

2. **Key Prefix:** API keys have a prefix indicating the environment:
   - `ak_live_` — Production keys
   - `ak_test_` — Test/sandbox keys

3. **IP Whitelist:** When `ipWhitelist` is provided, API requests are only accepted from the specified IP addresses or CIDR ranges. Leave empty to allow requests from any IP.

4. **Expiration:**
   - `expiresIn` specifies the number of days until expiration
   - If omitted, the key may have a default expiration or never expire (based on tenant settings)
   - Expired keys are automatically deactivated

5. **Scopes:** Use the principle of least privilege. Only grant the scopes necessary for the integration's purpose.

6. **Protocol:** Specifies the API protocol the key is authorized for:
   - `rest` — REST API access
   - `graphql` — GraphQL API access
   - Leave empty for all protocols

7. **Rate Limits:** API keys inherit rate limits from tenant configuration. Contact admin for custom rate limits.

8. **Audit Trail:** All API key operations (create, update, delete, use) are logged for security auditing.

9. **Key Rotation:** Regularly rotate API keys for security. Use the rotate endpoint to generate a new key while preserving settings.

10. **Required Roles:** Typically requires `tenant_admin` or `api_admin` role to create API keys.

11. **Related Endpoints:**
    - `GET /api-keys` — List all API keys
    - `GET /api-keys/{id}` — Get API key details
    - `PUT /api-keys/{id}` — Update API key
    - `DELETE /api-keys/{id}` — Revoke/delete API key
    - `POST /api-keys/{id}/rotate` — Rotate API key
    - `POST /api-key/validate` — Validate an API key
