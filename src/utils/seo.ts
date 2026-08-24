export type SeoData = {
  title?: string
  description?: string
  canonical?: string
  image?: string
  robots?: string
}

const defaultSeo: Required<SeoData> = {
  title: '프론트엔드 개발자 이기원 | React 포트폴리오 · 웹퍼블리셔',
  description:
    '프론트엔드 개발자 이기원의 React 포트폴리오입니다. React와 TypeScript 기반 프론트엔드 프로젝트, 웹 퍼블리싱 및 반응형 웹 경험을 소개합니다.',
  canonical: 'https://kiwon2025portfolio.netlify.app/',
  image: 'https://kiwon2025portfolio.netlify.app/og.jpg',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1',
}

// 메타 태그 검색
const getMetaElement = (selector: string) => {
  return document.head.querySelector<HTMLMetaElement>(selector)
}

// 메타 태그 생성
const createMetaElement = (type: string, key: string, value: string) => {
  const metaElement = document.createElement('meta')

  metaElement.setAttribute(type, key)
  metaElement.setAttribute('content', value)

  document.head.appendChild(metaElement)

  return metaElement
}

// 메타 태그 중복 제거
const removeDuplicateMetaElements = (selector: string) => {
  const metaElements = document.head.querySelectorAll(selector)

  metaElements.forEach((metaElement, index) => {
    if (index > 0) {
      metaElement.remove()
    }
  })
}

// 메타 태그 추가
const setMetaContent = (type: string, key: string, value: string) => {
  const selector = `meta[${type}="${key}"]`
  const metaElement = getMetaElement(selector) || createMetaElement(type, key, value)

  metaElement.setAttribute('content', value)
}

// 링크 태그 검색
const getLinkElement = (relValue: string) => {
  return document.head.querySelector<HTMLLinkElement>(`link[rel="${relValue}"]`)
}

// 링크 태그 중복 제거
const removeDuplicateLinkElements = (selector: string) => {
  const linkElements = document.head.querySelectorAll(selector)

  linkElements.forEach((linkElement, index) => {
    if (index > 0) {
      linkElement.remove()
    }
  })
}

// 링크 태그 추가
const setLinkHref = (relValue: string, hrefValue: string) => {
  const linkElement = getLinkElement(relValue) || document.createElement('link')

  linkElement.setAttribute('rel', relValue)
  linkElement.setAttribute('href', hrefValue)

  if (!linkElement.parentNode) {
    document.head.appendChild(linkElement)
  }
}

// SEO 태그 정리
const cleanupSeoElements = () => {
  removeDuplicateMetaElements('meta[name="description"]')
  removeDuplicateMetaElements('meta[name="robots"]')
  removeDuplicateMetaElements('meta[property="og:title"]')
  removeDuplicateMetaElements('meta[property="og:description"]')
  removeDuplicateMetaElements('meta[property="og:url"]')
  removeDuplicateMetaElements('meta[property="og:image"]')
  removeDuplicateMetaElements('meta[name="twitter:title"]')
  removeDuplicateMetaElements('meta[name="twitter:description"]')
  removeDuplicateMetaElements('meta[name="twitter:image"]')
  removeDuplicateLinkElements('link[rel="canonical"]')
}

// 페이지별 SEO 적용
export const applySeo = (routeMeta: SeoData = {}) => {
  const title = typeof routeMeta.title === 'string' ? routeMeta.title : defaultSeo.title
  const description =
    typeof routeMeta.description === 'string' ? routeMeta.description : defaultSeo.description
  const canonical =
    typeof routeMeta.canonical === 'string' ? routeMeta.canonical : defaultSeo.canonical
  const image = typeof routeMeta.image === 'string' ? routeMeta.image : defaultSeo.image
  const robots = typeof routeMeta.robots === 'string' ? routeMeta.robots : defaultSeo.robots

  cleanupSeoElements()

  document.title = title

  setMetaContent('name', 'description', description)
  setMetaContent('name', 'robots', robots)
  setMetaContent('property', 'og:title', title)
  setMetaContent('property', 'og:description', description)
  setMetaContent('property', 'og:url', canonical)
  setMetaContent('property', 'og:image', image)
  setMetaContent('name', 'twitter:title', title)
  setMetaContent('name', 'twitter:description', description)
  setMetaContent('name', 'twitter:image', image)
  setLinkHref('canonical', canonical)
}
