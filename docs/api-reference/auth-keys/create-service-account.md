---
id: create-service-account
title: Create Service Account
sidebar_label: Create Service Account
sidebar_position: 25
displayed_sidebar: integrationSidebar
description: API documentation for creating a service account
status:
whatsPending:
---

# Create Service Account

Create a service account. This endpoint creates a new service account for machine-to-machine authentication and automated integrations.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v1/admin/service-account/create`

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

Not applicable — no request body required.

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v1/admin/service-account/create' \
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
  "message": "Service account created successfully",
  "data": {
    "id": "sa-550e8400-e29b-41d4-a716-446655440001",
    "name": "service-account-20250710143500",
    "clientId": "sa_client_7f3d8a2b1c4e",
    "clientSecret": "sa_secret_9k2m5n8p1q4r7t0w3x6y",
    "type": "service_account",
    "status": "active",
    "permissions": [
      "api:read",
      "api:write"
    ],
    "createdAt": "2025-07-10T14:35:00.000Z",
    "createdBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "tenant": {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "Acme Corporation"
    }
  },
  "timestamp": "2025-07-10T14:35:00.000Z"
}
```

:::warning Important
The `clientSecret` is only returned once during creation. Store it securely as it cannot be retrieved again.
:::

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to create service accounts |
| `409 Conflict` | Limit reached | Maximum number of service accounts reached |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

---

## Notes

1. **Secret Security:** The client secret is only shown once. Store it securely.

2. **Machine-to-Machine:** Service accounts are designed for automated integrations without user interaction.

3. **Permissions:** Default permissions are assigned; modify via separate endpoint if needed.

4. **Naming:** A unique name is auto-generated based on timestamp.

5. **Required Roles:** Requires `tenant_admin` or `super_admin` role.
