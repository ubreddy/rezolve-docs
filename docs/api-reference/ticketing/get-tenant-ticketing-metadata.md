---
id: get-tenant-ticketing-metadata
title: Get Tenant Ticketing Metadata
sidebar_label: Get Tenant Ticketing Metadata
sidebar_position: 6
displayed_sidebar: integrationSidebar
description: API documentation for retrieving tenant ticketing metadata configuration
status:
whatsPending:
---

# Get Tenant Ticketing Metadata

Retrieves the complete metadata configuration for a tenant's ticketing module. This includes all configurable options such as statuses, priorities, categories, custom fields, SLA definitions, teams, and other tenant-specific settings used to drive the ticketing UI and business logic.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/tenant/meta`

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
| `type` | string | Filter metadata by type. Accepted values: `template`, `agent`, `user` | Yes |
| `module` | string | The module context. Example: `ticketing` | Yes |

---

## Request Body Schema

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v2/ticketing/tenant/meta?type=template&module=ticketing' \
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
  "message": "Tenant metadata retrieved successfully",
  "data": {
    "tenantId": "c644c4a5-df9e-4763-93b0-f701b0268d9e",
    "module": "ticketing",
    "type": "template",
    "statuses": [
      {
        "id": "status-001",
        "name": "Open",
        "key": "open",
        "color": "#3B82F6",
        "order": 1,
        "isDefault": true,
        "isTerminal": false,
        "category": "new"
      },
      {
        "id": "status-002",
        "name": "In Progress",
        "key": "in_progress",
        "color": "#F59E0B",
        "order": 2,
        "isDefault": false,
        "isTerminal": false,
        "category": "active"
      },
      {
        "id": "status-003",
        "name": "Pending",
        "key": "pending",
        "color": "#8B5CF6",
        "order": 3,
        "isDefault": false,
        "isTerminal": false,
        "category": "hold"
      },
      {
        "id": "status-004",
        "name": "Resolved",
        "key": "resolved",
        "color": "#10B981",
        "order": 4,
        "isDefault": false,
        "isTerminal": true,
        "category": "done"
      },
      {
        "id": "status-005",
        "name": "Closed",
        "key": "closed",
        "color": "#6B7280",
        "order": 5,
        "isDefault": false,
        "isTerminal": true,
        "category": "done"
      }
    ],
    "priorities": [
      {
        "id": "priority-001",
        "name": "Critical",
        "key": "critical",
        "color": "#DC2626",
        "icon": "alert-circle",
        "order": 1,
        "slaMultiplier": 0.5
      },
      {
        "id": "priority-002",
        "name": "High",
        "key": "high",
        "color": "#F97316",
        "icon": "arrow-up",
        "order": 2,
        "slaMultiplier": 0.75
      },
      {
        "id": "priority-003",
        "name": "Medium",
        "key": "medium",
        "color": "#EAB308",
        "icon": "minus",
        "order": 3,
        "slaMultiplier": 1.0
      },
      {
        "id": "priority-004",
        "name": "Low",
        "key": "low",
        "color": "#22C55E",
        "icon": "arrow-down",
        "order": 4,
        "slaMultiplier": 1.5
      }
    ],
    "categories": [
      {
        "id": "cat-001",
        "name": "Hardware",
        "key": "hardware",
        "icon": "computer",
        "order": 1,
        "subcategories": [
          {
            "id": "subcat-001",
            "name": "Laptop",
            "key": "laptop"
          },
          {
            "id": "subcat-002",
            "name": "Desktop",
            "key": "desktop"
          },
          {
            "id": "subcat-003",
            "name": "Peripherals",
            "key": "peripherals"
          }
        ]
      },
      {
        "id": "cat-002",
        "name": "Software",
        "key": "software",
        "icon": "package",
        "order": 2,
        "subcategories": [
          {
            "id": "subcat-004",
            "name": "Installation",
            "key": "installation"
          },
          {
            "id": "subcat-005",
            "name": "License",
            "key": "license"
          },
          {
            "id": "subcat-006",
            "name": "Bug/Issue",
            "key": "bug"
          }
        ]
      },
      {
        "id": "cat-003",
        "name": "Network",
        "key": "network",
        "icon": "wifi",
        "order": 3,
        "subcategories": [
          {
            "id": "subcat-007",
            "name": "VPN",
            "key": "vpn"
          },
          {
            "id": "subcat-008",
            "name": "Connectivity",
            "key": "connectivity"
          },
          {
            "id": "subcat-009",
            "name": "Access",
            "key": "access"
          }
        ]
      },
      {
        "id": "cat-004",
        "name": "Account",
        "key": "account",
        "icon": "user",
        "order": 4,
        "subcategories": [
          {
            "id": "subcat-010",
            "name": "Password Reset",
            "key": "password_reset"
          },
          {
            "id": "subcat-011",
            "name": "Permissions",
            "key": "permissions"
          },
          {
            "id": "subcat-012",
            "name": "New Account",
            "key": "new_account"
          }
        ]
      }
    ],
    "teams": [
      {
        "id": "team-001",
        "name": "IT Support",
        "key": "it",
        "description": "Information Technology support team",
        "email": "it-support@company.com",
        "isDefault": true
      },
      {
        "id": "team-002",
        "name": "HR",
        "key": "hr",
        "description": "Human Resources team",
        "email": "hr@company.com",
        "isDefault": false
      },
      {
        "id": "team-003",
        "name": "Operations",
        "key": "operation",
        "description": "Operations and facilities team",
        "email": "operations@company.com",
        "isDefault": false
      },
      {
        "id": "team-004",
        "name": "Global",
        "key": "global",
        "description": "Cross-functional global team",
        "email": "global@company.com",
        "isDefault": false
      }
    ],
    "customFields": [
      {
        "id": "cf-001",
        "name": "Asset Tag",
        "key": "assetTag",
        "type": "text",
        "required": false,
        "showInList": true,
        "showInForm": true,
        "categories": ["hardware"]
      },
      {
        "id": "cf-002",
        "name": "Department",
        "key": "department",
        "type": "dropdown",
        "required": true,
        "showInList": true,
        "showInForm": true,
        "options": ["Engineering", "Sales", "Marketing", "Finance", "HR", "Operations"],
        "categories": null
      },
      {
        "id": "cf-003",
        "name": "Impact Level",
        "key": "impactLevel",
        "type": "radio",
        "required": false,
        "showInList": false,
        "showInForm": true,
        "options": ["Individual", "Team", "Department", "Organization"],
        "categories": null
      },
      {
        "id": "cf-004",
        "name": "Affected Users Count",
        "key": "affectedUsersCount",
        "type": "number",
        "required": false,
        "showInList": false,
        "showInForm": true,
        "min": 1,
        "max": 10000,
        "categories": null
      }
    ],
    "slaConfigurations": [
      {
        "id": "sla-001",
        "name": "Standard SLA",
        "key": "standard",
        "isDefault": true,
        "responseTime": {
          "critical": 30,
          "high": 60,
          "medium": 240,
          "low": 480
        },
        "resolutionTime": {
          "critical": 240,
          "high": 480,
          "medium": 1440,
          "low": 2880
        },
        "businessHoursOnly": true,
        "timezone": "America/New_York"
      },
      {
        "id": "sla-002",
        "name": "Premium SLA",
        "key": "premium",
        "isDefault": false,
        "responseTime": {
          "critical": 15,
          "high": 30,
          "medium": 120,
          "low": 240
        },
        "resolutionTime": {
          "critical": 120,
          "high": 240,
          "medium": 720,
          "low": 1440
        },
        "businessHoursOnly": false,
        "timezone": "UTC"
      }
    ],
    "workflowSettings": {
      "autoAssignment": true,
      "autoAssignmentMethod": "round_robin",
      "allowReopen": true,
      "reopenWindowDays": 7,
      "requireCategory": true,
      "requireDescription": true,
      "enableAttachments": true,
      "maxAttachmentSize": 10485760,
      "allowedAttachmentTypes": ["pdf", "doc", "docx", "xls", "xlsx", "png", "jpg", "jpeg", "gif", "txt", "csv"],
      "enableWatchers": true,
      "enableRelatedTickets": true,
      "enableMerge": true
    },
    "notificationSettings": {
      "emailNotifications": true,
      "slackNotifications": true,
      "teamsNotifications": false,
      "notifyOnCreate": true,
      "notifyOnUpdate": true,
      "notifyOnAssignment": true,
      "notifyOnStatusChange": true,
      "notifyOnComment": true,
      "notifyOnSLABreach": true
    },
    "uiSettings": {
      "ticketNumberPrefix": "TKT",
      "ticketNumberFormat": "PREFIX-YYYY-NNNNNN",
      "dateFormat": "MM/DD/YYYY",
      "timeFormat": "12h",
      "defaultView": "list",
      "itemsPerPage": 25,
      "enableKanbanView": true,
      "enableCalendarView": true,
      "showClosedTickets": false,
      "defaultClosedTicketsDays": 30
    },
    "features": {
      "serviceCatalog": true,
      "knowledgeBase": true,
      "approvalWorkflows": true,
      "timeTracking": true,
      "customerPortal": true,
      "aiSuggestions": true,
      "sentimentAnalysis": true,
      "autoRouting": true
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
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access tenant metadata |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist, or ticketing module is not configured |
| `304 Not Modified` | Conditional request matched | Returned when `if-none-match` ETag matches current resource (cached response is still valid) |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "MODULE_NOT_CONFIGURED",
    "message": "Ticketing module is not configured for this tenant",
    "details": "Please contact your administrator to enable the ticketing module"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **Metadata Purpose:** This endpoint provides all configuration data needed to render the ticketing UI and enforce business rules. It should be called once on application load and cached client-side.

2. **Status Categories:** Statuses are grouped into categories for reporting:
   - `new` — Newly created tickets
   - `active` — Work in progress
   - `hold` — Waiting on external input
   - `done` — Completed tickets

3. **Terminal Statuses:** Statuses with `isTerminal: true` represent end states (Resolved, Closed) where tickets are considered complete.

4. **SLA Time Units:** Response and resolution times in SLA configurations are specified in **minutes**.

5. **Custom Field Types:** Supported custom field types include:
   - `text` — Single-line text input
   - `textarea` — Multi-line text input
   - `dropdown` — Select from predefined options
   - `radio` — Single selection from options
   - `checkbox` — Multiple selection
   - `date` — Date picker
   - `datetime` — Date and time picker
   - `number` — Numeric input
   - `file` — File attachment

6. **Category-Specific Fields:** Custom fields can be restricted to specific categories using the `categories` array. A `null` value means the field applies to all categories.

7. **Attachment Limits:** The `maxAttachmentSize` is specified in bytes (10485760 bytes = 10 MB).

8. **Ticket Number Format:** The `ticketNumberFormat` supports placeholders:
   - `PREFIX` — Configured prefix (e.g., TKT)
   - `YYYY` — Four-digit year
   - `MM` — Two-digit month
   - `DD` — Two-digit day
   - `NNNNNN` — Sequential number with padding

9. **Caching Strategy:** This endpoint returns a large payload. Use `ETag`/`if-none-match` headers for conditional requests. A `304 Not Modified` response avoids re-downloading unchanged data.

10. **Feature Flags:** The `features` object indicates which optional features are enabled for the tenant. Use these flags to conditionally render UI elements.

11. **Business Hours:** When `businessHoursOnly` is `true` in SLA configurations, SLA timers only count during configured business hours.

12. **Multi-Tenancy:** The `x-tenantid` header is mandatory. Each tenant has completely independent metadata configurations.
