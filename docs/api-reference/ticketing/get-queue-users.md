---
id: get-queue-users
title: Get Queue Users
sidebar_label: Get Queue Users
sidebar_position: 17
displayed_sidebar: integrationSidebar
description: API documentation for retrieving users assigned to a specific queue
status:
whatsPending:
---

# Get Queue Users

Retrieves all users (agents/members) assigned to a specific queue. This endpoint returns detailed information about queue members including their availability status, workload metrics, skills, and roles within the queue. Used for agent assignment dropdowns and queue management interfaces.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/queue/{queueId}/users`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | Yes |
| `issupportrequest` | Boolean flag indicating if this is a support-related request | No |

---

## Path Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `queueId` | integer | The unique numeric identifier of the queue | Yes |

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
  --url '{{base_url}}/api/v2/ticketing/queue/33654/users?type=template&module=ticketing' \
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
  "message": "Queue users retrieved successfully",
  "data": {
    "queueId": 33654,
    "queueName": "IT Support - Tier 1",
    "users": [
      {
        "id": "1876278a-3634-4833-b73e-1536d806e117",
        "userId": 19528,
        "username": "deepak.purohit@rezolve.ai",
        "email": "deepak.purohit@rezolve.ai",
        "name": "Deepak purohit",
        "firstName": "Deepak",
        "lastName": "purohit",
        "avatar": null,
        "role": "agent",
        "queueRole": "member",
        "availability": {
          "status": "online",
          "statusSince": "2025-07-10T08:00:00.000Z",
          "autoAssign": true
        },
        "workload": {
          "currentLoad": 8,
          "maxCapacity": 15,
          "utilizationPercentage": 53.3,
          "ticketsAssignedToday": 12,
          "ticketsResolvedToday": 7,
          "avgResolutionTime": 45
        },
        "skills": [
          {
            "id": "skill-001",
            "name": "Network Troubleshooting",
            "level": "expert"
          },
          {
            "id": "skill-002",
            "name": "VPN Support",
            "level": "intermediate"
          }
        ],
        "teams": ["operation", "global"],
        "defaultTeam": "operation",
        "shift": {
          "name": "Morning Shift",
          "startTime": "08:00",
          "endTime": "17:00",
          "timezone": "Asia/Calcutta",
          "isOnShift": true
        },
        "lastActivity": "2025-07-10T12:30:00.000Z",
        "joinedQueue": "2024-01-15T10:00:00.000Z"
      },
      {
        "id": "2987389b-4745-5944-c84f-2647e917f228",
        "userId": 19529,
        "username": "jane.smith@rezolve.ai",
        "email": "jane.smith@rezolve.ai",
        "name": "Jane Smith",
        "firstName": "Jane",
        "lastName": "Smith",
        "avatar": "https://cdn.example.com/avatars/jane.jpg",
        "role": "agent",
        "queueRole": "supervisor",
        "availability": {
          "status": "busy",
          "statusSince": "2025-07-10T11:45:00.000Z",
          "autoAssign": false
        },
        "workload": {
          "currentLoad": 12,
          "maxCapacity": 15,
          "utilizationPercentage": 80.0,
          "ticketsAssignedToday": 15,
          "ticketsResolvedToday": 10,
          "avgResolutionTime": 38
        },
        "skills": [
          {
            "id": "skill-001",
            "name": "Network Troubleshooting",
            "level": "expert"
          },
          {
            "id": "skill-003",
            "name": "Hardware Support",
            "level": "expert"
          },
          {
            "id": "skill-004",
            "name": "Software Installation",
            "level": "intermediate"
          }
        ],
        "teams": ["operation", "it-support"],
        "defaultTeam": "operation",
        "shift": {
          "name": "Morning Shift",
          "startTime": "08:00",
          "endTime": "17:00",
          "timezone": "Asia/Calcutta",
          "isOnShift": true
        },
        "lastActivity": "2025-07-10T12:28:00.000Z",
        "joinedQueue": "2023-06-01T09:00:00.000Z"
      },
      {
        "id": "3098490c-5856-6055-d95g-3758f028g339",
        "userId": 19530,
        "username": "bob.wilson@rezolve.ai",
        "email": "bob.wilson@rezolve.ai",
        "name": "Bob Wilson",
        "firstName": "Bob",
        "lastName": "Wilson",
        "avatar": null,
        "role": "agent",
        "queueRole": "member",
        "availability": {
          "status": "away",
          "statusSince": "2025-07-10T12:00:00.000Z",
          "autoAssign": false
        },
        "workload": {
          "currentLoad": 5,
          "maxCapacity": 15,
          "utilizationPercentage": 33.3,
          "ticketsAssignedToday": 8,
          "ticketsResolvedToday": 6,
          "avgResolutionTime": 52
        },
        "skills": [
          {
            "id": "skill-002",
            "name": "VPN Support",
            "level": "expert"
          },
          {
            "id": "skill-005",
            "name": "Email Support",
            "level": "intermediate"
          }
        ],
        "teams": ["operation"],
        "defaultTeam": "operation",
        "shift": {
          "name": "Morning Shift",
          "startTime": "08:00",
          "endTime": "17:00",
          "timezone": "Asia/Calcutta",
          "isOnShift": true
        },
        "lastActivity": "2025-07-10T11:55:00.000Z",
        "joinedQueue": "2024-03-20T14:00:00.000Z"
      }
    ],
    "summary": {
      "totalUsers": 3,
      "byStatus": {
        "online": 1,
        "busy": 1,
        "away": 1,
        "offline": 0,
        "dnd": 0
      },
      "byRole": {
        "member": 2,
        "supervisor": 1,
        "admin": 0
      },
      "availableForAssignment": 1,
      "totalCapacity": 45,
      "currentUtilization": 25,
      "averageUtilization": 55.5
    }
  },
  "timestamp": "2025-07-10T12:35:00.000Z"
}
```

---

## User Object Schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique user identifier (UUID from identity provider) |
| `userId` | integer | Numeric user ID in ticketing system |
| `username` | string | Login username |
| `email` | string | User's email address |
| `name` | string | Full display name |
| `firstName` | string | First name |
| `lastName` | string | Last name |
| `avatar` | string\|null | URL to user's avatar image |
| `role` | string | System role: `agent`, `supervisor`, `admin` |
| `queueRole` | string | Role within this queue: `member`, `supervisor`, `admin` |
| `availability` | object | Current availability status |
| `workload` | object | Current workload metrics |
| `skills` | array | List of skills with proficiency levels |
| `teams` | array | Team memberships |
| `defaultTeam` | string | Primary team |
| `shift` | object | Shift schedule information |
| `lastActivity` | string | ISO 8601 timestamp of last activity |
| `joinedQueue` | string | ISO 8601 timestamp when user joined this queue |

---

## Availability Status Values

| Status | Description | Available for Assignment |
|--------|-------------|--------------------------|
| `online` | Available and accepting tickets | Yes (if `autoAssign: true`) |
| `busy` | Currently busy/in meeting | No |
| `away` | Temporarily away | No |
| `offline` | Not logged in / offline | No |
| `dnd` | Do not disturb | No |

---

## Queue Role Values

| Role | Description | Permissions |
|------|-------------|-------------|
| `member` | Regular queue member | Handle assigned tickets |
| `supervisor` | Queue supervisor | Reassign, monitor, manage queue |
| `admin` | Queue administrator | Full queue configuration |

---

## Skill Level Values

| Level | Description |
|-------|-------------|
| `beginner` | Basic knowledge |
| `intermediate` | Working proficiency |
| `expert` | Advanced/specialist level |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid queue ID format | Queue ID must be a valid integer |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view queue members |
| `404 Not Found` | Queue not found | The specified queue ID does not exist |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "QUEUE_NOT_FOUND",
    "message": "Queue with ID 99999 not found",
    "details": "Please verify the queue ID and try again"
  },
  "timestamp": "2025-07-10T12:35:00.000Z"
}
```

---

## Notes

1. **Queue Identification:** The `queueId` in the path is the numeric identifier for the queue. Use the `/queue/list` endpoint to discover available queues and their IDs.

2. **Assignment Dropdown:** This endpoint is commonly used to populate agent assignment dropdowns when manually assigning or reassigning tickets.

3. **Workload Metrics:** The `workload` object provides real-time metrics:
   - `currentLoad` — Number of currently assigned open tickets
   - `maxCapacity` — Maximum tickets the agent can handle
   - `utilizationPercentage` — currentLoad / maxCapacity × 100
   - `ticketsAssignedToday` — Total tickets assigned today
   - `ticketsResolvedToday` — Total tickets resolved today
   - `avgResolutionTime` — Average resolution time in minutes

4. **Skill-Based Routing:** The `skills` array enables skill-based ticket assignment. Skills have proficiency levels (`beginner`, `intermediate`, `expert`).

5. **Shift Information:** The `shift` object indicates if the user is currently on shift. `isOnShift: false` agents may not be available for assignment.

6. **Auto-Assignment:** The `availability.autoAssign` flag indicates whether the agent is receiving automatically routed tickets. Agents can toggle this independently of their status.

7. **Summary Statistics:** The `summary` object provides aggregated statistics for queue capacity planning:
   - `availableForAssignment` — Count of agents who can receive new tickets
   - `totalCapacity` — Sum of all agents' maxCapacity
   - `currentUtilization` — Sum of all agents' currentLoad
   - `averageUtilization` — Mean utilization percentage

8. **Real-Time Updates:** For real-time agent availability updates, consider using WebSocket or SSE connections. This endpoint provides a point-in-time snapshot.

9. **Multi-Queue Membership:** Agents may belong to multiple queues. This endpoint returns only the agents assigned to the specified queue.

10. **Related Endpoints:**
    - `GET /queue/list` — List all queues
    - `GET /queue/current` — Current user's queue assignment
    - `POST /queue/{queueId}/users` — Add user to queue
    - `DELETE /queue/{queueId}/users/{userId}` — Remove user from queue
    - `PUT /queue/{queueId}/users/{userId}` — Update user's queue role
