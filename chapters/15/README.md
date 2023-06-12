# Chapter 15: Tools for Success – MongoDB Shell and Compass UI

In this chapter, we will dig a bit deeper into some of the most useful and common tools you will use with MongoDB. We will learn how to configure and personalize the MongoDB Shell, mongosh, as well as how to create useful custom functions you can use within the shell. Then, we will explore the MongoDB Visual Studio Code extension, and MongoDB Playgrounds. Lastly, we will do a bit of a review, as well as a more expansive investigation of MongoDB Compass, the official GUI for MongoDB. By the end of this chapter, you should be empowered to take your use of all these tools to the next level.

### Example `.mongoshrc.js`

This example will set a custom prompt for MongoDB

```javascript
const prompt = () => {
  return `💾 ${db.getName()} > `;
};
```

### MongoDB VSCode Playgrounds

[https://www.mongodb.com/docs/mongodb-vscode/playgrounds/](https://www.mongodb.com/docs/mongodb-vscode/playgrounds/)

### Learn Mongo "Playground"

You can find an extended version of the files and topics discussed in this chapter in the Learn Mongo Playground at the report below.

#### [https://github.com/learnmongo/playground](https://github.com/learnmongo/playground)
