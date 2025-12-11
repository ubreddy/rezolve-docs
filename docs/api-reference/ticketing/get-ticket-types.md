---
id: get-ticket-types
title: Get Ticket Types
sidebar_label: Get Ticket Types
sidebar_position: 9
displayed_sidebar: integrationSidebar
description: API documentation for retrieving ticket type configurations
status:
whatsPending:
---

# Get Ticket Types

Retrieves ticket type configurations for the tenant. Ticket types define different categories of tickets (e.g., Incident, Service Request, Problem, Change) along with their custom fields, workflows, action permissions, and filter configurations. This endpoint supports OData-style query parameters for field selection and pagination.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/ticket-type`

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
| `$select` | string | Comma-separated list of fields to include in response (OData-style). Example: `id,name,properties,fields` | No |
| `$top` | integer | Maximum number of records to return (pagination limit). Default varies by implementation | No |
| `$skip` | integer | Number of records to skip (pagination offset). Default: 0 | No |
| `type` | string | Filter by type. Accepted values: `template`, `agent`, `user` | Yes |
| `module` | string | The module context. Example: `ticketing` | Yes |

### Supported $select Fields

| Field | Description |
|-------|-------------|
| `id` | Unique identifier for the ticket type |
| `name` | Display name of the ticket type |
| `properties` | Configuration properties and settings |
| `fields` | Custom field definitions for this ticket type |
| `workflow` | Workflow configuration (statuses, transitions) |
| `action_permissions` | Role-based action permissions |
| `filters` | Predefined filter configurations |
| `v1_name` | Legacy v1 API name reference |

---

## Request Body Schema

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v2/ticketing/ticket-type?$select=id,name,properties,fields,workflow,action_permissions,filters,v1_name&$top=10000&$skip=0&type=template&module=ticketing' \
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
  "message": "Ticket types retrieved successfully",
  "data": {
    "value": [
      {
        "id": "ticket-type-001",
        "name": "Incident",
        "v1_name": "incident",
        "properties": {
          "icon": "alert-circle",
          "color": "#EF4444",
          "description": "Report an issue or outage affecting services",
          "isDefault": true,
          "order": 1,
          "prefix": "INC",
          "slaEnabled": true,
          "approvalRequired": false
        },
        "fields": [
          {
            "id": "field-001",
            "name": "impact",
            "label": "Impact",
            "type": "dropdown",
            "required": true,
            "order": 1,
            "options": [
              {"value": "individual", "label": "Individual"},
              {"value": "team", "label": "Team"},
              {"value": "department", "label": "Department"},
              {"value": "organization", "label": "Organization"}
            ],
            "defaultValue": "individual",
            "visibleTo": ["ticket_user", "ticket_agent", "ticket_admin"]
          },
          {
            "id": "field-002",
            "name": "urgency",
            "label": "Urgency",
            "type": "dropdown",
            "required": true,
            "order": 2,
            "options": [
              {"value": "low", "label": "Low"},
              {"value": "medium", "label": "Medium"},
              {"value": "high", "label": "High"},
              {"value": "critical", "label": "Critical"}
            ],
            "defaultValue": "medium",
            "visibleTo": ["ticket_user", "ticket_agent", "ticket_admin"]
          },
          {
            "id": "field-003",
            "name": "affectedService",
            "label": "Affected Service",
            "type": "dropdown",
            "required": false,
            "order": 3,
            "dataSource": "services",
            "visibleTo": ["ticket_agent", "ticket_admin"]
          }
        ],
        "workflow": {
          "id": "workflow-001",
          "name": "Incident Workflow",
          "statuses": [
            {
              "id": "status-001",
              "name": "New",
              "key": "new",
              "color": "#3B82F6",
              "isInitial": true,
              "isTerminal": false
            },
            {
              "id": "status-002",
              "name": "In Progress",
              "key": "in_progress",
              "color": "#F59E0B",
              "isInitial": false,
              "isTerminal": false
            },
            {
              "id": "status-003",
              "name": "Pending",
              "key": "pending",
              "color": "#8B5CF6",
              "isInitial": false,
              "isTerminal": false
            },
            {
              "id": "status-004",
              "name": "Resolved",
              "key": "resolved",
              "color": "#10B981",
              "isInitial": false,
              "isTerminal": true
            },
            {
              "id": "status-005",
              "name": "Closed",
              "key": "closed",
              "color": "#6B7280",
              "isInitial": false,
              "isTerminal": true
            }
          ],
          "transitions": [
            {
              "id": "trans-001",
              "name": "Start Work",
              "from": ["new"],
              "to": "in_progress",
              "requiredFields": [],
              "allowedRoles": ["ticket_agent", "ticket_admin"]
            },
            {
              "id": "trans-002",
              "name": "Put on Hold",
              "from": ["new", "in_progress"],
              "to": "pending",
              "requiredFields": ["pendingReason"],
              "allowedRoles": ["ticket_agent", "ticket_admin"]
            },
            {
              "id": "trans-003",
              "name": "Resume",
              "from": ["pending"],
              "to": "in_progress",
              "requiredFields": [],
              "allowedRoles": ["ticket_agent", "ticket_admin"]
            },
            {
              "id": "trans-004",
              "name": "Resolve",
              "from": ["in_progress"],
              "to": "resolved",
              "requiredFields": ["resolution"],
              "allowedRoles": ["ticket_agent", "ticket_admin"]
            },
            {
              "id": "trans-005",
              "name": "Close",
              "from": ["resolved"],
              "to": "closed",
              "requiredFields": [],
              "allowedRoles": ["ticket_user", "ticket_agent", "ticket_admin"]
            },
            {
              "id": "trans-006",
              "name": "Reopen",
              "from": ["resolved", "closed"],
              "to": "in_progress",
              "requiredFields": ["reopenReason"],
              "allowedRoles": ["ticket_user", "ticket_agent", "ticket_admin"],
              "conditions": {
                "maxDaysAfterClose": 7
              }
            }
          ]
        },
        "action_permissions": {
          "create": ["ticket_user", "ticket_agent", "ticket_admin"],
          "view": ["ticket_user", "ticket_agent", "ticket_admin"],
          "edit": ["ticket_agent", "ticket_admin"],
          "delete": ["ticket_admin"],
          "assign": ["ticket_agent", "ticket_admin"],
          "reassign": ["ticket_agent_supervisor", "ticket_admin"],
          "comment": ["ticket_user", "ticket_agent", "ticket_admin"],
          "attach": ["ticket_user", "ticket_agent", "ticket_admin"],
          "merge": ["ticket_admin"],
          "link": ["ticket_agent", "ticket_admin"],
          "escalate": ["ticket_agent", "ticket_admin"],
          "export": ["ticket_agent", "ticket_admin"]
        },
        "filters": [
          {
            "id": "filter-001",
            "name": "My Incidents",
            "key": "my_incidents",
            "conditions": {
              "assignee": "$currentUser"
            },
            "isSystem": true
          },
          {
            "id": "filter-002",
            "name": "High Impact",
            "key": "high_impact",
            "conditions": {
              "fields.impact": {"$in": ["department", "organization"]}
            },
            "isSystem": true
          },
          {
            "id": "filter-003",
            "name": "Critical Urgency",
            "key": "critical_urgency",
            "conditions": {
              "fields.urgency": "critical"
            },
            "isSystem": true
          }
        ]
      },
      {
        "id": "ticket-type-002",
        "name": "Service Request",
        "v1_name": "service_request",
        "properties": {
          "icon": "file-text",
          "color": "#3B82F6",
          "description": "Request a new service, access, or resource",
          "isDefault": false,
          "order": 2,
          "prefix": "SR",
          "slaEnabled": true,
          "approvalRequired": true
        },
        "fields": [
          {
            "id": "field-004",
            "name": "requestType",
            "label": "Request Type",
            "type": "dropdown",
            "required": true,
            "order": 1,
            "options": [
              {"value": "hardware", "label": "Hardware"},
              {"value": "software", "label": "Software"},
              {"value": "access", "label": "Access"},
              {"value": "other", "label": "Other"}
            ],
            "visibleTo": ["ticket_user", "ticket_agent", "ticket_admin"]
          },
          {
            "id": "field-005",
            "name": "justification",
            "label": "Business Justification",
            "type": "textarea",
            "required": true,
            "order": 2,
            "maxLength": 2000,
            "visibleTo": ["ticket_user", "ticket_agent", "ticket_admin"]
          },
          {
            "id": "field-006",
            "name": "requiredBy",
            "label": "Required By Date",
            "type": "date",
            "required": false,
            "order": 3,
            "minDate": "today",
            "visibleTo": ["ticket_user", "ticket_agent", "ticket_admin"]
          }
        ],
        "workflow": {
          "id": "workflow-002",
          "name": "Service Request Workflow",
          "statuses": [
            {
              "id": "status-010",
              "name": "Submitted",
              "key": "submitted",
              "color": "#3B82F6",
              "isInitial": true,
              "isTerminal": false
            },
            {
              "id": "status-011",
              "name": "Pending Approval",
              "key": "pending_approval",
              "color": "#F59E0B",
              "isInitial": false,
              "isTerminal": false
            },
            {
              "id": "status-012",
              "name": "Approved",
              "key": "approved",
              "color": "#10B981",
              "isInitial": false,
              "isTerminal": false
            },
            {
              "id": "status-013",
              "name": "Rejected",
              "key": "rejected",
              "color": "#EF4444",
              "isInitial": false,
              "isTerminal": true
            },
            {
              "id": "status-014",
              "name": "Fulfilled",
              "key": "fulfilled",
              "color": "#10B981",
              "isInitial": false,
              "isTerminal": true
            },
            {
              "id": "status-015",
              "name": "Cancelled",
              "key": "cancelled",
              "color": "#6B7280",
              "isInitial": false,
              "isTerminal": true
            }
          ],
          "transitions": [
            {
              "id": "trans-010",
              "name": "Submit for Approval",
              "from": ["submitted"],
              "to": "pending_approval",
              "requiredFields": [],
              "allowedRoles": ["ticket_agent", "ticket_admin"],
              "triggerApproval": true
            },
            {
              "id": "trans-011",
              "name": "Approve",
              "from": ["pending_approval"],
              "to": "approved",
              "requiredFields": [],
              "allowedRoles": ["approver", "ticket_admin"]
            },
            {
              "id": "trans-012",
              "name": "Reject",
              "from": ["pending_approval"],
              "to": "rejected",
              "requiredFields": ["rejectionReason"],
              "allowedRoles": ["approver", "ticket_admin"]
            },
            {
              "id": "trans-013",
              "name": "Fulfill",
              "from": ["approved"],
              "to": "fulfilled",
              "requiredFields": ["fulfillmentNotes"],
              "allowedRoles": ["ticket_agent", "ticket_admin"]
            },
            {
              "id": "trans-014",
              "name": "Cancel",
              "from": ["submitted", "pending_approval", "approved"],
              "to": "cancelled",
              "requiredFields": ["cancellationReason"],
              "allowedRoles": ["ticket_user", "ticket_agent", "ticket_admin"]
            }
          ]
        },
        "action_permissions": {
          "create": ["ticket_user", "ticket_agent", "ticket_admin"],
          "view": ["ticket_user", "ticket_agent", "ticket_admin"],
          "edit": ["ticket_agent", "ticket_admin"],
          "delete": ["ticket_admin"],
          "assign": ["ticket_agent", "ticket_admin"],
          "approve": ["approver", "ticket_admin"],
          "reject": ["approver", "ticket_admin"],
          "comment": ["ticket_user", "ticket_agent", "ticket_admin"],
          "attach": ["ticket_user", "ticket_agent", "ticket_admin"],
          "cancel": ["ticket_user", "ticket_agent", "ticket_admin"]
        },
        "filters": [
          {
            "id": "filter-010",
            "name": "Pending My Approval",
            "key": "pending_my_approval",
            "conditions": {
              "status": "pending_approval",
              "approver": "$currentUser"
            },
            "isSystem": true
          },
          {
            "id": "filter-011",
            "name": "My Requests",
            "key": "my_requests",
            "conditions": {
              "requester": "$currentUser"
            },
            "isSystem": true
          }
        ]
      },
      {
        "id": "ticket-type-003",
        "name": "Problem",
        "v1_name": "problem",
        "properties": {
          "icon": "search",
          "color": "#8B5CF6",
          "description": "Root cause analysis for recurring incidents",
          "isDefault": false,
          "order": 3,
          "prefix": "PRB",
          "slaEnabled": false,
          "approvalRequired": false
        },
        "fields": [
          {
            "id": "field-007",
            "name": "rootCause",
            "label": "Root Cause",
            "type": "textarea",
            "required": false,
            "order": 1,
            "visibleTo": ["ticket_agent", "ticket_admin"]
          },
          {
            "id": "field-008",
            "name": "workaround",
            "label": "Workaround",
            "type": "textarea",
            "required": false,
            "order": 2,
            "visibleTo": ["ticket_agent", "ticket_admin"]
          },
          {
            "id": "field-009",
            "name": "relatedIncidents",
            "label": "Related Incidents",
            "type": "multiselect",
            "required": false,
            "order": 3,
            "dataSource": "tickets",
            "dataSourceFilter": {"ticketType": "incident"},
            "visibleTo": ["ticket_agent", "ticket_admin"]
          }
        ],
        "workflow": {
          "id": "workflow-003",
          "name": "Problem Workflow",
          "statuses": [
            {"id": "status-020", "name": "Open", "key": "open", "color": "#3B82F6", "isInitial": true, "isTerminal": false},
            {"id": "status-021", "name": "Under Investigation", "key": "under_investigation", "color": "#F59E0B", "isInitial": false, "isTerminal": false},
            {"id": "status-022", "name": "Known Error", "key": "known_error", "color": "#8B5CF6", "isInitial": false, "isTerminal": false},
            {"id": "status-023", "name": "Resolved", "key": "resolved", "color": "#10B981", "isInitial": false, "isTerminal": true},
            {"id": "status-024", "name": "Closed", "key": "closed", "color": "#6B7280", "isInitial": false, "isTerminal": true}
          ],
          "transitions": [
            {"id": "trans-020", "name": "Start Investigation", "from": ["open"], "to": "under_investigation", "allowedRoles": ["ticket_agent", "ticket_admin"]},
            {"id": "trans-021", "name": "Mark as Known Error", "from": ["under_investigation"], "to": "known_error", "requiredFields": ["rootCause", "workaround"], "allowedRoles": ["ticket_agent", "ticket_admin"]},
            {"id": "trans-022", "name": "Resolve", "from": ["under_investigation", "known_error"], "to": "resolved", "requiredFields": ["resolution"], "allowedRoles": ["ticket_agent", "ticket_admin"]},
            {"id": "trans-023", "name": "Close", "from": ["resolved"], "to": "closed", "allowedRoles": ["ticket_admin"]}
          ]
        },
        "action_permissions": {
          "create": ["ticket_agent", "ticket_admin"],
          "view": ["ticket_agent", "ticket_admin"],
          "edit": ["ticket_agent", "ticket_admin"],
          "delete": ["ticket_admin"],
          "linkIncident": ["ticket_agent", "ticket_admin"]
        },
        "filters": [
          {
            "id": "filter-020",
            "name": "Known Errors",
            "key": "known_errors",
            "conditions": {"status": "known_error"},
            "isSystem": true
          }
        ]
      }
    ],
    "@odata.count": 3
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid query parameters | Occurs when `$select`, `$top`, or `$skip` contain invalid values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access ticket type configurations |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist |
| `304 Not Modified` | Conditional request matched | Returned when `if-none-match` ETag matches current resource |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "INVALID_SELECT_FIELD",
    "message": "Invalid field in $select parameter",
    "details": "Field 'invalid_field' is not a valid selectable field"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **OData-Style Query Parameters:** This endpoint supports OData-style query parameters:
   - `$select` — Specify which fields to return (reduces payload size)
   - `$top` — Limit the number of results (pagination)
   - `$skip` — Skip a number of results (pagination offset)

2. **Ticket Type Structure:** Each ticket type defines:
   - **Properties** — Basic configuration (icon, color, prefix, SLA/approval settings)
   - **Fields** — Custom fields specific to this ticket type
   - **Workflow** — Status definitions and allowed transitions
   - **Action Permissions** — Role-based access control for actions
   - **Filters** — Predefined filters for this ticket type

3. **Common Ticket Types:**
   - `Incident` — For issues and outages
   - `Service Request` — For service/access requests (often with approvals)
   - `Problem` — For root cause analysis
   - `Change` — For change management (not shown in example)

4. **Field Types:** Custom fields support various types:
   - `text` — Single-line text
   - `textarea` — Multi-line text
   - `dropdown` — Single selection
   - `multiselect` — Multiple selection
   - `date` — Date picker
   - `datetime` — Date and time picker
   - `number` — Numeric input
   - `checkbox` — Boolean
   - `file` — File attachment

5. **Dynamic Data Sources:** Fields with `dataSource` pull options from other entities (e.g., services, users, tickets).

6. **Workflow Transitions:** Each transition defines:
   - `from` — Array of source statuses
   - `to` — Target status
   - `requiredFields` — Fields that must be filled during transition
   - `allowedRoles` — Roles permitted to execute the transition
   - `conditions` — Additional business rules

7. **v1_name Field:** The `v1_name` provides backward compatibility with v1 API references.

8. **Large Payload Warning:** With `$top=10000`, this endpoint can return a large payload. Use `$select` to limit fields and reduce response size.

9. **Caching:** The API supports conditional requests via `ETag` / `if-none-match` headers. Ticket type configurations change infrequently, so caching is recommended.

10. **Role-Based Visibility:** Some fields have `visibleTo` restrictions, showing only to specified roles.

11. **Approval Workflows:** Ticket types with `approvalRequired: true` automatically trigger approval workflows on specific transitions.

12. **Multi-Tenancy:** The `x-tenantid` header is mandatory. Each tenant has independent ticket type configurations.
