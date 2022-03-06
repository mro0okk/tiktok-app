import "./SkeletonVideo.scss"

function SkeletonVideo({ width }) {
  return (
    <div className="skeleton__container w-10" style={{ width: `${width}px` }}>
      <div className="skeleton__container--left w-1">
        <div className="skeleton-cirle"></div>
      </div>
      <div className="skeleton__container--right w-6">
        <div className="skeleton-strip w-5"></div>
        <div className="skeleton-strip w-3"></div>
        <div className="skeleton-strip w-10"> </div>
        <div className="skeleton-strip w-10"> </div>
      </div>
    </div>
  )
}

export default SkeletonVideo
