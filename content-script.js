if (location.host === "example.com")
{
    var someText = document.body.getElementsByTagName("h1");
    console.log(someText);

    document.body.style.backgroundColor = "yellow";
    var targetHTML = document.body.getElementsByTagName("h1")[0].innerHTML;
    document.body.getElementsByTagName("h1")[0].innerHTML = targetHTML.replace("Example", "<u>Example</u>");

    console.log("======");
    var someText = document.body.getElementsByTagName("h1");
    console.log(someText);

}

if (location.host === "www.manhuagui.com")
{
    const manga = [
        "影宅",
        "旅馆生活・吸血鬼",
        "如积雪般的永寂",
        "葬送者芙莉莲",
        "琉璃Dragon",
        "说着「请将我的孩子杀死」的父母们",
        "飞翔的魔女",
        "吃货女仆",
        "笔与手铐与事实婚姻",
        "迷宫饭",
        "JK除灵师小茜",
        "食粮人类RE",
    ];

    // document.body.style.backgroundColor = "blue";
    ell = document.getElementsByClassName("ell")
    console.log(ell[0].innerText);
    for (let i in ell)
    {
        if (manga.includes(ell[i].innerText))
        {
            ell[i].innerText = "+++" + ell[i].innerText;
        }
    }
}