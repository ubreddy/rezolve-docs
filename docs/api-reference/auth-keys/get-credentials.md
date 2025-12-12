---
id: get-credentials
title: Get Credentials
sidebar_label: Get Credentials
sidebar_position: 14
displayed_sidebar: integrationSidebar
description: API documentation for retrieving credential with decrypted data
status:
whatsPending:
---

# Get Credentials

Get credential with decrypted data. This endpoint retrieves stored credentials for a specific integration, returning the decrypted authentication data for use in third-party integrations.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/credentials/{integrationId}`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header. Requires appropriate permissions to access credentials.

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
  --url '{{base_url}}/api/v1/credentials/servicenow-prod-001' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}'
```

**With Credential ID:**

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/credentials/servicenow-prod-001?credentialId=cred-550e8400-e29b-41d4-a716-446655440001' \
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
  "message": "Credentials retrieved successfully",
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
    "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4...",
    "metadata": {
      "environment": "production",
      "instanceUrl": "https://instance.service-now.com",
      "version": "tokyo"
    },
    "status": "active",
    "expiresAt": "2025-07-10T14:15:00.000Z",
    "createdAt": "2025-07-10T13:15:00.000Z",
    "createdBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "lastAccessedAt": "2025-07-10T13:45:00.000Z",
    "tenant": {
      "id": "{{tenant_id}}",
      "name": "{{tenant_name}}"
    }
  },
  "timestamp": "2025-07-10T13:50:00.000Z"
}
```

:::warning Security Notice
This endpoint returns decrypted sensitive data. Ensure proper access controls and audit logging are in place. Never log or expose the response in client-side applications.
:::

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid parameters | Invalid integrationId or credentialId format |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to access credentials |
| `404 Not Found` | Credential not found | No credential exists for the specified integration |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response (Not Found):**

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

**Example Error Response (Invalid Credential ID):**

```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "Invalid credentialId format",
    "details": "credentialId must be a valid UUID"
  },
  "timestamp": "2025-07-10T13:50:00.000Z"
}
```

---

## Notes

1. **Decrypted Data:** This endpoint returns decrypted credential data including access tokens and refresh tokens. Handle with care.

2. **Access Logging:** All access to credentials is logged for security auditing purposes.

3. **Multiple Credentials:** If multiple credentials exist for an integration, use the `credentialId` query parameter to retrieve a specific one.

4. **Token Expiration:** Check the `expiresAt` field to determine if tokens need to be refreshed.

5. **Last Accessed:** The `lastAccessedAt` field tracks when the credential was last retrieved.

6. **Status Check:** Verify the `status` field is `active` before using the credentials.

7. **Caching:** Avoid caching decrypted credentials. Retrieve them fresh when needed.

8. **Required Roles:** Typically requires `integration_admin` or specific integration access roles.

9. **Related Endpoints:**
    - `POST /credentials` — Store new credentials
    - `PATCH /credentials/{credentialId}` — Update credential
    - `DELETE /credentials/{credentialId}` — Delete credential
    - `POST /credentials/{credentialId}/rotate` — Rotate credential tokens
