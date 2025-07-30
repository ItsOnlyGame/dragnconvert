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
    route('/to-jpg', 'routes/converters/image/to-jpg.tsx'),
    route('/to-png', 'routes/converters/image/to-png.tsx'),
    route('/to-webp', 'routes/converters/image/to-webp.tsx'),

    // Video
    route('/to-mp4', 'routes/converters/video/to-mp4.tsx'),
    route('/to-mkv', 'routes/converters/video/to-mkv.tsx'),
    route('/to-flv', 'routes/converters/video/to-flv.tsx'),
    route('/to-avi', 'routes/converters/video/to-avi.tsx'),

    // Audio
    route('/to-mp3', 'routes/converters/audio/to-mp3.tsx'),
  ]),
] satisfies RouteConfig
