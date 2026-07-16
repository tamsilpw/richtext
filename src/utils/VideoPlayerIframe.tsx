import webSDK from '../sdk/web.sdk'

interface VideoPlayerProps {
    type: string
    url: string
    parentId?: string
    secondaryParentId?: string
    childId?: string
    secondaryChildId?: string
    videoType?: string
}

const VideoPlayerComponentWrapper = (props: VideoPlayerProps) => {
    const { type, url, parentId, secondaryParentId, childId, secondaryChildId, videoType } = props

    return (
        <div className={'h-full max-h-[400px] max-w-[600px] mx-auto w-full aspect-video'}>
            <iframe
                src={`${import.meta.env.VITE_VIDEO_PLAYER_URL}?type=${type}&src=${url}&parentId=${parentId}&secondaryParentId=${secondaryParentId}&childId=${childId}&secondaryChildId=${secondaryChildId}&back_button=${false}&three_dots=${false}&vType=${videoType}&came_from=CURIOUS_JUNIOR&is_poll_enabled=false&token=${webSDK?.accessToken}&random_id=${webSDK?.randomId}&isFromCjr=true`}
                frameBorder={'0'}
                allow="accelerometer; autoplay;fullscreen; encrypted-media; gyroscope; picture-in picture"
                style={{ width: '100%', height: '100%', overflow: 'hidden' }}
            />
        </div>
    )
    return <></>
}

export default VideoPlayerComponentWrapper
