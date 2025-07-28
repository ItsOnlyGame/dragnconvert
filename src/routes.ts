import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  index('routes/index.tsx'),

  layout('routes/layout.tsx', [
    route('/jpg-to-png', 'routes/converters/jpg-to-png.tsx'),
    route('/png-to-jpg', 'routes/converters/png-to-jpg.tsx'),
  ]),
] satisfies RouteConfig
