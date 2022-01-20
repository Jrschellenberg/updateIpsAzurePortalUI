/**
 * 
 * @param {array} ips - A String Array of IP Addresses to Add 
 */
async function saveIPs(ips) {
    function assignIP(ip, index) {
        function update(text, elem) {
            elem.value = '';
            elem.focus()

            document.execCommand('insertText', false, text);
        }


        const table = document.querySelectorAll('.azc-grid-full tbody.azc-grid-editableRow-addSection')[0];

        const inputs = table.querySelectorAll('tr:first-child input')

        const ruleName = inputs[0];
        const startIp = inputs[1];
        const endIP = inputs[2];

        update(`ip_${index}`, ruleName);
        update(ip, startIp);
        update(ip, endIP);

        ['blur', 'change', 'focus', 'input', 'keydown', 'pseudoblur', 'pseudofocus'].forEach(event => {
                console.log("Dispatching", event);
                $(endIP).trigger(event)
            }); 
    }

    const wait = (time) => {
        return new Promise(resolve => {
            setTimeout(() => resolve(), time)
        })
    }


    // const saveElem = document.querySelector('li[title="Save"] div:first-child');

    for(let i = 0; i< ips.length; i++) {
        const ip = ips[i];

        assignIP(ip, i);
        await wait(500);
        console.log("Waited!");
        document.querySelector('li[title="Add client IP"] div').click()
        await wait(1500);
        console.log("wait 1.5 sec");
    }

}




