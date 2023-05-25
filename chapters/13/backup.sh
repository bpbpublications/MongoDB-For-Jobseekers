#!/bin/bash

# Set the MongoDB host and port
host=localhost
port=27017

# Set the name of the database to be backed up
db_name=test

# Set the location where the backup will be saved
backup_location=/store/backups/

# Get the current date and time to be used as the backup file name
now=$(date +"%Y-%m-%d-%H-%M-%S")

# Create the backup directory if it doesn't exist
if [ ! -d "$backup_location" ]; then
  mkdir -p "$backup_location"
fi

# Run the mongodump command
mongodump --host $host --port $port --db $db_name --out $backup_location$now

# Compress the backup into a tar.gz file
tar -zcvf $backup_location$now.tar.gz $backup_location$now

# Remove the unzipped backup
rm -rf $backup_location$now

# Print a success message
echo "Backup complete: $backup_location$now"