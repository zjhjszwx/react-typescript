import React from 'react'
import './style.css'
import classnames from 'classnames'
import { drag } from './interface'
const isMobile = 'ontouchstart' in window
class Drag extends React.Component<drag.DragProps, drag.DragState> {
  private elementWid: number
  private elementHeight: number
  private left: number
  private top: number
  private zIndex: number
  private clientWidth: number
  private clientHeight: number

  private clientX: number
  private clientY: number

  private startX: number
  private startY: number

  private disX: number
  private disY: number

  private _dragStart: () => any
  private _dragMove: () => any
  private _dragEnd: () => any
  constructor(props: drag.DragProps) {
    super(props)
    this.elementWid = props.width || 100
    this.elementHeight = props.height || 100
    this.left = props.left || 0
    this.top = props.top || 0

    this.zIndex = props.zIndex || 0
    this.clientWidth = props.maxWidth || 600
    this.clientHeight = props.maxHeight || 600
    this._dragStart = this.dragStart.bind(this)
    this.state = {
      left: this.left,
      top: this.top
    }
  }
  public dragStart = (ev: drag.TouchEvent): void => {
    const target = ev.target
    if (isMobile && ev.changedTouches) {
      this.startX = ev.changedTouches[0].pageX
      this.startY = ev.changedTouches[0].pageY
    } else {
      this.startX = ev.clientX
      this.startY = ev.clientY
    }
    // @ts-ignore 偏移位置 = 鼠标的初始值 - 元素的offset
    this.disX = this.startX - target.offsetLeft

    // @ts-ignore
    this.disY = this.startY - target.offsetTop

    this.zIndex += 1

    this._dragMove = this.dragMove.bind(this)
    this._dragEnd = this.dragEnd.bind(this)

    if (!isMobile) {
      document.addEventListener('mousemove', this._dragMove, false)
      document.addEventListener('mouseup', this._dragEnd, false)
    }
  }

  public dragMove = (ev: drag.TouchEvent): void => {
    if (isMobile && ev.changedTouches) {
      this.clientX = ev.changedTouches[0].pageX
      this.clientY = ev.changedTouches[0].pageY
    } else {
      this.clientX = ev.clientX
      this.clientY = ev.clientY
    }

    // 元素位置 = 现在鼠标位置 - 元素的偏移值
    let left = this.clientX - this.disX
    let top = this.clientY - this.disY

    if (left < 0) {
      left = 0
    }

    if (top < 0) {
      top = 0
    }

    if (left > this.clientWidth - this.elementWid) {
      left = this.clientWidth - this.elementWid
    }

    if (top > this.clientHeight - this.elementHeight) {
      top = this.clientHeight - this.elementHeight
    }

    this.setState({ left, top })
  }

  public dragEnd(): void {
    const { onDragEnd } = this.props
    document.removeEventListener('mousemove', this._dragMove)
    document.removeEventListener('mouseup', this._dragEnd)

    if (onDragEnd) {
      onDragEnd({
        X: this.startX - this.clientX,
        Y: this.startY - this.clientY
      })
    }
  }
  render() {
    const { className, width = 100, height = 100, zIndex } = this.props
    const { left = 0, top = 0 } = this.state

    const styles: React.CSSProperties = {
      width,
      height,
      left,
      top,
      position: 'relative'
    }

    if (zIndex) {
      styles['zIndex'] = this.zIndex
    }
    const cls = classnames('dragbox', className)

    // const a = 123

    return (
      <div
        className={cls}
        onTouchStart={this._dragStart}
        onTouchMove={this._dragMove}
        onTouchEnd={this._dragEnd}
        onMouseDown={this._dragStart}
        onMouseUp={this._dragEnd}
        style={styles}
      >
        {this.props.children}
      </div>
    )
  }
}

function Demo() {
  return (
    <div style={{ width: 500, height: 500, background: '#aaa' }}>
      <Drag>
        <div style={{ width: 50, height: 50, background: 'red', position: 'absolute' }}>2123</div>
      </Drag>
    </div>
  )
}
export default Demo
