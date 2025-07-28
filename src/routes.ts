import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  index('routes/index.tsx'),
  layout('routes/full-layout.tsx', [route('*', './routes/not-found.tsx')]),
  layout('routes/convert-layout.tsx', [

    route('/to-jpg', 'routes/converters/convert-to-jpg.tsx'),
    route('/to-png', 'routes/converters/convert-to-png.tsx'),
  ]),
] satisfies RouteConfig
