import tarfile
import subprocess

# Set the MongoDB host and port
host = "localhost"
port = 27017

# Set the location of the backup file
backup_file = "/store/backups/test-2022-10-01-10-00-00.tar.gz"

# Set the location where the backup will be restored
restore_location = "/tmp/restore"

# Extract the backup file
with tarfile.open(backup_file) as tar:
    tar.extractall(path=restore_location)

# Get the name of the backup directory
backup_dir = subprocess.run(
    ["ls", restore_location], capture_output=True).stdout.decode().strip()

# Create the mongorestore command
mongorestore_command = ["mongorestore", "--host", host, "--port",
                        str(port), "--drop", f"{restore_location}/{backup_dir}"]

# Run the mongorestore command
subprocess.run(mongorestore_command)

# Print a success message
print("Restore complete")
