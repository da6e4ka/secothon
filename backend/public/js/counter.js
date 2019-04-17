function counterReq() {
    $.ajax({
        url: '/counter/',
        success: function (count) {
            let [ users, projects ] = count.split(' ');
            document.getElementById('user-counter').innerText = (users !== '0' ? users : "Нет") + ' ' + counterDeclensionByCases(users, 'user');
            document.getElementById('project-counter').innerText = (projects !== '0' ? projects : "Нет") + ' ' + counterDeclensionByCases(projects, 'project');
        },
        error: function (err) {
            console.error("AJAX ERROR (user count)", err)
        }
    })
}

function counterDeclensionByCases(number, type='user') {
    number = number * 1;
    number = number > 20 ? number % 10 : number;
    switch (number) {
        case 1:
            return {
                user: "участник",
                project: "проект",
            }[type];
        case 2:
        case 3:
        case 4:
            return {
                user: "участника",
                project: "проекта",
            }[type];
        default:
            return {
                user: "участников",
                project: "проектов",
            }[type]
    }
}


function initCounters() {
    let seconds = 30;
    counterReq();

    setInterval(counterReq, seconds * 1000);
}