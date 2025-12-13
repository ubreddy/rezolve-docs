---
id: servicenow-upload
title: ServiceNow Upload
sidebar_label: ServiceNow Upload
sidebar_position: 8
displayed_sidebar: integrationSidebar
description: API documentation for uploading and ingesting ServiceNow knowledge base content
status:
whatsPending:
---

# ServiceNow Upload

Upload and ingest ServiceNow knowledge base content into the knowledge management system. This endpoint triggers the ingestion process for ServiceNow knowledge articles, synchronizing content from configured ServiceNow instances.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/servicenow/upload`

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
| `authorization` | object | ServiceNow authentication configuration | Yes |
| `authorization.username` | string | ServiceNow username | Yes |
| `authorization.password` | string | ServiceNow password | Yes |
| `authorization.client_id` | string | OAuth client ID | Yes |
| `authorization.client_secret` | string | OAuth client secret | Yes |
| `authorization.refresh_token` | string | OAuth refresh token | No |
| `authorization.servicenow_domain` | string | ServiceNow instance domain | Yes |
| `pinecone_config` | object | Vector database configuration | Yes |
| `pinecone_config.rezolve_domain` | string | Rezolve domain for the tenant | Yes |
| `pinecone_config.tenant_id` | string | Tenant identifier for Pinecone namespace | Yes |
| `content_restriction` | object | Content access restrictions configuration | No |
| `content_restriction.audience` | array | Audience filter (e.g., `["all"]`) | No |
| `content_restriction.blacklisted` | boolean | Whether to exclude blacklisted content | No |
| `content_restriction.source_restriction` | boolean | Whether to apply source restrictions | No |
| `sync_config` | object | Synchronization configuration | Yes |
| `sync_config.sync_configuration_id` | string | ID of the sync configuration | No |
| `sync_config.incremental` | boolean | Whether to perform incremental sync | Yes |
| `sync_config.last_sync` | string (ISO 8601) | Timestamp of last synchronization | No |
| `sync_config.processor_mode` | string | Processing mode (`auto`, `manual`) | Yes |
| `sync_config.use_ocr` | boolean | Whether to use OCR for image/PDF text extraction | Yes |
| `knowledge_bases` | array | List of knowledge base sys_ids to process | No |
| `article_query_names` | array | List of article fields to query/retrieve | No |
| `job_id` | string | Job identifier for tracking the upload process | No |

---

## Request Body Example

```json
{
  "authorization": {
    "username": "string",
    "password": "string",
    "client_id": "string",
    "client_secret": "string",
    "refresh_token": "string",
    "servicenow_domain": "string"
  },
  "pinecone_config": {
    "rezolve_domain": "string",
    "tenant_id": "string"
  },
  "content_restriction": {
    "audience": [
      "all"
    ],
    "blacklisted": false,
    "source_restriction": false
  },
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": true,
    "last_sync": "2025-12-13T13:09:45.775Z",
    "processor_mode": "auto",
    "use_ocr": false
  },
  "knowledge_bases": [],
  "article_query_names": [
    "sys_id",
    "number",
    "short_description",
    "text",
    "workflow_state",
    "sys_updated_on",
    "latest",
    "language",
    "meta",
    "can_read_user_criteria",
    "u_this_article_can_be_summarized_reference_by_a_ai_tool",
    "u_market"
  ],
  "job_id": ""
}
```

**Full Sync Example:**

```json
{
  "authorization": {
    "username": "{{servicenow_username}}",
    "password": "{{servicenow_password}}",
    "client_id": "{{servicenow_client_id}}",
    "client_secret": "{{servicenow_client_secret}}",
    "refresh_token": "",
    "servicenow_domain": "{{servicenow_domain}}"
  },
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "content_restriction": {
    "audience": [
      "all"
    ],
    "blacklisted": false,
    "source_restriction": false
  },
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": false,
    "last_sync": "",
    "processor_mode": "auto",
    "use_ocr": false
  },
  "knowledge_bases": [],
  "article_query_names": [
    "sys_id",
    "number",
    "short_description",
    "text",
    "workflow_state",
    "sys_updated_on"
  ],
  "job_id": ""
}
```

**Incremental Sync with Specific Knowledge Bases:**

```json
{
  "authorization": {
    "username": "{{servicenow_username}}",
    "password": "{{servicenow_password}}",
    "client_id": "{{servicenow_client_id}}",
    "client_secret": "{{servicenow_client_secret}}",
    "refresh_token": "{{servicenow_refresh_token}}",
    "servicenow_domain": "{{servicenow_domain}}"
  },
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "content_restriction": {
    "audience": [
      "all"
    ],
    "blacklisted": false,
    "source_restriction": false
  },
  "sync_config": {
    "sync_configuration_id": "sync-config-001",
    "incremental": true,
    "last_sync": "2025-12-01T00:00:00.000Z",
    "processor_mode": "auto",
    "use_ocr": true
  },
  "knowledge_bases": [
    "kb0000001",
    "kb0000002"
  ],
  "article_query_names": [
    "sys_id",
    "number",
    "short_description",
    "text",
    "workflow_state",
    "sys_updated_on",
    "latest",
    "language",
    "meta",
    "can_read_user_criteria",
    "u_this_article_can_be_summarized_reference_by_a_ai_tool",
    "u_market"
  ],
  "job_id": ""
}
```

**With Content Restrictions:**

```json
{
  "authorization": {
    "username": "{{servicenow_username}}",
    "password": "{{servicenow_password}}",
    "client_id": "{{servicenow_client_id}}",
    "client_secret": "{{servicenow_client_secret}}",
    "refresh_token": "",
    "servicenow_domain": "{{servicenow_domain}}"
  },
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "content_restriction": {
    "audience": [
      "it-support",
      "hr-team"
    ],
    "blacklisted": true,
    "source_restriction": true
  },
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": true,
    "last_sync": "2025-12-12T10:39:43.660Z",
    "processor_mode": "auto",
    "use_ocr": false
  },
  "knowledge_bases": ["kb0000003"],
  "article_query_names": [
    "sys_id",
    "number",
    "short_description",
    "text"
  ],
  "job_id": ""
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/servicenow/upload' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "authorization": {
      "username": "admin",
      "password": "your-password",
      "client_id": "abc123def456",
      "client_secret": "secret-value",
      "refresh_token": "",
      "servicenow_domain": "acme.service-now.com"
    },
    "pinecone_config": {
      "rezolve_domain": "acme.rezolve.ai",
      "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "content_restriction": {
      "audience": ["all"],
      "blacklisted": false,
      "source_restriction": false
    },
    "sync_config": {
      "sync_configuration_id": "",
      "incremental": true,
      "last_sync": "2025-12-13T13:09:45.775Z",
      "processor_mode": "auto",
      "use_ocr": false
    },
    "knowledge_bases": [],
    "article_query_names": [
      "sys_id",
      "number",
      "short_description",
      "text",
      "workflow_state",
      "sys_updated_on"
    ],
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
| `403 Forbidden` | Insufficient permissions | User lacks permission or ServiceNow access denied |
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
      "loc": ["body", "authorization", "servicenow_domain"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Article Query Names

The `article_query_names` array specifies which fields to retrieve from ServiceNow knowledge articles:

| Field | Description |
|-------|-------------|
| `sys_id` | Unique system identifier for the article |
| `number` | Article number (e.g., KB0010001) |
| `short_description` | Article title/summary |
| `text` | Full article content/body |
| `workflow_state` | Publication state (draft, published, retired) |
| `sys_updated_on` | Last modification timestamp |
| `latest` | Whether this is the latest version |
| `language` | Article language code |
| `meta` | Article metadata |
| `can_read_user_criteria` | User criteria for read access |
| `u_this_article_can_be_summarized_reference_by_a_ai_tool` | AI summarization permission flag |
| `u_market` | Market/region classification |

---

## Sync Configuration Options

| Option | Description |
|--------|-------------|
| `incremental: true` | Only sync articles modified since `last_sync` |
| `incremental: false` | Full sync - re-process all articles |
| `processor_mode: auto` | Automatically determine processing strategy |
| `processor_mode: manual` | Use manually specified processing settings |
| `use_ocr: true` | Extract text from images and scanned PDFs |
| `use_ocr: false` | Skip OCR processing |

---

## Notes

1. **ServiceNow OAuth:** Configure OAuth application in ServiceNow to obtain `client_id` and `client_secret`.

2. **ServiceNow Domain:** The `servicenow_domain` should be your instance URL without protocol (e.g., `acme.service-now.com`).

3. **Knowledge Bases:** Leave `knowledge_bases` array empty to sync all accessible knowledge bases, or specify sys_ids to sync specific ones.

4. **Article Query Names:** Customize `article_query_names` to control which article fields are retrieved and indexed.

5. **Custom Fields:** Fields starting with `u_` are custom fields specific to your ServiceNow instance.

6. **Pinecone Configuration:** The `pinecone_config` specifies the vector database namespace for storing document embeddings.

7. **Incremental Sync:** Set `incremental: true` and provide `last_sync` timestamp to only process articles modified since the last sync.

8. **Full Sync:** Set `incremental: false` to re-process all articles, useful when re-indexing or after configuration changes.

9. **OCR Processing:** Enable `use_ocr` to extract text from images and attachments in knowledge articles.

10. **Background Job:** Upload operations run asynchronously. The `job_id` field can be used to track progress.

11. **Related Endpoints:**
    - `POST /v2/servicenow/kb-listing` — List ServiceNow knowledge bases
    - `POST /v2/servicenow/delete` — Delete ServiceNow sources
