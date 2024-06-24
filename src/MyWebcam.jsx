import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import { upload } from './uploadApi';

export default function MyWebcam({ url }) {
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [capturing, setCapturing] = useState(false);

    const startRec = useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream);
        mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
        mediaRecorderRef.current.start(3000);
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = useCallback(({ data }) => {
        upload(url, [data]);
    }, []);

    const stopRec = useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);

    return (
        <>
            <Webcam audio={true} ref={webcamRef} mirrored={true} /><br />
            {capturing ? <button onClick={stopRec}>stop recording</button> : <button onClick={startRec}>start recording</button>}
        </>
    );
};