---
id: revoke-delete-api-key
title: Revoke/Delete API Key
sidebar_label: Revoke/Delete API Key
sidebar_position: 6
displayed_sidebar: integrationSidebar
description: API documentation for revoking and deleting API keys
status:
whatsPending:
---

# Revoke/Delete API Key

Revokes and deletes an API key by its unique identifier. Once revoked, the API key immediately becomes invalid and cannot be used for authentication. This action is permanent and cannot be undone.

---

## Endpoint

**Method:** `DELETE`
**URL:** `{{base_url}}/api/v1/api-keys/{keyId}`

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
| `keyId` | string (UUID) | The unique identifier of the API key to revoke/delete | Yes |

---

## Query Parameters

None.

---

## Request Body Schema

Not applicable — this is a `DELETE` request with no request body.

---

## Example cURL

```bash
curl --request DELETE \
  --url '{{base_url}}/api/v1/api-keys/{{key_id}}' \
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
  "message": "API key revoked and deleted successfully",
  "data": {
    "id": "{{key_id}}",
    "name": "Production Integration Key",
    "prefix": "ak_live_xxxx",
    "status": "revoked",
    "revokedAt": "2025-07-10T13:05:00.000Z",
    "revokedBy": {
      "id": "{{user_id}}",
      "name": "{{user_name}}",
      "email": "{{user_email}}"
    },
    "deleted": true
  },
  "timestamp": "2025-07-10T13:05:00.000Z"
}
```

---

## Alternative Success Response (Soft Delete)

Some implementations may perform a soft delete, marking the key as revoked but retaining the record:

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "API key revoked successfully",
  "data": {
    "id": "{{key_id}}",
    "name": "Production Integration Key",
    "prefix": "ak_live_xxxx",
    "previousStatus": "active",
    "status": "revoked",
    "revokedAt": "2025-07-10T13:05:00.000Z",
    "revokedBy": {
      "id": "{{user_id}}",
      "name": "{{user_name}}",
      "email": "{{user_email}}"
    },
    "retentionDays": 90,
    "permanentDeletionDate": "2025-10-08T13:05:00.000Z"
  },
  "timestamp": "2025-07-10T13:05:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid key ID format | The keyId is not a valid UUID |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to delete API keys |
| `404 Not Found` | API key not found | No API key exists with the specified ID |
| `409 Conflict` | Key already revoked | The API key has already been revoked |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response (Not Found):**

```json
{
  "success": false,
  "error": {
    "code": "API_KEY_NOT_FOUND",
    "message": "API key not found",
    "details": "No API key exists with ID: {{key_id}}"
  },
  "timestamp": "2025-07-10T13:05:00.000Z"
}
```

**Example Error Response (Already Revoked):**

```json
{
  "success": false,
  "error": {
    "code": "API_KEY_ALREADY_REVOKED",
    "message": "API key has already been revoked",
    "details": "The API key was revoked on 2025-07-01T10:00:00.000Z"
  },
  "timestamp": "2025-07-10T13:05:00.000Z"
}
```

---

## Notes

1. **Immediate Effect:** Once an API key is revoked, it immediately becomes invalid. Any in-flight requests using the key may fail.

2. **Permanent Action:** Revocation/deletion is permanent and cannot be undone. A new API key must be created if access is needed again.

3. **UUID Format:** The `keyId` must be a valid UUID. Invalid formats will return a 400 error.

4. **Soft vs Hard Delete:** Depending on configuration:
   - **Hard delete:** Key record is permanently removed
   - **Soft delete:** Key is marked as revoked but retained for audit purposes (with a retention period)

5. **Audit Trail:** The revocation is logged with the user who performed the action and timestamp for compliance and security auditing.

6. **Active Integrations:** Before revoking a key, ensure no active integrations depend on it. Revoking a key used by production systems will cause authentication failures.

7. **Best Practice:** Consider rotating keys instead of deleting them when possible, using `POST /api-keys/{keyId}/rotate`.

8. **Required Roles:** Typically requires `tenant_admin` or `api_admin` role to revoke/delete API keys.

9. **Notifications:** Depending on tenant configuration, notifications may be sent to key owners or admins when a key is revoked.

10. **Related Endpoints:**
    - `GET /api-keys` — List all API keys
    - `GET /api-keys/{keyId}` — Get API key details
    - `POST /api-keys` — Create new API key
    - `PUT /api-keys/{keyId}` — Update API key
    - `POST /api-keys/{keyId}/rotate` — Rotate API key (safer alternative)
    - `POST /api-key/validate` — Validate an API key
