<>
<div>
<div className={clsx(style.itemContainer)}>
<div
            className={clsx(style.videoThumbnail)}
            onMouseEnter={handleShow}
            onMouseLeave={handleShowOff}
          >
{/_ <img
              src={post.videoInfo.thumb}
              alt="thumb"
              className={style.videoThumbnailItem}
            />
{isShowing && <Add data={post} type="info" />} _/}
</div>
<div className={style.videoContainer}>
<div className={style.TextInfoContainer}>
<div className={style.videoAuthor}>
{/_ <h2>
<div className="none740">
<img
                      src={post.videoInfo.thumb}
                      className={style.avatarAnchor}
                      alt="img"
                    />
</div>{" "}
{post.author.name}
</h2>{" "} _/}
{/_ <h5>{post.author.subName}</h5>
<div className={style.videoDes}>{post.description}</div>
<div className={style.videoSong}>{post.videoInfo.song}</div> _/}
{/_ <BtnFollow top="28px" right="0" padding="0 10px" /> _/}
</div>
</div>
<div className={style.videoWrapper}>
<div className={style.videoItem}>

                {/* <Video
                  data={post.videoURL}
                  likeCount={post.likeCount}
                  videoSite={post.videoSite}
                  id={post.id}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
