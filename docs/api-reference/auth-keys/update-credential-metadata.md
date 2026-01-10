---
id: update-credential-metadata
title: Update Credential Metadata
sidebar_label: Update Credential Metadata
sidebar_position: 16
displayed_sidebar: integrationSidebar
description: API documentation for updating credential metadata without modifying the credentials themselves
status:
whatsPending:
---

# Update Credential Metadata

Update credential metadata (not the credentials themselves). This endpoint allows partial updates to credential information such as name, description, scopes, and status without modifying the actual authentication tokens.

---

## Endpoint

**Method:** `PATCH`
**URL:** `{{base_url}}/api/v1/credentials/{integrationId}/{credentialId}`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header. Requires appropriate permissions to manage credentials.

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
| `integrationId` | string | The unique identifier of the integration | Yes |
| `credentialId` | string (UUID) | The unique identifier of the credential | Yes |

---

## Query Parameters

None.

---

## Request Body Schema

All fields are optional — only include fields you want to update.

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `credentialName` | string | Human-readable name for the credential | No |
| `description` | string | Description of the credential's purpose | No |
| `scopes` | array | List of permission scopes (replaces existing) | No |
| `metadata` | object | Additional custom properties (replaces existing) | No |
| `status` | string | Credential status: `active` or `inactive` | No |

---

## Request Body Example

```json
{
  "credentialName": "string",
  "description": "string",
  "scopes": [
    "string"
  ],
  "metadata": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  },
  "status": "active"
}
```

**Update Name and Description:**

```json
{
  "credentialName": "ServiceNow Production v2",
  "description": "Updated OAuth credentials for ServiceNow ITSM - migrated instance"
}
```

**Update Scopes:**

```json
{
  "scopes": [
    "read",
    "write",
    "admin",
    "reports"
  ]
}
```

**Update Metadata:**

```json
{
  "metadata": {
    "environment": "production",
    "instanceUrl": "https://new-instance.service-now.com",
    "version": "utah",
    "migrationDate": "2025-07-10"
  }
}
```

**Deactivate Credential:**

```json
{
  "status": "inactive"
}
```

---

## Example cURL

```bash
curl --request PATCH \
  --url '{{base_url}}/api/v1/credentials/servicenow-prod-001/cred-550e8400-e29b-41d4-a716-446655440001' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "credentialName": "ServiceNow Production v2",
    "description": "Updated OAuth credentials for ServiceNow ITSM",
    "scopes": [
      "read",
      "write",
      "admin"
    ],
    "metadata": {
      "environment": "production",
      "version": "utah"
    },
    "status": "active"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Credential metadata updated successfully",
  "data": {
    "id": "cred-550e8400-e29b-41d4-a716-446655440001",
    "integrationId": "servicenow-prod-001",
    "credentialName": "ServiceNow Production v2",
    "description": "Updated OAuth credentials for ServiceNow ITSM",
    "authType": "oauth2_bearer",
    "scopes": [
      "read",
      "write",
      "admin"
    ],
    "metadata": {
      "environment": "production",
      "version": "utah"
    },
    "status": "active",
    "expiresAt": "2025-07-10T14:15:00.000Z",
    "updatedAt": "2025-07-10T13:55:00.000Z",
    "updatedBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "changes": {
      "credentialName": {
        "from": "ServiceNow Production",
        "to": "ServiceNow Production v2"
      },
      "scopes": {
        "added": ["admin"],
        "removed": []
      }
    }
  },
  "timestamp": "2025-07-10T13:55:00.000Z"
}
```

:::tip Metadata Only
This endpoint updates metadata only. To update the actual credentials (tokens, secrets), use the credential rotation endpoint or store new credentials.
:::

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or invalid field values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to update credentials |
| `404 Not Found` | Credential not found | No credential exists with the specified IDs |
| `422 Unprocessable Entity` | Validation error | Invalid status value or scope format |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body",
    "details": {
      "status": "Invalid status value: 'disabled'. Allowed: active, inactive"
    }
  },
  "timestamp": "2025-07-10T13:55:00.000Z"
}
```

---

## Notes

1. **Metadata Only:** This endpoint updates credential metadata. It does not modify the actual authentication tokens (accessToken, refreshToken).

2. **Partial Update:** Only fields included in the request body are modified. Omitted fields retain their current values.

3. **Array Replacement:** Array fields (`scopes`) and object fields (`metadata`) are replaced entirely, not merged.

4. **Status Changes:** Setting `status` to `inactive` prevents the credential from being used without deleting it.

5. **Token Update:** To update actual tokens, use `POST /credentials/{credentialId}/rotate` or store new credentials.

6. **Audit Trail:** All changes are logged with the user who made the change and timestamp.

7. **Change Tracking:** The response includes a `changes` object showing what was modified.

8. **Required Roles:** Typically requires `integration_admin` role to update credential metadata.

9. **Related Endpoints:**
    - `GET /credentials/{integrationId}` — Get credential with decrypted data
    - `GET /credentials/{integrationId}/details` — Get credential metadata
    - `POST /credentials` — Store new credentials
    - `DELETE /credentials/{credentialId}` — Delete credential
    - `POST /credentials/{credentialId}/rotate` — Rotate credential tokens
