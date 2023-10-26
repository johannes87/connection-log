Check internet connectivity, log result, and on success, also log the IP address.

# Server setup

A systemd service like this should work:

```
[Unit]
Description=connection-log server
After=network.target

[Service]
Type=simple
User=your-user-name
WorkingDirectory=/home/your-user-name/path/to/checkout/of/connection-log
ExecStart=npm run start-server --silent

[Install]
WantedBy=multi-user.target
```

# Client setup

A crontab entry like this should work:

```
* * * * * npm run start-client --silent --prefix /home/path/to/checkout/of/connection-log
```