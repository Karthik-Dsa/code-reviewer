# Deployment Guide for Vercel

## Quick Deploy

The easiest way to deploy Jedi Code Council is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Karthik-Dsa/code-reviewer)

## Manual Deployment Steps

### 1. Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Groq API key from [console.groq.com](https://console.groq.com)

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next

### 3. Configure Environment Variables

In the Vercel project settings, add the following environment variable:

```
GROQ_API_KEY=your_actual_groq_api_key
```

To add environment variables:
1. Go to your project in Vercel
2. Click on "Settings"
3. Navigate to "Environment Variables"
4. Add `GROQ_API_KEY` with your key from Groq
5. Select all environments (Production, Preview, Development)
6. Click "Save"

### 4. Deploy

Click "Deploy" and Vercel will:
- Install dependencies
- Build your Next.js application
- Deploy to a production URL

Your app will be live at: `https://your-project-name.vercel.app`

## Post-Deployment

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

### Environment-Specific Settings

You can configure different API keys for different environments:

- **Production**: Your production Groq API key
- **Preview**: A separate key for preview deployments
- **Development**: Another key for local development

## Monitoring

Vercel provides built-in analytics and monitoring:

1. Go to your project dashboard
2. Check "Analytics" for usage metrics
3. Check "Logs" for runtime logs and errors

## Troubleshooting

### Build Failures

If the build fails:
1. Check the build logs in Vercel
2. Ensure all dependencies are in `package.json`
3. Verify environment variables are set correctly

### API Errors

If you get API errors:
1. Verify your GROQ_API_KEY is valid
2. Check Groq API status at [status.groq.com](https://status.groq.com)
3. Review API rate limits and usage

### Cold Starts

Serverless functions may have cold starts. The first request after inactivity might be slower.

## Performance Optimization

For better performance:

1. **Enable Edge Functions**: Consider moving API routes to Edge Runtime
2. **Caching**: Implement response caching where appropriate
3. **Image Optimization**: Next.js automatically optimizes images

## Security

- Never commit `.env.local` or expose API keys
- Use environment variables for all sensitive data
- Enable Vercel's security headers in `next.config.js`

## Cost Considerations

- Vercel free tier includes:
  - 100 GB bandwidth per month
  - Unlimited API requests
  - 100 GB-hours of execution time

- Groq free tier includes generous limits for development

Monitor your usage to avoid unexpected charges.
