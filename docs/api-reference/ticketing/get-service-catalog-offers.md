---
id: get-service-catalog-offers
title: Get Service Catalog Offers
sidebar_label: Get Service Catalog Offers
sidebar_position: 4
displayed_sidebar: integrationSidebar
description: API documentation for retrieving service catalog offers
status:
whatsPending:
---

# Get Service Catalog Offers

Retrieves the list of available service catalog offers for a tenant. Service catalog offers represent predefined service request templates that users can select when creating tickets, such as hardware requests, software installations, access requests, and other IT/HR services.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/tenant/sc/offers`

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
| `type` | string | Filter offers by type. Accepted values: `template`, `agent`, `user` | Yes |
| `module` | string | The module context. Example: `ticketing` | Yes |

---

## Request Body Schema

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v2/ticketing/tenant/sc/offers?type=template&module=ticketing' \
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
  "message": "Service catalog offers retrieved successfully",
  "data": {
    "offers": [
      {
        "id": "offer-uuid-001",
        "name": "New Laptop Request",
        "description": "Request a new laptop or desktop computer for work",
        "category": "Hardware",
        "subcategory": "Laptops",
        "icon": "laptop",
        "team": "it",
        "priority": "medium",
        "slaId": "sla-uuid-001",
        "estimatedDelivery": "5-7 business days",
        "approvalRequired": true,
        "approvalWorkflow": "manager-approval",
        "formFields": [
          {
            "id": "field-001",
            "name": "laptopType",
            "label": "Laptop Type",
            "type": "dropdown",
            "required": true,
            "options": ["Standard", "Developer", "Executive"]
          },
          {
            "id": "field-002",
            "name": "justification",
            "label": "Business Justification",
            "type": "textarea",
            "required": true
          }
        ],
        "status": "active",
        "order": 1,
        "createdAt": "2024-01-15T10:30:00.000Z",
        "updatedAt": "2025-06-20T14:22:00.000Z"
      },
      {
        "id": "offer-uuid-002",
        "name": "Software Installation",
        "description": "Request installation of approved software applications",
        "category": "Software",
        "subcategory": "Installation",
        "icon": "download",
        "team": "it",
        "priority": "low",
        "slaId": "sla-uuid-002",
        "estimatedDelivery": "1-2 business days",
        "approvalRequired": false,
        "approvalWorkflow": null,
        "formFields": [
          {
            "id": "field-003",
            "name": "softwareName",
            "label": "Software Name",
            "type": "dropdown",
            "required": true,
            "options": ["Microsoft Office", "Adobe Creative Suite", "Visual Studio Code", "Slack", "Zoom"]
          },
          {
            "id": "field-004",
            "name": "urgency",
            "label": "Urgency",
            "type": "radio",
            "required": true,
            "options": ["Normal", "Urgent"]
          }
        ],
        "status": "active",
        "order": 2,
        "createdAt": "2024-02-10T08:15:00.000Z",
        "updatedAt": "2025-05-18T11:45:00.000Z"
      },
      {
        "id": "offer-uuid-003",
        "name": "VPN Access Request",
        "description": "Request access to corporate VPN for remote work",
        "category": "Access",
        "subcategory": "Network",
        "icon": "shield",
        "team": "it",
        "priority": "high",
        "slaId": "sla-uuid-003",
        "estimatedDelivery": "24 hours",
        "approvalRequired": true,
        "approvalWorkflow": "security-approval",
        "formFields": [
          {
            "id": "field-005",
            "name": "accessDuration",
            "label": "Access Duration",
            "type": "dropdown",
            "required": true,
            "options": ["Temporary (30 days)", "Permanent"]
          },
          {
            "id": "field-006",
            "name": "reason",
            "label": "Reason for Access",
            "type": "textarea",
            "required": true
          }
        ],
        "status": "active",
        "order": 3,
        "createdAt": "2024-03-05T09:00:00.000Z",
        "updatedAt": "2025-04-12T16:30:00.000Z"
      },
      {
        "id": "offer-uuid-004",
        "name": "Employee Onboarding",
        "description": "Complete onboarding package for new employees",
        "category": "HR",
        "subcategory": "Onboarding",
        "icon": "user-plus",
        "team": "hr",
        "priority": "high",
        "slaId": "sla-uuid-004",
        "estimatedDelivery": "3-5 business days",
        "approvalRequired": true,
        "approvalWorkflow": "hr-manager-approval",
        "formFields": [
          {
            "id": "field-007",
            "name": "employeeName",
            "label": "New Employee Name",
            "type": "text",
            "required": true
          },
          {
            "id": "field-008",
            "name": "startDate",
            "label": "Start Date",
            "type": "date",
            "required": true
          },
          {
            "id": "field-009",
            "name": "department",
            "label": "Department",
            "type": "dropdown",
            "required": true,
            "options": ["Engineering", "Sales", "Marketing", "Finance", "HR", "Operations"]
          }
        ],
        "status": "active",
        "order": 4,
        "createdAt": "2024-01-20T11:00:00.000Z",
        "updatedAt": "2025-06-01T13:15:00.000Z"
      }
    ],
    "categories": [
      {
        "id": "cat-001",
        "name": "Hardware",
        "icon": "computer",
        "order": 1,
        "offerCount": 5
      },
      {
        "id": "cat-002",
        "name": "Software",
        "icon": "package",
        "order": 2,
        "offerCount": 8
      },
      {
        "id": "cat-003",
        "name": "Access",
        "icon": "key",
        "order": 3,
        "offerCount": 4
      },
      {
        "id": "cat-004",
        "name": "HR",
        "icon": "users",
        "order": 4,
        "offerCount": 6
      }
    ],
    "totalOffers": 23,
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
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access service catalog offers |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist, or no service catalog is configured |
| `304 Not Modified` | Conditional request matched | Returned when `if-none-match` ETag matches current resource (cached response is still valid) |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "TENANT_NOT_FOUND",
    "message": "The specified tenant does not exist or has no service catalog configured",
    "details": "Tenant ID: c644c4a5-df9e-4763-93b0-f701b0268d9e"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **Service Catalog:** Service Catalog (SC) offers are predefined request templates that streamline the ticket creation process by providing standardized forms and workflows.

2. **Offer Structure:** Each offer includes:
   - **Basic info:** Name, description, category, icon
   - **Assignment:** Team, priority, SLA
   - **Workflow:** Approval requirements, estimated delivery
   - **Form fields:** Dynamic fields for capturing request details

3. **Form Field Types:** Supported field types include:
   - `text` — Single-line text input
   - `textarea` — Multi-line text input
   - `dropdown` — Select from predefined options
   - `radio` — Single selection from options
   - `checkbox` — Multiple selection
   - `date` — Date picker
   - `datetime` — Date and time picker
   - `file` — File attachment
   - `number` — Numeric input

4. **Caching:** The API supports conditional requests via `ETag` / `if-none-match` headers. A `304 Not Modified` response indicates the cached version is still valid, reducing bandwidth.

5. **Categories:** Offers are grouped into categories for easier navigation. The response includes both individual offers and category summaries.

6. **Approval Workflows:** Offers with `approvalRequired: true` will trigger the specified approval workflow when a ticket is created using that offer.

7. **Team-Based Filtering:** Offers may be filtered based on the user's team membership from the JWT token.

8. **Status Values:** Offers can have the following statuses:
   - `active` — Available for users to select
   - `inactive` — Temporarily disabled
   - `draft` — Not yet published
   - `archived` — No longer available

9. **Ordering:** The `order` field determines the display sequence of offers and categories in the UI.

10. **Multi-Tenancy:** The `x-tenantid` header is mandatory. Each tenant has its own independent service catalog configuration.
