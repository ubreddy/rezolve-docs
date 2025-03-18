---
id: under-the-hood
title: Under the Hood
sidebar_label: Under the Hood
---

# Under the Hood

## 1. Building the Knowledge Graph

### Core Components

Rezolve’s knowledge graph integrates three pillars of enterprise data:

- Content: Documents, messages, tickets, and other assets from apps like Slack, Salesforce, or Google Drive.

- People: Employee identities, roles, teams, and departments.

- Activity: User interactions (clicks, edits, comments) and content lifecycle (creation/modification dates).

### Construction Process

#### Data Ingestion via Connectors

Rezolve uses 100+ pre-built connectors to pull structured and unstructured data from enterprise apps (e.g., Slack, Jira, Confluence).

Connectors normalize data into a unified format and respect source permissions (e.g., private Slack channels are excluded from unauthorized users’ search results).

#### Entity Extraction & Relationship Mapping

Named Entity Recognition (NER): Identifies entities (people, projects, acronyms) and maps their relationships (e.g., "John authored Q4 Sales Report").

Semantic Understanding: Uses ML models (likely BERT or similar) to infer implicit relationships (e.g., "FY24" ≈ "2024 fiscal year").
 TODO

### Activity Signal Integration

Tracks user behavior (clicks, searches, edits) to infer document popularity, team relevance, and context.

### Adaptation to Organizational Language

Rezolve’s Scholastic system fine-tunes language models on each customer’s corpus to understand internal jargon and communication patterns.
  
## 2. Knowledge Graph Search

### Query Processing

#### Semantic Search

Utilizes vector embeddings and semantic search to find the most relevant results.

#### Knowledge Graph Traversal

Follows relationships between entities to provide contextually rich results.

### Result Ranking

#### Relevance

Ranks results based on semantic similarity and user activity signals.

#### Contextual Relevance

Prioritizes results based on team relevance and document popularity.

### Result Presentation

#### Knowledge Cards

Displays concise summaries of documents, messages, and tickets with relevant metadata.

#### Contextual Clusters

Groups results by topic and team to provide a clear overview of the search results.

## 3. Knowledge Graph Management

### Content Lifecycle

Tracks document and message lifecycle events (creation, modification, deletion).

### Entity Management

Maintains up-to-date entity information and relationships.

### Activity Management

Tracks user interactions and activity signals.

### Corpus Adaptation

Continuously updates language models to adapt to organizational language and communication patterns.

## 4. Knowledge Graph Maintenance

### Content Lifecycle

Tracks document and message lifecycle events (creation, modification, deletion).

### Entity Management

Maintains up-to-date entity information and relationships.

### Activity Management

Tracks user interactions and activity signals.

### Corpus Adaptation

Continuously updates language models to adapt to organizational language and communication patterns.

### Knowledge Refinement

#### Graph Completion

Predicts missing links (e.g., auto-linking a new employee to their team based on email domain).

#### Noise Reduction

Filters outdated or low-engagement content (e.g., deprecated Confluence pages).

Permission Sync:

Mirrors access controls from source systems (e.g., revoked Slack access removes related content from search)