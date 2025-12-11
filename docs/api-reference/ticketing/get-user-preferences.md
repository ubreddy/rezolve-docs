---
id: get-user-preferences
title: Get User Preferences
sidebar_label: Get User Preferences
sidebar_position: 13
displayed_sidebar: integrationSidebar
description: API documentation for retrieving ticketing module user preferences
status:
whatsPending:
---

# Get User Preferences

Retrieves the ticketing module preferences for the authenticated user. This endpoint returns personalized settings such as display options, notification preferences, default filters, column configurations, and other user-specific customizations that persist across sessions.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/user/preference`

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
  --url '{{base_url}}/api/v2/ticketing/user/preference?type=template&module=ticketing' \
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
  "message": "User preferences retrieved successfully",
  "data": {
    "userId": "1876278a-3634-4833-b73e-1536d806e117",
    "module": "ticketing",
    "type": "template",
    "display": {
      "defaultView": "list",
      "itemsPerPage": 25,
      "density": "comfortable",
      "showClosedTickets": false,
      "closedTicketsDays": 30,
      "dateFormat": "MM/DD/YYYY",
      "timeFormat": "12h",
      "timezone": "Asia/Calcutta",
      "language": "en"
    },
    "listView": {
      "columns": [
        {
          "id": "ticketNumber",
          "label": "Ticket #",
          "visible": true,
          "width": 120,
          "order": 1,
          "sortable": true,
          "frozen": true
        },
        {
          "id": "subject",
          "label": "Subject",
          "visible": true,
          "width": 300,
          "order": 2,
          "sortable": true,
          "frozen": false
        },
        {
          "id": "status",
          "label": "Status",
          "visible": true,
          "width": 100,
          "order": 3,
          "sortable": true,
          "frozen": false
        },
        {
          "id": "priority",
          "label": "Priority",
          "visible": true,
          "width": 100,
          "order": 4,
          "sortable": true,
          "frozen": false
        },
        {
          "id": "assignee",
          "label": "Assignee",
          "visible": true,
          "width": 150,
          "order": 5,
          "sortable": true,
          "frozen": false
        },
        {
          "id": "requester",
          "label": "Requester",
          "visible": true,
          "width": 150,
          "order": 6,
          "sortable": true,
          "frozen": false
        },
        {
          "id": "category",
          "label": "Category",
          "visible": false,
          "width": 120,
          "order": 7,
          "sortable": true,
          "frozen": false
        },
        {
          "id": "team",
          "label": "Team",
          "visible": true,
          "width": 100,
          "order": 8,
          "sortable": true,
          "frozen": false
        },
        {
          "id": "createdAt",
          "label": "Created",
          "visible": true,
          "width": 150,
          "order": 9,
          "sortable": true,
          "frozen": false
        },
        {
          "id": "updatedAt",
          "label": "Updated",
          "visible": true,
          "width": 150,
          "order": 10,
          "sortable": true,
          "frozen": false
        },
        {
          "id": "dueDate",
          "label": "Due Date",
          "visible": false,
          "width": 150,
          "order": 11,
          "sortable": true,
          "frozen": false
        },
        {
          "id": "slaStatus",
          "label": "SLA",
          "visible": true,
          "width": 80,
          "order": 12,
          "sortable": true,
          "frozen": false
        }
      ],
      "defaultSort": {
        "column": "updatedAt",
        "direction": "DESC"
      },
      "rowHeight": "medium"
    },
    "kanbanView": {
      "groupBy": "status",
      "showCounts": true,
      "cardFields": ["ticketNumber", "subject", "priority", "assignee"],
      "collapsedColumns": [],
      "columnOrder": ["open", "in_progress", "pending", "resolved", "closed"]
    },
    "filters": {
      "defaultFilter": "all",
      "savedFilters": [
        {
          "id": "filter-001",
          "name": "My High Priority",
          "isDefault": false,
          "isPinned": true
        },
        {
          "id": "filter-002",
          "name": "Overdue Tickets",
          "isDefault": false,
          "isPinned": true
        }
      ],
      "recentFilters": ["all", "7471", "7480"],
      "quickFilters": {
        "showStatusFilter": true,
        "showPriorityFilter": true,
        "showAssigneeFilter": true,
        "showDateFilter": true
      }
    },
    "sidebar": {
      "expandedSections": ["views", "status"],
      "collapsedSections": ["priority", "categories", "teams"],
      "width": 280,
      "isCollapsed": false
    },
    "notifications": {
      "emailEnabled": true,
      "emailDigest": "realtime",
      "pushEnabled": true,
      "soundEnabled": true,
      "soundFile": "default",
      "desktopNotifications": true,
      "triggers": {
        "onAssignment": true,
        "onStatusChange": true,
        "onComment": true,
        "onMention": true,
        "onSlaWarning": true,
        "onSlaBreach": true,
        "onEscalation": true
      }
    },
    "ticketForm": {
      "defaultPriority": "medium",
      "defaultCategory": null,
      "defaultTeam": "operation",
      "autoSaveDraft": true,
      "autoSaveInterval": 30,
      "showRichTextEditor": true,
      "expandedSections": ["details", "description"],
      "collapsedSections": ["customFields", "attachments"]
    },
    "dashboard": {
      "defaultDashboard": "agent-overview",
      "refreshInterval": 300,
      "widgets": [
        {
          "id": "widget-001",
          "type": "ticket-summary",
          "position": {"x": 0, "y": 0, "w": 4, "h": 2},
          "visible": true
        },
        {
          "id": "widget-002",
          "type": "sla-compliance",
          "position": {"x": 4, "y": 0, "w": 4, "h": 2},
          "visible": true
        },
        {
          "id": "widget-003",
          "type": "recent-tickets",
          "position": {"x": 0, "y": 2, "w": 8, "h": 3},
          "visible": true
        }
      ]
    },
    "keyboard": {
      "shortcutsEnabled": true,
      "customShortcuts": {
        "newTicket": "ctrl+n",
        "search": "ctrl+k",
        "nextTicket": "j",
        "prevTicket": "k",
        "reply": "r",
        "resolve": "ctrl+r"
      }
    },
    "accessibility": {
      "highContrast": false,
      "reducedMotion": false,
      "fontSize": "medium",
      "screenReaderOptimized": false
    },
    "createdAt": "2024-06-15T10:30:00.000Z",
    "updatedAt": "2025-07-10T14:22:00.000Z"
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
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access preferences |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist, or user has no saved preferences |
| `304 Not Modified` | Conditional request matched | Returned when `if-none-match` ETag matches current resource |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "PREFERENCES_NOT_FOUND",
    "message": "No preferences found for this user",
    "details": "Default preferences will be applied"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **User-Specific:** This endpoint returns preferences specific to the authenticated user. Each user has their own independent preference settings.

2. **Preference Categories:** User preferences are organized into sections:
   - `display` — General display settings (date/time format, timezone, density)
   - `listView` — Table column configuration and sorting
   - `kanbanView` — Kanban board settings
   - `filters` — Default and saved filter preferences
   - `sidebar` — Navigation sidebar state
   - `notifications` — Notification delivery preferences
   - `ticketForm` — Ticket creation/editing defaults
   - `dashboard` — Dashboard widget configuration
   - `keyboard` — Keyboard shortcuts
   - `accessibility` — Accessibility settings

3. **Column Configuration:** The `listView.columns` array defines:
   - `visible` — Whether column is displayed
   - `width` — Column width in pixels
   - `order` — Display order (left to right)
   - `frozen` — Whether column is fixed during horizontal scroll

4. **Email Digest Options:** The `emailDigest` setting accepts:
   - `realtime` — Immediate email for each notification
   - `hourly` — Hourly digest summary
   - `daily` — Daily digest summary
   - `weekly` — Weekly digest summary
   - `disabled` — No email notifications

5. **Dashboard Widgets:** Widget positions use a grid system:
   - `x`, `y` — Grid position coordinates
   - `w`, `h` — Widget width and height in grid units

6. **Default Preferences:** If a user has never customized preferences, the system returns tenant-level defaults merged with system defaults.

7. **Caching:** The API supports conditional requests via `ETag` / `if-none-match` headers. Preferences change infrequently, so caching is recommended.

8. **Related Endpoint:** To update preferences, use `PUT /api/v2/ticketing/user/preference` with the modified preference object.

9. **Timezone Handling:** The `timezone` setting affects how dates/times are displayed throughout the ticketing UI and in email notifications.

10. **Density Options:** The `density` setting accepts:
    - `compact` — Reduced spacing, more items visible
    - `comfortable` — Standard spacing (default)
    - `spacious` — Increased spacing for readability

11. **Font Size Options:** The `fontSize` accessibility setting accepts:
    - `small` — 12px base
    - `medium` — 14px base (default)
    - `large` — 16px base
    - `xlarge` — 18px base

12. **Multi-Tenancy:** The `x-tenantid` header is mandatory. User preferences are tenant-specific; the same user may have different preferences across tenants.
