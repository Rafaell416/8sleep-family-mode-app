import { Dimensions, PixelRatio } from 'react-native'

enum DIMENSION {
  'width' = 'width',
  'height' = 'height',
}

interface WindowSize {
  width: number
  height: number
}

const DEFAULT_WINDOW_SIZE: WindowSize = {
  width: 360,
  height: 640,
}

/**
 * @returns The current window size of the device.
 * If the window size can't be retrieved, returns the DEFAULT_WINDOW_SIZE.
 *
 * @example
 * ```
 * import { viewportSize } from '@level/util'
 *
 * const windowSize = viewportSize()
 * console.log(windowSize)
 * // Output: { width: 360, height: 640 }
 * ```
 */
export const viewportSize = (): WindowSize => {
  const window = Dimensions.get('window')
  return {
    width: window.width || DEFAULT_WINDOW_SIZE.width,
    height: window.height || DEFAULT_WINDOW_SIZE.height,
  }
}

/**
 * Scales the value based on the dimension of the device's window size.
 *
 * @param value - The value to scale.
 * @param dimension - The dimension to scale based on, either 'width' or 'height'.
 *
 * @returns The scaled value.
 *
 * @example
 * ```
 * import { scaleDimension } from '@level/util'
 *
 * const scaledValue = scaleDimension(20, 'width')
 * console.log(scaledValue)
 * // Output: 40
 * ```
 */
export const scaleDimension = (value: number, dimension: DIMENSION) => {
  const viewport = viewportSize()
  return value * (viewport[dimension] / DEFAULT_WINDOW_SIZE[dimension])
}

/**
 * Scales the value based on the width of the device's window size.
 *
 * @param value - The value to scale.
 *
 * @returns The scaled value.
 *
 * @example
 * ```
 * import { scaleWidth } from '@level/util'
 *
 * const scaledValue = scaleWidth(20)
 * console.log(scaledValue)
 * // Output: 40
 * ```
 */
export const scaleWidth = (value: number) =>
  scaleDimension(value, DIMENSION.width)

/**
 * Scales the value based on the height of the device's window size.
 *
 * @param value - The value to scale.
 *
 * @returns The scaled value.
 *
 * @example
 * ```
 * import { scaleHeight } from '@level/util'
 *
 * const scaledValue = scaleHeight(20)
 * console.log(scaledValue)
 * // Output: 40
 * ```
 */
export const scaleHeight = (value: number) =>
  scaleDimension(value, DIMENSION.height)

/**
 * Scales the size according to the width of the screen, then rounds it to the nearest pixel
 *
 * @param {number} size - the size to be normalized
 * @returns {number} the normalized size
 *
 * @example
 *
 * normalize(16)
 *
 * // Returns the rounded value to the nearest pixel of the scaled size according to the width of the screen
 */
export const normalize = (size: number): number => {
  const newSize = scaleWidth(size)
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

/**
 * Scales the size according to the height of the screen, then rounds it to the nearest pixel
 *
 * @param {number} size - the size to be normalized
 * @returns {number} the normalized size
 *
 * @example
 *
 * normalizeHeight(16)
 *
 * // Returns the rounded value to the nearest pixel of the scaled size according to the height of the screen
 */
export const normalizeHeight = (size: number): number => {
  const newSize = scaleHeight(size)
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}