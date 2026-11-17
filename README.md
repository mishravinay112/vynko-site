# Vynko: free screen recorder and screenshot extension

Vynko is a free Chrome and Microsoft Edge extension for screen recording and screenshots. It has no servers, no accounts, no ads and no watermark, and it makes no network requests. Captures stay on your device.

Install from the [Chrome Web Store](https://chromewebstore.google.com/detail/vynko-screen-recorder-scr/kknnimejmjhonepakiplgocadldibhmc).

## Features

- Screenshots of the visible area, the full scrolling page (lazy-loaded content, sticky headers, inner scrolling panels), a selected area, another window or the whole screen, saved as PNG, JPG or WebP, or copied to the clipboard
- Recording of a tab, part of a tab, a window or the full screen, with tab audio, microphone, a round webcam bubble in the corner you pick, pause and resume, click highlighting, a countdown, an optional time limit and crash recovery
- Export as WebM, MP4 or GIF at 720p, 1080p or 4K
- A video editor in the browser: select any part down to the frame, then cut it, mute it, or add music or a layer to just that part; image and video layers, a watermark, background music, undo and redo
- The webcam is its own layer: move, resize or remove it after recording. Save original always downloads the untouched recording and the webcam file
- Annotation with arrows, boxes, circles, lines, text, a highlighter, numbered steps and stickers, plus blur, one-click blur of emails and phone numbers, crop and undo
- Capture timer, custom file names and a download folder
- Keyboard shortcuts: Alt+Shift+V (visible area), Alt+Shift+F (full page), Alt+Shift+A (selected area), Alt+Shift+R (start or stop tab recording)
- Light and dark themes, screen reader support, 30 languages

## Privacy

The developer runs no servers for Vynko, so there is nowhere for data to be sent. The extension has no analytics, ads or tracking, and loads no code or fonts from the internet. The manifest requests no host permissions and sets a content security policy that only allows connections to local blob and data URLs.

Three links open a web page in a browser tab: the donate link and the review link when clicked, and an optional feedback form on Google Forms that opens when you uninstall.

To check it yourself, inspect the extension popup, open the Network tab, then take a screenshot and record a clip. Nothing appears.

Permissions: `activeTab`, `scripting`, `tabCapture`, `offscreen`, `downloads`, `storage`, `desktopCapture`.

## Contact

Vinay Mishra, mishravinay112@gmail.com
