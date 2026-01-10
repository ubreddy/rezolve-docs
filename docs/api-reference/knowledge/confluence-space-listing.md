---
id: confluence-space-listing
title: Confluence List Spaces
sidebar_label: Confluence List Spaces
sidebar_position: 12
displayed_sidebar: integrationSidebar
description: API documentation for listing Confluence spaces
status:
whatsPending:
---

# Confluence List Spaces

List all available Confluence spaces. This endpoint retrieves a list of spaces from the connected Confluence instance that can be used for content ingestion.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/confluence/space-listing`

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
| `instance_url` | string | Confluence instance API URL | Yes |
| `web_url_instance` | string | Confluence web URL for the instance | Yes |
| `username` | string | Confluence username or email | Yes |
| `api_token` | string | Confluence API token for authentication | Yes |

---

## Request Body Example

```json
{
  "instance_url": "string",
  "web_url_instance": "string",
  "username": "string",
  "api_token": "string"
}
```

**Production Example:**

```json
{
  "instance_url": "{{confluence_instance_url}}",
  "web_url_instance": "{{confluence_web_url}}",
  "username": "{{confluence_username}}",
  "api_token": "{{confluence_api_token}}"
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/confluence/space-listing' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "instance_url": "{{confluence_instance_url}}",
    "web_url_instance": "{{confluence_web_url}}",
    "username": "{{confluence_username}}",
    "api_token": "{{confluence_api_token}}"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
"string"
```

**Example Response:**

```json
{
  "spaces": [
    {
      "key": "KB",
      "name": "Knowledge Base",
      "type": "global",
      "status": "current"
    },
    {
      "key": "IT",
      "name": "IT Documentation",
      "type": "global",
      "status": "current"
    },
    {
      "key": "HR",
      "name": "HR Policies",
      "type": "global",
      "status": "current"
    }
  ]
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission or Confluence access denied |
| `422 Unprocessable Entity` | Validation error | Invalid field values or configuration |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

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
      "loc": ["body", "api_token"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Notes

1. **Confluence API Token:** Generate an API token from your Atlassian account settings at https://id.atlassian.com/manage-profile/security/api-tokens.

2. **Instance URL:** The `instance_url` should point to the Confluence REST API endpoint (e.g., `https://your-domain.atlassian.net/wiki/rest/api`).

3. **Web URL Instance:** The `web_url_instance` is the base URL for Confluence web access (e.g., `https://your-domain.atlassian.net/wiki`).

4. **Space Keys:** The returned space keys (e.g., `KB`, `IT`, `HR`) are used in the upload endpoint to specify which space to sync.

5. **Space Types:** Confluence spaces can be `global` (site-wide) or `personal` (user-specific).

6. **Permissions:** Only spaces the authenticated user has access to will be returned.

7. **Related Endpoints:**
    - `POST /v2/confluence/upload` — Upload Confluence content
    - `POST /v2/confluence/delete` — Delete Confluence sources
