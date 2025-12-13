---
id: confluence-upload
title: Confluence Upload
sidebar_label: Confluence Upload
sidebar_position: 7
displayed_sidebar: integrationSidebar
description: API documentation for uploading and ingesting Confluence content into the knowledge base
status:
whatsPending:
---

# Confluence Upload

Upload and ingest Confluence content into the knowledge base. This endpoint triggers the ingestion process for Confluence pages and spaces, synchronizing content from configured Confluence sources into the knowledge management system.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/confluence/upload`

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
| `authorization` | object | Confluence authentication configuration | Yes |
| `authorization.instance_url` | string | Confluence instance API URL | Yes |
| `authorization.web_url_instance` | string | Confluence web URL for the instance | Yes |
| `authorization.username` | string | Confluence username or email | Yes |
| `authorization.api_token` | string | Confluence API token for authentication | Yes |
| `content_restriction` | object | Content access restrictions configuration | No |
| `content_restriction.audience` | array | Audience filter (e.g., `["all"]`) | No |
| `content_restriction.blacklisted` | boolean | Whether to exclude blacklisted content | No |
| `content_restriction.source_restriction` | boolean | Whether to apply source restrictions | No |
| `pinecone_config` | object | Vector database configuration | Yes |
| `pinecone_config.rezolve_domain` | string | Rezolve domain for the tenant | Yes |
| `pinecone_config.tenant_id` | string | Tenant identifier for Pinecone namespace | Yes |
| `sync_config` | object | Synchronization configuration | Yes |
| `sync_config.sync_configuration_id` | string | ID of the sync configuration | No |
| `sync_config.incremental` | boolean | Whether to perform incremental sync | Yes |
| `sync_config.last_sync` | string (ISO 8601) | Timestamp of last synchronization | No |
| `sync_config.processor_mode` | string | Processing mode (`auto`, `manual`) | Yes |
| `sync_config.use_ocr` | boolean | Whether to use OCR for image/PDF text extraction | Yes |
| `space` | string | Confluence space key to process | Yes |
| `job_id` | string | Job identifier for tracking the upload process | No |

---

## Request Body Example

```json
{
  "authorization": {
    "instance_url": "string",
    "web_url_instance": "string",
    "username": "string",
    "api_token": "string"
  },
  "content_restriction": {
    "audience": [
      "all"
    ],
    "blacklisted": false,
    "source_restriction": false
  },
  "pinecone_config": {
    "rezolve_domain": "string",
    "tenant_id": "string"
  },
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": true,
    "last_sync": "2025-12-13T13:03:32.317Z",
    "processor_mode": "auto",
    "use_ocr": false
  },
  "space": "KB",
  "job_id": ""
}
```

**Full Sync Example:**

```json
{
  "authorization": {
    "instance_url": "{{confluence_instance_url}}",
    "web_url_instance": "{{confluence_web_url}}",
    "username": "{{confluence_username}}",
    "api_token": "{{confluence_api_token}}"
  },
  "content_restriction": {
    "audience": [
      "all"
    ],
    "blacklisted": false,
    "source_restriction": false
  },
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": false,
    "last_sync": "",
    "processor_mode": "auto",
    "use_ocr": false
  },
  "space": "KB",
  "job_id": ""
}
```

**Incremental Sync with OCR:**

```json
{
  "authorization": {
    "instance_url": "{{confluence_instance_url}}",
    "web_url_instance": "{{confluence_web_url}}",
    "username": "{{confluence_username}}",
    "api_token": "{{confluence_api_token}}"
  },
  "content_restriction": {
    "audience": [
      "all"
    ],
    "blacklisted": false,
    "source_restriction": false
  },
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "sync_config": {
    "sync_configuration_id": "sync-config-001",
    "incremental": true,
    "last_sync": "2025-12-01T00:00:00.000Z",
    "processor_mode": "auto",
    "use_ocr": true
  },
  "space": "IT",
  "job_id": "job-550e8400-e29b-41d4-a716-446655440001"
}
```

**With Content Restrictions:**

```json
{
  "authorization": {
    "instance_url": "{{confluence_instance_url}}",
    "web_url_instance": "{{confluence_web_url}}",
    "username": "{{confluence_username}}",
    "api_token": "{{confluence_api_token}}"
  },
  "content_restriction": {
    "audience": [
      "engineering",
      "support"
    ],
    "blacklisted": true,
    "source_restriction": true
  },
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": true,
    "last_sync": "2025-12-12T10:39:43.660Z",
    "processor_mode": "auto",
    "use_ocr": false
  },
  "space": "ENG",
  "job_id": ""
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/confluence/upload' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "authorization": {
      "instance_url": "https://acme.atlassian.net/wiki/rest/api",
      "web_url_instance": "https://acme.atlassian.net/wiki",
      "username": "admin@acme.com",
      "api_token": "ATATT3xFfGF0..."
    },
    "content_restriction": {
      "audience": ["all"],
      "blacklisted": false,
      "source_restriction": false
    },
    "pinecone_config": {
      "rezolve_domain": "acme.rezolve.ai",
      "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "sync_config": {
      "sync_configuration_id": "",
      "incremental": true,
      "last_sync": "2025-12-13T13:03:32.317Z",
      "processor_mode": "auto",
      "use_ocr": false
    },
    "space": "KB",
    "job_id": ""
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
"string"
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
      "loc": ["body", "authorization", "api_token"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Sync Configuration Options

| Option | Description |
|--------|-------------|
| `incremental: true` | Only sync pages modified since `last_sync` |
| `incremental: false` | Full sync - re-process all pages in the space |
| `processor_mode: auto` | Automatically determine processing strategy |
| `processor_mode: manual` | Use manually specified processing settings |
| `use_ocr: true` | Extract text from images and scanned PDFs |
| `use_ocr: false` | Skip OCR processing |

---

## Notes

1. **Confluence API Token:** Generate an API token from your Atlassian account settings at https://id.atlassian.com/manage-profile/security/api-tokens.

2. **Instance URL:** The `instance_url` should point to the Confluence REST API endpoint (e.g., `https://your-domain.atlassian.net/wiki/rest/api`).

3. **Web URL Instance:** The `web_url_instance` is the base URL for Confluence web access (e.g., `https://your-domain.atlassian.net/wiki`).

4. **Space Key:** The `space` field accepts the Confluence space key (e.g., `KB`, `IT`, `ENG`). This determines which space's content will be ingested.

5. **Pinecone Configuration:** The `pinecone_config` specifies the vector database namespace for storing document embeddings.

6. **Incremental Sync:** Set `incremental: true` and provide `last_sync` timestamp to only process pages modified since the last sync.

7. **Full Sync:** Set `incremental: false` to re-process all pages, useful when re-indexing or after configuration changes.

8. **OCR Processing:** Enable `use_ocr` to extract text from images, scanned documents, and non-searchable PDFs attached to Confluence pages.

9. **Background Job:** Upload operations run asynchronously. The `job_id` field can be used to track progress.

10. **Content Restrictions:** Use `content_restriction.audience` to filter content by specific groups. Set `blacklisted: true` to exclude blacklisted content.

11. **Related Endpoints:**
    - `POST /v2/confluence/listing` — List Confluence spaces and pages
    - `POST /v2/confluence/delete` — Delete Confluence sources
