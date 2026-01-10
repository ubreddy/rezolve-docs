---
id: update-tenant-configuration
title: Update Tenant Configuration
sidebar_label: Update Tenant Configuration
sidebar_position: 21
displayed_sidebar: integrationSidebar
description: API documentation for updating tenant configuration
status:
whatsPending:
draft: true
---

# Update Tenant Configuration

Update tenant configuration. This endpoint allows tenant admins to update their own tenant's configuration settings including server URL, realm name, and custom settings.

---

## Endpoint

**Method:** `PATCH`
**URL:** `{{base_url}}/api/v1/admin/tenants/{tenantId}`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header.

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
| `tenantId` | string (UUID) | The unique identifier of the tenant | Yes |

---

## Query Parameters

None.

---

## Request Body Schema

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `serverUrl` | string | The server URL for the tenant | No |
| `realmName` | string | The authentication realm name | No |
| `settings` | object | Custom tenant settings | No |

---

## Request Body Example

```json
{
  "serverUrl": "string",
  "realmName": "string",
  "settings": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

**Update Server URL:**

```json
{
  "serverUrl": "https://new-instance.rezolve.ai"
}
```

**Update Settings:**

```json
{
  "settings": {
    "ssoEnabled": true,
    "mfaRequired": true,
    "sessionTimeout": 7200,
    "passwordPolicy": "strict"
  }
}
```

**Full Update:**

```json
{
  "serverUrl": "https://acme-prod.rezolve.ai",
  "realmName": "acme-production",
  "settings": {
    "ssoEnabled": true,
    "mfaRequired": true,
    "sessionTimeout": 3600
  }
}
```

---

## Example cURL

```bash
curl --request PATCH \
  --url '{{base_url}}/api/v1/admin/tenants/3fa85f64-5717-4562-b3fc-2c963f66afa6' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "serverUrl": "https://acme-prod.rezolve.ai",
    "settings": {
      "mfaRequired": true,
      "sessionTimeout": 3600
    }
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Tenant configuration updated successfully",
  "data": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Acme Corporation",
    "serverUrl": "https://acme-prod.rezolve.ai",
    "realmName": "acme-production",
    "settings": {
      "ssoEnabled": true,
      "mfaRequired": true,
      "sessionTimeout": 3600
    },
    "updatedAt": "2025-07-10T14:25:00.000Z",
    "updatedBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    }
  },
  "timestamp": "2025-07-10T14:25:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or invalid field values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to update this tenant |
| `404 Not Found` | Tenant not found | No tenant exists with the specified ID |
| `422 Unprocessable Entity` | Validation error | Invalid URL format or setting value |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

---

## Notes

1. **Self-Update:** Tenant admins can update their own tenant configuration.

2. **Partial Update:** Only fields included in the request are modified.

3. **Settings Merge:** The `settings` object is replaced entirely, not merged.

4. **Audit Trail:** All configuration changes are logged.

5. **Required Roles:** Requires `tenant_admin` role.
