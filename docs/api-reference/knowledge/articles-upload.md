---
id: articles-upload
title: Upload Article Streaming
sidebar_label: Upload Article Streaming
sidebar_position: 9
displayed_sidebar: integrationSidebar
description: API documentation for streaming article upload with real-time progress updates
status:
whatsPending:
---

# Upload Article Streaming

Stream article upload with real-time progress updates. This endpoint uploads an article to the knowledge base and returns Server-Sent Events (SSE) stream with progress updates during the ingestion process.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/articles/upload`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json` or `text/event-stream`) | Yes |
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
| `article_id` | string | Unique identifier for the article | Yes |
| `title` | string | Article title | Yes |
| `description` | string | Article content/description | Yes |
| `extra_questions` | array | Additional questions associated with the article | No |
| `tags` | array | Tags for categorizing the article | No |
| `url` | string | Source URL of the article | No |
| `is_scripted` | boolean | Whether the article contains scripted content | No |
| `pinecone_config` | object | Vector database configuration | Yes |
| `pinecone_config.rezolve_domain` | string | Rezolve domain for the tenant | Yes |
| `pinecone_config.tenant_id` | string | Tenant identifier for Pinecone namespace | Yes |
| `content_restriction` | object | Content access restrictions configuration | No |
| `content_restriction.audience` | array | Audience filter (e.g., `["all"]`) | No |
| `content_restriction.blacklisted` | boolean | Whether to exclude blacklisted content | No |
| `content_restriction.source_restriction` | boolean | Whether to apply source restrictions | No |

---

## Request Body Example

```json
{
  "article_id": "string",
  "title": "string",
  "description": "string",
  "extra_questions": [],
  "tags": [],
  "url": "No URL Available",
  "is_scripted": false,
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
  }
}
```

**Basic Article Upload:**

```json
{
  "article_id": "KB0010001",
  "title": "How to Reset Your Password",
  "description": "This article explains the step-by-step process for resetting your account password. First, navigate to the login page and click 'Forgot Password'. Enter your email address and follow the instructions sent to your inbox.",
  "extra_questions": [],
  "tags": [],
  "url": "No URL Available",
  "is_scripted": false,
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
  }
}
```

**Article with Extra Questions and Tags:**

```json
{
  "article_id": "KB0010002",
  "title": "VPN Setup Guide",
  "description": "Complete guide for setting up VPN access on company devices. Includes instructions for Windows, Mac, and mobile devices.",
  "extra_questions": [
    "How do I connect to VPN?",
    "What are the VPN settings?",
    "VPN not working, what should I do?"
  ],
  "tags": [
    "VPN",
    "Network",
    "Remote Access",
    "IT Support"
  ],
  "url": "https://support.acme.com/kb/vpn-setup",
  "is_scripted": false,
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
  }
}
```

**Scripted Article with Audience Restriction:**

```json
{
  "article_id": "KB0010003",
  "title": "Server Maintenance Runbook",
  "description": "Scripted procedures for performing routine server maintenance tasks including backup verification, log rotation, and performance monitoring.",
  "extra_questions": [
    "How to run server maintenance?",
    "Server maintenance checklist"
  ],
  "tags": [
    "Server",
    "Maintenance",
    "Runbook",
    "Operations"
  ],
  "url": "https://internal.acme.com/runbooks/server-maintenance",
  "is_scripted": true,
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "content_restriction": {
    "audience": [
      "it-operations",
      "sysadmins"
    ],
    "blacklisted": false,
    "source_restriction": true
  }
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/articles/upload' \
  --header 'accept: text/event-stream' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "article_id": "KB0010001",
    "title": "How to Reset Your Password",
    "description": "This article explains the step-by-step process for resetting your account password.",
    "extra_questions": [],
    "tags": ["Password", "Account"],
    "url": "No URL Available",
    "is_scripted": false,
    "pinecone_config": {
      "rezolve_domain": "acme.rezolve.ai",
      "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "content_restriction": {
      "audience": ["all"],
      "blacklisted": false,
      "source_restriction": false
    }
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
"string"
```

**SSE Stream Response:**

When using `accept: text/event-stream`, the response will be a stream of Server-Sent Events:

```
event: progress
data: {"status": "processing", "progress": 25, "message": "Parsing article content..."}

event: progress
data: {"status": "processing", "progress": 50, "message": "Generating embeddings..."}

event: progress
data: {"status": "processing", "progress": 75, "message": "Storing in vector database..."}

event: complete
data: {"status": "completed", "progress": 100, "message": "Article uploaded successfully", "article_id": "KB0010001"}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to upload articles |
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
      "loc": ["body", "title"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Notes

1. **Server-Sent Events (SSE):** This endpoint supports SSE for real-time progress updates during article upload. Use `accept: text/event-stream` header to receive streaming updates.

2. **Article ID:** The `article_id` should be unique within your knowledge base. Use a consistent naming convention (e.g., KB0010001).

3. **Extra Questions:** Use `extra_questions` to add alternative phrasings or related questions that should match this article during search.

4. **Tags:** Tags help categorize articles and improve search relevance. Use consistent tag naming across your knowledge base.

5. **URL Field:** If the article has a source URL, provide it. Otherwise, use "No URL Available" or leave empty.

6. **Is Scripted:** Set `is_scripted: true` for articles containing executable scripts or runbooks that require special handling.

7. **Pinecone Configuration:** The `pinecone_config` specifies the vector database namespace for storing article embeddings.

8. **Content Restrictions:** Use `content_restriction.audience` to limit which user groups can access the article content.

9. **Blacklisted Content:** Set `blacklisted: true` to exclude the article from certain automated processes.

10. **Source Restriction:** Enable `source_restriction` to apply additional access controls based on the article source.

11. **Related Endpoints:**
    - `GET /v2/articles/{article_id}` — Retrieve article details
    - `DELETE /v2/articles/{article_id}` — Delete an article
    - `POST /v2/get-vectors` — Query ingested article vectors
