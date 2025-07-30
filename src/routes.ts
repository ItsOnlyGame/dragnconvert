import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  layout('routes/full-layout.tsx', [route('*', './routes/not-found.tsx')]),

  layout('routes/convert-layout.tsx', [
    index('routes/index.tsx'),

    // Image
    route('/to-jpg', 'routes/converters/to-jpg.tsx'),
    route('/to-png', 'routes/converters/to-png.tsx'),
    route('/to-webp', 'routes/converters/to-webp.tsx'),

    // Video
    route('/to-mp4', 'routes/converters/to-mp4.tsx'),
    route('/to-mkv', 'routes/converters/to-mkv.tsx'),
    route('/to-flv', 'routes/converters/to-flv.tsx'),

    // Audio
    route('/to-mp3', 'routes/converters/to-mp3.tsx'),
  ]),
] satisfies RouteConfig
