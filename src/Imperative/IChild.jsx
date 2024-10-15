import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

 const IChild = forwardRef((props, ref) => {
    const {triggerFunction} = props;
    console.log("ref",ref,props);
    const videoRef = useRef(null);


    const handlePlay = () => {
        videoRef.current.play();
    }



    // Using useEffect to pass playVideo function to parent
  useEffect(() => {
    console.log('Call triggerFunction');
    if (triggerFunction) {
      triggerFunction(() => handlePlay);  // Passing playVideo function to parent
    }
  }, [triggerFunction]);


    useImperativeHandle(ref,(e)=>({
       
        handleStart (){
            console.log("start");
            handlePlay()
        },
        handleStop (){
            console.log("Stop");
            videoRef.current.pause  ();
        }
    }))


  return (
    <div>
      <h2>Video Player</h2>
      <video ref={videoRef} width="400" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
});

export default IChild;