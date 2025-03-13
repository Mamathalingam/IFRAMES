function changeFrameColor(color) {
    document.getElementById('content_frame').srcdoc = `
        <body style="margin:0; background-color:${color}; display:flex; align-items:center; justify-content:center; height:100vh; color:white; font-size:24px;">
            <h2>${color === 'red' ? 'Task 1' : color === 'green' ? 'Task 2' : 'Task 3'}</h2>
        </body>
    `;
}