const img = document.getElementById("cookie");

function changeImgSize() {
    img.width = 260;
    img.height = 166;
};

img.onclick = changeImgSize; even = true;                  
            
img.onclick = function() {
    if (even) {
        this.style.zoom = "2";
        even = false;
        } else {
            this.style.zoom = "1";
            even = true;
            }
    
        const clicks = document.getElementById("clicker__counter");
        clicks.textContent ++;
};

         
