import React, { useState } from 'react'
import MyWebcam from './MyWebcam'

export default function App() {
    const [url, setUrl] = useState(localStorage.getItem('webcamUrl') || '');
    function inputChange(e) {
        setUrl(e.target.value);
        localStorage.setItem('webcamUrl', e.target.value);
    }

    return (
        <>
            <div><input type='text' value={url} onChange={inputChange} style={{ width: '100%', marginBottom: "10px" }} /></div>
            {url && <MyWebcam url={url} />}
        </>
    )
}
