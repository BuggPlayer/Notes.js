Define Replication in MongoDB

Replication is the process of synchronizing data across multiple MongoDB servers to provide redundancy, increase availability, and improve scalability. In a replicated MongoDB deployment, one server acts as the primary server, while the others act as secondary servers. The primary server receives all write operations and propagates changes to the secondary servers. If the primary server fails, one of the secondary servers is automatically elected as the new primary. Replication can be used for backup and disaster recovery, load balancing, and improving read performance.



What is Sharding in MongoDB?

Sharding is a method for distributing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations. MongoDB supports horizontal scaling through sharding. MongoDB shards data at the collection level, distributing the collection data across the shards in the cluster.