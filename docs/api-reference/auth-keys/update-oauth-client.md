---
id: update-oauth-client
title: Update OAuth Client
sidebar_label: Update OAuth Client
sidebar_position: 11
displayed_sidebar: integrationSidebar
description: API documentation for updating an existing OAuth client's configuration
status:
whatsPending:
---

# Update OAuth Client

Updates an existing OAuth client's configuration. This endpoint allows partial updates using the PATCH method — only the fields provided in the request body will be modified. All other settings remain unchanged.

---

## Endpoint

**Method:** `PATCH`
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
| `content-type` | Must be `application/json` | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | No |

---

## Path Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `clientId` | string (UUID) | The unique identifier of the OAuth client to update | Yes |

---

## Query Parameters

None.

---

## Request Body Schema

All fields are optional — only include fields you want to update.

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `name` | string | Human-readable name for the OAuth client | No |
| `description` | string | Description of the client's purpose | No |
| `clientType` | string | Client type: `confidential` or `public` | No |
| `redirectUris` | array | List of allowed redirect URIs (replaces existing) | No |
| `grantTypes` | array | Allowed OAuth grant types (replaces existing) | No |
| `scopes` | array | List of permission scopes (replaces existing) | No |
| `allowedOrigins` | array | CORS allowed origins (replaces existing) | No |
| `ipWhitelist` | array | Allowed IP addresses/CIDR ranges (replaces existing) | No |

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

**Update Name and Description Only:**

```json
{
  "name": "ServiceNow Integration v2",
  "description": "Updated OAuth client for ServiceNow ITSM integration - production"
}
```

**Add New Redirect URI:**

```json
{
  "redirectUris": [
    "https://instance.service-now.com/oauth_redirect.do",
    "https://instance.service-now.com/oauth_callback",
    "https://instance.service-now.com/oauth_new_callback"
  ]
}
```

**Update Scopes:**

```json
{
  "scopes": [
    "ticketing:read",
    "ticketing:write",
    "ticketing:delete",
    "users:read",
    "reports:read"
  ]
}
```

**Update IP Whitelist:**

```json
{
  "ipWhitelist": [
    "192.168.1.0/24",
    "10.0.0.0/8",
    "203.0.113.0/24"
  ]
}
```

**Change Client Type (with related settings):**

```json
{
  "clientType": "public",
  "grantTypes": [
    "authorization_code"
  ]
}
```

---

## Example cURL

```bash
curl --request PATCH \
  --url '{{base_url}}/api/v1/oauth-clients/client-550e8400-e29b-41d4-a716-446655440001' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "name": "ServiceNow Integration v2",
    "description": "Updated OAuth client for ServiceNow ITSM integration",
    "scopes": [
      "ticketing:read",
      "ticketing:write",
      "users:read",
      "reports:read"
    ]
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "OAuth client updated successfully",
  "data": {
    "id": "client-550e8400-e29b-41d4-a716-446655440001",
    "name": "ServiceNow Integration v2",
    "description": "Updated OAuth client for ServiceNow ITSM integration",
    "clientId": "sn_integration_7f3d8a2b1c4e",
    "clientType": "confidential",
    "redirectUris": [
      "https://instance.service-now.com/oauth_redirect.do"
    ],
    "grantTypes": [
      "authorization_code",
      "refresh_token"
    ],
    "scopes": [
      "ticketing:read",
      "ticketing:write",
      "users:read",
      "reports:read"
    ],
    "allowedOrigins": [
      "https://instance.service-now.com"
    ],
    "ipWhitelist": [],
    "status": "active",
    "updatedAt": "2025-07-10T13:30:00.000Z",
    "updatedBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "changes": {
      "name": {
        "from": "ServiceNow Integration",
        "to": "ServiceNow Integration v2"
      },
      "description": {
        "from": "OAuth client for ServiceNow ITSM integration",
        "to": "Updated OAuth client for ServiceNow ITSM integration"
      },
      "scopes": {
        "added": ["reports:read"],
        "removed": []
      }
    }
  },
  "timestamp": "2025-07-10T13:30:00.000Z"
}
```

---

## What Can Be Updated

| Field | Updatable | Notes |
|-------|-----------|-------|
| `name` | Yes | Display name can be changed |
| `description` | Yes | Description can be updated |
| `clientType` | Yes | Changing type may affect grant types |
| `redirectUris` | Yes | Array is replaced entirely |
| `grantTypes` | Yes | Array is replaced entirely |
| `scopes` | Yes | Array is replaced entirely |
| `allowedOrigins` | Yes | Array is replaced entirely |
| `ipWhitelist` | Yes | Array is replaced entirely |
| `clientId` | No | OAuth client ID cannot be changed |
| `clientSecret` | No | Use rotate-secret endpoint |
| `status` | No | Use separate enable/disable endpoint |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or invalid field values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to update OAuth clients |
| `404 Not Found` | OAuth client not found | No OAuth client exists with the specified ID |
| `409 Conflict` | Duplicate name | Another OAuth client with this name already exists |
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
      "grantTypes": "Grant type 'client_credentials' is not allowed for public clients"
    }
  },
  "timestamp": "2025-07-10T13:30:00.000Z"
}
```

---

## Notes

1. **Partial Update:** PATCH allows partial updates. Only fields included in the request body are modified. Omitted fields retain their current values.

2. **Array Replacement:** Array fields (`redirectUris`, `grantTypes`, `scopes`, `allowedOrigins`, `ipWhitelist`) are replaced entirely, not merged. Include all desired values.

3. **Client Type Change:** Changing `clientType` from `confidential` to `public`:
   - May invalidate certain grant types (e.g., `client_credentials`)
   - PKCE may become required
   - Client secret authentication becomes unavailable

4. **Scope Changes:** Reducing scopes may cause existing tokens with those scopes to fail. Consider impact on active integrations.

5. **Redirect URI Validation:**
   - Must use HTTPS in production (except localhost)
   - Must be exact match during authorization
   - Custom schemes allowed for mobile apps (e.g., `myapp://`)

6. **Audit Trail:** All changes are logged with the user who made the change and timestamp.

7. **Active Tokens:** Changes to scopes or grant types don't affect existing tokens. New tokens will use updated configuration.

8. **Secret Rotation:** To update the client secret, use the dedicated `POST /oauth-clients/{clientId}/rotate-secret` endpoint.

9. **Required Roles:** Typically requires `tenant_admin` or `oauth_admin` role to update OAuth clients.

10. **Related Endpoints:**
    - `GET /oauth-clients` — List all OAuth clients
    - `GET /oauth-clients/{clientId}` — Get OAuth client details
    - `POST /oauth-clients` — Create new OAuth client
    - `DELETE /oauth-clients/{clientId}` — Delete OAuth client
    - `POST /oauth-clients/{clientId}/rotate-secret` — Rotate client secret
