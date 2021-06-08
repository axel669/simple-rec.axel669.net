<script>
    import Button from "svelte-doric/core/button"
    import Icon from "svelte-doric/core/icon"

    import fixDuration from "../util/fix-duration.js"

    let videoElement = null
    let recorder = null
    let rawVideoChunks = null

    let url = null
    let startTime = 0
    const startRecording = async () => {
        const contentStream = await navigator.mediaDevices.getDisplayMedia(
            {mediaSource: "screen"}
        )

        url = null

        rawVideoChunks = []
        recorder = new MediaRecorder(
            contentStream,
            {mimeType: "video/webm;codecs=vp9"}
        )
        recorder.addEventListener(
            "dataavailable",
            (evt) => rawVideoChunks.push(evt.data)
        )
        recorder.addEventListener(
            "stop",
            async () => {
                const endTime = Date.now()
                const rawBlob = new Blob(
                    rawVideoChunks,
                    {type: rawVideoChunks[0].type}
                )
                const correctedBlob = await new Promise(
                    resolve => fixDuration(
                        rawBlob,
                        endTime - startTime,
                        resolve
                    )
                )
                url = URL.createObjectURL(correctedBlob)
                videoElement.src = url
            }
        )
        startTime = Date.now()
        recorder.start()
    }
</script>

<style>
    comp-layout {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content auto;
        height: 100%;
    }

    menu-area {
        display: flex;
        align-items: center;
    }

    a {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: var(--secondary);
    }

    video-area {
        display: grid;
        position: relative;
    }
    video-area.hide {
        display: none;
    }
    video {
        position: absolute;
        width: 100%;
        height: 100%;
        border-width: 0px;
        object-fit: contain;
    }
</style>

<comp-layout>
    <menu-area>
        <Button on:tap={startRecording}>
            <Icon name="videocam" />
            Record
        </Button>

        {#if url !== null}
            <a href={url} download="recording-{startTime}.webm">
                <Icon name="file_download" />
                Download
            </a>
        {/if}
    </menu-area>

    <video-area class:hide={url === null}>
        <video bind:this={videoElement} controls />
    </video-area>
</comp-layout>
