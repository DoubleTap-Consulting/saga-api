# phrhero-api
Node, Express, Objection, PostgresSQL

# Setting up development tools such as precommit hooks:
1. run `sh ./conf/bootstrap` from the root directory

# Installing PostGres for Mac
`brew install postgres`

# Accessing DB from Google Cloud
Install gcloud: https://cloud.google.com/sdk/docs/#install_the_latest_cloud_tools_version_cloudsdk_current_version

cd into phrhero-api

After installing, initialize your gcloud to connect with your phrhero gcloud account

`gcloud init`

Ensure gcloud works: 

`gcloud sql instances describe phrhero-data-dev`

Add your IP to the white list for our SQL server:
1. Go to https://console.cloud.google.com/sql/instances/phrhero-data-dev/authorization
2. go to http://ipv4.whatismyv6.com/ and note down your ip
3. whitelist your ip by clicking "Add network"

Connect to your psql database:

`https://cloud.google.com/sql/docs/postgres/external-connection-methods?hl=en_US`

For us, our static IP for our database is 104.154.74.181:

`psql "sslmode=disable dbname=postgres user=postgres hostaddr=104.154.74.181"`

`psql "sslmode=disable dbname=postgres user=postgres hostaddr=104.154.74.181"`

If you want to have a GUI to access your database, use pgAdmin.

# Bootstrapping/Refreshing DB from bash script

1. Run `./db/refresh` from the root directory

