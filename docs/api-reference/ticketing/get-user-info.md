---
id: get-user-info
title: Get User Info
sidebar_label: Get User Info
sidebar_position: 14
displayed_sidebar: integrationSidebar
description: API documentation for retrieving authenticated user information in ticketing context
status:
whatsPending:
---

# Get User Info

Retrieves detailed information about the currently authenticated user within the ticketing module context. This endpoint returns the user's profile data, roles, team memberships, permissions, and ticketing-specific capabilities. It is typically called during application initialization to configure the UI based on user permissions.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/user/userinfo`

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
| `type` | string | Filter by type. Accepted values: `template`, `agent`, `user` | Yes |
| `module` | string | The module context. Example: `ticketing` | Yes |

---

## Request Body Schema

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v2/ticketing/user/userinfo?type=template&module=ticketing' \
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
  "message": "User info retrieved successfully",
  "data": {
    "id": "1876278a-3634-4833-b73e-1536d806e117",
    "sub": "1876278a-3634-4833-b73e-1536d806e117",
    "username": "deepak.purohit@rezolve.ai",
    "email": "deepak.purohit@rezolve.ai",
    "emailVerified": false,
    "name": "Deepak purohit",
    "givenName": "Deepak",
    "familyName": "purohit",
    "preferredUsername": "deepak.purohit@rezolve.ai",
    "avatar": null,
    "locale": "en",
    "teams": ["operation", "global"],
    "defaultTeam": "operation",
    "roles": {
      "realm": [
        "content_author",
        "Bot Analyst",
        "Ticket Agent Supervisor",
        "asc_admin",
        "expert",
        "Beta User",
        "ticket_admin",
        "ticket_agent",
        "aidochub",
        "support_user",
        "Support User",
        "program_admin",
        "Bot Admin",
        "Ticket Agent",
        "ticket_user",
        "botstudio_user",
        "user_admin",
        "Approval Admin",
        "tenant_admin",
        "offline_access",
        "Approver",
        "uma_authorization",
        "Ticket Admin",
        "Requestor",
        "bot_admin",
        "approver",
        "User Admin",
        "ASC Admin",
        "chat_agent",
        "chat_agent_admin",
        "Support Supervisor",
        "content_reviewer",
        "BotStudio User",
        "beta_user",
        "bot_user",
        "support_supervisor",
        "Tenant Admin",
        "Approval Supervisor",
        "requestor",
        "Ticket User",
        "bpm_admin",
        "approval_supervisor",
        "approval_admin",
        "Bot User",
        "bot_analyst",
        "coach",
        "ticket_agent_supervisor"
      ],
      "resource": {
        "account": [
          "manage-account",
          "manage-account-links",
          "view-profile"
        ]
      }
    },
    "permissions": {
      "ticketing": {
        "canCreateTicket": true,
        "canViewAllTickets": true,
        "canEditTicket": true,
        "canDeleteTicket": true,
        "canAssignTicket": true,
        "canReassignTicket": true,
        "canMergeTickets": true,
        "canExportTickets": true,
        "canManageQueues": true,
        "canManageCategories": true,
        "canManageSLA": true,
        "canManageWorkflows": true,
        "canViewReports": true,
        "canManageAgents": true,
        "canAccessAdminSettings": true,
        "canCreateSavedFilters": true,
        "canShareFilters": true,
        "canUseBulkActions": true,
        "canViewAuditLog": true
      }
    },
    "capabilities": {
      "isAgent": true,
      "isSupervisor": true,
      "isAdmin": true,
      "isApprover": true,
      "isRequester": true,
      "maxConcurrentTickets": 50,
      "canAccessChat": true,
      "canAccessKnowledgeBase": true,
      "canAccessServiceCatalog": true
    },
    "settings": {
      "timezone": "Asia/Calcutta",
      "language": "en",
      "dateFormat": "MM/DD/YYYY",
      "timeFormat": "12h"
    },
    "tenant": {
      "id": "c644c4a5-df9e-4763-93b0-f701b0268d9e",
      "name": "Leebird",
      "realm": "leebird"
    },
    "session": {
      "sessionId": "a9c9e421-5a80-4bb3-8e85-e4be7d766ef1",
      "authTime": "2025-07-10T08:00:00.000Z",
      "issuedAt": "2025-07-10T12:00:00.000Z",
      "expiresAt": "2025-07-10T14:30:00.000Z"
    },
    "module": "ticketing",
    "type": "template"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid or missing query parameters | Occurs when `type` or `module` parameters are missing or contain invalid values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access user info |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist |
| `304 Not Modified` | Conditional request matched | Returned when `if-none-match` ETag matches current resource |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "TOKEN_EXPIRED",
    "message": "Authentication token has expired",
    "details": "Please re-authenticate to obtain a new token"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **User Identity:** The `id` and `sub` fields contain the user's unique identifier (UUID) from the identity provider. These are typically identical.

2. **Profile Information:** Basic profile fields include:
   - `username` / `preferredUsername` — Login identifier
   - `email` — User's email address
   - `name` — Full display name
   - `givenName` / `familyName` — First and last name components

3. **Team Membership:** The `teams` array lists all teams the user belongs to. The `defaultTeam` indicates their primary team for ticket assignment and routing.

4. **Roles Structure:** Roles are organized in two categories:
   - `realm` — Global roles across the tenant (e.g., `ticket_admin`, `ticket_agent`)
   - `resource` — Resource-specific roles (e.g., account management)

5. **Ticketing Permissions:** The `permissions.ticketing` object defines granular permissions for ticketing operations. UI components should use these flags to show/hide features.

6. **Capabilities:** The `capabilities` object provides quick boolean checks:
   - `isAgent` — User can handle tickets
   - `isSupervisor` — User can manage agents
   - `isAdmin` — User has admin access
   - `isApprover` — User can approve requests
   - `isRequester` — User can create tickets

7. **Session Information:** The `session` object contains:
   - `sessionId` — Current session identifier
   - `authTime` — When user originally authenticated
   - `issuedAt` — When current token was issued
   - `expiresAt` — Token expiration time (use for refresh logic)

8. **Tenant Context:** The `tenant` object confirms the active tenant, useful for multi-tenant applications.

9. **Application Initialization:** This endpoint should be called early in the application lifecycle to:
   - Configure navigation based on permissions
   - Set user context for logging/analytics
   - Initialize user-specific settings

10. **Caching:** The API supports conditional requests via `ETag` / `if-none-match` headers. User info changes infrequently, so caching is recommended with periodic refresh.

11. **Token Decoding Alternative:** Much of this information is also available by decoding the JWT token directly. However, this endpoint provides additional computed fields like `permissions` and `capabilities` that aren't in the token.

12. **Multi-Tenancy:** The `x-tenantid` header is mandatory. User roles and permissions may differ across tenants.

13. **Related Endpoints:**
    - `GET /user/preference` — User's display preferences
    - `GET /queue/current` — User's current queue assignment
    - `PUT /user/userinfo` — Update user profile (if supported)
