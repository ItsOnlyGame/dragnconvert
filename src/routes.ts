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
    route('/to-jpg', 'routes/converters/convert-to-jpg.tsx'),
    route('/to-png', 'routes/converters/convert-to-png.tsx'),
    route('/to-webp', 'routes/converters/convert-to-webp.tsx'),

    // Video
    route('/to-mp4', 'routes/converters/convert-to-mp4.tsx'),
    route('/to-mkv', 'routes/converters/convert-to-mkv.tsx'),

    // Audio
    route('/to-mp3', 'routes/converters/convert-to-mp3.tsx'),
  ]),
] satisfies RouteConfig
