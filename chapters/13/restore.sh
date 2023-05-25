# Set the MongoDB host and port
host=localhost
port=27017

# Set the location of the backup file
backup_file="/store/backups/test-2022-10-01-10-00-00.tar.gz"

# Set the location where the backup will be restored
restore_location="/tmp/restore"

# Extract the backup file
tar -xzvf $backup_file -C $restore_location

# Get the name of the backup directory
backup_dir=`ls $restore_location`

# Create the mongorestore command
mongorestore_command="mongorestore --host $host --port $port --drop $restore_location/$backup_dir"

# Run the mongorestore command
$mongorestore_command

# Print a success message
echo "Restore complete"
