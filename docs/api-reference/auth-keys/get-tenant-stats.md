---
id: get-tenant-stats
title: Get Tenant Statistics
sidebar_label: Get Tenant Statistics
sidebar_position: 24
displayed_sidebar: integrationSidebar
description: API documentation for retrieving tenant statistics
status:
whatsPending:
draft: true
---

# Get Tenant Statistics

Get tenant statistics. This endpoint retrieves usage statistics and metrics for a specific tenant. Tenant admins can view their own tenant's statistics.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/admin/tenants/{tenantId}/stats`

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
  --url '{{base_url}}/api/v1/admin/tenants/3fa85f64-5717-4562-b3fc-2c963f66afa6/stats' \
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
  "message": "Tenant statistics retrieved successfully",
  "data": {
    "tenantId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "tenantName": "Acme Corporation",
    "users": {
      "total": 150,
      "active": 142,
      "inactive": 8,
      "admins": 5
    },
    "credentials": {
      "total": 25,
      "active": 23,
      "expired": 2
    },
    "apiKeys": {
      "total": 10,
      "active": 9,
      "revoked": 1
    },
    "oauthClients": {
      "total": 5,
      "active": 5
    },
    "usage": {
      "apiCallsThisMonth": 125000,
      "apiCallsLastMonth": 118000,
      "storageUsedMB": 2500,
      "storageQuotaMB": 10000
    },
    "lastActivity": "2025-07-10T14:30:00.000Z",
    "generatedAt": "2025-07-10T14:40:00.000Z"
  },
  "timestamp": "2025-07-10T14:40:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid tenant ID | The tenantId is not a valid UUID |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view this tenant's stats |
| `404 Not Found` | Tenant not found | No tenant exists with the specified ID |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

---

## Notes

1. **Self-Access:** Tenant admins can view their own tenant statistics.

2. **Real-Time:** Statistics are generated in real-time and reflect current state.

3. **Usage Tracking:** API call counts and storage usage help monitor resource consumption.

4. **Required Roles:** Requires `tenant_admin` or `super_admin` role.
