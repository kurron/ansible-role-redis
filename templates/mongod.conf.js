# Derived from https://docs.mongodb.com/manual/reference/configuration-options/

# The Linux package init scripts included in the official MongoDB packages depend on specific values for systemLog.path, storage.dbpath, and processManagement.fork.
# If you modify these settings in the default configuration file, mongod may not start.
# For the above reason, we do not allow changing of those values.

systemLog:
    path: "/var/log/mongodb/mongod.log"
    logAppend: true
    destination: "file"
    timeStampFormat: "ctime"

processManagement:
    fork: true
    pidFilePath: "/var/run/mongodb/mongod.pid"

net:
    port: {{mongodb_port}}

storage:
    dbPath: "/var/lib/mongo"
    journal:
        enabled: true
