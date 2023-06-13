# Chapter 12: Seamless Scaling – Replication and Sharding

In this chapter, we will cover the core concepts of replication in MongoDB, discussing how to setup a replica set and how to leverage the concept of “sharding” for horizontal scaling using MongoDB. By the end of this chapter, you should be comfortable setting up a basic replica set and have a knowledge of how to administrate that replica set. You will also have a solid idea of how sharding works in MongoDB and how and why you would use it for your application.

### Node Config File Example

`node1.conf`

```yaml
net:
  port: 27021
  bindIp: localhost
processManagement:
  fork: true
storage:
  dbPath: /store/mongodb/node1
systemLog:
  destination: file
  path: /store/logs/node1/mongod.log
  logAppend: true
replication:
  replSetName: myReplSet
```
