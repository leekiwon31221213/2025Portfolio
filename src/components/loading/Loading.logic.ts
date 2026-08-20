import { nextTick, onBeforeUnmount, onMounted, ref, type SetupContext } from 'vue'

const CANVAS_WIDTH = 1440
const CANVAS_HEIGHT = 900
const WAVE_DURATION = 2800
const WAVE_POINT_GAP = 36

// SVG 파도와 물방울 애니메이션
export const useLoadingWave = (emit: SetupContext['emit']) => {
  const loadingPage = ref<HTMLElement | null>(null)
  const wavePath = ref<SVGPathElement | null>(null)
  const bubbleElements = Array.from({ length: 5 }, () => null as SVGCircleElement | null)

  let animationFrameId = 0
  let animationStartTime = 0
  let canvasWidth = CANVAS_WIDTH
  let canvasHeight = CANVAS_HEIGHT

  const bubbleSettings = [
    { x: 0.16, radius: 25, delay: 0.08, speed: 0.0042, sway: 42 },
    { x: 0.34, radius: 40, delay: 0.2, speed: 0.0032, sway: 58 },
    { x: 0.55, radius: 22, delay: 0.34, speed: 0.0048, sway: 35 },
    { x: 0.73, radius: 48, delay: 0.12, speed: 0.0028, sway: 64 },
    { x: 0.88, radius: 30, delay: 0.42, speed: 0.0038, sway: 46 },
  ]

  // 화면 크기에 맞춰 SVG 크기 조정
  const measureCanvas = () => {
    if (!loadingPage.value) {
      return
    }

    canvasWidth = loadingPage.value.clientWidth
    canvasHeight = loadingPage.value.clientHeight

    const svg = loadingPage.value.querySelector('svg')
    const waterFill = loadingPage.value.querySelector('rect')

    svg?.setAttribute('viewBox', `0 0 ${canvasWidth} ${canvasHeight}`)
    waterFill?.setAttribute('width', `${canvasWidth}`)
    waterFill?.setAttribute('height', `${canvasHeight}`)
  }

  // 프레임마다 수면과 물방울 위치 갱신
  const drawWave = (time: number) => {
    if (!wavePath.value) {
      return
    }

    const elapsedTime = time - animationStartTime
    const progress = Math.min(elapsedTime / WAVE_DURATION, 1)
    const easedProgress = 1 - Math.pow(1 - progress, 3)
    const surfaceY = canvasHeight + 45 - easedProgress * (canvasHeight + 90)
    const waveHeight = Math.max(10, 24 - progress * 10)
    const points: string[] = []

    for (let x = 0; x <= canvasWidth + WAVE_POINT_GAP; x += WAVE_POINT_GAP) {
      const firstWave = Math.sin(x * 0.014 + time * 0.0042) * waveHeight
      const secondWave = Math.sin(x * 0.027 - time * 0.0028) * waveHeight * 0.35
      points.push(`${x},${surfaceY + firstWave + secondWave}`)
    }

    wavePath.value.setAttribute(
      'd',
      `M 0,${canvasHeight} L 0,${points[0].split(',')[1]} L ${points.join(' L ')} L ${canvasWidth},${canvasHeight} Z`,
    )

    bubbleSettings.forEach((bubble, index) => {
      const element = bubbleElements[index]
      if (!element) {
        return
      }

      const bubbleProgress = Math.max(
        0,
        Math.min((progress - bubble.delay) / (1 - bubble.delay), 1),
      )
      const x = canvasWidth * bubble.x + Math.sin(time * bubble.speed + index) * bubble.sway
      const y = canvasHeight + bubble.radius - bubbleProgress * (canvasHeight + bubble.radius * 2)
      const opacity = bubbleProgress > 0 && bubbleProgress < 0.98 ? 1 : 0

      element.setAttribute('cx', `${x}`)
      element.setAttribute('cy', `${y}`)
      element.setAttribute('r', `${bubble.radius}`)
      element.setAttribute('opacity', `${opacity}`)
    })

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(drawWave)
      return
    }

    finishIntro()
  }

  // 인트로 애니메이션 재실행
  const replayIntro = () => {
    cancelAnimationFrame(animationFrameId)
    measureCanvas()
    animationStartTime = performance.now()
    animationFrameId = requestAnimationFrame(drawWave)
  }

  // 인트로 종료 후 포트폴리오 표시
  const finishIntro = () => {
    emit('finished')
  }

  const setBubbleRef = (element: SVGCircleElement | null, index: number) => {
    bubbleElements[index] = element
  }

  const handleResize = () => {
    measureCanvas()
  }

  onMounted(() => {
    nextTick(replayIntro)
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrameId)
    window.removeEventListener('resize', handleResize)
  })

  return {
    bubbleElements,
    loadingPage,
    setBubbleRef,
    wavePath,
  }
}
