const red = document.querySelector("#red"),
    green = document.querySelector("#green"),
    blue = document.querySelector("#blue"),
    red_out = document.querySelector("#red_out"),
    green_out = document.querySelector("#green_out"),
    blue_out = document.querySelector("#blue_out"),
    result = document.querySelector("#colorResult"),
    hex_out = document.querySelector("#hex");

//menjaem cvet boljshogo kvadrata

function setColor() {
    const red_hex = parseInt(red.value).toString(16),
        green_hex = parseInt(green.value).toString(16),
        blue_hex = parseInt(blue.value).toString(16),
        hex = "#" + format(red_hex) + format(green_hex) + format(blue_hex);
    result.style.backgroundColor = hex;
    hex_out.value = hex; // perevodim v 16-ti richnuju sistemu
}

function format(n) {
    return n.length < 2 ? "0" + n : n;
}

red.onchange = function() {
    setColor();
    red_out.value = red.value;
};

green.onchange = function() {
    setColor();
    green_out.value = green.value;
};

blue.onchange = function() {
    setColor();
    blue_out.value = blue.value;
};

red.oninput = function() {
    // paraleljno menjaet cvet kak dvigaem begunok
    setColor();
    red_out.value = red.value;
};

green.oninput = function() {
    setColor();
    green_out.value = green.value;
};

blue.oninput = function() {
    setColor();
    blue_out.value = blue.value;
};