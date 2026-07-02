# Graph Report - src  (2026-07-02)

## Corpus Check
- Corpus is ~12,741 words - fits in a single context window. You may not need a graph.

## Summary
- 58 nodes · 50 edges · 11 communities (6 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Core Layout & Navigation|Core Layout & Navigation]]
- [[_COMMUNITY_Impressions Gallery|Impressions Gallery]]
- [[_COMMUNITY_Aroma Kitchen Page|Aroma Kitchen Page]]
- [[_COMMUNITY_Books Page|Books Page]]
- [[_COMMUNITY_Seminars Page|Seminars Page]]
- [[_COMMUNITY_Homepage|Homepage]]
- [[_COMMUNITY_About Me Page|About Me Page]]
- [[_COMMUNITY_Forest Bathing Page|Forest Bathing Page]]
- [[_COMMUNITY_Privacy Policy|Privacy Policy]]
- [[_COMMUNITY_Imprint|Imprint]]

## God Nodes (most connected - your core abstractions)
1. `CookieBanner()` - 2 edges
2. `Footer()` - 2 edges
3. `Navbar()` - 2 edges
4. `metadata` - 1 edges
5. `focuses` - 1 edges
6. `cookingBooks` - 1 edges
7. `metadata` - 1 edges
8. `ShopLink` - 1 edges
9. `Book` - 1 edges
10. `books` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 5 thin omitted)

### Community 0 - "Core Layout & Navigation"
Cohesion: 0.19
Nodes (8): inter, metadata, playfair, CookieBanner(), Footer(), footerLinks, Navbar(), navLinks

### Community 1 - "Impressions Gallery"
Cohesion: 0.25
Nodes (6): categories, Category, categoryActiveColors, categoryColors, GalleryImage, images

### Community 2 - "Aroma Kitchen Page"
Cohesion: 0.33
Nodes (3): cookingBooks, focuses, metadata

### Community 3 - "Books Page"
Cohesion: 0.33
Nodes (4): Book, books, metadata, ShopLink

### Community 4 - "Seminars Page"
Cohesion: 0.40
Nodes (3): CalendarEvent, events, metadata

## Knowledge Gaps
- **29 isolated node(s):** `metadata`, `focuses`, `cookingBooks`, `metadata`, `ShopLink` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `metadata`, `focuses`, `cookingBooks` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._