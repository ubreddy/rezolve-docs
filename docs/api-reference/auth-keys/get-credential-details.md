---
id: get-credential-details
title: Get Credential Details
sidebar_label: Get Credential Details
sidebar_position: 15
displayed_sidebar: integrationSidebar
description: API documentation for retrieving credential metadata without decrypted data
status:
whatsPending:
---

# Get Credential Details

Get credential metadata (without decrypted data). This endpoint retrieves stored credential information for a specific integration without exposing sensitive authentication tokens, making it safe for display in management interfaces.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/credentials/{integrationId}/details`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header. Requires appropriate permissions to view credentials.

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

---

## Query Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `credentialId` | string (UUID) | Credential ID (optional) - use to retrieve a specific credential when multiple exist for an integration | No |

---

## Request Body Schema

Not applicable — this is a GET request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/credentials/servicenow-prod-001/details' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}'
```

**With Credential ID:**

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/credentials/servicenow-prod-001/details?credentialId=cred-550e8400-e29b-41d4-a716-446655440001' \
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
  "message": "Credential details retrieved successfully",
  "data": {
    "id": "cred-550e8400-e29b-41d4-a716-446655440001",
    "integrationId": "servicenow-prod-001",
    "credentialName": "ServiceNow Production",
    "description": "OAuth credentials for ServiceNow ITSM production instance",
    "authType": "oauth2_bearer",
    "scopes": [
      "read",
      "write"
    ],
    "tokenEndpoint": "https://instance.service-now.com/oauth_token.do",
    "authorizationEndpoint": "https://instance.service-now.com/oauth_auth.do",
    "metadata": {
      "environment": "production",
      "instanceUrl": "https://instance.service-now.com",
      "version": "tokyo"
    },
    "status": "active",
    "expiresAt": "2025-07-10T14:15:00.000Z",
    "isExpired": false,
    "createdAt": "2025-07-10T13:15:00.000Z",
    "createdBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "updatedAt": "2025-07-10T13:30:00.000Z",
    "updatedBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "lastAccessedAt": "2025-07-10T13:45:00.000Z",
    "accessCount": 47,
    "tenant": {
      "id": "{{tenant_id}}",
      "name": "{{tenant_name}}"
    }
  },
  "timestamp": "2025-07-10T13:50:00.000Z"
}
```

:::tip Safe for Display
This endpoint does not return sensitive data (accessToken, refreshToken, secrets), making it safe for use in admin dashboards and management interfaces.
:::

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid parameters | Invalid integrationId or credentialId format |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view credentials |
| `404 Not Found` | Credential not found | No credential exists for the specified integration |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "CREDENTIAL_NOT_FOUND",
    "message": "Credential not found",
    "details": "No credential exists for integration ID: servicenow-prod-999"
  },
  "timestamp": "2025-07-10T13:50:00.000Z"
}
```

---

## Notes

1. **No Sensitive Data:** Unlike `GET /credentials/{integrationId}`, this endpoint does not return decrypted tokens or secrets.

2. **Safe for UI:** Use this endpoint for displaying credential information in management dashboards and admin interfaces.

3. **Expiration Check:** The `isExpired` boolean field indicates whether the credential has expired.

4. **Access Metrics:** The `accessCount` and `lastAccessedAt` fields provide usage statistics.

5. **Multiple Credentials:** If multiple credentials exist for an integration, use the `credentialId` query parameter to retrieve a specific one.

6. **Status Values:** The `status` field can be `active`, `inactive`, `expired`, or `revoked`.

7. **Audit Information:** Includes `createdBy`, `updatedBy`, and timestamp fields for audit purposes.

8. **Required Roles:** Requires `integration_viewer` or higher role to access credential details.

9. **Related Endpoints:**
    - `GET /credentials/{integrationId}` — Get credential with decrypted data
    - `POST /credentials` — Store new credentials
    - `PATCH /credentials/{credentialId}` — Update credential
    - `DELETE /credentials/{credentialId}` — Delete credential
