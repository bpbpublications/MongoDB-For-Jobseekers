# Set the MongoDB host and port
$host = "localhost"
$port = 27017

# Set the location of the backup file
$backupFile = "C:\store\backups\test-2022-10-01-10-00-00.zip"

# Set the location where the backup will be restored
$restoreLocation = "C:\temp\restore"

# Extract the backup file
Expand-Archive -Path $backupFile -DestinationPath $restoreLocation

# Get the name of the backup directory
$backupDir = Get-ChildItem $restoreLocation | Select-Object -First 1

# Create the mongorestore command
$mongorestoreCommand = "mongorestore.exe --host $host --port $port --drop `"$($restoreLocation)\$($backupDir.Name)\`""

# Run the mongorestore command
Invoke-Expression $mongorestoreCommand

# Print a success message
Write-Host "Restore complete"
