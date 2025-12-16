---
id: rotate-dek
title: Rotate DEK
sidebar_label: Rotate DEK
sidebar_position: 23
displayed_sidebar: integrationSidebar
description: API documentation for triggering DEK (Data Encryption Key) rotation for a tenant
status:
whatsPending:
draft: true
---

# Rotate DEK

Trigger DEK rotation for tenant. This endpoint initiates a Data Encryption Key (DEK) rotation process, re-encrypting all sensitive data with a new encryption key for enhanced security.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v1/admin/dek/rotate`

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
| `tenantId` | string (UUID) | The unique identifier of the tenant | Yes |

---

## Request Body Example

```json
{
  "tenantId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v1/admin/dek/rotate' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "tenantId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "DEK rotation initiated successfully",
  "data": {
    "rotationId": "rot-550e8400-e29b-41d4-a716-446655440001",
    "tenantId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "status": "in_progress",
    "previousKeyId": "dek-old-key-12345",
    "newKeyId": "dek-new-key-67890",
    "startedAt": "2025-07-10T14:35:00.000Z",
    "estimatedCompletion": "2025-07-10T14:45:00.000Z",
    "itemsToRotate": {
      "credentials": 25,
      "apiKeys": 10,
      "secrets": 50
    },
    "initiatedBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    }
  },
  "timestamp": "2025-07-10T14:35:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Missing or invalid tenantId |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission for DEK rotation |
| `404 Not Found` | Tenant not found | No tenant exists with the specified ID |
| `409 Conflict` | Rotation in progress | A DEK rotation is already in progress |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

---

## Notes

1. **Security Operation:** DEK rotation is a critical security operation that re-encrypts all sensitive data.

2. **Background Process:** Rotation runs as a background job; use the rotation ID to check status.

3. **No Downtime:** Rotation is designed to complete without service interruption.

4. **Compliance:** Regular DEK rotation is recommended for compliance with security standards.

5. **Required Roles:** Requires `security_admin` or `super_admin` role.

6. **Rate Limited:** Only one rotation can be in progress per tenant at a time.
