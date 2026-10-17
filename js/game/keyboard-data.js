// Stardew Valley: Typing Edition - Virtual Keyboard & Anatomical Finger Mapping

export const FINGER_COLORS = {
  'left-pinky': '#ff007f',
  'left-ring': '#ff6600',
  'left-middle': '#ffd600',
  'left-index': '#00ff88',
  'thumb': '#00f6ff',
  'right-index': '#00c8ff',
  'right-middle': '#6366f1',
  'right-ring': '#a855f7',
  'right-pinky': '#f43f5e'
};

export const FINGER_DATA = {
  'left-pinky': { id: 'left-pinky', hand: 'left', nameKey: 'pinky', color: FINGER_COLORS['left-pinky'], label: 'Meñique Izq.' },
  'left-ring': { id: 'left-ring', hand: 'left', nameKey: 'ring', color: FINGER_COLORS['left-ring'], label: 'Anular Izq.' },
  'left-middle': { id: 'left-middle', hand: 'left', nameKey: 'middle', color: FINGER_COLORS['left-middle'], label: 'Medio Izq.' },
  'left-index': { id: 'left-index', hand: 'left', nameKey: 'index', color: FINGER_COLORS['left-index'], label: 'Índice Izq.' },
  'thumb': { id: 'thumb', hand: 'both', nameKey: 'thumb', color: FINGER_COLORS['thumb'], label: 'Pulgares' },
  'right-index': { id: 'right-index', hand: 'right', nameKey: 'index', color: FINGER_COLORS['right-index'], label: 'Índice Der.' },
  'right-middle': { id: 'right-middle', hand: 'right', nameKey: 'middle', color: FINGER_COLORS['right-middle'], label: 'Medio Der.' },
  'right-ring': { id: 'right-ring', hand: 'right', nameKey: 'ring', color: FINGER_COLORS['right-ring'], label: 'Anular Der.' },
  'right-pinky': { id: 'right-pinky', hand: 'right', nameKey: 'pinky', color: FINGER_COLORS['right-pinky'], label: 'Meñique Der.' }
};

// Spanish QWERTY (ISO-ES)
export const KEYBOARD_LAYOUT_ES = [
  // Row 1
  [
    { code: 'Backquote', key: 'º', shiftKey: 'ª', finger: 'left-pinky', width: 1 },
    { code: 'Digit1', key: '1', shiftKey: '!', finger: 'left-pinky', width: 1 },
    { code: 'Digit2', key: '2', shiftKey: '"', finger: 'left-ring', width: 1 },
    { code: 'Digit3', key: '3', shiftKey: '·', finger: 'left-middle', width: 1 },
    { code: 'Digit4', key: '4', shiftKey: '$', finger: 'left-index', width: 1 },
    { code: 'Digit5', key: '5', shiftKey: '%', finger: 'left-index', width: 1 },
    { code: 'Digit6', key: '6', shiftKey: '&', finger: 'right-index', width: 1 },
    { code: 'Digit7', key: '7', shiftKey: '/', finger: 'right-index', width: 1 },
    { code: 'Digit8', key: '8', shiftKey: '(', finger: 'right-middle', width: 1 },
    { code: 'Digit9', key: '9', shiftKey: ')', finger: 'right-ring', width: 1 },
    { code: 'Digit0', key: '0', shiftKey: '=', finger: 'right-pinky', width: 1 },
    { code: 'Minus', key: '\'', shiftKey: '?', finger: 'right-pinky', width: 1 },
    { code: 'Equal', key: '¡', shiftKey: '¿', finger: 'right-pinky', width: 1 },
    { code: 'Backspace', key: 'Borrar', shiftKey: 'Borrar', finger: 'right-pinky', width: 1.8, isSpecial: true }
  ],
  // Row 2
  [
    { code: 'Tab', key: 'Tab', shiftKey: 'Tab', finger: 'left-pinky', width: 1.5, isSpecial: true },
    { code: 'KeyQ', key: 'q', shiftKey: 'Q', finger: 'left-pinky', width: 1 },
    { code: 'KeyW', key: 'w', shiftKey: 'W', finger: 'left-ring', width: 1 },
    { code: 'KeyE', key: 'e', shiftKey: 'E', finger: 'left-middle', width: 1 },
    { code: 'KeyR', key: 'r', shiftKey: 'R', finger: 'left-index', width: 1 },
    { code: 'KeyT', key: 't', shiftKey: 'T', finger: 'left-index', width: 1 },
    { code: 'KeyY', key: 'y', shiftKey: 'Y', finger: 'right-index', width: 1 },
    { code: 'KeyU', key: 'u', shiftKey: 'U', finger: 'right-index', width: 1 },
    { code: 'KeyI', key: 'i', shiftKey: 'I', finger: 'right-middle', width: 1 },
    { code: 'KeyO', key: 'o', shiftKey: 'O', finger: 'right-ring', width: 1 },
    { code: 'KeyP', key: 'p', shiftKey: 'P', finger: 'right-pinky', width: 1 },
    { code: 'BracketLeft', key: '`', shiftKey: '^', finger: 'right-pinky', width: 1 },
    { code: 'BracketRight', key: '+', shiftKey: '*', finger: 'right-pinky', width: 1 },
    { code: 'Enter', key: 'Enter', shiftKey: 'Enter', finger: 'right-pinky', width: 1.3, isSpecial: true }
  ],
  // Row 3 (Home Row)
  [
    { code: 'CapsLock', key: 'Bloq', shiftKey: 'Bloq', finger: 'left-pinky', width: 1.8, isSpecial: true },
    { code: 'KeyA', key: 'a', shiftKey: 'A', finger: 'left-pinky', width: 1, isHome: true },
    { code: 'KeyS', key: 's', shiftKey: 'S', finger: 'left-ring', width: 1, isHome: true },
    { code: 'KeyD', key: 'd', shiftKey: 'D', finger: 'left-middle', width: 1, isHome: true },
    { code: 'KeyF', key: 'f', shiftKey: 'F', finger: 'left-index', width: 1, isHome: true, hasBump: true },
    { code: 'KeyG', key: 'g', shiftKey: 'G', finger: 'left-index', width: 1 },
    { code: 'KeyH', key: 'h', shiftKey: 'H', finger: 'right-index', width: 1 },
    { code: 'KeyJ', key: 'j', shiftKey: 'J', finger: 'right-index', width: 1, isHome: true, hasBump: true },
    { code: 'KeyK', key: 'k', shiftKey: 'K', finger: 'right-middle', width: 1, isHome: true },
    { code: 'KeyL', key: 'l', shiftKey: 'L', finger: 'right-ring', width: 1, isHome: true },
    { code: 'Semicolon', key: 'ñ', shiftKey: 'Ñ', finger: 'right-pinky', width: 1, isHome: true },
    { code: 'Quote', key: '´', shiftKey: '¨', finger: 'right-pinky', width: 1 },
    { code: 'Backslash', key: 'ç', shiftKey: 'Ç', finger: 'right-pinky', width: 1 }
  ],
  // Row 4
  [
    { code: 'ShiftLeft', key: 'Shift', shiftKey: 'Shift', finger: 'left-pinky', width: 1.4, isSpecial: true },
    { code: 'IntlBackslash', key: '<', shiftKey: '>', finger: 'left-pinky', width: 1 },
    { code: 'KeyZ', key: 'z', shiftKey: 'Z', finger: 'left-pinky', width: 1 },
    { code: 'KeyX', key: 'x', shiftKey: 'X', finger: 'left-ring', width: 1 },
    { code: 'KeyC', key: 'c', shiftKey: 'C', finger: 'left-middle', width: 1 },
    { code: 'KeyV', key: 'v', shiftKey: 'V', finger: 'left-index', width: 1 },
    { code: 'KeyB', key: 'b', shiftKey: 'B', finger: 'left-index', width: 1 },
    { code: 'KeyN', key: 'n', shiftKey: 'N', finger: 'right-index', width: 1 },
    { code: 'KeyM', key: 'm', shiftKey: 'M', finger: 'right-index', width: 1 },
    { code: 'Comma', key: ',', shiftKey: ';', finger: 'right-middle', width: 1 },
    { code: 'Period', key: '.', shiftKey: ':', finger: 'right-ring', width: 1 },
    { code: 'Slash', key: '-', shiftKey: '_', finger: 'right-pinky', width: 1 },
    { code: 'ShiftRight', key: 'Shift', shiftKey: 'Shift', finger: 'right-pinky', width: 2.1, isSpecial: true }
  ],
  // Row 5
  [
    { code: 'Space', key: ' ', shiftKey: ' ', finger: 'thumb', width: 7, isSpace: true }
  ]
];

// English US QWERTY
export const KEYBOARD_LAYOUT_EN = [
  // Row 1
  [
    { code: 'Backquote', key: '`', shiftKey: '~', finger: 'left-pinky', width: 1 },
    { code: 'Digit1', key: '1', shiftKey: '!', finger: 'left-pinky', width: 1 },
    { code: 'Digit2', key: '2', shiftKey: '@', finger: 'left-ring', width: 1 },
    { code: 'Digit3', key: '3', shiftKey: '#', finger: 'left-middle', width: 1 },
    { code: 'Digit4', key: '4', shiftKey: '$', finger: 'left-index', width: 1 },
    { code: 'Digit5', key: '5', shiftKey: '%', finger: 'left-index', width: 1 },
    { code: 'Digit6', key: '6', shiftKey: '^', finger: 'right-index', width: 1 },
    { code: 'Digit7', key: '7', shiftKey: '&', finger: 'right-index', width: 1 },
    { code: 'Digit8', key: '8', shiftKey: '*', finger: 'right-middle', width: 1 },
    { code: 'Digit9', key: '9', shiftKey: '(', finger: 'right-ring', width: 1 },
    { code: 'Digit0', key: '0', shiftKey: ')', finger: 'right-pinky', width: 1 },
    { code: 'Minus', key: '-', shiftKey: '_', finger: 'right-pinky', width: 1 },
    { code: 'Equal', key: '=', shiftKey: '+', finger: 'right-pinky', width: 1 },
    { code: 'Backspace', key: 'Backspace', shiftKey: 'Backspace', finger: 'right-pinky', width: 1.8, isSpecial: true }
  ],
  // Row 2
  [
    { code: 'Tab', key: 'Tab', shiftKey: 'Tab', finger: 'left-pinky', width: 1.5, isSpecial: true },
    { code: 'KeyQ', key: 'q', shiftKey: 'Q', finger: 'left-pinky', width: 1 },
    { code: 'KeyW', key: 'w', shiftKey: 'W', finger: 'left-ring', width: 1 },
    { code: 'KeyE', key: 'e', shiftKey: 'E', finger: 'left-middle', width: 1 },
    { code: 'KeyR', key: 'r', shiftKey: 'R', finger: 'left-index', width: 1 },
    { code: 'KeyT', key: 't', shiftKey: 'T', finger: 'left-index', width: 1 },
    { code: 'KeyY', key: 'y', shiftKey: 'Y', finger: 'right-index', width: 1 },
    { code: 'KeyU', key: 'u', shiftKey: 'U', finger: 'right-index', width: 1 },
    { code: 'KeyI', key: 'i', shiftKey: 'I', finger: 'right-middle', width: 1 },
    { code: 'KeyO', key: 'o', shiftKey: 'O', finger: 'right-ring', width: 1 },
    { code: 'KeyP', key: 'p', shiftKey: 'P', finger: 'right-pinky', width: 1 },
    { code: 'BracketLeft', key: '[', shiftKey: '{', finger: 'right-pinky', width: 1 },
    { code: 'BracketRight', key: ']', shiftKey: '}', finger: 'right-pinky', width: 1 },
    { code: 'Backslash', key: '\\', shiftKey: '|', finger: 'right-pinky', width: 1.3 }
  ],
  // Row 3
  [
    { code: 'CapsLock', key: 'Caps', shiftKey: 'Caps', finger: 'left-pinky', width: 1.8, isSpecial: true },
    { code: 'KeyA', key: 'a', shiftKey: 'A', finger: 'left-pinky', width: 1, isHome: true },
    { code: 'KeyS', key: 's', shiftKey: 'S', finger: 'left-ring', width: 1, isHome: true },
    { code: 'KeyD', key: 'd', shiftKey: 'D', finger: 'left-middle', width: 1, isHome: true },
    { code: 'KeyF', key: 'f', shiftKey: 'F', finger: 'left-index', width: 1, isHome: true, hasBump: true },
    { code: 'KeyG', key: 'g', shiftKey: 'G', finger: 'left-index', width: 1 },
    { code: 'KeyH', key: 'h', shiftKey: 'H', finger: 'right-index', width: 1 },
    { code: 'KeyJ', key: 'j', shiftKey: 'J', finger: 'right-index', width: 1, isHome: true, hasBump: true },
    { code: 'KeyK', key: 'k', shiftKey: 'K', finger: 'right-middle', width: 1, isHome: true },
    { code: 'KeyL', key: 'l', shiftKey: 'L', finger: 'right-ring', width: 1, isHome: true },
    { code: 'Semicolon', key: ';', shiftKey: ':', finger: 'right-pinky', width: 1, isHome: true },
    { code: 'Quote', key: '\'', shiftKey: '"', finger: 'right-pinky', width: 1 },
    { code: 'Enter', key: 'Enter', shiftKey: 'Enter', finger: 'right-pinky', width: 1.8, isSpecial: true }
  ],
  // Row 4
  [
    { code: 'ShiftLeft', key: 'Shift', shiftKey: 'Shift', finger: 'left-pinky', width: 2.2, isSpecial: true },
    { code: 'KeyZ', key: 'z', shiftKey: 'Z', finger: 'left-pinky', width: 1 },
    { code: 'KeyX', key: 'x', shiftKey: 'X', finger: 'left-ring', width: 1 },
    { code: 'KeyC', key: 'c', shiftKey: 'C', finger: 'left-middle', width: 1 },
    { code: 'KeyV', key: 'v', shiftKey: 'V', finger: 'left-index', width: 1 },
    { code: 'KeyB', key: 'b', shiftKey: 'B', finger: 'left-index', width: 1 },
    { code: 'KeyN', key: 'n', shiftKey: 'N', finger: 'right-index', width: 1 },
    { code: 'KeyM', key: 'm', shiftKey: 'M', finger: 'right-index', width: 1 },
    { code: 'Comma', key: ',', shiftKey: '<', finger: 'right-middle', width: 1 },
    { code: 'Period', key: '.', shiftKey: '>', finger: 'right-ring', width: 1 },
    { code: 'Slash', key: '/', shiftKey: '?', finger: 'right-pinky', width: 1 },
    { code: 'ShiftRight', key: 'Shift', shiftKey: 'Shift', finger: 'right-pinky', width: 2.8, isSpecial: true }
  ],
  // Row 5
  [
    { code: 'Space', key: ' ', shiftKey: ' ', finger: 'thumb', width: 7, isSpace: true }
  ]
];

// Map lookup helper for quick character to finger and code resolution
export function createKeyCharMap(layoutRows) {
  const map = {};
  for (const row of layoutRows) {
    for (const keyDef of row) {
      if (keyDef.key) {
        map[keyDef.key] = keyDef;
        map[keyDef.key.toLowerCase()] = keyDef;
      }
      if (keyDef.shiftKey) {
        map[keyDef.shiftKey] = keyDef;
      }
    }
  }
  // Accents and variants fallbacks
  const accentsMap = {
    'á': { key: 'a', finger: 'left-pinky', code: 'KeyA' },
    'é': { key: 'e', finger: 'left-middle', code: 'KeyE' },
    'í': { key: 'i', finger: 'right-middle', code: 'KeyI' },
    'ó': { key: 'o', finger: 'right-ring', code: 'KeyO' },
    'ú': { key: 'u', finger: 'right-index', code: 'KeyU' },
    'Á': { key: 'A', finger: 'left-pinky', code: 'KeyA' },
    'É': { key: 'E', finger: 'left-middle', code: 'KeyE' },
    'Í': { key: 'I', finger: 'right-middle', code: 'KeyI' },
    'Ó': { key: 'O', finger: 'right-ring', code: 'KeyO' },
    'Ú': { key: 'U', finger: 'right-index', code: 'KeyU' },
    'à': { key: 'a', finger: 'left-pinky', code: 'KeyA' },
    'è': { key: 'e', finger: 'left-middle', code: 'KeyE' },
    'ã': { key: 'a', finger: 'left-pinky', code: 'KeyA' },
    'õ': { key: 'o', finger: 'right-ring', code: 'KeyO' },
    'ç': { key: 'c', finger: 'right-pinky', code: 'Backslash' }
  };
  return { ...map, ...accentsMap };
}
