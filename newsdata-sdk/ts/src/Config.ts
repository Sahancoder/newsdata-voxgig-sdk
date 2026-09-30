
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Newsdata',
        slug: "newsdata",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "https://newsdata.io/api",

    auth: {
      prefix: '',
      in: 'query',
      name: 'apikey',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        archive: {
        },
  
        count: {
        },
  
        crypto: {
        },
  
        latest: {
        },
  
        market: {
        },
  
        new: {
        },
  
        source: {
        },
  
        websocket: {
        },
  
        websocket_delete_envelope: {
        },
  
        websocket_query_list_envelope: {
        },
  
        websocket_register_envelope: {
        },
  
    }
  }


  entity = {
    "archive": {
      "fields": [
        {
          "name": "ai_org",
          "title": "Ai Org",
          "type": "`$ANY`",
          "short": "AI-extracted organization names."
        },
        {
          "name": "ai_region",
          "title": "Ai Region",
          "type": "`$ANY`",
          "short": "AI-extracted regions, e.g."
        },
        {
          "name": "ai_summary",
          "title": "Ai Summary",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "AI-generated article summary."
        },
        {
          "name": "ai_tag",
          "title": "Ai Tag",
          "type": "`$ANY`",
          "short": "AI-classified topic tags."
        },
        {
          "name": "article_id",
          "title": "Article Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique article identifier (32 characters)."
        },
        {
          "name": "category",
          "title": "Category",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article categories."
        },
        {
          "name": "content",
          "title": "Content",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Full article text."
        },
        {
          "name": "country",
          "title": "Country",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Country names, e.g."
        },
        {
          "name": "creator",
          "title": "Creator",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article author(s)."
        },
        {
          "name": "datatype",
          "title": "Datatype",
          "type": "`$STRING`",
          "short": "Content type, e.g."
        },
        {
          "name": "description",
          "title": "Description",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Short article description."
        },
        {
          "name": "duplicate",
          "title": "Duplicate",
          "type": "`$BOOLEAN`",
          "short": "Whether the article is a duplicate of another article."
        },
        {
          "name": "fetched_at",
          "title": "Fetched At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "When the article was collected, `YYYY-MM-DD HH:MM:SS`."
        },
        {
          "name": "image_url",
          "title": "Image Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article image URL.",
          "format": "uri"
        },
        {
          "name": "keywords",
          "title": "Keywords",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article keywords."
        },
        {
          "name": "language",
          "title": "Language",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Language name, e.g."
        },
        {
          "name": "link",
          "title": "Link",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article URL.",
          "format": "uri"
        },
        {
          "name": "pubDate",
          "title": "Pub Date",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`."
        },
        {
          "name": "pubDateTZ",
          "title": "Pub Date Tz",
          "type": "`$STRING`",
          "short": "Timezone of the dates in this article."
        },
        {
          "name": "sentiment",
          "title": "Sentiment",
          "type": "`$ANY`",
          "short": "Overall sentiment: positive, neutral, or negative."
        },
        {
          "name": "sentiment_stats",
          "title": "Sentiment Stats",
          "type": "`$ANY`",
          "short": "Sentiment percentage breakdown."
        },
        {
          "name": "source_icon",
          "title": "Source Icon",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source icon URL.",
          "format": "uri"
        },
        {
          "name": "source_id",
          "title": "Source Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source id (usable with the `domain` filter)."
        },
        {
          "name": "source_name",
          "title": "Source Name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source display name."
        },
        {
          "name": "source_priority",
          "title": "Source Priority",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ],
          "short": "Source ranking (lower = higher-ranked)."
        },
        {
          "name": "source_url",
          "title": "Source Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source website URL.",
          "format": "uri"
        },
        {
          "name": "title",
          "title": "Title",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article title."
        },
        {
          "name": "video_url",
          "title": "Video Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article video URL.",
          "format": "uri"
        }
      ],
      "name": "archive",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/1/archive",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "archive"
                }
              ],
              "parts": [
                "1",
                "archive"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "business,technology"
                  },
                  {
                    "name": "country",
                    "orig": "country",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "us"
                  },
                  {
                    "name": "creator",
                    "orig": "creator",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "datatype",
                    "orig": "datatype",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "domain",
                    "orig": "domain",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc,cnn"
                  },
                  {
                    "name": "domainurl",
                    "orig": "domainurl",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc.com,cnn.com"
                  },
                  {
                    "name": "excludecategory",
                    "orig": "excludecategory",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludecountry",
                    "orig": "excludecountry",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludedomain",
                    "orig": "excludedomain",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludefield",
                    "orig": "excludefield",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "content,keywords"
                  },
                  {
                    "name": "excludelanguage",
                    "orig": "excludelanguage",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "from_date",
                    "orig": "from_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2026-05-01"
                  },
                  {
                    "name": "full_content",
                    "orig": "full_content",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "image",
                    "orig": "image",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "en,hi"
                  },
                  {
                    "name": "organization",
                    "orig": "organization",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "1749547200000000000"
                  },
                  {
                    "name": "prioritydomain",
                    "orig": "prioritydomain",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "elections"
                  },
                  {
                    "name": "q_in_meta",
                    "orig": "qInMeta",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q_in_title",
                    "orig": "qInTitle",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "region",
                    "orig": "region",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "removeduplicate",
                    "orig": "removeduplicate",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment",
                    "orig": "sentiment",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment_score",
                    "orig": "sentiment_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pubdatedesc"
                  },
                  {
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Asia/Kolkata"
                  },
                  {
                    "name": "to_date",
                    "orig": "to_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2026-05-31"
                  },
                  {
                    "name": "url",
                    "orig": "url",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "video",
                    "orig": "video",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "category",
                  "country",
                  "creator",
                  "datatype",
                  "domain",
                  "domainurl",
                  "excludecategory",
                  "excludecountry",
                  "excludedomain",
                  "excludefield",
                  "excludelanguage",
                  "from_date",
                  "full_content",
                  "id",
                  "image",
                  "language",
                  "organization",
                  "page",
                  "prioritydomain",
                  "q",
                  "q_in_meta",
                  "q_in_title",
                  "region",
                  "removeduplicate",
                  "sentiment",
                  "sentiment_score",
                  "size",
                  "sort",
                  "tag",
                  "timezone",
                  "to_date",
                  "url",
                  "video"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "count": {
      "fields": [
        {
          "name": "results",
          "title": "Results",
          "type": "`$OBJECT`"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`"
        }
      ],
      "name": "count",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/1/count",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "count"
                }
              ],
              "parts": [
                "1",
                "count"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "business,technology"
                  },
                  {
                    "name": "country",
                    "orig": "country",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "us"
                  },
                  {
                    "name": "creator",
                    "orig": "creator",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "datatype",
                    "orig": "datatype",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "domain",
                    "orig": "domain",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc,cnn"
                  },
                  {
                    "name": "domainurl",
                    "orig": "domainurl",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc.com,cnn.com"
                  },
                  {
                    "name": "excludecategory",
                    "orig": "excludecategory",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludecountry",
                    "orig": "excludecountry",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludedomain",
                    "orig": "excludedomain",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludelanguage",
                    "orig": "excludelanguage",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "from_date",
                    "orig": "from_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "2026-05-01"
                  },
                  {
                    "name": "full_content",
                    "orig": "full_content",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "image",
                    "orig": "image",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "interval",
                    "orig": "interval",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "all"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "en,hi"
                  },
                  {
                    "name": "organization",
                    "orig": "organization",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "prioritydomain",
                    "orig": "prioritydomain",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "elections"
                  },
                  {
                    "name": "q_in_meta",
                    "orig": "qInMeta",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q_in_title",
                    "orig": "qInTitle",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "region",
                    "orig": "region",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "removeduplicate",
                    "orig": "removeduplicate",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment",
                    "orig": "sentiment",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment_score",
                    "orig": "sentiment_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pubdatedesc"
                  },
                  {
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "to_date",
                    "orig": "to_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "2026-05-31"
                  },
                  {
                    "name": "video",
                    "orig": "video",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "category",
                  "country",
                  "creator",
                  "datatype",
                  "domain",
                  "domainurl",
                  "excludecategory",
                  "excludecountry",
                  "excludedomain",
                  "excludelanguage",
                  "from_date",
                  "full_content",
                  "image",
                  "interval",
                  "language",
                  "organization",
                  "page",
                  "prioritydomain",
                  "q",
                  "q_in_meta",
                  "q_in_title",
                  "region",
                  "removeduplicate",
                  "sentiment",
                  "sentiment_score",
                  "size",
                  "sort",
                  "tag",
                  "to_date",
                  "video"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/1/market/count",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "market"
                },
                {
                  "lit": "count"
                }
              ],
              "parts": [
                "1",
                "market",
                "count"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "country",
                    "orig": "country",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "us"
                  },
                  {
                    "name": "creator",
                    "orig": "creator",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "datatype",
                    "orig": "datatype",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "domain",
                    "orig": "domain",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc,cnn"
                  },
                  {
                    "name": "domainurl",
                    "orig": "domainurl",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc.com,cnn.com"
                  },
                  {
                    "name": "excludecountry",
                    "orig": "excludecountry",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludedomain",
                    "orig": "excludedomain",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludelanguage",
                    "orig": "excludelanguage",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "from_date",
                    "orig": "from_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "2026-05-01"
                  },
                  {
                    "name": "full_content",
                    "orig": "full_content",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "image",
                    "orig": "image",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "interval",
                    "orig": "interval",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "all"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "en,hi"
                  },
                  {
                    "name": "market_id",
                    "orig": "market_id",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "aapl-us-vy,msft-us-vy"
                  },
                  {
                    "name": "organization",
                    "orig": "organization",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "prioritydomain",
                    "orig": "prioritydomain",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "elections"
                  },
                  {
                    "name": "q_in_meta",
                    "orig": "qInMeta",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q_in_title",
                    "orig": "qInTitle",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "removeduplicate",
                    "orig": "removeduplicate",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment",
                    "orig": "sentiment",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment_score",
                    "orig": "sentiment_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pubdatedesc"
                  },
                  {
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "to_date",
                    "orig": "to_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "2026-05-31"
                  },
                  {
                    "name": "video",
                    "orig": "video",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "country",
                  "creator",
                  "datatype",
                  "domain",
                  "domainurl",
                  "excludecountry",
                  "excludedomain",
                  "excludelanguage",
                  "from_date",
                  "full_content",
                  "image",
                  "interval",
                  "language",
                  "market_id",
                  "organization",
                  "page",
                  "prioritydomain",
                  "q",
                  "q_in_meta",
                  "q_in_title",
                  "removeduplicate",
                  "sentiment",
                  "sentiment_score",
                  "size",
                  "sort",
                  "tag",
                  "to_date",
                  "video"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/1/crypto/count",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "crypto"
                },
                {
                  "lit": "count"
                }
              ],
              "parts": [
                "1",
                "crypto",
                "count"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "coin",
                    "orig": "coin",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "btc,eth"
                  },
                  {
                    "name": "domain",
                    "orig": "domain",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc,cnn"
                  },
                  {
                    "name": "domainurl",
                    "orig": "domainurl",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc.com,cnn.com"
                  },
                  {
                    "name": "excludedomain",
                    "orig": "excludedomain",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludelanguage",
                    "orig": "excludelanguage",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "from_date",
                    "orig": "from_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "2026-05-01"
                  },
                  {
                    "name": "full_content",
                    "orig": "full_content",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "image",
                    "orig": "image",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "interval",
                    "orig": "interval",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "all"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "en,hi"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "prioritydomain",
                    "orig": "prioritydomain",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "elections"
                  },
                  {
                    "name": "q_in_meta",
                    "orig": "qInMeta",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q_in_title",
                    "orig": "qInTitle",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "removeduplicate",
                    "orig": "removeduplicate",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment",
                    "orig": "sentiment",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pubdatedesc"
                  },
                  {
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "to_date",
                    "orig": "to_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "2026-05-31"
                  },
                  {
                    "name": "video",
                    "orig": "video",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "coin",
                  "domain",
                  "domainurl",
                  "excludedomain",
                  "excludelanguage",
                  "from_date",
                  "full_content",
                  "image",
                  "interval",
                  "language",
                  "page",
                  "prioritydomain",
                  "q",
                  "q_in_meta",
                  "q_in_title",
                  "removeduplicate",
                  "sentiment",
                  "size",
                  "sort",
                  "tag",
                  "to_date",
                  "video"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "crypto": {
      "fields": [
        {
          "name": "ai_tag",
          "title": "Ai Tag",
          "type": "`$ANY`",
          "short": "AI-classified topic tags (crypto-specific tag set)."
        },
        {
          "name": "article_id",
          "title": "Article Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique article identifier (32 characters)."
        },
        {
          "name": "coin",
          "title": "Coin",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Cryptocurrencies the article mentions, by ticker symbol."
        },
        {
          "name": "content",
          "title": "Content",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Full article text."
        },
        {
          "name": "creator",
          "title": "Creator",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article author(s)."
        },
        {
          "name": "description",
          "title": "Description",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Short article description."
        },
        {
          "name": "duplicate",
          "title": "Duplicate",
          "type": "`$BOOLEAN`",
          "short": "Whether the article is a duplicate of another article."
        },
        {
          "name": "fetched_at",
          "title": "Fetched At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "When the article was collected, `YYYY-MM-DD HH:MM:SS`."
        },
        {
          "name": "image_url",
          "title": "Image Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article image URL.",
          "format": "uri"
        },
        {
          "name": "keywords",
          "title": "Keywords",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article keywords."
        },
        {
          "name": "language",
          "title": "Language",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Language name, e.g."
        },
        {
          "name": "link",
          "title": "Link",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article URL.",
          "format": "uri"
        },
        {
          "name": "pubDate",
          "title": "Pub Date",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`."
        },
        {
          "name": "pubDateTZ",
          "title": "Pub Date Tz",
          "type": "`$STRING`",
          "short": "Timezone of the dates in this article."
        },
        {
          "name": "sentiment",
          "title": "Sentiment",
          "type": "`$ANY`",
          "short": "Overall sentiment: positive, neutral, or negative."
        },
        {
          "name": "sentiment_stats",
          "title": "Sentiment Stats",
          "type": "`$ANY`",
          "short": "Sentiment percentage breakdown."
        },
        {
          "name": "source_icon",
          "title": "Source Icon",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source icon URL.",
          "format": "uri"
        },
        {
          "name": "source_id",
          "title": "Source Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source id (usable with the `domain` filter)."
        },
        {
          "name": "source_name",
          "title": "Source Name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source display name."
        },
        {
          "name": "source_priority",
          "title": "Source Priority",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ],
          "short": "Source ranking (lower = higher-ranked)."
        },
        {
          "name": "source_url",
          "title": "Source Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source website URL.",
          "format": "uri"
        },
        {
          "name": "title",
          "title": "Title",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article title."
        },
        {
          "name": "video_url",
          "title": "Video Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article video URL.",
          "format": "uri"
        }
      ],
      "name": "crypto",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/1/crypto",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "crypto"
                }
              ],
              "parts": [
                "1",
                "crypto"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "coin",
                    "orig": "coin",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "btc,eth"
                  },
                  {
                    "name": "domain",
                    "orig": "domain",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc,cnn"
                  },
                  {
                    "name": "domainurl",
                    "orig": "domainurl",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc.com,cnn.com"
                  },
                  {
                    "name": "excludedomain",
                    "orig": "excludedomain",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludefield",
                    "orig": "excludefield",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "content,keywords"
                  },
                  {
                    "name": "excludelanguage",
                    "orig": "excludelanguage",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "from_date",
                    "orig": "from_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2026-05-01"
                  },
                  {
                    "name": "full_content",
                    "orig": "full_content",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "image",
                    "orig": "image",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "en,hi"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "1749547200000000000"
                  },
                  {
                    "name": "prioritydomain",
                    "orig": "prioritydomain",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "elections"
                  },
                  {
                    "name": "q_in_meta",
                    "orig": "qInMeta",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q_in_title",
                    "orig": "qInTitle",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "removeduplicate",
                    "orig": "removeduplicate",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment",
                    "orig": "sentiment",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pubdatedesc"
                  },
                  {
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "timeframe",
                    "orig": "timeframe",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "24"
                  },
                  {
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Asia/Kolkata"
                  },
                  {
                    "name": "to_date",
                    "orig": "to_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2026-05-31"
                  },
                  {
                    "name": "url",
                    "orig": "url",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "video",
                    "orig": "video",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "coin",
                  "domain",
                  "domainurl",
                  "excludedomain",
                  "excludefield",
                  "excludelanguage",
                  "from_date",
                  "full_content",
                  "id",
                  "image",
                  "language",
                  "page",
                  "prioritydomain",
                  "q",
                  "q_in_meta",
                  "q_in_title",
                  "removeduplicate",
                  "sentiment",
                  "size",
                  "sort",
                  "tag",
                  "timeframe",
                  "timezone",
                  "to_date",
                  "url",
                  "video"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "latest": {
      "fields": [
        {
          "name": "ai_org",
          "title": "Ai Org",
          "type": "`$ANY`",
          "short": "AI-extracted organization names."
        },
        {
          "name": "ai_region",
          "title": "Ai Region",
          "type": "`$ANY`",
          "short": "AI-extracted regions, e.g."
        },
        {
          "name": "ai_summary",
          "title": "Ai Summary",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "AI-generated article summary."
        },
        {
          "name": "ai_tag",
          "title": "Ai Tag",
          "type": "`$ANY`",
          "short": "AI-classified topic tags."
        },
        {
          "name": "article_id",
          "title": "Article Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique article identifier (32 characters)."
        },
        {
          "name": "category",
          "title": "Category",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article categories."
        },
        {
          "name": "content",
          "title": "Content",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Full article text."
        },
        {
          "name": "country",
          "title": "Country",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Country names, e.g."
        },
        {
          "name": "creator",
          "title": "Creator",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article author(s)."
        },
        {
          "name": "datatype",
          "title": "Datatype",
          "type": "`$STRING`",
          "short": "Content type, e.g."
        },
        {
          "name": "description",
          "title": "Description",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Short article description."
        },
        {
          "name": "duplicate",
          "title": "Duplicate",
          "type": "`$BOOLEAN`",
          "short": "Whether the article is a duplicate of another article."
        },
        {
          "name": "fetched_at",
          "title": "Fetched At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "When the article was collected, `YYYY-MM-DD HH:MM:SS`."
        },
        {
          "name": "image_url",
          "title": "Image Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article image URL.",
          "format": "uri"
        },
        {
          "name": "keywords",
          "title": "Keywords",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article keywords."
        },
        {
          "name": "language",
          "title": "Language",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Language name, e.g."
        },
        {
          "name": "link",
          "title": "Link",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article URL.",
          "format": "uri"
        },
        {
          "name": "pubDate",
          "title": "Pub Date",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`."
        },
        {
          "name": "pubDateTZ",
          "title": "Pub Date Tz",
          "type": "`$STRING`",
          "short": "Timezone of the dates in this article."
        },
        {
          "name": "sentiment",
          "title": "Sentiment",
          "type": "`$ANY`",
          "short": "Overall sentiment: positive, neutral, or negative."
        },
        {
          "name": "sentiment_stats",
          "title": "Sentiment Stats",
          "type": "`$ANY`",
          "short": "Sentiment percentage breakdown."
        },
        {
          "name": "source_icon",
          "title": "Source Icon",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source icon URL.",
          "format": "uri"
        },
        {
          "name": "source_id",
          "title": "Source Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source id (usable with the `domain` filter)."
        },
        {
          "name": "source_name",
          "title": "Source Name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source display name."
        },
        {
          "name": "source_priority",
          "title": "Source Priority",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ],
          "short": "Source ranking (lower = higher-ranked)."
        },
        {
          "name": "source_url",
          "title": "Source Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source website URL.",
          "format": "uri"
        },
        {
          "name": "title",
          "title": "Title",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article title."
        },
        {
          "name": "video_url",
          "title": "Video Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article video URL.",
          "format": "uri"
        }
      ],
      "name": "latest",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/1/latest",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "latest"
                }
              ],
              "parts": [
                "1",
                "latest"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "business,technology"
                  },
                  {
                    "name": "country",
                    "orig": "country",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "us"
                  },
                  {
                    "name": "creator",
                    "orig": "creator",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "datatype",
                    "orig": "datatype",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "domain",
                    "orig": "domain",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc,cnn"
                  },
                  {
                    "name": "domainurl",
                    "orig": "domainurl",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc.com,cnn.com"
                  },
                  {
                    "name": "excludecategory",
                    "orig": "excludecategory",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludecountry",
                    "orig": "excludecountry",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludedomain",
                    "orig": "excludedomain",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludefield",
                    "orig": "excludefield",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "content,keywords"
                  },
                  {
                    "name": "excludelanguage",
                    "orig": "excludelanguage",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "full_content",
                    "orig": "full_content",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "image",
                    "orig": "image",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "en,hi"
                  },
                  {
                    "name": "organization",
                    "orig": "organization",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "1749547200000000000"
                  },
                  {
                    "name": "prioritydomain",
                    "orig": "prioritydomain",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "elections"
                  },
                  {
                    "name": "q_in_meta",
                    "orig": "qInMeta",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q_in_title",
                    "orig": "qInTitle",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "region",
                    "orig": "region",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "removeduplicate",
                    "orig": "removeduplicate",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment",
                    "orig": "sentiment",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment_score",
                    "orig": "sentiment_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pubdatedesc"
                  },
                  {
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "timeframe",
                    "orig": "timeframe",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "24"
                  },
                  {
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Asia/Kolkata"
                  },
                  {
                    "name": "url",
                    "orig": "url",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "video",
                    "orig": "video",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "category",
                  "country",
                  "creator",
                  "datatype",
                  "domain",
                  "domainurl",
                  "excludecategory",
                  "excludecountry",
                  "excludedomain",
                  "excludefield",
                  "excludelanguage",
                  "full_content",
                  "id",
                  "image",
                  "language",
                  "organization",
                  "page",
                  "prioritydomain",
                  "q",
                  "q_in_meta",
                  "q_in_title",
                  "region",
                  "removeduplicate",
                  "sentiment",
                  "sentiment_score",
                  "size",
                  "sort",
                  "tag",
                  "timeframe",
                  "timezone",
                  "url",
                  "video"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "market": {
      "fields": [
        {
          "name": "ai_org",
          "title": "Ai Org",
          "type": "`$ANY`",
          "short": "AI-extracted organization names."
        },
        {
          "name": "ai_summary",
          "title": "Ai Summary",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "AI-generated article summary."
        },
        {
          "name": "ai_tag",
          "title": "Ai Tag",
          "type": "`$ANY`",
          "short": "AI-classified topic tags."
        },
        {
          "name": "article_id",
          "title": "Article Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique article identifier (32 characters)."
        },
        {
          "name": "content",
          "title": "Content",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Full article text."
        },
        {
          "name": "country",
          "title": "Country",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Country names, e.g."
        },
        {
          "name": "creator",
          "title": "Creator",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article author(s)."
        },
        {
          "name": "datatype",
          "title": "Datatype",
          "type": "`$STRING`",
          "short": "Content type, e.g."
        },
        {
          "name": "description",
          "title": "Description",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Short article description."
        },
        {
          "name": "duplicate",
          "title": "Duplicate",
          "type": "`$BOOLEAN`",
          "short": "Whether the article is a duplicate of another article."
        },
        {
          "name": "fetched_at",
          "title": "Fetched At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "When the article was collected, `YYYY-MM-DD HH:MM:SS`."
        },
        {
          "name": "image_url",
          "title": "Image Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article image URL.",
          "format": "uri"
        },
        {
          "name": "keywords",
          "title": "Keywords",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article keywords."
        },
        {
          "name": "language",
          "title": "Language",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Language name, e.g."
        },
        {
          "name": "link",
          "title": "Link",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article URL.",
          "format": "uri"
        },
        {
          "name": "market_id",
          "title": "Market Id",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Unique market identifiers for the tickers in `symbol` — the values accepted by the `market_id` filter."
        },
        {
          "name": "pubDate",
          "title": "Pub Date",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`."
        },
        {
          "name": "pubDateTZ",
          "title": "Pub Date Tz",
          "type": "`$STRING`",
          "short": "Timezone of the dates in this article."
        },
        {
          "name": "sentiment",
          "title": "Sentiment",
          "type": "`$ANY`",
          "short": "Overall sentiment: positive, neutral, or negative."
        },
        {
          "name": "sentiment_stats",
          "title": "Sentiment Stats",
          "type": "`$ANY`",
          "short": "Sentiment percentage breakdown."
        },
        {
          "name": "source_icon",
          "title": "Source Icon",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source icon URL.",
          "format": "uri"
        },
        {
          "name": "source_id",
          "title": "Source Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source id (usable with the `domain` filter)."
        },
        {
          "name": "source_name",
          "title": "Source Name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source display name."
        },
        {
          "name": "source_priority",
          "title": "Source Priority",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ],
          "short": "Source ranking (lower = higher-ranked)."
        },
        {
          "name": "source_url",
          "title": "Source Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source website URL.",
          "format": "uri"
        },
        {
          "name": "symbol",
          "title": "Symbol",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Stock ticker symbols the article mentions."
        },
        {
          "name": "title",
          "title": "Title",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article title."
        },
        {
          "name": "video_url",
          "title": "Video Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article video URL.",
          "format": "uri"
        }
      ],
      "name": "market",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/1/market",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "market"
                }
              ],
              "parts": [
                "1",
                "market"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "country",
                    "orig": "country",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "us"
                  },
                  {
                    "name": "creator",
                    "orig": "creator",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "datatype",
                    "orig": "datatype",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "domain",
                    "orig": "domain",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc,cnn"
                  },
                  {
                    "name": "domainurl",
                    "orig": "domainurl",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc.com,cnn.com"
                  },
                  {
                    "name": "excludecountry",
                    "orig": "excludecountry",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludedomain",
                    "orig": "excludedomain",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludefield",
                    "orig": "excludefield",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "content,keywords"
                  },
                  {
                    "name": "excludelanguage",
                    "orig": "excludelanguage",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "from_date",
                    "orig": "from_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2026-05-01"
                  },
                  {
                    "name": "full_content",
                    "orig": "full_content",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "image",
                    "orig": "image",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "en,hi"
                  },
                  {
                    "name": "market_id",
                    "orig": "market_id",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "aapl-us-vy,msft-us-vy"
                  },
                  {
                    "name": "organization",
                    "orig": "organization",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "1749547200000000000"
                  },
                  {
                    "name": "prioritydomain",
                    "orig": "prioritydomain",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "elections"
                  },
                  {
                    "name": "q_in_meta",
                    "orig": "qInMeta",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q_in_title",
                    "orig": "qInTitle",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "removeduplicate",
                    "orig": "removeduplicate",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment",
                    "orig": "sentiment",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment_score",
                    "orig": "sentiment_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pubdatedesc"
                  },
                  {
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "timeframe",
                    "orig": "timeframe",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "24"
                  },
                  {
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Asia/Kolkata"
                  },
                  {
                    "name": "to_date",
                    "orig": "to_date",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "2026-05-31"
                  },
                  {
                    "name": "url",
                    "orig": "url",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "video",
                    "orig": "video",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "country",
                  "creator",
                  "datatype",
                  "domain",
                  "domainurl",
                  "excludecountry",
                  "excludedomain",
                  "excludefield",
                  "excludelanguage",
                  "from_date",
                  "full_content",
                  "id",
                  "image",
                  "language",
                  "market_id",
                  "organization",
                  "page",
                  "prioritydomain",
                  "q",
                  "q_in_meta",
                  "q_in_title",
                  "removeduplicate",
                  "sentiment",
                  "sentiment_score",
                  "size",
                  "sort",
                  "tag",
                  "timeframe",
                  "timezone",
                  "to_date",
                  "url",
                  "video"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "new": {
      "fields": [
        {
          "name": "ai_org",
          "title": "Ai Org",
          "type": "`$ANY`",
          "short": "AI-extracted organization names."
        },
        {
          "name": "ai_region",
          "title": "Ai Region",
          "type": "`$ANY`",
          "short": "AI-extracted regions, e.g."
        },
        {
          "name": "ai_summary",
          "title": "Ai Summary",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "AI-generated article summary."
        },
        {
          "name": "ai_tag",
          "title": "Ai Tag",
          "type": "`$ANY`",
          "short": "AI-classified topic tags."
        },
        {
          "name": "article_id",
          "title": "Article Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Unique article identifier (32 characters)."
        },
        {
          "name": "category",
          "title": "Category",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article categories."
        },
        {
          "name": "content",
          "title": "Content",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Full article text."
        },
        {
          "name": "country",
          "title": "Country",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Country names, e.g."
        },
        {
          "name": "creator",
          "title": "Creator",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article author(s)."
        },
        {
          "name": "datatype",
          "title": "Datatype",
          "type": "`$STRING`",
          "short": "Content type, e.g."
        },
        {
          "name": "description",
          "title": "Description",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Short article description."
        },
        {
          "name": "duplicate",
          "title": "Duplicate",
          "type": "`$BOOLEAN`",
          "short": "Whether the article is a duplicate of another article."
        },
        {
          "name": "fetched_at",
          "title": "Fetched At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "When the article was collected, `YYYY-MM-DD HH:MM:SS`."
        },
        {
          "name": "image_url",
          "title": "Image Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article image URL.",
          "format": "uri"
        },
        {
          "name": "keywords",
          "title": "Keywords",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Article keywords."
        },
        {
          "name": "language",
          "title": "Language",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Language name, e.g."
        },
        {
          "name": "link",
          "title": "Link",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article URL.",
          "format": "uri"
        },
        {
          "name": "pubDate",
          "title": "Pub Date",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Publish date, `YYYY-MM-DD HH:MM:SS`, in the requested `timezone`."
        },
        {
          "name": "pubDateTZ",
          "title": "Pub Date Tz",
          "type": "`$STRING`",
          "short": "Timezone of the dates in this article."
        },
        {
          "name": "sentiment",
          "title": "Sentiment",
          "type": "`$ANY`",
          "short": "Overall sentiment: positive, neutral, or negative."
        },
        {
          "name": "sentiment_stats",
          "title": "Sentiment Stats",
          "type": "`$ANY`",
          "short": "Sentiment percentage breakdown."
        },
        {
          "name": "source_icon",
          "title": "Source Icon",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source icon URL.",
          "format": "uri"
        },
        {
          "name": "source_id",
          "title": "Source Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source id (usable with the `domain` filter)."
        },
        {
          "name": "source_name",
          "title": "Source Name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source display name."
        },
        {
          "name": "source_priority",
          "title": "Source Priority",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ],
          "short": "Source ranking (lower = higher-ranked)."
        },
        {
          "name": "source_url",
          "title": "Source Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source website URL.",
          "format": "uri"
        },
        {
          "name": "title",
          "title": "Title",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article title."
        },
        {
          "name": "video_url",
          "title": "Video Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Article video URL.",
          "format": "uri"
        }
      ],
      "name": "new",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/1/news",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "news"
                }
              ],
              "parts": [
                "1",
                "news"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "business,technology"
                  },
                  {
                    "name": "country",
                    "orig": "country",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "us"
                  },
                  {
                    "name": "creator",
                    "orig": "creator",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "datatype",
                    "orig": "datatype",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "domain",
                    "orig": "domain",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc,cnn"
                  },
                  {
                    "name": "domainurl",
                    "orig": "domainurl",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc.com,cnn.com"
                  },
                  {
                    "name": "excludecategory",
                    "orig": "excludecategory",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludecountry",
                    "orig": "excludecountry",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludedomain",
                    "orig": "excludedomain",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludefield",
                    "orig": "excludefield",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "content,keywords"
                  },
                  {
                    "name": "excludelanguage",
                    "orig": "excludelanguage",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "full_content",
                    "orig": "full_content",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "image",
                    "orig": "image",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "en,hi"
                  },
                  {
                    "name": "organization",
                    "orig": "organization",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "page",
                    "orig": "page",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "1749547200000000000"
                  },
                  {
                    "name": "prioritydomain",
                    "orig": "prioritydomain",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "elections"
                  },
                  {
                    "name": "q_in_meta",
                    "orig": "qInMeta",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q_in_title",
                    "orig": "qInTitle",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "region",
                    "orig": "region",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "removeduplicate",
                    "orig": "removeduplicate",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment",
                    "orig": "sentiment",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment_score",
                    "orig": "sentiment_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "sort",
                    "orig": "sort",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pubdatedesc"
                  },
                  {
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "timeframe",
                    "orig": "timeframe",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "24"
                  },
                  {
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Asia/Kolkata"
                  },
                  {
                    "name": "url",
                    "orig": "url",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "video",
                    "orig": "video",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "category",
                  "country",
                  "creator",
                  "datatype",
                  "domain",
                  "domainurl",
                  "excludecategory",
                  "excludecountry",
                  "excludedomain",
                  "excludefield",
                  "excludelanguage",
                  "full_content",
                  "id",
                  "image",
                  "language",
                  "organization",
                  "page",
                  "prioritydomain",
                  "q",
                  "q_in_meta",
                  "q_in_title",
                  "region",
                  "removeduplicate",
                  "sentiment",
                  "sentiment_score",
                  "size",
                  "sort",
                  "tag",
                  "timeframe",
                  "timezone",
                  "url",
                  "video"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "source": {
      "fields": [
        {
          "name": "category",
          "title": "Category",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Categories the source covers."
        },
        {
          "name": "country",
          "title": "Country",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Countries the source covers."
        },
        {
          "name": "description",
          "title": "Description",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Short description of the source."
        },
        {
          "name": "icon",
          "title": "Icon",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source icon URL.",
          "format": "uri"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Source id."
        },
        {
          "name": "language",
          "title": "Language",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Languages the source publishes in."
        },
        {
          "name": "last_fetch",
          "title": "Last Fetch",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "When the source was last fetched, `YYYY-MM-DD HH:MM:SS`."
        },
        {
          "name": "name",
          "title": "Name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source display name."
        },
        {
          "name": "priority",
          "title": "Priority",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ],
          "short": "Source ranking (lower = higher-ranked)."
        },
        {
          "name": "total_article",
          "title": "Total Article",
          "type": [
            "`$ONE`",
            [
              "`$INTEGER`",
              "`$NULL`"
            ]
          ],
          "short": "Number of articles collected from this source."
        },
        {
          "name": "url",
          "title": "Url",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Source website URL.",
          "format": "uri"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "source",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/1/sources",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "sources"
                }
              ],
              "parts": [
                "1",
                "sources"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "business,technology"
                  },
                  {
                    "name": "country",
                    "orig": "country",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "us"
                  },
                  {
                    "name": "domainurl",
                    "orig": "domainurl",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc.com,cnn.com"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "en,hi"
                  },
                  {
                    "name": "prioritydomain",
                    "orig": "prioritydomain",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "category",
                  "country",
                  "domainurl",
                  "language",
                  "prioritydomain"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "websocket": {
      "fields": [],
      "name": "websocket",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/ws/event",
              "segments": [
                {
                  "lit": "ws"
                },
                {
                  "lit": "event"
                }
              ],
              "parts": [
                "ws",
                "event"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "registration_id",
                    "orig": "registration_id",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "9b2d1e8a7c4f4b6e9d3a5c7e1f2a4b6c"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "registration_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "websocket_delete_envelope": {
      "fields": [],
      "name": "websocket_delete_envelope",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/1/websocket/delete",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "websocket"
                },
                {
                  "lit": "delete"
                }
              ],
              "parts": [
                "1",
                "websocket",
                "delete"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "registration_id",
                    "orig": "registration_id",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "9b2d1e8a7c4f4b6e9d3a5c7e1f2a4b6c"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "registration_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "websocket_query_list_envelope": {
      "fields": [
        {
          "name": "results",
          "title": "Results",
          "type": "`$OBJECT`",
          "req": true
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "totalQueries",
          "title": "Total Queries",
          "type": "`$INTEGER`",
          "req": true,
          "short": "Number of active registrations for this API key."
        }
      ],
      "name": "websocket_query_list_envelope",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/1/websocket/fetch",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "websocket"
                },
                {
                  "lit": "fetch"
                }
              ],
              "parts": [
                "1",
                "websocket",
                "fetch"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true,
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "websocket_register_envelope": {
      "fields": [
        {
          "name": "message",
          "title": "Message",
          "type": "`$STRING`",
          "req": true,
          "short": "Human-readable confirmation."
        },
        {
          "name": "registration_id",
          "title": "Registration Id",
          "type": "`$STRING`",
          "req": true,
          "short": "Identifier of the registered query (32 characters)."
        }
      ],
      "name": "websocket_register_envelope",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/1/websocket/register",
              "segments": [
                {
                  "lit": "1"
                },
                {
                  "lit": "websocket"
                },
                {
                  "lit": "register"
                }
              ],
              "parts": [
                "1",
                "websocket",
                "register"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "args": {
                "query": [
                  {
                    "name": "apikey",
                    "orig": "apikey",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "pub_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  },
                  {
                    "name": "category",
                    "orig": "category",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "business,technology"
                  },
                  {
                    "name": "country",
                    "orig": "country",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "us"
                  },
                  {
                    "name": "creator",
                    "orig": "creator",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "datatype",
                    "orig": "datatype",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "domain",
                    "orig": "domain",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc,cnn"
                  },
                  {
                    "name": "domainurl",
                    "orig": "domainurl",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "bbc.com,cnn.com"
                  },
                  {
                    "name": "excludecategory",
                    "orig": "excludecategory",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludecountry",
                    "orig": "excludecountry",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludedomain",
                    "orig": "excludedomain",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "excludefield",
                    "orig": "excludefield",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "content,keywords"
                  },
                  {
                    "name": "excludelanguage",
                    "orig": "excludelanguage",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "full_content",
                    "orig": "full_content",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "image",
                    "orig": "image",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "language",
                    "orig": "language",
                    "type": "`$ARRAY`",
                    "kind": "query",
                    "example": "en,hi"
                  },
                  {
                    "name": "organization",
                    "orig": "organization",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "prioritydomain",
                    "orig": "prioritydomain",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "elections"
                  },
                  {
                    "name": "q_in_meta",
                    "orig": "qInMeta",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "q_in_title",
                    "orig": "qInTitle",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "region",
                    "orig": "region",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "removeduplicate",
                    "orig": "removeduplicate",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment",
                    "orig": "sentiment",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "sentiment_score",
                    "orig": "sentiment_score",
                    "type": "`$NUMBER`",
                    "kind": "query"
                  },
                  {
                    "name": "tag",
                    "orig": "tag",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "Asia/Kolkata"
                  },
                  {
                    "name": "video",
                    "orig": "video",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "apikey",
                  "category",
                  "country",
                  "creator",
                  "datatype",
                  "domain",
                  "domainurl",
                  "excludecategory",
                  "excludecountry",
                  "excludedomain",
                  "excludefield",
                  "excludelanguage",
                  "full_content",
                  "image",
                  "language",
                  "organization",
                  "prioritydomain",
                  "q",
                  "q_in_meta",
                  "q_in_title",
                  "region",
                  "removeduplicate",
                  "sentiment",
                  "sentiment_score",
                  "tag",
                  "timezone",
                  "video"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

