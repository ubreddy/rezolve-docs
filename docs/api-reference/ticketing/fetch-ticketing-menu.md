---
id: fetch-ticketing-menu
title: Fetch Ticketing Menu
sidebar_label: Fetch Ticketing Menu
sidebar_position: 10
displayed_sidebar: integrationSidebar
description: API documentation for retrieving ticketing menu structure and navigation
status:
whatsPending:
---

# Fetch Ticketing Menu

Retrieves the menu structure and navigation configuration for the ticketing module. This endpoint returns the complete sidebar menu hierarchy including filter groups, saved views, quick filters, and navigation items that drive the ticketing UI layout based on user roles and permissions.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/menu/fetch`

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
| `type` | string | Filter menu by type. Accepted values: `template`, `agent`, `user` | Yes |
| `module` | string | The module context. Example: `ticketing` | Yes |

---

## Request Body Schema

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v2/ticketing/menu/fetch?type=template&module=ticketing' \
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
  "message": "Menu fetched successfully",
  "data": {
    "menuId": "menu-uuid-001",
    "module": "ticketing",
    "type": "template",
    "sections": [
      {
        "id": "section-001",
        "name": "Views",
        "key": "views",
        "icon": "layout-grid",
        "order": 1,
        "collapsible": true,
        "defaultExpanded": true,
        "items": [
          {
            "id": "all",
            "name": "All Tickets",
            "key": "all_tickets",
            "icon": "inbox",
            "type": "system",
            "filterId": "all",
            "order": 1,
            "showCount": true,
            "isDefault": true
          },
          {
            "id": "7471",
            "name": "Assigned to Me",
            "key": "assigned_to_me",
            "icon": "user",
            "type": "system",
            "filterId": "7471",
            "order": 2,
            "showCount": true,
            "isDefault": false
          },
          {
            "id": "7472",
            "name": "My Team",
            "key": "my_team",
            "icon": "users",
            "type": "system",
            "filterId": "7472",
            "order": 3,
            "showCount": true,
            "isDefault": false
          },
          {
            "id": "7693",
            "name": "Unassigned",
            "key": "unassigned",
            "icon": "user-x",
            "type": "system",
            "filterId": "7693",
            "order": 4,
            "showCount": true,
            "isDefault": false
          }
        ]
      },
      {
        "id": "section-002",
        "name": "Status",
        "key": "status",
        "icon": "circle",
        "order": 2,
        "collapsible": true,
        "defaultExpanded": true,
        "items": [
          {
            "id": "3745",
            "name": "Open",
            "key": "open",
            "icon": "circle",
            "iconColor": "#3B82F6",
            "type": "status",
            "filterId": "3745",
            "order": 1,
            "showCount": true
          },
          {
            "id": "3747",
            "name": "In Progress",
            "key": "in_progress",
            "icon": "circle",
            "iconColor": "#F59E0B",
            "type": "status",
            "filterId": "3747",
            "order": 2,
            "showCount": true
          },
          {
            "id": "3749",
            "name": "Pending",
            "key": "pending",
            "icon": "circle",
            "iconColor": "#8B5CF6",
            "type": "status",
            "filterId": "3749",
            "order": 3,
            "showCount": true
          },
          {
            "id": "3746",
            "name": "Resolved",
            "key": "resolved",
            "icon": "circle",
            "iconColor": "#10B981",
            "type": "status",
            "filterId": "3746",
            "order": 4,
            "showCount": true
          },
          {
            "id": "3748",
            "name": "Closed",
            "key": "closed",
            "icon": "circle",
            "iconColor": "#6B7280",
            "type": "status",
            "filterId": "3748",
            "order": 5,
            "showCount": true
          },
          {
            "id": "3750",
            "name": "Cancelled",
            "key": "cancelled",
            "icon": "circle",
            "iconColor": "#EF4444",
            "type": "status",
            "filterId": "3750",
            "order": 6,
            "showCount": true
          }
        ]
      },
      {
        "id": "section-003",
        "name": "Priority",
        "key": "priority",
        "icon": "flag",
        "order": 3,
        "collapsible": true,
        "defaultExpanded": false,
        "items": [
          {
            "id": "4195",
            "name": "Critical",
            "key": "critical",
            "icon": "alert-circle",
            "iconColor": "#DC2626",
            "type": "priority",
            "filterId": "4195",
            "order": 1,
            "showCount": true
          },
          {
            "id": "4196",
            "name": "High",
            "key": "high",
            "icon": "arrow-up",
            "iconColor": "#F97316",
            "type": "priority",
            "filterId": "4196",
            "order": 2,
            "showCount": true
          },
          {
            "id": "4197",
            "name": "Medium",
            "key": "medium",
            "icon": "minus",
            "iconColor": "#EAB308",
            "type": "priority",
            "filterId": "4197",
            "order": 3,
            "showCount": true
          },
          {
            "id": "4362",
            "name": "Low",
            "key": "low",
            "icon": "arrow-down",
            "iconColor": "#22C55E",
            "type": "priority",
            "filterId": "4362",
            "order": 4,
            "showCount": true
          }
        ]
      },
      {
        "id": "section-004",
        "name": "Categories",
        "key": "categories",
        "icon": "folder",
        "order": 4,
        "collapsible": true,
        "defaultExpanded": false,
        "items": [
          {
            "id": "5932",
            "name": "Hardware",
            "key": "hardware",
            "icon": "computer",
            "type": "category",
            "filterId": "5932",
            "order": 1,
            "showCount": true,
            "children": [
              {
                "id": "6001",
                "name": "Laptop",
                "key": "laptop",
                "type": "subcategory",
                "filterId": "6001",
                "order": 1,
                "showCount": true
              },
              {
                "id": "6002",
                "name": "Desktop",
                "key": "desktop",
                "type": "subcategory",
                "filterId": "6002",
                "order": 2,
                "showCount": true
              }
            ]
          },
          {
            "id": "6358",
            "name": "Software",
            "key": "software",
            "icon": "package",
            "type": "category",
            "filterId": "6358",
            "order": 2,
            "showCount": true,
            "children": [
              {
                "id": "6359",
                "name": "Installation",
                "key": "installation",
                "type": "subcategory",
                "filterId": "6359",
                "order": 1,
                "showCount": true
              },
              {
                "id": "6360",
                "name": "License",
                "key": "license",
                "type": "subcategory",
                "filterId": "6360",
                "order": 2,
                "showCount": true
              }
            ]
          },
          {
            "id": "7440",
            "name": "Network",
            "key": "network",
            "icon": "wifi",
            "type": "category",
            "filterId": "7440",
            "order": 3,
            "showCount": true
          },
          {
            "id": "7474",
            "name": "Account",
            "key": "account",
            "icon": "user",
            "type": "category",
            "filterId": "7474",
            "order": 4,
            "showCount": true
          }
        ]
      },
      {
        "id": "section-005",
        "name": "Teams",
        "key": "teams",
        "icon": "users",
        "order": 5,
        "collapsible": true,
        "defaultExpanded": false,
        "items": [
          {
            "id": "7475",
            "name": "IT Support",
            "key": "it",
            "icon": "monitor",
            "type": "team",
            "filterId": "7475",
            "order": 1,
            "showCount": true
          },
          {
            "id": "7476",
            "name": "HR",
            "key": "hr",
            "icon": "briefcase",
            "type": "team",
            "filterId": "7476",
            "order": 2,
            "showCount": true
          },
          {
            "id": "7477",
            "name": "Operations",
            "key": "operation",
            "icon": "settings",
            "type": "team",
            "filterId": "7477",
            "order": 3,
            "showCount": true
          },
          {
            "id": "7478",
            "name": "Global",
            "key": "global",
            "icon": "globe",
            "type": "team",
            "filterId": "7478",
            "order": 4,
            "showCount": true
          }
        ]
      },
      {
        "id": "section-006",
        "name": "SLA",
        "key": "sla",
        "icon": "clock",
        "order": 6,
        "collapsible": true,
        "defaultExpanded": false,
        "items": [
          {
            "id": "7479",
            "name": "Due Today",
            "key": "due_today",
            "icon": "calendar",
            "type": "sla",
            "filterId": "7479",
            "order": 1,
            "showCount": true
          },
          {
            "id": "7480",
            "name": "Overdue",
            "key": "overdue",
            "icon": "alert-triangle",
            "iconColor": "#EF4444",
            "type": "sla",
            "filterId": "7480",
            "order": 2,
            "showCount": true
          },
          {
            "id": "7531",
            "name": "SLA Breached",
            "key": "sla_breached",
            "icon": "x-circle",
            "iconColor": "#DC2626",
            "type": "sla",
            "filterId": "7531",
            "order": 3,
            "showCount": true
          }
        ]
      },
      {
        "id": "section-007",
        "name": "Saved Filters",
        "key": "saved_filters",
        "icon": "bookmark",
        "order": 7,
        "collapsible": true,
        "defaultExpanded": false,
        "allowUserCreation": true,
        "items": [
          {
            "id": "a7069dca-b9b1-4bf5-9a41-20dd75bf6f62",
            "name": "VIP Customers",
            "key": "vip_customers",
            "icon": "star",
            "type": "custom",
            "filterId": "a7069dca-b9b1-4bf5-9a41-20dd75bf6f62",
            "order": 1,
            "showCount": true,
            "createdBy": "user-uuid",
            "isShared": true
          },
          {
            "id": "01a12ac1-8f14-4600-a4ee-c930ee4057bf",
            "name": "High Priority Unassigned",
            "key": "high_priority_unassigned",
            "icon": "filter",
            "type": "custom",
            "filterId": "01a12ac1-8f14-4600-a4ee-c930ee4057bf",
            "order": 2,
            "showCount": true,
            "createdBy": "user-uuid",
            "isShared": false
          },
          {
            "id": "004ce44d-b69d-4acb-becd-78c3359e0002",
            "name": "Unassigned > 24h",
            "key": "unassigned_24h",
            "icon": "clock",
            "type": "custom",
            "filterId": "004ce44d-b69d-4acb-becd-78c3359e0002",
            "order": 3,
            "showCount": true,
            "createdBy": "user-uuid",
            "isShared": true
          }
        ]
      }
    ],
    "quickActions": [
      {
        "id": "action-001",
        "name": "Create Ticket",
        "key": "create_ticket",
        "icon": "plus",
        "action": "create",
        "order": 1,
        "requiredRoles": ["ticket_user", "ticket_agent", "ticket_admin"]
      },
      {
        "id": "action-002",
        "name": "Service Catalog",
        "key": "service_catalog",
        "icon": "grid",
        "action": "navigate",
        "target": "/service-catalog",
        "order": 2,
        "requiredRoles": ["ticket_user", "ticket_agent", "ticket_admin"]
      },
      {
        "id": "action-003",
        "name": "Reports",
        "key": "reports",
        "icon": "bar-chart",
        "action": "navigate",
        "target": "/reports",
        "order": 3,
        "requiredRoles": ["ticket_admin", "ticket_agent_supervisor"]
      }
    ],
    "userPreferences": {
      "defaultView": "all",
      "expandedSections": ["views", "status"],
      "pinnedFilters": ["7471", "7480"],
      "lastUsedFilter": "all"
    },
    "permissions": {
      "canCreateFilter": true,
      "canShareFilter": true,
      "canDeleteFilter": true,
      "canEditMenu": false
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2025-07-10T12:00:00.000Z"
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
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access menu configuration |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist, or menu is not configured |
| `304 Not Modified` | Conditional request matched | Returned when `if-none-match` ETag matches current resource |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "MENU_NOT_CONFIGURED",
    "message": "Menu configuration not found for this module",
    "details": "Please contact your administrator to configure the ticketing menu"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **Menu Structure:** The menu is organized into hierarchical sections:
   - **Sections** — Top-level groupings (Views, Status, Priority, etc.)
   - **Items** — Individual menu entries within sections
   - **Children** — Nested items (e.g., subcategories under categories)

2. **Section Properties:**
   - `collapsible` — Whether the section can be collapsed/expanded
   - `defaultExpanded` — Initial expanded state on load
   - `allowUserCreation` — Whether users can add items to this section (for Saved Filters)

3. **Item Types:** Menu items are categorized by type:
   - `system` — Built-in system views (All Tickets, Assigned to Me)
   - `status` — Status-based filters
   - `priority` — Priority-based filters
   - `category` / `subcategory` — Category hierarchy filters
   - `team` — Team-based filters
   - `sla` — SLA and time-based filters
   - `custom` — User-created saved filters

4. **Filter ID Mapping:** Each menu item has a `filterId` that corresponds to the IDs used in the `/ticket/count` and `/ticket/list` endpoints.

5. **Icon System:** Icons use a standard icon library naming convention (e.g., Lucide, Heroicons). The `iconColor` property provides custom coloring for status/priority indicators.

6. **User Preferences:** The response includes user-specific preferences:
   - `defaultView` — Which filter to load on initial page load
   - `expandedSections` — Remembered section expansion states
   - `pinnedFilters` — Filters pinned to the top for quick access
   - `lastUsedFilter` — Most recently used filter

7. **Quick Actions:** The `quickActions` array defines primary action buttons:
   - `action: "create"` — Opens a creation form
   - `action: "navigate"` — Navigates to a different route

8. **Role-Based Visibility:** Menu items and actions can have `requiredRoles` to control visibility based on user permissions.

9. **Saved Filters:** Custom filters in the "Saved Filters" section include:
   - `createdBy` — User who created the filter
   - `isShared` — Whether the filter is visible to other users

10. **Caching:** The API supports conditional requests via `ETag` / `if-none-match` headers. Menu structure changes infrequently, so caching is recommended.

11. **Permissions:** The `permissions` object indicates what menu-related actions the current user can perform.

12. **Count Integration:** Items with `showCount: true` should display ticket counts. Use the `/ticket/count` endpoint with the corresponding `filterId` values to fetch counts.

13. **Multi-Tenancy:** The `x-tenantid` header is mandatory. Each tenant has independent menu configurations.
