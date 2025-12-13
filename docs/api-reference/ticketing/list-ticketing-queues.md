---
id: list-ticketing-queues
title: List Ticketing Queues
sidebar_label: List Ticketing Queues
sidebar_position: 11
displayed_sidebar: integrationSidebar
description: API documentation for retrieving ticket queue configurations
status:
whatsPending:
---

# List Ticketing Queues

Retrieves a list of ticket queues configured for the tenant. Queues are used to organize and route tickets based on criteria such as team, category, priority, or custom rules. They enable workload distribution, automatic assignment, and help agents manage their ticket backlogs efficiently.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/queue/list`

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
| `type` | string | Filter queues by type. Accepted values: `template`, `agent`, `user` | Yes |
| `module` | string | The module context. Example: `ticketing` | Yes |

---

## Request Body Schema

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v2/ticketing/queue/list?type=template&module=ticketing' \
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
  "message": "Queues retrieved successfully",
  "data": {
    "queues": [
      {
        "id": "{{queue_uuid}}",
        "name": "IT Support Queue",
        "key": "it_support",
        "description": "General IT support tickets",
        "team": "it",
        "icon": "monitor",
        "color": "#3B82F6",
        "isDefault": true,
        "isActive": true,
        "order": 1,
        "assignmentMethod": "round_robin",
        "autoAssign": true,
        "members": [
          {
            "id": "{{user_uuid}}",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "role": "agent",
            "isAvailable": true,
            "currentLoad": 5,
            "maxCapacity": 20
          },
          {
            "id": "{{user_uuid}}",
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "role": "agent",
            "isAvailable": true,
            "currentLoad": 8,
            "maxCapacity": 20
          },
          {
            "id": "{{user_uuid}}",
            "name": "Mike Johnson",
            "email": "mike.johnson@example.com",
            "role": "supervisor",
            "isAvailable": true,
            "currentLoad": 3,
            "maxCapacity": 10
          }
        ],
        "rules": {
          "categories": ["hardware", "software", "network"],
          "priorities": ["critical", "high", "medium", "low"],
          "ticketTypes": ["incident", "service_request"]
        },
        "slaId": "sla-001",
        "businessHours": {
          "enabled": true,
          "timezone": "America/New_York",
          "schedule": {
            "monday": {"start": "09:00", "end": "17:00"},
            "tuesday": {"start": "09:00", "end": "17:00"},
            "wednesday": {"start": "09:00", "end": "17:00"},
            "thursday": {"start": "09:00", "end": "17:00"},
            "friday": {"start": "09:00", "end": "17:00"},
            "saturday": null,
            "sunday": null
          }
        },
        "metrics": {
          "openTickets": 45,
          "avgResponseTime": 1800,
          "avgResolutionTime": 14400,
          "slaCompliance": 94.5
        },
        "createdAt": "2024-01-15T10:30:00.000Z",
        "updatedAt": "2025-07-10T14:22:00.000Z"
      },
      {
        "id": "{{queue_uuid}}",
        "name": "HR Helpdesk",
        "key": "hr_helpdesk",
        "description": "Human resources related requests",
        "team": "hr",
        "icon": "users",
        "color": "#10B981",
        "isDefault": false,
        "isActive": true,
        "order": 2,
        "assignmentMethod": "least_loaded",
        "autoAssign": true,
        "members": [
          {
            "id": "{{user_uuid}}",
            "name": "Sarah Wilson",
            "email": "sarah.wilson@example.com",
            "role": "agent",
            "isAvailable": true,
            "currentLoad": 12,
            "maxCapacity": 25
          },
          {
            "id": "{{user_uuid}}",
            "name": "Tom Brown",
            "email": "tom.brown@example.com",
            "role": "agent",
            "isAvailable": false,
            "currentLoad": 0,
            "maxCapacity": 25
          }
        ],
        "rules": {
          "categories": ["onboarding", "offboarding", "benefits", "payroll"],
          "priorities": ["high", "medium", "low"],
          "ticketTypes": ["service_request"]
        },
        "slaId": "sla-002",
        "businessHours": {
          "enabled": true,
          "timezone": "America/New_York",
          "schedule": {
            "monday": {"start": "08:00", "end": "18:00"},
            "tuesday": {"start": "08:00", "end": "18:00"},
            "wednesday": {"start": "08:00", "end": "18:00"},
            "thursday": {"start": "08:00", "end": "18:00"},
            "friday": {"start": "08:00", "end": "16:00"},
            "saturday": null,
            "sunday": null
          }
        },
        "metrics": {
          "openTickets": 23,
          "avgResponseTime": 3600,
          "avgResolutionTime": 28800,
          "slaCompliance": 89.2
        },
        "createdAt": "2024-02-20T08:15:00.000Z",
        "updatedAt": "2025-07-09T11:45:00.000Z"
      },
      {
        "id": "{{queue_uuid}}",
        "name": "VIP Support",
        "key": "vip_support",
        "description": "Priority support for VIP customers and executives",
        "team": "it",
        "icon": "star",
        "color": "#F59E0B",
        "isDefault": false,
        "isActive": true,
        "order": 3,
        "assignmentMethod": "manual",
        "autoAssign": false,
        "members": [
          {
            "id": "{{user_uuid}}",
            "name": "Senior Agent",
            "email": "senior.agent@example.com",
            "role": "senior_agent",
            "isAvailable": true,
            "currentLoad": 2,
            "maxCapacity": 5
          }
        ],
        "rules": {
          "categories": null,
          "priorities": ["critical", "high"],
          "ticketTypes": ["incident"],
          "customConditions": [
            {
              "field": "requester.isVip",
              "operator": "equals",
              "value": true
            }
          ]
        },
        "slaId": "sla-premium",
        "businessHours": {
          "enabled": false
        },
        "metrics": {
          "openTickets": 3,
          "avgResponseTime": 600,
          "avgResolutionTime": 7200,
          "slaCompliance": 100
        },
        "createdAt": "2024-03-10T14:00:00.000Z",
        "updatedAt": "2025-07-10T09:30:00.000Z"
      },
      {
        "id": "{{queue_uuid}}",
        "name": "Unassigned",
        "key": "unassigned",
        "description": "Tickets awaiting triage and assignment",
        "team": "global",
        "icon": "inbox",
        "color": "#6B7280",
        "isDefault": false,
        "isActive": true,
        "isSystem": true,
        "order": 99,
        "assignmentMethod": "none",
        "autoAssign": false,
        "members": [],
        "rules": null,
        "slaId": null,
        "businessHours": null,
        "metrics": {
          "openTickets": 12,
          "avgResponseTime": null,
          "avgResolutionTime": null,
          "slaCompliance": null
        },
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2025-07-10T12:00:00.000Z"
      }
    ],
    "totalCount": 4,
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
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access queue configurations |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist |
| `304 Not Modified` | Conditional request matched | Returned when `if-none-match` ETag matches current resource |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "Insufficient permissions to access queue list",
    "details": "User requires 'ticket_agent' or 'ticket_admin' role"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **Queue Purpose:** Queues organize tickets for efficient workload distribution and routing. They can be based on teams, categories, priorities, or custom criteria.

2. **Assignment Methods:** Supported assignment methods include:
   - `round_robin` — Distributes tickets evenly among available agents in rotation
   - `least_loaded` — Assigns to the agent with the lowest current workload
   - `most_available` — Assigns to the agent with the most capacity
   - `skill_based` — Matches tickets to agents based on skills/expertise
   - `manual` — No automatic assignment; supervisors assign manually
   - `none` — Tickets remain unassigned (used for triage queues)

3. **Queue Members:** Each queue member includes:
   - `role` — agent, senior_agent, supervisor
   - `isAvailable` — Current availability status
   - `currentLoad` — Number of currently assigned open tickets
   - `maxCapacity` — Maximum tickets the member can handle

4. **Routing Rules:** The `rules` object defines which tickets enter the queue:
   - `categories` — Array of category keys (null = all categories)
   - `priorities` — Array of priority keys
   - `ticketTypes` — Array of ticket type keys
   - `customConditions` — Advanced conditional rules

5. **Business Hours:** When enabled, SLA calculations and auto-assignment only occur during configured business hours.

6. **Queue Metrics:** Real-time performance metrics include:
   - `openTickets` — Current open ticket count
   - `avgResponseTime` — Average first response time (seconds)
   - `avgResolutionTime` — Average resolution time (seconds)
   - `slaCompliance` — SLA compliance percentage

7. **System Queues:** Queues with `isSystem: true` are built-in queues (e.g., Unassigned) that cannot be deleted.

8. **Default Queue:** The queue with `isDefault: true` receives tickets that don't match any other queue's rules.

9. **Team Association:** Each queue is associated with a team. Agents must be team members to be added to the queue.

10. **Caching:** The API supports conditional requests via `ETag` / `if-none-match` headers. Queue configurations change infrequently, so caching is recommended.

11. **Role Requirements:** Users typically need one of these roles to view queues:
    - `ticket_agent` — View queues they belong to
    - `ticket_agent_supervisor` — View team queues
    - `ticket_admin` — View all queues

12. **Multi-Tenancy:** The `x-tenantid` header is mandatory. Each tenant has independent queue configurations.
