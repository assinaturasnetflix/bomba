// src/components/Icon.js
import { React, e } from '../react-imports';

function Icon({ icon: IconComponent, size = 24, className = '', color }) {
  return e(IconComponent, { size, className, color });
}

export default Icon;
