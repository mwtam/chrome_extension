chrome.storage.sync.get(
    { settingJSON : '[]' },
    (items) => {
        const setting_json = JSON.parse(items.settingJSON);

        for (let i in setting_json) {
            const site = setting_json[i]['site'];

            if (location.host !== site) {
                continue;
            }

            const class_name = setting_json[i]['class_name'];
            const titles = setting_json[i]['title'];

            ell = document.getElementsByClassName(class_name);

            for (let entry of ell) {
                for (let title of titles) {
                    if (entry.innerText.includes(title)) {
                        for (let child of entry.childNodes)
                        {
                            child.text = "+++" + child.text;
                        }
                        console.log(entry.innerHTML);
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
