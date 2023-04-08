chrome.storage.sync.get(
    { settingJSON : '[]' },
    (items) => {
        const setting_json = JSON.parse(items.settingJSON);

        for (let i in setting_json) {
            const site = setting_json[i]['site'];

            if (location.host !== site) {
                continue;
            }

            const titles = setting_json[i]['title'];

            ell = document.getElementsByTagName("a");

            for (let entry of ell) {
                for (let title of titles) {
                    if (entry.text.includes(title)) {
                        entry.text = "+++" + entry.text;
                        break;
                    }
                }
            }
        }
    }
);

// if (location.host === "example.com")
// {
//     document.body.style.backgroundColor = "yellow";

//     var someText = document.body.getElementsByTagName("h1");
//     console.log(someText);

//     var targetHTML = document.body.getElementsByTagName("h1")[0].innerHTML;
//     document.body.getElementsByTagName("h1")[0].innerHTML = targetHTML.replace("Example", "<u>Example</u>");

//     console.log("======");
//     var someText = document.body.getElementsByTagName("h1");
//     console.log(someText);

// }
