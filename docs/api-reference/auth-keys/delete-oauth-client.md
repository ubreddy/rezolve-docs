---
id: delete-oauth-client
title: Delete OAuth Client
sidebar_label: Delete OAuth Client
sidebar_position: 12
displayed_sidebar: integrationSidebar
description: API documentation for deleting an OAuth client and revoking all associated tokens
status:
whatsPending:
---

# Delete OAuth Client

Deletes an OAuth client by its unique identifier. Once deleted, the OAuth client is permanently removed and all associated tokens are immediately invalidated. Any applications using this client for authentication will lose access.

---

## Endpoint

**Method:** `DELETE`
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
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | No |

---

## Path Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `clientId` | string (UUID) | The unique identifier of the OAuth client to delete | Yes |

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
  --url '{{base_url}}/api/v1/oauth-clients/client-550e8400-e29b-41d4-a716-446655440001' \
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
  "message": "OAuth client deleted successfully",
  "data": {
    "id": "client-550e8400-e29b-41d4-a716-446655440001",
    "name": "ServiceNow Integration",
    "clientId": "sn_integration_7f3d8a2b1c4e",
    "status": "deleted",
    "deletedAt": "2025-07-10T13:35:00.000Z",
    "deletedBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "tokensRevoked": 245,
    "activeSessionsTerminated": 12
  },
  "timestamp": "2025-07-10T13:35:00.000Z"
}
```

---

## Alternative Response (Soft Delete)

Some implementations may perform a soft delete:

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "OAuth client deleted successfully",
  "data": {
    "id": "client-550e8400-e29b-41d4-a716-446655440001",
    "name": "ServiceNow Integration",
    "clientId": "sn_integration_7f3d8a2b1c4e",
    "previousStatus": "active",
    "status": "deleted",
    "deletedAt": "2025-07-10T13:35:00.000Z",
    "deletedBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "retentionDays": 30,
    "permanentDeletionDate": "2025-08-09T13:35:00.000Z",
    "tokensRevoked": 245
  },
  "timestamp": "2025-07-10T13:35:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid client ID format | The clientId is not a valid UUID |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to delete OAuth clients |
| `404 Not Found` | OAuth client not found | No OAuth client exists with the specified ID |
| `409 Conflict` | Client already deleted | The OAuth client has already been deleted |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response (Not Found):**

```json
{
  "success": false,
  "error": {
    "code": "OAUTH_CLIENT_NOT_FOUND",
    "message": "OAuth client not found",
    "details": "No OAuth client exists with ID: client-550e8400-e29b-41d4-a716-446655440099"
  },
  "timestamp": "2025-07-10T13:35:00.000Z"
}
```

**Example Error Response (Already Deleted):**

```json
{
  "success": false,
  "error": {
    "code": "OAUTH_CLIENT_ALREADY_DELETED",
    "message": "OAuth client has already been deleted",
    "details": "The OAuth client was deleted on 2025-07-01T10:00:00.000Z by admin@rezolve.ai"
  },
  "timestamp": "2025-07-10T13:35:00.000Z"
}
```

---

## Notes

1. **Immediate Effect:** Deletion immediately invalidates:
   - All access tokens issued to this client
   - All refresh tokens issued to this client
   - All active authorization sessions

2. **Permanent Action:** Deletion is permanent and cannot be undone. A new OAuth client must be created if access is needed again.

3. **UUID Format:** The `clientId` must be a valid UUID. Invalid formats will return a 400 error.

4. **Token Revocation:** The response includes `tokensRevoked` indicating how many tokens were invalidated.

5. **Soft vs Hard Delete:** Depending on configuration:
   - **Hard delete:** Client record is permanently removed
   - **Soft delete:** Client is marked as deleted but retained for audit purposes

6. **Impact Assessment:** Before deleting, consider:
   - Which applications depend on this client
   - Active user sessions that will be terminated
   - Integration workflows that will break

7. **Audit Trail:** The deletion is logged with the user who performed the action and timestamp.

8. **Alternative: Disable First:** Consider disabling the client first (via PATCH with `status: inactive`) to test impact before permanent deletion.

9. **Required Roles:** Typically requires `tenant_admin` or `oauth_admin` role to delete OAuth clients.

10. **Notifications:** Depending on tenant configuration, notifications may be sent to client owners or admins when a client is deleted.

11. **Related Endpoints:**
    - `GET /oauth-clients` — List all OAuth clients
    - `GET /oauth-clients/{clientId}` — Get OAuth client details
    - `POST /oauth-clients` — Create new OAuth client
    - `PATCH /oauth-clients/{clientId}` — Update OAuth client (use to disable instead of delete)
    - `POST /oauth-clients/{clientId}/rotate-secret` — Rotate client secret
