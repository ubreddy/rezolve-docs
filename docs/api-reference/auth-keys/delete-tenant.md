---
id: delete-tenant
title: Delete Tenant
sidebar_label: Delete Tenant
sidebar_position: 22
displayed_sidebar: integrationSidebar
description: API documentation for deleting a tenant
status:
whatsPending:
draft: true
---

# Delete Tenant

Delete a tenant. This endpoint permanently removes a tenant and all associated data. This action is irreversible and requires super admin privileges.

---

## Endpoint

**Method:** `DELETE`
**URL:** `{{base_url}}/api/v1/admin/tenants/{tenantId}`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header. Requires super admin permissions.

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
| `tenantId` | string (UUID) | The unique identifier of the tenant to delete | Yes |

---

## Query Parameters

None.

---

## Request Body Schema

Not applicable — this is a DELETE request with no request body.

---

## Example cURL

```bash
curl --request DELETE \
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
  "message": "Tenant deleted successfully",
  "data": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Acme Corporation",
    "status": "deleted",
    "deletedAt": "2025-07-10T14:30:00.000Z",
    "deletedBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "resourcesDeleted": {
      "users": 150,
      "credentials": 25,
      "apiKeys": 10,
      "oauthClients": 5
    }
  },
  "timestamp": "2025-07-10T14:30:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid tenant ID | The tenantId is not a valid UUID |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks super admin permission |
| `404 Not Found` | Tenant not found | No tenant exists with the specified ID |
| `409 Conflict` | Tenant has active resources | Cannot delete tenant with active subscriptions |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

---

## Notes

1. **Permanent Action:** Tenant deletion is permanent and cannot be undone.

2. **Data Deletion:** All associated data (users, credentials, API keys, etc.) is permanently deleted.

3. **Super Admin Only:** Only super admins can delete tenants.

4. **Audit Trail:** The deletion is logged for compliance purposes.

5. **Required Roles:** Requires `super_admin` role.
