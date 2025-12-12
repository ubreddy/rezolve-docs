---
id: get-current-queue
title: Get Current Queue
sidebar_label: Get Current Queue
sidebar_position: 12
displayed_sidebar: integrationSidebar
description: API documentation for retrieving current queue assignment and status
status:
whatsPending:
---

# Get Current Queue

Retrieves the current queue assignment and status for the authenticated user. This endpoint returns information about which queue(s) the user is currently assigned to, their availability status, workload metrics, and queue membership details. It is commonly used to display the agent's current queue context in the UI.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/queue/current`

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
  --url '{{base_url}}/api/v2/ticketing/queue/current?type=template&module=ticketing' \
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
  "message": "Current queue retrieved successfully",
  "data": {
    "user": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak Purohit",
      "email": "deepak.purohit@example.com",
      "defaultTeam": "operation"
    },
    "status": {
      "isAvailable": true,
      "availabilityStatus": "online",
      "statusSince": "2025-07-10T08:00:00.000Z",
      "autoAssignEnabled": true
    },
    "workload": {
      "currentLoad": 8,
      "maxCapacity": 20,
      "utilizationPercentage": 40,
      "ticketsAssignedToday": 12,
      "ticketsResolvedToday": 7
    },
    "queues": [
      {
        "id": "queue-001",
        "name": "IT Support Queue",
        "key": "it_support",
        "team": "it",
        "role": "agent",
        "isPrimary": true,
        "isActive": true,
        "joinedAt": "2024-06-15T10:30:00.000Z",
        "ticketsInQueue": 45,
        "myTicketsInQueue": 5
      },
      {
        "id": "queue-002",
        "name": "Operations Queue",
        "key": "operations",
        "team": "operation",
        "role": "agent",
        "isPrimary": false,
        "isActive": true,
        "joinedAt": "2024-08-20T14:15:00.000Z",
        "ticketsInQueue": 23,
        "myTicketsInQueue": 3
      }
    ],
    "activeQueue": {
      "id": "queue-001",
      "name": "IT Support Queue",
      "key": "it_support"
    },
    "permissions": {
      "canChangeAvailability": true,
      "canSwitchQueue": true,
      "canViewAllQueues": false,
      "canManageQueues": false
    },
    "settings": {
      "notifyOnNewTicket": true,
      "notifyOnAssignment": true,
      "autoAcceptAssignments": false,
      "soundEnabled": true
    },
    "module": "ticketing",
    "type": "template"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

### Minimal Response Example

For users not assigned to any queues:

```json
{
  "success": true,
  "message": "Current queue retrieved successfully",
  "data": {
    "user": {
      "id": "user-uuid",
      "name": "Regular User",
      "email": "user@example.com",
      "defaultTeam": "global"
    },
    "status": {
      "isAvailable": false,
      "availabilityStatus": "offline",
      "statusSince": null,
      "autoAssignEnabled": false
    },
    "workload": {
      "currentLoad": 0,
      "maxCapacity": 0,
      "utilizationPercentage": 0,
      "ticketsAssignedToday": 0,
      "ticketsResolvedToday": 0
    },
    "queues": [],
    "activeQueue": null,
    "permissions": {
      "canChangeAvailability": false,
      "canSwitchQueue": false,
      "canViewAllQueues": false,
      "canManageQueues": false
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
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access queue information |
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
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **User-Specific:** This endpoint returns queue information specific to the authenticated user based on the JWT token. Each user sees only their own queue assignments.

2. **Availability Status:** The `availabilityStatus` field indicates the user's current state:
   - `online` — Available and accepting tickets
   - `busy` — Currently working, limited availability
   - `away` — Temporarily unavailable (break, meeting)
   - `offline` — Not accepting tickets
   - `dnd` — Do not disturb mode

3. **Workload Metrics:** The `workload` object provides real-time capacity information:
   - `currentLoad` — Number of open tickets assigned
   - `maxCapacity` — Maximum tickets the user can handle
   - `utilizationPercentage` — Current load as percentage of capacity
   - `ticketsAssignedToday` — Tickets assigned during current day
   - `ticketsResolvedToday` — Tickets resolved during current day

4. **Queue Membership:** Users can be members of multiple queues. The `queues` array shows all queue memberships with:
   - `role` — User's role in the queue (agent, senior_agent, supervisor)
   - `isPrimary` — Whether this is the user's primary queue
   - `myTicketsInQueue` — Count of user's tickets in this queue

5. **Active Queue:** The `activeQueue` indicates which queue the user is currently focused on. This affects ticket routing and notifications.

6. **Permissions:** The `permissions` object indicates what queue-related actions the user can perform:
   - `canChangeAvailability` — Toggle availability status
   - `canSwitchQueue` — Change active queue
   - `canViewAllQueues` — View all tenant queues (admin)
   - `canManageQueues` — Create/edit queue configurations

7. **User Settings:** Personal notification and assignment preferences for queue interactions.

8. **Polling:** This endpoint is lightweight and suitable for periodic polling to update the agent's dashboard. Recommended polling interval: 30-60 seconds.

9. **Caching:** The API supports conditional requests via `ETag` / `if-none-match` headers. Use this to reduce bandwidth when status hasn't changed.

10. **Non-Agent Users:** Users without queue membership (e.g., `ticket_user` role only) will receive an empty `queues` array and `null` `activeQueue`.

11. **Multi-Tenancy:** The `x-tenantid` header is mandatory. Queue assignments are tenant-specific.

12. **Team Context:** The user's `defaultTeam` from their profile affects which queues they can be assigned to and their default queue context.
