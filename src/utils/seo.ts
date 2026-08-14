import type { RouteMeta } from 'vue-router'

type SeoData = {
  title: string
  description: string
  canonical: string
  image: string
}

const defaultSeo: SeoData = {
  title: '프론트엔드 개발자 이기원 포트폴리오',
  description:
    '프론트엔드 개발자 이기원의 2025 포트폴리오입니다. 웹 퍼블리싱과 프론트엔드 프로젝트, 경력, 기술, 협업 경험을 한눈에 볼 수 있습니다.',
  canonical: 'https://kiwon2025portfolio.netlify.app/',
  image: 'https://kiwon2025portfolio.netlify.app/og.jpg',
}

//  메타 태그 찾기
const getMetaElement = (selector: string) => {
  return document.head.querySelector<HTMLMetaElement>(selector)
}

//  메타 태그 만들기
const createMetaElement = (type: string, key: string, value: string) => {
  const metaElement = document.createElement('meta')

  metaElement.setAttribute(type, key)
  metaElement.setAttribute('content', value)

  document.head.appendChild(metaElement)

  return metaElement
}

//  메타 태그 중복 지우기
const removeDuplicateMetaElements = (selector: string) => {
  const metaElements = document.head.querySelectorAll(selector)

  metaElements.forEach((metaElement, index) => {
    if (index > 0) {
      metaElement.remove()
    }
  })
}

//  메타 태그 넣기
const setMetaContent = (type: string, key: string, value: string) => {
  const selector = `meta[${type}="${key}"]`
  const metaElement = getMetaElement(selector) || createMetaElement(type, key, value)

  metaElement.setAttribute('content', value)
}

//  링크 태그 찾기
const getLinkElement = (relValue: string) => {
  return document.head.querySelector<HTMLLinkElement>(`link[rel="${relValue}"]`)
}

//  링크 태그 중복 지우기
const removeDuplicateLinkElements = (selector: string) => {
  const linkElements = document.head.querySelectorAll(selector)

  linkElements.forEach((linkElement, index) => {
    if (index > 0) {
      linkElement.remove()
    }
  })
}

//  링크 태그 넣기
const setLinkHref = (relValue: string, hrefValue: string) => {
  const linkElement = getLinkElement(relValue) || document.createElement('link')

  linkElement.setAttribute('rel', relValue)
  linkElement.setAttribute('href', hrefValue)

  if (!linkElement.parentNode) {
    document.head.appendChild(linkElement)
  }
}

//  SEO 태그 정리하기
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

//  페이지 SEO 넣기
export const applySeo = (routeMeta: RouteMeta = {}) => {
  const title = typeof routeMeta.title === 'string' ? routeMeta.title : defaultSeo.title
  const description =
    typeof routeMeta.description === 'string' ? routeMeta.description : defaultSeo.description
  const canonical =
    typeof routeMeta.canonical === 'string' ? routeMeta.canonical : defaultSeo.canonical
  const image = typeof routeMeta.image === 'string' ? routeMeta.image : defaultSeo.image

  cleanupSeoElements()

  document.title = title

  setMetaContent('name', 'description', description)
  setMetaContent('name', 'robots', 'index, follow')
  setMetaContent('property', 'og:title', title)
  setMetaContent('property', 'og:description', description)
  setMetaContent('property', 'og:url', canonical)
  setMetaContent('property', 'og:image', image)
  setMetaContent('name', 'twitter:title', title)
  setMetaContent('name', 'twitter:description', description)
  setMetaContent('name', 'twitter:image', image)
  setLinkHref('canonical', canonical)
}
