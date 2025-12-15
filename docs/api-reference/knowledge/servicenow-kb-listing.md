---
id: servicenow-kb-listing
title: ServiceNow List Knowledge Bases
sidebar_label: ServiceNow List KBs
sidebar_position: 4
displayed_sidebar: integrationSidebar
description: API documentation for listing ServiceNow knowledge bases
status:
whatsPending:
---

# ServiceNow List Knowledge Bases

List available knowledge bases from ServiceNow. This endpoint retrieves all knowledge bases configured in a ServiceNow instance that can be used for knowledge ingestion into the platform.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/servicenow/kb-listing`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `content-type` | Must be `application/json` | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |

---

## Path Parameters

None.

---

## Query Parameters

None.

---

## Request Body Schema

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `username` | string | ServiceNow username for authentication | Yes |
| `password` | string | ServiceNow password for authentication | Yes |
| `client_id` | string | ServiceNow OAuth Client ID | Yes |
| `client_secret` | string | ServiceNow OAuth Client Secret | Yes |
| `refresh_token` | string | ServiceNow OAuth Refresh Token | Yes |
| `servicenow_domain` | string | ServiceNow instance domain (e.g., `instance.service-now.com`) | Yes |

---

## Request Body Example

```json
{
  "username": "string",
  "password": "string",
  "client_id": "string",
  "client_secret": "string",
  "refresh_token": "string",
  "servicenow_domain": "string"
}
```

**Production Example:**

```json
{
  "username": "{{servicenow_username}}",
  "password": "{{servicenow_password}}",
  "client_id": "{{servicenow_client_id}}",
  "client_secret": "{{servicenow_client_secret}}",
  "refresh_token": "{{servicenow_refresh_token}}",
  "servicenow_domain": "{{servicenow_domain}}"
}
```

**Development Instance:**

```json
{
  "username": "{{servicenow_username}}",
  "password": "{{servicenow_password}}",
  "client_id": "{{servicenow_client_id}}",
  "client_secret": "{{servicenow_client_secret}}",
  "refresh_token": "{{servicenow_refresh_token}}",
  "servicenow_domain": "{{servicenow_domain}}"
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/servicenow/kb-listing' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "username": "{{servicenow_username}}",
    "password": "{{servicenow_password}}",
    "client_id": "{{servicenow_client_id}}",
    "client_secret": "{{servicenow_client_secret}}",
    "refresh_token": "{{servicenow_refresh_token}}",
    "servicenow_domain": "{{servicenow_domain}}"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Knowledge bases retrieved successfully",
  "data": {
    "knowledge_bases": [
      {
        "sys_id": "kb0001",
        "title": "IT Support Knowledge Base",
        "description": "Knowledge articles for IT support",
        "article_count": 1250,
        "active": true
      },
      {
        "sys_id": "kb0002",
        "title": "HR Policies",
        "description": "Human resources policies and procedures",
        "article_count": 340,
        "active": true
      },
      {
        "sys_id": "kb0003",
        "title": "Product Documentation",
        "description": "Product manuals and guides",
        "article_count": 890,
        "active": true
      }
    ],
    "total": 3
  },
  "timestamp": "2025-12-12T11:00:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token or ServiceNow credentials are invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to access ServiceNow KBs |
| `422 Unprocessable Entity` | Validation error | Invalid field values or configuration |
| `500 Internal Server Error` | Server error | Unexpected server-side error |
| `502 Bad Gateway` | ServiceNow connection failed | Unable to connect to ServiceNow instance |

**Example Validation Error Response (422):**

```json
{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

**Example Error Response:**

```json
{
  "detail": [
    {
      "loc": ["body", "servicenow_domain"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Notes

1. **ServiceNow Credentials:** You need valid ServiceNow credentials with access to the Knowledge Management module.

2. **OAuth Configuration:** The `client_id`, `client_secret`, and `refresh_token` are obtained from ServiceNow OAuth application configuration.

3. **Domain Format:** The `servicenow_domain` should be just the domain without `https://` (e.g., `instance.service-now.com`).

4. **Required Roles:** The ServiceNow user typically needs the `knowledge` or `knowledge_admin` role.

5. **API Access:** Ensure the ServiceNow instance has REST API access enabled.

6. **Refresh Token:** The refresh token is used to obtain access tokens for API calls to ServiceNow.

7. **Rate Limiting:** ServiceNow may impose rate limits on API calls. Handle accordingly.

8. **Related Endpoints:**
    - `POST /v2/servicenow/kb-upload` — Ingest ServiceNow knowledge articles
    - `POST /v2/servicenow/kb-delete` — Delete ServiceNow knowledge content
    - `GET /v2/servicenow/kb-status` — Check ingestion status
