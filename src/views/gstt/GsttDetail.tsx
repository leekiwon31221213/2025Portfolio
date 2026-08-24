import styles from '/assets/scss/views/gstt/GsttDetail.module.scss'
import mediaStyles from '/assets/scss/views/gstt/GsttDetailMedia.module.scss'

const GsttDetail = () => {
  return (
    <h1
      className={`${styles['gstt-detail-page']} ${mediaStyles['gstt-detail-page']} ${styles['root']} ${mediaStyles['root']}`}
    >
      디테일 페이지 만드는중 (쉬엄쉬엄..)
    </h1>
  )
}

export default GsttDetail
