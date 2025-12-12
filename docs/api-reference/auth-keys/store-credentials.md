---
id: store-credentials
title: Store Credentials
sidebar_label: Store Credentials
sidebar_position: 13
displayed_sidebar: integrationSidebar
description: API documentation for storing encrypted credentials for third-party integrations
status:
whatsPending:
---

# Store Credentials

Store encrypted credentials for third-party integrations. This endpoint securely saves authentication credentials in the credential vault, supporting 8 different authentication types for various integration scenarios.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v1/credentials`

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

None.

---

## Query Parameters

None.

---

## Request Body Schema

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `integrationId` | string | Unique identifier for the integration | Yes |
| `credentialName` | string | Human-readable name for the credential | Yes |
| `description` | string | Description of the credential's purpose | No |
| `expiresIn` | number | Token expiration time in seconds | No |
| `scopes` | array | List of permission scopes for the credential | No |
| `tokenEndpoint` | string | OAuth token endpoint URL | No |
| `authorizationEndpoint` | string | OAuth authorization endpoint URL | No |
| `metadata` | object | Additional custom properties for the credential | No |
| `authType` | string | Authentication type (see supported types below) | Yes |
| `accessToken` | string | The access token to store | No |
| `refreshToken` | string | The refresh token to store | No |

---

## Supported Auth Types

| Auth Type | Description | Use Case |
|-----------|-------------|----------|
| `oauth2_bearer` | OAuth 2.0 Bearer Token | Standard OAuth 2.0 integrations |
| `oauth2_client_credentials` | OAuth 2.0 Client Credentials | Machine-to-machine authentication |
| `api_key` | API Key authentication | Simple API key-based integrations |
| `basic_auth` | Basic Authentication | Username/password authentication |
| `bearer_token` | Simple Bearer Token | Token-based authentication |
| `jwt` | JSON Web Token | JWT-based authentication |
| `saml` | SAML Token | Enterprise SSO integrations |
| `custom` | Custom authentication | Custom authentication schemes |

---

## Request Body Example

```json
{
  "integrationId": "string",
  "credentialName": "string",
  "description": "string",
  "expiresIn": 1,
  "scopes": [
    "string"
  ],
  "tokenEndpoint": "string",
  "authorizationEndpoint": "string",
  "metadata": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  },
  "authType": "oauth2_bearer",
  "accessToken": "string",
  "refreshToken": "string"
}
```

**OAuth 2.0 Bearer Token Example:**

```json
{
  "integrationId": "servicenow-prod-001",
  "credentialName": "ServiceNow Production",
  "description": "OAuth credentials for ServiceNow ITSM production instance",
  "expiresIn": 3600,
  "scopes": [
    "read",
    "write",
    "admin"
  ],
  "tokenEndpoint": "https://instance.service-now.com/oauth_token.do",
  "authorizationEndpoint": "https://instance.service-now.com/oauth_auth.do",
  "metadata": {
    "environment": "production",
    "instanceUrl": "https://instance.service-now.com",
    "version": "tokyo"
  },
  "authType": "oauth2_bearer",
  "accessToken": "{{access_token}}",
  "refreshToken": "{{refresh_token}}"
}
```

**API Key Example:**

```json
{
  "integrationId": "slack-workspace-001",
  "credentialName": "Slack Bot API Key",
  "description": "API key for Slack workspace integration",
  "metadata": {
    "workspace": "rezolve-workspace",
    "botName": "IT Support Bot"
  },
  "authType": "api_key",
  "accessToken": "{{api_key}}"
}
```

**Basic Auth Example:**

```json
{
  "integrationId": "jira-cloud-001",
  "credentialName": "Jira Cloud Credentials",
  "description": "Basic auth credentials for Jira Cloud",
  "metadata": {
    "baseUrl": "https://company.atlassian.net",
    "username": "api-user@company.com"
  },
  "authType": "basic_auth",
  "accessToken": "{{base64_encoded_credentials}}"
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v1/credentials' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "integrationId": "servicenow-prod-001",
    "credentialName": "ServiceNow Production",
    "description": "OAuth credentials for ServiceNow ITSM production instance",
    "expiresIn": 3600,
    "scopes": [
      "read",
      "write"
    ],
    "tokenEndpoint": "https://instance.service-now.com/oauth_token.do",
    "authorizationEndpoint": "https://instance.service-now.com/oauth_auth.do",
    "metadata": {
      "environment": "production"
    },
    "authType": "oauth2_bearer",
    "accessToken": "{{oauth_access_token}}",
    "refreshToken": "{{oauth_refresh_token}}"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Credentials stored successfully",
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
    "status": "active",
    "expiresAt": "2025-07-10T14:15:00.000Z",
    "metadata": {
      "environment": "production"
    },
    "createdAt": "2025-07-10T13:15:00.000Z",
    "createdBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "tenant": {
      "id": "{{tenant_id}}",
      "name": "{{tenant_name}}"
    }
  },
  "timestamp": "2025-07-10T13:15:00.000Z"
}
```

:::warning Important
Sensitive credential data (accessToken, refreshToken, secrets) is encrypted at rest and never returned in API responses after initial storage.
:::

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Missing required fields or invalid format |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to store credentials |
| `409 Conflict` | Duplicate credential | Credential with this integrationId already exists |
| `422 Unprocessable Entity` | Validation error | Invalid auth type, endpoint URL, or scope |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request body",
    "details": {
      "authType": "Invalid auth type: 'custom_oauth'. Allowed: oauth2_bearer, oauth2_client_credentials, api_key, basic_auth, bearer_token, jwt, saml, custom",
      "tokenEndpoint": "Invalid URL format"
    }
  },
  "timestamp": "2025-07-10T13:15:00.000Z"
}
```

---

## Notes

1. **Encryption:** All sensitive credential data (tokens, secrets, passwords) is encrypted using AES-256 encryption before storage.

2. **Token Refresh:** For OAuth 2.0 credentials with refresh tokens, the system can automatically refresh expired access tokens.

3. **Expiration Handling:** Set `expiresIn` to configure automatic expiration. Expired credentials are flagged but not deleted.

4. **Metadata Usage:** Use the `metadata` field to store integration-specific configuration like instance URLs, environment info, or version details.

5. **Scopes:** Define scopes to document the permissions associated with the stored credentials.

6. **Integration ID:** Use a consistent naming convention for `integrationId` (e.g., `{system}-{environment}-{sequence}`).

7. **Credential Rotation:** Update credentials using the PATCH endpoint before expiration to maintain integration continuity.

8. **Audit Trail:** All credential operations are logged for security auditing purposes.

9. **Access Control:** Credentials are tenant-isolated and require appropriate roles to access or modify.

10. **Related Endpoints:**
    - `GET /credentials` — List all stored credentials
    - `GET /credentials/{credentialId}` — Get credential details (metadata only)
    - `PATCH /credentials/{credentialId}` — Update credential
    - `DELETE /credentials/{credentialId}` — Delete credential
    - `POST /credentials/{credentialId}/rotate` — Rotate credential tokens
