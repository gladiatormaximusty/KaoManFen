window.onload = function () {
    //https Setting
    const targetProtocol = "https:";
    console.log(window.location.protocol)

    if (window.location.protocol !== targetProtocol){
        window.location.href = targetProtocol + window.location.href.substring(window.location.protocol.length);
    }

    document.querySelectorAll('.shield-box').forEach(s => s.remove());
    //tape Node
    const targetNodes = document.querySelectorAll('.tape-content');

    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };

    for (let targetNode of targetNodes) {
            document.querySelectorAll('.do-exercise').forEach(index => {
                index.classList.remove('disabled')
            });
    }
}();