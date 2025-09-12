# Ciao Bella Service

A simple Node.js web service that returns "ciao bella" when you ping it.

## Quick Start

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Test it:
   ```bash
   curl http://localhost:3000/
   ```

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t ciao-bella-service .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 ciao-bella-service
   ```

## API

**GET /** (or any path)
- Returns: JSON response with "ciao bella" message
- Status: 200 OK

Example response:
```json
{
  "message": "ciao bella",
  "timestamp": "2025-09-12T10:30:00.000Z",
  "path": "/"
}
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## Deployment Options

### Heroku
1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Deploy: `git push heroku main`

### Railway
1. Connect your GitHub repository
2. Railway will auto-deploy using the Dockerfile

### DigitalOcean App Platform
1. Connect your GitHub repository
2. Select Node.js buildpack
3. Set run command: `npm start`

### AWS/GCP/Azure
Use the provided Dockerfile for container deployment

## License

MIT