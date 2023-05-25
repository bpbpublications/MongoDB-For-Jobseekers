# Set the MongoDB host and port
$host = "localhost"
$port = 27017

# Set the name of the database to be backed up
$dbName = "test"

# Set the location where the backup will be saved
$backupLocation = "C:\store\backups\"

# Get the current date and time to be used as the backup file name
$date = Get-Date -Format "yyyy-MM-dd-HH-mm-ss"
$backupFile = "$backupLocation$dbName-$date.zip"

# Create the backup directory if it doesn't exist
if (!(Test-Path $backupLocation)) {
    New-Item -ItemType Directory -Path $backupLocation
}

# Create the mongodump command
$mongodumpCommand = "mongodump --host $host --port $port --db $dbName --out $backupLocation$dbName-$date"

# Run the mongodump command
& $mongodumpCommand

# Compress the backup into a zip file
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory("$backupLocation$dbName-$date", $backupFile)

# Remove the unzipped backup
Remove-Item "$backupLocation$dbName-$date" -Recurse

# Print a success message
Write-Host "Backup complete: $backupFile"
