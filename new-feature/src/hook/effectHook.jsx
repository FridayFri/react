import React, { useEffect, useState } from 'react';
function EffectHookDemo() {
  const [count, setCount] = useState(0)
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = () => {
    setSize({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    })
  }
  useEffect(() => {
    document.title = count
  })
  //控制 useEffect 执行
  // 只有数组每一项都不变的情况 useEffect 才不会执行
  useEffect(() => {
    window.addEventListener('resize', onResize)
    // unMOUNT
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [count])
  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
    >
      click: {count}
      size: {size.width} x{size.height}
    </button>
  )
}

export default EffectHookDemo