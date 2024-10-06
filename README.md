# RabbitMQ Server Setup

To start the RabbitMQ server, run the following command in your console:

```bash
docker-compose up -d


Access the RabbitMQ Management Interface using the following URL:

http://localhost:15672/

Login Credentials:

Username: guest
Password: guest

Sending Test Messages
To send test messages, use the following JSON payload via a POST request to localhost:3000/message/send-message:

[
  {
    "url": "url.com",
    "msisdn": 1234567890,
    "user": "user",
    "password": "password",
    "msg": "Esto es una prueba",
    "sid": 1,
    "countryCode": "COL"
  },
  {
    "url": "url.com",
    "msisdn": 1234567890,
    "user": "user",
    "password": "password",
    "msg": "Esto es una prueba",
    "sid": 1,
    "countryCode": "COL"
  }
]
