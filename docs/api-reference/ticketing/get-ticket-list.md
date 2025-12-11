---
id: get-ticket-list
title: List Ticketing Users (Templates)
sidebar_label: Get User List API
displayed_sidebar: integrationSidebar
description: API documentation for retrieving ticket list
status:
whatsPending:
---

# Get User List

Retrieves a list of users associated with the ticketing module, filtered by type. This endpoint is commonly used to fetch user templates for ticket assignment, routing rules, or agent configurations within the ticketing system.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/user/list`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header and contains user identity, realm access roles, and team membership information.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | Yes |
| `issupportrequest` | Boolean flag indicating if this is a support-related request | No |
| `if-none-match` | ETag value for conditional requests (caching) | No |

---

## Path Parameters

None.

---

## Query Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `type` | string | Filter users by type. Accepted values: `template`, `agent`, `user` | Yes |
| `module` | string | The module context for the user list. Example: `ticketing` | Yes |

---

## Request Body Schema

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v2/ticketing/user/list?type=template&module=ticketing' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}' \
  --header 'realmname: {{realm_name}}' \
  --header 'issupportrequest: false'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": {
    "users": [
      {
        "id": "61d417ef-91fa-4717-bcb3-4810b9007dd0",
        "username": "john.doe@example.com",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "type": "template",
        "roles": ["ticket_agent", "ticket_admin"],
        "teams": ["it", "hr", "finance", "global"],
        "defaultTeam": "it",
        "status": "active",
        "createdAt": "2024-01-15T10:30:00.000Z",
        "updatedAt": "2025-02-10T14:22:00.000Z"
      },
      {
        "id": "72e528fg-82gb-5828-cdc4-5921ca118ee1",
        "username": "support.agent@example.com",
        "firstName": "Support",
        "lastName": "Agent",
        "email": "support.agent@example.com",
        "type": "template",
        "roles": ["ticket_agent"],
        "teams": ["it"],
        "defaultTeam": "it",
        "status": "active",
        "createdAt": "2024-03-20T08:15:00.000Z",
        "updatedAt": "2025-01-05T09:45:00.000Z"
      }
    ],
    "totalCount": 2,
    "module": "ticketing",
    "type": "template"
  },
  "timestamp": "2025-02-11T12:34:56.789Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid or missing query parameters | Occurs when `type` or `module` parameters are missing or contain invalid values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access this resource |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist |
| `304 Not Modified` | Conditional request matched | Returned when `if-none-match` ETag matches current resource |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired authentication token",
    "details": "The provided JWT token has expired. Please re-authenticate."
  },
  "timestamp": "2025-02-11T12:34:56.789Z"
}
```

---

## Notes

1. **Multi-Tenancy:** This API operates in a multi-tenant environment. The `x-tenantid` header is mandatory and must contain a valid UUID for the target tenant.

2. **Realm Configuration:** The `realmname` header corresponds to the authentication realm and must match the tenant's configured realm.

3. **Caching:** The API supports conditional requests via `ETag` / `if-none-match` headers. A `304 Not Modified` response indicates the cached version is still valid.

4. **Type Values:** The `type` query parameter accepts:
   - `template` — User templates for ticket routing/assignment
   - `agent` — Active ticketing agents
   - `user` — End users who can create tickets

5. **Module Values:** Supported modules include:
   - `ticketing` — Ticket management module
   - `chat` — Live chat module
   - `knowledge` — Knowledge base module

6. **JWT Token Claims:** The Bearer token contains user information including roles, team memberships, default team, and email address.

7. **Rate Limiting:** Standard API rate limits apply. Refer to platform documentation for specific thresholds.
