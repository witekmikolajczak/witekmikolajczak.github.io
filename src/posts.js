export const posts = [
  {
    slug: 'hardening-react-native-pipelines',
    title: 'Hardening React Native pipelines',
    published: '2024-08-12',
    summary: 'CI lanes, OTA channels, and signing discipline that keep React Native releases boring.',
    content: `
### What we tightened
- Added per-lane signing checks in Fastlane
- Switched to EAS for OTA channels with staged rollouts
- Captured build artifacts with provenance metadata

### Why it matters
Build hygiene prevents supply-chain surprises when shipping weekly releases.

### Fastlane snippet
\`\`\`ruby
lane :ios_release do
  match(type: "appstore", readonly: true)
  build_app(scheme: "App", export_method: "app-store")
  sh("bundle exec fastlane run verify_build!")
end
\`\`\`

### Checklist before merging
- Lint + tests + type checks green
- OTA staged to 10% before 100%
- Release notes auto-posted to Slack
`,
  },
  {
    slug: 'nestjs-request-lifecycle',
    title: 'NestJS request lifecycle for reliability',
    published: '2024-06-05',
    summary: 'Interceptors, DTO validation, and rate limits to keep NestJS services predictable.',
    content: `
### Core practices
- Use interceptors for metrics and rate limits
- Keep DTOs strict and validated at the edge
- Prefer providers over singletons for testability

### Result
Better debuggability and guardrails across services.

### Sample interceptor
\`\`\`ts
@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        const time = Date.now() - now;
        metrics.timing('http_request_ms', time);
      })
    );
  }
}
\`\`\`

### DTO stance
- Validate every DTO with class-validator
- Keep DTOs flat; map to domain objects in services
- Reject early: fail fast on invalid input
`,
  },
  {
    slug: 'frontends-that-respect-budgets',
    title: 'Frontends that respect budgets',
    published: '2024-04-18',
    summary: 'Route-level size limits, image discipline, and perf metrics beyond TTI.',
    content: `
### Checklist
- Enforce \`size-limit\` per route
- Ship modern image formats with responsive sources
- Preload fonts and measure INP, not just TTI

### Outcome
React apps that stay fast on mid-tier devices.

### size-limit example
\`\`\`js
module.exports = [
  {
    path: 'dist/assets/home.js',
    limit: '180 KB',
  },
  {
    path: 'dist/assets/blog.js',
    limit: '140 KB',
  },
];
\`\`\`

### Asset habits
- Use \`import img from "./asset.avif"\` to let Vite optimize
- Lazy-load non-critical routes with \`React.lazy\`
- Watch INP and CLS in addition to LCP
`,
  },
];
