# Chapter 8: The MongoDB Aggregation Framework

For more complex cases, MongoDB offers what is called the Aggregation Framework, which allows a structured way to formulate a series of steps, called a “pipeline”, to get back just the data you need. In this chapter, we will discuss this framework and dive into some examples of its use. Covering the Aggregation Framework in-depth is beyond the scope of this book. However, by the end of this chapter, you should have a solid idea of how the framework works and how you can use it to fit your needs.

### Example Three Stage Pipeline

```json
[
  {
    "$match": {
      "rating": {
        "$exists": true
      }
    }
  },
  {
    "$group": {
      "_id": "$type",
      "recipeCount": {
        "$count": {}
      }
    }
  },
  {
    "$sort": {
      "_id": 1
    }
  }
]
```
