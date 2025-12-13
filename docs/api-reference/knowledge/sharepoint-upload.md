---
id: sharepoint-upload
title: SharePoint Upload
sidebar_label: SharePoint Upload
sidebar_position: 2
displayed_sidebar: integrationSidebar
description: API documentation for uploading and ingesting SharePoint content into the knowledge base
status:
whatsPending:
---

# SharePoint Upload

Upload and ingest SharePoint content into the knowledge base. This endpoint triggers the ingestion process for SharePoint documents, synchronizing content from configured SharePoint sources into the knowledge management system.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/sharepoint/upload`

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
| `sharepoint_auth` | boolean | Whether to use SharePoint-specific authentication | Yes |
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
| `job_id` | string | Job identifier for tracking the upload process | No |
| `drives` | array | List of SharePoint drives to process | No |
| `folders` | array | List of specific folders to process | No |
| `pages` | array | List of SharePoint pages to process | No |
| `sub_sites` | array | List of SharePoint sub-sites to process | No |
| `site_urls` | array | List of SharePoint site URLs to process | No |

---

## Request Body Example

```json
{
  "sharepoint_auth": false,
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
    "last_sync": "2025-12-13T12:58:38.098Z",
    "processor_mode": "auto",
    "use_ocr": false
  },
  "job_id": "",
  "drives": [],
  "folders": [],
  "pages": [],
  "sub_sites": [],
  "site_urls": []
}
```

**Full Sync Example:**

```json
{
  "sharepoint_auth": false,
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
  "job_id": "",
  "drives": [],
  "folders": [],
  "pages": [],
  "sub_sites": [],
  "site_urls": ["https://contoso.sharepoint.com/sites/hr"]
}
```

**Incremental Sync with OCR:**

```json
{
  "sharepoint_auth": false,
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
  "job_id": "job-550e8400-e29b-41d4-a716-446655440001",
  "drives": ["Documents"],
  "folders": ["/Shared Documents/HR Policies"],
  "pages": [],
  "sub_sites": [],
  "site_urls": []
}
```

**With Specific Drives and Folders:**

```json
{
  "sharepoint_auth": false,
  "content_restriction": {
    "audience": [
      "all"
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
  "job_id": "",
  "drives": ["Documents", "Reports"],
  "folders": ["/Shared Documents/IT", "/Shared Documents/Finance"],
  "pages": ["Home", "About"],
  "sub_sites": ["hr", "it-support"],
  "site_urls": ["https://contoso.sharepoint.com/sites/intranet"]
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/sharepoint/upload' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "sharepoint_auth": false,
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
      "last_sync": "2025-12-13T12:58:38.098Z",
      "processor_mode": "auto",
      "use_ocr": false
    },
    "job_id": "",
    "drives": [],
    "folders": [],
    "pages": [],
    "sub_sites": [],
    "site_urls": []
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
      "loc": ["body", "pinecone_config", "rezolve_domain"],
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
| `incremental: true` | Only sync documents modified since `last_sync` |
| `incremental: false` | Full sync - re-process all documents |
| `processor_mode: auto` | Automatically determine processing strategy |
| `processor_mode: manual` | Use manually specified processing settings |
| `use_ocr: true` | Extract text from images and scanned PDFs |
| `use_ocr: false` | Skip OCR processing |

---

## Content Selection Options

| Field | Description |
|-------|-------------|
| `drives` | Specify SharePoint document libraries/drives to process |
| `folders` | Specify folder paths within drives to process |
| `pages` | Specify SharePoint pages to include in processing |
| `sub_sites` | Specify sub-sites to include in processing |
| `site_urls` | Specify full SharePoint site URLs to process |

---

## Notes

1. **Pinecone Configuration:** The `pinecone_config` specifies the vector database namespace for storing document embeddings.

2. **Incremental Sync:** Set `incremental: true` and provide `last_sync` timestamp to only process documents modified since the last sync.

3. **Full Sync:** Set `incremental: false` to re-process all documents, useful when re-indexing or after configuration changes.

4. **OCR Processing:** Enable `use_ocr` to extract text from images, scanned documents, and non-searchable PDFs. This increases processing time.

5. **Processor Mode:** Use `auto` for intelligent processing or `manual` for explicit control over document handling.

6. **Background Job:** Upload operations run asynchronously. The `job_id` field can be used to track progress.

7. **Content Restrictions:** Use `content_restriction.audience` to filter content by SharePoint audience targeting. Set `blacklisted: true` to exclude blacklisted content.

8. **Selective Upload:** Use `drives`, `folders`, `pages`, `sub_sites`, or `site_urls` arrays to selectively upload specific SharePoint resources instead of all content.

9. **Empty Arrays:** When arrays like `drives`, `folders`, etc. are empty, the system processes all available content from the configured SharePoint site.

10. **Related Endpoints:**
    - `POST /v2/sharepoint/listing` — List SharePoint resources
    - `POST /v2/sharepoint/delete` — Delete SharePoint sources
