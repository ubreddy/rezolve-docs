---
id: get-audit-logs
title: Get Audit Logs
sidebar_label: Get Audit Logs
sidebar_position: 19
displayed_sidebar: integrationSidebar
description: API documentation for retrieving paginated audit logs
status:
whatsPending:
draft: true
---

# Get Audit Logs

Get audit logs (paginated). This endpoint retrieves a paginated list of audit logs for tracking administrative actions, security events, and system changes across the platform.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/admin/audit-logs`

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
| `tenantId` | string (UUID) | Filter by tenant ID | - | No |
| `limit` | integer | Number of items to return | 50 | No |
| `offset` | integer | Number of items to skip | 0 | No |

---

## Request Body Schema

Not applicable — this is a GET request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/admin/audit-logs?limit=50&offset=0' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}'
```

**With Tenant Filter:**

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/admin/audit-logs?tenantId=3fa85f64-5717-4562-b3fc-2c963f66afa6&limit=100&offset=0' \
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
  "message": "Audit logs retrieved successfully",
  "data": {
    "logs": [
      {
        "id": "log-550e8400-e29b-41d4-a716-446655440001",
        "action": "USER_LOGIN",
        "category": "authentication",
        "actor": {
          "id": "1876278a-3634-4833-b73e-1536d806e117",
          "name": "Deepak purohit",
          "email": "deepak.purohit@rezolve.ai",
          "ipAddress": "192.168.1.100"
        },
        "resource": {
          "type": "user",
          "id": "1876278a-3634-4833-b73e-1536d806e117"
        },
        "details": {
          "method": "SSO",
          "provider": "Azure AD"
        },
        "status": "success",
        "tenantId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "timestamp": "2025-07-10T14:10:00.000Z"
      },
      {
        "id": "log-550e8400-e29b-41d4-a716-446655440002",
        "action": "CREDENTIAL_CREATED",
        "category": "credentials",
        "actor": {
          "id": "1876278a-3634-4833-b73e-1536d806e117",
          "name": "Deepak purohit",
          "email": "deepak.purohit@rezolve.ai",
          "ipAddress": "192.168.1.100"
        },
        "resource": {
          "type": "credential",
          "id": "cred-550e8400-e29b-41d4-a716-446655440001",
          "name": "ServiceNow Production"
        },
        "details": {
          "integrationId": "servicenow-prod-001",
          "authType": "oauth2_bearer"
        },
        "status": "success",
        "tenantId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "timestamp": "2025-07-10T14:05:00.000Z"
      }
    ],
    "pagination": {
      "total": 1250,
      "limit": 50,
      "offset": 0,
      "hasMore": true
    }
  },
  "timestamp": "2025-07-10T14:15:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid parameters | Invalid tenantId format or pagination values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view audit logs |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

---

## Notes

1. **Pagination:** Use `limit` and `offset` for paginating through large result sets.

2. **Tenant Filtering:** Super admins can filter by `tenantId`; tenant admins see only their tenant's logs.

3. **Retention:** Audit logs are retained according to the configured retention policy.

4. **Action Types:** Common actions include USER_LOGIN, USER_LOGOUT, CREDENTIAL_CREATED, CREDENTIAL_DELETED, API_KEY_ROTATED, etc.

5. **Required Roles:** Requires `audit_viewer` or `tenant_admin` role.
