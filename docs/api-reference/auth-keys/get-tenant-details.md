---
id: get-tenant-details
title: Get Tenant Details
sidebar_label: Get Tenant Details
sidebar_position: 20
displayed_sidebar: integrationSidebar
description: API documentation for retrieving tenant details by ID
status:
whatsPending:
---

# Get Tenant Details

Get tenant details by ID. This endpoint retrieves detailed information about a specific tenant. Tenant admins can view their own tenant information.

---

## Endpoint

**Method:** `GET`
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

Not applicable — this is a GET request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/admin/tenants/3fa85f64-5717-4562-b3fc-2c963f66afa6' \
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
  "message": "Tenant details retrieved successfully",
  "data": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Acme Corporation",
    "displayName": "Acme Corp",
    "serverUrl": "https://acme.rezolve.ai",
    "realmName": "acme-realm",
    "status": "active",
    "settings": {
      "ssoEnabled": true,
      "mfaRequired": false,
      "sessionTimeout": 3600,
      "passwordPolicy": "strong"
    },
    "subscription": {
      "plan": "enterprise",
      "usersLimit": 500,
      "expiresAt": "2026-07-10T00:00:00.000Z"
    },
    "createdAt": "2024-01-15T10:00:00.000Z",
    "updatedAt": "2025-07-10T14:00:00.000Z"
  },
  "timestamp": "2025-07-10T14:20:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid tenant ID | The tenantId is not a valid UUID |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view this tenant |
| `404 Not Found` | Tenant not found | No tenant exists with the specified ID |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

---

## Notes

1. **Self-Access:** Tenant admins can view their own tenant details.

2. **Cross-Tenant:** Super admins can view any tenant's details.

3. **Required Roles:** Requires `tenant_admin` or `super_admin` role.
