---
id: sharepoint-list-resources
title: SharePoint List Resources
sidebar_label: SharePoint List Resources
sidebar_position: 1
displayed_sidebar: integrationSidebar
description: API documentation for listing SharePoint resources for knowledge ingestion
status:
whatsPending:
---

# SharePoint List Resources

List resources from SharePoint for knowledge ingestion. This endpoint retrieves available SharePoint sites, drives, and folders that can be configured for content ingestion into the knowledge base.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/sharepoint/listing`

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
| `authorization` | object | SharePoint authentication configuration | Yes |
| `authorization.azure_tid` | string | Microsoft Azure Tenant ID | Yes |
| `authorization.client_id` | string | Azure App Registration Client ID | Yes |
| `authorization.client_secret` | string | Azure App Registration Client Secret | Yes |
| `authorization.thumbprint` | string | Certificate thumbprint (if using certificate auth) | No |
| `authorization.key` | string | Certificate private key (if using certificate auth) | No |
| `authorization.sharepoint_auth` | boolean | Whether to use SharePoint-specific authentication | Yes |
| `site_urls` | array | List of SharePoint site URLs to query | No |
| `sub_sites` | array | List of sub-sites to include | No |
| `drives` | array | List of document library drives to query | No |
| `folders` | array | List of specific folders to query | No |
| `content_restriction` | object | Content access restrictions | No |
| `content_restriction.audience` | array | Audience filter (e.g., `["all"]`) | No |
| `blacklisted` | boolean | Whether to exclude blacklisted content | No |
| `source_restriction` | boolean | Whether to apply source restrictions | No |

---

## Request Body Example

```json
{
  "authorization": {
    "azure_tid": "string",
    "client_id": "string",
    "client_secret": "string",
    "thumbprint": "",
    "key": "",
    "sharepoint_auth": false
  },
  "site_urls": [],
  "sub_sites": [],
  "drives": [],
  "folders": [],
  "content_restriction": {
    "audience": [
      "all"
    ]
  },
  "blacklisted": false,
  "source_restriction": false
}
```

**List All Sites:**

```json
{
  "authorization": {
    "azure_tid": "{{azure_tenant_id}}",
    "client_id": "{{client_id}}",
    "client_secret": "{{client_secret}}",
    "thumbprint": "",
    "key": "",
    "sharepoint_auth": false
  },
  "site_urls": [],
  "sub_sites": [],
  "drives": [],
  "folders": [],
  "content_restriction": {
    "audience": [
      "all"
    ]
  },
  "blacklisted": false,
  "source_restriction": false
}
```

**List Specific Site Resources:**

```json
{
  "authorization": {
    "azure_tid": "{{azure_tenant_id}}",
    "client_id": "{{client_id}}",
    "client_secret": "{{client_secret}}",
    "thumbprint": "",
    "key": "",
    "sharepoint_auth": false
  },
  "site_urls": [
    "https://contoso.sharepoint.com/sites/IT-Support",
    "https://contoso.sharepoint.com/sites/HR-Policies"
  ],
  "sub_sites": [],
  "drives": [],
  "folders": [],
  "content_restriction": {
    "audience": [
      "all"
    ]
  },
  "blacklisted": false,
  "source_restriction": false
}
```

**With Certificate Authentication:**

```json
{
  "authorization": {
    "azure_tid": "{{azure_tenant_id}}",
    "client_id": "{{client_id}}",
    "client_secret": "",
    "thumbprint": "{{certificate_thumbprint}}",
    "key": "{{certificate_private_key}}",
    "sharepoint_auth": false
  },
  "site_urls": [],
  "sub_sites": [],
  "drives": [],
  "folders": [],
  "content_restriction": {
    "audience": [
      "all"
    ]
  },
  "blacklisted": false,
  "source_restriction": false
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/sharepoint/listing' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "authorization": {
      "azure_tid": "72f988bf-86f1-41af-91ab-2d7cd011db47",
      "client_id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      "client_secret": "your-client-secret-here",
      "thumbprint": "",
      "key": "",
      "sharepoint_auth": false
    },
    "site_urls": [],
    "sub_sites": [],
    "drives": [],
    "folders": [],
    "content_restriction": {
      "audience": ["all"]
    },
    "blacklisted": false,
    "source_restriction": false
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "data": {
    "sites": [
      {
        "id": "contoso.sharepoint.com,1234-5678-abcd",
        "name": "IT Support",
        "url": "https://contoso.sharepoint.com/sites/IT-Support",
        "drives": [
          {
            "id": "b!abc123",
            "name": "Documents",
            "driveType": "documentLibrary"
          }
        ]
      }
    ],
    "total": 1
  },
  "timestamp": "2025-07-10T14:00:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission or SharePoint access denied |
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
      "loc": ["body", "authorization", "client_id"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Notes

1. **Azure App Registration:** You must have an Azure App Registration with appropriate Microsoft Graph API permissions for SharePoint access.

2. **Required Permissions:** The app registration typically needs:
   - `Sites.Read.All` or `Sites.ReadWrite.All`
   - `Files.Read.All` or `Files.ReadWrite.All`

3. **Authentication Methods:**
   - **Client Secret:** Use `client_secret` for simpler setup
   - **Certificate:** Use `thumbprint` and `key` for enhanced security

4. **Azure Tenant ID:** The `azure_tid` is your Microsoft Azure AD tenant ID.

5. **Empty Arrays:** Pass empty arrays (`[]`) to list all available resources without filtering.

6. **Content Restrictions:** Use `content_restriction.audience` to filter content by audience targeting.

7. **Blacklisting:** When `blacklisted` is `true`, previously blacklisted content will be excluded.

8. **Source Restrictions:** Enable `source_restriction` to apply configured source-level access controls.

9. **Related Endpoints:**
    - `POST /v2/sharepoint/ingest` — Ingest SharePoint content
    - `GET /v2/sharepoint/status` — Check ingestion status
    - `DELETE /v2/sharepoint/sources` — Remove SharePoint sources
