---
id: delete-credential
title: Delete Credential
sidebar_label: Delete Credential
sidebar_position: 17
displayed_sidebar: integrationSidebar
description: API documentation for deleting or revoking a credential
status:
whatsPending:
---

# Delete Credential

Delete/revoke a credential. This endpoint permanently removes a stored credential and immediately invalidates any integrations using it. The deletion cannot be undone.

---

## Endpoint

**Method:** `DELETE`
**URL:** `{{base_url}}/api/v1/credentials/{integrationId}/{credentialId}`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header. Requires appropriate permissions to delete credentials.

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
| `integrationId` | string | The unique identifier of the integration | Yes |
| `credentialId` | string (UUID) | The unique identifier of the credential to delete | Yes |

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
  --url '{{base_url}}/api/v1/credentials/servicenow-prod-001/cred-550e8400-e29b-41d4-a716-446655440001' \
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
  "message": "Credential deleted successfully",
  "data": {
    "id": "cred-550e8400-e29b-41d4-a716-446655440001",
    "integrationId": "servicenow-prod-001",
    "credentialName": "ServiceNow Production",
    "authType": "oauth2_bearer",
    "status": "deleted",
    "deletedAt": "2025-07-10T14:00:00.000Z",
    "deletedBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "integrationsAffected": 3
  },
  "timestamp": "2025-07-10T14:00:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid parameters | Invalid integrationId or credentialId format |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to delete credentials |
| `404 Not Found` | Credential not found | No credential exists with the specified IDs |
| `409 Conflict` | Credential already deleted | The credential has already been deleted |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response (Not Found):**

```json
{
  "success": false,
  "error": {
    "code": "CREDENTIAL_NOT_FOUND",
    "message": "Credential not found",
    "details": "No credential exists with ID: cred-550e8400-e29b-41d4-a716-446655440099 for integration: servicenow-prod-001"
  },
  "timestamp": "2025-07-10T14:00:00.000Z"
}
```

**Example Error Response (Already Deleted):**

```json
{
  "success": false,
  "error": {
    "code": "CREDENTIAL_ALREADY_DELETED",
    "message": "Credential has already been deleted",
    "details": "The credential was deleted on 2025-07-01T10:00:00.000Z by admin@rezolve.ai"
  },
  "timestamp": "2025-07-10T14:00:00.000Z"
}
```

---

## Notes

1. **Permanent Action:** Deletion is permanent and cannot be undone. A new credential must be created if access is needed again.

2. **Immediate Effect:** Deletion immediately invalidates any integrations using this credential.

3. **Impact Assessment:** The response includes `integrationsAffected` showing how many integrations were impacted.

4. **UUID Format:** The `credentialId` must be a valid UUID. Invalid formats will return a 400 error.

5. **Alternative: Deactivate First:** Consider deactivating the credential first (via PATCH with `status: inactive`) to test impact before permanent deletion.

6. **Audit Trail:** The deletion is logged with the user who performed the action and timestamp.

7. **Required Roles:** Typically requires `integration_admin` role to delete credentials.

8. **Related Endpoints:**
    - `POST /credentials` — Store new credentials
    - `GET /credentials/{integrationId}` — Get credential with decrypted data
    - `GET /credentials/{integrationId}/details` — Get credential metadata
    - `PATCH /credentials/{integrationId}/{credentialId}` — Update credential metadata (use to deactivate instead of delete)
