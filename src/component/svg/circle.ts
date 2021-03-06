import { SVGBaseElement } from './abstract/svg-base-element.js'

export class Circle extends SVGBaseElement {
  constructor(radius: number, params: Partial<{ borderColor: string }> = {}) {
    super('circle')
    const BORDER_WIDTH = 1
    this.element.setAttribute('r', String(radius - BORDER_WIDTH))

    this.element.setAttribute('cx', '50%')
    this.element.setAttribute('cy', '50%')
    // TODO: remove hard-coded `100`
    this.element.setAttribute('transform', 'rotate(-90) translate(-100)')
    this.element.setAttribute('fill', 'transparent')
    this.element.setAttribute('stroke', params.borderColor || 'black')
  }

  public setRotateAnimation(
    _params: Record<'intervalInSeconds' | 'delayInSeconds' | 'from' | 'to', number>,
  ): SVGBaseElement {
    console.error('NOT_IMPLEMENTED')
    return this
  }
}
