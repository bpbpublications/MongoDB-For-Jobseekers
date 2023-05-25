import os
import subprocess
import datetime
import tarfile

# Set the MongoDB host and port
host = "localhost"
port = 27017

# Set the name of the database to be backed up
db_name = "test"

# Set the location where the backup will be saved
backup_location = "/store/backups/"

# Create the backup directory if it doesn't exist
if not os.path.exists(backup_location):
    os.makedirs(backup_location)

# Get the current date and time to be used as the backup file name
now = datetime.datetime.now().strftime("%Y-%m-%d-%H-%M-%S")

# Create the mongodump command
mongodump_command = [
    "mongodump",
    "--host", host,
    "--port", str(port),
    "--db", db_name,
    "--out", backup_location + now
]

# Run the mongodump command
subprocess.run(mongodump_command, check=True)

# Compress the backup into a tar.gz file
with tarfile.open(backup_location + now + ".tar.gz", "w:gz") as tar:
    tar.add(backup_location + now, arcname=now)

# Remove the unzipped backup
shutil.rmtree(backup_location + now)

# Print a success message
print("Backup complete: " + backup_location + now + ".tar.gz")
