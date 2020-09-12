var images = [];

function MyImage(name, description) {
    this.Name = name;
    this.Description = description;
}

images.push(new MyImage("A", "Hoa"));
images.push(new MyImage("B", "Tháp Eiffel"));
images.push(new MyImage("C", "Ruộng bậc thang"));
images.push(new MyImage("D", "Nuôi trồng thủy sản"));
images.push(new MyImage("E", "Ruộng bậc thang"));
images.push(new MyImage("F", "Núi"));

var imgs_display = document.getElementsByClassName("img-list")

var count = 0
var interval = setInterval(function () {
    document.getElementById("img").src = "./Image/" + images[count].Name + ".jpeg";
    document.getElementById("description").textContent = images[count++].Description
    if (count == imgs_display.length) {
        clearInterval(interval);
        console.log("Dừng vòng lặp rồi nhá!")
    }
}, 1000)