import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/index.tsx'),

  route('/jpg-to-png', 'routes/converters/jpg-to-png.tsx'),
  route('/png-to-jpg', 'routes/converters/png-to-jpg.tsx'),
] satisfies RouteConfig
